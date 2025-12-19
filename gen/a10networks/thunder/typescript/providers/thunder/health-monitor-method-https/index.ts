// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodHttpsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify client certificate (Certificate name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#cert HealthMonitorMethodHttpsA#cert}
  */
  readonly cert?: string;
  /**
  * Select shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#cert_key_shared HealthMonitorMethodHttpsA#cert_key_shared}
  */
  readonly certKeyShared?: number;
  /**
  * Disable SSLv2Hello for HTTPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#disable_sslv2hello HealthMonitorMethodHttpsA#disable_sslv2hello}
  */
  readonly disableSslv2Hello?: number;
  /**
  * 'http-version2': HTTP version 2 for HTTPs; 'http-version3': HTTP version 3 for HTTPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#http_version HealthMonitorMethodHttpsA#http_version}
  */
  readonly httpVersion?: string;
  /**
  * HTTPS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https HealthMonitorMethodHttpsA#https}
  */
  readonly https?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_expect HealthMonitorMethodHttpsA#https_expect}
  */
  readonly httpsExpect?: number;
  /**
  * Specify "Host:" header used in request (enclose IPv6 address in [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_host HealthMonitorMethodHttpsA#https_host}
  */
  readonly httpsHost?: string;
  /**
  * Https Kerberos Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_auth HealthMonitorMethodHttpsA#https_kerberos_auth}
  */
  readonly httpsKerberosAuth?: number;
  /**
  * Specify realm of Kerberos server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_realm HealthMonitorMethodHttpsA#https_kerberos_realm}
  */
  readonly httpsKerberosRealm?: string;
  /**
  * Specify response code for maintenance (Format is xx,xx-xx (xx between [100, 899])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_maintenance_code HealthMonitorMethodHttpsA#https_maintenance_code}
  */
  readonly httpsMaintenanceCode?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_password HealthMonitorMethodHttpsA#https_password}
  */
  readonly httpsPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_password_string HealthMonitorMethodHttpsA#https_password_string}
  */
  readonly httpsPasswordString?: string;
  /**
  * Specify the HTTP post data (Input post data here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_postdata HealthMonitorMethodHttpsA#https_postdata}
  */
  readonly httpsPostdata?: string;
  /**
  * Specify the HTTP post data (Input post data file name here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_postfile HealthMonitorMethodHttpsA#https_postfile}
  */
  readonly httpsPostfile?: string;
  /**
  * Specify response code range (e.g. 200,400-430) (Format is xx,xx-xx (xx between [100, 899])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_response_code HealthMonitorMethodHttpsA#https_response_code}
  */
  readonly httpsResponseCode?: string;
  /**
  * Expect Server Cert commonName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_server_cert_name HealthMonitorMethodHttpsA#https_server_cert_name}
  */
  readonly httpsServerCertName?: string;
  /**
  * Specify text expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_text HealthMonitorMethodHttpsA#https_text}
  */
  readonly httpsText?: string;
  /**
  * Specify URL string, default is GET /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_url HealthMonitorMethodHttpsA#https_url}
  */
  readonly httpsUrl?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_username HealthMonitorMethodHttpsA#https_username}
  */
  readonly httpsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#id HealthMonitorMethodHttpsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify client private key (Key name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#key HealthMonitorMethodHttpsA#key}
  */
  readonly key?: string;
  /**
  * Client private key password phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#key_pass_phrase HealthMonitorMethodHttpsA#key_pass_phrase}
  */
  readonly keyPassPhrase?: number;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#key_phrase HealthMonitorMethodHttpsA#key_phrase}
  */
  readonly keyPhrase?: string;
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#maintenance HealthMonitorMethodHttpsA#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#maintenance_text HealthMonitorMethodHttpsA#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * Specify Regex text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#maintenance_text_regex HealthMonitorMethodHttpsA#maintenance_text_regex}
  */
  readonly maintenanceTextRegex?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#monitor_name HealthMonitorMethodHttpsA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#post_path HealthMonitorMethodHttpsA#post_path}
  */
  readonly postPath?: string;
  /**
  * 'postdata': Specify the HTTP post data; 'postfile': Specify the HTTP post data;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#post_type HealthMonitorMethodHttpsA#post_type}
  */
  readonly postType?: string;
  /**
  * Specify response code range with Regex (code with Regex, such as [2-5][0-9][0-9])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#response_code_regex HealthMonitorMethodHttpsA#response_code_regex}
  */
  readonly responseCodeRegex?: string;
  /**
  * Server Name Indication for HTTPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#sni HealthMonitorMethodHttpsA#sni}
  */
  readonly sni?: number;
  /**
  * Specify text expected  with Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#text_regex HealthMonitorMethodHttpsA#text_regex}
  */
  readonly textRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#url_path HealthMonitorMethodHttpsA#url_path}
  */
  readonly urlPath?: string;
  /**
  * 'GET': HTTP GET method; 'POST': HTTP POST method; 'HEAD': HTTP HEAD method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#url_type HealthMonitorMethodHttpsA#url_type}
  */
  readonly urlType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#uuid HealthMonitorMethodHttpsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify HTTPS port (Port Number (default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#web_port HealthMonitorMethodHttpsA#web_port}
  */
  readonly webPort?: number;
  /**
  * https_kerberos_kdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_kdc HealthMonitorMethodHttpsA#https_kerberos_kdc}
  */
  readonly httpsKerberosKdc?: HealthMonitorMethodHttpsHttpsKerberosKdcA;
}
export interface HealthMonitorMethodHttpsHttpsKerberosKdcA {
  /**
  * Kdc's hostname(length:1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_hostip HealthMonitorMethodHttpsA#https_kerberos_hostip}
  */
  readonly httpsKerberosHostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_hostipv6 HealthMonitorMethodHttpsA#https_kerberos_hostipv6}
  */
  readonly httpsKerberosHostipv6?: string;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_port HealthMonitorMethodHttpsA#https_kerberos_port}
  */
  readonly httpsKerberosPort?: number;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#https_kerberos_portv6 HealthMonitorMethodHttpsA#https_kerberos_portv6}
  */
  readonly httpsKerberosPortv6?: number;
}

