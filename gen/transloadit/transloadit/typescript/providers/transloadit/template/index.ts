// https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Use true to deny requests that do not include a signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template#require_signature_auth Template#require_signature_auth}
  */
  readonly requireSignatureAuth?: boolean | cdktf.IResolvable;
  /**
  * template in json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template#template Template#template}
  */
  readonly template: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template transloadit_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "transloadit_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "transloadit_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs/resources/template transloadit_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'transloadit_template',
      terraformGeneratorMetadata: {
        providerName: 'transloadit',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._requireSignatureAuth = config.requireSignatureAuth;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // require_signature_auth - computed: false, optional: true, required: false
  private _requireSignatureAuth?: boolean | cdktf.IResolvable; 
  public get requireSignatureAuth() {
    return this.getBooleanAttribute('require_signature_auth');
  }
  public set requireSignatureAuth(value: boolean | cdktf.IResolvable) {
    this._requireSignatureAuth = value;
  }
  public resetRequireSignatureAuth() {
    this._requireSignatureAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignatureAuthInput() {
    return this._requireSignatureAuth;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      require_signature_auth: cdktf.booleanToTerraform(this._requireSignatureAuth),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      require_signature_auth: {
        value: cdktf.booleanToHclTerraform(this._requireSignatureAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
