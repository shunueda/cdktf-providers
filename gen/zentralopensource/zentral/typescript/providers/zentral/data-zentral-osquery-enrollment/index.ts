// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralOsqueryEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the Osquery enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_enrollment#id DataZentralOsqueryEnrollment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_enrollment zentral_osquery_enrollment}
*/
export class DataZentralOsqueryEnrollment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_enrollment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralOsqueryEnrollment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralOsqueryEnrollment to import
  * @param importFromId The id of the existing DataZentralOsqueryEnrollment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_enrollment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralOsqueryEnrollment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_enrollment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_enrollment zentral_osquery_enrollment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralOsqueryEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataZentralOsqueryEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_enrollment',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getNumberAttribute('configuration_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta_business_unit_id - computed: true, optional: false, required: false
  public get metaBusinessUnitId() {
    return this.getNumberAttribute('meta_business_unit_id');
  }

  // osquery_release - computed: true, optional: false, required: false
  public get osqueryRelease() {
    return this.getStringAttribute('osquery_release');
  }

  // package_url - computed: true, optional: false, required: false
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }

  // powershell_script_url - computed: true, optional: false, required: false
  public get powershellScriptUrl() {
    return this.getStringAttribute('powershell_script_url');
  }

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.getNumberAttribute('quota');
  }

  // script_url - computed: true, optional: false, required: false
  public get scriptUrl() {
    return this.getStringAttribute('script_url');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // serial_numbers - computed: true, optional: false, required: false
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }

  // udids - computed: true, optional: false, required: false
  public get udids() {
    return cdktf.Fn.tolist(this.getListAttribute('udids'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