export function healthMonitorMethodHttpsHttpsKerberosKdcAToTerraform(struct?: HealthMonitorMethodHttpsHttpsKerberosKdcAOutputReference | HealthMonitorMethodHttpsHttpsKerberosKdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https_kerberos_hostip: cdktf.stringToTerraform(struct!.httpsKerberosHostip),
    https_kerberos_hostipv6: cdktf.stringToTerraform(struct!.httpsKerberosHostipv6),
    https_kerberos_port: cdktf.numberToTerraform(struct!.httpsKerberosPort),
    https_kerberos_portv6: cdktf.numberToTerraform(struct!.httpsKerberosPortv6),
  }
}


export function healthMonitorMethodHttpsHttpsKerberosKdcAToHclTerraform(struct?: HealthMonitorMethodHttpsHttpsKerberosKdcAOutputReference | HealthMonitorMethodHttpsHttpsKerberosKdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https_kerberos_hostip: {
      value: cdktf.stringToHclTerraform(struct!.httpsKerberosHostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_kerberos_hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.httpsKerberosHostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsKerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_kerberos_portv6: {
      value: cdktf.numberToHclTerraform(struct!.httpsKerberosPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpsHttpsKerberosKdcAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttpsHttpsKerberosKdcA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsKerberosHostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosHostip = this._httpsKerberosHostip;
    }
    if (this._httpsKerberosHostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosHostipv6 = this._httpsKerberosHostipv6;
    }
    if (this._httpsKerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosPort = this._httpsKerberosPort;
    }
    if (this._httpsKerberosPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosPortv6 = this._httpsKerberosPortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttpsHttpsKerberosKdcA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpsKerberosHostip = undefined;
      this._httpsKerberosHostipv6 = undefined;
      this._httpsKerberosPort = undefined;
      this._httpsKerberosPortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpsKerberosHostip = value.httpsKerberosHostip;
      this._httpsKerberosHostipv6 = value.httpsKerberosHostipv6;
      this._httpsKerberosPort = value.httpsKerberosPort;
      this._httpsKerberosPortv6 = value.httpsKerberosPortv6;
    }
  }

  // https_kerberos_hostip - computed: false, optional: true, required: false
  private _httpsKerberosHostip?: string; 
  public get httpsKerberosHostip() {
    return this.getStringAttribute('https_kerberos_hostip');
  }
  public set httpsKerberosHostip(value: string) {
    this._httpsKerberosHostip = value;
  }
  public resetHttpsKerberosHostip() {
    this._httpsKerberosHostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosHostipInput() {
    return this._httpsKerberosHostip;
  }

  // https_kerberos_hostipv6 - computed: false, optional: true, required: false
  private _httpsKerberosHostipv6?: string; 
  public get httpsKerberosHostipv6() {
    return this.getStringAttribute('https_kerberos_hostipv6');
  }
  public set httpsKerberosHostipv6(value: string) {
    this._httpsKerberosHostipv6 = value;
  }
  public resetHttpsKerberosHostipv6() {
    this._httpsKerberosHostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosHostipv6Input() {
    return this._httpsKerberosHostipv6;
  }

  // https_kerberos_port - computed: false, optional: true, required: false
  private _httpsKerberosPort?: number; 
  public get httpsKerberosPort() {
    return this.getNumberAttribute('https_kerberos_port');
  }
  public set httpsKerberosPort(value: number) {
    this._httpsKerberosPort = value;
  }
  public resetHttpsKerberosPort() {
    this._httpsKerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosPortInput() {
    return this._httpsKerberosPort;
  }

  // https_kerberos_portv6 - computed: false, optional: true, required: false
  private _httpsKerberosPortv6?: number; 
  public get httpsKerberosPortv6() {
    return this.getNumberAttribute('https_kerberos_portv6');
  }
  public set httpsKerberosPortv6(value: number) {
    this._httpsKerberosPortv6 = value;
  }
  public resetHttpsKerberosPortv6() {
    this._httpsKerberosPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosPortv6Input() {
    return this._httpsKerberosPortv6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https thunder_health_monitor_method_https}
*/
export class HealthMonitorMethodHttpsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_https";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodHttpsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodHttpsA to import
  * @param importFromId The id of the existing HealthMonitorMethodHttpsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodHttpsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_https", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_https thunder_health_monitor_method_https} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodHttpsAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodHttpsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_https',
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
    this._cert = config.cert;
    this._certKeyShared = config.certKeyShared;
    this._disableSslv2Hello = config.disableSslv2Hello;
    this._httpVersion = config.httpVersion;
    this._https = config.https;
    this._httpsExpect = config.httpsExpect;
    this._httpsHost = config.httpsHost;
    this._httpsKerberosAuth = config.httpsKerberosAuth;
    this._httpsKerberosRealm = config.httpsKerberosRealm;
    this._httpsMaintenanceCode = config.httpsMaintenanceCode;
    this._httpsPassword = config.httpsPassword;
    this._httpsPasswordString = config.httpsPasswordString;
    this._httpsPostdata = config.httpsPostdata;
    this._httpsPostfile = config.httpsPostfile;
    this._httpsResponseCode = config.httpsResponseCode;
    this._httpsServerCertName = config.httpsServerCertName;
    this._httpsText = config.httpsText;
    this._httpsUrl = config.httpsUrl;
    this._httpsUsername = config.httpsUsername;
    this._id = config.id;
    this._key = config.key;
    this._keyPassPhrase = config.keyPassPhrase;
    this._keyPhrase = config.keyPhrase;
    this._maintenance = config.maintenance;
    this._maintenanceText = config.maintenanceText;
    this._maintenanceTextRegex = config.maintenanceTextRegex;
    this._monitorName = config.monitorName;
    this._postPath = config.postPath;
    this._postType = config.postType;
    this._responseCodeRegex = config.responseCodeRegex;
    this._sni = config.sni;
    this._textRegex = config.textRegex;
    this._urlPath = config.urlPath;
    this._urlType = config.urlType;
    this._uuid = config.uuid;
    this._webPort = config.webPort;
    this._httpsKerberosKdc.internalValue = config.httpsKerberosKdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_key_shared - computed: false, optional: true, required: false
  private _certKeyShared?: number; 
  public get certKeyShared() {
    return this.getNumberAttribute('cert_key_shared');
  }
  public set certKeyShared(value: number) {
    this._certKeyShared = value;
  }
  public resetCertKeyShared() {
    this._certKeyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeySharedInput() {
    return this._certKeyShared;
  }

  // disable_sslv2hello - computed: false, optional: true, required: false
  private _disableSslv2Hello?: number; 
  public get disableSslv2Hello() {
    return this.getNumberAttribute('disable_sslv2hello');
  }
  public set disableSslv2Hello(value: number) {
    this._disableSslv2Hello = value;
  }
  public resetDisableSslv2Hello() {
    this._disableSslv2Hello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslv2HelloInput() {
    return this._disableSslv2Hello;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // https - computed: false, optional: true, required: false
  private _https?: number; 
  public get https() {
    return this.getNumberAttribute('https');
  }
  public set https(value: number) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // https_expect - computed: false, optional: true, required: false
  private _httpsExpect?: number; 
  public get httpsExpect() {
    return this.getNumberAttribute('https_expect');
  }
  public set httpsExpect(value: number) {
    this._httpsExpect = value;
  }
  public resetHttpsExpect() {
    this._httpsExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsExpectInput() {
    return this._httpsExpect;
  }

  // https_host - computed: false, optional: true, required: false
  private _httpsHost?: string; 
  public get httpsHost() {
    return this.getStringAttribute('https_host');
  }
  public set httpsHost(value: string) {
    this._httpsHost = value;
  }
  public resetHttpsHost() {
    this._httpsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHostInput() {
    return this._httpsHost;
  }

  // https_kerberos_auth - computed: false, optional: true, required: false
  private _httpsKerberosAuth?: number; 
  public get httpsKerberosAuth() {
    return this.getNumberAttribute('https_kerberos_auth');
  }
  public set httpsKerberosAuth(value: number) {
    this._httpsKerberosAuth = value;
  }
  public resetHttpsKerberosAuth() {
    this._httpsKerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosAuthInput() {
    return this._httpsKerberosAuth;
  }

  // https_kerberos_realm - computed: false, optional: true, required: false
  private _httpsKerberosRealm?: string; 
  public get httpsKerberosRealm() {
    return this.getStringAttribute('https_kerberos_realm');
  }
  public set httpsKerberosRealm(value: string) {
    this._httpsKerberosRealm = value;
  }
  public resetHttpsKerberosRealm() {
    this._httpsKerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosRealmInput() {
    return this._httpsKerberosRealm;
  }

  // https_maintenance_code - computed: false, optional: true, required: false
  private _httpsMaintenanceCode?: string; 
  public get httpsMaintenanceCode() {
    return this.getStringAttribute('https_maintenance_code');
  }
  public set httpsMaintenanceCode(value: string) {
    this._httpsMaintenanceCode = value;
  }
  public resetHttpsMaintenanceCode() {
    this._httpsMaintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsMaintenanceCodeInput() {
    return this._httpsMaintenanceCode;
  }

  // https_password - computed: false, optional: true, required: false
  private _httpsPassword?: number; 
  public get httpsPassword() {
    return this.getNumberAttribute('https_password');
  }
  public set httpsPassword(value: number) {
    this._httpsPassword = value;
  }
  public resetHttpsPassword() {
    this._httpsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPasswordInput() {
    return this._httpsPassword;
  }

  // https_password_string - computed: false, optional: true, required: false
  private _httpsPasswordString?: string; 
  public get httpsPasswordString() {
    return this.getStringAttribute('https_password_string');
  }
  public set httpsPasswordString(value: string) {
    this._httpsPasswordString = value;
  }
  public resetHttpsPasswordString() {
    this._httpsPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPasswordStringInput() {
    return this._httpsPasswordString;
  }

  // https_postdata - computed: false, optional: true, required: false
  private _httpsPostdata?: string; 
  public get httpsPostdata() {
    return this.getStringAttribute('https_postdata');
  }
  public set httpsPostdata(value: string) {
    this._httpsPostdata = value;
  }
  public resetHttpsPostdata() {
    this._httpsPostdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPostdataInput() {
    return this._httpsPostdata;
  }

  // https_postfile - computed: false, optional: true, required: false
  private _httpsPostfile?: string; 
  public get httpsPostfile() {
    return this.getStringAttribute('https_postfile');
  }
  public set httpsPostfile(value: string) {
    this._httpsPostfile = value;
  }
  public resetHttpsPostfile() {
    this._httpsPostfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPostfileInput() {
    return this._httpsPostfile;
  }

  // https_response_code - computed: false, optional: true, required: false
  private _httpsResponseCode?: string; 
  public get httpsResponseCode() {
    return this.getStringAttribute('https_response_code');
  }
  public set httpsResponseCode(value: string) {
    this._httpsResponseCode = value;
  }
  public resetHttpsResponseCode() {
    this._httpsResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsResponseCodeInput() {
    return this._httpsResponseCode;
  }

  // https_server_cert_name - computed: false, optional: true, required: false
  private _httpsServerCertName?: string; 
  public get httpsServerCertName() {
    return this.getStringAttribute('https_server_cert_name');
  }
  public set httpsServerCertName(value: string) {
    this._httpsServerCertName = value;
  }
  public resetHttpsServerCertName() {
    this._httpsServerCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerCertNameInput() {
    return this._httpsServerCertName;
  }

  // https_text - computed: false, optional: true, required: false
  private _httpsText?: string; 
  public get httpsText() {
    return this.getStringAttribute('https_text');
  }
  public set httpsText(value: string) {
    this._httpsText = value;
  }
  public resetHttpsText() {
    this._httpsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTextInput() {
    return this._httpsText;
  }

  // https_url - computed: false, optional: true, required: false
  private _httpsUrl?: number; 
  public get httpsUrl() {
    return this.getNumberAttribute('https_url');
  }
  public set httpsUrl(value: number) {
    this._httpsUrl = value;
  }
  public resetHttpsUrl() {
    this._httpsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUrlInput() {
    return this._httpsUrl;
  }

  // https_username - computed: false, optional: true, required: false
  private _httpsUsername?: string; 
  public get httpsUsername() {
    return this.getStringAttribute('https_username');
  }
  public set httpsUsername(value: string) {
    this._httpsUsername = value;
  }
  public resetHttpsUsername() {
    this._httpsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUsernameInput() {
    return this._httpsUsername;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_pass_phrase - computed: false, optional: true, required: false
  private _keyPassPhrase?: number; 
  public get keyPassPhrase() {
    return this.getNumberAttribute('key_pass_phrase');
  }
  public set keyPassPhrase(value: number) {
    this._keyPassPhrase = value;
  }
  public resetKeyPassPhrase() {
    this._keyPassPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassPhraseInput() {
    return this._keyPassPhrase;
  }

  // key_phrase - computed: false, optional: true, required: false
  private _keyPhrase?: string; 
  public get keyPhrase() {
    return this.getStringAttribute('key_phrase');
  }
  public set keyPhrase(value: string) {
    this._keyPhrase = value;
  }
  public resetKeyPhrase() {
    this._keyPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPhraseInput() {
    return this._keyPhrase;
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

  // sni - computed: false, optional: true, required: false
  private _sni?: number; 
  public get sni() {
    return this.getNumberAttribute('sni');
  }
  public set sni(value: number) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
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

  // web_port - computed: false, optional: true, required: false
  private _webPort?: number; 
  public get webPort() {
    return this.getNumberAttribute('web_port');
  }
  public set webPort(value: number) {
    this._webPort = value;
  }
  public resetWebPort() {
    this._webPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortInput() {
    return this._webPort;
  }

  // https_kerberos_kdc - computed: false, optional: true, required: false
  private _httpsKerberosKdc = new HealthMonitorMethodHttpsHttpsKerberosKdcAOutputReference(this, "https_kerberos_kdc");
  public get httpsKerberosKdc() {
    return this._httpsKerberosKdc;
  }
  public putHttpsKerberosKdc(value: HealthMonitorMethodHttpsHttpsKerberosKdcA) {
    this._httpsKerberosKdc.internalValue = value;
  }
  public resetHttpsKerberosKdc() {
    this._httpsKerberosKdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosKdcInput() {
    return this._httpsKerberosKdc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert: cdktf.stringToTerraform(this._cert),
      cert_key_shared: cdktf.numberToTerraform(this._certKeyShared),
      disable_sslv2hello: cdktf.numberToTerraform(this._disableSslv2Hello),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      https: cdktf.numberToTerraform(this._https),
      https_expect: cdktf.numberToTerraform(this._httpsExpect),
      https_host: cdktf.stringToTerraform(this._httpsHost),
      https_kerberos_auth: cdktf.numberToTerraform(this._httpsKerberosAuth),
      https_kerberos_realm: cdktf.stringToTerraform(this._httpsKerberosRealm),
      https_maintenance_code: cdktf.stringToTerraform(this._httpsMaintenanceCode),
      https_password: cdktf.numberToTerraform(this._httpsPassword),
      https_password_string: cdktf.stringToTerraform(this._httpsPasswordString),
      https_postdata: cdktf.stringToTerraform(this._httpsPostdata),
      https_postfile: cdktf.stringToTerraform(this._httpsPostfile),
      https_response_code: cdktf.stringToTerraform(this._httpsResponseCode),
      https_server_cert_name: cdktf.stringToTerraform(this._httpsServerCertName),
      https_text: cdktf.stringToTerraform(this._httpsText),
      https_url: cdktf.numberToTerraform(this._httpsUrl),
      https_username: cdktf.stringToTerraform(this._httpsUsername),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      key_pass_phrase: cdktf.numberToTerraform(this._keyPassPhrase),
      key_phrase: cdktf.stringToTerraform(this._keyPhrase),
      maintenance: cdktf.numberToTerraform(this._maintenance),
      maintenance_text: cdktf.stringToTerraform(this._maintenanceText),
      maintenance_text_regex: cdktf.stringToTerraform(this._maintenanceTextRegex),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      post_path: cdktf.stringToTerraform(this._postPath),
      post_type: cdktf.stringToTerraform(this._postType),
      response_code_regex: cdktf.stringToTerraform(this._responseCodeRegex),
      sni: cdktf.numberToTerraform(this._sni),
      text_regex: cdktf.stringToTerraform(this._textRegex),
      url_path: cdktf.stringToTerraform(this._urlPath),
      url_type: cdktf.stringToTerraform(this._urlType),
      uuid: cdktf.stringToTerraform(this._uuid),
      web_port: cdktf.numberToTerraform(this._webPort),
      https_kerberos_kdc: healthMonitorMethodHttpsHttpsKerberosKdcAToTerraform(this._httpsKerberosKdc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_key_shared: {
        value: cdktf.numberToHclTerraform(this._certKeyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_sslv2hello: {
        value: cdktf.numberToHclTerraform(this._disableSslv2Hello),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https: {
        value: cdktf.numberToHclTerraform(this._https),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_expect: {
        value: cdktf.numberToHclTerraform(this._httpsExpect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_host: {
        value: cdktf.stringToHclTerraform(this._httpsHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_kerberos_auth: {
        value: cdktf.numberToHclTerraform(this._httpsKerberosAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_kerberos_realm: {
        value: cdktf.stringToHclTerraform(this._httpsKerberosRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_maintenance_code: {
        value: cdktf.stringToHclTerraform(this._httpsMaintenanceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_password: {
        value: cdktf.numberToHclTerraform(this._httpsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_password_string: {
        value: cdktf.stringToHclTerraform(this._httpsPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_postdata: {
        value: cdktf.stringToHclTerraform(this._httpsPostdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_postfile: {
        value: cdktf.stringToHclTerraform(this._httpsPostfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_response_code: {
        value: cdktf.stringToHclTerraform(this._httpsResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_server_cert_name: {
        value: cdktf.stringToHclTerraform(this._httpsServerCertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_text: {
        value: cdktf.stringToHclTerraform(this._httpsText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_url: {
        value: cdktf.numberToHclTerraform(this._httpsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_username: {
        value: cdktf.stringToHclTerraform(this._httpsUsername),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pass_phrase: {
        value: cdktf.numberToHclTerraform(this._keyPassPhrase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_phrase: {
        value: cdktf.stringToHclTerraform(this._keyPhrase),
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
      sni: {
        value: cdktf.numberToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      web_port: {
        value: cdktf.numberToHclTerraform(this._webPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_kerberos_kdc: {
        value: healthMonitorMethodHttpsHttpsKerberosKdcAToHclTerraform(this._httpsKerberosKdc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodHttpsHttpsKerberosKdcAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
