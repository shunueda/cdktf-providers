// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityOnetimeSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules#end_utc SecurityOnetimeSchedules#end_utc}
  */
  readonly endUtc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules#expiration_days SecurityOnetimeSchedules#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules#primary_key SecurityOnetimeSchedules#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules#start_utc SecurityOnetimeSchedules#start_utc}
  */
  readonly startUtc?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules fortisase_security_onetime_schedules}
*/
export class SecurityOnetimeSchedules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_onetime_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityOnetimeSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityOnetimeSchedules to import
  * @param importFromId The id of the existing SecurityOnetimeSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityOnetimeSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_onetime_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_onetime_schedules fortisase_security_onetime_schedules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityOnetimeSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityOnetimeSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_onetime_schedules',
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
    this._endUtc = config.endUtc;
    this._expirationDays = config.expirationDays;
    this._primaryKey = config.primaryKey;
    this._startUtc = config.startUtc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_utc - computed: true, optional: true, required: false
  private _endUtc?: number; 
  public get endUtc() {
    return this.getNumberAttribute('end_utc');
  }
  public set endUtc(value: number) {
    this._endUtc = value;
  }
  public resetEndUtc() {
    this._endUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUtcInput() {
    return this._endUtc;
  }

  // expiration_days - computed: true, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // start_utc - computed: true, optional: true, required: false
  private _startUtc?: number; 
  public get startUtc() {
    return this.getNumberAttribute('start_utc');
  }
  public set startUtc(value: number) {
    this._startUtc = value;
  }
  public resetStartUtc() {
    this._startUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startUtcInput() {
    return this._startUtc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_utc: cdktf.numberToTerraform(this._endUtc),
      expiration_days: cdktf.numberToTerraform(this._expirationDays),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      start_utc: cdktf.numberToTerraform(this._startUtc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_utc: {
        value: cdktf.numberToHclTerraform(this._endUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration_days: {
        value: cdktf.numberToHclTerraform(this._expirationDays),
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
      start_utc: {
        value: cdktf.numberToHclTerraform(this._startUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
