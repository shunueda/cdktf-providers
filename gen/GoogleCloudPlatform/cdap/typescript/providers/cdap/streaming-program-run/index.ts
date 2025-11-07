// https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingProgramRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#app StreamingProgramRun#app}
  */
  readonly app: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#id StreamingProgramRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the namespace in which this resource belongs. If not provided, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#namespace StreamingProgramRun#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#program StreamingProgramRun#program}
  */
  readonly program?: string;
  /**
  * The runtime arguments used to start the program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#runtime_arguments StreamingProgramRun#runtime_arguments}
  */
  readonly runtimeArguments: { [key: string]: string };
  /**
  * One of flows, mapreduce, services, spark, workers, or workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#type StreamingProgramRun#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#timeouts StreamingProgramRun#timeouts}
  */
  readonly timeouts?: StreamingProgramRunTimeouts;
}
export interface StreamingProgramRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#create StreamingProgramRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#delete StreamingProgramRun#delete}
  */
  readonly delete?: string;
}

export function streamingProgramRunTimeoutsToTerraform(struct?: StreamingProgramRunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function streamingProgramRunTimeoutsToHclTerraform(struct?: StreamingProgramRunTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingProgramRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingProgramRunTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingProgramRunTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run cdap_streaming_program_run}
*/
export class StreamingProgramRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdap_streaming_program_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingProgramRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingProgramRun to import
  * @param importFromId The id of the existing StreamingProgramRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingProgramRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdap_streaming_program_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/streaming_program_run cdap_streaming_program_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingProgramRunConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingProgramRunConfig) {
    super(scope, id, {
      terraformResourceType: 'cdap_streaming_program_run',
      terraformGeneratorMetadata: {
        providerName: 'cdap',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._id = config.id;
    this._namespace = config.namespace;
    this._program = config.program;
    this._runtimeArguments = config.runtimeArguments;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // program - computed: false, optional: true, required: false
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  public resetProgram() {
    this._program = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }

  // run_id - computed: true, optional: false, required: false
  public get runId() {
    return this.getStringAttribute('run_id');
  }

  // runtime_arguments - computed: false, optional: false, required: true
  private _runtimeArguments?: { [key: string]: string }; 
  public get runtimeArguments() {
    return this.getStringMapAttribute('runtime_arguments');
  }
  public set runtimeArguments(value: { [key: string]: string }) {
    this._runtimeArguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeArgumentsInput() {
    return this._runtimeArguments;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamingProgramRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamingProgramRunTimeouts) {
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
      app: cdktf.stringToTerraform(this._app),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      program: cdktf.stringToTerraform(this._program),
      runtime_arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._runtimeArguments),
      type: cdktf.stringToTerraform(this._type),
      timeouts: streamingProgramRunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program: {
        value: cdktf.stringToHclTerraform(this._program),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_arguments: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._runtimeArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: streamingProgramRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamingProgramRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
