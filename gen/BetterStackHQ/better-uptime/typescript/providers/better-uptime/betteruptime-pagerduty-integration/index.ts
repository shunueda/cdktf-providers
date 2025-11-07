// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimePagerdutyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PagerDuty routing key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration#key BetteruptimePagerdutyIntegration#key}
  */
  readonly key: string;
  /**
  * The name of the PagerDuty Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration#name BetteruptimePagerdutyIntegration#name}
  */
  readonly name?: string;
  /**
  * The PagerDuty alert severity. Can be any of the following: info, warning, error, or critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration#severity BetteruptimePagerdutyIntegration#severity}
  */
  readonly severity: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration#team_name BetteruptimePagerdutyIntegration#team_name}
  */
  readonly teamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration betteruptime_pagerduty_integration}
*/
export class BetteruptimePagerdutyIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_pagerduty_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimePagerdutyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimePagerdutyIntegration to import
  * @param importFromId The id of the existing BetteruptimePagerdutyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimePagerdutyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_pagerduty_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_pagerduty_integration betteruptime_pagerduty_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimePagerdutyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimePagerdutyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_pagerduty_integration',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._name = config.name;
    this._severity = config.severity;
    this._teamName = config.teamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      team_name: cdktf.stringToTerraform(this._teamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
