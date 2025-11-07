// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdResourceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#id DataVcdResourceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File where to store the import info - Only used with 'import' list mode 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#import_file_name DataVcdResourceList#import_file_name}
  */
  readonly importFileName?: string;
  /**
  * How the list should be built
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#list_mode DataVcdResourceList#list_mode}
  */
  readonly listMode?: string;
  /**
  * Unique name of the Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#name DataVcdResourceList#name}
  */
  readonly name: string;
  /**
  * Separator for name_id combination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#name_id_separator DataVcdResourceList#name_id_separator}
  */
  readonly nameIdSeparator?: string;
  /**
  * Optional regular expression filter on the resource names - Only the matching resources will be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#name_regex DataVcdResourceList#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#org DataVcdResourceList#org}
  */
  readonly org?: string;
  /**
  * The name of the parent to the resources being retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#parent DataVcdResourceList#parent}
  */
  readonly parent?: string;
  /**
  * Which resource we should list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#resource_type DataVcdResourceList#resource_type}
  */
  readonly resourceType: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#vdc DataVcdResourceList#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list vcd_resource_list}
*/
export class DataVcdResourceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_resource_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdResourceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdResourceList to import
  * @param importFromId The id of the existing DataVcdResourceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdResourceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_resource_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/resource_list vcd_resource_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdResourceListConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdResourceListConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_resource_list',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._importFileName = config.importFileName;
    this._listMode = config.listMode;
    this._name = config.name;
    this._nameIdSeparator = config.nameIdSeparator;
    this._nameRegex = config.nameRegex;
    this._org = config.org;
    this._parent = config.parent;
    this._resourceType = config.resourceType;
    this._vdc = config.vdc;
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

  // import_file_name - computed: false, optional: true, required: false
  private _importFileName?: string; 
  public get importFileName() {
    return this.getStringAttribute('import_file_name');
  }
  public set importFileName(value: string) {
    this._importFileName = value;
  }
  public resetImportFileName() {
    this._importFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFileNameInput() {
    return this._importFileName;
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getListAttribute('list');
  }

  // list_mode - computed: false, optional: true, required: false
  private _listMode?: string; 
  public get listMode() {
    return this.getStringAttribute('list_mode');
  }
  public set listMode(value: string) {
    this._listMode = value;
  }
  public resetListMode() {
    this._listMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listModeInput() {
    return this._listMode;
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

  // name_id_separator - computed: false, optional: true, required: false
  private _nameIdSeparator?: string; 
  public get nameIdSeparator() {
    return this.getStringAttribute('name_id_separator');
  }
  public set nameIdSeparator(value: string) {
    this._nameIdSeparator = value;
  }
  public resetNameIdSeparator() {
    this._nameIdSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdSeparatorInput() {
    return this._nameIdSeparator;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      import_file_name: cdktf.stringToTerraform(this._importFileName),
      list_mode: cdktf.stringToTerraform(this._listMode),
      name: cdktf.stringToTerraform(this._name),
      name_id_separator: cdktf.stringToTerraform(this._nameIdSeparator),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      org: cdktf.stringToTerraform(this._org),
      parent: cdktf.stringToTerraform(this._parent),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      vdc: cdktf.stringToTerraform(this._vdc),
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
      import_file_name: {
        value: cdktf.stringToHclTerraform(this._importFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_mode: {
        value: cdktf.stringToHclTerraform(this._listMode),
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
      name_id_separator: {
        value: cdktf.stringToHclTerraform(this._nameIdSeparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
