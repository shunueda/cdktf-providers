// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemPasswordpolicyguestadminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin#id DataFortiosSystemPasswordpolicyguestadmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin#vdomparam DataFortiosSystemPasswordpolicyguestadmin#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin fortios_system_passwordpolicyguestadmin}
*/
export class DataFortiosSystemPasswordpolicyguestadmin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_passwordpolicyguestadmin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemPasswordpolicyguestadmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemPasswordpolicyguestadmin to import
  * @param importFromId The id of the existing DataFortiosSystemPasswordpolicyguestadmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemPasswordpolicyguestadmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_passwordpolicyguestadmin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_passwordpolicyguestadmin fortios_system_passwordpolicyguestadmin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemPasswordpolicyguestadminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemPasswordpolicyguestadminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_passwordpolicyguestadmin',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_to - computed: true, optional: false, required: false
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }

  // change_4_characters - computed: true, optional: false, required: false
  public get change4Characters() {
    return this.getStringAttribute('change_4_characters');
  }

  // expire_day - computed: true, optional: false, required: false
  public get expireDay() {
    return this.getNumberAttribute('expire_day');
  }

  // expire_status - computed: true, optional: false, required: false
  public get expireStatus() {
    return this.getStringAttribute('expire_status');
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

  // min_change_characters - computed: true, optional: false, required: false
  public get minChangeCharacters() {
    return this.getNumberAttribute('min_change_characters');
  }

  // min_lower_case_letter - computed: true, optional: false, required: false
  public get minLowerCaseLetter() {
    return this.getNumberAttribute('min_lower_case_letter');
  }

  // min_non_alphanumeric - computed: true, optional: false, required: false
  public get minNonAlphanumeric() {
    return this.getNumberAttribute('min_non_alphanumeric');
  }

  // min_number - computed: true, optional: false, required: false
  public get minNumber() {
    return this.getNumberAttribute('min_number');
  }

  // min_upper_case_letter - computed: true, optional: false, required: false
  public get minUpperCaseLetter() {
    return this.getNumberAttribute('min_upper_case_letter');
  }

  // minimum_length - computed: true, optional: false, required: false
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }

  // reuse_password - computed: true, optional: false, required: false
  public get reusePassword() {
    return this.getStringAttribute('reuse_password');
  }

  // reuse_password_limit - computed: true, optional: false, required: false
  public get reusePasswordLimit() {
    return this.getNumberAttribute('reuse_password_limit');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
