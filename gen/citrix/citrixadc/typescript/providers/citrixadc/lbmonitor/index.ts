// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#acctapplicationid Lbmonitor#acctapplicationid}
  */
  readonly acctapplicationid?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#action Lbmonitor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#alertretries Lbmonitor#alertretries}
  */
  readonly alertretries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#application Lbmonitor#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#attribute Lbmonitor#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#authapplicationid Lbmonitor#authapplicationid}
  */
  readonly authapplicationid?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#basedn Lbmonitor#basedn}
  */
  readonly basedn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#binddn Lbmonitor#binddn}
  */
  readonly binddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#customheaders Lbmonitor#customheaders}
  */
  readonly customheaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#database Lbmonitor#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#destip Lbmonitor#destip}
  */
  readonly destip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#destport Lbmonitor#destport}
  */
  readonly destport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#deviation Lbmonitor#deviation}
  */
  readonly deviation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#dispatcherip Lbmonitor#dispatcherip}
  */
  readonly dispatcherip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#dispatcherport Lbmonitor#dispatcherport}
  */
  readonly dispatcherport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#domain Lbmonitor#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#downtime Lbmonitor#downtime}
  */
  readonly downtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#evalrule Lbmonitor#evalrule}
  */
  readonly evalrule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#failureretries Lbmonitor#failureretries}
  */
  readonly failureretries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#filename Lbmonitor#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#filter Lbmonitor#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#firmwarerevision Lbmonitor#firmwarerevision}
  */
  readonly firmwarerevision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#group Lbmonitor#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#grpchealthcheck Lbmonitor#grpchealthcheck}
  */
  readonly grpchealthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#grpcservicename Lbmonitor#grpcservicename}
  */
  readonly grpcservicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#grpcstatuscode Lbmonitor#grpcstatuscode}
  */
  readonly grpcstatuscode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#hostipaddress Lbmonitor#hostipaddress}
  */
  readonly hostipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#hostname Lbmonitor#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#httprequest Lbmonitor#httprequest}
  */
  readonly httprequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#id Lbmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#inbandsecurityid Lbmonitor#inbandsecurityid}
  */
  readonly inbandsecurityid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#interval Lbmonitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#ipaddress Lbmonitor#ipaddress}
  */
  readonly ipaddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#iptunnel Lbmonitor#iptunnel}
  */
  readonly iptunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#kcdaccount Lbmonitor#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#lasversion Lbmonitor#lasversion}
  */
  readonly lasversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#logonpointname Lbmonitor#logonpointname}
  */
  readonly logonpointname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#lrtm Lbmonitor#lrtm}
  */
  readonly lrtm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#maxforwards Lbmonitor#maxforwards}
  */
  readonly maxforwards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#metric Lbmonitor#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#metrictable Lbmonitor#metrictable}
  */
  readonly metrictable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#metricthreshold Lbmonitor#metricthreshold}
  */
  readonly metricthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#metricweight Lbmonitor#metricweight}
  */
  readonly metricweight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#monitorname Lbmonitor#monitorname}
  */
  readonly monitorname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#mqttclientidentifier Lbmonitor#mqttclientidentifier}
  */
  readonly mqttclientidentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#mqttversion Lbmonitor#mqttversion}
  */
  readonly mqttversion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#mssqlprotocolversion Lbmonitor#mssqlprotocolversion}
  */
  readonly mssqlprotocolversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#netprofile Lbmonitor#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#oraclesid Lbmonitor#oraclesid}
  */
  readonly oraclesid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#originhost Lbmonitor#originhost}
  */
  readonly originhost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#originrealm Lbmonitor#originrealm}
  */
  readonly originrealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#password Lbmonitor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#productname Lbmonitor#productname}
  */
  readonly productname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#query Lbmonitor#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#querytype Lbmonitor#querytype}
  */
  readonly querytype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radaccountsession Lbmonitor#radaccountsession}
  */
  readonly radaccountsession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radaccounttype Lbmonitor#radaccounttype}
  */
  readonly radaccounttype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radapn Lbmonitor#radapn}
  */
  readonly radapn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radframedip Lbmonitor#radframedip}
  */
  readonly radframedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radkey Lbmonitor#radkey}
  */
  readonly radkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radmsisdn Lbmonitor#radmsisdn}
  */
  readonly radmsisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radnasid Lbmonitor#radnasid}
  */
  readonly radnasid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#radnasip Lbmonitor#radnasip}
  */
  readonly radnasip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#recv Lbmonitor#recv}
  */
  readonly recv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#respcode Lbmonitor#respcode}
  */
  readonly respcode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#resptimeout Lbmonitor#resptimeout}
  */
  readonly resptimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#resptimeoutthresh Lbmonitor#resptimeoutthresh}
  */
  readonly resptimeoutthresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#retries Lbmonitor#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#reverse Lbmonitor#reverse}
  */
  readonly reverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#rtsprequest Lbmonitor#rtsprequest}
  */
  readonly rtsprequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#scriptargs Lbmonitor#scriptargs}
  */
  readonly scriptargs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#scriptname Lbmonitor#scriptname}
  */
  readonly scriptname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#secondarypassword Lbmonitor#secondarypassword}
  */
  readonly secondarypassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#secure Lbmonitor#secure}
  */
  readonly secure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#secureargs Lbmonitor#secureargs}
  */
  readonly secureargs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#send Lbmonitor#send}
  */
  readonly send?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#servicegroupname Lbmonitor#servicegroupname}
  */
  readonly servicegroupname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#servicename Lbmonitor#servicename}
  */
  readonly servicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sipmethod Lbmonitor#sipmethod}
  */
  readonly sipmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sipreguri Lbmonitor#sipreguri}
  */
  readonly sipreguri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sipuri Lbmonitor#sipuri}
  */
  readonly sipuri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sitepath Lbmonitor#sitepath}
  */
  readonly sitepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#snmpcommunity Lbmonitor#snmpcommunity}
  */
  readonly snmpcommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#snmpoid Lbmonitor#snmpoid}
  */
  readonly snmpoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#snmpthreshold Lbmonitor#snmpthreshold}
  */
  readonly snmpthreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#snmpversion Lbmonitor#snmpversion}
  */
  readonly snmpversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sqlquery Lbmonitor#sqlquery}
  */
  readonly sqlquery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#sslprofile Lbmonitor#sslprofile}
  */
  readonly sslprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#state Lbmonitor#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#storedb Lbmonitor#storedb}
  */
  readonly storedb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#storefrontacctservice Lbmonitor#storefrontacctservice}
  */
  readonly storefrontacctservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#storefrontcheckbackendservices Lbmonitor#storefrontcheckbackendservices}
  */
  readonly storefrontcheckbackendservices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#storename Lbmonitor#storename}
  */
  readonly storename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#successretries Lbmonitor#successretries}
  */
  readonly successretries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#supportedvendorids Lbmonitor#supportedvendorids}
  */
  readonly supportedvendorids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#tos Lbmonitor#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#tosid Lbmonitor#tosid}
  */
  readonly tosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#transparent Lbmonitor#transparent}
  */
  readonly transparent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#trofscode Lbmonitor#trofscode}
  */
  readonly trofscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#trofsstring Lbmonitor#trofsstring}
  */
  readonly trofsstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#type Lbmonitor#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#units1 Lbmonitor#units1}
  */
  readonly units1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#units2 Lbmonitor#units2}
  */
  readonly units2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#units3 Lbmonitor#units3}
  */
  readonly units3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#units4 Lbmonitor#units4}
  */
  readonly units4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#username Lbmonitor#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#validatecred Lbmonitor#validatecred}
  */
  readonly validatecred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#vendorid Lbmonitor#vendorid}
  */
  readonly vendorid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#vendorspecificacctapplicationids Lbmonitor#vendorspecificacctapplicationids}
  */
  readonly vendorspecificacctapplicationids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#vendorspecificauthapplicationids Lbmonitor#vendorspecificauthapplicationids}
  */
  readonly vendorspecificauthapplicationids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#vendorspecificvendorid Lbmonitor#vendorspecificvendorid}
  */
  readonly vendorspecificvendorid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor citrixadc_lbmonitor}
