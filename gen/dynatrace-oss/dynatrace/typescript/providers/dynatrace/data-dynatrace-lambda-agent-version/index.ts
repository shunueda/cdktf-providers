// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDynatraceLambdaAgentVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Latest version name of standalone log collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#collector DataDynatraceLambdaAgentVersion#collector}
  */
  readonly collector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#id DataDynatraceLambdaAgentVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Latest version name of Java code module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#java DataDynatraceLambdaAgentVersion#java}
  */
  readonly java?: string;
  /**
  * Latest version name of Java code module with log collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#java_with_collector DataDynatraceLambdaAgentVersion#java_with_collector}
  */
  readonly javaWithCollector?: string;
  /**
  * Latest version name of NodeJS code module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#nodejs DataDynatraceLambdaAgentVersion#nodejs}
  */
  readonly nodejs?: string;
  /**
  * Latest version name of NodeJS code module with log collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#nodejs_with_collector DataDynatraceLambdaAgentVersion#nodejs_with_collector}
  */
  readonly nodejsWithCollector?: string;
  /**
  * Latest version name of Python code module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#python DataDynatraceLambdaAgentVersion#python}
  */
  readonly python?: string;
  /**
  * Latest version name of Python code module with log collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#python_with_collector DataDynatraceLambdaAgentVersion#python_with_collector}
  */
  readonly pythonWithCollector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version dynatrace_lambda_agent_version}
*/
export class DataDynatraceLambdaAgentVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_lambda_agent_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDynatraceLambdaAgentVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDynatraceLambdaAgentVersion to import
  * @param importFromId The id of the existing DataDynatraceLambdaAgentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDynatraceLambdaAgentVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_lambda_agent_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/lambda_agent_version dynatrace_lambda_agent_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDynatraceLambdaAgentVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDynatraceLambdaAgentVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_lambda_agent_version',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collector = config.collector;
    this._id = config.id;
    this._java = config.java;
    this._javaWithCollector = config.javaWithCollector;
    this._nodejs = config.nodejs;
    this._nodejsWithCollector = config.nodejsWithCollector;
    this._python = config.python;
    this._pythonWithCollector = config.pythonWithCollector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector - computed: true, optional: true, required: false
  private _collector?: string; 
  public get collector() {
    return this.getStringAttribute('collector');
  }
  public set collector(value: string) {
    this._collector = value;
  }
  public resetCollector() {
    this._collector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector;
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

  // java - computed: true, optional: true, required: false
  private _java?: string; 
  public get java() {
    return this.getStringAttribute('java');
  }
  public set java(value: string) {
    this._java = value;
  }
  public resetJava() {
    this._java = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaInput() {
    return this._java;
  }

  // java_with_collector - computed: true, optional: true, required: false
  private _javaWithCollector?: string; 
  public get javaWithCollector() {
    return this.getStringAttribute('java_with_collector');
  }
  public set javaWithCollector(value: string) {
    this._javaWithCollector = value;
  }
  public resetJavaWithCollector() {
    this._javaWithCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaWithCollectorInput() {
    return this._javaWithCollector;
  }

  // nodejs - computed: true, optional: true, required: false
  private _nodejs?: string; 
  public get nodejs() {
    return this.getStringAttribute('nodejs');
  }
  public set nodejs(value: string) {
    this._nodejs = value;
  }
  public resetNodejs() {
    this._nodejs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodejsInput() {
    return this._nodejs;
  }

  // nodejs_with_collector - computed: true, optional: true, required: false
  private _nodejsWithCollector?: string; 
  public get nodejsWithCollector() {
    return this.getStringAttribute('nodejs_with_collector');
  }
  public set nodejsWithCollector(value: string) {
    this._nodejsWithCollector = value;
  }
  public resetNodejsWithCollector() {
    this._nodejsWithCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodejsWithCollectorInput() {
    return this._nodejsWithCollector;
  }

  // python - computed: true, optional: true, required: false
  private _python?: string; 
  public get python() {
    return this.getStringAttribute('python');
  }
  public set python(value: string) {
    this._python = value;
  }
  public resetPython() {
    this._python = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python;
  }

  // python_with_collector - computed: true, optional: true, required: false
  private _pythonWithCollector?: string; 
  public get pythonWithCollector() {
    return this.getStringAttribute('python_with_collector');
  }
  public set pythonWithCollector(value: string) {
    this._pythonWithCollector = value;
  }
  public resetPythonWithCollector() {
    this._pythonWithCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWithCollectorInput() {
    return this._pythonWithCollector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector: cdktf.stringToTerraform(this._collector),
      id: cdktf.stringToTerraform(this._id),
      java: cdktf.stringToTerraform(this._java),
      java_with_collector: cdktf.stringToTerraform(this._javaWithCollector),
      nodejs: cdktf.stringToTerraform(this._nodejs),
      nodejs_with_collector: cdktf.stringToTerraform(this._nodejsWithCollector),
      python: cdktf.stringToTerraform(this._python),
      python_with_collector: cdktf.stringToTerraform(this._pythonWithCollector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector: {
        value: cdktf.stringToHclTerraform(this._collector),
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
      java: {
        value: cdktf.stringToHclTerraform(this._java),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      java_with_collector: {
        value: cdktf.stringToHclTerraform(this._javaWithCollector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodejs: {
        value: cdktf.stringToHclTerraform(this._nodejs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodejs_with_collector: {
        value: cdktf.stringToHclTerraform(this._nodejsWithCollector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      python: {
        value: cdktf.stringToHclTerraform(this._python),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      python_with_collector: {
        value: cdktf.stringToHclTerraform(this._pythonWithCollector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
