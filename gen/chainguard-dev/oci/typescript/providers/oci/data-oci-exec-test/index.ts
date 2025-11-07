// https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciExecTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image digest to test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#digest DataOciExecTest#digest}
  */
  readonly digest: string;
  /**
  * Environment variables for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#env DataOciExecTest#env}
  */
  readonly env?: DataOciExecTestEnv[] | cdktf.IResolvable;
  /**
  * Script to run against the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#script DataOciExecTest#script}
  */
  readonly script: string;
  /**
  * Timeout for the test in seconds (default is 5 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#timeout_seconds DataOciExecTest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Working directory for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#working_dir DataOciExecTest#working_dir}
  */
  readonly workingDir?: string;
}
export interface DataOciExecTestEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#name DataOciExecTest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#value DataOciExecTest#value}
  */
  readonly value?: string;
}

export function dataOciExecTestEnvToTerraform(struct?: DataOciExecTestEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataOciExecTestEnvToHclTerraform(struct?: DataOciExecTestEnv | cdktf.IResolvable): any {
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

export class DataOciExecTestEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciExecTestEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciExecTestEnv | cdktf.IResolvable | undefined) {
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

export class DataOciExecTestEnvList extends cdktf.ComplexList {
  public internalValue? : DataOciExecTestEnv[] | cdktf.IResolvable

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
  public get(index: number): DataOciExecTestEnvOutputReference {
    return new DataOciExecTestEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test oci_exec_test}
*/
export class DataOciExecTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_exec_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciExecTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciExecTest to import
  * @param importFromId The id of the existing DataOciExecTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciExecTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_exec_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/data-sources/exec_test oci_exec_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciExecTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciExecTestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_exec_test',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digest = config.digest;
    this._env.internalValue = config.env;
    this._script = config.script;
    this._timeoutSeconds = config.timeoutSeconds;
    this._workingDir = config.workingDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataOciExecTestEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataOciExecTestEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // exit_code - computed: true, optional: false, required: false
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // tested_ref - computed: true, optional: false, required: false
  public get testedRef() {
    return this.getStringAttribute('tested_ref');
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest: cdktf.stringToTerraform(this._digest),
      env: cdktf.listMapper(dataOciExecTestEnvToTerraform, false)(this._env.internalValue),
      script: cdktf.stringToTerraform(this._script),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      working_dir: cdktf.stringToTerraform(this._workingDir),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.listMapperHcl(dataOciExecTestEnvToHclTerraform, false)(this._env.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOciExecTestEnvList",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      working_dir: {
        value: cdktf.stringToHclTerraform(this._workingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
