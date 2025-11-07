// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHerokuxAppAddonsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons#addon_service_name DataHerokuxAppAddons#addon_service_name}
  */
  readonly addonServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons#app_id DataHerokuxAppAddons#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons#id DataHerokuxAppAddons#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons herokux_app_addons}
*/
export class DataHerokuxAppAddons extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_app_addons";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHerokuxAppAddons resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHerokuxAppAddons to import
  * @param importFromId The id of the existing DataHerokuxAppAddons that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHerokuxAppAddons to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_app_addons", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/app_addons herokux_app_addons} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHerokuxAppAddonsConfig
  */
  public constructor(scope: Construct, id: string, config: DataHerokuxAppAddonsConfig) {
    super(scope, id, {
      terraformResourceType: 'herokux_app_addons',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addonServiceName = config.addonServiceName;
    this._appId = config.appId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_service_name - computed: false, optional: true, required: false
  private _addonServiceName?: string; 
  public get addonServiceName() {
    return this.getStringAttribute('addon_service_name');
  }
  public set addonServiceName(value: string) {
    this._addonServiceName = value;
  }
  public resetAddonServiceName() {
    this._addonServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonServiceNameInput() {
    return this._addonServiceName;
  }

  // addons - computed: true, optional: false, required: false
  private _addons = new cdktf.StringMap(this, "addons");
  public get addons() {
    return this._addons;
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_service_name: cdktf.stringToTerraform(this._addonServiceName),
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_service_name: {
        value: cdktf.stringToHclTerraform(this._addonServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
