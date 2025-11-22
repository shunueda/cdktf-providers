// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseInventoryEntityGroupConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#criticality CseInventoryEntityGroupConfiguration#criticality}
  */
  readonly criticality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#description CseInventoryEntityGroupConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#dynamic_tags CseInventoryEntityGroupConfiguration#dynamic_tags}
  */
  readonly dynamicTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#group CseInventoryEntityGroupConfiguration#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#id CseInventoryEntityGroupConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#inventory_key CseInventoryEntityGroupConfiguration#inventory_key}
  */
  readonly inventoryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#inventory_source CseInventoryEntityGroupConfiguration#inventory_source}
  */
  readonly inventorySource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#inventory_type CseInventoryEntityGroupConfiguration#inventory_type}
  */
  readonly inventoryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#inventory_value CseInventoryEntityGroupConfiguration#inventory_value}
  */
  readonly inventoryValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#name CseInventoryEntityGroupConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#suppressed CseInventoryEntityGroupConfiguration#suppressed}
  */
  readonly suppressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#tag_schema CseInventoryEntityGroupConfiguration#tag_schema}
  */
  readonly tagSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#tags CseInventoryEntityGroupConfiguration#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration sumologic_cse_inventory_entity_group_configuration}
*/
export class CseInventoryEntityGroupConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_inventory_entity_group_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseInventoryEntityGroupConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseInventoryEntityGroupConfiguration to import
  * @param importFromId The id of the existing CseInventoryEntityGroupConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseInventoryEntityGroupConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_inventory_entity_group_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_inventory_entity_group_configuration sumologic_cse_inventory_entity_group_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseInventoryEntityGroupConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CseInventoryEntityGroupConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_inventory_entity_group_configuration',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._criticality = config.criticality;
    this._description = config.description;
    this._dynamicTags = config.dynamicTags;
    this._group = config.group;
    this._id = config.id;
    this._inventoryKey = config.inventoryKey;
    this._inventorySource = config.inventorySource;
    this._inventoryType = config.inventoryType;
    this._inventoryValue = config.inventoryValue;
    this._name = config.name;
    this._suppressed = config.suppressed;
    this._tagSchema = config.tagSchema;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // criticality - computed: false, optional: true, required: false
  private _criticality?: string; 
  public get criticality() {
    return this.getStringAttribute('criticality');
  }
  public set criticality(value: string) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
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

  // dynamic_tags - computed: false, optional: true, required: false
  private _dynamicTags?: boolean | cdktf.IResolvable; 
  public get dynamicTags() {
    return this.getBooleanAttribute('dynamic_tags');
  }
  public set dynamicTags(value: boolean | cdktf.IResolvable) {
    this._dynamicTags = value;
  }
  public resetDynamicTags() {
    this._dynamicTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTagsInput() {
    return this._dynamicTags;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // inventory_key - computed: false, optional: true, required: false
  private _inventoryKey?: string; 
  public get inventoryKey() {
    return this.getStringAttribute('inventory_key');
  }
  public set inventoryKey(value: string) {
    this._inventoryKey = value;
  }
  public resetInventoryKey() {
    this._inventoryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryKeyInput() {
    return this._inventoryKey;
  }

  // inventory_source - computed: false, optional: false, required: true
  private _inventorySource?: string; 
  public get inventorySource() {
    return this.getStringAttribute('inventory_source');
  }
  public set inventorySource(value: string) {
    this._inventorySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventorySourceInput() {
    return this._inventorySource;
  }

  // inventory_type - computed: false, optional: false, required: true
  private _inventoryType?: string; 
  public get inventoryType() {
    return this.getStringAttribute('inventory_type');
  }
  public set inventoryType(value: string) {
    this._inventoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryTypeInput() {
    return this._inventoryType;
  }

  // inventory_value - computed: false, optional: true, required: false
  private _inventoryValue?: string; 
  public get inventoryValue() {
    return this.getStringAttribute('inventory_value');
  }
  public set inventoryValue(value: string) {
    this._inventoryValue = value;
  }
  public resetInventoryValue() {
    this._inventoryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryValueInput() {
    return this._inventoryValue;
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

  // suppressed - computed: false, optional: true, required: false
  private _suppressed?: boolean | cdktf.IResolvable; 
  public get suppressed() {
    return this.getBooleanAttribute('suppressed');
  }
  public set suppressed(value: boolean | cdktf.IResolvable) {
    this._suppressed = value;
  }
  public resetSuppressed() {
    this._suppressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedInput() {
    return this._suppressed;
  }

  // tag_schema - computed: false, optional: true, required: false
  private _tagSchema?: string; 
  public get tagSchema() {
    return this.getStringAttribute('tag_schema');
  }
  public set tagSchema(value: string) {
    this._tagSchema = value;
  }
  public resetTagSchema() {
    this._tagSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSchemaInput() {
    return this._tagSchema;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      criticality: cdktf.stringToTerraform(this._criticality),
      description: cdktf.stringToTerraform(this._description),
      dynamic_tags: cdktf.booleanToTerraform(this._dynamicTags),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      inventory_key: cdktf.stringToTerraform(this._inventoryKey),
      inventory_source: cdktf.stringToTerraform(this._inventorySource),
      inventory_type: cdktf.stringToTerraform(this._inventoryType),
      inventory_value: cdktf.stringToTerraform(this._inventoryValue),
      name: cdktf.stringToTerraform(this._name),
      suppressed: cdktf.booleanToTerraform(this._suppressed),
      tag_schema: cdktf.stringToTerraform(this._tagSchema),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      criticality: {
        value: cdktf.stringToHclTerraform(this._criticality),
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
      dynamic_tags: {
        value: cdktf.booleanToHclTerraform(this._dynamicTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      inventory_key: {
        value: cdktf.stringToHclTerraform(this._inventoryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_source: {
        value: cdktf.stringToHclTerraform(this._inventorySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_type: {
        value: cdktf.stringToHclTerraform(this._inventoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_value: {
        value: cdktf.stringToHclTerraform(this._inventoryValue),
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
      suppressed: {
        value: cdktf.booleanToHclTerraform(this._suppressed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_schema: {
        value: cdktf.stringToHclTerraform(this._tagSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
