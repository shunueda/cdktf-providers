// https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMittwaldAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app#name DataMittwaldApp#name}
  */
  readonly name: string;
  /**
  * Set this to just select the recommended version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app#recommended DataMittwaldApp#recommended}
  */
  readonly recommended?: boolean | cdktf.IResolvable;
  /**
  * A version selector, such as `>= 13.4`; if omitted, this will default to `*` (all versions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app#selector DataMittwaldApp#selector}
  */
  readonly selector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app mittwald_app}
*/
export class DataMittwaldApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMittwaldApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMittwaldApp to import
  * @param importFromId The id of the existing DataMittwaldApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMittwaldApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/data-sources/app mittwald_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMittwaldAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataMittwaldAppConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_app',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._recommended = config.recommended;
    this._selector = config.selector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recommended - computed: false, optional: true, required: false
  private _recommended?: boolean | cdktf.IResolvable; 
  public get recommended() {
    return this.getBooleanAttribute('recommended');
  }
  public set recommended(value: boolean | cdktf.IResolvable) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      recommended: cdktf.booleanToTerraform(this._recommended),
      selector: cdktf.stringToTerraform(this._selector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommended: {
        value: cdktf.booleanToHclTerraform(this._recommended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
