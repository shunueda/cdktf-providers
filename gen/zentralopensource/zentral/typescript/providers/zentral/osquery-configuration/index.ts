// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsqueryConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of the IDs of the ATCs to include in this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#atc_ids OsqueryConfiguration#atc_ids}
  */
  readonly atcIds?: number[];
  /**
  * Description of the Osquery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#description OsqueryConfiguration#description}
  */
  readonly description?: string;
  /**
  * List of the IDs of the file categories to include in this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#file_category_ids OsqueryConfiguration#file_category_ids}
  */
  readonly fileCategoryIds?: number[];
  /**
  * If `true`, Osquery is configured to collect inventory data. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#inventory OsqueryConfiguration#inventory}
  */
  readonly inventory?: boolean | cdktf.IResolvable;
  /**
  * If `true`, Osquery is configured to collect the applications. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#inventory_apps OsqueryConfiguration#inventory_apps}
  */
  readonly inventoryApps?: boolean | cdktf.IResolvable;
  /**
  * If `true`, Osquery is configured to collect the EC2 metadata. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#inventory_ec2 OsqueryConfiguration#inventory_ec2}
  */
  readonly inventoryEc2?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds to wait between collecting the inventory data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#inventory_interval OsqueryConfiguration#inventory_interval}
  */
  readonly inventoryInterval?: number;
  /**
  * Name of the Osquery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#name OsqueryConfiguration#name}
  */
  readonly name: string;
  /**
  * A map of extra options to pass to Osquery in the flag file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#options OsqueryConfiguration#options}
  */
  readonly options?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration zentral_osquery_configuration}
*/
export class OsqueryConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsqueryConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsqueryConfiguration to import
  * @param importFromId The id of the existing OsqueryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsqueryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/osquery_configuration zentral_osquery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsqueryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: OsqueryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_configuration',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._atcIds = config.atcIds;
    this._description = config.description;
    this._fileCategoryIds = config.fileCategoryIds;
    this._inventory = config.inventory;
    this._inventoryApps = config.inventoryApps;
    this._inventoryEc2 = config.inventoryEc2;
    this._inventoryInterval = config.inventoryInterval;
    this._name = config.name;
    this._options = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // atc_ids - computed: true, optional: true, required: false
  private _atcIds?: number[]; 
  public get atcIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('atc_ids')));
  }
  public set atcIds(value: number[]) {
    this._atcIds = value;
  }
  public resetAtcIds() {
    this._atcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcIdsInput() {
    return this._atcIds;
  }

  // description - computed: true, optional: true, required: false
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

  // file_category_ids - computed: true, optional: true, required: false
  private _fileCategoryIds?: number[]; 
  public get fileCategoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('file_category_ids')));
  }
  public set fileCategoryIds(value: number[]) {
    this._fileCategoryIds = value;
  }
  public resetFileCategoryIds() {
    this._fileCategoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCategoryIdsInput() {
    return this._fileCategoryIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inventory - computed: true, optional: true, required: false
  private _inventory?: boolean | cdktf.IResolvable; 
  public get inventory() {
    return this.getBooleanAttribute('inventory');
  }
  public set inventory(value: boolean | cdktf.IResolvable) {
    this._inventory = value;
  }
  public resetInventory() {
    this._inventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory;
  }

  // inventory_apps - computed: true, optional: true, required: false
  private _inventoryApps?: boolean | cdktf.IResolvable; 
  public get inventoryApps() {
    return this.getBooleanAttribute('inventory_apps');
  }
  public set inventoryApps(value: boolean | cdktf.IResolvable) {
    this._inventoryApps = value;
  }
  public resetInventoryApps() {
    this._inventoryApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryAppsInput() {
    return this._inventoryApps;
  }

  // inventory_ec2 - computed: true, optional: true, required: false
  private _inventoryEc2?: boolean | cdktf.IResolvable; 
  public get inventoryEc2() {
    return this.getBooleanAttribute('inventory_ec2');
  }
  public set inventoryEc2(value: boolean | cdktf.IResolvable) {
    this._inventoryEc2 = value;
  }
  public resetInventoryEc2() {
    this._inventoryEc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryEc2Input() {
    return this._inventoryEc2;
  }

  // inventory_interval - computed: true, optional: true, required: false
  private _inventoryInterval?: number; 
  public get inventoryInterval() {
    return this.getNumberAttribute('inventory_interval');
  }
  public set inventoryInterval(value: number) {
    this._inventoryInterval = value;
  }
  public resetInventoryInterval() {
    this._inventoryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIntervalInput() {
    return this._inventoryInterval;
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      atc_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._atcIds),
      description: cdktf.stringToTerraform(this._description),
      file_category_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._fileCategoryIds),
      inventory: cdktf.booleanToTerraform(this._inventory),
      inventory_apps: cdktf.booleanToTerraform(this._inventoryApps),
      inventory_ec2: cdktf.booleanToTerraform(this._inventoryEc2),
      inventory_interval: cdktf.numberToTerraform(this._inventoryInterval),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      atc_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._atcIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_category_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._fileCategoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      inventory: {
        value: cdktf.booleanToHclTerraform(this._inventory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inventory_apps: {
        value: cdktf.booleanToHclTerraform(this._inventoryApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inventory_ec2: {
        value: cdktf.booleanToHclTerraform(this._inventoryEc2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inventory_interval: {
        value: cdktf.numberToHclTerraform(this._inventoryInterval),
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
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
