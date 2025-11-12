// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityAntivirusFiletypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes#is_password_protected DataFortisaseSecurityAntivirusFiletypes#is_password_protected}
  */
  readonly isPasswordProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes#primary_key DataFortisaseSecurityAntivirusFiletypes#primary_key}
  */
  readonly primaryKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes fortisase_security_antivirus_filetypes}
*/
export class DataFortisaseSecurityAntivirusFiletypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_antivirus_filetypes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityAntivirusFiletypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityAntivirusFiletypes to import
  * @param importFromId The id of the existing DataFortisaseSecurityAntivirusFiletypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityAntivirusFiletypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_antivirus_filetypes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_antivirus_filetypes fortisase_security_antivirus_filetypes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityAntivirusFiletypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityAntivirusFiletypesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_antivirus_filetypes',
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
    this._isPasswordProtected = config.isPasswordProtected;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // is_password_protected - computed: true, optional: true, required: false
  private _isPasswordProtected?: boolean | cdktf.IResolvable; 
  public get isPasswordProtected() {
    return this.getBooleanAttribute('is_password_protected');
  }
  public set isPasswordProtected(value: boolean | cdktf.IResolvable) {
    this._isPasswordProtected = value;
  }
  public resetIsPasswordProtected() {
    this._isPasswordProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPasswordProtectedInput() {
    return this._isPasswordProtected;
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
      is_password_protected: cdktf.booleanToTerraform(this._isPasswordProtected),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_password_protected: {
        value: cdktf.booleanToHclTerraform(this._isPasswordProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
