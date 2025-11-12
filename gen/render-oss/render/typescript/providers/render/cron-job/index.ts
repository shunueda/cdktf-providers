// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CronJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of environment variable names to their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#env_vars CronJob#env_vars}
  */
  readonly envVars?: { [key: string]: CronJobEnvVars } | cdktf.IResolvable;
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#environment_id CronJob#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Configure the [log stream override settings](https://render.com/docs/log-streams#overriding-defaults) for this service. These will override the global log stream settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#log_stream_override CronJob#log_stream_override}
  */
  readonly logStreamOverride?: CronJobLogStreamOverride;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#name CronJob#name}
  */
  readonly name: string;
  /**
  * Configure the [notification settings](https://render.com/docs/notifications) for this service. These will override the global notification settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#notification_override CronJob#notification_override}
  */
  readonly notificationOverride?: CronJobNotificationOverride;
  /**
  * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a custom plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#plan CronJob#plan}
  */
  readonly plan: string;
  /**
  * [Region](https://render.com/docs/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`, `virginia`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#region CronJob#region}
  */
  readonly region: string;
  /**
  * When you specify a [root directory](https://render.com/docs/monorepo-support#root-directory), Render runs all your commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#root_directory CronJob#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Source of the build artifacts or image that run your service. You must provide one of [native_runtime](https://render.com/docs/native-runtimes), [docker](https://render.com/docs/docker), or [image](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#runtime_source CronJob#runtime_source}
  */
  readonly runtimeSource: CronJobRuntimeSource;
  /**
  * Cron schedule to run the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#schedule CronJob#schedule}
  */
  readonly schedule: string;
  /**
  * A map of secret file paths to their contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#secret_files CronJob#secret_files}
  */
  readonly secretFiles?: { [key: string]: CronJobSecretFiles } | cdktf.IResolvable;
  /**
  * Command to run the service. When using native runtimes, this will be used as the start command and is required. For [Docker](https://render.com/docs/docker) and [image-backed](https://render.com/docs/deploy-an-image) services, this will override the default Docker command for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#start_command CronJob#start_command}
  */
  readonly startCommand?: string;
}
export interface CronJobEnvVars {
  /**
  * If true, Render will generate the variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#generate_value CronJob#generate_value}
  */
  readonly generateValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#value CronJob#value}
  */
  readonly value?: string;
}

