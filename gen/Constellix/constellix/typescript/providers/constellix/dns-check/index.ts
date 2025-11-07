// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#check_sites DnsCheck#check_sites}
  */
  readonly checkSites: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#expected_response DnsCheck#expected_response}
  */
  readonly expectedResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#fqdn DnsCheck#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#id DnsCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#interval DnsCheck#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#interval_policy DnsCheck#interval_policy}
  */
  readonly intervalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#name DnsCheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#notification_groups DnsCheck#notification_groups}
  */
  readonly notificationGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#notification_report_timeout DnsCheck#notification_report_timeout}
  */
  readonly notificationReportTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#resolver DnsCheck#resolver}
  */
  readonly resolver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#verification_policy DnsCheck#verification_policy}
  */
  readonly verificationPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check constellix_dns_check}
*/
export class DnsCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_dns_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsCheck to import
  * @param importFromId The id of the existing DnsCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_dns_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/dns_check constellix_dns_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DnsCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_dns_check',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
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
    this._expectedResponse = config.expectedResponse;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalPolicy = config.intervalPolicy;
    this._name = config.name;
    this._notificationGroups = config.notificationGroups;
    this._notificationReportTimeout = config.notificationReportTimeout;
    this._resolver = config.resolver;
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

  // expected_response - computed: true, optional: true, required: false
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  public resetExpectedResponse() {
    this._expectedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // resolver - computed: false, optional: false, required: true
  private _resolver?: string; 
  public get resolver() {
    return this.getStringAttribute('resolver');
  }
  public set resolver(value: string) {
    this._resolver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverInput() {
    return this._resolver;
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
      expected_response: cdktf.stringToTerraform(this._expectedResponse),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      interval_policy: cdktf.stringToTerraform(this._intervalPolicy),
      name: cdktf.stringToTerraform(this._name),
      notification_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notificationGroups),
      notification_report_timeout: cdktf.numberToTerraform(this._notificationReportTimeout),
      resolver: cdktf.stringToTerraform(this._resolver),
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
      expected_response: {
        value: cdktf.stringToHclTerraform(this._expectedResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      resolver: {
        value: cdktf.stringToHclTerraform(this._resolver),
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
