// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailoverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#auto_failover Failover#auto_failover}
  */
  readonly autoFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#contact_list Failover#contact_list}
  */
  readonly contactList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#dns_fqdn Failover#dns_fqdn}
  */
  readonly dnsFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#dns_timeout Failover#dns_timeout}
  */
  readonly dnsTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#failover Failover#failover}
  */
  readonly failover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#http_file Failover#http_file}
  */
  readonly httpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#http_fqdn Failover#http_fqdn}
  */
  readonly httpFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#http_query_string Failover#http_query_string}
  */
  readonly httpQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#id Failover#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#ip1 Failover#ip1}
  */
  readonly ip1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#ip2 Failover#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#ip3 Failover#ip3}
  */
  readonly ip3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#ip4 Failover#ip4}
  */
  readonly ip4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#ip5 Failover#ip5}
  */
  readonly ip5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#max_emails Failover#max_emails}
  */
  readonly maxEmails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#monitor Failover#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#port Failover#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#protocol_id Failover#protocol_id}
  */
  readonly protocolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#record_id Failover#record_id}
  */
  readonly recordId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#send_string Failover#send_string}
  */
  readonly sendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#sensitivity Failover#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#system_description Failover#system_description}
  */
  readonly systemDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#timeout Failover#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover dme_failover}
