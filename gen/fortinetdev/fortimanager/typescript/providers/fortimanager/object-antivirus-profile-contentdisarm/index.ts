// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAntivirusProfileContentdisarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#adom ObjectAntivirusProfileContentdisarm#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#analytics_suspicious ObjectAntivirusProfileContentdisarm#analytics_suspicious}
  */
  readonly analyticsSuspicious?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#cover_page ObjectAntivirusProfileContentdisarm#cover_page}
  */
  readonly coverPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#detect_only ObjectAntivirusProfileContentdisarm#detect_only}
  */
  readonly detectOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#error_action ObjectAntivirusProfileContentdisarm#error_action}
  */
  readonly errorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#id ObjectAntivirusProfileContentdisarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_action ObjectAntivirusProfileContentdisarm#office_action}
  */
  readonly officeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_dde ObjectAntivirusProfileContentdisarm#office_dde}
  */
  readonly officeDde?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_embed ObjectAntivirusProfileContentdisarm#office_embed}
  */
  readonly officeEmbed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_hylink ObjectAntivirusProfileContentdisarm#office_hylink}
  */
  readonly officeHylink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_linked ObjectAntivirusProfileContentdisarm#office_linked}
  */
  readonly officeLinked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#office_macro ObjectAntivirusProfileContentdisarm#office_macro}
  */
  readonly officeMacro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#original_file_destination ObjectAntivirusProfileContentdisarm#original_file_destination}
  */
  readonly originalFileDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_form ObjectAntivirusProfileContentdisarm#pdf_act_form}
  */
  readonly pdfActForm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_gotor ObjectAntivirusProfileContentdisarm#pdf_act_gotor}
  */
  readonly pdfActGotor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_java ObjectAntivirusProfileContentdisarm#pdf_act_java}
  */
  readonly pdfActJava?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_launch ObjectAntivirusProfileContentdisarm#pdf_act_launch}
  */
  readonly pdfActLaunch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_movie ObjectAntivirusProfileContentdisarm#pdf_act_movie}
  */
  readonly pdfActMovie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_act_sound ObjectAntivirusProfileContentdisarm#pdf_act_sound}
  */
  readonly pdfActSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_embedfile ObjectAntivirusProfileContentdisarm#pdf_embedfile}
  */
  readonly pdfEmbedfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_hyperlink ObjectAntivirusProfileContentdisarm#pdf_hyperlink}
  */
  readonly pdfHyperlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#pdf_javacode ObjectAntivirusProfileContentdisarm#pdf_javacode}
  */
  readonly pdfJavacode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#profile ObjectAntivirusProfileContentdisarm#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#scopetype ObjectAntivirusProfileContentdisarm#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm fortimanager_object_antivirus_profile_contentdisarm}
