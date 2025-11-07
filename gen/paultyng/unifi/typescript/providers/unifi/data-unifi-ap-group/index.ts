// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUnifiApGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the AP group to look up, leave blank to look up the default AP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group#name DataUnifiApGroup#name}
  */
  readonly name?: string;
  /**
  * The name of the site the AP group is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group#site DataUnifiApGroup#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group unifi_ap_group}
*/
export class DataUnifiApGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_ap_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUnifiApGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUnifiApGroup to import
  * @param importFromId The id of the existing DataUnifiApGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUnifiApGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_ap_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/ap_group unifi_ap_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUnifiApGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUnifiApGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_ap_group',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
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
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      site: cdktf.stringToTerraform(this._site),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
