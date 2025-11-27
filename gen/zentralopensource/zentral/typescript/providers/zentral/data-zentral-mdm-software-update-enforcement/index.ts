// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmSoftwareUpdateEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the MDM software update enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement#id DataZentralMdmSoftwareUpdateEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the software update enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement#name DataZentralMdmSoftwareUpdateEnforcement#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement zentral_mdm_software_update_enforcement}
*/
export class DataZentralMdmSoftwareUpdateEnforcement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_software_update_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmSoftwareUpdateEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmSoftwareUpdateEnforcement to import
  * @param importFromId The id of the existing DataZentralMdmSoftwareUpdateEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmSoftwareUpdateEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_software_update_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_software_update_enforcement zentral_mdm_software_update_enforcement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmSoftwareUpdateEnforcementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmSoftwareUpdateEnforcementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_software_update_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_version - computed: true, optional: false, required: false
  public get buildVersion() {
    return this.getStringAttribute('build_version');
  }

  // delay_days - computed: true, optional: false, required: false
  public get delayDays() {
    return this.getNumberAttribute('delay_days');
  }

  // details_url - computed: true, optional: false, required: false
  public get detailsUrl() {
    return this.getStringAttribute('details_url');
  }

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

  // local_datetime - computed: true, optional: false, required: false
  public get localDatetime() {
    return this.getStringAttribute('local_datetime');
  }

  // local_time - computed: true, optional: false, required: false
  public get localTime() {
    return this.getStringAttribute('local_time');
  }

  // max_os_version - computed: true, optional: false, required: false
  public get maxOsVersion() {
    return this.getStringAttribute('max_os_version');
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

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // platforms - computed: true, optional: false, required: false
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
