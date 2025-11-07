// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdguardListFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the list filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter#name DataAdguardListFilter#name}
  */
  readonly name: string;
  /**
  * When `true`, will consider this list filter of type whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter#whitelist DataAdguardListFilter#whitelist}
  */
  readonly whitelist?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter adguard_list_filter}
*/
export class DataAdguardListFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_list_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAdguardListFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAdguardListFilter to import
  * @param importFromId The id of the existing DataAdguardListFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAdguardListFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_list_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/list_filter adguard_list_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdguardListFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAdguardListFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'adguard_list_filter',
      terraformGeneratorMetadata: {
        providerName: 'adguard',
        providerVersion: '1.6.2'
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
    this._whitelist = config.whitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // rules_count - computed: true, optional: false, required: false
  public get rulesCount() {
    return this.getNumberAttribute('rules_count');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: boolean | cdktf.IResolvable; 
  public get whitelist() {
    return this.getBooleanAttribute('whitelist');
  }
  public set whitelist(value: boolean | cdktf.IResolvable) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      whitelist: cdktf.booleanToTerraform(this._whitelist),
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
      whitelist: {
        value: cdktf.booleanToHclTerraform(this._whitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
