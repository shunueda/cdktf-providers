// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxDeviceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#id DataNetboxDeviceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#manufacturer DataNetboxDeviceType#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#model DataNetboxDeviceType#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#part_number DataNetboxDeviceType#part_number}
  */
  readonly partNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#slug DataNetboxDeviceType#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#subdevice_role DataNetboxDeviceType#subdevice_role}
  */
  readonly subdeviceRole?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type netbox_device_type}
*/
export class DataNetboxDeviceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxDeviceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxDeviceType to import
  * @param importFromId The id of the existing DataNetboxDeviceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxDeviceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/device_type netbox_device_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxDeviceTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetboxDeviceTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_type',
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
    this._id = config.id;
    this._manufacturer = config.manufacturer;
    this._model = config.model;
    this._partNumber = config.partNumber;
    this._slug = config.slug;
    this._subdeviceRole = config.subdeviceRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_full_depth - computed: true, optional: false, required: false
  public get isFullDepth() {
    return this.getBooleanAttribute('is_full_depth');
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // manufacturer_id - computed: true, optional: false, required: false
  public get manufacturerId() {
    return this.getNumberAttribute('manufacturer_id');
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // part_number - computed: false, optional: true, required: false
  private _partNumber?: string; 
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }
  public set partNumber(value: string) {
    this._partNumber = value;
  }
  public resetPartNumber() {
    this._partNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNumberInput() {
    return this._partNumber;
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // subdevice_role - computed: false, optional: true, required: false
  private _subdeviceRole?: string; 
  public get subdeviceRole() {
    return this.getStringAttribute('subdevice_role');
  }
  public set subdeviceRole(value: string) {
    this._subdeviceRole = value;
  }
  public resetSubdeviceRole() {
    this._subdeviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdeviceRoleInput() {
    return this._subdeviceRole;
  }

  // u_height - computed: true, optional: false, required: false
  public get uHeight() {
    return this.getNumberAttribute('u_height');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      manufacturer: cdktf.stringToTerraform(this._manufacturer),
      model: cdktf.stringToTerraform(this._model),
      part_number: cdktf.stringToTerraform(this._partNumber),
      slug: cdktf.stringToTerraform(this._slug),
      subdevice_role: cdktf.stringToTerraform(this._subdeviceRole),
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
      manufacturer: {
        value: cdktf.stringToHclTerraform(this._manufacturer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      part_number: {
        value: cdktf.stringToHclTerraform(this._partNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdevice_role: {
        value: cdktf.stringToHclTerraform(this._subdeviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
