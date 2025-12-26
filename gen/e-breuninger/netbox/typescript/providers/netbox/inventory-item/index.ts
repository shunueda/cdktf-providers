// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#asset_tag InventoryItem#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * Required when `component_type` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#component_id InventoryItem#component_id}
  */
  readonly componentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#component_type InventoryItem#component_type}
  */
  readonly componentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#custom_fields InventoryItem#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#description InventoryItem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#device_id InventoryItem#device_id}
  */
  readonly deviceId: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#discovered InventoryItem#discovered}
  */
  readonly discovered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#id InventoryItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#label InventoryItem#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#manufacturer_id InventoryItem#manufacturer_id}
  */
  readonly manufacturerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#name InventoryItem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#parent_id InventoryItem#parent_id}
  */
  readonly parentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#part_id InventoryItem#part_id}
  */
  readonly partId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#role_id InventoryItem#role_id}
  */
  readonly roleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#serial InventoryItem#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#tags InventoryItem#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item netbox_inventory_item}
*/
export class InventoryItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_inventory_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InventoryItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InventoryItem to import
  * @param importFromId The id of the existing InventoryItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InventoryItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_inventory_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/inventory_item netbox_inventory_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryItemConfig
  */
  public constructor(scope: Construct, id: string, config: InventoryItemConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_inventory_item',
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
    this._assetTag = config.assetTag;
    this._componentId = config.componentId;
    this._componentType = config.componentType;
    this._customFields = config.customFields;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._discovered = config.discovered;
    this._id = config.id;
    this._label = config.label;
    this._manufacturerId = config.manufacturerId;
    this._name = config.name;
    this._parentId = config.parentId;
    this._partId = config.partId;
    this._roleId = config.roleId;
    this._serial = config.serial;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

  // component_id - computed: false, optional: true, required: false
  private _componentId?: number; 
  public get componentId() {
    return this.getNumberAttribute('component_id');
  }
  public set componentId(value: number) {
    this._componentId = value;
  }
  public resetComponentId() {
    this._componentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
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

  // discovered - computed: false, optional: true, required: false
  private _discovered?: boolean | cdktf.IResolvable; 
  public get discovered() {
    return this.getBooleanAttribute('discovered');
  }
  public set discovered(value: boolean | cdktf.IResolvable) {
    this._discovered = value;
  }
  public resetDiscovered() {
    this._discovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredInput() {
    return this._discovered;
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

  // manufacturer_id - computed: false, optional: true, required: false
  private _manufacturerId?: number; 
  public get manufacturerId() {
    return this.getNumberAttribute('manufacturer_id');
  }
  public set manufacturerId(value: number) {
    this._manufacturerId = value;
  }
  public resetManufacturerId() {
    this._manufacturerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerIdInput() {
    return this._manufacturerId;
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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // part_id - computed: false, optional: true, required: false
  private _partId?: string; 
  public get partId() {
    return this.getStringAttribute('part_id');
  }
  public set partId(value: string) {
    this._partId = value;
  }
  public resetPartId() {
    this._partId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partIdInput() {
    return this._partId;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_tag: cdktf.stringToTerraform(this._assetTag),
      component_id: cdktf.numberToTerraform(this._componentId),
      component_type: cdktf.stringToTerraform(this._componentType),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      discovered: cdktf.booleanToTerraform(this._discovered),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      manufacturer_id: cdktf.numberToTerraform(this._manufacturerId),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      part_id: cdktf.stringToTerraform(this._partId),
      role_id: cdktf.numberToTerraform(this._roleId),
      serial: cdktf.stringToTerraform(this._serial),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_tag: {
        value: cdktf.stringToHclTerraform(this._assetTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_id: {
        value: cdktf.numberToHclTerraform(this._componentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
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
      discovered: {
        value: cdktf.booleanToHclTerraform(this._discovered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      manufacturer_id: {
        value: cdktf.numberToHclTerraform(this._manufacturerId),
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
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      part_id: {
        value: cdktf.stringToHclTerraform(this._partId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
