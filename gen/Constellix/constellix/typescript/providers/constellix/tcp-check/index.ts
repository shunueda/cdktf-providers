// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcpCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#check_sites TcpCheck#check_sites}
  */
  readonly checkSites: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#host TcpCheck#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#id TcpCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#interval TcpCheck#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#interval_policy TcpCheck#interval_policy}
  */
  readonly intervalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#ip_version TcpCheck#ip_version}
  */
  readonly ipVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#name TcpCheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#notification_groups TcpCheck#notification_groups}
  */
  readonly notificationGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#notification_report_timeout TcpCheck#notification_report_timeout}
  */
  readonly notificationReportTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#port TcpCheck#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#string_to_receive TcpCheck#string_to_receive}
  */
  readonly stringToReceive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#string_to_send TcpCheck#string_to_send}
  */
  readonly stringToSend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#verification_policy TcpCheck#verification_policy}
  */
  readonly verificationPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check constellix_tcp_check}
*/
export class TcpCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_tcp_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcpCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcpCheck to import
  * @param importFromId The id of the existing TcpCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcpCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_tcp_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/tcp_check constellix_tcp_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcpCheckConfig
  */
  public constructor(scope: Construct, id: string, config: TcpCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_tcp_check',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkSites = config.checkSites;
    this._host = config.host;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalPolicy = config.intervalPolicy;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._notificationGroups = config.notificationGroups;
    this._notificationReportTimeout = config.notificationReportTimeout;
    this._port = config.port;
    this._stringToReceive = config.stringToReceive;
    this._stringToSend = config.stringToSend;
    this._verificationPolicy = config.verificationPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_sites - computed: false, optional: false, required: true
  private _checkSites?: number[]; 
  public get checkSites() {
    return this.getNumberListAttribute('check_sites');
  }
  public set checkSites(value: number[]) {
    this._checkSites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSitesInput() {
    return this._checkSites;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_policy - computed: true, optional: true, required: false
  private _intervalPolicy?: string; 
  public get intervalPolicy() {
    return this.getStringAttribute('interval_policy');
  }
  public set intervalPolicy(value: string) {
    this._intervalPolicy = value;
  }
  public resetIntervalPolicy() {
    this._intervalPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPolicyInput() {
    return this._intervalPolicy;
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // notification_groups - computed: true, optional: true, required: false
  private _notificationGroups?: number[]; 
  public get notificationGroups() {
    return this.getNumberListAttribute('notification_groups');
  }
  public set notificationGroups(value: number[]) {
    this._notificationGroups = value;
  }
  public resetNotificationGroups() {
    this._notificationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupsInput() {
    return this._notificationGroups;
  }

  // notification_report_timeout - computed: true, optional: true, required: false
  private _notificationReportTimeout?: number; 
  public get notificationReportTimeout() {
    return this.getNumberAttribute('notification_report_timeout');
  }
  public set notificationReportTimeout(value: number) {
    this._notificationReportTimeout = value;
  }
  public resetNotificationReportTimeout() {
    this._notificationReportTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationReportTimeoutInput() {
    return this._notificationReportTimeout;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // string_to_receive - computed: true, optional: true, required: false
  private _stringToReceive?: string; 
  public get stringToReceive() {
    return this.getStringAttribute('string_to_receive');
  }
  public set stringToReceive(value: string) {
    this._stringToReceive = value;
  }
  public resetStringToReceive() {
    this._stringToReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringToReceiveInput() {
    return this._stringToReceive;
  }

  // string_to_send - computed: true, optional: true, required: false
  private _stringToSend?: string; 
  public get stringToSend() {
    return this.getStringAttribute('string_to_send');
  }
  public set stringToSend(value: string) {
    this._stringToSend = value;
  }
  public resetStringToSend() {
    this._stringToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringToSendInput() {
    return this._stringToSend;
  }

  // verification_policy - computed: true, optional: true, required: false
  private _verificationPolicy?: string; 
  public get verificationPolicy() {
    return this.getStringAttribute('verification_policy');
  }
  public set verificationPolicy(value: string) {
    this._verificationPolicy = value;
  }
  public resetVerificationPolicy() {
    this._verificationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationPolicyInput() {
    return this._verificationPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_sites: cdktf.listMapper(cdktf.numberToTerraform, false)(this._checkSites),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      interval_policy: cdktf.stringToTerraform(this._intervalPolicy),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      notification_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notificationGroups),
      notification_report_timeout: cdktf.numberToTerraform(this._notificationReportTimeout),
      port: cdktf.numberToTerraform(this._port),
      string_to_receive: cdktf.stringToTerraform(this._stringToReceive),
      string_to_send: cdktf.stringToTerraform(this._stringToSend),
      verification_policy: cdktf.stringToTerraform(this._verificationPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_sites: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._checkSites),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_policy: {
        value: cdktf.stringToHclTerraform(this._intervalPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      notification_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._notificationGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      notification_report_timeout: {
        value: cdktf.numberToHclTerraform(this._notificationReportTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      string_to_receive: {
        value: cdktf.stringToHclTerraform(this._stringToReceive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_to_send: {
        value: cdktf.stringToHclTerraform(this._stringToSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_policy: {
        value: cdktf.stringToHclTerraform(this._verificationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
