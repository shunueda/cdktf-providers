// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionsInvokeFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}
  */
  readonly fnIntent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}
  */
  readonly fnInvokeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}
  */
  readonly inputBodySourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}
  */
  readonly invokeFunctionBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}
  */
  readonly invokeFunctionBodyBase64Encoded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#is_dry_run FunctionsInvokeFunction#is_dry_run}
  */
  readonly isDryRun?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}
  */
  readonly timeouts?: FunctionsInvokeFunctionTimeouts;
}
export interface FunctionsInvokeFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}
  */
  readonly update?: string;
}

export function functionsInvokeFunctionTimeoutsToTerraform(struct?: FunctionsInvokeFunctionTimeouts | cdktf.IResolvable): any {
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


export function functionsInvokeFunctionTimeoutsToHclTerraform(struct?: FunctionsInvokeFunctionTimeouts | cdktf.IResolvable): any {
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

export class FunctionsInvokeFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FunctionsInvokeFunctionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FunctionsInvokeFunctionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function oci_functions_invoke_function}
*/
export class FunctionsInvokeFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_functions_invoke_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionsInvokeFunction to import
  * @param importFromId The id of the existing FunctionsInvokeFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionsInvokeFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_functions_invoke_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/functions_invoke_function oci_functions_invoke_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionsInvokeFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionsInvokeFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_functions_invoke_function',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._fnIntent = config.fnIntent;
    this._fnInvokeType = config.fnInvokeType;
    this._functionId = config.functionId;
    this._id = config.id;
    this._inputBodySourcePath = config.inputBodySourcePath;
    this._invokeFunctionBody = config.invokeFunctionBody;
    this._invokeFunctionBodyBase64Encoded = config.invokeFunctionBodyBase64Encoded;
    this._isDryRun = config.isDryRun;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean | cdktf.IResolvable; 
  public get base64EncodeContent() {
    return this.getBooleanAttribute('base64_encode_content');
  }
  public set base64EncodeContent(value: boolean | cdktf.IResolvable) {
    this._base64EncodeContent = value;
  }
  public resetBase64EncodeContent() {
    this._base64EncodeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeContentInput() {
    return this._base64EncodeContent;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // fn_intent - computed: true, optional: true, required: false
  private _fnIntent?: string; 
  public get fnIntent() {
    return this.getStringAttribute('fn_intent');
  }
  public set fnIntent(value: string) {
    this._fnIntent = value;
  }
  public resetFnIntent() {
    this._fnIntent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnIntentInput() {
    return this._fnIntent;
  }

  // fn_invoke_type - computed: true, optional: true, required: false
  private _fnInvokeType?: string; 
  public get fnInvokeType() {
    return this.getStringAttribute('fn_invoke_type');
  }
  public set fnInvokeType(value: string) {
    this._fnInvokeType = value;
  }
  public resetFnInvokeType() {
    this._fnInvokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnInvokeTypeInput() {
    return this._fnInvokeType;
  }

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // input_body_source_path - computed: false, optional: true, required: false
  private _inputBodySourcePath?: string; 
  public get inputBodySourcePath() {
    return this.getStringAttribute('input_body_source_path');
  }
  public set inputBodySourcePath(value: string) {
    this._inputBodySourcePath = value;
  }
  public resetInputBodySourcePath() {
    this._inputBodySourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBodySourcePathInput() {
    return this._inputBodySourcePath;
  }

  // invoke_endpoint - computed: true, optional: false, required: false
  public get invokeEndpoint() {
    return this.getStringAttribute('invoke_endpoint');
  }

  // invoke_function_body - computed: true, optional: true, required: false
  private _invokeFunctionBody?: string; 
  public get invokeFunctionBody() {
    return this.getStringAttribute('invoke_function_body');
  }
  public set invokeFunctionBody(value: string) {
    this._invokeFunctionBody = value;
  }
  public resetInvokeFunctionBody() {
    this._invokeFunctionBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeFunctionBodyInput() {
    return this._invokeFunctionBody;
  }

  // invoke_function_body_base64_encoded - computed: true, optional: true, required: false
  private _invokeFunctionBodyBase64Encoded?: string; 
  public get invokeFunctionBodyBase64Encoded() {
    return this.getStringAttribute('invoke_function_body_base64_encoded');
  }
  public set invokeFunctionBodyBase64Encoded(value: string) {
    this._invokeFunctionBodyBase64Encoded = value;
  }
  public resetInvokeFunctionBodyBase64Encoded() {
    this._invokeFunctionBodyBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeFunctionBodyBase64EncodedInput() {
    return this._invokeFunctionBodyBase64Encoded;
  }

  // is_dry_run - computed: true, optional: true, required: false
  private _isDryRun?: boolean | cdktf.IResolvable; 
  public get isDryRun() {
    return this.getBooleanAttribute('is_dry_run');
  }
  public set isDryRun(value: boolean | cdktf.IResolvable) {
    this._isDryRun = value;
  }
  public resetIsDryRun() {
    this._isDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDryRunInput() {
    return this._isDryRun;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FunctionsInvokeFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FunctionsInvokeFunctionTimeouts) {
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
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      fn_intent: cdktf.stringToTerraform(this._fnIntent),
      fn_invoke_type: cdktf.stringToTerraform(this._fnInvokeType),
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      input_body_source_path: cdktf.stringToTerraform(this._inputBodySourcePath),
      invoke_function_body: cdktf.stringToTerraform(this._invokeFunctionBody),
      invoke_function_body_base64_encoded: cdktf.stringToTerraform(this._invokeFunctionBodyBase64Encoded),
      is_dry_run: cdktf.booleanToTerraform(this._isDryRun),
      timeouts: functionsInvokeFunctionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_encode_content: {
        value: cdktf.booleanToHclTerraform(this._base64EncodeContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fn_intent: {
        value: cdktf.stringToHclTerraform(this._fnIntent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fn_invoke_type: {
        value: cdktf.stringToHclTerraform(this._fnInvokeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      input_body_source_path: {
        value: cdktf.stringToHclTerraform(this._inputBodySourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoke_function_body: {
        value: cdktf.stringToHclTerraform(this._invokeFunctionBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoke_function_body_base64_encoded: {
        value: cdktf.stringToHclTerraform(this._invokeFunctionBodyBase64Encoded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_dry_run: {
        value: cdktf.booleanToHclTerraform(this._isDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: functionsInvokeFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FunctionsInvokeFunctionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
