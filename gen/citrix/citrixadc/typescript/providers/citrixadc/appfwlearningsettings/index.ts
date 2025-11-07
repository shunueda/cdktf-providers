// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwlearningsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#contenttypeautodeploygraceperiod Appfwlearningsettings#contenttypeautodeploygraceperiod}
  */
  readonly contenttypeautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#contenttypeminthreshold Appfwlearningsettings#contenttypeminthreshold}
  */
  readonly contenttypeminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#contenttypepercentthreshold Appfwlearningsettings#contenttypepercentthreshold}
  */
  readonly contenttypepercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#cookieconsistencyautodeploygraceperiod Appfwlearningsettings#cookieconsistencyautodeploygraceperiod}
  */
  readonly cookieconsistencyautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#cookieconsistencyminthreshold Appfwlearningsettings#cookieconsistencyminthreshold}
  */
  readonly cookieconsistencyminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#cookieconsistencypercentthreshold Appfwlearningsettings#cookieconsistencypercentthreshold}
  */
  readonly cookieconsistencypercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#creditcardnumberminthreshold Appfwlearningsettings#creditcardnumberminthreshold}
  */
  readonly creditcardnumberminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#creditcardnumberpercentthreshold Appfwlearningsettings#creditcardnumberpercentthreshold}
  */
  readonly creditcardnumberpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#crosssitescriptingautodeploygraceperiod Appfwlearningsettings#crosssitescriptingautodeploygraceperiod}
  */
  readonly crosssitescriptingautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#crosssitescriptingminthreshold Appfwlearningsettings#crosssitescriptingminthreshold}
  */
  readonly crosssitescriptingminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#crosssitescriptingpercentthreshold Appfwlearningsettings#crosssitescriptingpercentthreshold}
  */
  readonly crosssitescriptingpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#csrftagautodeploygraceperiod Appfwlearningsettings#csrftagautodeploygraceperiod}
  */
  readonly csrftagautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#csrftagminthreshold Appfwlearningsettings#csrftagminthreshold}
  */
  readonly csrftagminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#csrftagpercentthreshold Appfwlearningsettings#csrftagpercentthreshold}
  */
  readonly csrftagpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldconsistencyautodeploygraceperiod Appfwlearningsettings#fieldconsistencyautodeploygraceperiod}
  */
  readonly fieldconsistencyautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldconsistencyminthreshold Appfwlearningsettings#fieldconsistencyminthreshold}
  */
  readonly fieldconsistencyminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldconsistencypercentthreshold Appfwlearningsettings#fieldconsistencypercentthreshold}
  */
  readonly fieldconsistencypercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldformatautodeploygraceperiod Appfwlearningsettings#fieldformatautodeploygraceperiod}
  */
  readonly fieldformatautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldformatminthreshold Appfwlearningsettings#fieldformatminthreshold}
  */
  readonly fieldformatminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#fieldformatpercentthreshold Appfwlearningsettings#fieldformatpercentthreshold}
  */
  readonly fieldformatpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#id Appfwlearningsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#profilename Appfwlearningsettings#profilename}
  */
  readonly profilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#sqlinjectionautodeploygraceperiod Appfwlearningsettings#sqlinjectionautodeploygraceperiod}
  */
  readonly sqlinjectionautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#sqlinjectionminthreshold Appfwlearningsettings#sqlinjectionminthreshold}
  */
  readonly sqlinjectionminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#sqlinjectionpercentthreshold Appfwlearningsettings#sqlinjectionpercentthreshold}
  */
  readonly sqlinjectionpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#starturlautodeploygraceperiod Appfwlearningsettings#starturlautodeploygraceperiod}
  */
  readonly starturlautodeploygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#starturlminthreshold Appfwlearningsettings#starturlminthreshold}
  */
  readonly starturlminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#starturlpercentthreshold Appfwlearningsettings#starturlpercentthreshold}
  */
  readonly starturlpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#xmlattachmentminthreshold Appfwlearningsettings#xmlattachmentminthreshold}
  */
  readonly xmlattachmentminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#xmlattachmentpercentthreshold Appfwlearningsettings#xmlattachmentpercentthreshold}
  */
  readonly xmlattachmentpercentthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#xmlwsiminthreshold Appfwlearningsettings#xmlwsiminthreshold}
  */
  readonly xmlwsiminthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#xmlwsipercentthreshold Appfwlearningsettings#xmlwsipercentthreshold}
  */
  readonly xmlwsipercentthreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings citrixadc_appfwlearningsettings}
