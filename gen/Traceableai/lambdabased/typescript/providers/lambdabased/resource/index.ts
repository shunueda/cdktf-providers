// https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#conceal_input Resource#conceal_input}
  */
  readonly concealInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#conceal_result Resource#conceal_result}
  */
  readonly concealResult?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#function_name Resource#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#id Resource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#input Resource#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#qualifier Resource#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#triggers Resource#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * finalizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#finalizer Resource#finalizer}
  */
  readonly finalizer?: ResourceFinalizer;
}
export interface ResourceFinalizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#function_name Resource#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#input Resource#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#qualifier Resource#qualifier}
  */
  readonly qualifier?: string;
}

export function resourceFinalizerToTerraform(struct?: ResourceFinalizerOutputReference | ResourceFinalizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    input: cdktf.stringToTerraform(struct!.input),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}


export function resourceFinalizerToHclTerraform(struct?: ResourceFinalizerOutputReference | ResourceFinalizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceFinalizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceFinalizer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceFinalizer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._input = undefined;
      this._qualifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._input = value.input;
      this._qualifier = value.qualifier;
    }
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

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource lambdabased_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lambdabased_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lambdabased_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/traceableai/lambdabased/0.1.0/docs/resources/resource lambdabased_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'lambdabased_resource',
      terraformGeneratorMetadata: {
        providerName: 'lambdabased',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concealInput = config.concealInput;
    this._concealResult = config.concealResult;
    this._functionName = config.functionName;
    this._id = config.id;
    this._input = config.input;
    this._qualifier = config.qualifier;
    this._triggers = config.triggers;
    this._finalizer.internalValue = config.finalizer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conceal_input - computed: false, optional: true, required: false
  private _concealInput?: boolean | cdktf.IResolvable; 
  public get concealInput() {
    return this.getBooleanAttribute('conceal_input');
  }
  public set concealInput(value: boolean | cdktf.IResolvable) {
    this._concealInput = value;
  }
  public resetConcealInput() {
    this._concealInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concealInputInput() {
    return this._concealInput;
  }

  // conceal_result - computed: false, optional: true, required: false
  private _concealResult?: boolean | cdktf.IResolvable; 
  public get concealResult() {
    return this.getBooleanAttribute('conceal_result');
  }
  public set concealResult(value: boolean | cdktf.IResolvable) {
    this._concealResult = value;
  }
  public resetConcealResult() {
    this._concealResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concealResultInput() {
    return this._concealResult;
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

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // finalizer - computed: false, optional: true, required: false
  private _finalizer = new ResourceFinalizerOutputReference(this, "finalizer");
  public get finalizer() {
    return this._finalizer;
  }
  public putFinalizer(value: ResourceFinalizer) {
    this._finalizer.internalValue = value;
  }
  public resetFinalizer() {
    this._finalizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizerInput() {
    return this._finalizer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conceal_input: cdktf.booleanToTerraform(this._concealInput),
      conceal_result: cdktf.booleanToTerraform(this._concealResult),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      finalizer: resourceFinalizerToTerraform(this._finalizer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conceal_input: {
        value: cdktf.booleanToHclTerraform(this._concealInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conceal_result: {
        value: cdktf.booleanToHclTerraform(this._concealResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      input: {
        value: cdktf.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      finalizer: {
        value: resourceFinalizerToHclTerraform(this._finalizer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceFinalizerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
