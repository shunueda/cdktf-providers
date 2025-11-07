// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#description Schedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#enabled Schedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Extra data to be pass for the schedule (YAML format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#extra_data Schedule#extra_data}
  */
  readonly extraData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#id Schedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#inventory Schedule#inventory}
  */
  readonly inventory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#rrule Schedule#rrule}
  */
  readonly rrule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#unified_job_template_id Schedule#unified_job_template_id}
  */
  readonly unifiedJobTemplateId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule awx_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedule to import
  * @param importFromId The id of the existing Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/schedule awx_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_schedule',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._extraData = config.extraData;
    this._id = config.id;
    this._inventory = config.inventory;
    this._name = config.name;
    this._rrule = config.rrule;
    this._unifiedJobTemplateId = config.unifiedJobTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // extra_data - computed: false, optional: true, required: false
  private _extraData?: string; 
  public get extraData() {
    return this.getStringAttribute('extra_data');
  }
  public set extraData(value: string) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
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

  // inventory - computed: false, optional: true, required: false
  private _inventory?: number; 
  public get inventory() {
    return this.getNumberAttribute('inventory');
  }
  public set inventory(value: number) {
    this._inventory = value;
  }
  public resetInventory() {
    this._inventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory;
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

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // unified_job_template_id - computed: false, optional: false, required: true
  private _unifiedJobTemplateId?: number; 
  public get unifiedJobTemplateId() {
    return this.getNumberAttribute('unified_job_template_id');
  }
  public set unifiedJobTemplateId(value: number) {
    this._unifiedJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedJobTemplateIdInput() {
    return this._unifiedJobTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extra_data: cdktf.stringToTerraform(this._extraData),
      id: cdktf.stringToTerraform(this._id),
      inventory: cdktf.numberToTerraform(this._inventory),
      name: cdktf.stringToTerraform(this._name),
      rrule: cdktf.stringToTerraform(this._rrule),
      unified_job_template_id: cdktf.numberToTerraform(this._unifiedJobTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_data: {
        value: cdktf.stringToHclTerraform(this._extraData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory: {
        value: cdktf.numberToHclTerraform(this._inventory),
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
      rrule: {
        value: cdktf.stringToHclTerraform(this._rrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_job_template_id: {
        value: cdktf.numberToHclTerraform(this._unifiedJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
