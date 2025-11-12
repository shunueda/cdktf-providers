// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_severity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeSeverityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this Severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_severity#name DataBetteruptimeSeverity#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_severity betteruptime_severity}
*/
export class DataBetteruptimeSeverity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_severity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeSeverity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeSeverity to import
  * @param importFromId The id of the existing DataBetteruptimeSeverity that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_severity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeSeverity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_severity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_severity betteruptime_severity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeSeverityConfig
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeSeverityConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_severity',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
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

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // critical_alert - computed: true, optional: false, required: false
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
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

  // push - computed: true, optional: false, required: false
  public get push() {
    return this.getBooleanAttribute('push');
  }

  // severity_group_id - computed: true, optional: false, required: false
  public get severityGroupId() {
    return this.getNumberAttribute('severity_group_id');
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
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
