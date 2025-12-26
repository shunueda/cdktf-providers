// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#id DeviceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#is_full_depth DeviceType#is_full_depth}
  */
  readonly isFullDepth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#manufacturer_id DeviceType#manufacturer_id}
  */
  readonly manufacturerId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#model DeviceType#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#part_number DeviceType#part_number}
  */
  readonly partNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#slug DeviceType#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#subdevice_role DeviceType#subdevice_role}
  */
  readonly subdeviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#tags DeviceType#tags}
  */
  readonly tags?: string[];
  /**
  * Defaults to `1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#u_height DeviceType#u_height}
  */
  readonly uHeight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type netbox_device_type}
*/
export class DeviceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceType to import
  * @param importFromId The id of the existing DeviceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_type netbox_device_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_type',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
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
    this._isFullDepth = config.isFullDepth;
    this._manufacturerId = config.manufacturerId;
    this._model = config.model;
    this._partNumber = config.partNumber;
    this._slug = config.slug;
    this._subdeviceRole = config.subdeviceRole;
    this._tags = config.tags;
    this._uHeight = config.uHeight;
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

  // is_full_depth - computed: false, optional: true, required: false
  private _isFullDepth?: boolean | cdktf.IResolvable; 
  public get isFullDepth() {
    return this.getBooleanAttribute('is_full_depth');
  }
  public set isFullDepth(value: boolean | cdktf.IResolvable) {
    this._isFullDepth = value;
  }
  public resetIsFullDepth() {
    this._isFullDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFullDepthInput() {
    return this._isFullDepth;
  }

  // manufacturer_id - computed: false, optional: false, required: true
  private _manufacturerId?: number; 
  public get manufacturerId() {
    return this.getNumberAttribute('manufacturer_id');
  }
  public set manufacturerId(value: number) {
    this._manufacturerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerIdInput() {
    return this._manufacturerId;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
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

  // slug - computed: true, optional: true, required: false
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

  // u_height - computed: false, optional: true, required: false
  private _uHeight?: number; 
  public get uHeight() {
    return this.getNumberAttribute('u_height');
  }
  public set uHeight(value: number) {
    this._uHeight = value;
  }
  public resetUHeight() {
    this._uHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uHeightInput() {
    return this._uHeight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_full_depth: cdktf.booleanToTerraform(this._isFullDepth),
      manufacturer_id: cdktf.numberToTerraform(this._manufacturerId),
      model: cdktf.stringToTerraform(this._model),
      part_number: cdktf.stringToTerraform(this._partNumber),
      slug: cdktf.stringToTerraform(this._slug),
      subdevice_role: cdktf.stringToTerraform(this._subdeviceRole),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      u_height: cdktf.numberToTerraform(this._uHeight),
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
      is_full_depth: {
        value: cdktf.booleanToHclTerraform(this._isFullDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manufacturer_id: {
        value: cdktf.numberToHclTerraform(this._manufacturerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      u_height: {
        value: cdktf.numberToHclTerraform(this._uHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
