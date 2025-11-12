// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcertificateCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#auto_update_days SystemcertificateCa#auto_update_days}
  */
  readonly autoUpdateDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#auto_update_days_warning SystemcertificateCa#auto_update_days_warning}
  */
  readonly autoUpdateDaysWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#ca SystemcertificateCa#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#id SystemcertificateCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#info SystemcertificateCa#info}
  */
  readonly info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#name SystemcertificateCa#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#scep_url SystemcertificateCa#scep_url}
  */
  readonly scepUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca fortiswitch_systemcertificate_ca}
*/
export class SystemcertificateCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemcertificate_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemcertificateCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemcertificateCa to import
  * @param importFromId The id of the existing SystemcertificateCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemcertificateCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemcertificate_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ca fortiswitch_systemcertificate_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcertificateCaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemcertificateCaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemcertificate_ca',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoUpdateDays = config.autoUpdateDays;
    this._autoUpdateDaysWarning = config.autoUpdateDaysWarning;
    this._ca = config.ca;
    this._id = config.id;
    this._info = config.info;
    this._name = config.name;
    this._scepUrl = config.scepUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_update_days - computed: true, optional: true, required: false
  private _autoUpdateDays?: number; 
  public get autoUpdateDays() {
    return this.getNumberAttribute('auto_update_days');
  }
  public set autoUpdateDays(value: number) {
    this._autoUpdateDays = value;
  }
  public resetAutoUpdateDays() {
    this._autoUpdateDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateDaysInput() {
    return this._autoUpdateDays;
  }

  // auto_update_days_warning - computed: true, optional: true, required: false
  private _autoUpdateDaysWarning?: number; 
  public get autoUpdateDaysWarning() {
    return this.getNumberAttribute('auto_update_days_warning');
  }
  public set autoUpdateDaysWarning(value: number) {
    this._autoUpdateDaysWarning = value;
  }
  public resetAutoUpdateDaysWarning() {
    this._autoUpdateDaysWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateDaysWarningInput() {
    return this._autoUpdateDaysWarning;
  }

  // ca - computed: true, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // info - computed: true, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // name - computed: true, optional: true, required: false
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

  // scep_url - computed: true, optional: true, required: false
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  public resetScepUrl() {
    this._scepUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_update_days: cdktf.numberToTerraform(this._autoUpdateDays),
      auto_update_days_warning: cdktf.numberToTerraform(this._autoUpdateDaysWarning),
      ca: cdktf.stringToTerraform(this._ca),
      id: cdktf.stringToTerraform(this._id),
      info: cdktf.stringToTerraform(this._info),
      name: cdktf.stringToTerraform(this._name),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_update_days: {
        value: cdktf.numberToHclTerraform(this._autoUpdateDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_update_days_warning: {
        value: cdktf.numberToHclTerraform(this._autoUpdateDaysWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
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
      info: {
        value: cdktf.stringToHclTerraform(this._info),
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
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
