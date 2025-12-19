// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectivityAlertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * TCP connectivity problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts#connectivity_alerts ConnectivityAlerts#connectivity_alerts}
  */
  readonly connectivityAlerts: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts#id ConnectivityAlerts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts#process_group_id ConnectivityAlerts#process_group_id}
  */
  readonly processGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts dynatrace_connectivity_alerts}
*/
export class ConnectivityAlerts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_connectivity_alerts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectivityAlerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectivityAlerts to import
  * @param importFromId The id of the existing ConnectivityAlerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectivityAlerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_connectivity_alerts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/connectivity_alerts dynatrace_connectivity_alerts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectivityAlertsConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectivityAlertsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_connectivity_alerts',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectivityAlerts = config.connectivityAlerts;
    this._id = config.id;
    this._processGroupId = config.processGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connectivity_alerts - computed: false, optional: false, required: true
  private _connectivityAlerts?: boolean | cdktf.IResolvable; 
  public get connectivityAlerts() {
    return this.getBooleanAttribute('connectivity_alerts');
  }
  public set connectivityAlerts(value: boolean | cdktf.IResolvable) {
    this._connectivityAlerts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAlertsInput() {
    return this._connectivityAlerts;
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

  // process_group_id - computed: false, optional: false, required: true
  private _processGroupId?: string; 
  public get processGroupId() {
    return this.getStringAttribute('process_group_id');
  }
  public set processGroupId(value: string) {
    this._processGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupIdInput() {
    return this._processGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connectivity_alerts: cdktf.booleanToTerraform(this._connectivityAlerts),
      id: cdktf.stringToTerraform(this._id),
      process_group_id: cdktf.stringToTerraform(this._processGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connectivity_alerts: {
        value: cdktf.booleanToHclTerraform(this._connectivityAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_group_id: {
        value: cdktf.stringToHclTerraform(this._processGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
