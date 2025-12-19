// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodHttpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * HTTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http HealthMonitorMethodHttpA#http}
  */
  readonly http?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_expect HealthMonitorMethodHttpA#http_expect}
  */
  readonly httpExpect?: number;
  /**
  * Specify "Host:" header used in request (enclose IPv6 address in [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_host HealthMonitorMethodHttpA#http_host}
  */
  readonly httpHost?: string;
  /**
  * Http Kerberos Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_auth HealthMonitorMethodHttpA#http_kerberos_auth}
  */
  readonly httpKerberosAuth?: number;
  /**
  * Specify realm of Kerberos server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_realm HealthMonitorMethodHttpA#http_kerberos_realm}
  */
  readonly httpKerberosRealm?: string;
  /**
  * Specify response code for maintenance (Format is xx,xx-xx (xx between [100, 899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_maintenance_code HealthMonitorMethodHttpA#http_maintenance_code}
  */
  readonly httpMaintenanceCode?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_password HealthMonitorMethodHttpA#http_password}
  */
  readonly httpPassword?: number;
  /**
  * Specify password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_password_string HealthMonitorMethodHttpA#http_password_string}
  */
  readonly httpPasswordString?: string;
  /**
  * Specify HTTP Port (Specify port number (default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_port HealthMonitorMethodHttpA#http_port}
  */
  readonly httpPort?: number;
  /**
  * Specify the HTTP post data (Input post data here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_postdata HealthMonitorMethodHttpA#http_postdata}
  */
  readonly httpPostdata?: string;
  /**
  * Specify the HTTP post data (Input post data file name here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_postfile HealthMonitorMethodHttpA#http_postfile}
  */
  readonly httpPostfile?: string;
  /**
  * Specify response code range (e.g. 200,400-430) (Format is xx,xx-xx (xx between [100, 899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_response_code HealthMonitorMethodHttpA#http_response_code}
  */
  readonly httpResponseCode?: string;
  /**
  * Specify text expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_text HealthMonitorMethodHttpA#http_text}
  */
  readonly httpText?: string;
  /**
  * Specify URL string, default is GET /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_url HealthMonitorMethodHttpA#http_url}
  */
  readonly httpUrl?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_username HealthMonitorMethodHttpA#http_username}
  */
  readonly httpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#id HealthMonitorMethodHttpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#maintenance HealthMonitorMethodHttpA#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#maintenance_text HealthMonitorMethodHttpA#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * Specify Regex text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#maintenance_text_regex HealthMonitorMethodHttpA#maintenance_text_regex}
  */
  readonly maintenanceTextRegex?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#monitor_name HealthMonitorMethodHttpA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#post_path HealthMonitorMethodHttpA#post_path}
  */
  readonly postPath?: string;
  /**
  * 'postdata': Specify the HTTP post data; 'postfile': Specify the HTTP post data;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#post_type HealthMonitorMethodHttpA#post_type}
  */
  readonly postType?: string;
  /**
  * Specify response code range with Regex (code with Regex, such as [2-5][0-9][0-9])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#response_code_regex HealthMonitorMethodHttpA#response_code_regex}
  */
  readonly responseCodeRegex?: string;
  /**
  * Specify text expected  with Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#text_regex HealthMonitorMethodHttpA#text_regex}
  */
  readonly textRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#url_path HealthMonitorMethodHttpA#url_path}
  */
  readonly urlPath?: string;
  /**
  * 'GET': HTTP GET method; 'POST': HTTP POST method; 'HEAD': HTTP HEAD method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#url_type HealthMonitorMethodHttpA#url_type}
  */
  readonly urlType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#uuid HealthMonitorMethodHttpA#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify HTTP version2 (Specify http version 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#version2 HealthMonitorMethodHttpA#version2}
  */
  readonly version2?: number;
  /**
  * http_kerberos_kdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_kdc HealthMonitorMethodHttpA#http_kerberos_kdc}
  */
  readonly httpKerberosKdc?: HealthMonitorMethodHttpHttpKerberosKdcA;
}
export interface HealthMonitorMethodHttpHttpKerberosKdcA {
  /**
  * Kdc's hostname(length:1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_hostip HealthMonitorMethodHttpA#http_kerberos_hostip}
  */
  readonly httpKerberosHostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_hostipv6 HealthMonitorMethodHttpA#http_kerberos_hostipv6}
  */
  readonly httpKerberosHostipv6?: string;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_port HealthMonitorMethodHttpA#http_kerberos_port}
  */
  readonly httpKerberosPort?: number;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#http_kerberos_portv6 HealthMonitorMethodHttpA#http_kerberos_portv6}
  */
  readonly httpKerberosPortv6?: number;
}

