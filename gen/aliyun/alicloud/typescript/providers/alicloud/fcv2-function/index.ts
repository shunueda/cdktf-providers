// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Fcv2FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#ca_port Fcv2Function#ca_port}
  */
  readonly caPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#code_checksum Fcv2Function#code_checksum}
  */
  readonly codeChecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#cpu Fcv2Function#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#description Fcv2Function#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#disk_size Fcv2Function#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#environment_variables Fcv2Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#function_name Fcv2Function#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#gpu_memory_size Fcv2Function#gpu_memory_size}
  */
  readonly gpuMemorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#handler Fcv2Function#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#id Fcv2Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#initialization_timeout Fcv2Function#initialization_timeout}
  */
  readonly initializationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#initializer Fcv2Function#initializer}
  */
  readonly initializer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#instance_concurrency Fcv2Function#instance_concurrency}
  */
  readonly instanceConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#instance_type Fcv2Function#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#layers Fcv2Function#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#memory_size Fcv2Function#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#runtime Fcv2Function#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#service_name Fcv2Function#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#timeout Fcv2Function#timeout}
  */
  readonly timeout?: number;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#code Fcv2Function#code}
  */
  readonly code?: Fcv2FunctionCode;
  /**
  * custom_container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#custom_container_config Fcv2Function#custom_container_config}
  */
  readonly customContainerConfig?: Fcv2FunctionCustomContainerConfig;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#custom_dns Fcv2Function#custom_dns}
  */
  readonly customDns?: Fcv2FunctionCustomDns;
  /**
  * custom_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#custom_health_check_config Fcv2Function#custom_health_check_config}
  */
  readonly customHealthCheckConfig?: Fcv2FunctionCustomHealthCheckConfig;
  /**
  * custom_runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#custom_runtime_config Fcv2Function#custom_runtime_config}
  */
  readonly customRuntimeConfig?: Fcv2FunctionCustomRuntimeConfig;
  /**
  * instance_lifecycle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#instance_lifecycle_config Fcv2Function#instance_lifecycle_config}
  */
  readonly instanceLifecycleConfig?: Fcv2FunctionInstanceLifecycleConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#timeouts Fcv2Function#timeouts}
  */
  readonly timeouts?: Fcv2FunctionTimeouts;
}
export interface Fcv2FunctionCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#oss_bucket_name Fcv2Function#oss_bucket_name}
  */
  readonly ossBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#oss_object_name Fcv2Function#oss_object_name}
  */
  readonly ossObjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#zip_file Fcv2Function#zip_file}
  */
  readonly zipFile?: string;
}

export function fcv2FunctionCodeToTerraform(struct?: Fcv2FunctionCodeOutputReference | Fcv2FunctionCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oss_bucket_name: cdktf.stringToTerraform(struct!.ossBucketName),
    oss_object_name: cdktf.stringToTerraform(struct!.ossObjectName),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}


