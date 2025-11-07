// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsTraceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#agents DnsTrace#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#alert_rules DnsTrace#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#alerts_enabled DnsTrace#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#description DnsTrace#description}
  */
  readonly description?: string;
  /**
  * Domain class used by this test. 'in' stands for Internet, while 'ch' stands for Chaos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#dns_query_class DnsTrace#dns_query_class}
  */
  readonly dnsQueryClass?: string;
  /**
  * [udp or tcp] The DNS transport protocol used for DNS requests. Defaults to 'udp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#dns_transport_protocol DnsTrace#dns_transport_protocol}
  */
  readonly dnsTransportProtocol?: string;
  /**
  * See notes	target record for test, suffixed by record type (ie, www.thousandeyes.com CNAME). If no record type is specified, the test will default to an ANY record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#domain DnsTrace#domain}
  */
  readonly domain: string;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#enabled DnsTrace#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#id DnsTrace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#interval DnsTrace#interval}
  */
  readonly interval: number;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#randomized_start_time DnsTrace#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#shared_with_accounts DnsTrace#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#test_name DnsTrace#test_name}
  */
  readonly testName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace thousandeyes_dns_trace}
*/
export class DnsTrace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_dns_trace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsTrace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsTrace to import
  * @param importFromId The id of the existing DnsTrace that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsTrace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_dns_trace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/dns_trace thousandeyes_dns_trace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsTraceConfig
  */
  public constructor(scope: Construct, id: string, config: DnsTraceConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_dns_trace',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._alertRules = config.alertRules;
    this._alertsEnabled = config.alertsEnabled;
    this._description = config.description;
    this._dnsQueryClass = config.dnsQueryClass;
    this._dnsTransportProtocol = config.dnsTransportProtocol;
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interval = config.interval;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._testName = config.testName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: false, required: true
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // alert_rules - computed: false, optional: true, required: false
  private _alertRules?: string[]; 
  public get alertRules() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_rules'));
  }
  public set alertRules(value: string[]) {
    this._alertRules = value;
  }
  public resetAlertRules() {
    this._alertRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRulesInput() {
    return this._alertRules;
  }

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
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

  // dns_query_class - computed: true, optional: true, required: false
  private _dnsQueryClass?: string; 
  public get dnsQueryClass() {
    return this.getStringAttribute('dns_query_class');
  }
  public set dnsQueryClass(value: string) {
    this._dnsQueryClass = value;
  }
  public resetDnsQueryClass() {
    this._dnsQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassInput() {
    return this._dnsQueryClass;
  }

  // dns_transport_protocol - computed: false, optional: true, required: false
  private _dnsTransportProtocol?: string; 
  public get dnsTransportProtocol() {
    return this.getStringAttribute('dns_transport_protocol');
  }
  public set dnsTransportProtocol(value: string) {
    this._dnsTransportProtocol = value;
  }
  public resetDnsTransportProtocol() {
    this._dnsTransportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTransportProtocolInput() {
    return this._dnsTransportProtocol;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // live_share - computed: true, optional: false, required: false
  public get liveShare() {
    return this.getBooleanAttribute('live_share');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // randomized_start_time - computed: false, optional: true, required: false
  private _randomizedStartTime?: boolean | cdktf.IResolvable; 
  public get randomizedStartTime() {
    return this.getBooleanAttribute('randomized_start_time');
  }
  public set randomizedStartTime(value: boolean | cdktf.IResolvable) {
    this._randomizedStartTime = value;
  }
  public resetRandomizedStartTime() {
    this._randomizedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizedStartTimeInput() {
    return this._randomizedStartTime;
  }

  // saved_event - computed: true, optional: false, required: false
  public get savedEvent() {
    return this.getBooleanAttribute('saved_event');
  }

  // shared_with_accounts - computed: false, optional: true, required: false
  private _sharedWithAccounts?: string[]; 
  public get sharedWithAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_with_accounts'));
  }
  public set sharedWithAccounts(value: string[]) {
    this._sharedWithAccounts = value;
  }
  public resetSharedWithAccounts() {
    this._sharedWithAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithAccountsInput() {
    return this._sharedWithAccounts;
  }

  // test_id - computed: true, optional: false, required: false
  public get testId() {
    return this.getStringAttribute('test_id');
  }

  // test_name - computed: false, optional: true, required: false
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  public resetTestName() {
    this._testName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      alert_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRules),
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      description: cdktf.stringToTerraform(this._description),
      dns_query_class: cdktf.stringToTerraform(this._dnsQueryClass),
      dns_transport_protocol: cdktf.stringToTerraform(this._dnsTransportProtocol),
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      test_name: cdktf.stringToTerraform(this._testName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alerts_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_query_class: {
        value: cdktf.stringToHclTerraform(this._dnsQueryClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_transport_protocol: {
        value: cdktf.stringToHclTerraform(this._dnsTransportProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      randomized_start_time: {
        value: cdktf.booleanToHclTerraform(this._randomizedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_with_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedWithAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
