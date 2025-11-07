// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#advancedclientlessvpnmode Vpnparameter#advancedclientlessvpnmode}
  */
  readonly advancedclientlessvpnmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#allowedlogingroups Vpnparameter#allowedlogingroups}
  */
  readonly allowedlogingroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#allprotocolproxy Vpnparameter#allprotocolproxy}
  */
  readonly allprotocolproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#alwaysonprofilename Vpnparameter#alwaysonprofilename}
  */
  readonly alwaysonprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#apptokentimeout Vpnparameter#apptokentimeout}
  */
  readonly apptokentimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#authorizationgroup Vpnparameter#authorizationgroup}
  */
  readonly authorizationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#autoproxyurl Vpnparameter#autoproxyurl}
  */
  readonly autoproxyurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#backendcertvalidation Vpnparameter#backendcertvalidation}
  */
  readonly backendcertvalidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#backendserversni Vpnparameter#backendserversni}
  */
  readonly backendserversni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#citrixreceiverhome Vpnparameter#citrixreceiverhome}
  */
  readonly citrixreceiverhome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientchoices Vpnparameter#clientchoices}
  */
  readonly clientchoices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientcleanupprompt Vpnparameter#clientcleanupprompt}
  */
  readonly clientcleanupprompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientconfiguration Vpnparameter#clientconfiguration}
  */
  readonly clientconfiguration?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientdebug Vpnparameter#clientdebug}
  */
  readonly clientdebug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientidletimeout Vpnparameter#clientidletimeout}
  */
  readonly clientidletimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientlessmodeurlencoding Vpnparameter#clientlessmodeurlencoding}
  */
  readonly clientlessmodeurlencoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientlesspersistentcookie Vpnparameter#clientlesspersistentcookie}
  */
  readonly clientlesspersistentcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientlessvpnmode Vpnparameter#clientlessvpnmode}
  */
  readonly clientlessvpnmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientoptions Vpnparameter#clientoptions}
  */
  readonly clientoptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientsecurity Vpnparameter#clientsecurity}
  */
  readonly clientsecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientsecuritygroup Vpnparameter#clientsecuritygroup}
  */
  readonly clientsecuritygroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientsecuritylog Vpnparameter#clientsecuritylog}
  */
  readonly clientsecuritylog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientsecuritymessage Vpnparameter#clientsecuritymessage}
  */
  readonly clientsecuritymessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#clientversions Vpnparameter#clientversions}
  */
  readonly clientversions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#defaultauthorizationaction Vpnparameter#defaultauthorizationaction}
  */
  readonly defaultauthorizationaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#dnsvservername Vpnparameter#dnsvservername}
  */
  readonly dnsvservername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#emailhome Vpnparameter#emailhome}
  */
  readonly emailhome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#encryptcsecexp Vpnparameter#encryptcsecexp}
  */
  readonly encryptcsecexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#epaclienttype Vpnparameter#epaclienttype}
  */
  readonly epaclienttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#forcecleanup Vpnparameter#forcecleanup}
  */
  readonly forcecleanup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#forcedtimeout Vpnparameter#forcedtimeout}
  */
  readonly forcedtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#forcedtimeoutwarning Vpnparameter#forcedtimeoutwarning}
  */
  readonly forcedtimeoutwarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#fqdnspoofedip Vpnparameter#fqdnspoofedip}
  */
  readonly fqdnspoofedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#ftpproxy Vpnparameter#ftpproxy}
  */
  readonly ftpproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#gopherproxy Vpnparameter#gopherproxy}
  */
  readonly gopherproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#homepage Vpnparameter#homepage}
  */
  readonly homepage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#httpport Vpnparameter#httpport}
  */
  readonly httpport?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#httpproxy Vpnparameter#httpproxy}
  */
  readonly httpproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#icaproxy Vpnparameter#icaproxy}
  */
  readonly icaproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#icasessiontimeout Vpnparameter#icasessiontimeout}
  */
  readonly icasessiontimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#icauseraccounting Vpnparameter#icauseraccounting}
  */
  readonly icauseraccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#iconwithreceiver Vpnparameter#iconwithreceiver}
  */
  readonly iconwithreceiver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#id Vpnparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#iipdnssuffix Vpnparameter#iipdnssuffix}
  */
  readonly iipdnssuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#kcdaccount Vpnparameter#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#killconnections Vpnparameter#killconnections}
  */
  readonly killconnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#linuxpluginupgrade Vpnparameter#linuxpluginupgrade}
  */
  readonly linuxpluginupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#locallanaccess Vpnparameter#locallanaccess}
  */
  readonly locallanaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#loginscript Vpnparameter#loginscript}
  */
  readonly loginscript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#logoutscript Vpnparameter#logoutscript}
  */
  readonly logoutscript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#macpluginupgrade Vpnparameter#macpluginupgrade}
  */
  readonly macpluginupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#mdxtokentimeout Vpnparameter#mdxtokentimeout}
  */
  readonly mdxtokentimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#netmask Vpnparameter#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#ntdomain Vpnparameter#ntdomain}
  */
  readonly ntdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#pcoipprofilename Vpnparameter#pcoipprofilename}
  */
  readonly pcoipprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#proxy Vpnparameter#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#proxyexception Vpnparameter#proxyexception}
  */
  readonly proxyexception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#proxylocalbypass Vpnparameter#proxylocalbypass}
  */
  readonly proxylocalbypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#rdpclientprofilename Vpnparameter#rdpclientprofilename}
  */
  readonly rdpclientprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#rfc1918 Vpnparameter#rfc1918}
  */
  readonly rfc1918?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#samesite Vpnparameter#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#securebrowse Vpnparameter#securebrowse}
  */
  readonly securebrowse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#sesstimeout Vpnparameter#sesstimeout}
  */
  readonly sesstimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#smartgroup Vpnparameter#smartgroup}
  */
  readonly smartgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#socksproxy Vpnparameter#socksproxy}
  */
  readonly socksproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#splitdns Vpnparameter#splitdns}
  */
  readonly splitdns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#splittunnel Vpnparameter#splittunnel}
  */
  readonly splittunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#spoofiip Vpnparameter#spoofiip}
  */
  readonly spoofiip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#sslproxy Vpnparameter#sslproxy}
  */
  readonly sslproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#sso Vpnparameter#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#ssocredential Vpnparameter#ssocredential}
  */
  readonly ssocredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#storefronturl Vpnparameter#storefronturl}
  */
  readonly storefronturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#transparentinterception Vpnparameter#transparentinterception}
  */
  readonly transparentinterception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#uitheme Vpnparameter#uitheme}
  */
  readonly uitheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#useiip Vpnparameter#useiip}
  */
  readonly useiip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#usemip Vpnparameter#usemip}
  */
  readonly usemip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#userdomains Vpnparameter#userdomains}
  */
  readonly userdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#wihome Vpnparameter#wihome}
  */
  readonly wihome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#wihomeaddresstype Vpnparameter#wihomeaddresstype}
  */
  readonly wihomeaddresstype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#windowsautologon Vpnparameter#windowsautologon}
  */
  readonly windowsautologon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#windowsclienttype Vpnparameter#windowsclienttype}
  */
  readonly windowsclienttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#windowspluginupgrade Vpnparameter#windowspluginupgrade}
  */
  readonly windowspluginupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#winsip Vpnparameter#winsip}
  */
  readonly winsip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#wiportalmode Vpnparameter#wiportalmode}
  */
  readonly wiportalmode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter citrixadc_vpnparameter}