export function fcv2FunctionCodeToHclTerraform(struct?: Fcv2FunctionCodeOutputReference | Fcv2FunctionCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oss_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.ossBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oss_object_name: {
      value: cdktf.stringToHclTerraform(struct!.ossObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file: {
      value: cdktf.stringToHclTerraform(struct!.zipFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ossBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ossBucketName = this._ossBucketName;
    }
    if (this._ossObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ossObjectName = this._ossObjectName;
    }
    if (this._zipFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFile = this._zipFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ossBucketName = undefined;
      this._ossObjectName = undefined;
      this._zipFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ossBucketName = value.ossBucketName;
      this._ossObjectName = value.ossObjectName;
      this._zipFile = value.zipFile;
    }
  }

  // oss_bucket_name - computed: false, optional: true, required: false
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  public resetOssBucketName() {
    this._ossBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // oss_object_name - computed: false, optional: true, required: false
  private _ossObjectName?: string; 
  public get ossObjectName() {
    return this.getStringAttribute('oss_object_name');
  }
  public set ossObjectName(value: string) {
    this._ossObjectName = value;
  }
  public resetOssObjectName() {
    this._ossObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossObjectNameInput() {
    return this._ossObjectName;
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
}
export interface Fcv2FunctionCustomContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#acceleration_type Fcv2Function#acceleration_type}
  */
  readonly accelerationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#args Fcv2Function#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#command Fcv2Function#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#image Fcv2Function#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#web_server_mode Fcv2Function#web_server_mode}
  */
  readonly webServerMode?: boolean | cdktf.IResolvable;
}

export function fcv2FunctionCustomContainerConfigToTerraform(struct?: Fcv2FunctionCustomContainerConfigOutputReference | Fcv2FunctionCustomContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceleration_type: cdktf.stringToTerraform(struct!.accelerationType),
    args: cdktf.stringToTerraform(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    web_server_mode: cdktf.booleanToTerraform(struct!.webServerMode),
  }
}


export function fcv2FunctionCustomContainerConfigToHclTerraform(struct?: Fcv2FunctionCustomContainerConfigOutputReference | Fcv2FunctionCustomContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceleration_type: {
      value: cdktf.stringToHclTerraform(struct!.accelerationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_server_mode: {
      value: cdktf.booleanToHclTerraform(struct!.webServerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionCustomContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionCustomContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerationType = this._accelerationType;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._webServerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerMode = this._webServerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionCustomContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accelerationType = undefined;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
      this._webServerMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accelerationType = value.accelerationType;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
      this._webServerMode = value.webServerMode;
    }
  }

  // acceleration_type - computed: false, optional: true, required: false
  private _accelerationType?: string; 
  public get accelerationType() {
    return this.getStringAttribute('acceleration_type');
  }
  public set accelerationType(value: string) {
    this._accelerationType = value;
  }
  public resetAccelerationType() {
    this._accelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationTypeInput() {
    return this._accelerationType;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // web_server_mode - computed: false, optional: true, required: false
  private _webServerMode?: boolean | cdktf.IResolvable; 
  public get webServerMode() {
    return this.getBooleanAttribute('web_server_mode');
  }
  public set webServerMode(value: boolean | cdktf.IResolvable) {
    this._webServerMode = value;
  }
  public resetWebServerMode() {
    this._webServerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerModeInput() {
    return this._webServerMode;
  }
}
export interface Fcv2FunctionCustomDnsDnsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#name Fcv2Function#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#value Fcv2Function#value}
  */
  readonly value?: string;
}

export function fcv2FunctionCustomDnsDnsOptionsToTerraform(struct?: Fcv2FunctionCustomDnsDnsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fcv2FunctionCustomDnsDnsOptionsToHclTerraform(struct?: Fcv2FunctionCustomDnsDnsOptions | cdktf.IResolvable): any {
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

export class Fcv2FunctionCustomDnsDnsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv2FunctionCustomDnsDnsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Fcv2FunctionCustomDnsDnsOptions | cdktf.IResolvable | undefined) {
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

export class Fcv2FunctionCustomDnsDnsOptionsList extends cdktf.ComplexList {
  public internalValue? : Fcv2FunctionCustomDnsDnsOptions[] | cdktf.IResolvable

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
  public get(index: number): Fcv2FunctionCustomDnsDnsOptionsOutputReference {
    return new Fcv2FunctionCustomDnsDnsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv2FunctionCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#name_servers Fcv2Function#name_servers}
  */
  readonly nameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#searches Fcv2Function#searches}
  */
  readonly searches?: string[];
  /**
  * dns_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#dns_options Fcv2Function#dns_options}
  */
  readonly dnsOptions?: Fcv2FunctionCustomDnsDnsOptions[] | cdktf.IResolvable;
}

export function fcv2FunctionCustomDnsToTerraform(struct?: Fcv2FunctionCustomDnsOutputReference | Fcv2FunctionCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServers),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
    dns_options: cdktf.listMapper(fcv2FunctionCustomDnsDnsOptionsToTerraform, true)(struct!.dnsOptions),
  }
}


export function fcv2FunctionCustomDnsToHclTerraform(struct?: Fcv2FunctionCustomDnsOutputReference | Fcv2FunctionCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_options: {
      value: cdktf.listMapperHcl(fcv2FunctionCustomDnsDnsOptionsToHclTerraform, true)(struct!.dnsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv2FunctionCustomDnsDnsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    if (this._dnsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOptions = this._dnsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameServers = undefined;
      this._searches = undefined;
      this._dnsOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameServers = value.nameServers;
      this._searches = value.searches;
      this._dnsOptions.internalValue = value.dnsOptions;
    }
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }

  // dns_options - computed: false, optional: true, required: false
  private _dnsOptions = new Fcv2FunctionCustomDnsDnsOptionsList(this, "dns_options", false);
  public get dnsOptions() {
    return this._dnsOptions;
  }
  public putDnsOptions(value: Fcv2FunctionCustomDnsDnsOptions[] | cdktf.IResolvable) {
    this._dnsOptions.internalValue = value;
  }
  public resetDnsOptions() {
    this._dnsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptionsInput() {
    return this._dnsOptions.internalValue;
  }
}
export interface Fcv2FunctionCustomHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#failure_threshold Fcv2Function#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#http_get_url Fcv2Function#http_get_url}
  */
  readonly httpGetUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#initial_delay_seconds Fcv2Function#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#period_seconds Fcv2Function#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#success_threshold Fcv2Function#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#timeout_seconds Fcv2Function#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function fcv2FunctionCustomHealthCheckConfigToTerraform(struct?: Fcv2FunctionCustomHealthCheckConfigOutputReference | Fcv2FunctionCustomHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_url: cdktf.stringToTerraform(struct!.httpGetUrl),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function fcv2FunctionCustomHealthCheckConfigToHclTerraform(struct?: Fcv2FunctionCustomHealthCheckConfigOutputReference | Fcv2FunctionCustomHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_url: {
      value: cdktf.stringToHclTerraform(struct!.httpGetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionCustomHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionCustomHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetUrl = this._httpGetUrl;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionCustomHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._httpGetUrl = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._httpGetUrl = value.httpGetUrl;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_url - computed: false, optional: true, required: false
  private _httpGetUrl?: string; 
  public get httpGetUrl() {
    return this.getStringAttribute('http_get_url');
  }
  public set httpGetUrl(value: string) {
    this._httpGetUrl = value;
  }
  public resetHttpGetUrl() {
    this._httpGetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetUrlInput() {
    return this._httpGetUrl;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface Fcv2FunctionCustomRuntimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#args Fcv2Function#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#command Fcv2Function#command}
  */
  readonly command?: string[];
}

export function fcv2FunctionCustomRuntimeConfigToTerraform(struct?: Fcv2FunctionCustomRuntimeConfigOutputReference | Fcv2FunctionCustomRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function fcv2FunctionCustomRuntimeConfigToHclTerraform(struct?: Fcv2FunctionCustomRuntimeConfigOutputReference | Fcv2FunctionCustomRuntimeConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionCustomRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionCustomRuntimeConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionCustomRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
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
}
export interface Fcv2FunctionInstanceLifecycleConfigPreFreeze {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#handler Fcv2Function#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#timeout Fcv2Function#timeout}
  */
  readonly timeout?: number;
}

export function fcv2FunctionInstanceLifecycleConfigPreFreezeToTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigPreFreezeOutputReference | Fcv2FunctionInstanceLifecycleConfigPreFreeze): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: cdktf.stringToTerraform(struct!.handler),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function fcv2FunctionInstanceLifecycleConfigPreFreezeToHclTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigPreFreezeOutputReference | Fcv2FunctionInstanceLifecycleConfigPreFreeze): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionInstanceLifecycleConfigPreFreezeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionInstanceLifecycleConfigPreFreeze | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionInstanceLifecycleConfigPreFreeze | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler = value.handler;
      this._timeout = value.timeout;
    }
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
}
export interface Fcv2FunctionInstanceLifecycleConfigPreStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#handler Fcv2Function#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#timeout Fcv2Function#timeout}
  */
  readonly timeout?: number;
}

export function fcv2FunctionInstanceLifecycleConfigPreStopToTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigPreStopOutputReference | Fcv2FunctionInstanceLifecycleConfigPreStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: cdktf.stringToTerraform(struct!.handler),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function fcv2FunctionInstanceLifecycleConfigPreStopToHclTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigPreStopOutputReference | Fcv2FunctionInstanceLifecycleConfigPreStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionInstanceLifecycleConfigPreStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionInstanceLifecycleConfigPreStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionInstanceLifecycleConfigPreStop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler = value.handler;
      this._timeout = value.timeout;
    }
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
}
export interface Fcv2FunctionInstanceLifecycleConfig {
  /**
  * pre_freeze block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#pre_freeze Fcv2Function#pre_freeze}
  */
  readonly preFreeze?: Fcv2FunctionInstanceLifecycleConfigPreFreeze;
  /**
  * pre_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#pre_stop Fcv2Function#pre_stop}
  */
  readonly preStop?: Fcv2FunctionInstanceLifecycleConfigPreStop;
}

export function fcv2FunctionInstanceLifecycleConfigToTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigOutputReference | Fcv2FunctionInstanceLifecycleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pre_freeze: fcv2FunctionInstanceLifecycleConfigPreFreezeToTerraform(struct!.preFreeze),
    pre_stop: fcv2FunctionInstanceLifecycleConfigPreStopToTerraform(struct!.preStop),
  }
}


export function fcv2FunctionInstanceLifecycleConfigToHclTerraform(struct?: Fcv2FunctionInstanceLifecycleConfigOutputReference | Fcv2FunctionInstanceLifecycleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pre_freeze: {
      value: fcv2FunctionInstanceLifecycleConfigPreFreezeToHclTerraform(struct!.preFreeze),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv2FunctionInstanceLifecycleConfigPreFreezeList",
    },
    pre_stop: {
      value: fcv2FunctionInstanceLifecycleConfigPreStopToHclTerraform(struct!.preStop),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv2FunctionInstanceLifecycleConfigPreStopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv2FunctionInstanceLifecycleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv2FunctionInstanceLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preFreeze?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preFreeze = this._preFreeze?.internalValue;
    }
    if (this._preStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv2FunctionInstanceLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preFreeze.internalValue = undefined;
      this._preStop.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preFreeze.internalValue = value.preFreeze;
      this._preStop.internalValue = value.preStop;
    }
  }

  // pre_freeze - computed: false, optional: true, required: false
  private _preFreeze = new Fcv2FunctionInstanceLifecycleConfigPreFreezeOutputReference(this, "pre_freeze");
  public get preFreeze() {
    return this._preFreeze;
  }
  public putPreFreeze(value: Fcv2FunctionInstanceLifecycleConfigPreFreeze) {
    this._preFreeze.internalValue = value;
  }
  public resetPreFreeze() {
    this._preFreeze.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preFreezeInput() {
    return this._preFreeze.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new Fcv2FunctionInstanceLifecycleConfigPreStopOutputReference(this, "pre_stop");
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: Fcv2FunctionInstanceLifecycleConfigPreStop) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }
}
export interface Fcv2FunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#create Fcv2Function#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#delete Fcv2Function#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#update Fcv2Function#update}
  */
  readonly update?: string;
}

export function fcv2FunctionTimeoutsToTerraform(struct?: Fcv2FunctionTimeouts | cdktf.IResolvable): any {
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


export function fcv2FunctionTimeoutsToHclTerraform(struct?: Fcv2FunctionTimeouts | cdktf.IResolvable): any {
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

export class Fcv2FunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Fcv2FunctionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Fcv2FunctionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function alicloud_fcv2_function}
*/
export class Fcv2Function extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fcv2_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fcv2Function resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fcv2Function to import
  * @param importFromId The id of the existing Fcv2Function that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fcv2Function to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fcv2_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv2_function alicloud_fcv2_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Fcv2FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: Fcv2FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fcv2_function',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caPort = config.caPort;
    this._codeChecksum = config.codeChecksum;
    this._cpu = config.cpu;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._environmentVariables = config.environmentVariables;
    this._functionName = config.functionName;
    this._gpuMemorySize = config.gpuMemorySize;
    this._handler = config.handler;
    this._id = config.id;
    this._initializationTimeout = config.initializationTimeout;
    this._initializer = config.initializer;
    this._instanceConcurrency = config.instanceConcurrency;
    this._instanceType = config.instanceType;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._runtime = config.runtime;
    this._serviceName = config.serviceName;
    this._timeout = config.timeout;
    this._code.internalValue = config.code;
    this._customContainerConfig.internalValue = config.customContainerConfig;
    this._customDns.internalValue = config.customDns;
    this._customHealthCheckConfig.internalValue = config.customHealthCheckConfig;
    this._customRuntimeConfig.internalValue = config.customRuntimeConfig;
    this._instanceLifecycleConfig.internalValue = config.instanceLifecycleConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_port - computed: true, optional: true, required: false
  private _caPort?: number; 
  public get caPort() {
    return this.getNumberAttribute('ca_port');
  }
  public set caPort(value: number) {
    this._caPort = value;
  }
  public resetCaPort() {
    this._caPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPortInput() {
    return this._caPort;
  }

  // code_checksum - computed: true, optional: true, required: false
  private _codeChecksum?: string; 
  public get codeChecksum() {
    return this.getStringAttribute('code_checksum');
  }
  public set codeChecksum(value: string) {
    this._codeChecksum = value;
  }
  public resetCodeChecksum() {
    this._codeChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeChecksumInput() {
    return this._codeChecksum;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // gpu_memory_size - computed: false, optional: true, required: false
  private _gpuMemorySize?: number; 
  public get gpuMemorySize() {
    return this.getNumberAttribute('gpu_memory_size');
  }
  public set gpuMemorySize(value: number) {
    this._gpuMemorySize = value;
  }
  public resetGpuMemorySize() {
    this._gpuMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuMemorySizeInput() {
    return this._gpuMemorySize;
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // initialization_timeout - computed: true, optional: true, required: false
  private _initializationTimeout?: number; 
  public get initializationTimeout() {
    return this.getNumberAttribute('initialization_timeout');
  }
  public set initializationTimeout(value: number) {
    this._initializationTimeout = value;
  }
  public resetInitializationTimeout() {
    this._initializationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationTimeoutInput() {
    return this._initializationTimeout;
  }

  // initializer - computed: false, optional: true, required: false
  private _initializer?: string; 
  public get initializer() {
    return this.getStringAttribute('initializer');
  }
  public set initializer(value: string) {
    this._initializer = value;
  }
  public resetInitializer() {
    this._initializer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerInput() {
    return this._initializer;
  }

  // instance_concurrency - computed: true, optional: true, required: false
  private _instanceConcurrency?: number; 
  public get instanceConcurrency() {
    return this.getNumberAttribute('instance_concurrency');
  }
  public set instanceConcurrency(value: number) {
    this._instanceConcurrency = value;
  }
  public resetInstanceConcurrency() {
    this._instanceConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConcurrencyInput() {
    return this._instanceConcurrency;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[]; 
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[]) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers;
  }

  // memory_size - computed: true, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // timeout - computed: true, optional: true, required: false
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

  // code - computed: false, optional: true, required: false
  private _code = new Fcv2FunctionCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: Fcv2FunctionCode) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // custom_container_config - computed: false, optional: true, required: false
  private _customContainerConfig = new Fcv2FunctionCustomContainerConfigOutputReference(this, "custom_container_config");
  public get customContainerConfig() {
    return this._customContainerConfig;
  }
  public putCustomContainerConfig(value: Fcv2FunctionCustomContainerConfig) {
    this._customContainerConfig.internalValue = value;
  }
  public resetCustomContainerConfig() {
    this._customContainerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customContainerConfigInput() {
    return this._customContainerConfig.internalValue;
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new Fcv2FunctionCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: Fcv2FunctionCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // custom_health_check_config - computed: false, optional: true, required: false
  private _customHealthCheckConfig = new Fcv2FunctionCustomHealthCheckConfigOutputReference(this, "custom_health_check_config");
  public get customHealthCheckConfig() {
    return this._customHealthCheckConfig;
  }
  public putCustomHealthCheckConfig(value: Fcv2FunctionCustomHealthCheckConfig) {
    this._customHealthCheckConfig.internalValue = value;
  }
  public resetCustomHealthCheckConfig() {
    this._customHealthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHealthCheckConfigInput() {
    return this._customHealthCheckConfig.internalValue;
  }

  // custom_runtime_config - computed: false, optional: true, required: false
  private _customRuntimeConfig = new Fcv2FunctionCustomRuntimeConfigOutputReference(this, "custom_runtime_config");
  public get customRuntimeConfig() {
    return this._customRuntimeConfig;
  }
  public putCustomRuntimeConfig(value: Fcv2FunctionCustomRuntimeConfig) {
    this._customRuntimeConfig.internalValue = value;
  }
  public resetCustomRuntimeConfig() {
    this._customRuntimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuntimeConfigInput() {
    return this._customRuntimeConfig.internalValue;
  }

  // instance_lifecycle_config - computed: false, optional: true, required: false
  private _instanceLifecycleConfig = new Fcv2FunctionInstanceLifecycleConfigOutputReference(this, "instance_lifecycle_config");
  public get instanceLifecycleConfig() {
    return this._instanceLifecycleConfig;
  }
  public putInstanceLifecycleConfig(value: Fcv2FunctionInstanceLifecycleConfig) {
    this._instanceLifecycleConfig.internalValue = value;
  }
  public resetInstanceLifecycleConfig() {
    this._instanceLifecycleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLifecycleConfigInput() {
    return this._instanceLifecycleConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Fcv2FunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Fcv2FunctionTimeouts) {
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
      ca_port: cdktf.numberToTerraform(this._caPort),
      code_checksum: cdktf.stringToTerraform(this._codeChecksum),
      cpu: cdktf.numberToTerraform(this._cpu),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      function_name: cdktf.stringToTerraform(this._functionName),
      gpu_memory_size: cdktf.numberToTerraform(this._gpuMemorySize),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      initialization_timeout: cdktf.numberToTerraform(this._initializationTimeout),
      initializer: cdktf.stringToTerraform(this._initializer),
      instance_concurrency: cdktf.numberToTerraform(this._instanceConcurrency),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      layers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._layers),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_name: cdktf.stringToTerraform(this._serviceName),
      timeout: cdktf.numberToTerraform(this._timeout),
      code: fcv2FunctionCodeToTerraform(this._code.internalValue),
      custom_container_config: fcv2FunctionCustomContainerConfigToTerraform(this._customContainerConfig.internalValue),
      custom_dns: fcv2FunctionCustomDnsToTerraform(this._customDns.internalValue),
      custom_health_check_config: fcv2FunctionCustomHealthCheckConfigToTerraform(this._customHealthCheckConfig.internalValue),
      custom_runtime_config: fcv2FunctionCustomRuntimeConfigToTerraform(this._customRuntimeConfig.internalValue),
      instance_lifecycle_config: fcv2FunctionInstanceLifecycleConfigToTerraform(this._instanceLifecycleConfig.internalValue),
      timeouts: fcv2FunctionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_port: {
        value: cdktf.numberToHclTerraform(this._caPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code_checksum: {
        value: cdktf.stringToHclTerraform(this._codeChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
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
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_memory_size: {
        value: cdktf.numberToHclTerraform(this._gpuMemorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      initialization_timeout: {
        value: cdktf.numberToHclTerraform(this._initializationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initializer: {
        value: cdktf.stringToHclTerraform(this._initializer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_concurrency: {
        value: cdktf.numberToHclTerraform(this._instanceConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._layers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code: {
        value: fcv2FunctionCodeToHclTerraform(this._code.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionCodeList",
      },
      custom_container_config: {
        value: fcv2FunctionCustomContainerConfigToHclTerraform(this._customContainerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionCustomContainerConfigList",
      },
      custom_dns: {
        value: fcv2FunctionCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionCustomDnsList",
      },
      custom_health_check_config: {
        value: fcv2FunctionCustomHealthCheckConfigToHclTerraform(this._customHealthCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionCustomHealthCheckConfigList",
      },
      custom_runtime_config: {
        value: fcv2FunctionCustomRuntimeConfigToHclTerraform(this._customRuntimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionCustomRuntimeConfigList",
      },
      instance_lifecycle_config: {
        value: fcv2FunctionInstanceLifecycleConfigToHclTerraform(this._instanceLifecycleConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv2FunctionInstanceLifecycleConfigList",
      },
      timeouts: {
        value: fcv2FunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Fcv2FunctionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
