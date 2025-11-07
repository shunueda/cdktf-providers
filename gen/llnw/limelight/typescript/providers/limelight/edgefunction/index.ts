// https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgefunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#can_debug Edgefunction#can_debug}
  */
  readonly canDebug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#description Edgefunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#function_archive Edgefunction#function_archive}
  */
  readonly functionArchive: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#function_sha256 Edgefunction#function_sha256}
  */
  readonly functionSha256: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#handler Edgefunction#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#id Edgefunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#memory Edgefunction#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#name Edgefunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#reserved_concurrency Edgefunction#reserved_concurrency}
  */
  readonly reservedConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#runtime Edgefunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#shortname Edgefunction#shortname}
  */
  readonly shortname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#timeout Edgefunction#timeout}
  */
  readonly timeout?: number;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#environment_variable Edgefunction#environment_variable}
  */
  readonly environmentVariable?: EdgefunctionEnvironmentVariable[] | cdktf.IResolvable;
}
export interface EdgefunctionEnvironmentVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#name Edgefunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#value Edgefunction#value}
  */
  readonly value: string;
}

export function edgefunctionEnvironmentVariableToTerraform(struct?: EdgefunctionEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function edgefunctionEnvironmentVariableToHclTerraform(struct?: EdgefunctionEnvironmentVariable | cdktf.IResolvable): any {
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

export class EdgefunctionEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgefunctionEnvironmentVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EdgefunctionEnvironmentVariable | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EdgefunctionEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : EdgefunctionEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): EdgefunctionEnvironmentVariableOutputReference {
    return new EdgefunctionEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction limelight_edgefunction}
*/
export class Edgefunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "limelight_edgefunction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Edgefunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Edgefunction to import
  * @param importFromId The id of the existing Edgefunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Edgefunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "limelight_edgefunction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs/resources/edgefunction limelight_edgefunction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgefunctionConfig
  */
  public constructor(scope: Construct, id: string, config: EdgefunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'limelight_edgefunction',
      terraformGeneratorMetadata: {
        providerName: 'limelight',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canDebug = config.canDebug;
    this._description = config.description;
    this._functionArchive = config.functionArchive;
    this._functionSha256 = config.functionSha256;
    this._handler = config.handler;
    this._id = config.id;
    this._memory = config.memory;
    this._name = config.name;
    this._reservedConcurrency = config.reservedConcurrency;
    this._runtime = config.runtime;
    this._shortname = config.shortname;
    this._timeout = config.timeout;
    this._environmentVariable.internalValue = config.environmentVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_debug - computed: false, optional: true, required: false
  private _canDebug?: boolean | cdktf.IResolvable; 
  public get canDebug() {
    return this.getBooleanAttribute('can_debug');
  }
  public set canDebug(value: boolean | cdktf.IResolvable) {
    this._canDebug = value;
  }
  public resetCanDebug() {
    this._canDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDebugInput() {
    return this._canDebug;
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

  // function_archive - computed: false, optional: false, required: true
  private _functionArchive?: string; 
  public get functionArchive() {
    return this.getStringAttribute('function_archive');
  }
  public set functionArchive(value: string) {
    this._functionArchive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArchiveInput() {
    return this._functionArchive;
  }

  // function_sha256 - computed: false, optional: false, required: true
  private _functionSha256?: string; 
  public get functionSha256() {
    return this.getStringAttribute('function_sha256');
  }
  public set functionSha256(value: string) {
    this._functionSha256 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSha256Input() {
    return this._functionSha256;
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

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
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

  // reserved_concurrency - computed: false, optional: true, required: false
  private _reservedConcurrency?: number; 
  public get reservedConcurrency() {
    return this.getNumberAttribute('reserved_concurrency');
  }
  public set reservedConcurrency(value: number) {
    this._reservedConcurrency = value;
  }
  public resetReservedConcurrency() {
    this._reservedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrencyInput() {
    return this._reservedConcurrency;
  }

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getNumberAttribute('revision_id');
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

  // shortname - computed: false, optional: false, required: true
  private _shortname?: string; 
  public get shortname() {
    return this.getStringAttribute('shortname');
  }
  public set shortname(value: string) {
    this._shortname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortnameInput() {
    return this._shortname;
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

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new EdgefunctionEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: EdgefunctionEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_debug: cdktf.booleanToTerraform(this._canDebug),
      description: cdktf.stringToTerraform(this._description),
      function_archive: cdktf.stringToTerraform(this._functionArchive),
      function_sha256: cdktf.stringToTerraform(this._functionSha256),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      reserved_concurrency: cdktf.numberToTerraform(this._reservedConcurrency),
      runtime: cdktf.stringToTerraform(this._runtime),
      shortname: cdktf.stringToTerraform(this._shortname),
      timeout: cdktf.numberToTerraform(this._timeout),
      environment_variable: cdktf.listMapper(edgefunctionEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_debug: {
        value: cdktf.booleanToHclTerraform(this._canDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_archive: {
        value: cdktf.stringToHclTerraform(this._functionArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_sha256: {
        value: cdktf.stringToHclTerraform(this._functionSha256),
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
      reserved_concurrency: {
        value: cdktf.numberToHclTerraform(this._reservedConcurrency),
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
      shortname: {
        value: cdktf.stringToHclTerraform(this._shortname),
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
      environment_variable: {
        value: cdktf.listMapperHcl(edgefunctionEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgefunctionEnvironmentVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
