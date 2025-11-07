// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileSqlinjectionBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#alertonly AppfwprofileSqlinjectionBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#as_scan_location_sql AppfwprofileSqlinjectionBinding#as_scan_location_sql}
  */
  readonly asScanLocationSql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#as_value_expr_sql AppfwprofileSqlinjectionBinding#as_value_expr_sql}
  */
  readonly asValueExprSql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#as_value_type_sql AppfwprofileSqlinjectionBinding#as_value_type_sql}
  */
  readonly asValueTypeSql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#comment AppfwprofileSqlinjectionBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#formactionurl_sql AppfwprofileSqlinjectionBinding#formactionurl_sql}
  */
  readonly formactionurlSql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#id AppfwprofileSqlinjectionBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#isautodeployed AppfwprofileSqlinjectionBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#isregex_sql AppfwprofileSqlinjectionBinding#isregex_sql}
  */
  readonly isregexSql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#isvalueregex_sql AppfwprofileSqlinjectionBinding#isvalueregex_sql}
  */
  readonly isvalueregexSql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#name AppfwprofileSqlinjectionBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#resourceid AppfwprofileSqlinjectionBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#ruletype AppfwprofileSqlinjectionBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#sqlinjection AppfwprofileSqlinjectionBinding#sqlinjection}
  */
  readonly sqlinjection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#state AppfwprofileSqlinjectionBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding citrixadc_appfwprofile_sqlinjection_binding}
*/
export class AppfwprofileSqlinjectionBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_sqlinjection_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileSqlinjectionBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileSqlinjectionBinding to import
  * @param importFromId The id of the existing AppfwprofileSqlinjectionBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileSqlinjectionBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_sqlinjection_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_sqlinjection_binding citrixadc_appfwprofile_sqlinjection_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileSqlinjectionBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileSqlinjectionBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_sqlinjection_binding',
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
    this._asScanLocationSql = config.asScanLocationSql;
    this._asValueExprSql = config.asValueExprSql;
    this._asValueTypeSql = config.asValueTypeSql;
    this._comment = config.comment;
    this._formactionurlSql = config.formactionurlSql;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isregexSql = config.isregexSql;
    this._isvalueregexSql = config.isvalueregexSql;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._sqlinjection = config.sqlinjection;
    this._state = config.state;
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

  // as_scan_location_sql - computed: false, optional: false, required: true
  private _asScanLocationSql?: string; 
  public get asScanLocationSql() {
    return this.getStringAttribute('as_scan_location_sql');
  }
  public set asScanLocationSql(value: string) {
    this._asScanLocationSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asScanLocationSqlInput() {
    return this._asScanLocationSql;
  }

  // as_value_expr_sql - computed: true, optional: true, required: false
  private _asValueExprSql?: string; 
  public get asValueExprSql() {
    return this.getStringAttribute('as_value_expr_sql');
  }
  public set asValueExprSql(value: string) {
    this._asValueExprSql = value;
  }
  public resetAsValueExprSql() {
    this._asValueExprSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueExprSqlInput() {
    return this._asValueExprSql;
  }

  // as_value_type_sql - computed: true, optional: true, required: false
  private _asValueTypeSql?: string; 
  public get asValueTypeSql() {
    return this.getStringAttribute('as_value_type_sql');
  }
  public set asValueTypeSql(value: string) {
    this._asValueTypeSql = value;
  }
  public resetAsValueTypeSql() {
    this._asValueTypeSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueTypeSqlInput() {
    return this._asValueTypeSql;
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

  // formactionurl_sql - computed: false, optional: false, required: true
  private _formactionurlSql?: string; 
  public get formactionurlSql() {
    return this.getStringAttribute('formactionurl_sql');
  }
  public set formactionurlSql(value: string) {
    this._formactionurlSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formactionurlSqlInput() {
    return this._formactionurlSql;
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

  // isregex_sql - computed: true, optional: true, required: false
  private _isregexSql?: string; 
  public get isregexSql() {
    return this.getStringAttribute('isregex_sql');
  }
  public set isregexSql(value: string) {
    this._isregexSql = value;
  }
  public resetIsregexSql() {
    this._isregexSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexSqlInput() {
    return this._isregexSql;
  }

  // isvalueregex_sql - computed: true, optional: true, required: false
  private _isvalueregexSql?: string; 
  public get isvalueregexSql() {
    return this.getStringAttribute('isvalueregex_sql');
  }
  public set isvalueregexSql(value: string) {
    this._isvalueregexSql = value;
  }
  public resetIsvalueregexSql() {
    this._isvalueregexSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvalueregexSqlInput() {
    return this._isvalueregexSql;
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

  // sqlinjection - computed: false, optional: false, required: true
  private _sqlinjection?: string; 
  public get sqlinjection() {
    return this.getStringAttribute('sqlinjection');
  }
  public set sqlinjection(value: string) {
    this._sqlinjection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionInput() {
    return this._sqlinjection;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alertonly: cdktf.stringToTerraform(this._alertonly),
      as_scan_location_sql: cdktf.stringToTerraform(this._asScanLocationSql),
      as_value_expr_sql: cdktf.stringToTerraform(this._asValueExprSql),
      as_value_type_sql: cdktf.stringToTerraform(this._asValueTypeSql),
      comment: cdktf.stringToTerraform(this._comment),
      formactionurl_sql: cdktf.stringToTerraform(this._formactionurlSql),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isregex_sql: cdktf.stringToTerraform(this._isregexSql),
      isvalueregex_sql: cdktf.stringToTerraform(this._isvalueregexSql),
      name: cdktf.stringToTerraform(this._name),
      resourceid: cdktf.stringToTerraform(this._resourceid),
      ruletype: cdktf.stringToTerraform(this._ruletype),
      sqlinjection: cdktf.stringToTerraform(this._sqlinjection),
      state: cdktf.stringToTerraform(this._state),
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
      as_scan_location_sql: {
        value: cdktf.stringToHclTerraform(this._asScanLocationSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_expr_sql: {
        value: cdktf.stringToHclTerraform(this._asValueExprSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_type_sql: {
        value: cdktf.stringToHclTerraform(this._asValueTypeSql),
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
      formactionurl_sql: {
        value: cdktf.stringToHclTerraform(this._formactionurlSql),
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
      isregex_sql: {
        value: cdktf.stringToHclTerraform(this._isregexSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isvalueregex_sql: {
        value: cdktf.stringToHclTerraform(this._isvalueregexSql),
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
      sqlinjection: {
        value: cdktf.stringToHclTerraform(this._sqlinjection),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
