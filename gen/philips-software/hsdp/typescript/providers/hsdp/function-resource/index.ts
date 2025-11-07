// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#command FunctionResource#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#docker_credentials FunctionResource#docker_credentials}
  */
  readonly dockerCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#docker_image FunctionResource#docker_image}
  */
  readonly dockerImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#environment FunctionResource#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#id FunctionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#run_every FunctionResource#run_every}
  */
  readonly runEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#schedule FunctionResource#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#start_at FunctionResource#start_at}
  */
  readonly startAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#timeout FunctionResource#timeout}
  */
  readonly timeout?: number;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#backend FunctionResource#backend}
  */
  readonly backend: FunctionResourceBackend;
}
export interface FunctionResourceBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#credentials FunctionResource#credentials}
  */
  readonly credentials?: { [key: string]: string };
}

export function functionResourceBackendToTerraform(struct?: FunctionResourceBackendOutputReference | FunctionResourceBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.credentials),
  }
}


export function functionResourceBackendToHclTerraform(struct?: FunctionResourceBackendOutputReference | FunctionResourceBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.credentials),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: { [key: string]: string }; 
  public get credentials() {
    return this.getStringMapAttribute('credentials');
  }
  public set credentials(value: { [key: string]: string }) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function hsdp_function}
*/
export class FunctionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionResource to import
  * @param importFromId The id of the existing FunctionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/function hsdp_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_function',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._command = config.command;
    this._dockerCredentials = config.dockerCredentials;
    this._dockerImage = config.dockerImage;
    this._environment = config.environment;
    this._id = config.id;
    this._name = config.name;
    this._runEvery = config.runEvery;
    this._schedule = config.schedule;
    this._startAt = config.startAt;
    this._timeout = config.timeout;
    this._backend.internalValue = config.backend;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_endpoint - computed: true, optional: false, required: false
  public get asyncEndpoint() {
    return this.getStringAttribute('async_endpoint');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
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

  // docker_credentials - computed: false, optional: true, required: false
  private _dockerCredentials?: { [key: string]: string }; 
  public get dockerCredentials() {
    return this.getStringMapAttribute('docker_credentials');
  }
  public set dockerCredentials(value: { [key: string]: string }) {
    this._dockerCredentials = value;
  }
  public resetDockerCredentials() {
    this._dockerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerCredentialsInput() {
    return this._dockerCredentials;
  }

  // docker_image - computed: false, optional: false, required: true
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // run_every - computed: false, optional: true, required: false
  private _runEvery?: string; 
  public get runEvery() {
    return this.getStringAttribute('run_every');
  }
  public set runEvery(value: string) {
    this._runEvery = value;
  }
  public resetRunEvery() {
    this._runEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runEveryInput() {
    return this._runEvery;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // start_at - computed: false, optional: true, required: false
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  public resetStartAt() {
    this._startAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }

  // sync_endpoint - computed: true, optional: false, required: false
  public get syncEndpoint() {
    return this.getStringAttribute('sync_endpoint');
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new FunctionResourceBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: FunctionResourceBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command: cdktf.listMapper(cdktf.stringToTerraform, false)(this._command),
      docker_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._dockerCredentials),
      docker_image: cdktf.stringToTerraform(this._dockerImage),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      run_every: cdktf.stringToTerraform(this._runEvery),
      schedule: cdktf.stringToTerraform(this._schedule),
      start_at: cdktf.stringToTerraform(this._startAt),
      timeout: cdktf.numberToTerraform(this._timeout),
      backend: functionResourceBackendToTerraform(this._backend.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._command),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      docker_credentials: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dockerCredentials),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      docker_image: {
        value: cdktf.stringToHclTerraform(this._dockerImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_every: {
        value: cdktf.stringToHclTerraform(this._runEvery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_at: {
        value: cdktf.stringToHclTerraform(this._startAt),
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
      backend: {
        value: functionResourceBackendToHclTerraform(this._backend.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceBackendList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
