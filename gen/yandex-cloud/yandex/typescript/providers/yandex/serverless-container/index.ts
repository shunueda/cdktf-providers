// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Concurrency of Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#concurrency ServerlessContainer#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Core fraction (**0...100**) of the Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#core_fraction ServerlessContainer#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * Cores (**1+**) of the Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#cores ServerlessContainer#cores}
  */
  readonly cores?: number;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#description ServerlessContainer#description}
  */
  readonly description?: string;
  /**
  * Execution timeout in seconds (**duration format**) for Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#execution_timeout ServerlessContainer#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#folder_id ServerlessContainer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#id ServerlessContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#labels ServerlessContainer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Memory in megabytes (**aligned to 128 MB**).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#memory ServerlessContainer#memory}
  */
  readonly memory: number;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#name ServerlessContainer#name}
  */
  readonly name: string;
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#service_account_id ServerlessContainer#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * async_invocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#async_invocation ServerlessContainer#async_invocation}
  */
  readonly asyncInvocation?: ServerlessContainerAsyncInvocation;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#connectivity ServerlessContainer#connectivity}
  */
  readonly connectivity?: ServerlessContainerConnectivity;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#image ServerlessContainer#image}
  */
  readonly image: ServerlessContainerImage;
  /**
  * log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#log_options ServerlessContainer#log_options}
  */
  readonly logOptions?: ServerlessContainerLogOptions;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#metadata_options ServerlessContainer#metadata_options}
  */
  readonly metadataOptions?: ServerlessContainerMetadataOptions;
  /**
  * mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#mounts ServerlessContainer#mounts}
  */
  readonly mounts?: ServerlessContainerMounts[] | cdktf.IResolvable;
  /**
  * provision_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#provision_policy ServerlessContainer#provision_policy}
  */
  readonly provisionPolicy?: ServerlessContainerProvisionPolicy;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#runtime ServerlessContainer#runtime}
  */
  readonly runtime?: ServerlessContainerRuntime;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#secrets ServerlessContainer#secrets}
  */
  readonly secrets?: ServerlessContainerSecrets[] | cdktf.IResolvable;
  /**
  * storage_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#storage_mounts ServerlessContainer#storage_mounts}
  */
  readonly storageMounts?: ServerlessContainerStorageMounts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#timeouts ServerlessContainer#timeouts}
  */
  readonly timeouts?: ServerlessContainerTimeouts;
}
export interface ServerlessContainerAsyncInvocation {
  /**
  * Service account used for async invocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#service_account_id ServerlessContainer#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function serverlessContainerAsyncInvocationToTerraform(struct?: ServerlessContainerAsyncInvocationOutputReference | ServerlessContainerAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function serverlessContainerAsyncInvocationToHclTerraform(struct?: ServerlessContainerAsyncInvocationOutputReference | ServerlessContainerAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerAsyncInvocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerAsyncInvocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerAsyncInvocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface ServerlessContainerConnectivity {
  /**
  * Network the revision will have access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#network_id ServerlessContainer#network_id}
  */
  readonly networkId: string;
}

export function serverlessContainerConnectivityToTerraform(struct?: ServerlessContainerConnectivityOutputReference | ServerlessContainerConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function serverlessContainerConnectivityToHclTerraform(struct?: ServerlessContainerConnectivityOutputReference | ServerlessContainerConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }
}
export interface ServerlessContainerImage {
  /**
  * List of arguments for Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#args ServerlessContainer#args}
  */
  readonly args?: string[];
  /**
  * List of commands for Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#command ServerlessContainer#command}
  */
  readonly command?: string[];
  /**
  * Digest of image that will be deployed as Yandex Cloud Serverless Container. If presented, should be equal to digest that will be resolved at server side by URL. Container will be updated on digest change even if `image.0.url` stays the same. If field not specified then its value will be computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#digest ServerlessContainer#digest}
  */
  readonly digest?: string;
  /**
  * A set of key/value environment variable pairs for Yandex Cloud Serverless Container. Each key must begin with a letter (A-Z, a-z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#environment ServerlessContainer#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * URL of image that will be deployed as Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#url ServerlessContainer#url}
  */
  readonly url: string;
  /**
  * Working directory for Yandex Cloud Serverless Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#work_dir ServerlessContainer#work_dir}
  */
  readonly workDir?: string;
}

