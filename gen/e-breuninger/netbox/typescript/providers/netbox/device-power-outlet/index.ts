// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicePowerOutletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#custom_fields DevicePowerOutlet#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#description DevicePowerOutlet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#device_id DevicePowerOutlet#device_id}
  */
  readonly deviceId: number;
  /**
  * One of [A, B, C].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#feed_leg DevicePowerOutlet#feed_leg}
  */
  readonly feedLeg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#id DevicePowerOutlet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#label DevicePowerOutlet#label}
  */
  readonly label?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#mark_connected DevicePowerOutlet#mark_connected}
  */
  readonly markConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#module_id DevicePowerOutlet#module_id}
  */
  readonly moduleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#name DevicePowerOutlet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#power_port_id DevicePowerOutlet#power_port_id}
  */
  readonly powerPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#tags DevicePowerOutlet#tags}
  */
  readonly tags?: string[];
  /**
  * One of [iec-60320-c5, iec-60320-c7, iec-60320-c13, iec-60320-c15, iec-60320-c19, iec-60320-c21, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15r, nema-5-15r, nema-5-20r, nema-5-30r, nema-5-50r, nema-6-15r, nema-6-20r, nema-6-30r, nema-6-50r, nema-10-30r, nema-10-50r, nema-14-20r, nema-14-30r, nema-14-50r, nema-14-60r, nema-15-15r, nema-15-20r, nema-15-30r, nema-15-50r, nema-15-60r, nema-l1-15r, nema-l5-15r, nema-l5-20r, nema-l5-30r, nema-l5-50r, nema-l6-15r, nema-l6-20r, nema-l6-30r, nema-l6-50r, nema-l10-30r, nema-l14-20r, nema-l14-30r, nema-l14-50r, nema-l14-60r, nema-l15-20r, nema-l15-30r, nema-l15-50r, nema-l15-60r, nema-l21-20r, nema-l21-30r, nema-l22-30r, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ita-e, ita-f, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o, ita-multistandard, usb-a, usb-micro-b, usb-c, dc-terminal, hdot-cx, saf-d-grid, neutrik-powercon-20a, neutrik-powercon-32a, neutrik-powercon-true1, neutrik-powercon-true1-top, ubiquiti-smartpower, hardwired, other].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#type DevicePowerOutlet#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet netbox_device_power_outlet}
*/
export class DevicePowerOutlet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_power_outlet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicePowerOutlet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicePowerOutlet to import
  * @param importFromId The id of the existing DevicePowerOutlet that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicePowerOutlet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_power_outlet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_power_outlet netbox_device_power_outlet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicePowerOutletConfig
  */
  public constructor(scope: Construct, id: string, config: DevicePowerOutletConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_power_outlet',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFields = config.customFields;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._feedLeg = config.feedLeg;
    this._id = config.id;
    this._label = config.label;
    this._markConnected = config.markConnected;
    this._moduleId = config.moduleId;
    this._name = config.name;
    this._powerPortId = config.powerPortId;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // feed_leg - computed: false, optional: true, required: false
  private _feedLeg?: string; 
  public get feedLeg() {
    return this.getStringAttribute('feed_leg');
  }
  public set feedLeg(value: string) {
    this._feedLeg = value;
  }
  public resetFeedLeg() {
    this._feedLeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedLegInput() {
    return this._feedLeg;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mark_connected - computed: false, optional: true, required: false
  private _markConnected?: boolean | cdktf.IResolvable; 
  public get markConnected() {
    return this.getBooleanAttribute('mark_connected');
  }
  public set markConnected(value: boolean | cdktf.IResolvable) {
    this._markConnected = value;
  }
  public resetMarkConnected() {
    this._markConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markConnectedInput() {
    return this._markConnected;
  }

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: number; 
  public get moduleId() {
    return this.getNumberAttribute('module_id');
  }
  public set moduleId(value: number) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
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

  // power_port_id - computed: false, optional: true, required: false
  private _powerPortId?: number; 
  public get powerPortId() {
    return this.getNumberAttribute('power_port_id');
  }
  public set powerPortId(value: number) {
    this._powerPortId = value;
  }
  public resetPowerPortId() {
    this._powerPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerPortIdInput() {
    return this._powerPortId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      feed_leg: cdktf.stringToTerraform(this._feedLeg),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      mark_connected: cdktf.booleanToTerraform(this._markConnected),
      module_id: cdktf.numberToTerraform(this._moduleId),
      name: cdktf.stringToTerraform(this._name),
      power_port_id: cdktf.numberToTerraform(this._powerPortId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feed_leg: {
        value: cdktf.stringToHclTerraform(this._feedLeg),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mark_connected: {
        value: cdktf.booleanToHclTerraform(this._markConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      module_id: {
        value: cdktf.numberToHclTerraform(this._moduleId),
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
      power_port_id: {
        value: cdktf.numberToHclTerraform(this._powerPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
