// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmDeviceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#commercial_type_number ConnectMdmDeviceType#commercial_type_number}
  */
  readonly commercialTypeNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#custom_type_attributes ConnectMdmDeviceType#custom_type_attributes}
  */
  readonly customTypeAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#default_iam_group_id ConnectMdmDeviceType#default_iam_group_id}
  */
  readonly defaultIamGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#description ConnectMdmDeviceType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#device_group_id ConnectMdmDeviceType#device_group_id}
  */
  readonly deviceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#id ConnectMdmDeviceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#name ConnectMdmDeviceType#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type hsdp_connect_mdm_device_type}
*/
export class ConnectMdmDeviceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_device_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmDeviceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmDeviceType to import
  * @param importFromId The id of the existing ConnectMdmDeviceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmDeviceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_device_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_device_type hsdp_connect_mdm_device_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmDeviceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmDeviceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_device_type',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commercialTypeNumber = config.commercialTypeNumber;
    this._customTypeAttributes = config.customTypeAttributes;
    this._defaultIamGroupId = config.defaultIamGroupId;
    this._description = config.description;
    this._deviceGroupId = config.deviceGroupId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commercial_type_number - computed: false, optional: false, required: true
  private _commercialTypeNumber?: string; 
  public get commercialTypeNumber() {
    return this.getStringAttribute('commercial_type_number');
  }
  public set commercialTypeNumber(value: string) {
    this._commercialTypeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commercialTypeNumberInput() {
    return this._commercialTypeNumber;
  }

  // custom_type_attributes - computed: false, optional: true, required: false
  private _customTypeAttributes?: { [key: string]: string }; 
  public get customTypeAttributes() {
    return this.getStringMapAttribute('custom_type_attributes');
  }
  public set customTypeAttributes(value: { [key: string]: string }) {
    this._customTypeAttributes = value;
  }
  public resetCustomTypeAttributes() {
    this._customTypeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeAttributesInput() {
    return this._customTypeAttributes;
  }

  // default_iam_group_id - computed: false, optional: true, required: false
  private _defaultIamGroupId?: string; 
  public get defaultIamGroupId() {
    return this.getStringAttribute('default_iam_group_id');
  }
  public set defaultIamGroupId(value: string) {
    this._defaultIamGroupId = value;
  }
  public resetDefaultIamGroupId() {
    this._defaultIamGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIamGroupIdInput() {
    return this._defaultIamGroupId;
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

  // device_group_id - computed: false, optional: false, required: true
  private _deviceGroupId?: string; 
  public get deviceGroupId() {
    return this.getStringAttribute('device_group_id');
  }
  public set deviceGroupId(value: string) {
    this._deviceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupIdInput() {
    return this._deviceGroupId;
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
      commercial_type_number: cdktf.stringToTerraform(this._commercialTypeNumber),
      custom_type_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customTypeAttributes),
      default_iam_group_id: cdktf.stringToTerraform(this._defaultIamGroupId),
      description: cdktf.stringToTerraform(this._description),
      device_group_id: cdktf.stringToTerraform(this._deviceGroupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commercial_type_number: {
        value: cdktf.stringToHclTerraform(this._commercialTypeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_type_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customTypeAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_iam_group_id: {
        value: cdktf.stringToHclTerraform(this._defaultIamGroupId),
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
      device_group_id: {
        value: cdktf.stringToHclTerraform(this._deviceGroupId),
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
