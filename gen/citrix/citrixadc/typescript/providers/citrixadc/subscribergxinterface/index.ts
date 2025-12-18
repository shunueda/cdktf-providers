// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscribergxinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#cerrequesttimeout Subscribergxinterface#cerrequesttimeout}
  */
  readonly cerrequesttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#healthcheck Subscribergxinterface#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#healthcheckttl Subscribergxinterface#healthcheckttl}
  */
  readonly healthcheckttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#holdonsubscriberabsence Subscribergxinterface#holdonsubscriberabsence}
  */
  readonly holdonsubscriberabsence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#id Subscribergxinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#idlettl Subscribergxinterface#idlettl}
  */
  readonly idlettl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#negativettl Subscribergxinterface#negativettl}
  */
  readonly negativettl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#negativettllimitedsuccess Subscribergxinterface#negativettllimitedsuccess}
  */
  readonly negativettllimitedsuccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#nodeid Subscribergxinterface#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#pcrfrealm Subscribergxinterface#pcrfrealm}
  */
  readonly pcrfrealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#purgesdbongxfailure Subscribergxinterface#purgesdbongxfailure}
  */
  readonly purgesdbongxfailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#requestretryattempts Subscribergxinterface#requestretryattempts}
  */
  readonly requestretryattempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#requesttimeout Subscribergxinterface#requesttimeout}
  */
  readonly requesttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#revalidationtimeout Subscribergxinterface#revalidationtimeout}
  */
  readonly revalidationtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#service Subscribergxinterface#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#servicepathavp Subscribergxinterface#servicepathavp}
  */
  readonly servicepathavp?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#servicepathvendorid Subscribergxinterface#servicepathvendorid}
  */
  readonly servicepathvendorid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#vserver Subscribergxinterface#vserver}
  */
  readonly vserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface citrixadc_subscribergxinterface}
