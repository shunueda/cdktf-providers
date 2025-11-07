// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceEdgeAssistantScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#customer_id ServiceEdgeAssistantSchedule#customer_id}
  */
  readonly customerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#delete_disabled ServiceEdgeAssistantSchedule#delete_disabled}
  */
  readonly deleteDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#enabled ServiceEdgeAssistantSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#frequency ServiceEdgeAssistantSchedule#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#frequency_interval ServiceEdgeAssistantSchedule#frequency_interval}
  */
  readonly frequencyInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule zpa_service_edge_assistant_schedule}
*/
export class ServiceEdgeAssistantSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_service_edge_assistant_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceEdgeAssistantSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceEdgeAssistantSchedule to import
  * @param importFromId The id of the existing ServiceEdgeAssistantSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceEdgeAssistantSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_service_edge_assistant_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/service_edge_assistant_schedule zpa_service_edge_assistant_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceEdgeAssistantScheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceEdgeAssistantScheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_service_edge_assistant_schedule',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerId = config.customerId;
    this._deleteDisabled = config.deleteDisabled;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._frequencyInterval = config.frequencyInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_id - computed: true, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // delete_disabled - computed: false, optional: true, required: false
  private _deleteDisabled?: boolean | cdktf.IResolvable; 
  public get deleteDisabled() {
    return this.getBooleanAttribute('delete_disabled');
  }
  public set deleteDisabled(value: boolean | cdktf.IResolvable) {
    this._deleteDisabled = value;
  }
  public resetDeleteDisabled() {
    this._deleteDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDisabledInput() {
    return this._deleteDisabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_interval - computed: false, optional: true, required: false
  private _frequencyInterval?: string; 
  public get frequencyInterval() {
    return this.getStringAttribute('frequency_interval');
  }
  public set frequencyInterval(value: string) {
    this._frequencyInterval = value;
  }
  public resetFrequencyInterval() {
    this._frequencyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_id: cdktf.stringToTerraform(this._customerId),
      delete_disabled: cdktf.booleanToTerraform(this._deleteDisabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      frequency_interval: cdktf.stringToTerraform(this._frequencyInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_disabled: {
        value: cdktf.booleanToHclTerraform(this._deleteDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_interval: {
        value: cdktf.stringToHclTerraform(this._frequencyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
