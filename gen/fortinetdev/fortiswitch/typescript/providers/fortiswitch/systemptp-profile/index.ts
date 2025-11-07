// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemptpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#announce_interval SystemptpProfile#announce_interval}
  */
  readonly announceInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#announce_timeout SystemptpProfile#announce_timeout}
  */
  readonly announceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#description SystemptpProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#domain SystemptpProfile#domain}
  */
  readonly domain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#id SystemptpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#min_delay_req_interval SystemptpProfile#min_delay_req_interval}
  */
  readonly minDelayReqInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#mode SystemptpProfile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#name SystemptpProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#pdelay_req_interval SystemptpProfile#pdelay_req_interval}
  */
  readonly pdelayReqInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#priority1 SystemptpProfile#priority1}
  */
  readonly priority1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#priority2 SystemptpProfile#priority2}
  */
  readonly priority2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#ptp_profile SystemptpProfile#ptp_profile}
  */
  readonly ptpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#sync_interval SystemptpProfile#sync_interval}
  */
  readonly syncInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#transport SystemptpProfile#transport}
  */
  readonly transport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile fortiswitch_systemptp_profile}
*/
export class SystemptpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemptp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemptpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemptpProfile to import
  * @param importFromId The id of the existing SystemptpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemptpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemptp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemptp_profile fortiswitch_systemptp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemptpProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemptpProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemptp_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._announceInterval = config.announceInterval;
    this._announceTimeout = config.announceTimeout;
    this._description = config.description;
    this._domain = config.domain;
    this._id = config.id;
    this._minDelayReqInterval = config.minDelayReqInterval;
    this._mode = config.mode;
    this._name = config.name;
    this._pdelayReqInterval = config.pdelayReqInterval;
    this._priority1 = config.priority1;
    this._priority2 = config.priority2;
    this._ptpProfile = config.ptpProfile;
    this._syncInterval = config.syncInterval;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // announce_interval - computed: true, optional: true, required: false
  private _announceInterval?: string; 
  public get announceInterval() {
    return this.getStringAttribute('announce_interval');
  }
  public set announceInterval(value: string) {
    this._announceInterval = value;
  }
  public resetAnnounceInterval() {
    this._announceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceIntervalInput() {
    return this._announceInterval;
  }

  // announce_timeout - computed: true, optional: true, required: false
  private _announceTimeout?: number; 
  public get announceTimeout() {
    return this.getNumberAttribute('announce_timeout');
  }
  public set announceTimeout(value: number) {
    this._announceTimeout = value;
  }
  public resetAnnounceTimeout() {
    this._announceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceTimeoutInput() {
    return this._announceTimeout;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // min_delay_req_interval - computed: true, optional: true, required: false
  private _minDelayReqInterval?: string; 
  public get minDelayReqInterval() {
    return this.getStringAttribute('min_delay_req_interval');
  }
  public set minDelayReqInterval(value: string) {
    this._minDelayReqInterval = value;
  }
  public resetMinDelayReqInterval() {
    this._minDelayReqInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayReqIntervalInput() {
    return this._minDelayReqInterval;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // pdelay_req_interval - computed: true, optional: true, required: false
  private _pdelayReqInterval?: string; 
  public get pdelayReqInterval() {
    return this.getStringAttribute('pdelay_req_interval');
  }
  public set pdelayReqInterval(value: string) {
    this._pdelayReqInterval = value;
  }
  public resetPdelayReqInterval() {
    this._pdelayReqInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdelayReqIntervalInput() {
    return this._pdelayReqInterval;
  }

  // priority1 - computed: true, optional: true, required: false
  private _priority1?: number; 
  public get priority1() {
    return this.getNumberAttribute('priority1');
  }
  public set priority1(value: number) {
    this._priority1 = value;
  }
  public resetPriority1() {
    this._priority1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority1Input() {
    return this._priority1;
  }

  // priority2 - computed: true, optional: true, required: false
  private _priority2?: number; 
  public get priority2() {
    return this.getNumberAttribute('priority2');
  }
  public set priority2(value: number) {
    this._priority2 = value;
  }
  public resetPriority2() {
    this._priority2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority2Input() {
    return this._priority2;
  }

  // ptp_profile - computed: true, optional: true, required: false
  private _ptpProfile?: string; 
  public get ptpProfile() {
    return this.getStringAttribute('ptp_profile');
  }
  public set ptpProfile(value: string) {
    this._ptpProfile = value;
  }
  public resetPtpProfile() {
    this._ptpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpProfileInput() {
    return this._ptpProfile;
  }

  // sync_interval - computed: true, optional: true, required: false
  private _syncInterval?: string; 
  public get syncInterval() {
    return this.getStringAttribute('sync_interval');
  }
  public set syncInterval(value: string) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      announce_interval: cdktf.stringToTerraform(this._announceInterval),
      announce_timeout: cdktf.numberToTerraform(this._announceTimeout),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.numberToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      min_delay_req_interval: cdktf.stringToTerraform(this._minDelayReqInterval),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      pdelay_req_interval: cdktf.stringToTerraform(this._pdelayReqInterval),
      priority1: cdktf.numberToTerraform(this._priority1),
      priority2: cdktf.numberToTerraform(this._priority2),
      ptp_profile: cdktf.stringToTerraform(this._ptpProfile),
      sync_interval: cdktf.stringToTerraform(this._syncInterval),
      transport: cdktf.stringToTerraform(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      announce_interval: {
        value: cdktf.stringToHclTerraform(this._announceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announce_timeout: {
        value: cdktf.numberToHclTerraform(this._announceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.numberToHclTerraform(this._domain),
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
      min_delay_req_interval: {
        value: cdktf.stringToHclTerraform(this._minDelayReqInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      pdelay_req_interval: {
        value: cdktf.stringToHclTerraform(this._pdelayReqInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority1: {
        value: cdktf.numberToHclTerraform(this._priority1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority2: {
        value: cdktf.numberToHclTerraform(this._priority2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_profile: {
        value: cdktf.stringToHclTerraform(this._ptpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_interval: {
        value: cdktf.stringToHclTerraform(this._syncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
