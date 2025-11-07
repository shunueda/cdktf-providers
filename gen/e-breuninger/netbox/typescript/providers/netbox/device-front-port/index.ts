// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceFrontPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#color_hex DeviceFrontPort#color_hex}
  */
  readonly colorHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#custom_fields DeviceFrontPort#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#description DeviceFrontPort#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#device_id DeviceFrontPort#device_id}
  */
  readonly deviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#id DeviceFrontPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#label DeviceFrontPort#label}
  */
  readonly label?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#mark_connected DeviceFrontPort#mark_connected}
  */
  readonly markConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#module_id DeviceFrontPort#module_id}
  */
  readonly moduleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#name DeviceFrontPort#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#rear_port_id DeviceFrontPort#rear_port_id}
  */
  readonly rearPortId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#rear_port_position DeviceFrontPort#rear_port_position}
  */
  readonly rearPortPosition: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#tags DeviceFrontPort#tags}
  */
  readonly tags?: string[];
  /**
  * One of [8p8c, 8p6c, 8p4c, 8p2c, 6p6c, 6p4c, 6p2c, 4p4c, 4p2c, gg45, tera-4p, tera-2p, tera-1p, 110-punch, bnc, f, n, mrj21, fc, lc, lc-pc, lc-upc, lc-apc, lsh, lsh-pc, lsh-upc, lsh-apc, mpo, mtrj, sc, sc-pc, sc-upc, sc-apc, st, cs, sn, sma-905, sma-906, urm-p2, urm-p4, urm-p8, splice, other].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#type DeviceFrontPort#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port netbox_device_front_port}
*/
export class DeviceFrontPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_front_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceFrontPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceFrontPort to import
  * @param importFromId The id of the existing DeviceFrontPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceFrontPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_front_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_front_port netbox_device_front_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceFrontPortConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceFrontPortConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_front_port',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colorHex = config.colorHex;
    this._customFields = config.customFields;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._label = config.label;
    this._markConnected = config.markConnected;
    this._moduleId = config.moduleId;
    this._name = config.name;
    this._rearPortId = config.rearPortId;
    this._rearPortPosition = config.rearPortPosition;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color_hex - computed: false, optional: true, required: false
  private _colorHex?: string; 
  public get colorHex() {
    return this.getStringAttribute('color_hex');
  }
  public set colorHex(value: string) {
    this._colorHex = value;
  }
  public resetColorHex() {
    this._colorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorHexInput() {
    return this._colorHex;
  }

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

  // rear_port_id - computed: false, optional: false, required: true
  private _rearPortId?: number; 
  public get rearPortId() {
    return this.getNumberAttribute('rear_port_id');
  }
  public set rearPortId(value: number) {
    this._rearPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rearPortIdInput() {
    return this._rearPortId;
  }

  // rear_port_position - computed: false, optional: false, required: true
  private _rearPortPosition?: number; 
  public get rearPortPosition() {
    return this.getNumberAttribute('rear_port_position');
  }
  public set rearPortPosition(value: number) {
    this._rearPortPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rearPortPositionInput() {
    return this._rearPortPosition;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      color_hex: cdktf.stringToTerraform(this._colorHex),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      mark_connected: cdktf.booleanToTerraform(this._markConnected),
      module_id: cdktf.numberToTerraform(this._moduleId),
      name: cdktf.stringToTerraform(this._name),
      rear_port_id: cdktf.numberToTerraform(this._rearPortId),
      rear_port_position: cdktf.numberToTerraform(this._rearPortPosition),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color_hex: {
        value: cdktf.stringToHclTerraform(this._colorHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      rear_port_id: {
        value: cdktf.numberToHclTerraform(this._rearPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rear_port_position: {
        value: cdktf.numberToHclTerraform(this._rearPortPosition),
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
