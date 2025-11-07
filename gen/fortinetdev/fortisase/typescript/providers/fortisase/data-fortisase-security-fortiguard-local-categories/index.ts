// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityFortiguardLocalCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories#primary_key DataFortisaseSecurityFortiguardLocalCategories#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories#threat_weight DataFortisaseSecurityFortiguardLocalCategories#threat_weight}
  */
  readonly threatWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories#urls DataFortisaseSecurityFortiguardLocalCategories#urls}
  */
  readonly urls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories fortisase_security_fortiguard_local_categories}
*/
export class DataFortisaseSecurityFortiguardLocalCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_fortiguard_local_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityFortiguardLocalCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityFortiguardLocalCategories to import
  * @param importFromId The id of the existing DataFortisaseSecurityFortiguardLocalCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityFortiguardLocalCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_fortiguard_local_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_local_categories fortisase_security_fortiguard_local_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityFortiguardLocalCategoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityFortiguardLocalCategoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_fortiguard_local_categories',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._primaryKey = config.primaryKey;
    this._threatWeight = config.threatWeight;
    this._urls = config.urls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // threat_weight - computed: true, optional: true, required: false
  private _threatWeight?: string; 
  public get threatWeight() {
    return this.getStringAttribute('threat_weight');
  }
  public set threatWeight(value: string) {
    this._threatWeight = value;
  }
  public resetThreatWeight() {
    this._threatWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatWeightInput() {
    return this._threatWeight;
  }

  // urls - computed: true, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      threat_weight: cdktf.stringToTerraform(this._threatWeight),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_weight: {
        value: cdktf.stringToHclTerraform(this._threatWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