export function healthMonitorMethodHttpHttpKerberosKdcAToTerraform(struct?: HealthMonitorMethodHttpHttpKerberosKdcAOutputReference | HealthMonitorMethodHttpHttpKerberosKdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_kerberos_hostip: cdktf.stringToTerraform(struct!.httpKerberosHostip),
    http_kerberos_hostipv6: cdktf.stringToTerraform(struct!.httpKerberosHostipv6),
    http_kerberos_port: cdktf.numberToTerraform(struct!.httpKerberosPort),
    http_kerberos_portv6: cdktf.numberToTerraform(struct!.httpKerberosPortv6),
  }
}


export function healthMonitorMethodHttpHttpKerberosKdcAToHclTerraform(struct?: HealthMonitorMethodHttpHttpKerberosKdcAOutputReference | HealthMonitorMethodHttpHttpKerberosKdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_kerberos_hostip: {
      value: cdktf.stringToHclTerraform(struct!.httpKerberosHostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_kerberos_hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.httpKerberosHostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.httpKerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_kerberos_portv6: {
      value: cdktf.numberToHclTerraform(struct!.httpKerberosPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpHttpKerberosKdcAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttpHttpKerberosKdcA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpKerberosHostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosHostip = this._httpKerberosHostip;
    }
    if (this._httpKerberosHostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosHostipv6 = this._httpKerberosHostipv6;
    }
    if (this._httpKerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosPort = this._httpKerberosPort;
    }
    if (this._httpKerberosPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosPortv6 = this._httpKerberosPortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttpHttpKerberosKdcA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpKerberosHostip = undefined;
      this._httpKerberosHostipv6 = undefined;
      this._httpKerberosPort = undefined;
      this._httpKerberosPortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpKerberosHostip = value.httpKerberosHostip;
      this._httpKerberosHostipv6 = value.httpKerberosHostipv6;
      this._httpKerberosPort = value.httpKerberosPort;
      this._httpKerberosPortv6 = value.httpKerberosPortv6;
    }
  }

  // http_kerberos_hostip - computed: false, optional: true, required: false
  private _httpKerberosHostip?: string; 
  public get httpKerberosHostip() {
    return this.getStringAttribute('http_kerberos_hostip');
  }
  public set httpKerberosHostip(value: string) {
    this._httpKerberosHostip = value;
  }
  public resetHttpKerberosHostip() {
    this._httpKerberosHostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosHostipInput() {
    return this._httpKerberosHostip;
  }

  // http_kerberos_hostipv6 - computed: false, optional: true, required: false
  private _httpKerberosHostipv6?: string; 
  public get httpKerberosHostipv6() {
    return this.getStringAttribute('http_kerberos_hostipv6');
  }
  public set httpKerberosHostipv6(value: string) {
    this._httpKerberosHostipv6 = value;
  }
  public resetHttpKerberosHostipv6() {
    this._httpKerberosHostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosHostipv6Input() {
    return this._httpKerberosHostipv6;
  }

  // http_kerberos_port - computed: false, optional: true, required: false
  private _httpKerberosPort?: number; 
  public get httpKerberosPort() {
    return this.getNumberAttribute('http_kerberos_port');
  }
  public set httpKerberosPort(value: number) {
    this._httpKerberosPort = value;
  }
  public resetHttpKerberosPort() {
    this._httpKerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosPortInput() {
    return this._httpKerberosPort;
  }

  // http_kerberos_portv6 - computed: false, optional: true, required: false
  private _httpKerberosPortv6?: number; 
  public get httpKerberosPortv6() {
    return this.getNumberAttribute('http_kerberos_portv6');
  }
  public set httpKerberosPortv6(value: number) {
    this._httpKerberosPortv6 = value;
  }
  public resetHttpKerberosPortv6() {
    this._httpKerberosPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosPortv6Input() {
    return this._httpKerberosPortv6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http thunder_health_monitor_method_http}
*/
export class HealthMonitorMethodHttpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodHttpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodHttpA to import
  * @param importFromId The id of the existing HealthMonitorMethodHttpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodHttpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_http thunder_health_monitor_method_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodHttpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodHttpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_http',
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
    this._http = config.http;
    this._httpExpect = config.httpExpect;
    this._httpHost = config.httpHost;
    this._httpKerberosAuth = config.httpKerberosAuth;
    this._httpKerberosRealm = config.httpKerberosRealm;
    this._httpMaintenanceCode = config.httpMaintenanceCode;
    this._httpPassword = config.httpPassword;
    this._httpPasswordString = config.httpPasswordString;
    this._httpPort = config.httpPort;
    this._httpPostdata = config.httpPostdata;
    this._httpPostfile = config.httpPostfile;
    this._httpResponseCode = config.httpResponseCode;
    this._httpText = config.httpText;
    this._httpUrl = config.httpUrl;
    this._httpUsername = config.httpUsername;
    this._id = config.id;
    this._maintenance = config.maintenance;
    this._maintenanceText = config.maintenanceText;
    this._maintenanceTextRegex = config.maintenanceTextRegex;
    this._monitorName = config.monitorName;
    this._postPath = config.postPath;
    this._postType = config.postType;
    this._responseCodeRegex = config.responseCodeRegex;
    this._textRegex = config.textRegex;
    this._urlPath = config.urlPath;
    this._urlType = config.urlType;
    this._uuid = config.uuid;
    this._version2 = config.version2;
    this._httpKerberosKdc.internalValue = config.httpKerberosKdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // http_expect - computed: false, optional: true, required: false
  private _httpExpect?: number; 
  public get httpExpect() {
    return this.getNumberAttribute('http_expect');
  }
  public set httpExpect(value: number) {
    this._httpExpect = value;
  }
  public resetHttpExpect() {
    this._httpExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExpectInput() {
    return this._httpExpect;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // http_kerberos_auth - computed: false, optional: true, required: false
  private _httpKerberosAuth?: number; 
  public get httpKerberosAuth() {
    return this.getNumberAttribute('http_kerberos_auth');
  }
  public set httpKerberosAuth(value: number) {
    this._httpKerberosAuth = value;
  }
  public resetHttpKerberosAuth() {
    this._httpKerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosAuthInput() {
    return this._httpKerberosAuth;
  }

  // http_kerberos_realm - computed: false, optional: true, required: false
  private _httpKerberosRealm?: string; 
  public get httpKerberosRealm() {
    return this.getStringAttribute('http_kerberos_realm');
  }
  public set httpKerberosRealm(value: string) {
    this._httpKerberosRealm = value;
  }
  public resetHttpKerberosRealm() {
    this._httpKerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosRealmInput() {
    return this._httpKerberosRealm;
  }

  // http_maintenance_code - computed: false, optional: true, required: false
  private _httpMaintenanceCode?: string; 
  public get httpMaintenanceCode() {
    return this.getStringAttribute('http_maintenance_code');
  }
  public set httpMaintenanceCode(value: string) {
    this._httpMaintenanceCode = value;
  }
  public resetHttpMaintenanceCode() {
    this._httpMaintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaintenanceCodeInput() {
    return this._httpMaintenanceCode;
  }

  // http_password - computed: false, optional: true, required: false
  private _httpPassword?: number; 
  public get httpPassword() {
    return this.getNumberAttribute('http_password');
  }
  public set httpPassword(value: number) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_password_string - computed: false, optional: true, required: false
  private _httpPasswordString?: string; 
  public get httpPasswordString() {
    return this.getStringAttribute('http_password_string');
  }
  public set httpPasswordString(value: string) {
    this._httpPasswordString = value;
  }
  public resetHttpPasswordString() {
    this._httpPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordStringInput() {
    return this._httpPasswordString;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_postdata - computed: false, optional: true, required: false
  private _httpPostdata?: string; 
  public get httpPostdata() {
    return this.getStringAttribute('http_postdata');
  }
  public set httpPostdata(value: string) {
    this._httpPostdata = value;
  }
  public resetHttpPostdata() {
    this._httpPostdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostdataInput() {
    return this._httpPostdata;
  }

  // http_postfile - computed: false, optional: true, required: false
  private _httpPostfile?: string; 
  public get httpPostfile() {
    return this.getStringAttribute('http_postfile');
  }
  public set httpPostfile(value: string) {
    this._httpPostfile = value;
  }
  public resetHttpPostfile() {
    this._httpPostfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostfileInput() {
    return this._httpPostfile;
  }

  // http_response_code - computed: false, optional: true, required: false
  private _httpResponseCode?: string; 
  public get httpResponseCode() {
    return this.getStringAttribute('http_response_code');
  }
  public set httpResponseCode(value: string) {
    this._httpResponseCode = value;
  }
  public resetHttpResponseCode() {
    this._httpResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // http_text - computed: false, optional: true, required: false
  private _httpText?: string; 
  public get httpText() {
    return this.getStringAttribute('http_text');
  }
  public set httpText(value: string) {
    this._httpText = value;
  }
  public resetHttpText() {
    this._httpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTextInput() {
    return this._httpText;
  }

  // http_url - computed: false, optional: true, required: false
  private _httpUrl?: number; 
  public get httpUrl() {
    return this.getNumberAttribute('http_url');
  }
  public set httpUrl(value: number) {
    this._httpUrl = value;
  }
  public resetHttpUrl() {
    this._httpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
  }

  // http_username - computed: false, optional: true, required: false
  private _httpUsername?: string; 
  public get httpUsername() {
    return this.getStringAttribute('http_username');
  }
  public set httpUsername(value: string) {
    this._httpUsername = value;
  }
  public resetHttpUsername() {
    this._httpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUsernameInput() {
    return this._httpUsername;
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

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: number; 
  public get maintenance() {
    return this.getNumberAttribute('maintenance');
  }
  public set maintenance(value: number) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // maintenance_text - computed: false, optional: true, required: false
  private _maintenanceText?: string; 
  public get maintenanceText() {
    return this.getStringAttribute('maintenance_text');
  }
  public set maintenanceText(value: string) {
    this._maintenanceText = value;
  }
  public resetMaintenanceText() {
    this._maintenanceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextInput() {
    return this._maintenanceText;
  }

  // maintenance_text_regex - computed: false, optional: true, required: false
  private _maintenanceTextRegex?: string; 
  public get maintenanceTextRegex() {
    return this.getStringAttribute('maintenance_text_regex');
  }
  public set maintenanceTextRegex(value: string) {
    this._maintenanceTextRegex = value;
  }
  public resetMaintenanceTextRegex() {
    this._maintenanceTextRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextRegexInput() {
    return this._maintenanceTextRegex;
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

  // post_path - computed: false, optional: true, required: false
  private _postPath?: string; 
  public get postPath() {
    return this.getStringAttribute('post_path');
  }
  public set postPath(value: string) {
    this._postPath = value;
  }
  public resetPostPath() {
    this._postPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPathInput() {
    return this._postPath;
  }

  // post_type - computed: false, optional: true, required: false
  private _postType?: string; 
  public get postType() {
    return this.getStringAttribute('post_type');
  }
  public set postType(value: string) {
    this._postType = value;
  }
  public resetPostType() {
    this._postType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTypeInput() {
    return this._postType;
  }

  // response_code_regex - computed: false, optional: true, required: false
  private _responseCodeRegex?: string; 
  public get responseCodeRegex() {
    return this.getStringAttribute('response_code_regex');
  }
  public set responseCodeRegex(value: string) {
    this._responseCodeRegex = value;
  }
  public resetResponseCodeRegex() {
    this._responseCodeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRegexInput() {
    return this._responseCodeRegex;
  }

  // text_regex - computed: false, optional: true, required: false
  private _textRegex?: string; 
  public get textRegex() {
    return this.getStringAttribute('text_regex');
  }
  public set textRegex(value: string) {
    this._textRegex = value;
  }
  public resetTextRegex() {
    this._textRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textRegexInput() {
    return this._textRegex;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // url_type - computed: false, optional: true, required: false
  private _urlType?: string; 
  public get urlType() {
    return this.getStringAttribute('url_type');
  }
  public set urlType(value: string) {
    this._urlType = value;
  }
  public resetUrlType() {
    this._urlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTypeInput() {
    return this._urlType;
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

  // version2 - computed: false, optional: true, required: false
  private _version2?: number; 
  public get version2() {
    return this.getNumberAttribute('version2');
  }
  public set version2(value: number) {
    this._version2 = value;
  }
  public resetVersion2() {
    this._version2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get version2Input() {
    return this._version2;
  }

  // http_kerberos_kdc - computed: false, optional: true, required: false
  private _httpKerberosKdc = new HealthMonitorMethodHttpHttpKerberosKdcAOutputReference(this, "http_kerberos_kdc");
  public get httpKerberosKdc() {
    return this._httpKerberosKdc;
  }
  public putHttpKerberosKdc(value: HealthMonitorMethodHttpHttpKerberosKdcA) {
    this._httpKerberosKdc.internalValue = value;
  }
  public resetHttpKerberosKdc() {
    this._httpKerberosKdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosKdcInput() {
    return this._httpKerberosKdc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http: cdktf.numberToTerraform(this._http),
      http_expect: cdktf.numberToTerraform(this._httpExpect),
      http_host: cdktf.stringToTerraform(this._httpHost),
      http_kerberos_auth: cdktf.numberToTerraform(this._httpKerberosAuth),
      http_kerberos_realm: cdktf.stringToTerraform(this._httpKerberosRealm),
      http_maintenance_code: cdktf.stringToTerraform(this._httpMaintenanceCode),
      http_password: cdktf.numberToTerraform(this._httpPassword),
      http_password_string: cdktf.stringToTerraform(this._httpPasswordString),
      http_port: cdktf.numberToTerraform(this._httpPort),
      http_postdata: cdktf.stringToTerraform(this._httpPostdata),
      http_postfile: cdktf.stringToTerraform(this._httpPostfile),
      http_response_code: cdktf.stringToTerraform(this._httpResponseCode),
      http_text: cdktf.stringToTerraform(this._httpText),
      http_url: cdktf.numberToTerraform(this._httpUrl),
      http_username: cdktf.stringToTerraform(this._httpUsername),
      id: cdktf.stringToTerraform(this._id),
      maintenance: cdktf.numberToTerraform(this._maintenance),
      maintenance_text: cdktf.stringToTerraform(this._maintenanceText),
      maintenance_text_regex: cdktf.stringToTerraform(this._maintenanceTextRegex),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      post_path: cdktf.stringToTerraform(this._postPath),
      post_type: cdktf.stringToTerraform(this._postType),
      response_code_regex: cdktf.stringToTerraform(this._responseCodeRegex),
      text_regex: cdktf.stringToTerraform(this._textRegex),
      url_path: cdktf.stringToTerraform(this._urlPath),
      url_type: cdktf.stringToTerraform(this._urlType),
      uuid: cdktf.stringToTerraform(this._uuid),
      version2: cdktf.numberToTerraform(this._version2),
      http_kerberos_kdc: healthMonitorMethodHttpHttpKerberosKdcAToTerraform(this._httpKerberosKdc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http: {
        value: cdktf.numberToHclTerraform(this._http),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_expect: {
        value: cdktf.numberToHclTerraform(this._httpExpect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_host: {
        value: cdktf.stringToHclTerraform(this._httpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_kerberos_auth: {
        value: cdktf.numberToHclTerraform(this._httpKerberosAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_kerberos_realm: {
        value: cdktf.stringToHclTerraform(this._httpKerberosRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_maintenance_code: {
        value: cdktf.stringToHclTerraform(this._httpMaintenanceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_password: {
        value: cdktf.numberToHclTerraform(this._httpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_password_string: {
        value: cdktf.stringToHclTerraform(this._httpPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_postdata: {
        value: cdktf.stringToHclTerraform(this._httpPostdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_postfile: {
        value: cdktf.stringToHclTerraform(this._httpPostfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_code: {
        value: cdktf.stringToHclTerraform(this._httpResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_text: {
        value: cdktf.stringToHclTerraform(this._httpText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_url: {
        value: cdktf.numberToHclTerraform(this._httpUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_username: {
        value: cdktf.stringToHclTerraform(this._httpUsername),
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
      maintenance: {
        value: cdktf.numberToHclTerraform(this._maintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_text: {
        value: cdktf.stringToHclTerraform(this._maintenanceText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_text_regex: {
        value: cdktf.stringToHclTerraform(this._maintenanceTextRegex),
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
      post_path: {
        value: cdktf.stringToHclTerraform(this._postPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_type: {
        value: cdktf.stringToHclTerraform(this._postType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_code_regex: {
        value: cdktf.stringToHclTerraform(this._responseCodeRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_regex: {
        value: cdktf.stringToHclTerraform(this._textRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_path: {
        value: cdktf.stringToHclTerraform(this._urlPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_type: {
        value: cdktf.stringToHclTerraform(this._urlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version2: {
        value: cdktf.numberToHclTerraform(this._version2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_kerberos_kdc: {
        value: healthMonitorMethodHttpHttpKerberosKdcAToHclTerraform(this._httpKerberosKdc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodHttpHttpKerberosKdcAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
