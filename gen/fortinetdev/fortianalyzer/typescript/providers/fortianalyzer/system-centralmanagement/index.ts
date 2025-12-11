// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#acctid SystemCentralmanagement#acctid}
  */
  readonly acctid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#allow_monitor SystemCentralmanagement#allow_monitor}
  */
  readonly allowMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#authorized_manager_only SystemCentralmanagement#authorized_manager_only}
  */
  readonly authorizedManagerOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#elite_service SystemCentralmanagement#elite_service}
  */
  readonly eliteService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#enc_algorithm SystemCentralmanagement#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#fmg SystemCentralmanagement#fmg}
  */
  readonly fmg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#mgmtid SystemCentralmanagement#mgmtid}
  */
  readonly mgmtid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#serial_number SystemCentralmanagement#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#type SystemCentralmanagement#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement fortianalyzer_system_centralmanagement}
*/
export class SystemCentralmanagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCentralmanagement to import
  * @param importFromId The id of the existing SystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_centralmanagement fortianalyzer_system_centralmanagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctid = config.acctid;
    this._allowMonitor = config.allowMonitor;
    this._authorizedManagerOnly = config.authorizedManagerOnly;
    this._eliteService = config.eliteService;
    this._encAlgorithm = config.encAlgorithm;
    this._fmg = config.fmg;
    this._id = config.id;
    this._mgmtid = config.mgmtid;
    this._serialNumber = config.serialNumber;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acctid - computed: false, optional: true, required: false
  private _acctid?: string; 
  public get acctid() {
    return this.getStringAttribute('acctid');
  }
  public set acctid(value: string) {
    this._acctid = value;
  }
  public resetAcctid() {
    this._acctid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctidInput() {
    return this._acctid;
  }

  // allow_monitor - computed: true, optional: true, required: false
  private _allowMonitor?: string; 
  public get allowMonitor() {
    return this.getStringAttribute('allow_monitor');
  }
  public set allowMonitor(value: string) {
    this._allowMonitor = value;
  }
  public resetAllowMonitor() {
    this._allowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMonitorInput() {
    return this._allowMonitor;
  }

  // authorized_manager_only - computed: true, optional: true, required: false
  private _authorizedManagerOnly?: string; 
  public get authorizedManagerOnly() {
    return this.getStringAttribute('authorized_manager_only');
  }
  public set authorizedManagerOnly(value: string) {
    this._authorizedManagerOnly = value;
  }
  public resetAuthorizedManagerOnly() {
    this._authorizedManagerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedManagerOnlyInput() {
    return this._authorizedManagerOnly;
  }

  // elite_service - computed: true, optional: true, required: false
  private _eliteService?: string; 
  public get eliteService() {
    return this.getStringAttribute('elite_service');
  }
  public set eliteService(value: string) {
    this._eliteService = value;
  }
  public resetEliteService() {
    this._eliteService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eliteServiceInput() {
    return this._eliteService;
  }

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fmg - computed: false, optional: true, required: false
  private _fmg?: string; 
  public get fmg() {
    return this.getStringAttribute('fmg');
  }
  public set fmg(value: string) {
    this._fmg = value;
  }
  public resetFmg() {
    this._fmg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgInput() {
    return this._fmg;
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

  // mgmtid - computed: false, optional: true, required: false
  private _mgmtid?: number; 
  public get mgmtid() {
    return this.getNumberAttribute('mgmtid');
  }
  public set mgmtid(value: number) {
    this._mgmtid = value;
  }
  public resetMgmtid() {
    this._mgmtid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtidInput() {
    return this._mgmtid;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_number'));
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acctid: cdktf.stringToTerraform(this._acctid),
      allow_monitor: cdktf.stringToTerraform(this._allowMonitor),
      authorized_manager_only: cdktf.stringToTerraform(this._authorizedManagerOnly),
      elite_service: cdktf.stringToTerraform(this._eliteService),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fmg: cdktf.stringToTerraform(this._fmg),
      id: cdktf.stringToTerraform(this._id),
      mgmtid: cdktf.numberToTerraform(this._mgmtid),
      serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumber),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acctid: {
        value: cdktf.stringToHclTerraform(this._acctid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_monitor: {
        value: cdktf.stringToHclTerraform(this._allowMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_manager_only: {
        value: cdktf.stringToHclTerraform(this._authorizedManagerOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elite_service: {
        value: cdktf.stringToHclTerraform(this._eliteService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg: {
        value: cdktf.stringToHclTerraform(this._fmg),
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
      mgmtid: {
        value: cdktf.numberToHclTerraform(this._mgmtid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
