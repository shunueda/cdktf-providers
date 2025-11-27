// https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastedgeAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * WebAssembly binary id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#binary FastedgeApp#binary}
  */
  readonly binary?: number;
  /**
  * Application comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#comment FastedgeApp#comment}
  */
  readonly comment?: string;
  /**
  * Logging enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#debug FastedgeApp#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#env FastedgeApp#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#id FastedgeApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#name FastedgeApp#name}
  */
  readonly name?: string;
  /**
  * Response headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#rsp_headers FastedgeApp#rsp_headers}
  */
  readonly rspHeaders?: { [key: string]: string };
  /**
  * Secret variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#secrets FastedgeApp#secrets}
  */
  readonly secrets?: { [key: string]: number };
  /**
  * Status code. Possible values are: enabled, disabled, suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#status FastedgeApp#status}
  */
  readonly status: string;
  /**
  * Application template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#template FastedgeApp#template}
  */
  readonly template?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app gcore_fastedge_app}
*/
export class FastedgeApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_fastedge_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastedgeApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastedgeApp to import
  * @param importFromId The id of the existing FastedgeApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastedgeApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_fastedge_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/fastedge_app gcore_fastedge_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastedgeAppConfig
  */
  public constructor(scope: Construct, id: string, config: FastedgeAppConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_fastedge_app',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.2',
        providerVersionConstraint: '0.32.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binary = config.binary;
    this._comment = config.comment;
    this._debug = config.debug;
    this._env = config.env;
    this._id = config.id;
    this._name = config.name;
    this._rspHeaders = config.rspHeaders;
    this._secrets = config.secrets;
    this._status = config.status;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary - computed: true, optional: true, required: false
  private _binary?: number; 
  public get binary() {
    return this.getNumberAttribute('binary');
  }
  public set binary(value: number) {
    this._binary = value;
  }
  public resetBinary() {
    this._binary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // rsp_headers - computed: false, optional: true, required: false
  private _rspHeaders?: { [key: string]: string }; 
  public get rspHeaders() {
    return this.getStringMapAttribute('rsp_headers');
  }
  public set rspHeaders(value: { [key: string]: string }) {
    this._rspHeaders = value;
  }
  public resetRspHeaders() {
    this._rspHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspHeadersInput() {
    return this._rspHeaders;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: number }; 
  public get secrets() {
    return this.getNumberMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: number }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // template - computed: false, optional: true, required: false
  private _template?: number; 
  public get template() {
    return this.getNumberAttribute('template');
  }
  public set template(value: number) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary: cdktf.numberToTerraform(this._binary),
      comment: cdktf.stringToTerraform(this._comment),
      debug: cdktf.booleanToTerraform(this._debug),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rsp_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._rspHeaders),
      secrets: cdktf.hashMapper(cdktf.numberToTerraform)(this._secrets),
      status: cdktf.stringToTerraform(this._status),
      template: cdktf.numberToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary: {
        value: cdktf.numberToHclTerraform(this._binary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
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
      rsp_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rspHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secrets: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._secrets),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.numberToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