*/
export class Failover extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_failover";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Failover resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Failover to import
  * @param importFromId The id of the existing Failover that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Failover to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_failover", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/failover dme_failover} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverConfig
  */
  public constructor(scope: Construct, id: string, config: FailoverConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_failover',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoFailover = config.autoFailover;
    this._contactList = config.contactList;
    this._dnsFqdn = config.dnsFqdn;
    this._dnsTimeout = config.dnsTimeout;
    this._failover = config.failover;
    this._httpFile = config.httpFile;
    this._httpFqdn = config.httpFqdn;
    this._httpQueryString = config.httpQueryString;
    this._id = config.id;
    this._ip1 = config.ip1;
    this._ip2 = config.ip2;
    this._ip3 = config.ip3;
    this._ip4 = config.ip4;
    this._ip5 = config.ip5;
    this._maxEmails = config.maxEmails;
    this._monitor = config.monitor;
    this._port = config.port;
    this._protocolId = config.protocolId;
    this._recordId = config.recordId;
    this._sendString = config.sendString;
    this._sensitivity = config.sensitivity;
    this._systemDescription = config.systemDescription;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_failover - computed: true, optional: true, required: false
  private _autoFailover?: string; 
  public get autoFailover() {
    return this.getStringAttribute('auto_failover');
  }
  public set autoFailover(value: string) {
    this._autoFailover = value;
  }
  public resetAutoFailover() {
    this._autoFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFailoverInput() {
    return this._autoFailover;
  }

  // contact_list - computed: true, optional: true, required: false
  private _contactList?: string; 
  public get contactList() {
    return this.getStringAttribute('contact_list');
  }
  public set contactList(value: string) {
    this._contactList = value;
  }
  public resetContactList() {
    this._contactList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListInput() {
    return this._contactList;
  }

  // dns_fqdn - computed: true, optional: true, required: false
  private _dnsFqdn?: string; 
  public get dnsFqdn() {
    return this.getStringAttribute('dns_fqdn');
  }
  public set dnsFqdn(value: string) {
    this._dnsFqdn = value;
  }
  public resetDnsFqdn() {
    this._dnsFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnInput() {
    return this._dnsFqdn;
  }

  // dns_timeout - computed: true, optional: true, required: false
  private _dnsTimeout?: string; 
  public get dnsTimeout() {
    return this.getStringAttribute('dns_timeout');
  }
  public set dnsTimeout(value: string) {
    this._dnsTimeout = value;
  }
  public resetDnsTimeout() {
    this._dnsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTimeoutInput() {
    return this._dnsTimeout;
  }

  // failover - computed: true, optional: true, required: false
  private _failover?: string; 
  public get failover() {
    return this.getStringAttribute('failover');
  }
  public set failover(value: string) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // http_file - computed: true, optional: true, required: false
  private _httpFile?: string; 
  public get httpFile() {
    return this.getStringAttribute('http_file');
  }
  public set httpFile(value: string) {
    this._httpFile = value;
  }
  public resetHttpFile() {
    this._httpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFileInput() {
    return this._httpFile;
  }

  // http_fqdn - computed: true, optional: true, required: false
  private _httpFqdn?: string; 
  public get httpFqdn() {
    return this.getStringAttribute('http_fqdn');
  }
  public set httpFqdn(value: string) {
    this._httpFqdn = value;
  }
  public resetHttpFqdn() {
    this._httpFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFqdnInput() {
    return this._httpFqdn;
  }

  // http_query_string - computed: true, optional: true, required: false
  private _httpQueryString?: string; 
  public get httpQueryString() {
    return this.getStringAttribute('http_query_string');
  }
  public set httpQueryString(value: string) {
    this._httpQueryString = value;
  }
  public resetHttpQueryString() {
    this._httpQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryStringInput() {
    return this._httpQueryString;
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

  // ip1 - computed: true, optional: true, required: false
  private _ip1?: string; 
  public get ip1() {
    return this.getStringAttribute('ip1');
  }
  public set ip1(value: string) {
    this._ip1 = value;
  }
  public resetIp1() {
    this._ip1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip1Input() {
    return this._ip1;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // ip3 - computed: true, optional: true, required: false
  private _ip3?: string; 
  public get ip3() {
    return this.getStringAttribute('ip3');
  }
  public set ip3(value: string) {
    this._ip3 = value;
  }
  public resetIp3() {
    this._ip3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip3Input() {
    return this._ip3;
  }

  // ip4 - computed: true, optional: true, required: false
  private _ip4?: string; 
  public get ip4() {
    return this.getStringAttribute('ip4');
  }
  public set ip4(value: string) {
    this._ip4 = value;
  }
  public resetIp4() {
    this._ip4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4Input() {
    return this._ip4;
  }

  // ip5 - computed: true, optional: true, required: false
  private _ip5?: string; 
  public get ip5() {
    return this.getStringAttribute('ip5');
  }
  public set ip5(value: string) {
    this._ip5 = value;
  }
  public resetIp5() {
    this._ip5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip5Input() {
    return this._ip5;
  }

  // max_emails - computed: true, optional: true, required: false
  private _maxEmails?: string; 
  public get maxEmails() {
    return this.getStringAttribute('max_emails');
  }
  public set maxEmails(value: string) {
    this._maxEmails = value;
  }
  public resetMaxEmails() {
    this._maxEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmailsInput() {
    return this._maxEmails;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_id - computed: true, optional: true, required: false
  private _protocolId?: string; 
  public get protocolId() {
    return this.getStringAttribute('protocol_id');
  }
  public set protocolId(value: string) {
    this._protocolId = value;
  }
  public resetProtocolId() {
    this._protocolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIdInput() {
    return this._protocolId;
  }

  // record_id - computed: false, optional: false, required: true
  private _recordId?: string; 
  public get recordId() {
    return this.getStringAttribute('record_id');
  }
  public set recordId(value: string) {
    this._recordId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
  }

  // send_string - computed: true, optional: true, required: false
  private _sendString?: string; 
  public get sendString() {
    return this.getStringAttribute('send_string');
  }
  public set sendString(value: string) {
    this._sendString = value;
  }
  public resetSendString() {
    this._sendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendStringInput() {
    return this._sendString;
  }

  // sensitivity - computed: false, optional: false, required: true
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // system_description - computed: true, optional: true, required: false
  private _systemDescription?: string; 
  public get systemDescription() {
    return this.getStringAttribute('system_description');
  }
  public set systemDescription(value: string) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_failover: cdktf.stringToTerraform(this._autoFailover),
      contact_list: cdktf.stringToTerraform(this._contactList),
      dns_fqdn: cdktf.stringToTerraform(this._dnsFqdn),
      dns_timeout: cdktf.stringToTerraform(this._dnsTimeout),
      failover: cdktf.stringToTerraform(this._failover),
      http_file: cdktf.stringToTerraform(this._httpFile),
      http_fqdn: cdktf.stringToTerraform(this._httpFqdn),
      http_query_string: cdktf.stringToTerraform(this._httpQueryString),
      id: cdktf.stringToTerraform(this._id),
      ip1: cdktf.stringToTerraform(this._ip1),
      ip2: cdktf.stringToTerraform(this._ip2),
      ip3: cdktf.stringToTerraform(this._ip3),
      ip4: cdktf.stringToTerraform(this._ip4),
      ip5: cdktf.stringToTerraform(this._ip5),
      max_emails: cdktf.stringToTerraform(this._maxEmails),
      monitor: cdktf.stringToTerraform(this._monitor),
      port: cdktf.stringToTerraform(this._port),
      protocol_id: cdktf.stringToTerraform(this._protocolId),
      record_id: cdktf.stringToTerraform(this._recordId),
      send_string: cdktf.stringToTerraform(this._sendString),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      system_description: cdktf.stringToTerraform(this._systemDescription),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_failover: {
        value: cdktf.stringToHclTerraform(this._autoFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_list: {
        value: cdktf.stringToHclTerraform(this._contactList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_fqdn: {
        value: cdktf.stringToHclTerraform(this._dnsFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_timeout: {
        value: cdktf.stringToHclTerraform(this._dnsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover: {
        value: cdktf.stringToHclTerraform(this._failover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_file: {
        value: cdktf.stringToHclTerraform(this._httpFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_fqdn: {
        value: cdktf.stringToHclTerraform(this._httpFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_query_string: {
        value: cdktf.stringToHclTerraform(this._httpQueryString),
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
      ip1: {
        value: cdktf.stringToHclTerraform(this._ip1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip2: {
        value: cdktf.stringToHclTerraform(this._ip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip3: {
        value: cdktf.stringToHclTerraform(this._ip3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip4: {
        value: cdktf.stringToHclTerraform(this._ip4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip5: {
        value: cdktf.stringToHclTerraform(this._ip5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_emails: {
        value: cdktf.stringToHclTerraform(this._maxEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_id: {
        value: cdktf.stringToHclTerraform(this._protocolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_id: {
        value: cdktf.stringToHclTerraform(this._recordId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_string: {
        value: cdktf.stringToHclTerraform(this._sendString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_description: {
        value: cdktf.stringToHclTerraform(this._systemDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
