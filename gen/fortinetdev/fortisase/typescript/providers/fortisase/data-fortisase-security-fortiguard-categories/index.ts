// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityFortiguardCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#blocked_in_ratings DataFortisaseSecurityFortiguardCategories#blocked_in_ratings}
  */
  readonly blockedInRatings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#ftntid DataFortisaseSecurityFortiguardCategories#ftntid}
  */
  readonly ftntid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#group DataFortisaseSecurityFortiguardCategories#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#primary_key DataFortisaseSecurityFortiguardCategories#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#rating DataFortisaseSecurityFortiguardCategories#rating}
  */
  readonly rating?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories fortisase_security_fortiguard_categories}
*/
export class DataFortisaseSecurityFortiguardCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_fortiguard_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityFortiguardCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityFortiguardCategories to import
  * @param importFromId The id of the existing DataFortisaseSecurityFortiguardCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityFortiguardCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_fortiguard_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_fortiguard_categories fortisase_security_fortiguard_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityFortiguardCategoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityFortiguardCategoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_fortiguard_categories',
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
    this._blockedInRatings = config.blockedInRatings;
    this._ftntid = config.ftntid;
    this._group = config.group;
    this._primaryKey = config.primaryKey;
    this._rating = config.rating;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_in_ratings - computed: true, optional: true, required: false
  private _blockedInRatings?: string[]; 
  public get blockedInRatings() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_in_ratings'));
  }
  public set blockedInRatings(value: string[]) {
    this._blockedInRatings = value;
  }
  public resetBlockedInRatings() {
    this._blockedInRatings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInRatingsInput() {
    return this._blockedInRatings;
  }

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

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // rating - computed: true, optional: true, required: false
  private _rating?: string; 
  public get rating() {
    return this.getStringAttribute('rating');
  }
  public set rating(value: string) {
    this._rating = value;
  }
  public resetRating() {
    this._rating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingInput() {
    return this._rating;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_in_ratings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedInRatings),
      ftntid: cdktf.numberToTerraform(this._ftntid),
      group: cdktf.stringToTerraform(this._group),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      rating: cdktf.stringToTerraform(this._rating),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_in_ratings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedInRatings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ftntid: {
        value: cdktf.numberToHclTerraform(this._ftntid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rating: {
        value: cdktf.stringToHclTerraform(this._rating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
