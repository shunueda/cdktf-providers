// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team quota. Optional, Default daily quota is 0.01 units/day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team#daily_quota Team#daily_quota}
  */
  readonly dailyQuota?: number;
  /**
  * Team name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team#name Team#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team coralogix_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/team coralogix_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_team',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dailyQuota = config.dailyQuota;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_quota - computed: true, optional: true, required: false
  private _dailyQuota?: number; 
  public get dailyQuota() {
    return this.getNumberAttribute('daily_quota');
  }
  public set dailyQuota(value: number) {
    this._dailyQuota = value;
  }
  public resetDailyQuota() {
    this._dailyQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyQuotaInput() {
    return this._dailyQuota;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily_quota: cdktf.numberToTerraform(this._dailyQuota),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daily_quota: {
        value: cdktf.numberToHclTerraform(this._dailyQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