export function cronJobEnvVarsToTerraform(struct?: CronJobEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_value: cdktf.booleanToTerraform(struct!.generateValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cronJobEnvVarsToHclTerraform(struct?: CronJobEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_value: {
      value: cdktf.booleanToHclTerraform(struct!.generateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CronJobEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CronJobEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateValue = this._generateValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generateValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generateValue = value.generateValue;
      this._value = value.value;
    }
  }

  // generate_value - computed: true, optional: true, required: false
  private _generateValue?: boolean | cdktf.IResolvable; 
  public get generateValue() {
    return this.getBooleanAttribute('generate_value');
  }
  public set generateValue(value: boolean | cdktf.IResolvable) {
    this._generateValue = value;
  }
  public resetGenerateValue() {
    this._generateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateValueInput() {
    return this._generateValue;
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

export class CronJobEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CronJobEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CronJobEnvVarsOutputReference {
    return new CronJobEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CronJobLogStreamOverride {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#endpoint CronJob#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to send or drop logs for this service. Must be one of `send` or `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#setting CronJob#setting}
  */
  readonly setting: string;
  /**
  * The token to use when sending logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#token CronJob#token}
  */
  readonly token?: string;
}

export function cronJobLogStreamOverrideToTerraform(struct?: CronJobLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    setting: cdktf.stringToTerraform(struct!.setting),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function cronJobLogStreamOverrideToHclTerraform(struct?: CronJobLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: cdktf.stringToHclTerraform(struct!.setting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobLogStreamOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobLogStreamOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._setting !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobLogStreamOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._setting = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._setting = value.setting;
      this._token = value.token;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // setting - computed: true, optional: false, required: true
  private _setting?: string; 
  public get setting() {
    return this.getStringAttribute('setting');
  }
  public set setting(value: string) {
    this._setting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CronJobNotificationOverride {
  /**
  * The types of notifications to send. Must be one of `default`, `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#notifications_to_send CronJob#notifications_to_send}
  */
  readonly notificationsToSend?: string;
  /**
  * Whether notifications for previews of this service are sent. Must be one of `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#preview_notifications_enabled CronJob#preview_notifications_enabled}
  */
  readonly previewNotificationsEnabled?: string;
}

export function cronJobNotificationOverrideToTerraform(struct?: CronJobNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications_to_send: cdktf.stringToTerraform(struct!.notificationsToSend),
    preview_notifications_enabled: cdktf.stringToTerraform(struct!.previewNotificationsEnabled),
  }
}


export function cronJobNotificationOverrideToHclTerraform(struct?: CronJobNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifications_to_send: {
      value: cdktf.stringToHclTerraform(struct!.notificationsToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview_notifications_enabled: {
      value: cdktf.stringToHclTerraform(struct!.previewNotificationsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobNotificationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobNotificationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationsToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationsToSend = this._notificationsToSend;
    }
    if (this._previewNotificationsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewNotificationsEnabled = this._previewNotificationsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobNotificationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationsToSend = undefined;
      this._previewNotificationsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationsToSend = value.notificationsToSend;
      this._previewNotificationsEnabled = value.previewNotificationsEnabled;
    }
  }

  // notifications_to_send - computed: true, optional: true, required: false
  private _notificationsToSend?: string; 
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }
  public set notificationsToSend(value: string) {
    this._notificationsToSend = value;
  }
  public resetNotificationsToSend() {
    this._notificationsToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsToSendInput() {
    return this._notificationsToSend;
  }

  // preview_notifications_enabled - computed: true, optional: true, required: false
  private _previewNotificationsEnabled?: string; 
  public get previewNotificationsEnabled() {
    return this.getStringAttribute('preview_notifications_enabled');
  }
  public set previewNotificationsEnabled(value: string) {
    this._previewNotificationsEnabled = value;
  }
  public resetPreviewNotificationsEnabled() {
    this._previewNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewNotificationsEnabledInput() {
    return this._previewNotificationsEnabled;
  }
}
export interface CronJobRuntimeSourceDockerBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#ignored_paths CronJob#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#paths CronJob#paths}
  */
  readonly paths?: string[];
}

export function cronJobRuntimeSourceDockerBuildFilterToTerraform(struct?: CronJobRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function cronJobRuntimeSourceDockerBuildFilterToHclTerraform(struct?: CronJobRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceDockerBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredPaths = this._ignoredPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoredPaths = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoredPaths = value.ignoredPaths;
      this._paths = value.paths;
    }
  }

  // ignored_paths - computed: false, optional: true, required: false
  private _ignoredPaths?: string[]; 
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }
  public set ignoredPaths(value: string[]) {
    this._ignoredPaths = value;
  }
  public resetIgnoredPaths() {
    this._ignoredPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPathsInput() {
    return this._ignoredPaths;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
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
}
export interface CronJobRuntimeSourceDocker {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#auto_deploy CronJob#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#auto_deploy_trigger CronJob#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#branch CronJob#branch}
  */
  readonly branch: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#build_filter CronJob#build_filter}
  */
  readonly buildFilter?: CronJobRuntimeSourceDockerBuildFilter;
  /**
  * [Docker build context directory.](https://docs.docker.com/reference/dockerfile/#usage) This is relative to your repository root. Defaults to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#context CronJob#context}
  */
  readonly context?: string;
  /**
  * Path to your Dockerfile relative to the repository root. This is not relative to your Docker build context. Example: `./subdir/Dockerfile.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#dockerfile_path CronJob#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#registry_credential_id CronJob#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#repo_url CronJob#repo_url}
  */
  readonly repoUrl: string;
}

export function cronJobRuntimeSourceDockerToTerraform(struct?: CronJobRuntimeSourceDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_filter: cronJobRuntimeSourceDockerBuildFilterToTerraform(struct!.buildFilter),
    context: cdktf.stringToTerraform(struct!.context),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    registry_credential_id: cdktf.stringToTerraform(struct!.registryCredentialId),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
  }
}


export function cronJobRuntimeSourceDockerToHclTerraform(struct?: CronJobRuntimeSourceDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_deploy_trigger: {
      value: cdktf.stringToHclTerraform(struct!.autoDeployTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_filter: {
      value: cronJobRuntimeSourceDockerBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "CronJobRuntimeSourceDockerBuildFilter",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dockerfile_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.registryCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSourceDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploy = this._autoDeploy;
    }
    if (this._autoDeployTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployTrigger = this._autoDeployTrigger;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFilter = this._buildFilter?.internalValue;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._dockerfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfilePath = this._dockerfilePath;
    }
    if (this._registryCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredentialId = this._registryCredentialId;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSourceDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeploy = undefined;
      this._autoDeployTrigger = undefined;
      this._branch = undefined;
      this._buildFilter.internalValue = undefined;
      this._context = undefined;
      this._dockerfilePath = undefined;
      this._registryCredentialId = undefined;
      this._repoUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeploy = value.autoDeploy;
      this._autoDeployTrigger = value.autoDeployTrigger;
      this._branch = value.branch;
      this._buildFilter.internalValue = value.buildFilter;
      this._context = value.context;
      this._dockerfilePath = value.dockerfilePath;
      this._registryCredentialId = value.registryCredentialId;
      this._repoUrl = value.repoUrl;
    }
  }

  // auto_deploy - computed: true, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // auto_deploy_trigger - computed: true, optional: true, required: false
  private _autoDeployTrigger?: string; 
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }
  public set autoDeployTrigger(value: string) {
    this._autoDeployTrigger = value;
  }
  public resetAutoDeployTrigger() {
    this._autoDeployTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployTriggerInput() {
    return this._autoDeployTrigger;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_filter - computed: false, optional: true, required: false
  private _buildFilter = new CronJobRuntimeSourceDockerBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: CronJobRuntimeSourceDockerBuildFilter) {
    this._buildFilter.internalValue = value;
  }
  public resetBuildFilter() {
    this._buildFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFilterInput() {
    return this._buildFilter.internalValue;
  }

  // context - computed: true, optional: true, required: false
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

  // dockerfile_path - computed: true, optional: true, required: false
  private _dockerfilePath?: string; 
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }
  public set dockerfilePath(value: string) {
    this._dockerfilePath = value;
  }
  public resetDockerfilePath() {
    this._dockerfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfilePathInput() {
    return this._dockerfilePath;
  }

  // registry_credential_id - computed: false, optional: true, required: false
  private _registryCredentialId?: string; 
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }
  public set registryCredentialId(value: string) {
    this._registryCredentialId = value;
  }
  public resetRegistryCredentialId() {
    this._registryCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialIdInput() {
    return this._registryCredentialId;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }
}
export interface CronJobRuntimeSourceImage {
  /**
  * Digest of the Docker image to deploy. Mutually exclusive with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#digest CronJob#digest}
  */
  readonly digest?: string;
  /**
  * URL of the Docker image to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#image_url CronJob#image_url}
  */
  readonly imageUrl: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#registry_credential_id CronJob#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * Tag of the Docker image to deploy. Mutually exclusive with digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#tag CronJob#tag}
  */
  readonly tag?: string;
}

export function cronJobRuntimeSourceImageToTerraform(struct?: CronJobRuntimeSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    registry_credential_id: cdktf.stringToTerraform(struct!.registryCredentialId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function cronJobRuntimeSourceImageToHclTerraform(struct?: CronJobRuntimeSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.registryCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSourceImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._registryCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredentialId = this._registryCredentialId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSourceImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._imageUrl = undefined;
      this._registryCredentialId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._imageUrl = value.imageUrl;
      this._registryCredentialId = value.registryCredentialId;
      this._tag = value.tag;
    }
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // registry_credential_id - computed: false, optional: true, required: false
  private _registryCredentialId?: string; 
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }
  public set registryCredentialId(value: string) {
    this._registryCredentialId = value;
  }
  public resetRegistryCredentialId() {
    this._registryCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialIdInput() {
    return this._registryCredentialId;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface CronJobRuntimeSourceNativeRuntimeBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#ignored_paths CronJob#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#paths CronJob#paths}
  */
  readonly paths?: string[];
}

export function cronJobRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct?: CronJobRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function cronJobRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct?: CronJobRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceNativeRuntimeBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredPaths = this._ignoredPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoredPaths = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoredPaths = value.ignoredPaths;
      this._paths = value.paths;
    }
  }

  // ignored_paths - computed: false, optional: true, required: false
  private _ignoredPaths?: string[]; 
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }
  public set ignoredPaths(value: string[]) {
    this._ignoredPaths = value;
  }
  public resetIgnoredPaths() {
    this._ignoredPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPathsInput() {
    return this._ignoredPaths;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
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
}
export interface CronJobRuntimeSourceNativeRuntime {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#auto_deploy CronJob#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#auto_deploy_trigger CronJob#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#branch CronJob#branch}
  */
  readonly branch: string;
  /**
  * Command to build the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#build_command CronJob#build_command}
  */
  readonly buildCommand: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#build_filter CronJob#build_filter}
  */
  readonly buildFilter?: CronJobRuntimeSourceNativeRuntimeBuildFilter;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#repo_url CronJob#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Runtime of the service to use. Must be one of `elixir`, `go`, `node`, `python`, `ruby`, `rust`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#runtime CronJob#runtime}
  */
  readonly runtime: string;
}

export function cronJobRuntimeSourceNativeRuntimeToTerraform(struct?: CronJobRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    build_filter: cronJobRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct!.buildFilter),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}


export function cronJobRuntimeSourceNativeRuntimeToHclTerraform(struct?: CronJobRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_deploy_trigger: {
      value: cdktf.stringToHclTerraform(struct!.autoDeployTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_command: {
      value: cdktf.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_filter: {
      value: cronJobRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "CronJobRuntimeSourceNativeRuntimeBuildFilter",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceNativeRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploy = this._autoDeploy;
    }
    if (this._autoDeployTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployTrigger = this._autoDeployTrigger;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._buildFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFilter = this._buildFilter?.internalValue;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeploy = undefined;
      this._autoDeployTrigger = undefined;
      this._branch = undefined;
      this._buildCommand = undefined;
      this._buildFilter.internalValue = undefined;
      this._repoUrl = undefined;
      this._runtime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeploy = value.autoDeploy;
      this._autoDeployTrigger = value.autoDeployTrigger;
      this._branch = value.branch;
      this._buildCommand = value.buildCommand;
      this._buildFilter.internalValue = value.buildFilter;
      this._repoUrl = value.repoUrl;
      this._runtime = value.runtime;
    }
  }

  // auto_deploy - computed: true, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // auto_deploy_trigger - computed: true, optional: true, required: false
  private _autoDeployTrigger?: string; 
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }
  public set autoDeployTrigger(value: string) {
    this._autoDeployTrigger = value;
  }
  public resetAutoDeployTrigger() {
    this._autoDeployTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployTriggerInput() {
    return this._autoDeployTrigger;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_command - computed: false, optional: false, required: true
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // build_filter - computed: false, optional: true, required: false
  private _buildFilter = new CronJobRuntimeSourceNativeRuntimeBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: CronJobRuntimeSourceNativeRuntimeBuildFilter) {
    this._buildFilter.internalValue = value;
  }
  public resetBuildFilter() {
    this._buildFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFilterInput() {
    return this._buildFilter.internalValue;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
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
}
export interface CronJobRuntimeSource {
  /**
  * Details for building and deploying a service [using a Dockerfile](https://render.com/docs/docker).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#docker CronJob#docker}
  */
  readonly docker?: CronJobRuntimeSourceDocker;
  /**
  * Details for deploying a service using a [Docker image from a registry](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#image CronJob#image}
  */
  readonly image?: CronJobRuntimeSourceImage;
  /**
  * Details for building and deploying a service using one of Render's [native runtimes](https://render.com/docs/native-runtimes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#native_runtime CronJob#native_runtime}
  */
  readonly nativeRuntime?: CronJobRuntimeSourceNativeRuntime;
}

export function cronJobRuntimeSourceToTerraform(struct?: CronJobRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker: cronJobRuntimeSourceDockerToTerraform(struct!.docker),
    image: cronJobRuntimeSourceImageToTerraform(struct!.image),
    native_runtime: cronJobRuntimeSourceNativeRuntimeToTerraform(struct!.nativeRuntime),
  }
}


export function cronJobRuntimeSourceToHclTerraform(struct?: CronJobRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker: {
      value: cronJobRuntimeSourceDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "struct",
      storageClassType: "CronJobRuntimeSourceDocker",
    },
    image: {
      value: cronJobRuntimeSourceImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "CronJobRuntimeSourceImage",
    },
    native_runtime: {
      value: cronJobRuntimeSourceNativeRuntimeToHclTerraform(struct!.nativeRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "CronJobRuntimeSourceNativeRuntime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobRuntimeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronJobRuntimeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._nativeRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeRuntime = this._nativeRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobRuntimeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._docker.internalValue = undefined;
      this._image.internalValue = undefined;
      this._nativeRuntime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._docker.internalValue = value.docker;
      this._image.internalValue = value.image;
      this._nativeRuntime.internalValue = value.nativeRuntime;
    }
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new CronJobRuntimeSourceDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: CronJobRuntimeSourceDocker) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new CronJobRuntimeSourceImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: CronJobRuntimeSourceImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // native_runtime - computed: false, optional: true, required: false
  private _nativeRuntime = new CronJobRuntimeSourceNativeRuntimeOutputReference(this, "native_runtime");
  public get nativeRuntime() {
    return this._nativeRuntime;
  }
  public putNativeRuntime(value: CronJobRuntimeSourceNativeRuntime) {
    this._nativeRuntime.internalValue = value;
  }
  public resetNativeRuntime() {
    this._nativeRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeRuntimeInput() {
    return this._nativeRuntime.internalValue;
  }
}
export interface CronJobSecretFiles {
  /**
  * The content of the secret file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#content CronJob#content}
  */
  readonly content: string;
}

export function cronJobSecretFilesToTerraform(struct?: CronJobSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function cronJobSecretFilesToHclTerraform(struct?: CronJobSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronJobSecretFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CronJobSecretFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronJobSecretFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class CronJobSecretFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CronJobSecretFiles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CronJobSecretFilesOutputReference {
    return new CronJobSecretFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job render_cron_job}
*/
export class CronJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_cron_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CronJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CronJob to import
  * @param importFromId The id of the existing CronJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CronJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_cron_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/cron_job render_cron_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CronJobConfig
  */
  public constructor(scope: Construct, id: string, config: CronJobConfig) {
    super(scope, id, {
      terraformResourceType: 'render_cron_job',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envVars.internalValue = config.envVars;
    this._environmentId = config.environmentId;
    this._logStreamOverride.internalValue = config.logStreamOverride;
    this._name = config.name;
    this._notificationOverride.internalValue = config.notificationOverride;
    this._plan = config.plan;
    this._region = config.region;
    this._rootDirectory = config.rootDirectory;
    this._runtimeSource.internalValue = config.runtimeSource;
    this._schedule = config.schedule;
    this._secretFiles.internalValue = config.secretFiles;
    this._startCommand = config.startCommand;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new CronJobEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: CronJobEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_stream_override - computed: true, optional: true, required: false
  private _logStreamOverride = new CronJobLogStreamOverrideOutputReference(this, "log_stream_override");
  public get logStreamOverride() {
    return this._logStreamOverride;
  }
  public putLogStreamOverride(value: CronJobLogStreamOverride) {
    this._logStreamOverride.internalValue = value;
  }
  public resetLogStreamOverride() {
    this._logStreamOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamOverrideInput() {
    return this._logStreamOverride.internalValue;
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

  // notification_override - computed: true, optional: true, required: false
  private _notificationOverride = new CronJobNotificationOverrideOutputReference(this, "notification_override");
  public get notificationOverride() {
    return this._notificationOverride;
  }
  public putNotificationOverride(value: CronJobNotificationOverride) {
    this._notificationOverride.internalValue = value;
  }
  public resetNotificationOverride() {
    this._notificationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationOverrideInput() {
    return this._notificationOverride.internalValue;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
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

  // root_directory - computed: true, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // runtime_source - computed: false, optional: false, required: true
  private _runtimeSource = new CronJobRuntimeSourceOutputReference(this, "runtime_source");
  public get runtimeSource() {
    return this._runtimeSource;
  }
  public putRuntimeSource(value: CronJobRuntimeSource) {
    this._runtimeSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSourceInput() {
    return this._runtimeSource.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // secret_files - computed: false, optional: true, required: false
  private _secretFiles = new CronJobSecretFilesMap(this, "secret_files");
  public get secretFiles() {
    return this._secretFiles;
  }
  public putSecretFiles(value: { [key: string]: CronJobSecretFiles } | cdktf.IResolvable) {
    this._secretFiles.internalValue = value;
  }
  public resetSecretFiles() {
    this._secretFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFilesInput() {
    return this._secretFiles.internalValue;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_vars: cdktf.hashMapper(cronJobEnvVarsToTerraform)(this._envVars.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      log_stream_override: cronJobLogStreamOverrideToTerraform(this._logStreamOverride.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notification_override: cronJobNotificationOverrideToTerraform(this._notificationOverride.internalValue),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      root_directory: cdktf.stringToTerraform(this._rootDirectory),
      runtime_source: cronJobRuntimeSourceToTerraform(this._runtimeSource.internalValue),
      schedule: cdktf.stringToTerraform(this._schedule),
      secret_files: cdktf.hashMapper(cronJobSecretFilesToTerraform)(this._secretFiles.internalValue),
      start_command: cdktf.stringToTerraform(this._startCommand),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_vars: {
        value: cdktf.hashMapperHcl(cronJobEnvVarsToHclTerraform)(this._envVars.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "CronJobEnvVarsMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_override: {
        value: cronJobLogStreamOverrideToHclTerraform(this._logStreamOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CronJobLogStreamOverride",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_override: {
        value: cronJobNotificationOverrideToHclTerraform(this._notificationOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CronJobNotificationOverride",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
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
      root_directory: {
        value: cdktf.stringToHclTerraform(this._rootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_source: {
        value: cronJobRuntimeSourceToHclTerraform(this._runtimeSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CronJobRuntimeSource",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_files: {
        value: cdktf.hashMapperHcl(cronJobSecretFilesToHclTerraform)(this._secretFiles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "CronJobSecretFilesMap",
      },
      start_command: {
        value: cdktf.stringToHclTerraform(this._startCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
