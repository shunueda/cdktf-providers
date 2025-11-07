// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#description InterfaceTemplate#description}
  */
  readonly description?: string;
  /**
  * Exactly one of `device_type_id` or `module_type_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#device_type_id InterfaceTemplate#device_type_id}
  */
  readonly deviceTypeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#id InterfaceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#label InterfaceTemplate#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#mgmt_only InterfaceTemplate#mgmt_only}
  */
  readonly mgmtOnly?: boolean | cdktf.IResolvable;
  /**
  * Exactly one of `device_type_id` or `module_type_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#module_type_id InterfaceTemplate#module_type_id}
  */
  readonly moduleTypeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#name InterfaceTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#type InterfaceTemplate#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template netbox_interface_template}
*/
export class InterfaceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_interface_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTemplate to import
  * @param importFromId The id of the existing InterfaceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_interface_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/interface_template netbox_interface_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_interface_template',
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
    this._description = config.description;
    this._deviceTypeId = config.deviceTypeId;
    this._id = config.id;
    this._label = config.label;
    this._mgmtOnly = config.mgmtOnly;
    this._moduleTypeId = config.moduleTypeId;
    this._name = config.name;
    this._type = config.type;
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

  // device_type_id - computed: false, optional: true, required: false
  private _deviceTypeId?: number; 
  public get deviceTypeId() {
    return this.getNumberAttribute('device_type_id');
  }
  public set deviceTypeId(value: number) {
    this._deviceTypeId = value;
  }
  public resetDeviceTypeId() {
    this._deviceTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeIdInput() {
    return this._deviceTypeId;
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

  // mgmt_only - computed: false, optional: true, required: false
  private _mgmtOnly?: boolean | cdktf.IResolvable; 
  public get mgmtOnly() {
    return this.getBooleanAttribute('mgmt_only');
  }
  public set mgmtOnly(value: boolean | cdktf.IResolvable) {
    this._mgmtOnly = value;
  }
  public resetMgmtOnly() {
    this._mgmtOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtOnlyInput() {
    return this._mgmtOnly;
  }

  // module_type_id - computed: false, optional: true, required: false
  private _moduleTypeId?: number; 
  public get moduleTypeId() {
    return this.getNumberAttribute('module_type_id');
  }
  public set moduleTypeId(value: number) {
    this._moduleTypeId = value;
  }
  public resetModuleTypeId() {
    this._moduleTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeIdInput() {
    return this._moduleTypeId;
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
      description: cdktf.stringToTerraform(this._description),
      device_type_id: cdktf.numberToTerraform(this._deviceTypeId),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      mgmt_only: cdktf.booleanToTerraform(this._mgmtOnly),
      module_type_id: cdktf.numberToTerraform(this._moduleTypeId),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
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
      device_type_id: {
        value: cdktf.numberToHclTerraform(this._deviceTypeId),
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
      mgmt_only: {
        value: cdktf.booleanToHclTerraform(this._mgmtOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      module_type_id: {
        value: cdktf.numberToHclTerraform(this._moduleTypeId),
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