*/
export class Appfwlearningsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwlearningsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwlearningsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwlearningsettings to import
  * @param importFromId The id of the existing Appfwlearningsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwlearningsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwlearningsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwlearningsettings citrixadc_appfwlearningsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwlearningsettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwlearningsettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwlearningsettings',
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
    this._contenttypeautodeploygraceperiod = config.contenttypeautodeploygraceperiod;
    this._contenttypeminthreshold = config.contenttypeminthreshold;
    this._contenttypepercentthreshold = config.contenttypepercentthreshold;
    this._cookieconsistencyautodeploygraceperiod = config.cookieconsistencyautodeploygraceperiod;
    this._cookieconsistencyminthreshold = config.cookieconsistencyminthreshold;
    this._cookieconsistencypercentthreshold = config.cookieconsistencypercentthreshold;
    this._creditcardnumberminthreshold = config.creditcardnumberminthreshold;
    this._creditcardnumberpercentthreshold = config.creditcardnumberpercentthreshold;
    this._crosssitescriptingautodeploygraceperiod = config.crosssitescriptingautodeploygraceperiod;
    this._crosssitescriptingminthreshold = config.crosssitescriptingminthreshold;
    this._crosssitescriptingpercentthreshold = config.crosssitescriptingpercentthreshold;
    this._csrftagautodeploygraceperiod = config.csrftagautodeploygraceperiod;
    this._csrftagminthreshold = config.csrftagminthreshold;
    this._csrftagpercentthreshold = config.csrftagpercentthreshold;
    this._fieldconsistencyautodeploygraceperiod = config.fieldconsistencyautodeploygraceperiod;
    this._fieldconsistencyminthreshold = config.fieldconsistencyminthreshold;
    this._fieldconsistencypercentthreshold = config.fieldconsistencypercentthreshold;
    this._fieldformatautodeploygraceperiod = config.fieldformatautodeploygraceperiod;
    this._fieldformatminthreshold = config.fieldformatminthreshold;
    this._fieldformatpercentthreshold = config.fieldformatpercentthreshold;
    this._id = config.id;
    this._profilename = config.profilename;
    this._sqlinjectionautodeploygraceperiod = config.sqlinjectionautodeploygraceperiod;
    this._sqlinjectionminthreshold = config.sqlinjectionminthreshold;
    this._sqlinjectionpercentthreshold = config.sqlinjectionpercentthreshold;
    this._starturlautodeploygraceperiod = config.starturlautodeploygraceperiod;
    this._starturlminthreshold = config.starturlminthreshold;
    this._starturlpercentthreshold = config.starturlpercentthreshold;
    this._xmlattachmentminthreshold = config.xmlattachmentminthreshold;
    this._xmlattachmentpercentthreshold = config.xmlattachmentpercentthreshold;
    this._xmlwsiminthreshold = config.xmlwsiminthreshold;
    this._xmlwsipercentthreshold = config.xmlwsipercentthreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contenttypeautodeploygraceperiod - computed: true, optional: true, required: false
  private _contenttypeautodeploygraceperiod?: number; 
  public get contenttypeautodeploygraceperiod() {
    return this.getNumberAttribute('contenttypeautodeploygraceperiod');
  }
  public set contenttypeautodeploygraceperiod(value: number) {
    this._contenttypeautodeploygraceperiod = value;
  }
  public resetContenttypeautodeploygraceperiod() {
    this._contenttypeautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contenttypeautodeploygraceperiodInput() {
    return this._contenttypeautodeploygraceperiod;
  }

  // contenttypeminthreshold - computed: true, optional: true, required: false
  private _contenttypeminthreshold?: number; 
  public get contenttypeminthreshold() {
    return this.getNumberAttribute('contenttypeminthreshold');
  }
  public set contenttypeminthreshold(value: number) {
    this._contenttypeminthreshold = value;
  }
  public resetContenttypeminthreshold() {
    this._contenttypeminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contenttypeminthresholdInput() {
    return this._contenttypeminthreshold;
  }

  // contenttypepercentthreshold - computed: true, optional: true, required: false
  private _contenttypepercentthreshold?: number; 
  public get contenttypepercentthreshold() {
    return this.getNumberAttribute('contenttypepercentthreshold');
  }
  public set contenttypepercentthreshold(value: number) {
    this._contenttypepercentthreshold = value;
  }
  public resetContenttypepercentthreshold() {
    this._contenttypepercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contenttypepercentthresholdInput() {
    return this._contenttypepercentthreshold;
  }

  // cookieconsistencyautodeploygraceperiod - computed: true, optional: true, required: false
  private _cookieconsistencyautodeploygraceperiod?: number; 
  public get cookieconsistencyautodeploygraceperiod() {
    return this.getNumberAttribute('cookieconsistencyautodeploygraceperiod');
  }
  public set cookieconsistencyautodeploygraceperiod(value: number) {
    this._cookieconsistencyautodeploygraceperiod = value;
  }
  public resetCookieconsistencyautodeploygraceperiod() {
    this._cookieconsistencyautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieconsistencyautodeploygraceperiodInput() {
    return this._cookieconsistencyautodeploygraceperiod;
  }

  // cookieconsistencyminthreshold - computed: true, optional: true, required: false
  private _cookieconsistencyminthreshold?: number; 
  public get cookieconsistencyminthreshold() {
    return this.getNumberAttribute('cookieconsistencyminthreshold');
  }
  public set cookieconsistencyminthreshold(value: number) {
    this._cookieconsistencyminthreshold = value;
  }
  public resetCookieconsistencyminthreshold() {
    this._cookieconsistencyminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieconsistencyminthresholdInput() {
    return this._cookieconsistencyminthreshold;
  }

  // cookieconsistencypercentthreshold - computed: true, optional: true, required: false
  private _cookieconsistencypercentthreshold?: number; 
  public get cookieconsistencypercentthreshold() {
    return this.getNumberAttribute('cookieconsistencypercentthreshold');
  }
  public set cookieconsistencypercentthreshold(value: number) {
    this._cookieconsistencypercentthreshold = value;
  }
  public resetCookieconsistencypercentthreshold() {
    this._cookieconsistencypercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieconsistencypercentthresholdInput() {
    return this._cookieconsistencypercentthreshold;
  }

  // creditcardnumberminthreshold - computed: true, optional: true, required: false
  private _creditcardnumberminthreshold?: number; 
  public get creditcardnumberminthreshold() {
    return this.getNumberAttribute('creditcardnumberminthreshold');
  }
  public set creditcardnumberminthreshold(value: number) {
    this._creditcardnumberminthreshold = value;
  }
  public resetCreditcardnumberminthreshold() {
    this._creditcardnumberminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardnumberminthresholdInput() {
    return this._creditcardnumberminthreshold;
  }

  // creditcardnumberpercentthreshold - computed: true, optional: true, required: false
  private _creditcardnumberpercentthreshold?: number; 
  public get creditcardnumberpercentthreshold() {
    return this.getNumberAttribute('creditcardnumberpercentthreshold');
  }
  public set creditcardnumberpercentthreshold(value: number) {
    this._creditcardnumberpercentthreshold = value;
  }
  public resetCreditcardnumberpercentthreshold() {
    this._creditcardnumberpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditcardnumberpercentthresholdInput() {
    return this._creditcardnumberpercentthreshold;
  }

  // crosssitescriptingautodeploygraceperiod - computed: true, optional: true, required: false
  private _crosssitescriptingautodeploygraceperiod?: number; 
  public get crosssitescriptingautodeploygraceperiod() {
    return this.getNumberAttribute('crosssitescriptingautodeploygraceperiod');
  }
  public set crosssitescriptingautodeploygraceperiod(value: number) {
    this._crosssitescriptingautodeploygraceperiod = value;
  }
  public resetCrosssitescriptingautodeploygraceperiod() {
    this._crosssitescriptingautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingautodeploygraceperiodInput() {
    return this._crosssitescriptingautodeploygraceperiod;
  }

  // crosssitescriptingminthreshold - computed: true, optional: true, required: false
  private _crosssitescriptingminthreshold?: number; 
  public get crosssitescriptingminthreshold() {
    return this.getNumberAttribute('crosssitescriptingminthreshold');
  }
  public set crosssitescriptingminthreshold(value: number) {
    this._crosssitescriptingminthreshold = value;
  }
  public resetCrosssitescriptingminthreshold() {
    this._crosssitescriptingminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingminthresholdInput() {
    return this._crosssitescriptingminthreshold;
  }

  // crosssitescriptingpercentthreshold - computed: true, optional: true, required: false
  private _crosssitescriptingpercentthreshold?: number; 
  public get crosssitescriptingpercentthreshold() {
    return this.getNumberAttribute('crosssitescriptingpercentthreshold');
  }
  public set crosssitescriptingpercentthreshold(value: number) {
    this._crosssitescriptingpercentthreshold = value;
  }
  public resetCrosssitescriptingpercentthreshold() {
    this._crosssitescriptingpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingpercentthresholdInput() {
    return this._crosssitescriptingpercentthreshold;
  }

  // csrftagautodeploygraceperiod - computed: true, optional: true, required: false
  private _csrftagautodeploygraceperiod?: number; 
  public get csrftagautodeploygraceperiod() {
    return this.getNumberAttribute('csrftagautodeploygraceperiod');
  }
  public set csrftagautodeploygraceperiod(value: number) {
    this._csrftagautodeploygraceperiod = value;
  }
  public resetCsrftagautodeploygraceperiod() {
    this._csrftagautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrftagautodeploygraceperiodInput() {
    return this._csrftagautodeploygraceperiod;
  }

  // csrftagminthreshold - computed: true, optional: true, required: false
  private _csrftagminthreshold?: number; 
  public get csrftagminthreshold() {
    return this.getNumberAttribute('csrftagminthreshold');
  }
  public set csrftagminthreshold(value: number) {
    this._csrftagminthreshold = value;
  }
  public resetCsrftagminthreshold() {
    this._csrftagminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrftagminthresholdInput() {
    return this._csrftagminthreshold;
  }

  // csrftagpercentthreshold - computed: true, optional: true, required: false
  private _csrftagpercentthreshold?: number; 
  public get csrftagpercentthreshold() {
    return this.getNumberAttribute('csrftagpercentthreshold');
  }
  public set csrftagpercentthreshold(value: number) {
    this._csrftagpercentthreshold = value;
  }
  public resetCsrftagpercentthreshold() {
    this._csrftagpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrftagpercentthresholdInput() {
    return this._csrftagpercentthreshold;
  }

  // fieldconsistencyautodeploygraceperiod - computed: true, optional: true, required: false
  private _fieldconsistencyautodeploygraceperiod?: number; 
  public get fieldconsistencyautodeploygraceperiod() {
    return this.getNumberAttribute('fieldconsistencyautodeploygraceperiod');
  }
  public set fieldconsistencyautodeploygraceperiod(value: number) {
    this._fieldconsistencyautodeploygraceperiod = value;
  }
  public resetFieldconsistencyautodeploygraceperiod() {
    this._fieldconsistencyautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldconsistencyautodeploygraceperiodInput() {
    return this._fieldconsistencyautodeploygraceperiod;
  }

  // fieldconsistencyminthreshold - computed: true, optional: true, required: false
  private _fieldconsistencyminthreshold?: number; 
  public get fieldconsistencyminthreshold() {
    return this.getNumberAttribute('fieldconsistencyminthreshold');
  }
  public set fieldconsistencyminthreshold(value: number) {
    this._fieldconsistencyminthreshold = value;
  }
  public resetFieldconsistencyminthreshold() {
    this._fieldconsistencyminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldconsistencyminthresholdInput() {
    return this._fieldconsistencyminthreshold;
  }

  // fieldconsistencypercentthreshold - computed: true, optional: true, required: false
  private _fieldconsistencypercentthreshold?: number; 
  public get fieldconsistencypercentthreshold() {
    return this.getNumberAttribute('fieldconsistencypercentthreshold');
  }
  public set fieldconsistencypercentthreshold(value: number) {
    this._fieldconsistencypercentthreshold = value;
  }
  public resetFieldconsistencypercentthreshold() {
    this._fieldconsistencypercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldconsistencypercentthresholdInput() {
    return this._fieldconsistencypercentthreshold;
  }

  // fieldformatautodeploygraceperiod - computed: true, optional: true, required: false
  private _fieldformatautodeploygraceperiod?: number; 
  public get fieldformatautodeploygraceperiod() {
    return this.getNumberAttribute('fieldformatautodeploygraceperiod');
  }
  public set fieldformatautodeploygraceperiod(value: number) {
    this._fieldformatautodeploygraceperiod = value;
  }
  public resetFieldformatautodeploygraceperiod() {
    this._fieldformatautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatautodeploygraceperiodInput() {
    return this._fieldformatautodeploygraceperiod;
  }

  // fieldformatminthreshold - computed: true, optional: true, required: false
  private _fieldformatminthreshold?: number; 
  public get fieldformatminthreshold() {
    return this.getNumberAttribute('fieldformatminthreshold');
  }
  public set fieldformatminthreshold(value: number) {
    this._fieldformatminthreshold = value;
  }
  public resetFieldformatminthreshold() {
    this._fieldformatminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatminthresholdInput() {
    return this._fieldformatminthreshold;
  }

  // fieldformatpercentthreshold - computed: true, optional: true, required: false
  private _fieldformatpercentthreshold?: number; 
  public get fieldformatpercentthreshold() {
    return this.getNumberAttribute('fieldformatpercentthreshold');
  }
  public set fieldformatpercentthreshold(value: number) {
    this._fieldformatpercentthreshold = value;
  }
  public resetFieldformatpercentthreshold() {
    this._fieldformatpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatpercentthresholdInput() {
    return this._fieldformatpercentthreshold;
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

  // profilename - computed: false, optional: false, required: true
  private _profilename?: string; 
  public get profilename() {
    return this.getStringAttribute('profilename');
  }
  public set profilename(value: string) {
    this._profilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilenameInput() {
    return this._profilename;
  }

  // sqlinjectionautodeploygraceperiod - computed: true, optional: true, required: false
  private _sqlinjectionautodeploygraceperiod?: number; 
  public get sqlinjectionautodeploygraceperiod() {
    return this.getNumberAttribute('sqlinjectionautodeploygraceperiod');
  }
  public set sqlinjectionautodeploygraceperiod(value: number) {
    this._sqlinjectionautodeploygraceperiod = value;
  }
  public resetSqlinjectionautodeploygraceperiod() {
    this._sqlinjectionautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionautodeploygraceperiodInput() {
    return this._sqlinjectionautodeploygraceperiod;
  }

  // sqlinjectionminthreshold - computed: true, optional: true, required: false
  private _sqlinjectionminthreshold?: number; 
  public get sqlinjectionminthreshold() {
    return this.getNumberAttribute('sqlinjectionminthreshold');
  }
  public set sqlinjectionminthreshold(value: number) {
    this._sqlinjectionminthreshold = value;
  }
  public resetSqlinjectionminthreshold() {
    this._sqlinjectionminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionminthresholdInput() {
    return this._sqlinjectionminthreshold;
  }

  // sqlinjectionpercentthreshold - computed: true, optional: true, required: false
  private _sqlinjectionpercentthreshold?: number; 
  public get sqlinjectionpercentthreshold() {
    return this.getNumberAttribute('sqlinjectionpercentthreshold');
  }
  public set sqlinjectionpercentthreshold(value: number) {
    this._sqlinjectionpercentthreshold = value;
  }
  public resetSqlinjectionpercentthreshold() {
    this._sqlinjectionpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlinjectionpercentthresholdInput() {
    return this._sqlinjectionpercentthreshold;
  }

  // starturlautodeploygraceperiod - computed: true, optional: true, required: false
  private _starturlautodeploygraceperiod?: number; 
  public get starturlautodeploygraceperiod() {
    return this.getNumberAttribute('starturlautodeploygraceperiod');
  }
  public set starturlautodeploygraceperiod(value: number) {
    this._starturlautodeploygraceperiod = value;
  }
  public resetStarturlautodeploygraceperiod() {
    this._starturlautodeploygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starturlautodeploygraceperiodInput() {
    return this._starturlautodeploygraceperiod;
  }

  // starturlminthreshold - computed: true, optional: true, required: false
  private _starturlminthreshold?: number; 
  public get starturlminthreshold() {
    return this.getNumberAttribute('starturlminthreshold');
  }
  public set starturlminthreshold(value: number) {
    this._starturlminthreshold = value;
  }
  public resetStarturlminthreshold() {
    this._starturlminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starturlminthresholdInput() {
    return this._starturlminthreshold;
  }

  // starturlpercentthreshold - computed: true, optional: true, required: false
  private _starturlpercentthreshold?: number; 
  public get starturlpercentthreshold() {
    return this.getNumberAttribute('starturlpercentthreshold');
  }
  public set starturlpercentthreshold(value: number) {
    this._starturlpercentthreshold = value;
  }
  public resetStarturlpercentthreshold() {
    this._starturlpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starturlpercentthresholdInput() {
    return this._starturlpercentthreshold;
  }

  // xmlattachmentminthreshold - computed: true, optional: true, required: false
  private _xmlattachmentminthreshold?: number; 
  public get xmlattachmentminthreshold() {
    return this.getNumberAttribute('xmlattachmentminthreshold');
  }
  public set xmlattachmentminthreshold(value: number) {
    this._xmlattachmentminthreshold = value;
  }
  public resetXmlattachmentminthreshold() {
    this._xmlattachmentminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmentminthresholdInput() {
    return this._xmlattachmentminthreshold;
  }

  // xmlattachmentpercentthreshold - computed: true, optional: true, required: false
  private _xmlattachmentpercentthreshold?: number; 
  public get xmlattachmentpercentthreshold() {
    return this.getNumberAttribute('xmlattachmentpercentthreshold');
  }
  public set xmlattachmentpercentthreshold(value: number) {
    this._xmlattachmentpercentthreshold = value;
  }
  public resetXmlattachmentpercentthreshold() {
    this._xmlattachmentpercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmentpercentthresholdInput() {
    return this._xmlattachmentpercentthreshold;
  }

  // xmlwsiminthreshold - computed: true, optional: true, required: false
  private _xmlwsiminthreshold?: number; 
  public get xmlwsiminthreshold() {
    return this.getNumberAttribute('xmlwsiminthreshold');
  }
  public set xmlwsiminthreshold(value: number) {
    this._xmlwsiminthreshold = value;
  }
  public resetXmlwsiminthreshold() {
    this._xmlwsiminthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlwsiminthresholdInput() {
    return this._xmlwsiminthreshold;
  }

  // xmlwsipercentthreshold - computed: true, optional: true, required: false
  private _xmlwsipercentthreshold?: number; 
  public get xmlwsipercentthreshold() {
    return this.getNumberAttribute('xmlwsipercentthreshold');
  }
  public set xmlwsipercentthreshold(value: number) {
    this._xmlwsipercentthreshold = value;
  }
  public resetXmlwsipercentthreshold() {
    this._xmlwsipercentthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlwsipercentthresholdInput() {
    return this._xmlwsipercentthreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contenttypeautodeploygraceperiod: cdktf.numberToTerraform(this._contenttypeautodeploygraceperiod),
      contenttypeminthreshold: cdktf.numberToTerraform(this._contenttypeminthreshold),
      contenttypepercentthreshold: cdktf.numberToTerraform(this._contenttypepercentthreshold),
      cookieconsistencyautodeploygraceperiod: cdktf.numberToTerraform(this._cookieconsistencyautodeploygraceperiod),
      cookieconsistencyminthreshold: cdktf.numberToTerraform(this._cookieconsistencyminthreshold),
      cookieconsistencypercentthreshold: cdktf.numberToTerraform(this._cookieconsistencypercentthreshold),
      creditcardnumberminthreshold: cdktf.numberToTerraform(this._creditcardnumberminthreshold),
      creditcardnumberpercentthreshold: cdktf.numberToTerraform(this._creditcardnumberpercentthreshold),
      crosssitescriptingautodeploygraceperiod: cdktf.numberToTerraform(this._crosssitescriptingautodeploygraceperiod),
      crosssitescriptingminthreshold: cdktf.numberToTerraform(this._crosssitescriptingminthreshold),
      crosssitescriptingpercentthreshold: cdktf.numberToTerraform(this._crosssitescriptingpercentthreshold),
      csrftagautodeploygraceperiod: cdktf.numberToTerraform(this._csrftagautodeploygraceperiod),
      csrftagminthreshold: cdktf.numberToTerraform(this._csrftagminthreshold),
      csrftagpercentthreshold: cdktf.numberToTerraform(this._csrftagpercentthreshold),
      fieldconsistencyautodeploygraceperiod: cdktf.numberToTerraform(this._fieldconsistencyautodeploygraceperiod),
      fieldconsistencyminthreshold: cdktf.numberToTerraform(this._fieldconsistencyminthreshold),
      fieldconsistencypercentthreshold: cdktf.numberToTerraform(this._fieldconsistencypercentthreshold),
      fieldformatautodeploygraceperiod: cdktf.numberToTerraform(this._fieldformatautodeploygraceperiod),
      fieldformatminthreshold: cdktf.numberToTerraform(this._fieldformatminthreshold),
      fieldformatpercentthreshold: cdktf.numberToTerraform(this._fieldformatpercentthreshold),
      id: cdktf.stringToTerraform(this._id),
      profilename: cdktf.stringToTerraform(this._profilename),
      sqlinjectionautodeploygraceperiod: cdktf.numberToTerraform(this._sqlinjectionautodeploygraceperiod),
      sqlinjectionminthreshold: cdktf.numberToTerraform(this._sqlinjectionminthreshold),
      sqlinjectionpercentthreshold: cdktf.numberToTerraform(this._sqlinjectionpercentthreshold),
      starturlautodeploygraceperiod: cdktf.numberToTerraform(this._starturlautodeploygraceperiod),
      starturlminthreshold: cdktf.numberToTerraform(this._starturlminthreshold),
      starturlpercentthreshold: cdktf.numberToTerraform(this._starturlpercentthreshold),
      xmlattachmentminthreshold: cdktf.numberToTerraform(this._xmlattachmentminthreshold),
      xmlattachmentpercentthreshold: cdktf.numberToTerraform(this._xmlattachmentpercentthreshold),
      xmlwsiminthreshold: cdktf.numberToTerraform(this._xmlwsiminthreshold),
      xmlwsipercentthreshold: cdktf.numberToTerraform(this._xmlwsipercentthreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contenttypeautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._contenttypeautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contenttypeminthreshold: {
        value: cdktf.numberToHclTerraform(this._contenttypeminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contenttypepercentthreshold: {
        value: cdktf.numberToHclTerraform(this._contenttypepercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookieconsistencyautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._cookieconsistencyautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookieconsistencyminthreshold: {
        value: cdktf.numberToHclTerraform(this._cookieconsistencyminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookieconsistencypercentthreshold: {
        value: cdktf.numberToHclTerraform(this._cookieconsistencypercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creditcardnumberminthreshold: {
        value: cdktf.numberToHclTerraform(this._creditcardnumberminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creditcardnumberpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._creditcardnumberpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crosssitescriptingautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._crosssitescriptingautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crosssitescriptingminthreshold: {
        value: cdktf.numberToHclTerraform(this._crosssitescriptingminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crosssitescriptingpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._crosssitescriptingpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csrftagautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._csrftagautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csrftagminthreshold: {
        value: cdktf.numberToHclTerraform(this._csrftagminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csrftagpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._csrftagpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldconsistencyautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._fieldconsistencyautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldconsistencyminthreshold: {
        value: cdktf.numberToHclTerraform(this._fieldconsistencyminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldconsistencypercentthreshold: {
        value: cdktf.numberToHclTerraform(this._fieldconsistencypercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldformatautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._fieldformatautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldformatminthreshold: {
        value: cdktf.numberToHclTerraform(this._fieldformatminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldformatpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._fieldformatpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profilename: {
        value: cdktf.stringToHclTerraform(this._profilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlinjectionautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._sqlinjectionautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sqlinjectionminthreshold: {
        value: cdktf.numberToHclTerraform(this._sqlinjectionminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sqlinjectionpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._sqlinjectionpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starturlautodeploygraceperiod: {
        value: cdktf.numberToHclTerraform(this._starturlautodeploygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starturlminthreshold: {
        value: cdktf.numberToHclTerraform(this._starturlminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starturlpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._starturlpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlattachmentminthreshold: {
        value: cdktf.numberToHclTerraform(this._xmlattachmentminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlattachmentpercentthreshold: {
        value: cdktf.numberToHclTerraform(this._xmlattachmentpercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlwsiminthreshold: {
        value: cdktf.numberToHclTerraform(this._xmlwsiminthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlwsipercentthreshold: {
        value: cdktf.numberToHclTerraform(this._xmlwsipercentthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
