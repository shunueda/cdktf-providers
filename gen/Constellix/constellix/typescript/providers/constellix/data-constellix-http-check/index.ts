// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConstellixHttpCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#check_sites DataConstellixHttpCheck#check_sites}
  */
  readonly checkSites?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#expected_status_code DataConstellixHttpCheck#expected_status_code}
  */
  readonly expectedStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#fqdn DataConstellixHttpCheck#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#host DataConstellixHttpCheck#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#id DataConstellixHttpCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#interval DataConstellixHttpCheck#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#interval_policy DataConstellixHttpCheck#interval_policy}
  */
  readonly intervalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#ip_version DataConstellixHttpCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#name DataConstellixHttpCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#notification_groups DataConstellixHttpCheck#notification_groups}
  */
  readonly notificationGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#notification_report_timeout DataConstellixHttpCheck#notification_report_timeout}
  */
  readonly notificationReportTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#path DataConstellixHttpCheck#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#port DataConstellixHttpCheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#protocol_type DataConstellixHttpCheck#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#search_string DataConstellixHttpCheck#search_string}
  */
  readonly searchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#verification_policy DataConstellixHttpCheck#verification_policy}
  */
  readonly verificationPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check constellix_http_check}
*/
export class DataConstellixHttpCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_http_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConstellixHttpCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConstellixHttpCheck to import
  * @param importFromId The id of the existing DataConstellixHttpCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConstellixHttpCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_http_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/http_check constellix_http_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConstellixHttpCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataConstellixHttpCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_http_check',
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
    this._expectedStatusCode = config.expectedStatusCode;
    this._fqdn = config.fqdn;
    this._host = config.host;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalPolicy = config.intervalPolicy;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._notificationGroups = config.notificationGroups;
    this._notificationReportTimeout = config.notificationReportTimeout;
    this._path = config.path;
    this._port = config.port;
    this._protocolType = config.protocolType;
    this._searchString = config.searchString;
    this._verificationPolicy = config.verificationPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_sites - computed: true, optional: true, required: false
  private _checkSites?: number[]; 
  public get checkSites() {
    return this.getNumberListAttribute('check_sites');
  }
  public set checkSites(value: number[]) {
    this._checkSites = value;
  }
  public resetCheckSites() {
    this._checkSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSitesInput() {
    return this._checkSites;
  }

  // expected_status_code - computed: true, optional: true, required: false
  private _expectedStatusCode?: number; 
  public get expectedStatusCode() {
    return this.getNumberAttribute('expected_status_code');
  }
  public set expectedStatusCode(value: number) {
    this._expectedStatusCode = value;
  }
  public resetExpectedStatusCode() {
    this._expectedStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodeInput() {
    return this._expectedStatusCode;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // search_string - computed: true, optional: true, required: false
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  public resetSearchString() {
    this._searchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
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
      expected_status_code: cdktf.numberToTerraform(this._expectedStatusCode),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      interval_policy: cdktf.stringToTerraform(this._intervalPolicy),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      notification_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notificationGroups),
      notification_report_timeout: cdktf.numberToTerraform(this._notificationReportTimeout),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      search_string: cdktf.stringToTerraform(this._searchString),
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
      expected_status_code: {
        value: cdktf.numberToHclTerraform(this._expectedStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_string: {
        value: cdktf.stringToHclTerraform(this._searchString),
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
