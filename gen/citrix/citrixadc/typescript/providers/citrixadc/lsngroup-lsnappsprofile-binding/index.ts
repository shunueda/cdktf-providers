// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsngroupLsnappsprofileBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding#appsprofilename LsngroupLsnappsprofileBinding#appsprofilename}
  */
  readonly appsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding#groupname LsngroupLsnappsprofileBinding#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding#id LsngroupLsnappsprofileBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding citrixadc_lsngroup_lsnappsprofile_binding}
*/
export class LsngroupLsnappsprofileBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsngroup_lsnappsprofile_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LsngroupLsnappsprofileBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LsngroupLsnappsprofileBinding to import
  * @param importFromId The id of the existing LsngroupLsnappsprofileBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LsngroupLsnappsprofileBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsngroup_lsnappsprofile_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup_lsnappsprofile_binding citrixadc_lsngroup_lsnappsprofile_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsngroupLsnappsprofileBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LsngroupLsnappsprofileBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsngroup_lsnappsprofile_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appsprofilename = config.appsprofilename;
    this._groupname = config.groupname;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appsprofilename - computed: false, optional: true, required: false
  private _appsprofilename?: string; 
  public get appsprofilename() {
    return this.getStringAttribute('appsprofilename');
  }
  public set appsprofilename(value: string) {
    this._appsprofilename = value;
  }
  public resetAppsprofilename() {
    this._appsprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsprofilenameInput() {
    return this._appsprofilename;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appsprofilename: cdktf.stringToTerraform(this._appsprofilename),
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appsprofilename: {
        value: cdktf.stringToHclTerraform(this._appsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