export function serverlessContainerImageToTerraform(struct?: ServerlessContainerImageOutputReference | ServerlessContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    digest: cdktf.stringToTerraform(struct!.digest),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    url: cdktf.stringToTerraform(struct!.url),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function serverlessContainerImageToHclTerraform(struct?: ServerlessContainerImageOutputReference | ServerlessContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerImage | undefined {
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
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._digest = undefined;
      this._environment = undefined;
      this._url = undefined;
      this._workDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._digest = value.digest;
      this._environment = value.environment;
      this._url = value.url;
      this._workDir = value.workDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
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
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}
export interface ServerlessContainerLogOptions {
  /**
  * Is logging from container disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#disabled ServerlessContainer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Log entries are written to default log group for specified folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#folder_id ServerlessContainer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Log entries are written to specified log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#log_group_id ServerlessContainer#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Minimum log entry level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#min_level ServerlessContainer#min_level}
  */
  readonly minLevel?: string;
}

export function serverlessContainerLogOptionsToTerraform(struct?: ServerlessContainerLogOptionsOutputReference | ServerlessContainerLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    min_level: cdktf.stringToTerraform(struct!.minLevel),
  }
}


export function serverlessContainerLogOptionsToHclTerraform(struct?: ServerlessContainerLogOptionsOutputReference | ServerlessContainerLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_level: {
      value: cdktf.stringToHclTerraform(struct!.minLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._minLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLevel = this._minLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
      this._minLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._folderId = value.folderId;
      this._logGroupId = value.logGroupId;
      this._minLevel = value.minLevel;
    }
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

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // log_group_id - computed: false, optional: true, required: false
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

  // min_level - computed: false, optional: true, required: false
  private _minLevel?: string; 
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
  public set minLevel(value: string) {
    this._minLevel = value;
  }
  public resetMinLevel() {
    this._minLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLevelInput() {
    return this._minLevel;
  }
}
export interface ServerlessContainerMetadataOptions {
  /**
  * Enables access to AWS flavored metadata (IMDSv1). Values: `0` - default, `1` - enabled, `2` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#aws_v1_http_endpoint ServerlessContainer#aws_v1_http_endpoint}
  */
  readonly awsV1HttpEndpoint?: number;
  /**
  * Enables access to GCE flavored metadata. Values: `0`- default, `1` - enabled, `2` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#gce_http_endpoint ServerlessContainer#gce_http_endpoint}
  */
  readonly gceHttpEndpoint?: number;
}

export function serverlessContainerMetadataOptionsToTerraform(struct?: ServerlessContainerMetadataOptionsOutputReference | ServerlessContainerMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_v1_http_endpoint: cdktf.numberToTerraform(struct!.awsV1HttpEndpoint),
    gce_http_endpoint: cdktf.numberToTerraform(struct!.gceHttpEndpoint),
  }
}


export function serverlessContainerMetadataOptionsToHclTerraform(struct?: ServerlessContainerMetadataOptionsOutputReference | ServerlessContainerMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_v1_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsV1HttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpEndpoint = this._awsV1HttpEndpoint;
    }
    if (this._gceHttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpEndpoint = this._gceHttpEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsV1HttpEndpoint = undefined;
      this._gceHttpEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsV1HttpEndpoint = value.awsV1HttpEndpoint;
      this._gceHttpEndpoint = value.gceHttpEndpoint;
    }
  }

  // aws_v1_http_endpoint - computed: true, optional: true, required: false
  private _awsV1HttpEndpoint?: number; 
  public get awsV1HttpEndpoint() {
    return this.getNumberAttribute('aws_v1_http_endpoint');
  }
  public set awsV1HttpEndpoint(value: number) {
    this._awsV1HttpEndpoint = value;
  }
  public resetAwsV1HttpEndpoint() {
    this._awsV1HttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpEndpointInput() {
    return this._awsV1HttpEndpoint;
  }

  // gce_http_endpoint - computed: true, optional: true, required: false
  private _gceHttpEndpoint?: number; 
  public get gceHttpEndpoint() {
    return this.getNumberAttribute('gce_http_endpoint');
  }
  public set gceHttpEndpoint(value: number) {
    this._gceHttpEndpoint = value;
  }
  public resetGceHttpEndpoint() {
    this._gceHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpEndpointInput() {
    return this._gceHttpEndpoint;
  }
}
export interface ServerlessContainerMountsEphemeralDisk {
  /**
  * Block size of the ephemeral disk in KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#block_size_kb ServerlessContainer#block_size_kb}
  */
  readonly blockSizeKb?: number;
  /**
  * Size of the ephemeral disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#size_gb ServerlessContainer#size_gb}
  */
  readonly sizeGb: number;
}

export function serverlessContainerMountsEphemeralDiskToTerraform(struct?: ServerlessContainerMountsEphemeralDiskOutputReference | ServerlessContainerMountsEphemeralDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_kb: cdktf.numberToTerraform(struct!.blockSizeKb),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function serverlessContainerMountsEphemeralDiskToHclTerraform(struct?: ServerlessContainerMountsEphemeralDiskOutputReference | ServerlessContainerMountsEphemeralDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.blockSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerMountsEphemeralDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerMountsEphemeralDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeKb = this._blockSizeKb;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerMountsEphemeralDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeKb = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeKb = value.blockSizeKb;
      this._sizeGb = value.sizeGb;
    }
  }

  // block_size_kb - computed: true, optional: true, required: false
  private _blockSizeKb?: number; 
  public get blockSizeKb() {
    return this.getNumberAttribute('block_size_kb');
  }
  public set blockSizeKb(value: number) {
    this._blockSizeKb = value;
  }
  public resetBlockSizeKb() {
    this._blockSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeKbInput() {
    return this._blockSizeKb;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface ServerlessContainerMountsObjectStorage {
  /**
  * Name of the mounting bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#bucket ServerlessContainer#bucket}
  */
  readonly bucket: string;
  /**
  * Prefix within the bucket. If you leave this field empty, the entire bucket will be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#prefix ServerlessContainer#prefix}
  */
  readonly prefix?: string;
}

export function serverlessContainerMountsObjectStorageToTerraform(struct?: ServerlessContainerMountsObjectStorageOutputReference | ServerlessContainerMountsObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function serverlessContainerMountsObjectStorageToHclTerraform(struct?: ServerlessContainerMountsObjectStorageOutputReference | ServerlessContainerMountsObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerMountsObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerMountsObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerMountsObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface ServerlessContainerMounts {
  /**
  * Mount’s accessibility mode. Valid values are `ro` and `rw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#mode ServerlessContainer#mode}
  */
  readonly mode?: string;
  /**
  * Path inside the container to access the directory in which the target is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#mount_point_path ServerlessContainer#mount_point_path}
  */
  readonly mountPointPath: string;
  /**
  * ephemeral_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#ephemeral_disk ServerlessContainer#ephemeral_disk}
  */
  readonly ephemeralDisk?: ServerlessContainerMountsEphemeralDisk;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#object_storage ServerlessContainer#object_storage}
  */
  readonly objectStorage?: ServerlessContainerMountsObjectStorage;
}

export function serverlessContainerMountsToTerraform(struct?: ServerlessContainerMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    mount_point_path: cdktf.stringToTerraform(struct!.mountPointPath),
    ephemeral_disk: serverlessContainerMountsEphemeralDiskToTerraform(struct!.ephemeralDisk),
    object_storage: serverlessContainerMountsObjectStorageToTerraform(struct!.objectStorage),
  }
}


export function serverlessContainerMountsToHclTerraform(struct?: ServerlessContainerMounts | cdktf.IResolvable): any {
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
    mount_point_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_disk: {
      value: serverlessContainerMountsEphemeralDiskToHclTerraform(struct!.ephemeralDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessContainerMountsEphemeralDiskList",
    },
    object_storage: {
      value: serverlessContainerMountsObjectStorageToHclTerraform(struct!.objectStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessContainerMountsObjectStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessContainerMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._mountPointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPointPath = this._mountPointPath;
    }
    if (this._ephemeralDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralDisk = this._ephemeralDisk?.internalValue;
    }
    if (this._objectStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorage = this._objectStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._mountPointPath = undefined;
      this._ephemeralDisk.internalValue = undefined;
      this._objectStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._mountPointPath = value.mountPointPath;
      this._ephemeralDisk.internalValue = value.ephemeralDisk;
      this._objectStorage.internalValue = value.objectStorage;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mount_point_path - computed: false, optional: false, required: true
  private _mountPointPath?: string; 
  public get mountPointPath() {
    return this.getStringAttribute('mount_point_path');
  }
  public set mountPointPath(value: string) {
    this._mountPointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointPathInput() {
    return this._mountPointPath;
  }

  // ephemeral_disk - computed: false, optional: true, required: false
  private _ephemeralDisk = new ServerlessContainerMountsEphemeralDiskOutputReference(this, "ephemeral_disk");
  public get ephemeralDisk() {
    return this._ephemeralDisk;
  }
  public putEphemeralDisk(value: ServerlessContainerMountsEphemeralDisk) {
    this._ephemeralDisk.internalValue = value;
  }
  public resetEphemeralDisk() {
    this._ephemeralDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralDiskInput() {
    return this._ephemeralDisk.internalValue;
  }

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new ServerlessContainerMountsObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: ServerlessContainerMountsObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }
}

export class ServerlessContainerMountsList extends cdktf.ComplexList {
  public internalValue? : ServerlessContainerMounts[] | cdktf.IResolvable

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
  public get(index: number): ServerlessContainerMountsOutputReference {
    return new ServerlessContainerMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessContainerProvisionPolicy {
  /**
  * Minimum number of prepared instances that are always ready to serve requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#min_instances ServerlessContainer#min_instances}
  */
  readonly minInstances: number;
}

export function serverlessContainerProvisionPolicyToTerraform(struct?: ServerlessContainerProvisionPolicyOutputReference | ServerlessContainerProvisionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
  }
}


export function serverlessContainerProvisionPolicyToHclTerraform(struct?: ServerlessContainerProvisionPolicyOutputReference | ServerlessContainerProvisionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_instances: {
      value: cdktf.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerProvisionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerProvisionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerProvisionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minInstances = value.minInstances;
    }
  }

  // min_instances - computed: false, optional: false, required: true
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }
}
export interface ServerlessContainerRuntime {
  /**
  * Type of the runtime for Yandex Cloud Serverless Container. Valid values are `http` and `task`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#type ServerlessContainer#type}
  */
  readonly type: string;
}

export function serverlessContainerRuntimeToTerraform(struct?: ServerlessContainerRuntimeOutputReference | ServerlessContainerRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serverlessContainerRuntimeToHclTerraform(struct?: ServerlessContainerRuntimeOutputReference | ServerlessContainerRuntime): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface ServerlessContainerSecrets {
  /**
  * Container's environment variable in which secret's value will be stored. Must begin with a letter (A-Z, a-z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#environment_variable ServerlessContainer#environment_variable}
  */
  readonly environmentVariable: string;
  /**
  * Secret's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#id ServerlessContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Secret's entries key which value will be stored in environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#key ServerlessContainer#key}
  */
  readonly key: string;
  /**
  * Secret's version ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#version_id ServerlessContainer#version_id}
  */
  readonly versionId: string;
}

export function serverlessContainerSecretsToTerraform(struct?: ServerlessContainerSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_variable: cdktf.stringToTerraform(struct!.environmentVariable),
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}


export function serverlessContainerSecretsToHclTerraform(struct?: ServerlessContainerSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_variable: {
      value: cdktf.stringToHclTerraform(struct!.environmentVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessContainerSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentVariable = undefined;
      this._id = undefined;
      this._key = undefined;
      this._versionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentVariable = value.environmentVariable;
      this._id = value.id;
      this._key = value.key;
      this._versionId = value.versionId;
    }
  }

  // environment_variable - computed: false, optional: false, required: true
  private _environmentVariable?: string; 
  public get environmentVariable() {
    return this.getStringAttribute('environment_variable');
  }
  public set environmentVariable(value: string) {
    this._environmentVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

export class ServerlessContainerSecretsList extends cdktf.ComplexList {
  public internalValue? : ServerlessContainerSecrets[] | cdktf.IResolvable

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
  public get(index: number): ServerlessContainerSecretsOutputReference {
    return new ServerlessContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessContainerStorageMounts {
  /**
  * Name of the mounting bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#bucket ServerlessContainer#bucket}
  */
  readonly bucket: string;
  /**
  * Path inside the container to access the directory in which the bucket is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#mount_point_path ServerlessContainer#mount_point_path}
  */
  readonly mountPointPath: string;
  /**
  * Prefix within the bucket. If you leave this field empty, the entire bucket will be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#prefix ServerlessContainer#prefix}
  */
  readonly prefix?: string;
  /**
  * Mount the bucket in read-only mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#read_only ServerlessContainer#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function serverlessContainerStorageMountsToTerraform(struct?: ServerlessContainerStorageMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    mount_point_path: cdktf.stringToTerraform(struct!.mountPointPath),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function serverlessContainerStorageMountsToHclTerraform(struct?: ServerlessContainerStorageMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessContainerStorageMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessContainerStorageMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._mountPointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPointPath = this._mountPointPath;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerStorageMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._mountPointPath = undefined;
      this._prefix = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._mountPointPath = value.mountPointPath;
      this._prefix = value.prefix;
      this._readOnly = value.readOnly;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // mount_point_path - computed: false, optional: false, required: true
  private _mountPointPath?: string; 
  public get mountPointPath() {
    return this.getStringAttribute('mount_point_path');
  }
  public set mountPointPath(value: string) {
    this._mountPointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointPathInput() {
    return this._mountPointPath;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class ServerlessContainerStorageMountsList extends cdktf.ComplexList {
  public internalValue? : ServerlessContainerStorageMounts[] | cdktf.IResolvable

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
  public get(index: number): ServerlessContainerStorageMountsOutputReference {
    return new ServerlessContainerStorageMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#create ServerlessContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#delete ServerlessContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#update ServerlessContainer#update}
  */
  readonly update?: string;
}

export function serverlessContainerTimeoutsToTerraform(struct?: ServerlessContainerTimeouts | cdktf.IResolvable): any {
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


export function serverlessContainerTimeoutsToHclTerraform(struct?: ServerlessContainerTimeouts | cdktf.IResolvable): any {
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

export class ServerlessContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerlessContainerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServerlessContainerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container yandex_serverless_container}
*/
export class ServerlessContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessContainer to import
  * @param importFromId The id of the existing ServerlessContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_serverless_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/serverless_container yandex_serverless_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessContainerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_container',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrency = config.concurrency;
    this._coreFraction = config.coreFraction;
    this._cores = config.cores;
    this._description = config.description;
    this._executionTimeout = config.executionTimeout;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._memory = config.memory;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
    this._asyncInvocation.internalValue = config.asyncInvocation;
    this._connectivity.internalValue = config.connectivity;
    this._image.internalValue = config.image;
    this._logOptions.internalValue = config.logOptions;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._mounts.internalValue = config.mounts;
    this._provisionPolicy.internalValue = config.provisionPolicy;
    this._runtime.internalValue = config.runtime;
    this._secrets.internalValue = config.secrets;
    this._storageMounts.internalValue = config.storageMounts;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: true, optional: true, required: false
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

  // core_fraction - computed: true, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // async_invocation - computed: false, optional: true, required: false
  private _asyncInvocation = new ServerlessContainerAsyncInvocationOutputReference(this, "async_invocation");
  public get asyncInvocation() {
    return this._asyncInvocation;
  }
  public putAsyncInvocation(value: ServerlessContainerAsyncInvocation) {
    this._asyncInvocation.internalValue = value;
  }
  public resetAsyncInvocation() {
    this._asyncInvocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInvocationInput() {
    return this._asyncInvocation.internalValue;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new ServerlessContainerConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: ServerlessContainerConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new ServerlessContainerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: ServerlessContainerImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // log_options - computed: false, optional: true, required: false
  private _logOptions = new ServerlessContainerLogOptionsOutputReference(this, "log_options");
  public get logOptions() {
    return this._logOptions;
  }
  public putLogOptions(value: ServerlessContainerLogOptions) {
    this._logOptions.internalValue = value;
  }
  public resetLogOptions() {
    this._logOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptionsInput() {
    return this._logOptions.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new ServerlessContainerMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: ServerlessContainerMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new ServerlessContainerMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: ServerlessContainerMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // provision_policy - computed: false, optional: true, required: false
  private _provisionPolicy = new ServerlessContainerProvisionPolicyOutputReference(this, "provision_policy");
  public get provisionPolicy() {
    return this._provisionPolicy;
  }
  public putProvisionPolicy(value: ServerlessContainerProvisionPolicy) {
    this._provisionPolicy.internalValue = value;
  }
  public resetProvisionPolicy() {
    this._provisionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionPolicyInput() {
    return this._provisionPolicy.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new ServerlessContainerRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: ServerlessContainerRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new ServerlessContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: ServerlessContainerSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // storage_mounts - computed: false, optional: true, required: false
  private _storageMounts = new ServerlessContainerStorageMountsList(this, "storage_mounts", false);
  public get storageMounts() {
    return this._storageMounts;
  }
  public putStorageMounts(value: ServerlessContainerStorageMounts[] | cdktf.IResolvable) {
    this._storageMounts.internalValue = value;
  }
  public resetStorageMounts() {
    this._storageMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMountsInput() {
    return this._storageMounts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerlessContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerlessContainerTimeouts) {
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
      concurrency: cdktf.numberToTerraform(this._concurrency),
      core_fraction: cdktf.numberToTerraform(this._coreFraction),
      cores: cdktf.numberToTerraform(this._cores),
      description: cdktf.stringToTerraform(this._description),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      async_invocation: serverlessContainerAsyncInvocationToTerraform(this._asyncInvocation.internalValue),
      connectivity: serverlessContainerConnectivityToTerraform(this._connectivity.internalValue),
      image: serverlessContainerImageToTerraform(this._image.internalValue),
      log_options: serverlessContainerLogOptionsToTerraform(this._logOptions.internalValue),
      metadata_options: serverlessContainerMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      mounts: cdktf.listMapper(serverlessContainerMountsToTerraform, true)(this._mounts.internalValue),
      provision_policy: serverlessContainerProvisionPolicyToTerraform(this._provisionPolicy.internalValue),
      runtime: serverlessContainerRuntimeToTerraform(this._runtime.internalValue),
      secrets: cdktf.listMapper(serverlessContainerSecretsToTerraform, true)(this._secrets.internalValue),
      storage_mounts: cdktf.listMapper(serverlessContainerStorageMountsToTerraform, true)(this._storageMounts.internalValue),
      timeouts: serverlessContainerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_fraction: {
        value: cdktf.numberToHclTerraform(this._coreFraction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timeout: {
        value: cdktf.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
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
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_invocation: {
        value: serverlessContainerAsyncInvocationToHclTerraform(this._asyncInvocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerAsyncInvocationList",
      },
      connectivity: {
        value: serverlessContainerConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerConnectivityList",
      },
      image: {
        value: serverlessContainerImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerImageList",
      },
      log_options: {
        value: serverlessContainerLogOptionsToHclTerraform(this._logOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerLogOptionsList",
      },
      metadata_options: {
        value: serverlessContainerMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerMetadataOptionsList",
      },
      mounts: {
        value: cdktf.listMapperHcl(serverlessContainerMountsToHclTerraform, true)(this._mounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerMountsList",
      },
      provision_policy: {
        value: serverlessContainerProvisionPolicyToHclTerraform(this._provisionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerProvisionPolicyList",
      },
      runtime: {
        value: serverlessContainerRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerRuntimeList",
      },
      secrets: {
        value: cdktf.listMapperHcl(serverlessContainerSecretsToHclTerraform, true)(this._secrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerSecretsList",
      },
      storage_mounts: {
        value: cdktf.listMapperHcl(serverlessContainerStorageMountsToHclTerraform, true)(this._storageMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessContainerStorageMountsList",
      },
      timeouts: {
        value: serverlessContainerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerlessContainerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