*/
export class Subscribergxinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_subscribergxinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscribergxinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscribergxinterface to import
  * @param importFromId The id of the existing Subscribergxinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscribergxinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_subscribergxinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/subscribergxinterface citrixadc_subscribergxinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscribergxinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SubscribergxinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_subscribergxinterface',
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
    this._cerrequesttimeout = config.cerrequesttimeout;
    this._healthcheck = config.healthcheck;
    this._healthcheckttl = config.healthcheckttl;
    this._holdonsubscriberabsence = config.holdonsubscriberabsence;
    this._id = config.id;
    this._idlettl = config.idlettl;
    this._negativettl = config.negativettl;
    this._negativettllimitedsuccess = config.negativettllimitedsuccess;
    this._nodeid = config.nodeid;
    this._pcrfrealm = config.pcrfrealm;
    this._purgesdbongxfailure = config.purgesdbongxfailure;
    this._requestretryattempts = config.requestretryattempts;
    this._requesttimeout = config.requesttimeout;
    this._revalidationtimeout = config.revalidationtimeout;
    this._service = config.service;
    this._servicepathavp = config.servicepathavp;
    this._servicepathvendorid = config.servicepathvendorid;
    this._vserver = config.vserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cerrequesttimeout - computed: true, optional: true, required: false
  private _cerrequesttimeout?: number; 
  public get cerrequesttimeout() {
    return this.getNumberAttribute('cerrequesttimeout');
  }
  public set cerrequesttimeout(value: number) {
    this._cerrequesttimeout = value;
  }
  public resetCerrequesttimeout() {
    this._cerrequesttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cerrequesttimeoutInput() {
    return this._cerrequesttimeout;
  }

  // healthcheck - computed: true, optional: true, required: false
  private _healthcheck?: string; 
  public get healthcheck() {
    return this.getStringAttribute('healthcheck');
  }
  public set healthcheck(value: string) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // healthcheckttl - computed: true, optional: true, required: false
  private _healthcheckttl?: number; 
  public get healthcheckttl() {
    return this.getNumberAttribute('healthcheckttl');
  }
  public set healthcheckttl(value: number) {
    this._healthcheckttl = value;
  }
  public resetHealthcheckttl() {
    this._healthcheckttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckttlInput() {
    return this._healthcheckttl;
  }

  // holdonsubscriberabsence - computed: true, optional: true, required: false
  private _holdonsubscriberabsence?: string; 
  public get holdonsubscriberabsence() {
    return this.getStringAttribute('holdonsubscriberabsence');
  }
  public set holdonsubscriberabsence(value: string) {
    this._holdonsubscriberabsence = value;
  }
  public resetHoldonsubscriberabsence() {
    this._holdonsubscriberabsence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdonsubscriberabsenceInput() {
    return this._holdonsubscriberabsence;
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

  // idlettl - computed: true, optional: true, required: false
  private _idlettl?: number; 
  public get idlettl() {
    return this.getNumberAttribute('idlettl');
  }
  public set idlettl(value: number) {
    this._idlettl = value;
  }
  public resetIdlettl() {
    this._idlettl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idlettlInput() {
    return this._idlettl;
  }

  // negativettl - computed: true, optional: true, required: false
  private _negativettl?: number; 
  public get negativettl() {
    return this.getNumberAttribute('negativettl');
  }
  public set negativettl(value: number) {
    this._negativettl = value;
  }
  public resetNegativettl() {
    this._negativettl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativettlInput() {
    return this._negativettl;
  }

  // negativettllimitedsuccess - computed: true, optional: true, required: false
  private _negativettllimitedsuccess?: string; 
  public get negativettllimitedsuccess() {
    return this.getStringAttribute('negativettllimitedsuccess');
  }
  public set negativettllimitedsuccess(value: string) {
    this._negativettllimitedsuccess = value;
  }
  public resetNegativettllimitedsuccess() {
    this._negativettllimitedsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativettllimitedsuccessInput() {
    return this._negativettllimitedsuccess;
  }

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // pcrfrealm - computed: true, optional: true, required: false
  private _pcrfrealm?: string; 
  public get pcrfrealm() {
    return this.getStringAttribute('pcrfrealm');
  }
  public set pcrfrealm(value: string) {
    this._pcrfrealm = value;
  }
  public resetPcrfrealm() {
    this._pcrfrealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrfrealmInput() {
    return this._pcrfrealm;
  }

  // purgesdbongxfailure - computed: true, optional: true, required: false
  private _purgesdbongxfailure?: string; 
  public get purgesdbongxfailure() {
    return this.getStringAttribute('purgesdbongxfailure');
  }
  public set purgesdbongxfailure(value: string) {
    this._purgesdbongxfailure = value;
  }
  public resetPurgesdbongxfailure() {
    this._purgesdbongxfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgesdbongxfailureInput() {
    return this._purgesdbongxfailure;
  }

  // requestretryattempts - computed: true, optional: true, required: false
  private _requestretryattempts?: number; 
  public get requestretryattempts() {
    return this.getNumberAttribute('requestretryattempts');
  }
  public set requestretryattempts(value: number) {
    this._requestretryattempts = value;
  }
  public resetRequestretryattempts() {
    this._requestretryattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestretryattemptsInput() {
    return this._requestretryattempts;
  }

  // requesttimeout - computed: true, optional: true, required: false
  private _requesttimeout?: number; 
  public get requesttimeout() {
    return this.getNumberAttribute('requesttimeout');
  }
  public set requesttimeout(value: number) {
    this._requesttimeout = value;
  }
  public resetRequesttimeout() {
    this._requesttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesttimeoutInput() {
    return this._requesttimeout;
  }

  // revalidationtimeout - computed: true, optional: true, required: false
  private _revalidationtimeout?: number; 
  public get revalidationtimeout() {
    return this.getNumberAttribute('revalidationtimeout');
  }
  public set revalidationtimeout(value: number) {
    this._revalidationtimeout = value;
  }
  public resetRevalidationtimeout() {
    this._revalidationtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revalidationtimeoutInput() {
    return this._revalidationtimeout;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // servicepathavp - computed: true, optional: true, required: false
  private _servicepathavp?: number[]; 
  public get servicepathavp() {
    return this.getNumberListAttribute('servicepathavp');
  }
  public set servicepathavp(value: number[]) {
    this._servicepathavp = value;
  }
  public resetServicepathavp() {
    this._servicepathavp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepathavpInput() {
    return this._servicepathavp;
  }

  // servicepathvendorid - computed: true, optional: true, required: false
  private _servicepathvendorid?: number; 
  public get servicepathvendorid() {
    return this.getNumberAttribute('servicepathvendorid');
  }
  public set servicepathvendorid(value: number) {
    this._servicepathvendorid = value;
  }
  public resetServicepathvendorid() {
    this._servicepathvendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepathvendoridInput() {
    return this._servicepathvendorid;
  }

  // vserver - computed: true, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cerrequesttimeout: cdktf.numberToTerraform(this._cerrequesttimeout),
      healthcheck: cdktf.stringToTerraform(this._healthcheck),
      healthcheckttl: cdktf.numberToTerraform(this._healthcheckttl),
      holdonsubscriberabsence: cdktf.stringToTerraform(this._holdonsubscriberabsence),
      id: cdktf.stringToTerraform(this._id),
      idlettl: cdktf.numberToTerraform(this._idlettl),
      negativettl: cdktf.numberToTerraform(this._negativettl),
      negativettllimitedsuccess: cdktf.stringToTerraform(this._negativettllimitedsuccess),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      pcrfrealm: cdktf.stringToTerraform(this._pcrfrealm),
      purgesdbongxfailure: cdktf.stringToTerraform(this._purgesdbongxfailure),
      requestretryattempts: cdktf.numberToTerraform(this._requestretryattempts),
      requesttimeout: cdktf.numberToTerraform(this._requesttimeout),
      revalidationtimeout: cdktf.numberToTerraform(this._revalidationtimeout),
      service: cdktf.stringToTerraform(this._service),
      servicepathavp: cdktf.listMapper(cdktf.numberToTerraform, false)(this._servicepathavp),
      servicepathvendorid: cdktf.numberToTerraform(this._servicepathvendorid),
      vserver: cdktf.stringToTerraform(this._vserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cerrequesttimeout: {
        value: cdktf.numberToHclTerraform(this._cerrequesttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck: {
        value: cdktf.stringToHclTerraform(this._healthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheckttl: {
        value: cdktf.numberToHclTerraform(this._healthcheckttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdonsubscriberabsence: {
        value: cdktf.stringToHclTerraform(this._holdonsubscriberabsence),
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
      idlettl: {
        value: cdktf.numberToHclTerraform(this._idlettl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      negativettl: {
        value: cdktf.numberToHclTerraform(this._negativettl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      negativettllimitedsuccess: {
        value: cdktf.stringToHclTerraform(this._negativettllimitedsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcrfrealm: {
        value: cdktf.stringToHclTerraform(this._pcrfrealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purgesdbongxfailure: {
        value: cdktf.stringToHclTerraform(this._purgesdbongxfailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestretryattempts: {
        value: cdktf.numberToHclTerraform(this._requestretryattempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requesttimeout: {
        value: cdktf.numberToHclTerraform(this._requesttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revalidationtimeout: {
        value: cdktf.numberToHclTerraform(this._revalidationtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicepathavp: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._servicepathavp),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      servicepathvendorid: {
        value: cdktf.numberToHclTerraform(this._servicepathvendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vserver: {
        value: cdktf.stringToHclTerraform(this._vserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
