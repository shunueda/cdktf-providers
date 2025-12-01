// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#___path___ SystemNote#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#id SystemNote#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Note that will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#note SystemNote#note}
  */
  readonly note: string;
  /**
  * Whether to show system note before telnet login prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#show_at_cli_login SystemNote#show_at_cli_login}
  */
  readonly showAtCliLogin?: boolean | cdktf.IResolvable;
  /**
  * Whether to show system note on each login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#show_at_login SystemNote#show_at_login}
  */
  readonly showAtLogin?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note routeros_system_note}
*/
export class SystemNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_note";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNote to import
  * @param importFromId The id of the existing SystemNote that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_note", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_note routeros_system_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNoteConfig
  */
  public constructor(scope: Construct, id: string, config: SystemNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_note',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._id = config.id;
    this._note = config.note;
    this._showAtCliLogin = config.showAtCliLogin;
    this._showAtLogin = config.showAtLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // note - computed: false, optional: false, required: true
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // show_at_cli_login - computed: false, optional: true, required: false
  private _showAtCliLogin?: boolean | cdktf.IResolvable; 
  public get showAtCliLogin() {
    return this.getBooleanAttribute('show_at_cli_login');
  }
  public set showAtCliLogin(value: boolean | cdktf.IResolvable) {
    this._showAtCliLogin = value;
  }
  public resetShowAtCliLogin() {
    this._showAtCliLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAtCliLoginInput() {
    return this._showAtCliLogin;
  }

  // show_at_login - computed: false, optional: true, required: false
  private _showAtLogin?: boolean | cdktf.IResolvable; 
  public get showAtLogin() {
    return this.getBooleanAttribute('show_at_login');
  }
  public set showAtLogin(value: boolean | cdktf.IResolvable) {
    this._showAtLogin = value;
  }
  public resetShowAtLogin() {
    this._showAtLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAtLoginInput() {
    return this._showAtLogin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      note: cdktf.stringToTerraform(this._note),
      show_at_cli_login: cdktf.booleanToTerraform(this._showAtCliLogin),
      show_at_login: cdktf.booleanToTerraform(this._showAtLogin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
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
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_at_cli_login: {
        value: cdktf.booleanToHclTerraform(this._showAtCliLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_at_login: {
        value: cdktf.booleanToHclTerraform(this._showAtLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
