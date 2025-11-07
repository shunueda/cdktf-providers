// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WemDirectoryObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the site to which the machine-level AD object belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object#configuration_set_id WemDirectoryObject#configuration_set_id}
  */
  readonly configurationSetId: number;
  /**
  * Indicates whether the machine-level AD object is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object#enabled WemDirectoryObject#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * GUID identifier of the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object#machine_catalog_id WemDirectoryObject#machine_catalog_id}
  */
  readonly machineCatalogId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object citrix_wem_directory_object}
*/
export class WemDirectoryObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_wem_directory_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WemDirectoryObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WemDirectoryObject to import
  * @param importFromId The id of the existing WemDirectoryObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WemDirectoryObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_wem_directory_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/wem_directory_object citrix_wem_directory_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WemDirectoryObjectConfig
  */
  public constructor(scope: Construct, id: string, config: WemDirectoryObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_wem_directory_object',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationSetId = config.configurationSetId;
    this._enabled = config.enabled;
    this._machineCatalogId = config.machineCatalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_id - computed: false, optional: false, required: true
  private _configurationSetId?: number; 
  public get configurationSetId() {
    return this.getNumberAttribute('configuration_set_id');
  }
  public set configurationSetId(value: number) {
    this._configurationSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetIdInput() {
    return this._configurationSetId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_catalog_id - computed: false, optional: false, required: true
  private _machineCatalogId?: string; 
  public get machineCatalogId() {
    return this.getStringAttribute('machine_catalog_id');
  }
  public set machineCatalogId(value: string) {
    this._machineCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCatalogIdInput() {
    return this._machineCatalogId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_id: cdktf.numberToTerraform(this._configurationSetId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      machine_catalog_id: cdktf.stringToTerraform(this._machineCatalogId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_id: {
        value: cdktf.numberToHclTerraform(this._configurationSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_catalog_id: {
        value: cdktf.stringToHclTerraform(this._machineCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
