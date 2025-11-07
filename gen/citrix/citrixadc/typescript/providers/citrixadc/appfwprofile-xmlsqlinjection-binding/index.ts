// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileXmlsqlinjectionBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#alertonly AppfwprofileXmlsqlinjectionBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#as_scan_location_xmlsql AppfwprofileXmlsqlinjectionBinding#as_scan_location_xmlsql}
  */
  readonly asScanLocationXmlsql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#comment AppfwprofileXmlsqlinjectionBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#id AppfwprofileXmlsqlinjectionBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#isautodeployed AppfwprofileXmlsqlinjectionBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#isregex_xmlsql AppfwprofileXmlsqlinjectionBinding#isregex_xmlsql}
  */
  readonly isregexXmlsql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#name AppfwprofileXmlsqlinjectionBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#resourceid AppfwprofileXmlsqlinjectionBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#ruletype AppfwprofileXmlsqlinjectionBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#state AppfwprofileXmlsqlinjectionBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#xmlsqlinjection AppfwprofileXmlsqlinjectionBinding#xmlsqlinjection}
  */
  readonly xmlsqlinjection: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding citrixadc_appfwprofile_xmlsqlinjection_binding}
*/
export class AppfwprofileXmlsqlinjectionBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_xmlsqlinjection_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileXmlsqlinjectionBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileXmlsqlinjectionBinding to import
  * @param importFromId The id of the existing AppfwprofileXmlsqlinjectionBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileXmlsqlinjectionBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_xmlsqlinjection_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlsqlinjection_binding citrixadc_appfwprofile_xmlsqlinjection_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileXmlsqlinjectionBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileXmlsqlinjectionBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_xmlsqlinjection_binding',
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
    this._alertonly = config.alertonly;
    this._asScanLocationXmlsql = config.asScanLocationXmlsql;
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isregexXmlsql = config.isregexXmlsql;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._state = config.state;
    this._xmlsqlinjection = config.xmlsqlinjection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alertonly - computed: true, optional: true, required: false
  private _alertonly?: string; 
  public get alertonly() {
    return this.getStringAttribute('alertonly');
  }
  public set alertonly(value: string) {
    this._alertonly = value;
  }
  public resetAlertonly() {
    this._alertonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertonlyInput() {
    return this._alertonly;
  }

  // as_scan_location_xmlsql - computed: false, optional: true, required: false
  private _asScanLocationXmlsql?: string; 
  public get asScanLocationXmlsql() {
    return this.getStringAttribute('as_scan_location_xmlsql');
  }
  public set asScanLocationXmlsql(value: string) {
    this._asScanLocationXmlsql = value;
  }
  public resetAsScanLocationXmlsql() {
    this._asScanLocationXmlsql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asScanLocationXmlsqlInput() {
    return this._asScanLocationXmlsql;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // isautodeployed - computed: true, optional: true, required: false
  private _isautodeployed?: string; 
  public get isautodeployed() {
    return this.getStringAttribute('isautodeployed');
  }
  public set isautodeployed(value: string) {
    this._isautodeployed = value;
  }
  public resetIsautodeployed() {
    this._isautodeployed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isautodeployedInput() {
    return this._isautodeployed;
  }

  // isregex_xmlsql - computed: true, optional: true, required: false
  private _isregexXmlsql?: string; 
  public get isregexXmlsql() {
    return this.getStringAttribute('isregex_xmlsql');
  }
  public set isregexXmlsql(value: string) {
    this._isregexXmlsql = value;
  }
  public resetIsregexXmlsql() {
    this._isregexXmlsql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexXmlsqlInput() {
    return this._isregexXmlsql;
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

  // resourceid - computed: true, optional: true, required: false
  private _resourceid?: string; 
  public get resourceid() {
    return this.getStringAttribute('resourceid');
  }
  public set resourceid(value: string) {
    this._resourceid = value;
  }
  public resetResourceid() {
    this._resourceid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceidInput() {
    return this._resourceid;
  }

  // ruletype - computed: true, optional: true, required: false
  private _ruletype?: string; 
  public get ruletype() {
    return this.getStringAttribute('ruletype');
  }
  public set ruletype(value: string) {
    this._ruletype = value;
  }
  public resetRuletype() {
    this._ruletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruletypeInput() {
    return this._ruletype;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // xmlsqlinjection - computed: false, optional: false, required: true
  private _xmlsqlinjection?: string; 
  public get xmlsqlinjection() {
    return this.getStringAttribute('xmlsqlinjection');
  }
  public set xmlsqlinjection(value: string) {
    this._xmlsqlinjection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsqlinjectionInput() {
    return this._xmlsqlinjection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alertonly: cdktf.stringToTerraform(this._alertonly),
      as_scan_location_xmlsql: cdktf.stringToTerraform(this._asScanLocationXmlsql),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isregex_xmlsql: cdktf.stringToTerraform(this._isregexXmlsql),
      name: cdktf.stringToTerraform(this._name),
      resourceid: cdktf.stringToTerraform(this._resourceid),
      ruletype: cdktf.stringToTerraform(this._ruletype),
      state: cdktf.stringToTerraform(this._state),
      xmlsqlinjection: cdktf.stringToTerraform(this._xmlsqlinjection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alertonly: {
        value: cdktf.stringToHclTerraform(this._alertonly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_scan_location_xmlsql: {
        value: cdktf.stringToHclTerraform(this._asScanLocationXmlsql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      isautodeployed: {
        value: cdktf.stringToHclTerraform(this._isautodeployed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isregex_xmlsql: {
        value: cdktf.stringToHclTerraform(this._isregexXmlsql),
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
      resourceid: {
        value: cdktf.stringToHclTerraform(this._resourceid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruletype: {
        value: cdktf.stringToHclTerraform(this._ruletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlsqlinjection: {
        value: cdktf.stringToHclTerraform(this._xmlsqlinjection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
