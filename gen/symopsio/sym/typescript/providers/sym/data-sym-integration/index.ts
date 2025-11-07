// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSymIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external ID for this Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#external_id DataSymIntegration#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#id DataSymIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional label for this Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#label DataSymIntegration#label}
  */
  readonly label?: string;
  /**
  * A unique identifier for this Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#name DataSymIntegration#name}
  */
  readonly name: string;
  /**
  * A map of settings specific to this type of Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#settings DataSymIntegration#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The type of Integration. E.g. 'slack' or 'pagerduty'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#type DataSymIntegration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration sym_integration}
*/
export class DataSymIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSymIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSymIntegration to import
  * @param importFromId The id of the existing DataSymIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSymIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/data-sources/integration sym_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSymIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSymIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'sym_integration',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalId = config.externalId;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._settings = config.settings;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._settings),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
