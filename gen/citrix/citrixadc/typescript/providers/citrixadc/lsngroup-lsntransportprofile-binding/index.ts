// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsngroupLsntransportprofileBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding#groupname LsngroupLsntransportprofileBinding#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding#id LsngroupLsntransportprofileBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding#transportprofilename LsngroupLsntransportprofileBinding#transportprofilename}
  */
  readonly transportprofilename: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding citrixadc_lsngroup_lsntransportprofile_binding}
*/
export class LsngroupLsntransportprofileBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsngroup_lsntransportprofile_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LsngroupLsntransportprofileBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LsngroupLsntransportprofileBinding to import
  * @param importFromId The id of the existing LsngroupLsntransportprofileBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LsngroupLsntransportprofileBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsngroup_lsntransportprofile_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsngroup_lsntransportprofile_binding citrixadc_lsngroup_lsntransportprofile_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsngroupLsntransportprofileBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LsngroupLsntransportprofileBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsngroup_lsntransportprofile_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupname = config.groupname;
    this._id = config.id;
    this._transportprofilename = config.transportprofilename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // transportprofilename - computed: false, optional: false, required: true
  private _transportprofilename?: string; 
  public get transportprofilename() {
    return this.getStringAttribute('transportprofilename');
  }
  public set transportprofilename(value: string) {
    this._transportprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportprofilenameInput() {
    return this._transportprofilename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      transportprofilename: cdktf.stringToTerraform(this._transportprofilename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      transportprofilename: {
        value: cdktf.stringToHclTerraform(this._transportprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
