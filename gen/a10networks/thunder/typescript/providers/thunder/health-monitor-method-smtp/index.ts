// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodSmtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#id HealthMonitorMethodSmtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify SMTP Sender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#mail_from HealthMonitorMethodSmtpA#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#monitor_name HealthMonitorMethodSmtpA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Specify SMTP Receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#rcpt_to HealthMonitorMethodSmtpA#rcpt_to}
  */
  readonly rcptTo?: string;
  /**
  * SMTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#smtp HealthMonitorMethodSmtpA#smtp}
  */
  readonly smtp?: number;
  /**
  * Specify domain name of 'helo' command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#smtp_domain HealthMonitorMethodSmtpA#smtp_domain}
  */
  readonly smtpDomain?: string;
  /**
  * Specify SMTP port, default is 25 (Port Number (default 25))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#smtp_port HealthMonitorMethodSmtpA#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * Check the STARTTLS support at helo response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#smtp_starttls HealthMonitorMethodSmtpA#smtp_starttls}
  */
  readonly smtpStarttls?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#uuid HealthMonitorMethodSmtpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp thunder_health_monitor_method_smtp}
*/
export class HealthMonitorMethodSmtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodSmtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodSmtpA to import
  * @param importFromId The id of the existing HealthMonitorMethodSmtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodSmtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_smtp thunder_health_monitor_method_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodSmtpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodSmtpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_smtp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mailFrom = config.mailFrom;
    this._monitorName = config.monitorName;
    this._rcptTo = config.rcptTo;
    this._smtp = config.smtp;
    this._smtpDomain = config.smtpDomain;
    this._smtpPort = config.smtpPort;
    this._smtpStarttls = config.smtpStarttls;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // rcpt_to - computed: false, optional: true, required: false
  private _rcptTo?: string; 
  public get rcptTo() {
    return this.getStringAttribute('rcpt_to');
  }
  public set rcptTo(value: string) {
    this._rcptTo = value;
  }
  public resetRcptTo() {
    this._rcptTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcptToInput() {
    return this._rcptTo;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp?: number; 
  public get smtp() {
    return this.getNumberAttribute('smtp');
  }
  public set smtp(value: number) {
    this._smtp = value;
  }
  public resetSmtp() {
    this._smtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp;
  }

  // smtp_domain - computed: false, optional: true, required: false
  private _smtpDomain?: string; 
  public get smtpDomain() {
    return this.getStringAttribute('smtp_domain');
  }
  public set smtpDomain(value: string) {
    this._smtpDomain = value;
  }
  public resetSmtpDomain() {
    this._smtpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpDomainInput() {
    return this._smtpDomain;
  }

  // smtp_port - computed: false, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // smtp_starttls - computed: false, optional: true, required: false
  private _smtpStarttls?: number; 
  public get smtpStarttls() {
    return this.getNumberAttribute('smtp_starttls');
  }
  public set smtpStarttls(value: number) {
    this._smtpStarttls = value;
  }
  public resetSmtpStarttls() {
    this._smtpStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpStarttlsInput() {
    return this._smtpStarttls;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mail_from: cdktf.stringToTerraform(this._mailFrom),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      rcpt_to: cdktf.stringToTerraform(this._rcptTo),
      smtp: cdktf.numberToTerraform(this._smtp),
      smtp_domain: cdktf.stringToTerraform(this._smtpDomain),
      smtp_port: cdktf.numberToTerraform(this._smtpPort),
      smtp_starttls: cdktf.numberToTerraform(this._smtpStarttls),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail_from: {
        value: cdktf.stringToHclTerraform(this._mailFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rcpt_to: {
        value: cdktf.stringToHclTerraform(this._rcptTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp: {
        value: cdktf.numberToHclTerraform(this._smtp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_domain: {
        value: cdktf.stringToHclTerraform(this._smtpDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_port: {
        value: cdktf.numberToHclTerraform(this._smtpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_starttls: {
        value: cdktf.numberToHclTerraform(this._smtpStarttls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
