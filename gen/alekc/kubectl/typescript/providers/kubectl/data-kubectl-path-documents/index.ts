// https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubectlPathDocumentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to disable template parsing of the loaded documents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#disable_template DataKubectlPathDocuments#disable_template}
  */
  readonly disableTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#id DataKubectlPathDocuments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Glob pattern to search for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#pattern DataKubectlPathDocuments#pattern}
  */
  readonly pattern: string;
  /**
  * Sensitive variables to substitute, allowing for hiding sensitive variables in terraform output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#sensitive_vars DataKubectlPathDocuments#sensitive_vars}
  */
  readonly sensitiveVars?: { [key: string]: string };
  /**
  * Variables to substitute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#vars DataKubectlPathDocuments#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents kubectl_path_documents}
*/
export class DataKubectlPathDocuments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_path_documents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKubectlPathDocuments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKubectlPathDocuments to import
  * @param importFromId The id of the existing DataKubectlPathDocuments that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKubectlPathDocuments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubectl_path_documents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/data-sources/path_documents kubectl_path_documents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubectlPathDocumentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubectlPathDocumentsConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_path_documents',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableTemplate = config.disableTemplate;
    this._id = config.id;
    this._pattern = config.pattern;
    this._sensitiveVars = config.sensitiveVars;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_template - computed: false, optional: true, required: false
  private _disableTemplate?: boolean | cdktf.IResolvable; 
  public get disableTemplate() {
    return this.getBooleanAttribute('disable_template');
  }
  public set disableTemplate(value: boolean | cdktf.IResolvable) {
    this._disableTemplate = value;
  }
  public resetDisableTemplate() {
    this._disableTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTemplateInput() {
    return this._disableTemplate;
  }

  // documents - computed: true, optional: false, required: false
  public get documents() {
    return this.getListAttribute('documents');
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

  // manifests - computed: true, optional: false, required: false
  private _manifests = new cdktf.StringMap(this, "manifests");
  public get manifests() {
    return this._manifests;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // sensitive_vars - computed: false, optional: true, required: false
  private _sensitiveVars?: { [key: string]: string }; 
  public get sensitiveVars() {
    return this.getStringMapAttribute('sensitive_vars');
  }
  public set sensitiveVars(value: { [key: string]: string }) {
    this._sensitiveVars = value;
  }
  public resetSensitiveVars() {
    this._sensitiveVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveVarsInput() {
    return this._sensitiveVars;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_template: cdktf.booleanToTerraform(this._disableTemplate),
      id: cdktf.stringToTerraform(this._id),
      pattern: cdktf.stringToTerraform(this._pattern),
      sensitive_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveVars),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_template: {
        value: cdktf.booleanToHclTerraform(this._disableTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
