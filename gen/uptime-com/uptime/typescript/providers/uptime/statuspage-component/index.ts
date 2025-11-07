// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#auto_status_down StatuspageComponent#auto_status_down}
  */
  readonly autoStatusDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#auto_status_up StatuspageComponent#auto_status_up}
  */
  readonly autoStatusUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#description StatuspageComponent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#group_id StatuspageComponent#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#is_group StatuspageComponent#is_group}
  */
  readonly isGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#name StatuspageComponent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#service_id StatuspageComponent#service_id}
  */
  readonly serviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#status StatuspageComponent#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#statuspage_id StatuspageComponent#statuspage_id}
  */
  readonly statuspageId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component uptime_statuspage_component}
*/
export class StatuspageComponent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuspageComponent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuspageComponent to import
  * @param importFromId The id of the existing StatuspageComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuspageComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage_component uptime_statuspage_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageComponentConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_component',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoStatusDown = config.autoStatusDown;
    this._autoStatusUp = config.autoStatusUp;
    this._description = config.description;
    this._groupId = config.groupId;
    this._isGroup = config.isGroup;
    this._name = config.name;
    this._serviceId = config.serviceId;
    this._status = config.status;
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_status_down - computed: true, optional: true, required: false
  private _autoStatusDown?: string; 
  public get autoStatusDown() {
    return this.getStringAttribute('auto_status_down');
  }
  public set autoStatusDown(value: string) {
    this._autoStatusDown = value;
  }
  public resetAutoStatusDown() {
    this._autoStatusDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStatusDownInput() {
    return this._autoStatusDown;
  }

  // auto_status_up - computed: true, optional: true, required: false
  private _autoStatusUp?: string; 
  public get autoStatusUp() {
    return this.getStringAttribute('auto_status_up');
  }
  public set autoStatusUp(value: string) {
    this._autoStatusUp = value;
  }
  public resetAutoStatusUp() {
    this._autoStatusUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStatusUpInput() {
    return this._autoStatusUp;
  }

  // description - computed: true, optional: true, required: false
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

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_group - computed: true, optional: true, required: false
  private _isGroup?: boolean | cdktf.IResolvable; 
  public get isGroup() {
    return this.getBooleanAttribute('is_group');
  }
  public set isGroup(value: boolean | cdktf.IResolvable) {
    this._isGroup = value;
  }
  public resetIsGroup() {
    this._isGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupInput() {
    return this._isGroup;
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

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_status_down: cdktf.stringToTerraform(this._autoStatusDown),
      auto_status_up: cdktf.stringToTerraform(this._autoStatusUp),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.numberToTerraform(this._groupId),
      is_group: cdktf.booleanToTerraform(this._isGroup),
      name: cdktf.stringToTerraform(this._name),
      service_id: cdktf.numberToTerraform(this._serviceId),
      status: cdktf.stringToTerraform(this._status),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_status_down: {
        value: cdktf.stringToHclTerraform(this._autoStatusDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_status_up: {
        value: cdktf.stringToHclTerraform(this._autoStatusUp),
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
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_group: {
        value: cdktf.booleanToHclTerraform(this._isGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