*/
export class Lbmonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbmonitor to import
  * @param importFromId The id of the existing Lbmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbmonitor citrixadc_lbmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbmonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbmonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbmonitor',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctapplicationid = config.acctapplicationid;
    this._action = config.action;
    this._alertretries = config.alertretries;
    this._application = config.application;
    this._attribute = config.attribute;
    this._authapplicationid = config.authapplicationid;
    this._basedn = config.basedn;
    this._binddn = config.binddn;
    this._customheaders = config.customheaders;
    this._database = config.database;
    this._destip = config.destip;
    this._destport = config.destport;
    this._deviation = config.deviation;
    this._dispatcherip = config.dispatcherip;
    this._dispatcherport = config.dispatcherport;
    this._domain = config.domain;
    this._downtime = config.downtime;
    this._evalrule = config.evalrule;
    this._failureretries = config.failureretries;
    this._filename = config.filename;
    this._filter = config.filter;
    this._firmwarerevision = config.firmwarerevision;
    this._group = config.group;
    this._grpchealthcheck = config.grpchealthcheck;
    this._grpcservicename = config.grpcservicename;
    this._grpcstatuscode = config.grpcstatuscode;
    this._hostipaddress = config.hostipaddress;
    this._hostname = config.hostname;
    this._httprequest = config.httprequest;
    this._id = config.id;
    this._inbandsecurityid = config.inbandsecurityid;
    this._interval = config.interval;
    this._ipaddress = config.ipaddress;
    this._iptunnel = config.iptunnel;
    this._kcdaccount = config.kcdaccount;
    this._lasversion = config.lasversion;
    this._logonpointname = config.logonpointname;
    this._lrtm = config.lrtm;
    this._maxforwards = config.maxforwards;
    this._metric = config.metric;
    this._metrictable = config.metrictable;
    this._metricthreshold = config.metricthreshold;
    this._metricweight = config.metricweight;
    this._monitorname = config.monitorname;
    this._mqttclientidentifier = config.mqttclientidentifier;
    this._mqttversion = config.mqttversion;
    this._mssqlprotocolversion = config.mssqlprotocolversion;
    this._netprofile = config.netprofile;
    this._oraclesid = config.oraclesid;
    this._originhost = config.originhost;
    this._originrealm = config.originrealm;
    this._password = config.password;
    this._productname = config.productname;
    this._query = config.query;
    this._querytype = config.querytype;
    this._radaccountsession = config.radaccountsession;
    this._radaccounttype = config.radaccounttype;
    this._radapn = config.radapn;
    this._radframedip = config.radframedip;
    this._radkey = config.radkey;
    this._radmsisdn = config.radmsisdn;
    this._radnasid = config.radnasid;
    this._radnasip = config.radnasip;
    this._recv = config.recv;
    this._respcode = config.respcode;
    this._resptimeout = config.resptimeout;
    this._resptimeoutthresh = config.resptimeoutthresh;
    this._retries = config.retries;
    this._reverse = config.reverse;
    this._rtsprequest = config.rtsprequest;
    this._scriptargs = config.scriptargs;
    this._scriptname = config.scriptname;
    this._secondarypassword = config.secondarypassword;
    this._secure = config.secure;
    this._secureargs = config.secureargs;
    this._send = config.send;
    this._servicegroupname = config.servicegroupname;
    this._servicename = config.servicename;
    this._sipmethod = config.sipmethod;
    this._sipreguri = config.sipreguri;
    this._sipuri = config.sipuri;
    this._sitepath = config.sitepath;
    this._snmpcommunity = config.snmpcommunity;
    this._snmpoid = config.snmpoid;
    this._snmpthreshold = config.snmpthreshold;
    this._snmpversion = config.snmpversion;
    this._sqlquery = config.sqlquery;
    this._sslprofile = config.sslprofile;
    this._state = config.state;
    this._storedb = config.storedb;
    this._storefrontacctservice = config.storefrontacctservice;
    this._storefrontcheckbackendservices = config.storefrontcheckbackendservices;
    this._storename = config.storename;
    this._successretries = config.successretries;
    this._supportedvendorids = config.supportedvendorids;
    this._tos = config.tos;
    this._tosid = config.tosid;
    this._transparent = config.transparent;
    this._trofscode = config.trofscode;
    this._trofsstring = config.trofsstring;
    this._type = config.type;
    this._units1 = config.units1;
    this._units2 = config.units2;
    this._units3 = config.units3;
    this._units4 = config.units4;
    this._username = config.username;
    this._validatecred = config.validatecred;
    this._vendorid = config.vendorid;
    this._vendorspecificacctapplicationids = config.vendorspecificacctapplicationids;
    this._vendorspecificauthapplicationids = config.vendorspecificauthapplicationids;
    this._vendorspecificvendorid = config.vendorspecificvendorid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acctapplicationid - computed: true, optional: true, required: false
  private _acctapplicationid?: number[]; 
  public get acctapplicationid() {
    return this.getNumberListAttribute('acctapplicationid');
  }
  public set acctapplicationid(value: number[]) {
    this._acctapplicationid = value;
  }
  public resetAcctapplicationid() {
    this._acctapplicationid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctapplicationidInput() {
    return this._acctapplicationid;
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // alertretries - computed: true, optional: true, required: false
  private _alertretries?: number; 
  public get alertretries() {
    return this.getNumberAttribute('alertretries');
  }
  public set alertretries(value: number) {
    this._alertretries = value;
  }
  public resetAlertretries() {
    this._alertretries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertretriesInput() {
    return this._alertretries;
  }

  // application - computed: true, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // authapplicationid - computed: true, optional: true, required: false
  private _authapplicationid?: number[]; 
  public get authapplicationid() {
    return this.getNumberListAttribute('authapplicationid');
  }
  public set authapplicationid(value: number[]) {
    this._authapplicationid = value;
  }
  public resetAuthapplicationid() {
    this._authapplicationid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authapplicationidInput() {
    return this._authapplicationid;
  }

  // basedn - computed: true, optional: true, required: false
  private _basedn?: string; 
  public get basedn() {
    return this.getStringAttribute('basedn');
  }
  public set basedn(value: string) {
    this._basedn = value;
  }
  public resetBasedn() {
    this._basedn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basednInput() {
    return this._basedn;
  }

  // binddn - computed: true, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // customheaders - computed: true, optional: true, required: false
  private _customheaders?: string; 
  public get customheaders() {
    return this.getStringAttribute('customheaders');
  }
  public set customheaders(value: string) {
    this._customheaders = value;
  }
  public resetCustomheaders() {
    this._customheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customheadersInput() {
    return this._customheaders;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // destip - computed: true, optional: true, required: false
  private _destip?: string; 
  public get destip() {
    return this.getStringAttribute('destip');
  }
  public set destip(value: string) {
    this._destip = value;
  }
  public resetDestip() {
    this._destip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipInput() {
    return this._destip;
  }

  // destport - computed: true, optional: true, required: false
  private _destport?: number; 
  public get destport() {
    return this.getNumberAttribute('destport');
  }
  public set destport(value: number) {
    this._destport = value;
  }
  public resetDestport() {
    this._destport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportInput() {
    return this._destport;
  }

  // deviation - computed: true, optional: true, required: false
  private _deviation?: number; 
  public get deviation() {
    return this.getNumberAttribute('deviation');
  }
  public set deviation(value: number) {
    this._deviation = value;
  }
  public resetDeviation() {
    this._deviation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviationInput() {
    return this._deviation;
  }

  // dispatcherip - computed: true, optional: true, required: false
  private _dispatcherip?: string; 
  public get dispatcherip() {
    return this.getStringAttribute('dispatcherip');
  }
  public set dispatcherip(value: string) {
    this._dispatcherip = value;
  }
  public resetDispatcherip() {
    this._dispatcherip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatcheripInput() {
    return this._dispatcherip;
  }

  // dispatcherport - computed: true, optional: true, required: false
  private _dispatcherport?: number; 
  public get dispatcherport() {
    return this.getNumberAttribute('dispatcherport');
  }
  public set dispatcherport(value: number) {
    this._dispatcherport = value;
  }
  public resetDispatcherport() {
    this._dispatcherport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatcherportInput() {
    return this._dispatcherport;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // downtime - computed: true, optional: true, required: false
  private _downtime?: number; 
  public get downtime() {
    return this.getNumberAttribute('downtime');
  }
  public set downtime(value: number) {
    this._downtime = value;
  }
  public resetDowntime() {
    this._downtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downtimeInput() {
    return this._downtime;
  }

  // evalrule - computed: true, optional: true, required: false
  private _evalrule?: string; 
  public get evalrule() {
    return this.getStringAttribute('evalrule');
  }
  public set evalrule(value: string) {
    this._evalrule = value;
  }
  public resetEvalrule() {
    this._evalrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalruleInput() {
    return this._evalrule;
  }

  // failureretries - computed: true, optional: true, required: false
  private _failureretries?: number; 
  public get failureretries() {
    return this.getNumberAttribute('failureretries');
  }
  public set failureretries(value: number) {
    this._failureretries = value;
  }
  public resetFailureretries() {
    this._failureretries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureretriesInput() {
    return this._failureretries;
  }

  // filename - computed: true, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // firmwarerevision - computed: true, optional: true, required: false
  private _firmwarerevision?: number; 
  public get firmwarerevision() {
    return this.getNumberAttribute('firmwarerevision');
  }
  public set firmwarerevision(value: number) {
    this._firmwarerevision = value;
  }
  public resetFirmwarerevision() {
    this._firmwarerevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwarerevisionInput() {
    return this._firmwarerevision;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // grpchealthcheck - computed: true, optional: true, required: false
  private _grpchealthcheck?: string; 
  public get grpchealthcheck() {
    return this.getStringAttribute('grpchealthcheck');
  }
  public set grpchealthcheck(value: string) {
    this._grpchealthcheck = value;
  }
  public resetGrpchealthcheck() {
    this._grpchealthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpchealthcheckInput() {
    return this._grpchealthcheck;
  }

  // grpcservicename - computed: true, optional: true, required: false
  private _grpcservicename?: string; 
  public get grpcservicename() {
    return this.getStringAttribute('grpcservicename');
  }
  public set grpcservicename(value: string) {
    this._grpcservicename = value;
  }
  public resetGrpcservicename() {
    this._grpcservicename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcservicenameInput() {
    return this._grpcservicename;
  }

  // grpcstatuscode - computed: true, optional: true, required: false
  private _grpcstatuscode?: number[]; 
  public get grpcstatuscode() {
    return this.getNumberListAttribute('grpcstatuscode');
  }
  public set grpcstatuscode(value: number[]) {
    this._grpcstatuscode = value;
  }
  public resetGrpcstatuscode() {
    this._grpcstatuscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcstatuscodeInput() {
    return this._grpcstatuscode;
  }

  // hostipaddress - computed: true, optional: true, required: false
  private _hostipaddress?: string; 
  public get hostipaddress() {
    return this.getStringAttribute('hostipaddress');
  }
  public set hostipaddress(value: string) {
    this._hostipaddress = value;
  }
  public resetHostipaddress() {
    this._hostipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipaddressInput() {
    return this._hostipaddress;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // httprequest - computed: true, optional: true, required: false
  private _httprequest?: string; 
  public get httprequest() {
    return this.getStringAttribute('httprequest');
  }
  public set httprequest(value: string) {
    this._httprequest = value;
  }
  public resetHttprequest() {
    this._httprequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httprequestInput() {
    return this._httprequest;
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

  // inbandsecurityid - computed: true, optional: true, required: false
  private _inbandsecurityid?: string; 
  public get inbandsecurityid() {
    return this.getStringAttribute('inbandsecurityid');
  }
  public set inbandsecurityid(value: string) {
    this._inbandsecurityid = value;
  }
  public resetInbandsecurityid() {
    this._inbandsecurityid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandsecurityidInput() {
    return this._inbandsecurityid;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string[]; 
  public get ipaddress() {
    return this.getListAttribute('ipaddress');
  }
  public set ipaddress(value: string[]) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // iptunnel - computed: true, optional: true, required: false
  private _iptunnel?: string; 
  public get iptunnel() {
    return this.getStringAttribute('iptunnel');
  }
  public set iptunnel(value: string) {
    this._iptunnel = value;
  }
  public resetIptunnel() {
    this._iptunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptunnelInput() {
    return this._iptunnel;
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

  // lasversion - computed: true, optional: true, required: false
  private _lasversion?: string; 
  public get lasversion() {
    return this.getStringAttribute('lasversion');
  }
  public set lasversion(value: string) {
    this._lasversion = value;
  }
  public resetLasversion() {
    this._lasversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lasversionInput() {
    return this._lasversion;
  }

  // logonpointname - computed: true, optional: true, required: false
  private _logonpointname?: string; 
  public get logonpointname() {
    return this.getStringAttribute('logonpointname');
  }
  public set logonpointname(value: string) {
    this._logonpointname = value;
  }
  public resetLogonpointname() {
    this._logonpointname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonpointnameInput() {
    return this._logonpointname;
  }

  // lrtm - computed: true, optional: true, required: false
  private _lrtm?: string; 
  public get lrtm() {
    return this.getStringAttribute('lrtm');
  }
  public set lrtm(value: string) {
    this._lrtm = value;
  }
  public resetLrtm() {
    this._lrtm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lrtmInput() {
    return this._lrtm;
  }

  // maxforwards - computed: true, optional: true, required: false
  private _maxforwards?: number; 
  public get maxforwards() {
    return this.getNumberAttribute('maxforwards');
  }
  public set maxforwards(value: number) {
    this._maxforwards = value;
  }
  public resetMaxforwards() {
    this._maxforwards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxforwardsInput() {
    return this._maxforwards;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metrictable - computed: true, optional: true, required: false
  private _metrictable?: string; 
  public get metrictable() {
    return this.getStringAttribute('metrictable');
  }
  public set metrictable(value: string) {
    this._metrictable = value;
  }
  public resetMetrictable() {
    this._metrictable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metrictableInput() {
    return this._metrictable;
  }

  // metricthreshold - computed: true, optional: true, required: false
  private _metricthreshold?: number; 
  public get metricthreshold() {
    return this.getNumberAttribute('metricthreshold');
  }
  public set metricthreshold(value: number) {
    this._metricthreshold = value;
  }
  public resetMetricthreshold() {
    this._metricthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricthresholdInput() {
    return this._metricthreshold;
  }

  // metricweight - computed: true, optional: true, required: false
  private _metricweight?: number; 
  public get metricweight() {
    return this.getNumberAttribute('metricweight');
  }
  public set metricweight(value: number) {
    this._metricweight = value;
  }
  public resetMetricweight() {
    this._metricweight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricweightInput() {
    return this._metricweight;
  }

  // monitorname - computed: true, optional: true, required: false
  private _monitorname?: string; 
  public get monitorname() {
    return this.getStringAttribute('monitorname');
  }
  public set monitorname(value: string) {
    this._monitorname = value;
  }
  public resetMonitorname() {
    this._monitorname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornameInput() {
    return this._monitorname;
  }

  // mqttclientidentifier - computed: true, optional: true, required: false
  private _mqttclientidentifier?: string; 
  public get mqttclientidentifier() {
    return this.getStringAttribute('mqttclientidentifier');
  }
  public set mqttclientidentifier(value: string) {
    this._mqttclientidentifier = value;
  }
  public resetMqttclientidentifier() {
    this._mqttclientidentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttclientidentifierInput() {
    return this._mqttclientidentifier;
  }

  // mqttversion - computed: true, optional: true, required: false
  private _mqttversion?: number; 
  public get mqttversion() {
    return this.getNumberAttribute('mqttversion');
  }
  public set mqttversion(value: number) {
    this._mqttversion = value;
  }
  public resetMqttversion() {
    this._mqttversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttversionInput() {
    return this._mqttversion;
  }

  // mssqlprotocolversion - computed: true, optional: true, required: false
  private _mssqlprotocolversion?: string; 
  public get mssqlprotocolversion() {
    return this.getStringAttribute('mssqlprotocolversion');
  }
  public set mssqlprotocolversion(value: string) {
    this._mssqlprotocolversion = value;
  }
  public resetMssqlprotocolversion() {
    this._mssqlprotocolversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlprotocolversionInput() {
    return this._mssqlprotocolversion;
  }

  // netprofile - computed: true, optional: true, required: false
  private _netprofile?: string; 
  public get netprofile() {
    return this.getStringAttribute('netprofile');
  }
  public set netprofile(value: string) {
    this._netprofile = value;
  }
  public resetNetprofile() {
    this._netprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netprofileInput() {
    return this._netprofile;
  }

  // oraclesid - computed: true, optional: true, required: false
  private _oraclesid?: string; 
  public get oraclesid() {
    return this.getStringAttribute('oraclesid');
  }
  public set oraclesid(value: string) {
    this._oraclesid = value;
  }
  public resetOraclesid() {
    this._oraclesid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oraclesidInput() {
    return this._oraclesid;
  }

  // originhost - computed: true, optional: true, required: false
  private _originhost?: string; 
  public get originhost() {
    return this.getStringAttribute('originhost');
  }
  public set originhost(value: string) {
    this._originhost = value;
  }
  public resetOriginhost() {
    this._originhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originhostInput() {
    return this._originhost;
  }

  // originrealm - computed: true, optional: true, required: false
  private _originrealm?: string; 
  public get originrealm() {
    return this.getStringAttribute('originrealm');
  }
  public set originrealm(value: string) {
    this._originrealm = value;
  }
  public resetOriginrealm() {
    this._originrealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originrealmInput() {
    return this._originrealm;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // productname - computed: true, optional: true, required: false
  private _productname?: string; 
  public get productname() {
    return this.getStringAttribute('productname');
  }
  public set productname(value: string) {
    this._productname = value;
  }
  public resetProductname() {
    this._productname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productnameInput() {
    return this._productname;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // querytype - computed: true, optional: true, required: false
  private _querytype?: string; 
  public get querytype() {
    return this.getStringAttribute('querytype');
  }
  public set querytype(value: string) {
    this._querytype = value;
  }
  public resetQuerytype() {
    this._querytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querytypeInput() {
    return this._querytype;
  }

  // radaccountsession - computed: true, optional: true, required: false
  private _radaccountsession?: string; 
  public get radaccountsession() {
    return this.getStringAttribute('radaccountsession');
  }
  public set radaccountsession(value: string) {
    this._radaccountsession = value;
  }
  public resetRadaccountsession() {
    this._radaccountsession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radaccountsessionInput() {
    return this._radaccountsession;
  }

  // radaccounttype - computed: true, optional: true, required: false
  private _radaccounttype?: number; 
  public get radaccounttype() {
    return this.getNumberAttribute('radaccounttype');
  }
  public set radaccounttype(value: number) {
    this._radaccounttype = value;
  }
  public resetRadaccounttype() {
    this._radaccounttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radaccounttypeInput() {
    return this._radaccounttype;
  }

  // radapn - computed: true, optional: true, required: false
  private _radapn?: string; 
  public get radapn() {
    return this.getStringAttribute('radapn');
  }
  public set radapn(value: string) {
    this._radapn = value;
  }
  public resetRadapn() {
    this._radapn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radapnInput() {
    return this._radapn;
  }

  // radframedip - computed: true, optional: true, required: false
  private _radframedip?: string; 
  public get radframedip() {
    return this.getStringAttribute('radframedip');
  }
  public set radframedip(value: string) {
    this._radframedip = value;
  }
  public resetRadframedip() {
    this._radframedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radframedipInput() {
    return this._radframedip;
  }

  // radkey - computed: true, optional: true, required: false
  private _radkey?: string; 
  public get radkey() {
    return this.getStringAttribute('radkey');
  }
  public set radkey(value: string) {
    this._radkey = value;
  }
  public resetRadkey() {
    this._radkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radkeyInput() {
    return this._radkey;
  }

  // radmsisdn - computed: true, optional: true, required: false
  private _radmsisdn?: string; 
  public get radmsisdn() {
    return this.getStringAttribute('radmsisdn');
  }
  public set radmsisdn(value: string) {
    this._radmsisdn = value;
  }
  public resetRadmsisdn() {
    this._radmsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radmsisdnInput() {
    return this._radmsisdn;
  }

  // radnasid - computed: true, optional: true, required: false
  private _radnasid?: string; 
  public get radnasid() {
    return this.getStringAttribute('radnasid');
  }
  public set radnasid(value: string) {
    this._radnasid = value;
  }
  public resetRadnasid() {
    this._radnasid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radnasidInput() {
    return this._radnasid;
  }

  // radnasip - computed: true, optional: true, required: false
  private _radnasip?: string; 
  public get radnasip() {
    return this.getStringAttribute('radnasip');
  }
  public set radnasip(value: string) {
    this._radnasip = value;
  }
  public resetRadnasip() {
    this._radnasip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radnasipInput() {
    return this._radnasip;
  }

  // recv - computed: true, optional: true, required: false
  private _recv?: string; 
  public get recv() {
    return this.getStringAttribute('recv');
  }
  public set recv(value: string) {
    this._recv = value;
  }
  public resetRecv() {
    this._recv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvInput() {
    return this._recv;
  }

  // respcode - computed: false, optional: true, required: false
  private _respcode?: string[]; 
  public get respcode() {
    return this.getListAttribute('respcode');
  }
  public set respcode(value: string[]) {
    this._respcode = value;
  }
  public resetRespcode() {
    this._respcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respcodeInput() {
    return this._respcode;
  }

  // resptimeout - computed: true, optional: true, required: false
  private _resptimeout?: number; 
  public get resptimeout() {
    return this.getNumberAttribute('resptimeout');
  }
  public set resptimeout(value: number) {
    this._resptimeout = value;
  }
  public resetResptimeout() {
    this._resptimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resptimeoutInput() {
    return this._resptimeout;
  }

  // resptimeoutthresh - computed: true, optional: true, required: false
  private _resptimeoutthresh?: number; 
  public get resptimeoutthresh() {
    return this.getNumberAttribute('resptimeoutthresh');
  }
  public set resptimeoutthresh(value: number) {
    this._resptimeoutthresh = value;
  }
  public resetResptimeoutthresh() {
    this._resptimeoutthresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resptimeoutthreshInput() {
    return this._resptimeoutthresh;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // reverse - computed: true, optional: true, required: false
  private _reverse?: string; 
  public get reverse() {
    return this.getStringAttribute('reverse');
  }
  public set reverse(value: string) {
    this._reverse = value;
  }
  public resetReverse() {
    this._reverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }

  // rtsprequest - computed: true, optional: true, required: false
  private _rtsprequest?: string; 
  public get rtsprequest() {
    return this.getStringAttribute('rtsprequest');
  }
  public set rtsprequest(value: string) {
    this._rtsprequest = value;
  }
  public resetRtsprequest() {
    this._rtsprequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsprequestInput() {
    return this._rtsprequest;
  }

  // scriptargs - computed: true, optional: true, required: false
  private _scriptargs?: string; 
  public get scriptargs() {
    return this.getStringAttribute('scriptargs');
  }
  public set scriptargs(value: string) {
    this._scriptargs = value;
  }
  public resetScriptargs() {
    this._scriptargs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptargsInput() {
    return this._scriptargs;
  }

  // scriptname - computed: true, optional: true, required: false
  private _scriptname?: string; 
  public get scriptname() {
    return this.getStringAttribute('scriptname');
  }
  public set scriptname(value: string) {
    this._scriptname = value;
  }
  public resetScriptname() {
    this._scriptname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptnameInput() {
    return this._scriptname;
  }

  // secondarypassword - computed: true, optional: true, required: false
  private _secondarypassword?: string; 
  public get secondarypassword() {
    return this.getStringAttribute('secondarypassword');
  }
  public set secondarypassword(value: string) {
    this._secondarypassword = value;
  }
  public resetSecondarypassword() {
    this._secondarypassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarypasswordInput() {
    return this._secondarypassword;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // secureargs - computed: true, optional: true, required: false
  private _secureargs?: string; 
  public get secureargs() {
    return this.getStringAttribute('secureargs');
  }
  public set secureargs(value: string) {
    this._secureargs = value;
  }
  public resetSecureargs() {
    this._secureargs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureargsInput() {
    return this._secureargs;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // servicegroupname - computed: true, optional: true, required: false
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  public resetServicegroupname() {
    this._servicegroupname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupnameInput() {
    return this._servicegroupname;
  }

  // servicename - computed: true, optional: true, required: false
  private _servicename?: string; 
  public get servicename() {
    return this.getStringAttribute('servicename');
  }
  public set servicename(value: string) {
    this._servicename = value;
  }
  public resetServicename() {
    this._servicename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenameInput() {
    return this._servicename;
  }

  // sipmethod - computed: true, optional: true, required: false
  private _sipmethod?: string; 
  public get sipmethod() {
    return this.getStringAttribute('sipmethod');
  }
  public set sipmethod(value: string) {
    this._sipmethod = value;
  }
  public resetSipmethod() {
    this._sipmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipmethodInput() {
    return this._sipmethod;
  }

  // sipreguri - computed: true, optional: true, required: false
  private _sipreguri?: string; 
  public get sipreguri() {
    return this.getStringAttribute('sipreguri');
  }
  public set sipreguri(value: string) {
    this._sipreguri = value;
  }
  public resetSipreguri() {
    this._sipreguri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipreguriInput() {
    return this._sipreguri;
  }

  // sipuri - computed: true, optional: true, required: false
  private _sipuri?: string; 
  public get sipuri() {
    return this.getStringAttribute('sipuri');
  }
  public set sipuri(value: string) {
    this._sipuri = value;
  }
  public resetSipuri() {
    this._sipuri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipuriInput() {
    return this._sipuri;
  }

  // sitepath - computed: true, optional: true, required: false
  private _sitepath?: string; 
  public get sitepath() {
    return this.getStringAttribute('sitepath');
  }
  public set sitepath(value: string) {
    this._sitepath = value;
  }
  public resetSitepath() {
    this._sitepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitepathInput() {
    return this._sitepath;
  }

  // snmpcommunity - computed: true, optional: true, required: false
  private _snmpcommunity?: string; 
  public get snmpcommunity() {
    return this.getStringAttribute('snmpcommunity');
  }
  public set snmpcommunity(value: string) {
    this._snmpcommunity = value;
  }
  public resetSnmpcommunity() {
    this._snmpcommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpcommunityInput() {
    return this._snmpcommunity;
  }

  // snmpoid - computed: true, optional: true, required: false
  private _snmpoid?: string; 
  public get snmpoid() {
    return this.getStringAttribute('snmpoid');
  }
  public set snmpoid(value: string) {
    this._snmpoid = value;
  }
  public resetSnmpoid() {
    this._snmpoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpoidInput() {
    return this._snmpoid;
  }

  // snmpthreshold - computed: true, optional: true, required: false
  private _snmpthreshold?: string; 
  public get snmpthreshold() {
    return this.getStringAttribute('snmpthreshold');
  }
  public set snmpthreshold(value: string) {
    this._snmpthreshold = value;
  }
  public resetSnmpthreshold() {
    this._snmpthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpthresholdInput() {
    return this._snmpthreshold;
  }

  // snmpversion - computed: true, optional: true, required: false
  private _snmpversion?: string; 
  public get snmpversion() {
    return this.getStringAttribute('snmpversion');
  }
  public set snmpversion(value: string) {
    this._snmpversion = value;
  }
  public resetSnmpversion() {
    this._snmpversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpversionInput() {
    return this._snmpversion;
  }

  // sqlquery - computed: true, optional: true, required: false
  private _sqlquery?: string; 
  public get sqlquery() {
    return this.getStringAttribute('sqlquery');
  }
  public set sqlquery(value: string) {
    this._sqlquery = value;
  }
  public resetSqlquery() {
    this._sqlquery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlqueryInput() {
    return this._sqlquery;
  }

  // sslprofile - computed: true, optional: true, required: false
  private _sslprofile?: string; 
  public get sslprofile() {
    return this.getStringAttribute('sslprofile');
  }
  public set sslprofile(value: string) {
    this._sslprofile = value;
  }
  public resetSslprofile() {
    this._sslprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslprofileInput() {
    return this._sslprofile;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storedb - computed: true, optional: true, required: false
  private _storedb?: string; 
  public get storedb() {
    return this.getStringAttribute('storedb');
  }
  public set storedb(value: string) {
    this._storedb = value;
  }
  public resetStoredb() {
    this._storedb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedbInput() {
    return this._storedb;
  }

  // storefrontacctservice - computed: true, optional: true, required: false
  private _storefrontacctservice?: string; 
  public get storefrontacctservice() {
    return this.getStringAttribute('storefrontacctservice');
  }
  public set storefrontacctservice(value: string) {
    this._storefrontacctservice = value;
  }
  public resetStorefrontacctservice() {
    this._storefrontacctservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storefrontacctserviceInput() {
    return this._storefrontacctservice;
  }

  // storefrontcheckbackendservices - computed: true, optional: true, required: false
  private _storefrontcheckbackendservices?: string; 
  public get storefrontcheckbackendservices() {
    return this.getStringAttribute('storefrontcheckbackendservices');
  }
  public set storefrontcheckbackendservices(value: string) {
    this._storefrontcheckbackendservices = value;
  }
  public resetStorefrontcheckbackendservices() {
    this._storefrontcheckbackendservices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storefrontcheckbackendservicesInput() {
    return this._storefrontcheckbackendservices;
  }

  // storename - computed: true, optional: true, required: false
  private _storename?: string; 
  public get storename() {
    return this.getStringAttribute('storename');
  }
  public set storename(value: string) {
    this._storename = value;
  }
  public resetStorename() {
    this._storename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storenameInput() {
    return this._storename;
  }

  // successretries - computed: true, optional: true, required: false
  private _successretries?: number; 
  public get successretries() {
    return this.getNumberAttribute('successretries');
  }
  public set successretries(value: number) {
    this._successretries = value;
  }
  public resetSuccessretries() {
    this._successretries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successretriesInput() {
    return this._successretries;
  }

  // supportedvendorids - computed: true, optional: true, required: false
  private _supportedvendorids?: number[]; 
  public get supportedvendorids() {
    return this.getNumberListAttribute('supportedvendorids');
  }
  public set supportedvendorids(value: number[]) {
    this._supportedvendorids = value;
  }
  public resetSupportedvendorids() {
    this._supportedvendorids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedvendoridsInput() {
    return this._supportedvendorids;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tosid - computed: true, optional: true, required: false
  private _tosid?: number; 
  public get tosid() {
    return this.getNumberAttribute('tosid');
  }
  public set tosid(value: number) {
    this._tosid = value;
  }
  public resetTosid() {
    this._tosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosidInput() {
    return this._tosid;
  }

  // transparent - computed: true, optional: true, required: false
  private _transparent?: string; 
  public get transparent() {
    return this.getStringAttribute('transparent');
  }
  public set transparent(value: string) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // trofscode - computed: true, optional: true, required: false
  private _trofscode?: number; 
  public get trofscode() {
    return this.getNumberAttribute('trofscode');
  }
  public set trofscode(value: number) {
    this._trofscode = value;
  }
  public resetTrofscode() {
    this._trofscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trofscodeInput() {
    return this._trofscode;
  }

  // trofsstring - computed: true, optional: true, required: false
  private _trofsstring?: string; 
  public get trofsstring() {
    return this.getStringAttribute('trofsstring');
  }
  public set trofsstring(value: string) {
    this._trofsstring = value;
  }
  public resetTrofsstring() {
    this._trofsstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trofsstringInput() {
    return this._trofsstring;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // units1 - computed: true, optional: true, required: false
  private _units1?: string; 
  public get units1() {
    return this.getStringAttribute('units1');
  }
  public set units1(value: string) {
    this._units1 = value;
  }
  public resetUnits1() {
    this._units1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units1Input() {
    return this._units1;
  }

  // units2 - computed: true, optional: true, required: false
  private _units2?: string; 
  public get units2() {
    return this.getStringAttribute('units2');
  }
  public set units2(value: string) {
    this._units2 = value;
  }
  public resetUnits2() {
    this._units2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units2Input() {
    return this._units2;
  }

  // units3 - computed: true, optional: true, required: false
  private _units3?: string; 
  public get units3() {
    return this.getStringAttribute('units3');
  }
  public set units3(value: string) {
    this._units3 = value;
  }
  public resetUnits3() {
    this._units3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units3Input() {
    return this._units3;
  }

  // units4 - computed: true, optional: true, required: false
  private _units4?: string; 
  public get units4() {
    return this.getStringAttribute('units4');
  }
  public set units4(value: string) {
    this._units4 = value;
  }
  public resetUnits4() {
    this._units4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units4Input() {
    return this._units4;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // validatecred - computed: true, optional: true, required: false
  private _validatecred?: string; 
  public get validatecred() {
    return this.getStringAttribute('validatecred');
  }
  public set validatecred(value: string) {
    this._validatecred = value;
  }
  public resetValidatecred() {
    this._validatecred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatecredInput() {
    return this._validatecred;
  }

  // vendorid - computed: true, optional: true, required: false
  private _vendorid?: number; 
  public get vendorid() {
    return this.getNumberAttribute('vendorid');
  }
  public set vendorid(value: number) {
    this._vendorid = value;
  }
  public resetVendorid() {
    this._vendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendoridInput() {
    return this._vendorid;
  }

  // vendorspecificacctapplicationids - computed: true, optional: true, required: false
  private _vendorspecificacctapplicationids?: number[]; 
  public get vendorspecificacctapplicationids() {
    return this.getNumberListAttribute('vendorspecificacctapplicationids');
  }
  public set vendorspecificacctapplicationids(value: number[]) {
    this._vendorspecificacctapplicationids = value;
  }
  public resetVendorspecificacctapplicationids() {
    this._vendorspecificacctapplicationids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorspecificacctapplicationidsInput() {
    return this._vendorspecificacctapplicationids;
  }

  // vendorspecificauthapplicationids - computed: true, optional: true, required: false
  private _vendorspecificauthapplicationids?: number[]; 
  public get vendorspecificauthapplicationids() {
    return this.getNumberListAttribute('vendorspecificauthapplicationids');
  }
  public set vendorspecificauthapplicationids(value: number[]) {
    this._vendorspecificauthapplicationids = value;
  }
  public resetVendorspecificauthapplicationids() {
    this._vendorspecificauthapplicationids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorspecificauthapplicationidsInput() {
    return this._vendorspecificauthapplicationids;
  }

  // vendorspecificvendorid - computed: true, optional: true, required: false
  private _vendorspecificvendorid?: number; 
  public get vendorspecificvendorid() {
    return this.getNumberAttribute('vendorspecificvendorid');
  }
  public set vendorspecificvendorid(value: number) {
    this._vendorspecificvendorid = value;
  }
  public resetVendorspecificvendorid() {
    this._vendorspecificvendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorspecificvendoridInput() {
    return this._vendorspecificvendorid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acctapplicationid: cdktf.listMapper(cdktf.numberToTerraform, false)(this._acctapplicationid),
      action: cdktf.stringToTerraform(this._action),
      alertretries: cdktf.numberToTerraform(this._alertretries),
      application: cdktf.stringToTerraform(this._application),
      attribute: cdktf.stringToTerraform(this._attribute),
      authapplicationid: cdktf.listMapper(cdktf.numberToTerraform, false)(this._authapplicationid),
      basedn: cdktf.stringToTerraform(this._basedn),
      binddn: cdktf.stringToTerraform(this._binddn),
      customheaders: cdktf.stringToTerraform(this._customheaders),
      database: cdktf.stringToTerraform(this._database),
      destip: cdktf.stringToTerraform(this._destip),
      destport: cdktf.numberToTerraform(this._destport),
      deviation: cdktf.numberToTerraform(this._deviation),
      dispatcherip: cdktf.stringToTerraform(this._dispatcherip),
      dispatcherport: cdktf.numberToTerraform(this._dispatcherport),
      domain: cdktf.stringToTerraform(this._domain),
      downtime: cdktf.numberToTerraform(this._downtime),
      evalrule: cdktf.stringToTerraform(this._evalrule),
      failureretries: cdktf.numberToTerraform(this._failureretries),
      filename: cdktf.stringToTerraform(this._filename),
      filter: cdktf.stringToTerraform(this._filter),
      firmwarerevision: cdktf.numberToTerraform(this._firmwarerevision),
      group: cdktf.stringToTerraform(this._group),
      grpchealthcheck: cdktf.stringToTerraform(this._grpchealthcheck),
      grpcservicename: cdktf.stringToTerraform(this._grpcservicename),
      grpcstatuscode: cdktf.listMapper(cdktf.numberToTerraform, false)(this._grpcstatuscode),
      hostipaddress: cdktf.stringToTerraform(this._hostipaddress),
      hostname: cdktf.stringToTerraform(this._hostname),
      httprequest: cdktf.stringToTerraform(this._httprequest),
      id: cdktf.stringToTerraform(this._id),
      inbandsecurityid: cdktf.stringToTerraform(this._inbandsecurityid),
      interval: cdktf.numberToTerraform(this._interval),
      ipaddress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipaddress),
      iptunnel: cdktf.stringToTerraform(this._iptunnel),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      lasversion: cdktf.stringToTerraform(this._lasversion),
      logonpointname: cdktf.stringToTerraform(this._logonpointname),
      lrtm: cdktf.stringToTerraform(this._lrtm),
      maxforwards: cdktf.numberToTerraform(this._maxforwards),
      metric: cdktf.stringToTerraform(this._metric),
      metrictable: cdktf.stringToTerraform(this._metrictable),
      metricthreshold: cdktf.numberToTerraform(this._metricthreshold),
      metricweight: cdktf.numberToTerraform(this._metricweight),
      monitorname: cdktf.stringToTerraform(this._monitorname),
      mqttclientidentifier: cdktf.stringToTerraform(this._mqttclientidentifier),
      mqttversion: cdktf.numberToTerraform(this._mqttversion),
      mssqlprotocolversion: cdktf.stringToTerraform(this._mssqlprotocolversion),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      oraclesid: cdktf.stringToTerraform(this._oraclesid),
      originhost: cdktf.stringToTerraform(this._originhost),
      originrealm: cdktf.stringToTerraform(this._originrealm),
      password: cdktf.stringToTerraform(this._password),
      productname: cdktf.stringToTerraform(this._productname),
      query: cdktf.stringToTerraform(this._query),
      querytype: cdktf.stringToTerraform(this._querytype),
      radaccountsession: cdktf.stringToTerraform(this._radaccountsession),
      radaccounttype: cdktf.numberToTerraform(this._radaccounttype),
      radapn: cdktf.stringToTerraform(this._radapn),
      radframedip: cdktf.stringToTerraform(this._radframedip),
      radkey: cdktf.stringToTerraform(this._radkey),
      radmsisdn: cdktf.stringToTerraform(this._radmsisdn),
      radnasid: cdktf.stringToTerraform(this._radnasid),
      radnasip: cdktf.stringToTerraform(this._radnasip),
      recv: cdktf.stringToTerraform(this._recv),
      respcode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._respcode),
      resptimeout: cdktf.numberToTerraform(this._resptimeout),
      resptimeoutthresh: cdktf.numberToTerraform(this._resptimeoutthresh),
      retries: cdktf.numberToTerraform(this._retries),
      reverse: cdktf.stringToTerraform(this._reverse),
      rtsprequest: cdktf.stringToTerraform(this._rtsprequest),
      scriptargs: cdktf.stringToTerraform(this._scriptargs),
      scriptname: cdktf.stringToTerraform(this._scriptname),
      secondarypassword: cdktf.stringToTerraform(this._secondarypassword),
      secure: cdktf.stringToTerraform(this._secure),
      secureargs: cdktf.stringToTerraform(this._secureargs),
      send: cdktf.stringToTerraform(this._send),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      servicename: cdktf.stringToTerraform(this._servicename),
      sipmethod: cdktf.stringToTerraform(this._sipmethod),
      sipreguri: cdktf.stringToTerraform(this._sipreguri),
      sipuri: cdktf.stringToTerraform(this._sipuri),
      sitepath: cdktf.stringToTerraform(this._sitepath),
      snmpcommunity: cdktf.stringToTerraform(this._snmpcommunity),
      snmpoid: cdktf.stringToTerraform(this._snmpoid),
      snmpthreshold: cdktf.stringToTerraform(this._snmpthreshold),
      snmpversion: cdktf.stringToTerraform(this._snmpversion),
      sqlquery: cdktf.stringToTerraform(this._sqlquery),
      sslprofile: cdktf.stringToTerraform(this._sslprofile),
      state: cdktf.stringToTerraform(this._state),
      storedb: cdktf.stringToTerraform(this._storedb),
      storefrontacctservice: cdktf.stringToTerraform(this._storefrontacctservice),
      storefrontcheckbackendservices: cdktf.stringToTerraform(this._storefrontcheckbackendservices),
      storename: cdktf.stringToTerraform(this._storename),
      successretries: cdktf.numberToTerraform(this._successretries),
      supportedvendorids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._supportedvendorids),
      tos: cdktf.stringToTerraform(this._tos),
      tosid: cdktf.numberToTerraform(this._tosid),
      transparent: cdktf.stringToTerraform(this._transparent),
      trofscode: cdktf.numberToTerraform(this._trofscode),
      trofsstring: cdktf.stringToTerraform(this._trofsstring),
      type: cdktf.stringToTerraform(this._type),
      units1: cdktf.stringToTerraform(this._units1),
      units2: cdktf.stringToTerraform(this._units2),
      units3: cdktf.stringToTerraform(this._units3),
      units4: cdktf.stringToTerraform(this._units4),
      username: cdktf.stringToTerraform(this._username),
      validatecred: cdktf.stringToTerraform(this._validatecred),
      vendorid: cdktf.numberToTerraform(this._vendorid),
      vendorspecificacctapplicationids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vendorspecificacctapplicationids),
      vendorspecificauthapplicationids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vendorspecificauthapplicationids),
      vendorspecificvendorid: cdktf.numberToTerraform(this._vendorspecificvendorid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acctapplicationid: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._acctapplicationid),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alertretries: {
        value: cdktf.numberToHclTerraform(this._alertretries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authapplicationid: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._authapplicationid),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      basedn: {
        value: cdktf.stringToHclTerraform(this._basedn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binddn: {
        value: cdktf.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customheaders: {
        value: cdktf.stringToHclTerraform(this._customheaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destip: {
        value: cdktf.stringToHclTerraform(this._destip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destport: {
        value: cdktf.numberToHclTerraform(this._destport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deviation: {
        value: cdktf.numberToHclTerraform(this._deviation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatcherip: {
        value: cdktf.stringToHclTerraform(this._dispatcherip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatcherport: {
        value: cdktf.numberToHclTerraform(this._dispatcherport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downtime: {
        value: cdktf.numberToHclTerraform(this._downtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evalrule: {
        value: cdktf.stringToHclTerraform(this._evalrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failureretries: {
        value: cdktf.numberToHclTerraform(this._failureretries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmwarerevision: {
        value: cdktf.numberToHclTerraform(this._firmwarerevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpchealthcheck: {
        value: cdktf.stringToHclTerraform(this._grpchealthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpcservicename: {
        value: cdktf.stringToHclTerraform(this._grpcservicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpcstatuscode: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._grpcstatuscode),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      hostipaddress: {
        value: cdktf.stringToHclTerraform(this._hostipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httprequest: {
        value: cdktf.stringToHclTerraform(this._httprequest),
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
      inbandsecurityid: {
        value: cdktf.stringToHclTerraform(this._inbandsecurityid),
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
      ipaddress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipaddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      iptunnel: {
        value: cdktf.stringToHclTerraform(this._iptunnel),
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
      lasversion: {
        value: cdktf.stringToHclTerraform(this._lasversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logonpointname: {
        value: cdktf.stringToHclTerraform(this._logonpointname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lrtm: {
        value: cdktf.stringToHclTerraform(this._lrtm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxforwards: {
        value: cdktf.numberToHclTerraform(this._maxforwards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrictable: {
        value: cdktf.stringToHclTerraform(this._metrictable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metricthreshold: {
        value: cdktf.numberToHclTerraform(this._metricthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metricweight: {
        value: cdktf.numberToHclTerraform(this._metricweight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitorname: {
        value: cdktf.stringToHclTerraform(this._monitorname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqttclientidentifier: {
        value: cdktf.stringToHclTerraform(this._mqttclientidentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqttversion: {
        value: cdktf.numberToHclTerraform(this._mqttversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mssqlprotocolversion: {
        value: cdktf.stringToHclTerraform(this._mssqlprotocolversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oraclesid: {
        value: cdktf.stringToHclTerraform(this._oraclesid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      originhost: {
        value: cdktf.stringToHclTerraform(this._originhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      originrealm: {
        value: cdktf.stringToHclTerraform(this._originrealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      productname: {
        value: cdktf.stringToHclTerraform(this._productname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      querytype: {
        value: cdktf.stringToHclTerraform(this._querytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radaccountsession: {
        value: cdktf.stringToHclTerraform(this._radaccountsession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radaccounttype: {
        value: cdktf.numberToHclTerraform(this._radaccounttype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radapn: {
        value: cdktf.stringToHclTerraform(this._radapn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radframedip: {
        value: cdktf.stringToHclTerraform(this._radframedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radkey: {
        value: cdktf.stringToHclTerraform(this._radkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radmsisdn: {
        value: cdktf.stringToHclTerraform(this._radmsisdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radnasid: {
        value: cdktf.stringToHclTerraform(this._radnasid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radnasip: {
        value: cdktf.stringToHclTerraform(this._radnasip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recv: {
        value: cdktf.stringToHclTerraform(this._recv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respcode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._respcode),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resptimeout: {
        value: cdktf.numberToHclTerraform(this._resptimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resptimeoutthresh: {
        value: cdktf.numberToHclTerraform(this._resptimeoutthresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reverse: {
        value: cdktf.stringToHclTerraform(this._reverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtsprequest: {
        value: cdktf.stringToHclTerraform(this._rtsprequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scriptargs: {
        value: cdktf.stringToHclTerraform(this._scriptargs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scriptname: {
        value: cdktf.stringToHclTerraform(this._scriptname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondarypassword: {
        value: cdktf.stringToHclTerraform(this._secondarypassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure: {
        value: cdktf.stringToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secureargs: {
        value: cdktf.stringToHclTerraform(this._secureargs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send: {
        value: cdktf.stringToHclTerraform(this._send),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicename: {
        value: cdktf.stringToHclTerraform(this._servicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipmethod: {
        value: cdktf.stringToHclTerraform(this._sipmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipreguri: {
        value: cdktf.stringToHclTerraform(this._sipreguri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipuri: {
        value: cdktf.stringToHclTerraform(this._sipuri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitepath: {
        value: cdktf.stringToHclTerraform(this._sitepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpcommunity: {
        value: cdktf.stringToHclTerraform(this._snmpcommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpoid: {
        value: cdktf.stringToHclTerraform(this._snmpoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpthreshold: {
        value: cdktf.stringToHclTerraform(this._snmpthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpversion: {
        value: cdktf.stringToHclTerraform(this._snmpversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlquery: {
        value: cdktf.stringToHclTerraform(this._sqlquery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslprofile: {
        value: cdktf.stringToHclTerraform(this._sslprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storedb: {
        value: cdktf.stringToHclTerraform(this._storedb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storefrontacctservice: {
        value: cdktf.stringToHclTerraform(this._storefrontacctservice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storefrontcheckbackendservices: {
        value: cdktf.stringToHclTerraform(this._storefrontcheckbackendservices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storename: {
        value: cdktf.stringToHclTerraform(this._storename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      successretries: {
        value: cdktf.numberToHclTerraform(this._successretries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      supportedvendorids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._supportedvendorids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tosid: {
        value: cdktf.numberToHclTerraform(this._tosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transparent: {
        value: cdktf.stringToHclTerraform(this._transparent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trofscode: {
        value: cdktf.numberToHclTerraform(this._trofscode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trofsstring: {
        value: cdktf.stringToHclTerraform(this._trofsstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units1: {
        value: cdktf.stringToHclTerraform(this._units1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units2: {
        value: cdktf.stringToHclTerraform(this._units2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units3: {
        value: cdktf.stringToHclTerraform(this._units3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units4: {
        value: cdktf.stringToHclTerraform(this._units4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validatecred: {
        value: cdktf.stringToHclTerraform(this._validatecred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendorid: {
        value: cdktf.numberToHclTerraform(this._vendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vendorspecificacctapplicationids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vendorspecificacctapplicationids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      vendorspecificauthapplicationids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vendorspecificauthapplicationids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      vendorspecificvendorid: {
        value: cdktf.numberToHclTerraform(this._vendorspecificvendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
