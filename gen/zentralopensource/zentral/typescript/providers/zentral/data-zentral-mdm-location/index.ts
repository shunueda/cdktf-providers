// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the MDM location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location#id DataZentralMdmLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * MDM info `ID` (`UUID`) of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location#mdm_info_id DataZentralMdmLocation#mdm_info_id}
  */
  readonly mdmInfoId?: string;
  /**
  * Name of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location#name DataZentralMdmLocation#name}
  */
  readonly name?: string;
  /**
  * Name of the location organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location#organization_name DataZentralMdmLocation#organization_name}
  */
  readonly organizationName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location zentral_mdm_location}
*/
export class DataZentralMdmLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmLocation to import
  * @param importFromId The id of the existing DataZentralMdmLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/data-sources/mdm_location zentral_mdm_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_location',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
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
    this._mdmInfoId = config.mdmInfoId;
    this._name = config.name;
    this._organizationName = config.organizationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mdm_info_id - computed: false, optional: true, required: false
  private _mdmInfoId?: string; 
  public get mdmInfoId() {
    return this.getStringAttribute('mdm_info_id');
  }
  public set mdmInfoId(value: string) {
    this._mdmInfoId = value;
  }
  public resetMdmInfoId() {
    this._mdmInfoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmInfoIdInput() {
    return this._mdmInfoId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      mdm_info_id: cdktf.stringToTerraform(this._mdmInfoId),
      name: cdktf.stringToTerraform(this._name),
      organization_name: cdktf.stringToTerraform(this._organizationName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mdm_info_id: {
        value: cdktf.stringToHclTerraform(this._mdmInfoId),
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
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
