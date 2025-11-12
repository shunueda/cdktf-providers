// https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app name the service is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#app_name Service#app_name}
  */
  readonly appName: string;
  /**
  * The status messages of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#messages Service#messages}
  */
  readonly messages?: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#definition Service#definition}
  */
  readonly definition: ServiceDefinition;
}
export interface ServiceDefinitionDocker {
  /**
  * The Docker args to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#args Service#args}
  */
  readonly args?: string[];
  /**
  * The Docker command to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#command Service#command}
  */
  readonly command?: string;
  /**
  * The Docker entrypoint to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#entrypoint Service#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * The Docker image to use to support your service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#image Service#image}
  */
  readonly image: string;
  /**
  * The Koyeb secret containing the container registry credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#image_registry_secret Service#image_registry_secret}
  */
  readonly imageRegistrySecret?: string;
  /**
  * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#privileged Service#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
}

export function serviceDefinitionDockerToTerraform(struct?: ServiceDefinitionDockerOutputReference | ServiceDefinitionDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_registry_secret: cdktf.stringToTerraform(struct!.imageRegistrySecret),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
  }
}


export function serviceDefinitionDockerToHclTerraform(struct?: ServiceDefinitionDockerOutputReference | ServiceDefinitionDocker): any {
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
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_registry_secret: {
      value: cdktf.stringToHclTerraform(struct!.imageRegistrySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionDocker | undefined {
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
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageRegistrySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistrySecret = this._imageRegistrySecret;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageRegistrySecret = undefined;
      this._privileged = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageRegistrySecret = value.imageRegistrySecret;
      this._privileged = value.privileged;
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

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_registry_secret - computed: false, optional: true, required: false
  private _imageRegistrySecret?: string; 
  public get imageRegistrySecret() {
    return this.getStringAttribute('image_registry_secret');
  }
  public set imageRegistrySecret(value: string) {
    this._imageRegistrySecret = value;
  }
  public resetImageRegistrySecret() {
    this._imageRegistrySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistrySecretInput() {
    return this._imageRegistrySecret;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }
}
export interface ServiceDefinitionEnv {
  /**
  * The name of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#key Service#key}
  */
  readonly key: string;
  /**
  * The regions the environment variable needs to be exposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#scopes Service#scopes}
  */
  readonly scopes?: string[];
  /**
  * The secret name to use as the value of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#secret Service#secret}
  */
  readonly secret?: string;
  /**
  * The value of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value?: string;
}

export function serviceDefinitionEnvToTerraform(struct?: ServiceDefinitionEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret: cdktf.stringToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceDefinitionEnvToHclTerraform(struct?: ServiceDefinitionEnv | cdktf.IResolvable): any {
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
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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

export class ServiceDefinitionEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scopes = undefined;
      this._secret = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._scopes = value.scopes;
      this._secret = value.secret;
      this._value = value.value;
    }
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

export class ServiceDefinitionEnvList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionEnv[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionEnvOutputReference {
    return new ServiceDefinitionEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionGitBuildpack {
  /**
  * The command to build your application during the build phase. If your application does not require a build command, leave this field empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#build_command Service#build_command}
  */
  readonly buildCommand?: string;
  /**
  * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#privileged Service#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * The command to run your application once the built is completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#run_command Service#run_command}
  */
  readonly runCommand?: string;
}

export function serviceDefinitionGitBuildpackToTerraform(struct?: ServiceDefinitionGitBuildpackOutputReference | ServiceDefinitionGitBuildpack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    run_command: cdktf.stringToTerraform(struct!.runCommand),
  }
}


