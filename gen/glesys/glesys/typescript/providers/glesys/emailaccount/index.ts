// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email Account antispam level. `0-5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#antispamlevel Emailaccount#antispamlevel}
  */
  readonly antispamlevel?: number;
  /**
  * Email Account enable Antivirus. `yes/no`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#antivirus Emailaccount#antivirus}
  */
  readonly antivirus?: string;
  /**
  * Email Account Autoresponse. `yes/no`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#autorespond Emailaccount#autorespond}
  */
  readonly autorespond?: string;
  /**
  * Email Account Autoresponse message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#autorespondmessage Emailaccount#autorespondmessage}
  */
  readonly autorespondmessage?: string;
  /**
  * Email account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#emailaccount Emailaccount#emailaccount}
  */
  readonly emailaccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#id Emailaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Email Account Quota (GiB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#quotaingib Emailaccount#quotaingib}
  */
  readonly quotaingib?: number;
  /**
  * Email Account Reject spam setting. `yes/no`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#rejectspam Emailaccount#rejectspam}
  */
  readonly rejectspam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount glesys_emailaccount}
*/
export class Emailaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_emailaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Emailaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Emailaccount to import
  * @param importFromId The id of the existing Emailaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Emailaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_emailaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/emailaccount glesys_emailaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailaccountConfig
  */
  public constructor(scope: Construct, id: string, config: EmailaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_emailaccount',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antispamlevel = config.antispamlevel;
    this._antivirus = config.antivirus;
    this._autorespond = config.autorespond;
    this._autorespondmessage = config.autorespondmessage;
    this._emailaccount = config.emailaccount;
    this._id = config.id;
    this._quotaingib = config.quotaingib;
    this._rejectspam = config.rejectspam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antispamlevel - computed: true, optional: true, required: false
  private _antispamlevel?: number; 
  public get antispamlevel() {
    return this.getNumberAttribute('antispamlevel');
  }
  public set antispamlevel(value: number) {
    this._antispamlevel = value;
  }
  public resetAntispamlevel() {
    this._antispamlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamlevelInput() {
    return this._antispamlevel;
  }

  // antivirus - computed: true, optional: true, required: false
  private _antivirus?: string; 
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }
  public set antivirus(value: string) {
    this._antivirus = value;
  }
  public resetAntivirus() {
    this._antivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus;
  }

  // autorespond - computed: true, optional: true, required: false
  private _autorespond?: string; 
  public get autorespond() {
    return this.getStringAttribute('autorespond');
  }
  public set autorespond(value: string) {
    this._autorespond = value;
  }
  public resetAutorespond() {
    this._autorespond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorespondInput() {
    return this._autorespond;
  }

  // autorespondmessage - computed: true, optional: true, required: false
  private _autorespondmessage?: string; 
  public get autorespondmessage() {
    return this.getStringAttribute('autorespondmessage');
  }
  public set autorespondmessage(value: string) {
    this._autorespondmessage = value;
  }
  public resetAutorespondmessage() {
    this._autorespondmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorespondmessageInput() {
    return this._autorespondmessage;
  }

  // autorespondsaveemail - computed: true, optional: false, required: false
  public get autorespondsaveemail() {
    return this.getStringAttribute('autorespondsaveemail');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // displayname - computed: true, optional: false, required: false
  public get displayname() {
    return this.getStringAttribute('displayname');
  }

  // emailaccount - computed: false, optional: false, required: true
  private _emailaccount?: string; 
  public get emailaccount() {
    return this.getStringAttribute('emailaccount');
  }
  public set emailaccount(value: string) {
    this._emailaccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailaccountInput() {
    return this._emailaccount;
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

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // quotaingib - computed: true, optional: true, required: false
  private _quotaingib?: number; 
  public get quotaingib() {
    return this.getNumberAttribute('quotaingib');
  }
  public set quotaingib(value: number) {
    this._quotaingib = value;
  }
  public resetQuotaingib() {
    this._quotaingib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaingibInput() {
    return this._quotaingib;
  }

  // rejectspam - computed: true, optional: true, required: false
  private _rejectspam?: string; 
  public get rejectspam() {
    return this.getStringAttribute('rejectspam');
  }
  public set rejectspam(value: string) {
    this._rejectspam = value;
  }
  public resetRejectspam() {
    this._rejectspam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectspamInput() {
    return this._rejectspam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      antispamlevel: cdktf.numberToTerraform(this._antispamlevel),
      antivirus: cdktf.stringToTerraform(this._antivirus),
      autorespond: cdktf.stringToTerraform(this._autorespond),
      autorespondmessage: cdktf.stringToTerraform(this._autorespondmessage),
      emailaccount: cdktf.stringToTerraform(this._emailaccount),
      id: cdktf.stringToTerraform(this._id),
      quotaingib: cdktf.numberToTerraform(this._quotaingib),
      rejectspam: cdktf.stringToTerraform(this._rejectspam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      antispamlevel: {
        value: cdktf.numberToHclTerraform(this._antispamlevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antivirus: {
        value: cdktf.stringToHclTerraform(this._antivirus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autorespond: {
        value: cdktf.stringToHclTerraform(this._autorespond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autorespondmessage: {
        value: cdktf.stringToHclTerraform(this._autorespondmessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailaccount: {
        value: cdktf.stringToHclTerraform(this._emailaccount),
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
      quotaingib: {
        value: cdktf.numberToHclTerraform(this._quotaingib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rejectspam: {
        value: cdktf.stringToHclTerraform(this._rejectspam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
