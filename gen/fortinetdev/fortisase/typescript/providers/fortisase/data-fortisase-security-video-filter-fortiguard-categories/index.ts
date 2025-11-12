// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityVideoFilterFortiguardCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories#ftntid DataFortisaseSecurityVideoFilterFortiguardCategories#ftntid}
  */
  readonly ftntid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories#primary_key DataFortisaseSecurityVideoFilterFortiguardCategories#primary_key}
  */
  readonly primaryKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories fortisase_security_video_filter_fortiguard_categories}
*/
export class DataFortisaseSecurityVideoFilterFortiguardCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_video_filter_fortiguard_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityVideoFilterFortiguardCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityVideoFilterFortiguardCategories to import
  * @param importFromId The id of the existing DataFortisaseSecurityVideoFilterFortiguardCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityVideoFilterFortiguardCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_video_filter_fortiguard_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_video_filter_fortiguard_categories fortisase_security_video_filter_fortiguard_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityVideoFilterFortiguardCategoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityVideoFilterFortiguardCategoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_video_filter_fortiguard_categories',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftntid = config.ftntid;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftntid - computed: true, optional: true, required: false
  private _ftntid?: number; 
  public get ftntid() {
    return this.getNumberAttribute('ftntid');
  }
  public set ftntid(value: number) {
    this._ftntid = value;
  }
  public resetFtntid() {
    this._ftntid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftntidInput() {
    return this._ftntid;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftntid: cdktf.numberToTerraform(this._ftntid),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftntid: {
        value: cdktf.numberToHclTerraform(this._ftntid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