export function serviceDefinitionGitBuildpackToHclTerraform(struct?: ServiceDefinitionGitBuildpackOutputReference | ServiceDefinitionGitBuildpack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_command: {
      value: cdktf.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_command: {
      value: cdktf.stringToHclTerraform(struct!.runCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionGitBuildpackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionGitBuildpack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._runCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.runCommand = this._runCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionGitBuildpack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildCommand = undefined;
      this._privileged = undefined;
      this._runCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildCommand = value.buildCommand;
      this._privileged = value.privileged;
      this._runCommand = value.runCommand;
    }
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // run_command - computed: false, optional: true, required: false
  private _runCommand?: string; 
  public get runCommand() {
    return this.getStringAttribute('run_command');
  }
  public set runCommand(value: string) {
    this._runCommand = value;
  }
  public resetRunCommand() {
    this._runCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandInput() {
    return this._runCommand;
  }
}
export interface ServiceDefinitionGitDockerfile {
  /**
  * The arguments to pass to the Docker command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#args Service#args}
  */
  readonly args?: string[];
  /**
  * Override the command to execute on the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#command Service#command}
  */
  readonly command?: string;
  /**
  * The location of your Dockerfile relative to the work directory. If not set, the work directory defaults to the root of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#dockerfile Service#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * Override the default entrypoint to execute on the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#entrypoint Service#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#privileged Service#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Target build stage: If your Dockerfile contains multi-stage builds, you can choose the target stage to build and deploy by entering its name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#target Service#target}
  */
  readonly target?: string;
}

export function serviceDefinitionGitDockerfileToTerraform(struct?: ServiceDefinitionGitDockerfileOutputReference | ServiceDefinitionGitDockerfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function serviceDefinitionGitDockerfileToHclTerraform(struct?: ServiceDefinitionGitDockerfileOutputReference | ServiceDefinitionGitDockerfile): any {
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
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dockerfile: {
      value: cdktf.stringToHclTerraform(struct!.dockerfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionGitDockerfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionGitDockerfile | undefined {
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
    if (this._dockerfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfile = this._dockerfile;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionGitDockerfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._dockerfile = undefined;
      this._entrypoint = undefined;
      this._privileged = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._dockerfile = value.dockerfile;
      this._entrypoint = value.entrypoint;
      this._privileged = value.privileged;
      this._target = value.target;
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

  // dockerfile - computed: false, optional: true, required: false
  private _dockerfile?: string; 
  public get dockerfile() {
    return this.getStringAttribute('dockerfile');
  }
  public set dockerfile(value: string) {
    this._dockerfile = value;
  }
  public resetDockerfile() {
    this._dockerfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileInput() {
    return this._dockerfile;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ServiceDefinitionGit {
  /**
  * The GitHub branch to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#branch Service#branch}
  */
  readonly branch: string;
  /**
  * If set to true, no Koyeb deployments will be triggered when changes are pushed to the GitHub repository branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#no_deploy_on_push Service#no_deploy_on_push}
  */
  readonly noDeployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The GitHub repository to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#repository Service#repository}
  */
  readonly repository: string;
  /**
  * The directory where your source code is located. If not set, the work directory defaults to the root of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#workdir Service#workdir}
  */
  readonly workdir?: string;
  /**
  * buildpack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#buildpack Service#buildpack}
  */
  readonly buildpack?: ServiceDefinitionGitBuildpack;
  /**
  * dockerfile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#dockerfile Service#dockerfile}
  */
  readonly dockerfile?: ServiceDefinitionGitDockerfile;
}

export function serviceDefinitionGitToTerraform(struct?: ServiceDefinitionGitOutputReference | ServiceDefinitionGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    no_deploy_on_push: cdktf.booleanToTerraform(struct!.noDeployOnPush),
    repository: cdktf.stringToTerraform(struct!.repository),
    workdir: cdktf.stringToTerraform(struct!.workdir),
    buildpack: serviceDefinitionGitBuildpackToTerraform(struct!.buildpack),
    dockerfile: serviceDefinitionGitDockerfileToTerraform(struct!.dockerfile),
  }
}


export function serviceDefinitionGitToHclTerraform(struct?: ServiceDefinitionGitOutputReference | ServiceDefinitionGit): any {
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
    no_deploy_on_push: {
      value: cdktf.booleanToHclTerraform(struct!.noDeployOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workdir: {
      value: cdktf.stringToHclTerraform(struct!.workdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buildpack: {
      value: serviceDefinitionGitBuildpackToHclTerraform(struct!.buildpack),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionGitBuildpackList",
    },
    dockerfile: {
      value: serviceDefinitionGitDockerfileToHclTerraform(struct!.dockerfile),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionGitDockerfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._noDeployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDeployOnPush = this._noDeployOnPush;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._workdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdir = this._workdir;
    }
    if (this._buildpack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildpack = this._buildpack?.internalValue;
    }
    if (this._dockerfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfile = this._dockerfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._noDeployOnPush = undefined;
      this._repository = undefined;
      this._workdir = undefined;
      this._buildpack.internalValue = undefined;
      this._dockerfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._noDeployOnPush = value.noDeployOnPush;
      this._repository = value.repository;
      this._workdir = value.workdir;
      this._buildpack.internalValue = value.buildpack;
      this._dockerfile.internalValue = value.dockerfile;
    }
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

  // no_deploy_on_push - computed: false, optional: true, required: false
  private _noDeployOnPush?: boolean | cdktf.IResolvable; 
  public get noDeployOnPush() {
    return this.getBooleanAttribute('no_deploy_on_push');
  }
  public set noDeployOnPush(value: boolean | cdktf.IResolvable) {
    this._noDeployOnPush = value;
  }
  public resetNoDeployOnPush() {
    this._noDeployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeployOnPushInput() {
    return this._noDeployOnPush;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // workdir - computed: false, optional: true, required: false
  private _workdir?: string; 
  public get workdir() {
    return this.getStringAttribute('workdir');
  }
  public set workdir(value: string) {
    this._workdir = value;
  }
  public resetWorkdir() {
    this._workdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdirInput() {
    return this._workdir;
  }

  // buildpack - computed: false, optional: true, required: false
  private _buildpack = new ServiceDefinitionGitBuildpackOutputReference(this, "buildpack");
  public get buildpack() {
    return this._buildpack;
  }
  public putBuildpack(value: ServiceDefinitionGitBuildpack) {
    this._buildpack.internalValue = value;
  }
  public resetBuildpack() {
    this._buildpack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildpackInput() {
    return this._buildpack.internalValue;
  }

  // dockerfile - computed: false, optional: true, required: false
  private _dockerfile = new ServiceDefinitionGitDockerfileOutputReference(this, "dockerfile");
  public get dockerfile() {
    return this._dockerfile;
  }
  public putDockerfile(value: ServiceDefinitionGitDockerfile) {
    this._dockerfile.internalValue = value;
  }
  public resetDockerfile() {
    this._dockerfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileInput() {
    return this._dockerfile.internalValue;
  }
}
export interface ServiceDefinitionHealthChecksHttpHeaders {
  /**
  * The name of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#key Service#key}
  */
  readonly key: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value?: string;
}

export function serviceDefinitionHealthChecksHttpHeadersToTerraform(struct?: ServiceDefinitionHealthChecksHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceDefinitionHealthChecksHttpHeadersToHclTerraform(struct?: ServiceDefinitionHealthChecksHttpHeaders | cdktf.IResolvable): any {
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

export class ServiceDefinitionHealthChecksHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionHealthChecksHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionHealthChecksHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ServiceDefinitionHealthChecksHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionHealthChecksHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionHealthChecksHttpHeadersOutputReference {
    return new ServiceDefinitionHealthChecksHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionHealthChecksHttp {
  /**
  * An optional HTTP method to use to perform the health check, default is GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#method Service#method}
  */
  readonly method?: string;
  /**
  * The path to use to perform the HTTP health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#path Service#path}
  */
  readonly path: string;
  /**
  * The port to use to perform the health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#port Service#port}
  */
  readonly port: number;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#headers Service#headers}
  */
  readonly headers?: ServiceDefinitionHealthChecksHttpHeaders[] | cdktf.IResolvable;
}

export function serviceDefinitionHealthChecksHttpToTerraform(struct?: ServiceDefinitionHealthChecksHttpOutputReference | ServiceDefinitionHealthChecksHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    headers: cdktf.listMapper(serviceDefinitionHealthChecksHttpHeadersToTerraform, true)(struct!.headers),
  }
}


export function serviceDefinitionHealthChecksHttpToHclTerraform(struct?: ServiceDefinitionHealthChecksHttpOutputReference | ServiceDefinitionHealthChecksHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(serviceDefinitionHealthChecksHttpHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionHealthChecksHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionHealthChecksHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionHealthChecksHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionHealthChecksHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
      this._headers.internalValue = value.headers;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ServiceDefinitionHealthChecksHttpHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ServiceDefinitionHealthChecksHttpHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ServiceDefinitionHealthChecksTcp {
  /**
  * The port to use to perform the health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#port Service#port}
  */
  readonly port: number;
}

export function serviceDefinitionHealthChecksTcpToTerraform(struct?: ServiceDefinitionHealthChecksTcpOutputReference | ServiceDefinitionHealthChecksTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function serviceDefinitionHealthChecksTcpToHclTerraform(struct?: ServiceDefinitionHealthChecksTcpOutputReference | ServiceDefinitionHealthChecksTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionHealthChecksTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinitionHealthChecksTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionHealthChecksTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ServiceDefinitionHealthChecks {
  /**
  * The period in seconds to wait for the instance to become healthy, default is 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#grace_period Service#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * The period in seconds between two health checks, default is 60s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#interval Service#interval}
  */
  readonly interval?: number;
  /**
  * The number of consecutive failures before attempting to restart the service, default is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#restart_limit Service#restart_limit}
  */
  readonly restartLimit?: number;
  /**
  * The maximum time to wait in seconds before considering the check as a failure, default is 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#timeout Service#timeout}
  */
  readonly timeout?: number;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#http Service#http}
  */
  readonly http?: ServiceDefinitionHealthChecksHttp;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#tcp Service#tcp}
  */
  readonly tcp?: ServiceDefinitionHealthChecksTcp;
}

export function serviceDefinitionHealthChecksToTerraform(struct?: ServiceDefinitionHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    interval: cdktf.numberToTerraform(struct!.interval),
    restart_limit: cdktf.numberToTerraform(struct!.restartLimit),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    http: serviceDefinitionHealthChecksHttpToTerraform(struct!.http),
    tcp: serviceDefinitionHealthChecksTcpToTerraform(struct!.tcp),
  }
}


export function serviceDefinitionHealthChecksToHclTerraform(struct?: ServiceDefinitionHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_limit: {
      value: cdktf.numberToHclTerraform(struct!.restartLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http: {
      value: serviceDefinitionHealthChecksHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionHealthChecksHttpList",
    },
    tcp: {
      value: serviceDefinitionHealthChecksTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionHealthChecksTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionHealthChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._restartLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartLimit = this._restartLimit;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionHealthChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gracePeriod = undefined;
      this._interval = undefined;
      this._restartLimit = undefined;
      this._timeout = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gracePeriod = value.gracePeriod;
      this._interval = value.interval;
      this._restartLimit = value.restartLimit;
      this._timeout = value.timeout;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // restart_limit - computed: false, optional: true, required: false
  private _restartLimit?: number; 
  public get restartLimit() {
    return this.getNumberAttribute('restart_limit');
  }
  public set restartLimit(value: number) {
    this._restartLimit = value;
  }
  public resetRestartLimit() {
    this._restartLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartLimitInput() {
    return this._restartLimit;
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

  // http - computed: false, optional: true, required: false
  private _http = new ServiceDefinitionHealthChecksHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ServiceDefinitionHealthChecksHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new ServiceDefinitionHealthChecksTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: ServiceDefinitionHealthChecksTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}

export class ServiceDefinitionHealthChecksList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionHealthChecksOutputReference {
    return new ServiceDefinitionHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionInstanceTypes {
  /**
  * The regions to use the instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#scopes Service#scopes}
  */
  readonly scopes?: string[];
  /**
  * The instance type to use to support your service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#type Service#type}
  */
  readonly type: string;
}

export function serviceDefinitionInstanceTypesToTerraform(struct?: ServiceDefinitionInstanceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceDefinitionInstanceTypesToHclTerraform(struct?: ServiceDefinitionInstanceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ServiceDefinitionInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionInstanceTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionInstanceTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopes = value.scopes;
      this._type = value.type;
    }
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

export class ServiceDefinitionInstanceTypesList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionInstanceTypes[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionInstanceTypesOutputReference {
    return new ServiceDefinitionInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionPorts {
  /**
  * The internal port on which this service's run command will listen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#port Service#port}
  */
  readonly port: number;
  /**
  * The protocol used by your service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#protocol Service#protocol}
  */
  readonly protocol: string;
}

export function serviceDefinitionPortsToTerraform(struct?: ServiceDefinitionPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function serviceDefinitionPortsToHclTerraform(struct?: ServiceDefinitionPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ServiceDefinitionPortsList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionPorts[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionPortsOutputReference {
    return new ServiceDefinitionPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionRoutes {
  /**
  * Path specifies a route by HTTP path prefix. Paths must start with / and must be unique within the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#path Service#path}
  */
  readonly path: string;
  /**
  * The internal port on which this service's run command will listen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#port Service#port}
  */
  readonly port: number;
}

export function serviceDefinitionRoutesToTerraform(struct?: ServiceDefinitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function serviceDefinitionRoutesToHclTerraform(struct?: ServiceDefinitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._port = value.port;
    }
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ServiceDefinitionRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionRoutesOutputReference {
    return new ServiceDefinitionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargetsAverageCpu {
  /**
  * The target value of the autoscaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value: number;
}

export function serviceDefinitionScalingsTargetsAverageCpuToTerraform(struct?: ServiceDefinitionScalingsTargetsAverageCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceDefinitionScalingsTargetsAverageCpuToHclTerraform(struct?: ServiceDefinitionScalingsTargetsAverageCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsAverageCpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargetsAverageCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargetsAverageCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDefinitionScalingsTargetsAverageCpuList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargetsAverageCpu[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsAverageCpuOutputReference {
    return new ServiceDefinitionScalingsTargetsAverageCpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargetsAverageMem {
  /**
  * The target value of the autoscaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value: number;
}

export function serviceDefinitionScalingsTargetsAverageMemToTerraform(struct?: ServiceDefinitionScalingsTargetsAverageMem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceDefinitionScalingsTargetsAverageMemToHclTerraform(struct?: ServiceDefinitionScalingsTargetsAverageMem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsAverageMemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargetsAverageMem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargetsAverageMem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDefinitionScalingsTargetsAverageMemList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargetsAverageMem[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsAverageMemOutputReference {
    return new ServiceDefinitionScalingsTargetsAverageMemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargetsConcurrentRequests {
  /**
  * The target value of the autoscaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value: number;
}

export function serviceDefinitionScalingsTargetsConcurrentRequestsToTerraform(struct?: ServiceDefinitionScalingsTargetsConcurrentRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceDefinitionScalingsTargetsConcurrentRequestsToHclTerraform(struct?: ServiceDefinitionScalingsTargetsConcurrentRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsConcurrentRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargetsConcurrentRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargetsConcurrentRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDefinitionScalingsTargetsConcurrentRequestsList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargetsConcurrentRequests[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsConcurrentRequestsOutputReference {
    return new ServiceDefinitionScalingsTargetsConcurrentRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargetsRequestResponseTime {
  /**
  * The target value of the autoscaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value: number;
}

export function serviceDefinitionScalingsTargetsRequestResponseTimeToTerraform(struct?: ServiceDefinitionScalingsTargetsRequestResponseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceDefinitionScalingsTargetsRequestResponseTimeToHclTerraform(struct?: ServiceDefinitionScalingsTargetsRequestResponseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsRequestResponseTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargetsRequestResponseTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargetsRequestResponseTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDefinitionScalingsTargetsRequestResponseTimeList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargetsRequestResponseTime[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsRequestResponseTimeOutputReference {
    return new ServiceDefinitionScalingsTargetsRequestResponseTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargetsRequestsPerSecond {
  /**
  * The target value of the autoscaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#value Service#value}
  */
  readonly value: number;
}

export function serviceDefinitionScalingsTargetsRequestsPerSecondToTerraform(struct?: ServiceDefinitionScalingsTargetsRequestsPerSecond | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceDefinitionScalingsTargetsRequestsPerSecondToHclTerraform(struct?: ServiceDefinitionScalingsTargetsRequestsPerSecond | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsRequestsPerSecondOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargetsRequestsPerSecond | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargetsRequestsPerSecond | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDefinitionScalingsTargetsRequestsPerSecondList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargetsRequestsPerSecond[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsRequestsPerSecondOutputReference {
    return new ServiceDefinitionScalingsTargetsRequestsPerSecondOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalingsTargets {
  /**
  * average_cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#average_cpu Service#average_cpu}
  */
  readonly averageCpu?: ServiceDefinitionScalingsTargetsAverageCpu[] | cdktf.IResolvable;
  /**
  * average_mem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#average_mem Service#average_mem}
  */
  readonly averageMem?: ServiceDefinitionScalingsTargetsAverageMem[] | cdktf.IResolvable;
  /**
  * concurrent_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#concurrent_requests Service#concurrent_requests}
  */
  readonly concurrentRequests?: ServiceDefinitionScalingsTargetsConcurrentRequests[] | cdktf.IResolvable;
  /**
  * request_response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#request_response_time Service#request_response_time}
  */
  readonly requestResponseTime?: ServiceDefinitionScalingsTargetsRequestResponseTime[] | cdktf.IResolvable;
  /**
  * requests_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#requests_per_second Service#requests_per_second}
  */
  readonly requestsPerSecond?: ServiceDefinitionScalingsTargetsRequestsPerSecond[] | cdktf.IResolvable;
}

export function serviceDefinitionScalingsTargetsToTerraform(struct?: ServiceDefinitionScalingsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_cpu: cdktf.listMapper(serviceDefinitionScalingsTargetsAverageCpuToTerraform, true)(struct!.averageCpu),
    average_mem: cdktf.listMapper(serviceDefinitionScalingsTargetsAverageMemToTerraform, true)(struct!.averageMem),
    concurrent_requests: cdktf.listMapper(serviceDefinitionScalingsTargetsConcurrentRequestsToTerraform, true)(struct!.concurrentRequests),
    request_response_time: cdktf.listMapper(serviceDefinitionScalingsTargetsRequestResponseTimeToTerraform, true)(struct!.requestResponseTime),
    requests_per_second: cdktf.listMapper(serviceDefinitionScalingsTargetsRequestsPerSecondToTerraform, true)(struct!.requestsPerSecond),
  }
}


export function serviceDefinitionScalingsTargetsToHclTerraform(struct?: ServiceDefinitionScalingsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_cpu: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsAverageCpuToHclTerraform, true)(struct!.averageCpu),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsAverageCpuList",
    },
    average_mem: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsAverageMemToHclTerraform, true)(struct!.averageMem),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsAverageMemList",
    },
    concurrent_requests: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsConcurrentRequestsToHclTerraform, true)(struct!.concurrentRequests),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsConcurrentRequestsList",
    },
    request_response_time: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsRequestResponseTimeToHclTerraform, true)(struct!.requestResponseTime),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsRequestResponseTimeList",
    },
    requests_per_second: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsRequestsPerSecondToHclTerraform, true)(struct!.requestsPerSecond),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsRequestsPerSecondList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalingsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageCpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageCpu = this._averageCpu?.internalValue;
    }
    if (this._averageMem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageMem = this._averageMem?.internalValue;
    }
    if (this._concurrentRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentRequests = this._concurrentRequests?.internalValue;
    }
    if (this._requestResponseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestResponseTime = this._requestResponseTime?.internalValue;
    }
    if (this._requestsPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerSecond = this._requestsPerSecond?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalingsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageCpu.internalValue = undefined;
      this._averageMem.internalValue = undefined;
      this._concurrentRequests.internalValue = undefined;
      this._requestResponseTime.internalValue = undefined;
      this._requestsPerSecond.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageCpu.internalValue = value.averageCpu;
      this._averageMem.internalValue = value.averageMem;
      this._concurrentRequests.internalValue = value.concurrentRequests;
      this._requestResponseTime.internalValue = value.requestResponseTime;
      this._requestsPerSecond.internalValue = value.requestsPerSecond;
    }
  }

  // average_cpu - computed: false, optional: true, required: false
  private _averageCpu = new ServiceDefinitionScalingsTargetsAverageCpuList(this, "average_cpu", true);
  public get averageCpu() {
    return this._averageCpu;
  }
  public putAverageCpu(value: ServiceDefinitionScalingsTargetsAverageCpu[] | cdktf.IResolvable) {
    this._averageCpu.internalValue = value;
  }
  public resetAverageCpu() {
    this._averageCpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageCpuInput() {
    return this._averageCpu.internalValue;
  }

  // average_mem - computed: false, optional: true, required: false
  private _averageMem = new ServiceDefinitionScalingsTargetsAverageMemList(this, "average_mem", true);
  public get averageMem() {
    return this._averageMem;
  }
  public putAverageMem(value: ServiceDefinitionScalingsTargetsAverageMem[] | cdktf.IResolvable) {
    this._averageMem.internalValue = value;
  }
  public resetAverageMem() {
    this._averageMem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageMemInput() {
    return this._averageMem.internalValue;
  }

  // concurrent_requests - computed: false, optional: true, required: false
  private _concurrentRequests = new ServiceDefinitionScalingsTargetsConcurrentRequestsList(this, "concurrent_requests", true);
  public get concurrentRequests() {
    return this._concurrentRequests;
  }
  public putConcurrentRequests(value: ServiceDefinitionScalingsTargetsConcurrentRequests[] | cdktf.IResolvable) {
    this._concurrentRequests.internalValue = value;
  }
  public resetConcurrentRequests() {
    this._concurrentRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentRequestsInput() {
    return this._concurrentRequests.internalValue;
  }

  // request_response_time - computed: false, optional: true, required: false
  private _requestResponseTime = new ServiceDefinitionScalingsTargetsRequestResponseTimeList(this, "request_response_time", true);
  public get requestResponseTime() {
    return this._requestResponseTime;
  }
  public putRequestResponseTime(value: ServiceDefinitionScalingsTargetsRequestResponseTime[] | cdktf.IResolvable) {
    this._requestResponseTime.internalValue = value;
  }
  public resetRequestResponseTime() {
    this._requestResponseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestResponseTimeInput() {
    return this._requestResponseTime.internalValue;
  }

  // requests_per_second - computed: false, optional: true, required: false
  private _requestsPerSecond = new ServiceDefinitionScalingsTargetsRequestsPerSecondList(this, "requests_per_second", true);
  public get requestsPerSecond() {
    return this._requestsPerSecond;
  }
  public putRequestsPerSecond(value: ServiceDefinitionScalingsTargetsRequestsPerSecond[] | cdktf.IResolvable) {
    this._requestsPerSecond.internalValue = value;
  }
  public resetRequestsPerSecond() {
    this._requestsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond.internalValue;
  }
}

export class ServiceDefinitionScalingsTargetsList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalingsTargets[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsTargetsOutputReference {
    return new ServiceDefinitionScalingsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionScalings {
  /**
  * The maximum number of instance to use to support your service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#max Service#max}
  */
  readonly max?: number;
  /**
  * The minimal number of instances to use to support your service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#min Service#min}
  */
  readonly min?: number;
  /**
  * The regions to apply the scaling configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#scopes Service#scopes}
  */
  readonly scopes?: string[];
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#targets Service#targets}
  */
  readonly targets?: ServiceDefinitionScalingsTargets[] | cdktf.IResolvable;
}

export function serviceDefinitionScalingsToTerraform(struct?: ServiceDefinitionScalings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    targets: cdktf.listMapper(serviceDefinitionScalingsTargetsToTerraform, true)(struct!.targets),
  }
}


export function serviceDefinitionScalingsToHclTerraform(struct?: ServiceDefinitionScalings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    targets: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionScalingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionScalings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionScalings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._scopes = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._scopes = value.scopes;
      this._targets.internalValue = value.targets;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new ServiceDefinitionScalingsTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ServiceDefinitionScalingsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class ServiceDefinitionScalingsList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionScalings[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionScalingsOutputReference {
    return new ServiceDefinitionScalingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinitionVolumes {
  /**
  * The volume ID to mount to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The path where to mount the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#path Service#path}
  */
  readonly path: string;
  /**
  * Explicitly specify the replica index to mount the volume to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#replica_index Service#replica_index}
  */
  readonly replicaIndex?: number;
  /**
  * The regions to apply the scaling configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#scope Service#scope}
  */
  readonly scope?: string[];
}

export function serviceDefinitionVolumesToTerraform(struct?: ServiceDefinitionVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    path: cdktf.stringToTerraform(struct!.path),
    replica_index: cdktf.numberToTerraform(struct!.replicaIndex),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function serviceDefinitionVolumesToHclTerraform(struct?: ServiceDefinitionVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    replica_index: {
      value: cdktf.numberToHclTerraform(struct!.replicaIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDefinitionVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._replicaIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaIndex = this._replicaIndex;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinitionVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._path = undefined;
      this._replicaIndex = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._path = value.path;
      this._replicaIndex = value.replicaIndex;
      this._scope = value.scope;
    }
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

  // replica_index - computed: false, optional: true, required: false
  private _replicaIndex?: number; 
  public get replicaIndex() {
    return this.getNumberAttribute('replica_index');
  }
  public set replicaIndex(value: number) {
    this._replicaIndex = value;
  }
  public resetReplicaIndex() {
    this._replicaIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaIndexInput() {
    return this._replicaIndex;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class ServiceDefinitionVolumesList extends cdktf.ComplexList {
  public internalValue? : ServiceDefinitionVolumes[] | cdktf.IResolvable

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
  public get(index: number): ServiceDefinitionVolumesOutputReference {
    return new ServiceDefinitionVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDefinition {
  /**
  * The service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The service deployment regions to deploy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#regions Service#regions}
  */
  readonly regions: string[];
  /**
  * If set to true, the service will be deployed without using the cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#skip_cache Service#skip_cache}
  */
  readonly skipCache?: boolean | cdktf.IResolvable;
  /**
  * The service type, either WEB or WORKER (default WEB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#type Service#type}
  */
  readonly type?: string;
  /**
  * docker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#docker Service#docker}
  */
  readonly docker?: ServiceDefinitionDocker;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#env Service#env}
  */
  readonly env?: ServiceDefinitionEnv[] | cdktf.IResolvable;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#git Service#git}
  */
  readonly git?: ServiceDefinitionGit;
  /**
  * health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#health_checks Service#health_checks}
  */
  readonly healthChecks?: ServiceDefinitionHealthChecks[] | cdktf.IResolvable;
  /**
  * instance_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#instance_types Service#instance_types}
  */
  readonly instanceTypes: ServiceDefinitionInstanceTypes[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#ports Service#ports}
  */
  readonly ports?: ServiceDefinitionPorts[] | cdktf.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#routes Service#routes}
  */
  readonly routes?: ServiceDefinitionRoutes[] | cdktf.IResolvable;
  /**
  * scalings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#scalings Service#scalings}
  */
  readonly scalings: ServiceDefinitionScalings[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#volumes Service#volumes}
  */
  readonly volumes?: ServiceDefinitionVolumes[] | cdktf.IResolvable;
}

export function serviceDefinitionToTerraform(struct?: ServiceDefinitionOutputReference | ServiceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    skip_cache: cdktf.booleanToTerraform(struct!.skipCache),
    type: cdktf.stringToTerraform(struct!.type),
    docker: serviceDefinitionDockerToTerraform(struct!.docker),
    env: cdktf.listMapper(serviceDefinitionEnvToTerraform, true)(struct!.env),
    git: serviceDefinitionGitToTerraform(struct!.git),
    health_checks: cdktf.listMapper(serviceDefinitionHealthChecksToTerraform, true)(struct!.healthChecks),
    instance_types: cdktf.listMapper(serviceDefinitionInstanceTypesToTerraform, true)(struct!.instanceTypes),
    ports: cdktf.listMapper(serviceDefinitionPortsToTerraform, true)(struct!.ports),
    routes: cdktf.listMapper(serviceDefinitionRoutesToTerraform, true)(struct!.routes),
    scalings: cdktf.listMapper(serviceDefinitionScalingsToTerraform, true)(struct!.scalings),
    volumes: cdktf.listMapper(serviceDefinitionVolumesToTerraform, true)(struct!.volumes),
  }
}


export function serviceDefinitionToHclTerraform(struct?: ServiceDefinitionOutputReference | ServiceDefinition): any {
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
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    skip_cache: {
      value: cdktf.booleanToHclTerraform(struct!.skipCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker: {
      value: serviceDefinitionDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionDockerList",
    },
    env: {
      value: cdktf.listMapperHcl(serviceDefinitionEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionEnvList",
    },
    git: {
      value: serviceDefinitionGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionGitList",
    },
    health_checks: {
      value: cdktf.listMapperHcl(serviceDefinitionHealthChecksToHclTerraform, true)(struct!.healthChecks),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionHealthChecksList",
    },
    instance_types: {
      value: cdktf.listMapperHcl(serviceDefinitionInstanceTypesToHclTerraform, true)(struct!.instanceTypes),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionInstanceTypesList",
    },
    ports: {
      value: cdktf.listMapperHcl(serviceDefinitionPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionPortsList",
    },
    routes: {
      value: cdktf.listMapperHcl(serviceDefinitionRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionRoutesList",
    },
    scalings: {
      value: cdktf.listMapperHcl(serviceDefinitionScalingsToHclTerraform, true)(struct!.scalings),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionScalingsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(serviceDefinitionVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceDefinitionVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._skipCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCache = this._skipCache;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._instanceTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._scalings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalings = this._scalings?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._regions = undefined;
      this._skipCache = undefined;
      this._type = undefined;
      this._docker.internalValue = undefined;
      this._env.internalValue = undefined;
      this._git.internalValue = undefined;
      this._healthChecks.internalValue = undefined;
      this._instanceTypes.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._routes.internalValue = undefined;
      this._scalings.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._regions = value.regions;
      this._skipCache = value.skipCache;
      this._type = value.type;
      this._docker.internalValue = value.docker;
      this._env.internalValue = value.env;
      this._git.internalValue = value.git;
      this._healthChecks.internalValue = value.healthChecks;
      this._instanceTypes.internalValue = value.instanceTypes;
      this._ports.internalValue = value.ports;
      this._routes.internalValue = value.routes;
      this._scalings.internalValue = value.scalings;
      this._volumes.internalValue = value.volumes;
    }
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // skip_cache - computed: false, optional: true, required: false
  private _skipCache?: boolean | cdktf.IResolvable; 
  public get skipCache() {
    return this.getBooleanAttribute('skip_cache');
  }
  public set skipCache(value: boolean | cdktf.IResolvable) {
    this._skipCache = value;
  }
  public resetSkipCache() {
    this._skipCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCacheInput() {
    return this._skipCache;
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

  // docker - computed: false, optional: true, required: false
  private _docker = new ServiceDefinitionDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: ServiceDefinitionDocker) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new ServiceDefinitionEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ServiceDefinitionEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // git - computed: false, optional: true, required: false
  private _git = new ServiceDefinitionGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: ServiceDefinitionGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new ServiceDefinitionHealthChecksList(this, "health_checks", true);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: ServiceDefinitionHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes = new ServiceDefinitionInstanceTypesList(this, "instance_types", true);
  public get instanceTypes() {
    return this._instanceTypes;
  }
  public putInstanceTypes(value: ServiceDefinitionInstanceTypes[] | cdktf.IResolvable) {
    this._instanceTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ServiceDefinitionPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ServiceDefinitionPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ServiceDefinitionRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ServiceDefinitionRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // scalings - computed: false, optional: false, required: true
  private _scalings = new ServiceDefinitionScalingsList(this, "scalings", true);
  public get scalings() {
    return this._scalings;
  }
  public putScalings(value: ServiceDefinitionScalings[] | cdktf.IResolvable) {
    this._scalings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingsInput() {
    return this._scalings.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new ServiceDefinitionVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ServiceDefinitionVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service koyeb_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "koyeb_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "koyeb_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/service koyeb_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'koyeb_service',
      terraformGeneratorMetadata: {
        providerName: 'koyeb',
        providerVersion: '0.1.11',
        providerVersionConstraint: '0.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._messages = config.messages;
    this._definition.internalValue = config.definition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_deployment - computed: true, optional: false, required: false
  public get activeDeployment() {
    return this.getStringAttribute('active_deployment');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_deployment - computed: true, optional: false, required: false
  public get latestDeployment() {
    return this.getStringAttribute('latest_deployment');
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string; 
  public get messages() {
    return this.getStringAttribute('messages');
  }
  public set messages(value: string) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // paused_at - computed: true, optional: false, required: false
  public get pausedAt() {
    return this.getStringAttribute('paused_at');
  }

  // resumed_at - computed: true, optional: false, required: false
  public get resumedAt() {
    return this.getStringAttribute('resumed_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // terminated_at - computed: true, optional: false, required: false
  public get terminatedAt() {
    return this.getStringAttribute('terminated_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new ServiceDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: ServiceDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      messages: cdktf.stringToTerraform(this._messages),
      definition: serviceDefinitionToTerraform(this._definition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages: {
        value: cdktf.stringToHclTerraform(this._messages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition: {
        value: serviceDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
