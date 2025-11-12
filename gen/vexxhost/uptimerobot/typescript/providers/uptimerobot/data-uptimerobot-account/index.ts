// https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimerobotAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/account#id DataUptimerobotAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/account uptimerobot_account}
*/
export class DataUptimerobotAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptimerobot_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimerobotAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimerobotAccount to import
  * @param importFromId The id of the existing DataUptimerobotAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimerobotAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptimerobot_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/account uptimerobot_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimerobotAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimerobotAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptimerobot_account',
      terraformGeneratorMetadata: {
        providerName: 'uptimerobot',
        providerVersion: '0.8.2',
        providerVersionConstraint: '0.8.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // down_monitors - computed: true, optional: false, required: false
  public get downMonitors() {
    return this.getNumberAttribute('down_monitors');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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

  // monitor_interval - computed: true, optional: false, required: false
  public get monitorInterval() {
    return this.getNumberAttribute('monitor_interval');
  }

  // monitor_limit - computed: true, optional: false, required: false
  public get monitorLimit() {
    return this.getNumberAttribute('monitor_limit');
  }

  // paused_monitors - computed: true, optional: false, required: false
  public get pausedMonitors() {
    return this.getNumberAttribute('paused_monitors');
  }

  // up_monitors - computed: true, optional: false, required: false
  public get upMonitors() {
    return this.getNumberAttribute('up_monitors');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
