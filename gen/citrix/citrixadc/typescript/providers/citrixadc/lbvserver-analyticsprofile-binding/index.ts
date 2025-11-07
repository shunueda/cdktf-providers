// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbvserverAnalyticsprofileBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding#analyticsprofile LbvserverAnalyticsprofileBinding#analyticsprofile}
  */
  readonly analyticsprofile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding#id LbvserverAnalyticsprofileBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding#name LbvserverAnalyticsprofileBinding#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding citrixadc_lbvserver_analyticsprofile_binding}
*/
export class LbvserverAnalyticsprofileBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbvserver_analyticsprofile_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbvserverAnalyticsprofileBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbvserverAnalyticsprofileBinding to import
  * @param importFromId The id of the existing LbvserverAnalyticsprofileBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbvserverAnalyticsprofileBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbvserver_analyticsprofile_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver_analyticsprofile_binding citrixadc_lbvserver_analyticsprofile_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbvserverAnalyticsprofileBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LbvserverAnalyticsprofileBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbvserver_analyticsprofile_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsprofile = config.analyticsprofile;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyticsprofile - computed: false, optional: false, required: true
  private _analyticsprofile?: string; 
  public get analyticsprofile() {
    return this.getStringAttribute('analyticsprofile');
  }
  public set analyticsprofile(value: string) {
    this._analyticsprofile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsprofileInput() {
    return this._analyticsprofile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyticsprofile: cdktf.stringToTerraform(this._analyticsprofile),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyticsprofile: {
        value: cdktf.stringToHclTerraform(this._analyticsprofile),
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
