// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FcFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#ca_port FcFunction#ca_port}
  */
  readonly caPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#code_checksum FcFunction#code_checksum}
  */
  readonly codeChecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#description FcFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#environment_variables FcFunction#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#filename FcFunction#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#handler FcFunction#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#id FcFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#initialization_timeout FcFunction#initialization_timeout}
  */
  readonly initializationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#initializer FcFunction#initializer}
  */
  readonly initializer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#instance_concurrency FcFunction#instance_concurrency}
  */
  readonly instanceConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#instance_type FcFunction#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#layers FcFunction#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#memory_size FcFunction#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#name FcFunction#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#name_prefix FcFunction#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#oss_bucket FcFunction#oss_bucket}
  */
  readonly ossBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#oss_key FcFunction#oss_key}
  */
  readonly ossKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#runtime FcFunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#service FcFunction#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#timeout FcFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * custom_container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#custom_container_config FcFunction#custom_container_config}
  */
  readonly customContainerConfig?: FcFunctionCustomContainerConfig;
}
export interface FcFunctionCustomContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#args FcFunction#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#command FcFunction#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#image FcFunction#image}
  */
  readonly image: string;
}

export function fcFunctionCustomContainerConfigToTerraform(struct?: FcFunctionCustomContainerConfigOutputReference | FcFunctionCustomContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function fcFunctionCustomContainerConfigToHclTerraform(struct?: FcFunctionCustomContainerConfigOutputReference | FcFunctionCustomContainerConfig): any {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcFunctionCustomContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcFunctionCustomContainerConfig | undefined {
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
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcFunctionCustomContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function alicloud_fc_function}
*/
export class FcFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fc_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FcFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FcFunction to import
  * @param importFromId The id of the existing FcFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FcFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fc_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/fc_function alicloud_fc_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FcFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FcFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fc_function',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._description = config.description;
    this._environmentVariables = config.environmentVariables;
    this._filename = config.filename;
    this._handler = config.handler;
    this._id = config.id;
    this._initializationTimeout = config.initializationTimeout;
    this._initializer = config.initializer;
    this._instanceConcurrency = config.instanceConcurrency;
    this._instanceType = config.instanceType;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._ossBucket = config.ossBucket;
    this._ossKey = config.ossKey;
    this._runtime = config.runtime;
    this._service = config.service;
    this._timeout = config.timeout;
    this._customContainerConfig.internalValue = config.customContainerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_port - computed: false, optional: true, required: false
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
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

  // initialization_timeout - computed: false, optional: true, required: false
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

  // instance_concurrency - computed: false, optional: true, required: false
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

  // instance_type - computed: false, optional: true, required: false
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
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

  // memory_size - computed: false, optional: true, required: false
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

  // oss_bucket - computed: false, optional: true, required: false
  private _ossBucket?: string; 
  public get ossBucket() {
    return this.getStringAttribute('oss_bucket');
  }
  public set ossBucket(value: string) {
    this._ossBucket = value;
  }
  public resetOssBucket() {
    this._ossBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketInput() {
    return this._ossBucket;
  }

  // oss_key - computed: false, optional: true, required: false
  private _ossKey?: string; 
  public get ossKey() {
    return this.getStringAttribute('oss_key');
  }
  public set ossKey(value: string) {
    this._ossKey = value;
  }
  public resetOssKey() {
    this._ossKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossKeyInput() {
    return this._ossKey;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // custom_container_config - computed: false, optional: true, required: false
  private _customContainerConfig = new FcFunctionCustomContainerConfigOutputReference(this, "custom_container_config");
  public get customContainerConfig() {
    return this._customContainerConfig;
  }
  public putCustomContainerConfig(value: FcFunctionCustomContainerConfig) {
    this._customContainerConfig.internalValue = value;
  }
  public resetCustomContainerConfig() {
    this._customContainerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customContainerConfigInput() {
    return this._customContainerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_port: cdktf.numberToTerraform(this._caPort),
      code_checksum: cdktf.stringToTerraform(this._codeChecksum),
      description: cdktf.stringToTerraform(this._description),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      filename: cdktf.stringToTerraform(this._filename),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      initialization_timeout: cdktf.numberToTerraform(this._initializationTimeout),
      initializer: cdktf.stringToTerraform(this._initializer),
      instance_concurrency: cdktf.numberToTerraform(this._instanceConcurrency),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      layers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._layers),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      oss_bucket: cdktf.stringToTerraform(this._ossBucket),
      oss_key: cdktf.stringToTerraform(this._ossKey),
      runtime: cdktf.stringToTerraform(this._runtime),
      service: cdktf.stringToTerraform(this._service),
      timeout: cdktf.numberToTerraform(this._timeout),
      custom_container_config: fcFunctionCustomContainerConfigToTerraform(this._customContainerConfig.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      oss_bucket: {
        value: cdktf.stringToHclTerraform(this._ossBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_key: {
        value: cdktf.stringToHclTerraform(this._ossKey),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
      custom_container_config: {
        value: fcFunctionCustomContainerConfigToHclTerraform(this._customContainerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcFunctionCustomContainerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