*/
export class Vpnparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnparameter to import
  * @param importFromId The id of the existing Vpnparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnparameter citrixadc_vpnparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedclientlessvpnmode = config.advancedclientlessvpnmode;
    this._allowedlogingroups = config.allowedlogingroups;
    this._allprotocolproxy = config.allprotocolproxy;
    this._alwaysonprofilename = config.alwaysonprofilename;
    this._apptokentimeout = config.apptokentimeout;
    this._authorizationgroup = config.authorizationgroup;
    this._autoproxyurl = config.autoproxyurl;
    this._backendcertvalidation = config.backendcertvalidation;
    this._backendserversni = config.backendserversni;
    this._citrixreceiverhome = config.citrixreceiverhome;
    this._clientchoices = config.clientchoices;
    this._clientcleanupprompt = config.clientcleanupprompt;
    this._clientconfiguration = config.clientconfiguration;
    this._clientdebug = config.clientdebug;
    this._clientidletimeout = config.clientidletimeout;
    this._clientlessmodeurlencoding = config.clientlessmodeurlencoding;
    this._clientlesspersistentcookie = config.clientlesspersistentcookie;
    this._clientlessvpnmode = config.clientlessvpnmode;
    this._clientoptions = config.clientoptions;
    this._clientsecurity = config.clientsecurity;
    this._clientsecuritygroup = config.clientsecuritygroup;
    this._clientsecuritylog = config.clientsecuritylog;
    this._clientsecuritymessage = config.clientsecuritymessage;
    this._clientversions = config.clientversions;
    this._defaultauthorizationaction = config.defaultauthorizationaction;
    this._dnsvservername = config.dnsvservername;
    this._emailhome = config.emailhome;
    this._encryptcsecexp = config.encryptcsecexp;
    this._epaclienttype = config.epaclienttype;
    this._forcecleanup = config.forcecleanup;
    this._forcedtimeout = config.forcedtimeout;
    this._forcedtimeoutwarning = config.forcedtimeoutwarning;
    this._fqdnspoofedip = config.fqdnspoofedip;
    this._ftpproxy = config.ftpproxy;
    this._gopherproxy = config.gopherproxy;
    this._homepage = config.homepage;
    this._httpport = config.httpport;
    this._httpproxy = config.httpproxy;
    this._icaproxy = config.icaproxy;
    this._icasessiontimeout = config.icasessiontimeout;
    this._icauseraccounting = config.icauseraccounting;
    this._iconwithreceiver = config.iconwithreceiver;
    this._id = config.id;
    this._iipdnssuffix = config.iipdnssuffix;
    this._kcdaccount = config.kcdaccount;
    this._killconnections = config.killconnections;
    this._linuxpluginupgrade = config.linuxpluginupgrade;
    this._locallanaccess = config.locallanaccess;
    this._loginscript = config.loginscript;
    this._logoutscript = config.logoutscript;
    this._macpluginupgrade = config.macpluginupgrade;
    this._mdxtokentimeout = config.mdxtokentimeout;
    this._netmask = config.netmask;
    this._ntdomain = config.ntdomain;
    this._pcoipprofilename = config.pcoipprofilename;
    this._proxy = config.proxy;
    this._proxyexception = config.proxyexception;
    this._proxylocalbypass = config.proxylocalbypass;
    this._rdpclientprofilename = config.rdpclientprofilename;
    this._rfc1918 = config.rfc1918;
    this._samesite = config.samesite;
    this._securebrowse = config.securebrowse;
    this._sesstimeout = config.sesstimeout;
    this._smartgroup = config.smartgroup;
    this._socksproxy = config.socksproxy;
    this._splitdns = config.splitdns;
    this._splittunnel = config.splittunnel;
    this._spoofiip = config.spoofiip;
    this._sslproxy = config.sslproxy;
    this._sso = config.sso;
    this._ssocredential = config.ssocredential;
    this._storefronturl = config.storefronturl;
    this._transparentinterception = config.transparentinterception;
    this._uitheme = config.uitheme;
    this._useiip = config.useiip;
    this._usemip = config.usemip;
    this._userdomains = config.userdomains;
    this._wihome = config.wihome;
    this._wihomeaddresstype = config.wihomeaddresstype;
    this._windowsautologon = config.windowsautologon;
    this._windowsclienttype = config.windowsclienttype;
    this._windowspluginupgrade = config.windowspluginupgrade;
    this._winsip = config.winsip;
    this._wiportalmode = config.wiportalmode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advancedclientlessvpnmode - computed: true, optional: true, required: false
  private _advancedclientlessvpnmode?: string; 
  public get advancedclientlessvpnmode() {
    return this.getStringAttribute('advancedclientlessvpnmode');
  }
  public set advancedclientlessvpnmode(value: string) {
    this._advancedclientlessvpnmode = value;
  }
  public resetAdvancedclientlessvpnmode() {
    this._advancedclientlessvpnmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedclientlessvpnmodeInput() {
    return this._advancedclientlessvpnmode;
  }

  // allowedlogingroups - computed: true, optional: true, required: false
  private _allowedlogingroups?: string; 
  public get allowedlogingroups() {
    return this.getStringAttribute('allowedlogingroups');
  }
  public set allowedlogingroups(value: string) {
    this._allowedlogingroups = value;
  }
  public resetAllowedlogingroups() {
    this._allowedlogingroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedlogingroupsInput() {
    return this._allowedlogingroups;
  }

  // allprotocolproxy - computed: true, optional: true, required: false
  private _allprotocolproxy?: string; 
  public get allprotocolproxy() {
    return this.getStringAttribute('allprotocolproxy');
  }
  public set allprotocolproxy(value: string) {
    this._allprotocolproxy = value;
  }
  public resetAllprotocolproxy() {
    this._allprotocolproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allprotocolproxyInput() {
    return this._allprotocolproxy;
  }

  // alwaysonprofilename - computed: true, optional: true, required: false
  private _alwaysonprofilename?: string; 
  public get alwaysonprofilename() {
    return this.getStringAttribute('alwaysonprofilename');
  }
  public set alwaysonprofilename(value: string) {
    this._alwaysonprofilename = value;
  }
  public resetAlwaysonprofilename() {
    this._alwaysonprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysonprofilenameInput() {
    return this._alwaysonprofilename;
  }

  // apptokentimeout - computed: true, optional: true, required: false
  private _apptokentimeout?: number; 
  public get apptokentimeout() {
    return this.getNumberAttribute('apptokentimeout');
  }
  public set apptokentimeout(value: number) {
    this._apptokentimeout = value;
  }
  public resetApptokentimeout() {
    this._apptokentimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptokentimeoutInput() {
    return this._apptokentimeout;
  }

  // authorizationgroup - computed: true, optional: true, required: false
  private _authorizationgroup?: string; 
  public get authorizationgroup() {
    return this.getStringAttribute('authorizationgroup');
  }
  public set authorizationgroup(value: string) {
    this._authorizationgroup = value;
  }
  public resetAuthorizationgroup() {
    this._authorizationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationgroupInput() {
    return this._authorizationgroup;
  }

  // autoproxyurl - computed: true, optional: true, required: false
  private _autoproxyurl?: string; 
  public get autoproxyurl() {
    return this.getStringAttribute('autoproxyurl');
  }
  public set autoproxyurl(value: string) {
    this._autoproxyurl = value;
  }
  public resetAutoproxyurl() {
    this._autoproxyurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoproxyurlInput() {
    return this._autoproxyurl;
  }

  // backendcertvalidation - computed: true, optional: true, required: false
  private _backendcertvalidation?: string; 
  public get backendcertvalidation() {
    return this.getStringAttribute('backendcertvalidation');
  }
  public set backendcertvalidation(value: string) {
    this._backendcertvalidation = value;
  }
  public resetBackendcertvalidation() {
    this._backendcertvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendcertvalidationInput() {
    return this._backendcertvalidation;
  }

  // backendserversni - computed: true, optional: true, required: false
  private _backendserversni?: string; 
  public get backendserversni() {
    return this.getStringAttribute('backendserversni');
  }
  public set backendserversni(value: string) {
    this._backendserversni = value;
  }
  public resetBackendserversni() {
    this._backendserversni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendserversniInput() {
    return this._backendserversni;
  }

  // citrixreceiverhome - computed: true, optional: true, required: false
  private _citrixreceiverhome?: string; 
  public get citrixreceiverhome() {
    return this.getStringAttribute('citrixreceiverhome');
  }
  public set citrixreceiverhome(value: string) {
    this._citrixreceiverhome = value;
  }
  public resetCitrixreceiverhome() {
    this._citrixreceiverhome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixreceiverhomeInput() {
    return this._citrixreceiverhome;
  }

  // clientchoices - computed: true, optional: true, required: false
  private _clientchoices?: string; 
  public get clientchoices() {
    return this.getStringAttribute('clientchoices');
  }
  public set clientchoices(value: string) {
    this._clientchoices = value;
  }
  public resetClientchoices() {
    this._clientchoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientchoicesInput() {
    return this._clientchoices;
  }

  // clientcleanupprompt - computed: true, optional: true, required: false
  private _clientcleanupprompt?: string; 
  public get clientcleanupprompt() {
    return this.getStringAttribute('clientcleanupprompt');
  }
  public set clientcleanupprompt(value: string) {
    this._clientcleanupprompt = value;
  }
  public resetClientcleanupprompt() {
    this._clientcleanupprompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcleanuppromptInput() {
    return this._clientcleanupprompt;
  }

  // clientconfiguration - computed: true, optional: true, required: false
  private _clientconfiguration?: string[]; 
  public get clientconfiguration() {
    return this.getListAttribute('clientconfiguration');
  }
  public set clientconfiguration(value: string[]) {
    this._clientconfiguration = value;
  }
  public resetClientconfiguration() {
    this._clientconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientconfigurationInput() {
    return this._clientconfiguration;
  }

  // clientdebug - computed: true, optional: true, required: false
  private _clientdebug?: string; 
  public get clientdebug() {
    return this.getStringAttribute('clientdebug');
  }
  public set clientdebug(value: string) {
    this._clientdebug = value;
  }
  public resetClientdebug() {
    this._clientdebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientdebugInput() {
    return this._clientdebug;
  }

  // clientidletimeout - computed: true, optional: true, required: false
  private _clientidletimeout?: number; 
  public get clientidletimeout() {
    return this.getNumberAttribute('clientidletimeout');
  }
  public set clientidletimeout(value: number) {
    this._clientidletimeout = value;
  }
  public resetClientidletimeout() {
    this._clientidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidletimeoutInput() {
    return this._clientidletimeout;
  }

  // clientlessmodeurlencoding - computed: true, optional: true, required: false
  private _clientlessmodeurlencoding?: string; 
  public get clientlessmodeurlencoding() {
    return this.getStringAttribute('clientlessmodeurlencoding');
  }
  public set clientlessmodeurlencoding(value: string) {
    this._clientlessmodeurlencoding = value;
  }
  public resetClientlessmodeurlencoding() {
    this._clientlessmodeurlencoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessmodeurlencodingInput() {
    return this._clientlessmodeurlencoding;
  }

  // clientlesspersistentcookie - computed: true, optional: true, required: false
  private _clientlesspersistentcookie?: string; 
  public get clientlesspersistentcookie() {
    return this.getStringAttribute('clientlesspersistentcookie');
  }
  public set clientlesspersistentcookie(value: string) {
    this._clientlesspersistentcookie = value;
  }
  public resetClientlesspersistentcookie() {
    this._clientlesspersistentcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlesspersistentcookieInput() {
    return this._clientlesspersistentcookie;
  }

  // clientlessvpnmode - computed: true, optional: true, required: false
  private _clientlessvpnmode?: string; 
  public get clientlessvpnmode() {
    return this.getStringAttribute('clientlessvpnmode');
  }
  public set clientlessvpnmode(value: string) {
    this._clientlessvpnmode = value;
  }
  public resetClientlessvpnmode() {
    this._clientlessvpnmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessvpnmodeInput() {
    return this._clientlessvpnmode;
  }

  // clientoptions - computed: true, optional: true, required: false
  private _clientoptions?: string[]; 
  public get clientoptions() {
    return this.getListAttribute('clientoptions');
  }
  public set clientoptions(value: string[]) {
    this._clientoptions = value;
  }
  public resetClientoptions() {
    this._clientoptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientoptionsInput() {
    return this._clientoptions;
  }

  // clientsecurity - computed: true, optional: true, required: false
  private _clientsecurity?: string; 
  public get clientsecurity() {
    return this.getStringAttribute('clientsecurity');
  }
  public set clientsecurity(value: string) {
    this._clientsecurity = value;
  }
  public resetClientsecurity() {
    this._clientsecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecurityInput() {
    return this._clientsecurity;
  }

  // clientsecuritygroup - computed: true, optional: true, required: false
  private _clientsecuritygroup?: string; 
  public get clientsecuritygroup() {
    return this.getStringAttribute('clientsecuritygroup');
  }
  public set clientsecuritygroup(value: string) {
    this._clientsecuritygroup = value;
  }
  public resetClientsecuritygroup() {
    this._clientsecuritygroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecuritygroupInput() {
    return this._clientsecuritygroup;
  }

  // clientsecuritylog - computed: true, optional: true, required: false
  private _clientsecuritylog?: string; 
  public get clientsecuritylog() {
    return this.getStringAttribute('clientsecuritylog');
  }
  public set clientsecuritylog(value: string) {
    this._clientsecuritylog = value;
  }
  public resetClientsecuritylog() {
    this._clientsecuritylog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecuritylogInput() {
    return this._clientsecuritylog;
  }

  // clientsecuritymessage - computed: true, optional: true, required: false
  private _clientsecuritymessage?: string; 
  public get clientsecuritymessage() {
    return this.getStringAttribute('clientsecuritymessage');
  }
  public set clientsecuritymessage(value: string) {
    this._clientsecuritymessage = value;
  }
  public resetClientsecuritymessage() {
    this._clientsecuritymessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecuritymessageInput() {
    return this._clientsecuritymessage;
  }

  // clientversions - computed: true, optional: true, required: false
  private _clientversions?: string; 
  public get clientversions() {
    return this.getStringAttribute('clientversions');
  }
  public set clientversions(value: string) {
    this._clientversions = value;
  }
  public resetClientversions() {
    this._clientversions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientversionsInput() {
    return this._clientversions;
  }

  // defaultauthorizationaction - computed: true, optional: true, required: false
  private _defaultauthorizationaction?: string; 
  public get defaultauthorizationaction() {
    return this.getStringAttribute('defaultauthorizationaction');
  }
  public set defaultauthorizationaction(value: string) {
    this._defaultauthorizationaction = value;
  }
  public resetDefaultauthorizationaction() {
    this._defaultauthorizationaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthorizationactionInput() {
    return this._defaultauthorizationaction;
  }

  // dnsvservername - computed: true, optional: true, required: false
  private _dnsvservername?: string; 
  public get dnsvservername() {
    return this.getStringAttribute('dnsvservername');
  }
  public set dnsvservername(value: string) {
    this._dnsvservername = value;
  }
  public resetDnsvservername() {
    this._dnsvservername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsvservernameInput() {
    return this._dnsvservername;
  }

  // emailhome - computed: true, optional: true, required: false
  private _emailhome?: string; 
  public get emailhome() {
    return this.getStringAttribute('emailhome');
  }
  public set emailhome(value: string) {
    this._emailhome = value;
  }
  public resetEmailhome() {
    this._emailhome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailhomeInput() {
    return this._emailhome;
  }

  // encryptcsecexp - computed: true, optional: true, required: false
  private _encryptcsecexp?: string; 
  public get encryptcsecexp() {
    return this.getStringAttribute('encryptcsecexp');
  }
  public set encryptcsecexp(value: string) {
    this._encryptcsecexp = value;
  }
  public resetEncryptcsecexp() {
    this._encryptcsecexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptcsecexpInput() {
    return this._encryptcsecexp;
  }

  // epaclienttype - computed: true, optional: true, required: false
  private _epaclienttype?: string; 
  public get epaclienttype() {
    return this.getStringAttribute('epaclienttype');
  }
  public set epaclienttype(value: string) {
    this._epaclienttype = value;
  }
  public resetEpaclienttype() {
    this._epaclienttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epaclienttypeInput() {
    return this._epaclienttype;
  }

  // forcecleanup - computed: true, optional: true, required: false
  private _forcecleanup?: string[]; 
  public get forcecleanup() {
    return this.getListAttribute('forcecleanup');
  }
  public set forcecleanup(value: string[]) {
    this._forcecleanup = value;
  }
  public resetForcecleanup() {
    this._forcecleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcecleanupInput() {
    return this._forcecleanup;
  }

  // forcedtimeout - computed: true, optional: true, required: false
  private _forcedtimeout?: number; 
  public get forcedtimeout() {
    return this.getNumberAttribute('forcedtimeout');
  }
  public set forcedtimeout(value: number) {
    this._forcedtimeout = value;
  }
  public resetForcedtimeout() {
    this._forcedtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedtimeoutInput() {
    return this._forcedtimeout;
  }

  // forcedtimeoutwarning - computed: true, optional: true, required: false
  private _forcedtimeoutwarning?: number; 
  public get forcedtimeoutwarning() {
    return this.getNumberAttribute('forcedtimeoutwarning');
  }
  public set forcedtimeoutwarning(value: number) {
    this._forcedtimeoutwarning = value;
  }
  public resetForcedtimeoutwarning() {
    this._forcedtimeoutwarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedtimeoutwarningInput() {
    return this._forcedtimeoutwarning;
  }

  // fqdnspoofedip - computed: true, optional: true, required: false
  private _fqdnspoofedip?: string; 
  public get fqdnspoofedip() {
    return this.getStringAttribute('fqdnspoofedip');
  }
  public set fqdnspoofedip(value: string) {
    this._fqdnspoofedip = value;
  }
  public resetFqdnspoofedip() {
    this._fqdnspoofedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnspoofedipInput() {
    return this._fqdnspoofedip;
  }

  // ftpproxy - computed: true, optional: true, required: false
  private _ftpproxy?: string; 
  public get ftpproxy() {
    return this.getStringAttribute('ftpproxy');
  }
  public set ftpproxy(value: string) {
    this._ftpproxy = value;
  }
  public resetFtpproxy() {
    this._ftpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpproxyInput() {
    return this._ftpproxy;
  }

  // gopherproxy - computed: true, optional: true, required: false
  private _gopherproxy?: string; 
  public get gopherproxy() {
    return this.getStringAttribute('gopherproxy');
  }
  public set gopherproxy(value: string) {
    this._gopherproxy = value;
  }
  public resetGopherproxy() {
    this._gopherproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopherproxyInput() {
    return this._gopherproxy;
  }

  // homepage - computed: true, optional: true, required: false
  private _homepage?: string; 
  public get homepage() {
    return this.getStringAttribute('homepage');
  }
  public set homepage(value: string) {
    this._homepage = value;
  }
  public resetHomepage() {
    this._homepage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageInput() {
    return this._homepage;
  }

  // httpport - computed: true, optional: true, required: false
  private _httpport?: number[]; 
  public get httpport() {
    return this.getNumberListAttribute('httpport');
  }
  public set httpport(value: number[]) {
    this._httpport = value;
  }
  public resetHttpport() {
    this._httpport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpportInput() {
    return this._httpport;
  }

  // httpproxy - computed: true, optional: true, required: false
  private _httpproxy?: string; 
  public get httpproxy() {
    return this.getStringAttribute('httpproxy');
  }
  public set httpproxy(value: string) {
    this._httpproxy = value;
  }
  public resetHttpproxy() {
    this._httpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpproxyInput() {
    return this._httpproxy;
  }

  // icaproxy - computed: true, optional: true, required: false
  private _icaproxy?: string; 
  public get icaproxy() {
    return this.getStringAttribute('icaproxy');
  }
  public set icaproxy(value: string) {
    this._icaproxy = value;
  }
  public resetIcaproxy() {
    this._icaproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icaproxyInput() {
    return this._icaproxy;
  }

  // icasessiontimeout - computed: true, optional: true, required: false
  private _icasessiontimeout?: string; 
  public get icasessiontimeout() {
    return this.getStringAttribute('icasessiontimeout');
  }
  public set icasessiontimeout(value: string) {
    this._icasessiontimeout = value;
  }
  public resetIcasessiontimeout() {
    this._icasessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icasessiontimeoutInput() {
    return this._icasessiontimeout;
  }

  // icauseraccounting - computed: true, optional: true, required: false
  private _icauseraccounting?: string; 
  public get icauseraccounting() {
    return this.getStringAttribute('icauseraccounting');
  }
  public set icauseraccounting(value: string) {
    this._icauseraccounting = value;
  }
  public resetIcauseraccounting() {
    this._icauseraccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icauseraccountingInput() {
    return this._icauseraccounting;
  }

  // iconwithreceiver - computed: true, optional: true, required: false
  private _iconwithreceiver?: string; 
  public get iconwithreceiver() {
    return this.getStringAttribute('iconwithreceiver');
  }
  public set iconwithreceiver(value: string) {
    this._iconwithreceiver = value;
  }
  public resetIconwithreceiver() {
    this._iconwithreceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconwithreceiverInput() {
    return this._iconwithreceiver;
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

  // iipdnssuffix - computed: true, optional: true, required: false
  private _iipdnssuffix?: string; 
  public get iipdnssuffix() {
    return this.getStringAttribute('iipdnssuffix');
  }
  public set iipdnssuffix(value: string) {
    this._iipdnssuffix = value;
  }
  public resetIipdnssuffix() {
    this._iipdnssuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iipdnssuffixInput() {
    return this._iipdnssuffix;
  }

  // kcdaccount - computed: true, optional: true, required: false
  private _kcdaccount?: string; 
  public get kcdaccount() {
    return this.getStringAttribute('kcdaccount');
  }
  public set kcdaccount(value: string) {
    this._kcdaccount = value;
  }
  public resetKcdaccount() {
    this._kcdaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdaccountInput() {
    return this._kcdaccount;
  }

  // killconnections - computed: true, optional: true, required: false
  private _killconnections?: string; 
  public get killconnections() {
    return this.getStringAttribute('killconnections');
  }
  public set killconnections(value: string) {
    this._killconnections = value;
  }
  public resetKillconnections() {
    this._killconnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killconnectionsInput() {
    return this._killconnections;
  }

  // linuxpluginupgrade - computed: true, optional: true, required: false
  private _linuxpluginupgrade?: string; 
  public get linuxpluginupgrade() {
    return this.getStringAttribute('linuxpluginupgrade');
  }
  public set linuxpluginupgrade(value: string) {
    this._linuxpluginupgrade = value;
  }
  public resetLinuxpluginupgrade() {
    this._linuxpluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxpluginupgradeInput() {
    return this._linuxpluginupgrade;
  }

  // locallanaccess - computed: true, optional: true, required: false
  private _locallanaccess?: string; 
  public get locallanaccess() {
    return this.getStringAttribute('locallanaccess');
  }
  public set locallanaccess(value: string) {
    this._locallanaccess = value;
  }
  public resetLocallanaccess() {
    this._locallanaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locallanaccessInput() {
    return this._locallanaccess;
  }

  // loginscript - computed: true, optional: true, required: false
  private _loginscript?: string; 
  public get loginscript() {
    return this.getStringAttribute('loginscript');
  }
  public set loginscript(value: string) {
    this._loginscript = value;
  }
  public resetLoginscript() {
    this._loginscript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginscriptInput() {
    return this._loginscript;
  }

  // logoutscript - computed: true, optional: true, required: false
  private _logoutscript?: string; 
  public get logoutscript() {
    return this.getStringAttribute('logoutscript');
  }
  public set logoutscript(value: string) {
    this._logoutscript = value;
  }
  public resetLogoutscript() {
    this._logoutscript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutscriptInput() {
    return this._logoutscript;
  }

  // macpluginupgrade - computed: true, optional: true, required: false
  private _macpluginupgrade?: string; 
  public get macpluginupgrade() {
    return this.getStringAttribute('macpluginupgrade');
  }
  public set macpluginupgrade(value: string) {
    this._macpluginupgrade = value;
  }
  public resetMacpluginupgrade() {
    this._macpluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macpluginupgradeInput() {
    return this._macpluginupgrade;
  }

  // mdxtokentimeout - computed: true, optional: true, required: false
  private _mdxtokentimeout?: number; 
  public get mdxtokentimeout() {
    return this.getNumberAttribute('mdxtokentimeout');
  }
  public set mdxtokentimeout(value: number) {
    this._mdxtokentimeout = value;
  }
  public resetMdxtokentimeout() {
    this._mdxtokentimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdxtokentimeoutInput() {
    return this._mdxtokentimeout;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ntdomain - computed: true, optional: true, required: false
  private _ntdomain?: string; 
  public get ntdomain() {
    return this.getStringAttribute('ntdomain');
  }
  public set ntdomain(value: string) {
    this._ntdomain = value;
  }
  public resetNtdomain() {
    this._ntdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntdomainInput() {
    return this._ntdomain;
  }

  // pcoipprofilename - computed: true, optional: true, required: false
  private _pcoipprofilename?: string; 
  public get pcoipprofilename() {
    return this.getStringAttribute('pcoipprofilename');
  }
  public set pcoipprofilename(value: string) {
    this._pcoipprofilename = value;
  }
  public resetPcoipprofilename() {
    this._pcoipprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcoipprofilenameInput() {
    return this._pcoipprofilename;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // proxyexception - computed: true, optional: true, required: false
  private _proxyexception?: string; 
  public get proxyexception() {
    return this.getStringAttribute('proxyexception');
  }
  public set proxyexception(value: string) {
    this._proxyexception = value;
  }
  public resetProxyexception() {
    this._proxyexception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyexceptionInput() {
    return this._proxyexception;
  }

  // proxylocalbypass - computed: true, optional: true, required: false
  private _proxylocalbypass?: string; 
  public get proxylocalbypass() {
    return this.getStringAttribute('proxylocalbypass');
  }
  public set proxylocalbypass(value: string) {
    this._proxylocalbypass = value;
  }
  public resetProxylocalbypass() {
    this._proxylocalbypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxylocalbypassInput() {
    return this._proxylocalbypass;
  }

  // rdpclientprofilename - computed: true, optional: true, required: false
  private _rdpclientprofilename?: string; 
  public get rdpclientprofilename() {
    return this.getStringAttribute('rdpclientprofilename');
  }
  public set rdpclientprofilename(value: string) {
    this._rdpclientprofilename = value;
  }
  public resetRdpclientprofilename() {
    this._rdpclientprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpclientprofilenameInput() {
    return this._rdpclientprofilename;
  }

  // rfc1918 - computed: true, optional: true, required: false
  private _rfc1918?: string; 
  public get rfc1918() {
    return this.getStringAttribute('rfc1918');
  }
  public set rfc1918(value: string) {
    this._rfc1918 = value;
  }
  public resetRfc1918() {
    this._rfc1918 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1918Input() {
    return this._rfc1918;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // securebrowse - computed: true, optional: true, required: false
  private _securebrowse?: string; 
  public get securebrowse() {
    return this.getStringAttribute('securebrowse');
  }
  public set securebrowse(value: string) {
    this._securebrowse = value;
  }
  public resetSecurebrowse() {
    this._securebrowse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securebrowseInput() {
    return this._securebrowse;
  }

  // sesstimeout - computed: true, optional: true, required: false
  private _sesstimeout?: number; 
  public get sesstimeout() {
    return this.getNumberAttribute('sesstimeout');
  }
  public set sesstimeout(value: number) {
    this._sesstimeout = value;
  }
  public resetSesstimeout() {
    this._sesstimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesstimeoutInput() {
    return this._sesstimeout;
  }

  // smartgroup - computed: true, optional: true, required: false
  private _smartgroup?: string; 
  public get smartgroup() {
    return this.getStringAttribute('smartgroup');
  }
  public set smartgroup(value: string) {
    this._smartgroup = value;
  }
  public resetSmartgroup() {
    this._smartgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartgroupInput() {
    return this._smartgroup;
  }

  // socksproxy - computed: true, optional: true, required: false
  private _socksproxy?: string; 
  public get socksproxy() {
    return this.getStringAttribute('socksproxy');
  }
  public set socksproxy(value: string) {
    this._socksproxy = value;
  }
  public resetSocksproxy() {
    this._socksproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksproxyInput() {
    return this._socksproxy;
  }

  // splitdns - computed: true, optional: true, required: false
  private _splitdns?: string; 
  public get splitdns() {
    return this.getStringAttribute('splitdns');
  }
  public set splitdns(value: string) {
    this._splitdns = value;
  }
  public resetSplitdns() {
    this._splitdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitdnsInput() {
    return this._splitdns;
  }

  // splittunnel - computed: true, optional: true, required: false
  private _splittunnel?: string; 
  public get splittunnel() {
    return this.getStringAttribute('splittunnel');
  }
  public set splittunnel(value: string) {
    this._splittunnel = value;
  }
  public resetSplittunnel() {
    this._splittunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splittunnelInput() {
    return this._splittunnel;
  }

  // spoofiip - computed: true, optional: true, required: false
  private _spoofiip?: string; 
  public get spoofiip() {
    return this.getStringAttribute('spoofiip');
  }
  public set spoofiip(value: string) {
    this._spoofiip = value;
  }
  public resetSpoofiip() {
    this._spoofiip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofiipInput() {
    return this._spoofiip;
  }

  // sslproxy - computed: true, optional: true, required: false
  private _sslproxy?: string; 
  public get sslproxy() {
    return this.getStringAttribute('sslproxy');
  }
  public set sslproxy(value: string) {
    this._sslproxy = value;
  }
  public resetSslproxy() {
    this._sslproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslproxyInput() {
    return this._sslproxy;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // ssocredential - computed: true, optional: true, required: false
  private _ssocredential?: string; 
  public get ssocredential() {
    return this.getStringAttribute('ssocredential');
  }
  public set ssocredential(value: string) {
    this._ssocredential = value;
  }
  public resetSsocredential() {
    this._ssocredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssocredentialInput() {
    return this._ssocredential;
  }

  // storefronturl - computed: true, optional: true, required: false
  private _storefronturl?: string; 
  public get storefronturl() {
    return this.getStringAttribute('storefronturl');
  }
  public set storefronturl(value: string) {
    this._storefronturl = value;
  }
  public resetStorefronturl() {
    this._storefronturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storefronturlInput() {
    return this._storefronturl;
  }

  // transparentinterception - computed: true, optional: true, required: false
  private _transparentinterception?: string; 
  public get transparentinterception() {
    return this.getStringAttribute('transparentinterception');
  }
  public set transparentinterception(value: string) {
    this._transparentinterception = value;
  }
  public resetTransparentinterception() {
    this._transparentinterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentinterceptionInput() {
    return this._transparentinterception;
  }

  // uitheme - computed: true, optional: true, required: false
  private _uitheme?: string; 
  public get uitheme() {
    return this.getStringAttribute('uitheme');
  }
  public set uitheme(value: string) {
    this._uitheme = value;
  }
  public resetUitheme() {
    this._uitheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uithemeInput() {
    return this._uitheme;
  }

  // useiip - computed: true, optional: true, required: false
  private _useiip?: string; 
  public get useiip() {
    return this.getStringAttribute('useiip');
  }
  public set useiip(value: string) {
    this._useiip = value;
  }
  public resetUseiip() {
    this._useiip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useiipInput() {
    return this._useiip;
  }

  // usemip - computed: true, optional: true, required: false
  private _usemip?: string; 
  public get usemip() {
    return this.getStringAttribute('usemip');
  }
  public set usemip(value: string) {
    this._usemip = value;
  }
  public resetUsemip() {
    this._usemip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usemipInput() {
    return this._usemip;
  }

  // userdomains - computed: true, optional: true, required: false
  private _userdomains?: string; 
  public get userdomains() {
    return this.getStringAttribute('userdomains');
  }
  public set userdomains(value: string) {
    this._userdomains = value;
  }
  public resetUserdomains() {
    this._userdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdomainsInput() {
    return this._userdomains;
  }

  // wihome - computed: true, optional: true, required: false
  private _wihome?: string; 
  public get wihome() {
    return this.getStringAttribute('wihome');
  }
  public set wihome(value: string) {
    this._wihome = value;
  }
  public resetWihome() {
    this._wihome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wihomeInput() {
    return this._wihome;
  }

  // wihomeaddresstype - computed: true, optional: true, required: false
  private _wihomeaddresstype?: string; 
  public get wihomeaddresstype() {
    return this.getStringAttribute('wihomeaddresstype');
  }
  public set wihomeaddresstype(value: string) {
    this._wihomeaddresstype = value;
  }
  public resetWihomeaddresstype() {
    this._wihomeaddresstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wihomeaddresstypeInput() {
    return this._wihomeaddresstype;
  }

  // windowsautologon - computed: true, optional: true, required: false
  private _windowsautologon?: string; 
  public get windowsautologon() {
    return this.getStringAttribute('windowsautologon');
  }
  public set windowsautologon(value: string) {
    this._windowsautologon = value;
  }
  public resetWindowsautologon() {
    this._windowsautologon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsautologonInput() {
    return this._windowsautologon;
  }

  // windowsclienttype - computed: true, optional: true, required: false
  private _windowsclienttype?: string; 
  public get windowsclienttype() {
    return this.getStringAttribute('windowsclienttype');
  }
  public set windowsclienttype(value: string) {
    this._windowsclienttype = value;
  }
  public resetWindowsclienttype() {
    this._windowsclienttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsclienttypeInput() {
    return this._windowsclienttype;
  }

  // windowspluginupgrade - computed: true, optional: true, required: false
  private _windowspluginupgrade?: string; 
  public get windowspluginupgrade() {
    return this.getStringAttribute('windowspluginupgrade');
  }
  public set windowspluginupgrade(value: string) {
    this._windowspluginupgrade = value;
  }
  public resetWindowspluginupgrade() {
    this._windowspluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowspluginupgradeInput() {
    return this._windowspluginupgrade;
  }

  // winsip - computed: true, optional: true, required: false
  private _winsip?: string; 
  public get winsip() {
    return this.getStringAttribute('winsip');
  }
  public set winsip(value: string) {
    this._winsip = value;
  }
  public resetWinsip() {
    this._winsip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsipInput() {
    return this._winsip;
  }

  // wiportalmode - computed: true, optional: true, required: false
  private _wiportalmode?: string; 
  public get wiportalmode() {
    return this.getStringAttribute('wiportalmode');
  }
  public set wiportalmode(value: string) {
    this._wiportalmode = value;
  }
  public resetWiportalmode() {
    this._wiportalmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiportalmodeInput() {
    return this._wiportalmode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advancedclientlessvpnmode: cdktf.stringToTerraform(this._advancedclientlessvpnmode),
      allowedlogingroups: cdktf.stringToTerraform(this._allowedlogingroups),
      allprotocolproxy: cdktf.stringToTerraform(this._allprotocolproxy),
      alwaysonprofilename: cdktf.stringToTerraform(this._alwaysonprofilename),
      apptokentimeout: cdktf.numberToTerraform(this._apptokentimeout),
      authorizationgroup: cdktf.stringToTerraform(this._authorizationgroup),
      autoproxyurl: cdktf.stringToTerraform(this._autoproxyurl),
      backendcertvalidation: cdktf.stringToTerraform(this._backendcertvalidation),
      backendserversni: cdktf.stringToTerraform(this._backendserversni),
      citrixreceiverhome: cdktf.stringToTerraform(this._citrixreceiverhome),
      clientchoices: cdktf.stringToTerraform(this._clientchoices),
      clientcleanupprompt: cdktf.stringToTerraform(this._clientcleanupprompt),
      clientconfiguration: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientconfiguration),
      clientdebug: cdktf.stringToTerraform(this._clientdebug),
      clientidletimeout: cdktf.numberToTerraform(this._clientidletimeout),
      clientlessmodeurlencoding: cdktf.stringToTerraform(this._clientlessmodeurlencoding),
      clientlesspersistentcookie: cdktf.stringToTerraform(this._clientlesspersistentcookie),
      clientlessvpnmode: cdktf.stringToTerraform(this._clientlessvpnmode),
      clientoptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientoptions),
      clientsecurity: cdktf.stringToTerraform(this._clientsecurity),
      clientsecuritygroup: cdktf.stringToTerraform(this._clientsecuritygroup),
      clientsecuritylog: cdktf.stringToTerraform(this._clientsecuritylog),
      clientsecuritymessage: cdktf.stringToTerraform(this._clientsecuritymessage),
      clientversions: cdktf.stringToTerraform(this._clientversions),
      defaultauthorizationaction: cdktf.stringToTerraform(this._defaultauthorizationaction),
      dnsvservername: cdktf.stringToTerraform(this._dnsvservername),
      emailhome: cdktf.stringToTerraform(this._emailhome),
      encryptcsecexp: cdktf.stringToTerraform(this._encryptcsecexp),
      epaclienttype: cdktf.stringToTerraform(this._epaclienttype),
      forcecleanup: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcecleanup),
      forcedtimeout: cdktf.numberToTerraform(this._forcedtimeout),
      forcedtimeoutwarning: cdktf.numberToTerraform(this._forcedtimeoutwarning),
      fqdnspoofedip: cdktf.stringToTerraform(this._fqdnspoofedip),
      ftpproxy: cdktf.stringToTerraform(this._ftpproxy),
      gopherproxy: cdktf.stringToTerraform(this._gopherproxy),
      homepage: cdktf.stringToTerraform(this._homepage),
      httpport: cdktf.listMapper(cdktf.numberToTerraform, false)(this._httpport),
      httpproxy: cdktf.stringToTerraform(this._httpproxy),
      icaproxy: cdktf.stringToTerraform(this._icaproxy),
      icasessiontimeout: cdktf.stringToTerraform(this._icasessiontimeout),
      icauseraccounting: cdktf.stringToTerraform(this._icauseraccounting),
      iconwithreceiver: cdktf.stringToTerraform(this._iconwithreceiver),
      id: cdktf.stringToTerraform(this._id),
      iipdnssuffix: cdktf.stringToTerraform(this._iipdnssuffix),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      killconnections: cdktf.stringToTerraform(this._killconnections),
      linuxpluginupgrade: cdktf.stringToTerraform(this._linuxpluginupgrade),
      locallanaccess: cdktf.stringToTerraform(this._locallanaccess),
      loginscript: cdktf.stringToTerraform(this._loginscript),
      logoutscript: cdktf.stringToTerraform(this._logoutscript),
      macpluginupgrade: cdktf.stringToTerraform(this._macpluginupgrade),
      mdxtokentimeout: cdktf.numberToTerraform(this._mdxtokentimeout),
      netmask: cdktf.stringToTerraform(this._netmask),
      ntdomain: cdktf.stringToTerraform(this._ntdomain),
      pcoipprofilename: cdktf.stringToTerraform(this._pcoipprofilename),
      proxy: cdktf.stringToTerraform(this._proxy),
      proxyexception: cdktf.stringToTerraform(this._proxyexception),
      proxylocalbypass: cdktf.stringToTerraform(this._proxylocalbypass),
      rdpclientprofilename: cdktf.stringToTerraform(this._rdpclientprofilename),
      rfc1918: cdktf.stringToTerraform(this._rfc1918),
      samesite: cdktf.stringToTerraform(this._samesite),
      securebrowse: cdktf.stringToTerraform(this._securebrowse),
      sesstimeout: cdktf.numberToTerraform(this._sesstimeout),
      smartgroup: cdktf.stringToTerraform(this._smartgroup),
      socksproxy: cdktf.stringToTerraform(this._socksproxy),
      splitdns: cdktf.stringToTerraform(this._splitdns),
      splittunnel: cdktf.stringToTerraform(this._splittunnel),
      spoofiip: cdktf.stringToTerraform(this._spoofiip),
      sslproxy: cdktf.stringToTerraform(this._sslproxy),
      sso: cdktf.stringToTerraform(this._sso),
      ssocredential: cdktf.stringToTerraform(this._ssocredential),
      storefronturl: cdktf.stringToTerraform(this._storefronturl),
      transparentinterception: cdktf.stringToTerraform(this._transparentinterception),
      uitheme: cdktf.stringToTerraform(this._uitheme),
      useiip: cdktf.stringToTerraform(this._useiip),
      usemip: cdktf.stringToTerraform(this._usemip),
      userdomains: cdktf.stringToTerraform(this._userdomains),
      wihome: cdktf.stringToTerraform(this._wihome),
      wihomeaddresstype: cdktf.stringToTerraform(this._wihomeaddresstype),
      windowsautologon: cdktf.stringToTerraform(this._windowsautologon),
      windowsclienttype: cdktf.stringToTerraform(this._windowsclienttype),
      windowspluginupgrade: cdktf.stringToTerraform(this._windowspluginupgrade),
      winsip: cdktf.stringToTerraform(this._winsip),
      wiportalmode: cdktf.stringToTerraform(this._wiportalmode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advancedclientlessvpnmode: {
        value: cdktf.stringToHclTerraform(this._advancedclientlessvpnmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowedlogingroups: {
        value: cdktf.stringToHclTerraform(this._allowedlogingroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allprotocolproxy: {
        value: cdktf.stringToHclTerraform(this._allprotocolproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alwaysonprofilename: {
        value: cdktf.stringToHclTerraform(this._alwaysonprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apptokentimeout: {
        value: cdktf.numberToHclTerraform(this._apptokentimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorizationgroup: {
        value: cdktf.stringToHclTerraform(this._authorizationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoproxyurl: {
        value: cdktf.stringToHclTerraform(this._autoproxyurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backendcertvalidation: {
        value: cdktf.stringToHclTerraform(this._backendcertvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backendserversni: {
        value: cdktf.stringToHclTerraform(this._backendserversni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      citrixreceiverhome: {
        value: cdktf.stringToHclTerraform(this._citrixreceiverhome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientchoices: {
        value: cdktf.stringToHclTerraform(this._clientchoices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcleanupprompt: {
        value: cdktf.stringToHclTerraform(this._clientcleanupprompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientconfiguration: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientconfiguration),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clientdebug: {
        value: cdktf.stringToHclTerraform(this._clientdebug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientidletimeout: {
        value: cdktf.numberToHclTerraform(this._clientidletimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientlessmodeurlencoding: {
        value: cdktf.stringToHclTerraform(this._clientlessmodeurlencoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientlesspersistentcookie: {
        value: cdktf.stringToHclTerraform(this._clientlesspersistentcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientlessvpnmode: {
        value: cdktf.stringToHclTerraform(this._clientlessvpnmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientoptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientoptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clientsecurity: {
        value: cdktf.stringToHclTerraform(this._clientsecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecuritygroup: {
        value: cdktf.stringToHclTerraform(this._clientsecuritygroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecuritylog: {
        value: cdktf.stringToHclTerraform(this._clientsecuritylog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecuritymessage: {
        value: cdktf.stringToHclTerraform(this._clientsecuritymessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientversions: {
        value: cdktf.stringToHclTerraform(this._clientversions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultauthorizationaction: {
        value: cdktf.stringToHclTerraform(this._defaultauthorizationaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsvservername: {
        value: cdktf.stringToHclTerraform(this._dnsvservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailhome: {
        value: cdktf.stringToHclTerraform(this._emailhome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryptcsecexp: {
        value: cdktf.stringToHclTerraform(this._encryptcsecexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epaclienttype: {
        value: cdktf.stringToHclTerraform(this._epaclienttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forcecleanup: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcecleanup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      forcedtimeout: {
        value: cdktf.numberToHclTerraform(this._forcedtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forcedtimeoutwarning: {
        value: cdktf.numberToHclTerraform(this._forcedtimeoutwarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdnspoofedip: {
        value: cdktf.stringToHclTerraform(this._fqdnspoofedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftpproxy: {
        value: cdktf.stringToHclTerraform(this._ftpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gopherproxy: {
        value: cdktf.stringToHclTerraform(this._gopherproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      homepage: {
        value: cdktf.stringToHclTerraform(this._homepage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpport: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._httpport),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      httpproxy: {
        value: cdktf.stringToHclTerraform(this._httpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icaproxy: {
        value: cdktf.stringToHclTerraform(this._icaproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icasessiontimeout: {
        value: cdktf.stringToHclTerraform(this._icasessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icauseraccounting: {
        value: cdktf.stringToHclTerraform(this._icauseraccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iconwithreceiver: {
        value: cdktf.stringToHclTerraform(this._iconwithreceiver),
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
      iipdnssuffix: {
        value: cdktf.stringToHclTerraform(this._iipdnssuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kcdaccount: {
        value: cdktf.stringToHclTerraform(this._kcdaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      killconnections: {
        value: cdktf.stringToHclTerraform(this._killconnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linuxpluginupgrade: {
        value: cdktf.stringToHclTerraform(this._linuxpluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locallanaccess: {
        value: cdktf.stringToHclTerraform(this._locallanaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loginscript: {
        value: cdktf.stringToHclTerraform(this._loginscript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logoutscript: {
        value: cdktf.stringToHclTerraform(this._logoutscript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macpluginupgrade: {
        value: cdktf.stringToHclTerraform(this._macpluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdxtokentimeout: {
        value: cdktf.numberToHclTerraform(this._mdxtokentimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntdomain: {
        value: cdktf.stringToHclTerraform(this._ntdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcoipprofilename: {
        value: cdktf.stringToHclTerraform(this._pcoipprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyexception: {
        value: cdktf.stringToHclTerraform(this._proxyexception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxylocalbypass: {
        value: cdktf.stringToHclTerraform(this._proxylocalbypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpclientprofilename: {
        value: cdktf.stringToHclTerraform(this._rdpclientprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc1918: {
        value: cdktf.stringToHclTerraform(this._rfc1918),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samesite: {
        value: cdktf.stringToHclTerraform(this._samesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securebrowse: {
        value: cdktf.stringToHclTerraform(this._securebrowse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesstimeout: {
        value: cdktf.numberToHclTerraform(this._sesstimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smartgroup: {
        value: cdktf.stringToHclTerraform(this._smartgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socksproxy: {
        value: cdktf.stringToHclTerraform(this._socksproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splitdns: {
        value: cdktf.stringToHclTerraform(this._splitdns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splittunnel: {
        value: cdktf.stringToHclTerraform(this._splittunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofiip: {
        value: cdktf.stringToHclTerraform(this._spoofiip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslproxy: {
        value: cdktf.stringToHclTerraform(this._sslproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssocredential: {
        value: cdktf.stringToHclTerraform(this._ssocredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storefronturl: {
        value: cdktf.stringToHclTerraform(this._storefronturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparentinterception: {
        value: cdktf.stringToHclTerraform(this._transparentinterception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uitheme: {
        value: cdktf.stringToHclTerraform(this._uitheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useiip: {
        value: cdktf.stringToHclTerraform(this._useiip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usemip: {
        value: cdktf.stringToHclTerraform(this._usemip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdomains: {
        value: cdktf.stringToHclTerraform(this._userdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wihome: {
        value: cdktf.stringToHclTerraform(this._wihome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wihomeaddresstype: {
        value: cdktf.stringToHclTerraform(this._wihomeaddresstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windowsautologon: {
        value: cdktf.stringToHclTerraform(this._windowsautologon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windowsclienttype: {
        value: cdktf.stringToHclTerraform(this._windowsclienttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windowspluginupgrade: {
        value: cdktf.stringToHclTerraform(this._windowspluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      winsip: {
        value: cdktf.stringToHclTerraform(this._winsip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiportalmode: {
        value: cdktf.stringToHclTerraform(this._wiportalmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