*/
export class ObjectAntivirusProfileContentdisarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_antivirus_profile_contentdisarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAntivirusProfileContentdisarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAntivirusProfileContentdisarm to import
  * @param importFromId The id of the existing ObjectAntivirusProfileContentdisarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAntivirusProfileContentdisarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_antivirus_profile_contentdisarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_contentdisarm fortimanager_object_antivirus_profile_contentdisarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAntivirusProfileContentdisarmConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectAntivirusProfileContentdisarmConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_antivirus_profile_contentdisarm',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._analyticsSuspicious = config.analyticsSuspicious;
    this._coverPage = config.coverPage;
    this._detectOnly = config.detectOnly;
    this._errorAction = config.errorAction;
    this._id = config.id;
    this._officeAction = config.officeAction;
    this._officeDde = config.officeDde;
    this._officeEmbed = config.officeEmbed;
    this._officeHylink = config.officeHylink;
    this._officeLinked = config.officeLinked;
    this._officeMacro = config.officeMacro;
    this._originalFileDestination = config.originalFileDestination;
    this._pdfActForm = config.pdfActForm;
    this._pdfActGotor = config.pdfActGotor;
    this._pdfActJava = config.pdfActJava;
    this._pdfActLaunch = config.pdfActLaunch;
    this._pdfActMovie = config.pdfActMovie;
    this._pdfActSound = config.pdfActSound;
    this._pdfEmbedfile = config.pdfEmbedfile;
    this._pdfHyperlink = config.pdfHyperlink;
    this._pdfJavacode = config.pdfJavacode;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // analytics_suspicious - computed: false, optional: true, required: false
  private _analyticsSuspicious?: string; 
  public get analyticsSuspicious() {
    return this.getStringAttribute('analytics_suspicious');
  }
  public set analyticsSuspicious(value: string) {
    this._analyticsSuspicious = value;
  }
  public resetAnalyticsSuspicious() {
    this._analyticsSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsSuspiciousInput() {
    return this._analyticsSuspicious;
  }

  // cover_page - computed: true, optional: true, required: false
  private _coverPage?: string; 
  public get coverPage() {
    return this.getStringAttribute('cover_page');
  }
  public set coverPage(value: string) {
    this._coverPage = value;
  }
  public resetCoverPage() {
    this._coverPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverPageInput() {
    return this._coverPage;
  }

  // detect_only - computed: true, optional: true, required: false
  private _detectOnly?: string; 
  public get detectOnly() {
    return this.getStringAttribute('detect_only');
  }
  public set detectOnly(value: string) {
    this._detectOnly = value;
  }
  public resetDetectOnly() {
    this._detectOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectOnlyInput() {
    return this._detectOnly;
  }

  // error_action - computed: true, optional: true, required: false
  private _errorAction?: string; 
  public get errorAction() {
    return this.getStringAttribute('error_action');
  }
  public set errorAction(value: string) {
    this._errorAction = value;
  }
  public resetErrorAction() {
    this._errorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction;
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

  // office_action - computed: true, optional: true, required: false
  private _officeAction?: string; 
  public get officeAction() {
    return this.getStringAttribute('office_action');
  }
  public set officeAction(value: string) {
    this._officeAction = value;
  }
  public resetOfficeAction() {
    this._officeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeActionInput() {
    return this._officeAction;
  }

  // office_dde - computed: true, optional: true, required: false
  private _officeDde?: string; 
  public get officeDde() {
    return this.getStringAttribute('office_dde');
  }
  public set officeDde(value: string) {
    this._officeDde = value;
  }
  public resetOfficeDde() {
    this._officeDde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeDdeInput() {
    return this._officeDde;
  }

  // office_embed - computed: true, optional: true, required: false
  private _officeEmbed?: string; 
  public get officeEmbed() {
    return this.getStringAttribute('office_embed');
  }
  public set officeEmbed(value: string) {
    this._officeEmbed = value;
  }
  public resetOfficeEmbed() {
    this._officeEmbed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeEmbedInput() {
    return this._officeEmbed;
  }

  // office_hylink - computed: true, optional: true, required: false
  private _officeHylink?: string; 
  public get officeHylink() {
    return this.getStringAttribute('office_hylink');
  }
  public set officeHylink(value: string) {
    this._officeHylink = value;
  }
  public resetOfficeHylink() {
    this._officeHylink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeHylinkInput() {
    return this._officeHylink;
  }

  // office_linked - computed: true, optional: true, required: false
  private _officeLinked?: string; 
  public get officeLinked() {
    return this.getStringAttribute('office_linked');
  }
  public set officeLinked(value: string) {
    this._officeLinked = value;
  }
  public resetOfficeLinked() {
    this._officeLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeLinkedInput() {
    return this._officeLinked;
  }

  // office_macro - computed: true, optional: true, required: false
  private _officeMacro?: string; 
  public get officeMacro() {
    return this.getStringAttribute('office_macro');
  }
  public set officeMacro(value: string) {
    this._officeMacro = value;
  }
  public resetOfficeMacro() {
    this._officeMacro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeMacroInput() {
    return this._officeMacro;
  }

  // original_file_destination - computed: true, optional: true, required: false
  private _originalFileDestination?: string; 
  public get originalFileDestination() {
    return this.getStringAttribute('original_file_destination');
  }
  public set originalFileDestination(value: string) {
    this._originalFileDestination = value;
  }
  public resetOriginalFileDestination() {
    this._originalFileDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFileDestinationInput() {
    return this._originalFileDestination;
  }

  // pdf_act_form - computed: true, optional: true, required: false
  private _pdfActForm?: string; 
  public get pdfActForm() {
    return this.getStringAttribute('pdf_act_form');
  }
  public set pdfActForm(value: string) {
    this._pdfActForm = value;
  }
  public resetPdfActForm() {
    this._pdfActForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActFormInput() {
    return this._pdfActForm;
  }

  // pdf_act_gotor - computed: true, optional: true, required: false
  private _pdfActGotor?: string; 
  public get pdfActGotor() {
    return this.getStringAttribute('pdf_act_gotor');
  }
  public set pdfActGotor(value: string) {
    this._pdfActGotor = value;
  }
  public resetPdfActGotor() {
    this._pdfActGotor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActGotorInput() {
    return this._pdfActGotor;
  }

  // pdf_act_java - computed: true, optional: true, required: false
  private _pdfActJava?: string; 
  public get pdfActJava() {
    return this.getStringAttribute('pdf_act_java');
  }
  public set pdfActJava(value: string) {
    this._pdfActJava = value;
  }
  public resetPdfActJava() {
    this._pdfActJava = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActJavaInput() {
    return this._pdfActJava;
  }

  // pdf_act_launch - computed: true, optional: true, required: false
  private _pdfActLaunch?: string; 
  public get pdfActLaunch() {
    return this.getStringAttribute('pdf_act_launch');
  }
  public set pdfActLaunch(value: string) {
    this._pdfActLaunch = value;
  }
  public resetPdfActLaunch() {
    this._pdfActLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActLaunchInput() {
    return this._pdfActLaunch;
  }

  // pdf_act_movie - computed: true, optional: true, required: false
  private _pdfActMovie?: string; 
  public get pdfActMovie() {
    return this.getStringAttribute('pdf_act_movie');
  }
  public set pdfActMovie(value: string) {
    this._pdfActMovie = value;
  }
  public resetPdfActMovie() {
    this._pdfActMovie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActMovieInput() {
    return this._pdfActMovie;
  }

  // pdf_act_sound - computed: true, optional: true, required: false
  private _pdfActSound?: string; 
  public get pdfActSound() {
    return this.getStringAttribute('pdf_act_sound');
  }
  public set pdfActSound(value: string) {
    this._pdfActSound = value;
  }
  public resetPdfActSound() {
    this._pdfActSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActSoundInput() {
    return this._pdfActSound;
  }

  // pdf_embedfile - computed: true, optional: true, required: false
  private _pdfEmbedfile?: string; 
  public get pdfEmbedfile() {
    return this.getStringAttribute('pdf_embedfile');
  }
  public set pdfEmbedfile(value: string) {
    this._pdfEmbedfile = value;
  }
  public resetPdfEmbedfile() {
    this._pdfEmbedfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfEmbedfileInput() {
    return this._pdfEmbedfile;
  }

  // pdf_hyperlink - computed: true, optional: true, required: false
  private _pdfHyperlink?: string; 
  public get pdfHyperlink() {
    return this.getStringAttribute('pdf_hyperlink');
  }
  public set pdfHyperlink(value: string) {
    this._pdfHyperlink = value;
  }
  public resetPdfHyperlink() {
    this._pdfHyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfHyperlinkInput() {
    return this._pdfHyperlink;
  }

  // pdf_javacode - computed: true, optional: true, required: false
  private _pdfJavacode?: string; 
  public get pdfJavacode() {
    return this.getStringAttribute('pdf_javacode');
  }
  public set pdfJavacode(value: string) {
    this._pdfJavacode = value;
  }
  public resetPdfJavacode() {
    this._pdfJavacode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfJavacodeInput() {
    return this._pdfJavacode;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      analytics_suspicious: cdktf.stringToTerraform(this._analyticsSuspicious),
      cover_page: cdktf.stringToTerraform(this._coverPage),
      detect_only: cdktf.stringToTerraform(this._detectOnly),
      error_action: cdktf.stringToTerraform(this._errorAction),
      id: cdktf.stringToTerraform(this._id),
      office_action: cdktf.stringToTerraform(this._officeAction),
      office_dde: cdktf.stringToTerraform(this._officeDde),
      office_embed: cdktf.stringToTerraform(this._officeEmbed),
      office_hylink: cdktf.stringToTerraform(this._officeHylink),
      office_linked: cdktf.stringToTerraform(this._officeLinked),
      office_macro: cdktf.stringToTerraform(this._officeMacro),
      original_file_destination: cdktf.stringToTerraform(this._originalFileDestination),
      pdf_act_form: cdktf.stringToTerraform(this._pdfActForm),
      pdf_act_gotor: cdktf.stringToTerraform(this._pdfActGotor),
      pdf_act_java: cdktf.stringToTerraform(this._pdfActJava),
      pdf_act_launch: cdktf.stringToTerraform(this._pdfActLaunch),
      pdf_act_movie: cdktf.stringToTerraform(this._pdfActMovie),
      pdf_act_sound: cdktf.stringToTerraform(this._pdfActSound),
      pdf_embedfile: cdktf.stringToTerraform(this._pdfEmbedfile),
      pdf_hyperlink: cdktf.stringToTerraform(this._pdfHyperlink),
      pdf_javacode: cdktf.stringToTerraform(this._pdfJavacode),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_suspicious: {
        value: cdktf.stringToHclTerraform(this._analyticsSuspicious),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cover_page: {
        value: cdktf.stringToHclTerraform(this._coverPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_only: {
        value: cdktf.stringToHclTerraform(this._detectOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_action: {
        value: cdktf.stringToHclTerraform(this._errorAction),
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
      office_action: {
        value: cdktf.stringToHclTerraform(this._officeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_dde: {
        value: cdktf.stringToHclTerraform(this._officeDde),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_embed: {
        value: cdktf.stringToHclTerraform(this._officeEmbed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_hylink: {
        value: cdktf.stringToHclTerraform(this._officeHylink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_linked: {
        value: cdktf.stringToHclTerraform(this._officeLinked),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_macro: {
        value: cdktf.stringToHclTerraform(this._officeMacro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_file_destination: {
        value: cdktf.stringToHclTerraform(this._originalFileDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_form: {
        value: cdktf.stringToHclTerraform(this._pdfActForm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_gotor: {
        value: cdktf.stringToHclTerraform(this._pdfActGotor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_java: {
        value: cdktf.stringToHclTerraform(this._pdfActJava),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_launch: {
        value: cdktf.stringToHclTerraform(this._pdfActLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_movie: {
        value: cdktf.stringToHclTerraform(this._pdfActMovie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_act_sound: {
        value: cdktf.stringToHclTerraform(this._pdfActSound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_embedfile: {
        value: cdktf.stringToHclTerraform(this._pdfEmbedfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_hyperlink: {
        value: cdktf.stringToHclTerraform(this._pdfHyperlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdf_javacode: {
        value: cdktf.stringToHclTerraform(this._pdfJavacode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
