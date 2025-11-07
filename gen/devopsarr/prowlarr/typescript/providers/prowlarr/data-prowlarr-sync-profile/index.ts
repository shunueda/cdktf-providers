// https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/sync_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProwlarrSyncProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/sync_profile#name DataProwlarrSyncProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/sync_profile prowlarr_sync_profile}
*/
export class DataProwlarrSyncProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_sync_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProwlarrSyncProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProwlarrSyncProfile to import
  * @param importFromId The id of the existing DataProwlarrSyncProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/sync_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProwlarrSyncProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_sync_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/sync_profile prowlarr_sync_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProwlarrSyncProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataProwlarrSyncProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_sync_profile',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.0.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_automatic_search - computed: true, optional: false, required: false
  public get enableAutomaticSearch() {
    return this.getBooleanAttribute('enable_automatic_search');
  }

  // enable_interactive_search - computed: true, optional: false, required: false
  public get enableInteractiveSearch() {
    return this.getBooleanAttribute('enable_interactive_search');
  }

  // enable_rss - computed: true, optional: false, required: false
  public get enableRss() {
    return this.getBooleanAttribute('enable_rss');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_seeders - computed: true, optional: false, required: false
  public get minimumSeeders() {
    return this.getNumberAttribute('minimum_seeders');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
