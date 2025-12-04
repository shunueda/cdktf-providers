// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmFirmwareComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#description ConnectMdmFirmwareComponent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#device_type_id ConnectMdmFirmwareComponent#device_type_id}
  */
  readonly deviceTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#id ConnectMdmFirmwareComponent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#main_component ConnectMdmFirmwareComponent#main_component}
  */
  readonly mainComponent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#name ConnectMdmFirmwareComponent#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component hsdp_connect_mdm_firmware_component}
*/
export class ConnectMdmFirmwareComponent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_firmware_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmFirmwareComponent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmFirmwareComponent to import
  * @param importFromId The id of the existing ConnectMdmFirmwareComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmFirmwareComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_firmware_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_component hsdp_connect_mdm_firmware_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmFirmwareComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmFirmwareComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_firmware_component',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._mainComponent = config.mainComponent;
    this._name = config.name;
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

  // device_type_id - computed: false, optional: false, required: true
  private _deviceTypeId?: string; 
  public get deviceTypeId() {
    return this.getStringAttribute('device_type_id');
  }
  public set deviceTypeId(value: string) {
    this._deviceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeIdInput() {
    return this._deviceTypeId;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // main_component - computed: false, optional: true, required: false
  private _mainComponent?: boolean | cdktf.IResolvable; 
  public get mainComponent() {
    return this.getBooleanAttribute('main_component');
  }
  public set mainComponent(value: boolean | cdktf.IResolvable) {
    this._mainComponent = value;
  }
  public resetMainComponent() {
    this._mainComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainComponentInput() {
    return this._mainComponent;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_type_id: cdktf.stringToTerraform(this._deviceTypeId),
      id: cdktf.stringToTerraform(this._id),
      main_component: cdktf.booleanToTerraform(this._mainComponent),
      name: cdktf.stringToTerraform(this._name),
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
        value: cdktf.stringToHclTerraform(this._deviceTypeId),
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
      main_component: {
        value: cdktf.booleanToHclTerraform(this._mainComponent),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
