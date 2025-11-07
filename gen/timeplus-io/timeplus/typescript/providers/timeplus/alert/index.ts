// https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of action the alert should take, i.e. the name of the target system, like 'slack', 'email', etc. Please refer to the Timeplus document for supported alert action types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#action Alert#action}
  */
  readonly action: string;
  /**
  * A detailed text describes the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#description Alert#description}
  */
  readonly description?: string;
  /**
  * The human-friendly name for the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * a JSON object defines the configurations for the specific alert action. The properites could contain sensitive information like password, secret, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#properties Alert#properties}
  */
  readonly properties: string;
  /**
  * The query the alert uses to generate events that resolve the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#resolve_sql Alert#resolve_sql}
  */
  readonly resolveSql?: string;
  /**
  * A number indicates how serious this alert is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#severity Alert#severity}
  */
  readonly severity?: number;
  /**
  * The query the alert uses to generate events that trigger the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#trigger_sql Alert#trigger_sql}
  */
  readonly triggerSql: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert timeplus_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/alert timeplus_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_alert',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._name = config.name;
    this._properties = config.properties;
    this._resolveSql = config.resolveSql;
    this._severity = config.severity;
    this._triggerSql = config.triggerSql;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // properties - computed: false, optional: false, required: true
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // resolve_sql - computed: false, optional: true, required: false
  private _resolveSql?: string; 
  public get resolveSql() {
    return this.getStringAttribute('resolve_sql');
  }
  public set resolveSql(value: string) {
    this._resolveSql = value;
  }
  public resetResolveSql() {
    this._resolveSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveSqlInput() {
    return this._resolveSql;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // trigger_sql - computed: false, optional: false, required: true
  private _triggerSql?: string; 
  public get triggerSql() {
    return this.getStringAttribute('trigger_sql');
  }
  public set triggerSql(value: string) {
    this._triggerSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSqlInput() {
    return this._triggerSql;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.stringToTerraform(this._properties),
      resolve_sql: cdktf.stringToTerraform(this._resolveSql),
      severity: cdktf.numberToTerraform(this._severity),
      trigger_sql: cdktf.stringToTerraform(this._triggerSql),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_sql: {
        value: cdktf.stringToHclTerraform(this._resolveSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.numberToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_sql: {
        value: cdktf.stringToHclTerraform(this._triggerSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
