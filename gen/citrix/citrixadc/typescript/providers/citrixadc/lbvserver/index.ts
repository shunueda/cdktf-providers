// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#appflowlog Lbvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#authentication Lbvserver#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#authenticationhost Lbvserver#authenticationhost}
  */
  readonly authenticationhost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#authn401 Lbvserver#authn401}
  */
  readonly authn401?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#authnprofile Lbvserver#authnprofile}
  */
  readonly authnprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#authnvsname Lbvserver#authnvsname}
  */
  readonly authnvsname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#backuplbmethod Lbvserver#backuplbmethod}
  */
  readonly backuplbmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#backuppersistencetimeout Lbvserver#backuppersistencetimeout}
  */
  readonly backuppersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#backupvserver Lbvserver#backupvserver}
  */
  readonly backupvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#bypassaaaa Lbvserver#bypassaaaa}
  */
  readonly bypassaaaa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#cacheable Lbvserver#cacheable}
  */
  readonly cacheable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ciphers Lbvserver#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ciphersuites Lbvserver#ciphersuites}
  */
  readonly ciphersuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#clttimeout Lbvserver#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#comment Lbvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#connfailover Lbvserver#connfailover}
  */
  readonly connfailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#cookiename Lbvserver#cookiename}
  */
  readonly cookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#datalength Lbvserver#datalength}
  */
  readonly datalength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#dataoffset Lbvserver#dataoffset}
  */
  readonly dataoffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#dbprofilename Lbvserver#dbprofilename}
  */
  readonly dbprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#dbslb Lbvserver#dbslb}
  */
  readonly dbslb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#disableprimaryondown Lbvserver#disableprimaryondown}
  */
  readonly disableprimaryondown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#dns64 Lbvserver#dns64}
  */
  readonly dns64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#dnsprofilename Lbvserver#dnsprofilename}
  */
  readonly dnsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#downstateflush Lbvserver#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#hashlength Lbvserver#hashlength}
  */
  readonly hashlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#healththreshold Lbvserver#healththreshold}
  */
  readonly healththreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#httpprofilename Lbvserver#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#httpsredirecturl Lbvserver#httpsredirecturl}
  */
  readonly httpsredirecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#icmpvsrresponse Lbvserver#icmpvsrresponse}
  */
  readonly icmpvsrresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#id Lbvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#insertvserveripport Lbvserver#insertvserveripport}
  */
  readonly insertvserveripport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ipmask Lbvserver#ipmask}
  */
  readonly ipmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ippattern Lbvserver#ippattern}
  */
  readonly ippattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ipset Lbvserver#ipset}
  */
  readonly ipset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#ipv46 Lbvserver#ipv46}
  */
  readonly ipv46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#l2conn Lbvserver#l2conn}
  */
  readonly l2Conn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#lbmethod Lbvserver#lbmethod}
  */
  readonly lbmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#lbprofilename Lbvserver#lbprofilename}
  */
  readonly lbprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#listenpolicy Lbvserver#listenpolicy}
  */
  readonly listenpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#listenpriority Lbvserver#listenpriority}
  */
  readonly listenpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#m Lbvserver#m}
  */
  readonly m?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#macmoderetainvlan Lbvserver#macmoderetainvlan}
  */
  readonly macmoderetainvlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#maxautoscalemembers Lbvserver#maxautoscalemembers}
  */
  readonly maxautoscalemembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#minautoscalemembers Lbvserver#minautoscalemembers}
  */
  readonly minautoscalemembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#mssqlserverversion Lbvserver#mssqlserverversion}
  */
  readonly mssqlserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#mysqlcharacterset Lbvserver#mysqlcharacterset}
  */
  readonly mysqlcharacterset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#mysqlprotocolversion Lbvserver#mysqlprotocolversion}
  */
  readonly mysqlprotocolversion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#mysqlservercapabilities Lbvserver#mysqlservercapabilities}
  */
  readonly mysqlservercapabilities?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#mysqlserverversion Lbvserver#mysqlserverversion}
  */
  readonly mysqlserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#name Lbvserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#netmask Lbvserver#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#netprofile Lbvserver#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#newname Lbvserver#newname}
  */
  readonly newname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#newservicerequest Lbvserver#newservicerequest}
  */
  readonly newservicerequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#newservicerequestincrementinterval Lbvserver#newservicerequestincrementinterval}
  */
  readonly newservicerequestincrementinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#newservicerequestunit Lbvserver#newservicerequestunit}
  */
  readonly newservicerequestunit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#oracleserverversion Lbvserver#oracleserverversion}
  */
  readonly oracleserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#persistencebackup Lbvserver#persistencebackup}
  */
  readonly persistencebackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#persistencetype Lbvserver#persistencetype}
  */
  readonly persistencetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#persistmask Lbvserver#persistmask}
  */
  readonly persistmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#port Lbvserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#probeport Lbvserver#probeport}
  */
  readonly probeport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#probeprotocol Lbvserver#probeprotocol}
  */
  readonly probeprotocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#processlocal Lbvserver#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#push Lbvserver#push}
  */
  readonly push?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#pushlabel Lbvserver#pushlabel}
  */
  readonly pushlabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#pushmulticlients Lbvserver#pushmulticlients}
  */
  readonly pushmulticlients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#pushvserver Lbvserver#pushvserver}
  */
  readonly pushvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#quicbridgeprofilename Lbvserver#quicbridgeprofilename}
  */
  readonly quicbridgeprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#range Lbvserver#range}
  */
  readonly range?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#recursionavailable Lbvserver#recursionavailable}
  */
  readonly recursionavailable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#redirectfromport Lbvserver#redirectfromport}
  */
  readonly redirectfromport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#redirectportrewrite Lbvserver#redirectportrewrite}
  */
  readonly redirectportrewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#redirurl Lbvserver#redirurl}
  */
  readonly redirurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#redirurlflags Lbvserver#redirurlflags}
  */
  readonly redirurlflags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#resrule Lbvserver#resrule}
  */
  readonly resrule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#retainconnectionsoncluster Lbvserver#retainconnectionsoncluster}
  */
  readonly retainconnectionsoncluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#rhistate Lbvserver#rhistate}
  */
  readonly rhistate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#rtspnat Lbvserver#rtspnat}
  */
  readonly rtspnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#rule Lbvserver#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#servicename Lbvserver#servicename}
  */
  readonly servicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#servicetype Lbvserver#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sessionless Lbvserver#sessionless}
  */
  readonly sessionless?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#skippersistency Lbvserver#skippersistency}
  */
  readonly skippersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#snisslcertkeys Lbvserver#snisslcertkeys}
  */
  readonly snisslcertkeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sobackupaction Lbvserver#sobackupaction}
  */
  readonly sobackupaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#somethod Lbvserver#somethod}
  */
  readonly somethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sopersistence Lbvserver#sopersistence}
  */
  readonly sopersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sopersistencetimeout Lbvserver#sopersistencetimeout}
  */
  readonly sopersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sothreshold Lbvserver#sothreshold}
  */
  readonly sothreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sslcertkey Lbvserver#sslcertkey}
  */
  readonly sslcertkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sslprofile Lbvserver#sslprofile}
  */
  readonly sslprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#state Lbvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#tcpprofilename Lbvserver#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#td Lbvserver#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#timeout Lbvserver#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#tosid Lbvserver#tosid}
  */
  readonly tosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#trofspersistence Lbvserver#trofspersistence}
  */
  readonly trofspersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#v6netmasklen Lbvserver#v6netmasklen}
  */
  readonly v6Netmasklen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#v6persistmasklen Lbvserver#v6persistmasklen}
  */
  readonly v6Persistmasklen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#vipheader Lbvserver#vipheader}
  */
  readonly vipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#weight Lbvserver#weight}
  */
  readonly weight?: number;
  /**
  * sslpolicybinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#sslpolicybinding Lbvserver#sslpolicybinding}
  */
  readonly sslpolicybinding?: LbvserverSslpolicybinding[] | cdktf.IResolvable;
}
export interface LbvserverSslpolicybinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#gotopriorityexpression Lbvserver#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#invoke Lbvserver#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#labelname Lbvserver#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#labeltype Lbvserver#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#policyname Lbvserver#policyname}
  */
  readonly policyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#priority Lbvserver#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#type Lbvserver#type}
  */
  readonly type?: string;
}

export function lbvserverSslpolicybindingToTerraform(struct?: LbvserverSslpolicybinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gotopriorityexpression: cdktf.stringToTerraform(struct!.gotopriorityexpression),
    invoke: cdktf.booleanToTerraform(struct!.invoke),
    labelname: cdktf.stringToTerraform(struct!.labelname),
    labeltype: cdktf.stringToTerraform(struct!.labeltype),
    policyname: cdktf.stringToTerraform(struct!.policyname),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lbvserverSslpolicybindingToHclTerraform(struct?: LbvserverSslpolicybinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gotopriorityexpression: {
      value: cdktf.stringToHclTerraform(struct!.gotopriorityexpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoke: {
      value: cdktf.booleanToHclTerraform(struct!.invoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labelname: {
      value: cdktf.stringToHclTerraform(struct!.labelname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeltype: {
      value: cdktf.stringToHclTerraform(struct!.labeltype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policyname: {
      value: cdktf.stringToHclTerraform(struct!.policyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbvserverSslpolicybindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LbvserverSslpolicybinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gotopriorityexpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotopriorityexpression = this._gotopriorityexpression;
    }
    if (this._invoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoke = this._invoke;
    }
    if (this._labelname !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelname = this._labelname;
    }
    if (this._labeltype !== undefined) {
      hasAnyValues = true;
      internalValueResult.labeltype = this._labeltype;
    }
    if (this._policyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyname = this._policyname;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbvserverSslpolicybinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gotopriorityexpression = undefined;
      this._invoke = undefined;
      this._labelname = undefined;
      this._labeltype = undefined;
      this._policyname = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gotopriorityexpression = value.gotopriorityexpression;
      this._invoke = value.invoke;
      this._labelname = value.labelname;
      this._labeltype = value.labeltype;
      this._policyname = value.policyname;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // invoke - computed: true, optional: true, required: false
  private _invoke?: boolean | cdktf.IResolvable; 
  public get invoke() {
    return this.getBooleanAttribute('invoke');
  }
  public set invoke(value: boolean | cdktf.IResolvable) {
    this._invoke = value;
  }
  public resetInvoke() {
    this._invoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeInput() {
    return this._invoke;
  }

  // labelname - computed: true, optional: true, required: false
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  public resetLabelname() {
    this._labelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // labeltype - computed: true, optional: true, required: false
  private _labeltype?: string; 
  public get labeltype() {
    return this.getStringAttribute('labeltype');
  }
  public set labeltype(value: string) {
    this._labeltype = value;
  }
  public resetLabeltype() {
    this._labeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltypeInput() {
    return this._labeltype;
  }

  // policyname - computed: true, optional: true, required: false
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  public resetPolicyname() {
    this._policyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
}

export class LbvserverSslpolicybindingList extends cdktf.ComplexList {
  public internalValue? : LbvserverSslpolicybinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LbvserverSslpolicybindingOutputReference {
    return new LbvserverSslpolicybindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver citrixadc_lbvserver}
*/
export class Lbvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbvserver to import
  * @param importFromId The id of the existing Lbvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbvserver citrixadc_lbvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbvserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbvserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbvserver',
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
    this._appflowlog = config.appflowlog;
    this._authentication = config.authentication;
    this._authenticationhost = config.authenticationhost;
    this._authn401 = config.authn401;
    this._authnprofile = config.authnprofile;
    this._authnvsname = config.authnvsname;
    this._backuplbmethod = config.backuplbmethod;
    this._backuppersistencetimeout = config.backuppersistencetimeout;
    this._backupvserver = config.backupvserver;
    this._bypassaaaa = config.bypassaaaa;
    this._cacheable = config.cacheable;
    this._ciphers = config.ciphers;
    this._ciphersuites = config.ciphersuites;
    this._clttimeout = config.clttimeout;
    this._comment = config.comment;
    this._connfailover = config.connfailover;
    this._cookiename = config.cookiename;
    this._datalength = config.datalength;
    this._dataoffset = config.dataoffset;
    this._dbprofilename = config.dbprofilename;
    this._dbslb = config.dbslb;
    this._disableprimaryondown = config.disableprimaryondown;
    this._dns64 = config.dns64;
    this._dnsprofilename = config.dnsprofilename;
    this._downstateflush = config.downstateflush;
    this._hashlength = config.hashlength;
    this._healththreshold = config.healththreshold;
    this._httpprofilename = config.httpprofilename;
    this._httpsredirecturl = config.httpsredirecturl;
    this._icmpvsrresponse = config.icmpvsrresponse;
    this._id = config.id;
    this._insertvserveripport = config.insertvserveripport;
    this._ipmask = config.ipmask;
    this._ippattern = config.ippattern;
    this._ipset = config.ipset;
    this._ipv46 = config.ipv46;
    this._l2Conn = config.l2Conn;
    this._lbmethod = config.lbmethod;
    this._lbprofilename = config.lbprofilename;
    this._listenpolicy = config.listenpolicy;
    this._listenpriority = config.listenpriority;
    this._m = config.m;
    this._macmoderetainvlan = config.macmoderetainvlan;
    this._maxautoscalemembers = config.maxautoscalemembers;
    this._minautoscalemembers = config.minautoscalemembers;
    this._mssqlserverversion = config.mssqlserverversion;
    this._mysqlcharacterset = config.mysqlcharacterset;
    this._mysqlprotocolversion = config.mysqlprotocolversion;
    this._mysqlservercapabilities = config.mysqlservercapabilities;
    this._mysqlserverversion = config.mysqlserverversion;
    this._name = config.name;
    this._netmask = config.netmask;
    this._netprofile = config.netprofile;
    this._newname = config.newname;
    this._newservicerequest = config.newservicerequest;
    this._newservicerequestincrementinterval = config.newservicerequestincrementinterval;
    this._newservicerequestunit = config.newservicerequestunit;
    this._oracleserverversion = config.oracleserverversion;
    this._persistencebackup = config.persistencebackup;
    this._persistencetype = config.persistencetype;
    this._persistmask = config.persistmask;
    this._port = config.port;
    this._probeport = config.probeport;
    this._probeprotocol = config.probeprotocol;
    this._processlocal = config.processlocal;
    this._push = config.push;
    this._pushlabel = config.pushlabel;
    this._pushmulticlients = config.pushmulticlients;
    this._pushvserver = config.pushvserver;
    this._quicbridgeprofilename = config.quicbridgeprofilename;
    this._range = config.range;
    this._recursionavailable = config.recursionavailable;
    this._redirectfromport = config.redirectfromport;
    this._redirectportrewrite = config.redirectportrewrite;
    this._redirurl = config.redirurl;
    this._redirurlflags = config.redirurlflags;
    this._resrule = config.resrule;
    this._retainconnectionsoncluster = config.retainconnectionsoncluster;
    this._rhistate = config.rhistate;
    this._rtspnat = config.rtspnat;
    this._rule = config.rule;
    this._servicename = config.servicename;
    this._servicetype = config.servicetype;
    this._sessionless = config.sessionless;
    this._skippersistency = config.skippersistency;
    this._snisslcertkeys = config.snisslcertkeys;
    this._sobackupaction = config.sobackupaction;
    this._somethod = config.somethod;
    this._sopersistence = config.sopersistence;
    this._sopersistencetimeout = config.sopersistencetimeout;
    this._sothreshold = config.sothreshold;
    this._sslcertkey = config.sslcertkey;
    this._sslprofile = config.sslprofile;
    this._state = config.state;
    this._tcpprofilename = config.tcpprofilename;
    this._td = config.td;
    this._timeout = config.timeout;
    this._tosid = config.tosid;
    this._trofspersistence = config.trofspersistence;
    this._v6Netmasklen = config.v6Netmasklen;
    this._v6Persistmasklen = config.v6Persistmasklen;
    this._vipheader = config.vipheader;
    this._weight = config.weight;
    this._sslpolicybinding.internalValue = config.sslpolicybinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appflowlog - computed: true, optional: true, required: false
  private _appflowlog?: string; 
  public get appflowlog() {
    return this.getStringAttribute('appflowlog');
  }
  public set appflowlog(value: string) {
    this._appflowlog = value;
  }
  public resetAppflowlog() {
    this._appflowlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowlogInput() {
    return this._appflowlog;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authenticationhost - computed: true, optional: true, required: false
  private _authenticationhost?: string; 
  public get authenticationhost() {
    return this.getStringAttribute('authenticationhost');
  }
  public set authenticationhost(value: string) {
    this._authenticationhost = value;
  }
  public resetAuthenticationhost() {
    this._authenticationhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationhostInput() {
    return this._authenticationhost;
  }

  // authn401 - computed: true, optional: true, required: false
  private _authn401?: string; 
  public get authn401() {
    return this.getStringAttribute('authn401');
  }
  public set authn401(value: string) {
    this._authn401 = value;
  }
  public resetAuthn401() {
    this._authn401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authn401Input() {
    return this._authn401;
  }

  // authnprofile - computed: true, optional: true, required: false
  private _authnprofile?: string; 
  public get authnprofile() {
    return this.getStringAttribute('authnprofile');
  }
  public set authnprofile(value: string) {
    this._authnprofile = value;
  }
  public resetAuthnprofile() {
    this._authnprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnprofileInput() {
    return this._authnprofile;
  }

  // authnvsname - computed: true, optional: true, required: false
  private _authnvsname?: string; 
  public get authnvsname() {
    return this.getStringAttribute('authnvsname');
  }
  public set authnvsname(value: string) {
    this._authnvsname = value;
  }
  public resetAuthnvsname() {
    this._authnvsname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnvsnameInput() {
    return this._authnvsname;
  }

  // backuplbmethod - computed: true, optional: true, required: false
  private _backuplbmethod?: string; 
  public get backuplbmethod() {
    return this.getStringAttribute('backuplbmethod');
  }
  public set backuplbmethod(value: string) {
    this._backuplbmethod = value;
  }
  public resetBackuplbmethod() {
    this._backuplbmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backuplbmethodInput() {
    return this._backuplbmethod;
  }

  // backuppersistencetimeout - computed: true, optional: true, required: false
  private _backuppersistencetimeout?: number; 
  public get backuppersistencetimeout() {
    return this.getNumberAttribute('backuppersistencetimeout');
  }
  public set backuppersistencetimeout(value: number) {
    this._backuppersistencetimeout = value;
  }
  public resetBackuppersistencetimeout() {
    this._backuppersistencetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backuppersistencetimeoutInput() {
    return this._backuppersistencetimeout;
  }

  // backupvserver - computed: true, optional: true, required: false
  private _backupvserver?: string; 
  public get backupvserver() {
    return this.getStringAttribute('backupvserver');
  }
  public set backupvserver(value: string) {
    this._backupvserver = value;
  }
  public resetBackupvserver() {
    this._backupvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupvserverInput() {
    return this._backupvserver;
  }

  // bypassaaaa - computed: true, optional: true, required: false
  private _bypassaaaa?: string; 
  public get bypassaaaa() {
    return this.getStringAttribute('bypassaaaa');
  }
  public set bypassaaaa(value: string) {
    this._bypassaaaa = value;
  }
  public resetBypassaaaa() {
    this._bypassaaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassaaaaInput() {
    return this._bypassaaaa;
  }

  // cacheable - computed: true, optional: true, required: false
  private _cacheable?: string; 
  public get cacheable() {
    return this.getStringAttribute('cacheable');
  }
  public set cacheable(value: string) {
    this._cacheable = value;
  }
  public resetCacheable() {
    this._cacheable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheableInput() {
    return this._cacheable;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string[]; 
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // ciphersuites - computed: false, optional: true, required: false
  private _ciphersuites?: string[]; 
  public get ciphersuites() {
    return this.getListAttribute('ciphersuites');
  }
  public set ciphersuites(value: string[]) {
    this._ciphersuites = value;
  }
  public resetCiphersuites() {
    this._ciphersuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuitesInput() {
    return this._ciphersuites;
  }

  // clttimeout - computed: true, optional: true, required: false
  private _clttimeout?: number; 
  public get clttimeout() {
    return this.getNumberAttribute('clttimeout');
  }
  public set clttimeout(value: number) {
    this._clttimeout = value;
  }
  public resetClttimeout() {
    this._clttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clttimeoutInput() {
    return this._clttimeout;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connfailover - computed: true, optional: true, required: false
  private _connfailover?: string; 
  public get connfailover() {
    return this.getStringAttribute('connfailover');
  }
  public set connfailover(value: string) {
    this._connfailover = value;
  }
  public resetConnfailover() {
    this._connfailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connfailoverInput() {
    return this._connfailover;
  }

  // cookiename - computed: true, optional: true, required: false
  private _cookiename?: string; 
  public get cookiename() {
    return this.getStringAttribute('cookiename');
  }
  public set cookiename(value: string) {
    this._cookiename = value;
  }
  public resetCookiename() {
    this._cookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookienameInput() {
    return this._cookiename;
  }

  // datalength - computed: true, optional: true, required: false
  private _datalength?: number; 
  public get datalength() {
    return this.getNumberAttribute('datalength');
  }
  public set datalength(value: number) {
    this._datalength = value;
  }
  public resetDatalength() {
    this._datalength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datalengthInput() {
    return this._datalength;
  }

  // dataoffset - computed: true, optional: true, required: false
  private _dataoffset?: number; 
  public get dataoffset() {
    return this.getNumberAttribute('dataoffset');
  }
  public set dataoffset(value: number) {
    this._dataoffset = value;
  }
  public resetDataoffset() {
    this._dataoffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataoffsetInput() {
    return this._dataoffset;
  }

  // dbprofilename - computed: true, optional: true, required: false
  private _dbprofilename?: string; 
  public get dbprofilename() {
    return this.getStringAttribute('dbprofilename');
  }
  public set dbprofilename(value: string) {
    this._dbprofilename = value;
  }
  public resetDbprofilename() {
    this._dbprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbprofilenameInput() {
    return this._dbprofilename;
  }

  // dbslb - computed: true, optional: true, required: false
  private _dbslb?: string; 
  public get dbslb() {
    return this.getStringAttribute('dbslb');
  }
  public set dbslb(value: string) {
    this._dbslb = value;
  }
  public resetDbslb() {
    this._dbslb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbslbInput() {
    return this._dbslb;
  }

  // disableprimaryondown - computed: true, optional: true, required: false
  private _disableprimaryondown?: string; 
  public get disableprimaryondown() {
    return this.getStringAttribute('disableprimaryondown');
  }
  public set disableprimaryondown(value: string) {
    this._disableprimaryondown = value;
  }
  public resetDisableprimaryondown() {
    this._disableprimaryondown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableprimaryondownInput() {
    return this._disableprimaryondown;
  }

  // dns64 - computed: true, optional: true, required: false
  private _dns64?: string; 
  public get dns64() {
    return this.getStringAttribute('dns64');
  }
  public set dns64(value: string) {
    this._dns64 = value;
  }
  public resetDns64() {
    this._dns64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64;
  }

  // dnsprofilename - computed: true, optional: true, required: false
  private _dnsprofilename?: string; 
  public get dnsprofilename() {
    return this.getStringAttribute('dnsprofilename');
  }
  public set dnsprofilename(value: string) {
    this._dnsprofilename = value;
  }
  public resetDnsprofilename() {
    this._dnsprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsprofilenameInput() {
    return this._dnsprofilename;
  }

  // downstateflush - computed: true, optional: true, required: false
  private _downstateflush?: string; 
  public get downstateflush() {
    return this.getStringAttribute('downstateflush');
  }
  public set downstateflush(value: string) {
    this._downstateflush = value;
  }
  public resetDownstateflush() {
    this._downstateflush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstateflushInput() {
    return this._downstateflush;
  }

  // hashlength - computed: true, optional: true, required: false
  private _hashlength?: number; 
  public get hashlength() {
    return this.getNumberAttribute('hashlength');
  }
  public set hashlength(value: number) {
    this._hashlength = value;
  }
  public resetHashlength() {
    this._hashlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashlengthInput() {
    return this._hashlength;
  }

  // healththreshold - computed: true, optional: true, required: false
  private _healththreshold?: number; 
  public get healththreshold() {
    return this.getNumberAttribute('healththreshold');
  }
  public set healththreshold(value: number) {
    this._healththreshold = value;
  }
  public resetHealththreshold() {
    this._healththreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healththresholdInput() {
    return this._healththreshold;
  }

  // httpprofilename - computed: true, optional: true, required: false
  private _httpprofilename?: string; 
  public get httpprofilename() {
    return this.getStringAttribute('httpprofilename');
  }
  public set httpprofilename(value: string) {
    this._httpprofilename = value;
  }
  public resetHttpprofilename() {
    this._httpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpprofilenameInput() {
    return this._httpprofilename;
  }

  // httpsredirecturl - computed: true, optional: true, required: false
  private _httpsredirecturl?: string; 
  public get httpsredirecturl() {
    return this.getStringAttribute('httpsredirecturl');
  }
  public set httpsredirecturl(value: string) {
    this._httpsredirecturl = value;
  }
  public resetHttpsredirecturl() {
    this._httpsredirecturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsredirecturlInput() {
    return this._httpsredirecturl;
  }

  // icmpvsrresponse - computed: true, optional: true, required: false
  private _icmpvsrresponse?: string; 
  public get icmpvsrresponse() {
    return this.getStringAttribute('icmpvsrresponse');
  }
  public set icmpvsrresponse(value: string) {
    this._icmpvsrresponse = value;
  }
  public resetIcmpvsrresponse() {
    this._icmpvsrresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpvsrresponseInput() {
    return this._icmpvsrresponse;
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

  // insertvserveripport - computed: true, optional: true, required: false
  private _insertvserveripport?: string; 
  public get insertvserveripport() {
    return this.getStringAttribute('insertvserveripport');
  }
  public set insertvserveripport(value: string) {
    this._insertvserveripport = value;
  }
  public resetInsertvserveripport() {
    this._insertvserveripport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertvserveripportInput() {
    return this._insertvserveripport;
  }

  // ipmask - computed: true, optional: true, required: false
  private _ipmask?: string; 
  public get ipmask() {
    return this.getStringAttribute('ipmask');
  }
  public set ipmask(value: string) {
    this._ipmask = value;
  }
  public resetIpmask() {
    this._ipmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmaskInput() {
    return this._ipmask;
  }

  // ippattern - computed: true, optional: true, required: false
  private _ippattern?: string; 
  public get ippattern() {
    return this.getStringAttribute('ippattern');
  }
  public set ippattern(value: string) {
    this._ippattern = value;
  }
  public resetIppattern() {
    this._ippattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippatternInput() {
    return this._ippattern;
  }

  // ipset - computed: true, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // ipv46 - computed: true, optional: true, required: false
  private _ipv46?: string; 
  public get ipv46() {
    return this.getStringAttribute('ipv46');
  }
  public set ipv46(value: string) {
    this._ipv46 = value;
  }
  public resetIpv46() {
    this._ipv46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv46Input() {
    return this._ipv46;
  }

  // l2conn - computed: true, optional: true, required: false
  private _l2Conn?: string; 
  public get l2Conn() {
    return this.getStringAttribute('l2conn');
  }
  public set l2Conn(value: string) {
    this._l2Conn = value;
  }
  public resetL2Conn() {
    this._l2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ConnInput() {
    return this._l2Conn;
  }

  // lbmethod - computed: true, optional: true, required: false
  private _lbmethod?: string; 
  public get lbmethod() {
    return this.getStringAttribute('lbmethod');
  }
  public set lbmethod(value: string) {
    this._lbmethod = value;
  }
  public resetLbmethod() {
    this._lbmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbmethodInput() {
    return this._lbmethod;
  }

  // lbprofilename - computed: true, optional: true, required: false
  private _lbprofilename?: string; 
  public get lbprofilename() {
    return this.getStringAttribute('lbprofilename');
  }
  public set lbprofilename(value: string) {
    this._lbprofilename = value;
  }
  public resetLbprofilename() {
    this._lbprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbprofilenameInput() {
    return this._lbprofilename;
  }

  // listenpolicy - computed: true, optional: true, required: false
  private _listenpolicy?: string; 
  public get listenpolicy() {
    return this.getStringAttribute('listenpolicy');
  }
  public set listenpolicy(value: string) {
    this._listenpolicy = value;
  }
  public resetListenpolicy() {
    this._listenpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpolicyInput() {
    return this._listenpolicy;
  }

  // listenpriority - computed: true, optional: true, required: false
  private _listenpriority?: number; 
  public get listenpriority() {
    return this.getNumberAttribute('listenpriority');
  }
  public set listenpriority(value: number) {
    this._listenpriority = value;
  }
  public resetListenpriority() {
    this._listenpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpriorityInput() {
    return this._listenpriority;
  }

  // m - computed: true, optional: true, required: false
  private _m?: string; 
  public get m() {
    return this.getStringAttribute('m');
  }
  public set m(value: string) {
    this._m = value;
  }
  public resetM() {
    this._m = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mInput() {
    return this._m;
  }

  // macmoderetainvlan - computed: true, optional: true, required: false
  private _macmoderetainvlan?: string; 
  public get macmoderetainvlan() {
    return this.getStringAttribute('macmoderetainvlan');
  }
  public set macmoderetainvlan(value: string) {
    this._macmoderetainvlan = value;
  }
  public resetMacmoderetainvlan() {
    this._macmoderetainvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macmoderetainvlanInput() {
    return this._macmoderetainvlan;
  }

  // maxautoscalemembers - computed: true, optional: true, required: false
  private _maxautoscalemembers?: number; 
  public get maxautoscalemembers() {
    return this.getNumberAttribute('maxautoscalemembers');
  }
  public set maxautoscalemembers(value: number) {
    this._maxautoscalemembers = value;
  }
  public resetMaxautoscalemembers() {
    this._maxautoscalemembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxautoscalemembersInput() {
    return this._maxautoscalemembers;
  }

  // minautoscalemembers - computed: true, optional: true, required: false
  private _minautoscalemembers?: number; 
  public get minautoscalemembers() {
    return this.getNumberAttribute('minautoscalemembers');
  }
  public set minautoscalemembers(value: number) {
    this._minautoscalemembers = value;
  }
  public resetMinautoscalemembers() {
    this._minautoscalemembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minautoscalemembersInput() {
    return this._minautoscalemembers;
  }

  // mssqlserverversion - computed: true, optional: true, required: false
  private _mssqlserverversion?: string; 
  public get mssqlserverversion() {
    return this.getStringAttribute('mssqlserverversion');
  }
  public set mssqlserverversion(value: string) {
    this._mssqlserverversion = value;
  }
  public resetMssqlserverversion() {
    this._mssqlserverversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlserverversionInput() {
    return this._mssqlserverversion;
  }

  // mysqlcharacterset - computed: true, optional: true, required: false
  private _mysqlcharacterset?: number; 
  public get mysqlcharacterset() {
    return this.getNumberAttribute('mysqlcharacterset');
  }
  public set mysqlcharacterset(value: number) {
    this._mysqlcharacterset = value;
  }
  public resetMysqlcharacterset() {
    this._mysqlcharacterset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlcharactersetInput() {
    return this._mysqlcharacterset;
  }

  // mysqlprotocolversion - computed: true, optional: true, required: false
  private _mysqlprotocolversion?: number; 
  public get mysqlprotocolversion() {
    return this.getNumberAttribute('mysqlprotocolversion');
  }
  public set mysqlprotocolversion(value: number) {
    this._mysqlprotocolversion = value;
  }
  public resetMysqlprotocolversion() {
    this._mysqlprotocolversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlprotocolversionInput() {
    return this._mysqlprotocolversion;
  }

  // mysqlservercapabilities - computed: true, optional: true, required: false
  private _mysqlservercapabilities?: number; 
  public get mysqlservercapabilities() {
    return this.getNumberAttribute('mysqlservercapabilities');
  }
  public set mysqlservercapabilities(value: number) {
    this._mysqlservercapabilities = value;
  }
  public resetMysqlservercapabilities() {
    this._mysqlservercapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlservercapabilitiesInput() {
    return this._mysqlservercapabilities;
  }

  // mysqlserverversion - computed: true, optional: true, required: false
  private _mysqlserverversion?: string; 
  public get mysqlserverversion() {
    return this.getStringAttribute('mysqlserverversion');
  }
  public set mysqlserverversion(value: string) {
    this._mysqlserverversion = value;
  }
  public resetMysqlserverversion() {
    this._mysqlserverversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlserverversionInput() {
    return this._mysqlserverversion;
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

  // newname - computed: true, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // newservicerequest - computed: true, optional: true, required: false
  private _newservicerequest?: number; 
  public get newservicerequest() {
    return this.getNumberAttribute('newservicerequest');
  }
  public set newservicerequest(value: number) {
    this._newservicerequest = value;
  }
  public resetNewservicerequest() {
    this._newservicerequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newservicerequestInput() {
    return this._newservicerequest;
  }

  // newservicerequestincrementinterval - computed: true, optional: true, required: false
  private _newservicerequestincrementinterval?: number; 
  public get newservicerequestincrementinterval() {
    return this.getNumberAttribute('newservicerequestincrementinterval');
  }
  public set newservicerequestincrementinterval(value: number) {
    this._newservicerequestincrementinterval = value;
  }
  public resetNewservicerequestincrementinterval() {
    this._newservicerequestincrementinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newservicerequestincrementintervalInput() {
    return this._newservicerequestincrementinterval;
  }

  // newservicerequestunit - computed: true, optional: true, required: false
  private _newservicerequestunit?: string; 
  public get newservicerequestunit() {
    return this.getStringAttribute('newservicerequestunit');
  }
  public set newservicerequestunit(value: string) {
    this._newservicerequestunit = value;
  }
  public resetNewservicerequestunit() {
    this._newservicerequestunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newservicerequestunitInput() {
    return this._newservicerequestunit;
  }

  // oracleserverversion - computed: true, optional: true, required: false
  private _oracleserverversion?: string; 
  public get oracleserverversion() {
    return this.getStringAttribute('oracleserverversion');
  }
  public set oracleserverversion(value: string) {
    this._oracleserverversion = value;
  }
  public resetOracleserverversion() {
    this._oracleserverversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleserverversionInput() {
    return this._oracleserverversion;
  }

  // persistencebackup - computed: true, optional: true, required: false
  private _persistencebackup?: string; 
  public get persistencebackup() {
    return this.getStringAttribute('persistencebackup');
  }
  public set persistencebackup(value: string) {
    this._persistencebackup = value;
  }
  public resetPersistencebackup() {
    this._persistencebackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistencebackupInput() {
    return this._persistencebackup;
  }

  // persistencetype - computed: true, optional: true, required: false
  private _persistencetype?: string; 
  public get persistencetype() {
    return this.getStringAttribute('persistencetype');
  }
  public set persistencetype(value: string) {
    this._persistencetype = value;
  }
  public resetPersistencetype() {
    this._persistencetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistencetypeInput() {
    return this._persistencetype;
  }

  // persistmask - computed: true, optional: true, required: false
  private _persistmask?: string; 
  public get persistmask() {
    return this.getStringAttribute('persistmask');
  }
  public set persistmask(value: string) {
    this._persistmask = value;
  }
  public resetPersistmask() {
    this._persistmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistmaskInput() {
    return this._persistmask;
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

  // probeport - computed: true, optional: true, required: false
  private _probeport?: number; 
  public get probeport() {
    return this.getNumberAttribute('probeport');
  }
  public set probeport(value: number) {
    this._probeport = value;
  }
  public resetProbeport() {
    this._probeport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeportInput() {
    return this._probeport;
  }

  // probeprotocol - computed: true, optional: true, required: false
  private _probeprotocol?: string; 
  public get probeprotocol() {
    return this.getStringAttribute('probeprotocol');
  }
  public set probeprotocol(value: string) {
    this._probeprotocol = value;
  }
  public resetProbeprotocol() {
    this._probeprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeprotocolInput() {
    return this._probeprotocol;
  }

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
  }

  // push - computed: true, optional: true, required: false
  private _push?: string; 
  public get push() {
    return this.getStringAttribute('push');
  }
  public set push(value: string) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // pushlabel - computed: true, optional: true, required: false
  private _pushlabel?: string; 
  public get pushlabel() {
    return this.getStringAttribute('pushlabel');
  }
  public set pushlabel(value: string) {
    this._pushlabel = value;
  }
  public resetPushlabel() {
    this._pushlabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushlabelInput() {
    return this._pushlabel;
  }

  // pushmulticlients - computed: true, optional: true, required: false
  private _pushmulticlients?: string; 
  public get pushmulticlients() {
    return this.getStringAttribute('pushmulticlients');
  }
  public set pushmulticlients(value: string) {
    this._pushmulticlients = value;
  }
  public resetPushmulticlients() {
    this._pushmulticlients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushmulticlientsInput() {
    return this._pushmulticlients;
  }

  // pushvserver - computed: true, optional: true, required: false
  private _pushvserver?: string; 
  public get pushvserver() {
    return this.getStringAttribute('pushvserver');
  }
  public set pushvserver(value: string) {
    this._pushvserver = value;
  }
  public resetPushvserver() {
    this._pushvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushvserverInput() {
    return this._pushvserver;
  }

  // quicbridgeprofilename - computed: false, optional: true, required: false
  private _quicbridgeprofilename?: string; 
  public get quicbridgeprofilename() {
    return this.getStringAttribute('quicbridgeprofilename');
  }
  public set quicbridgeprofilename(value: string) {
    this._quicbridgeprofilename = value;
  }
  public resetQuicbridgeprofilename() {
    this._quicbridgeprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicbridgeprofilenameInput() {
    return this._quicbridgeprofilename;
  }

  // range - computed: true, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // recursionavailable - computed: true, optional: true, required: false
  private _recursionavailable?: string; 
  public get recursionavailable() {
    return this.getStringAttribute('recursionavailable');
  }
  public set recursionavailable(value: string) {
    this._recursionavailable = value;
  }
  public resetRecursionavailable() {
    this._recursionavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionavailableInput() {
    return this._recursionavailable;
  }

  // redirectfromport - computed: true, optional: true, required: false
  private _redirectfromport?: number; 
  public get redirectfromport() {
    return this.getNumberAttribute('redirectfromport');
  }
  public set redirectfromport(value: number) {
    this._redirectfromport = value;
  }
  public resetRedirectfromport() {
    this._redirectfromport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectfromportInput() {
    return this._redirectfromport;
  }

  // redirectportrewrite - computed: true, optional: true, required: false
  private _redirectportrewrite?: string; 
  public get redirectportrewrite() {
    return this.getStringAttribute('redirectportrewrite');
  }
  public set redirectportrewrite(value: string) {
    this._redirectportrewrite = value;
  }
  public resetRedirectportrewrite() {
    this._redirectportrewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportrewriteInput() {
    return this._redirectportrewrite;
  }

  // redirurl - computed: true, optional: true, required: false
  private _redirurl?: string; 
  public get redirurl() {
    return this.getStringAttribute('redirurl');
  }
  public set redirurl(value: string) {
    this._redirurl = value;
  }
  public resetRedirurl() {
    this._redirurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirurlInput() {
    return this._redirurl;
  }

  // redirurlflags - computed: true, optional: true, required: false
  private _redirurlflags?: boolean | cdktf.IResolvable; 
  public get redirurlflags() {
    return this.getBooleanAttribute('redirurlflags');
  }
  public set redirurlflags(value: boolean | cdktf.IResolvable) {
    this._redirurlflags = value;
  }
  public resetRedirurlflags() {
    this._redirurlflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirurlflagsInput() {
    return this._redirurlflags;
  }

  // resrule - computed: true, optional: true, required: false
  private _resrule?: string; 
  public get resrule() {
    return this.getStringAttribute('resrule');
  }
  public set resrule(value: string) {
    this._resrule = value;
  }
  public resetResrule() {
    this._resrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resruleInput() {
    return this._resrule;
  }

  // retainconnectionsoncluster - computed: true, optional: true, required: false
  private _retainconnectionsoncluster?: string; 
  public get retainconnectionsoncluster() {
    return this.getStringAttribute('retainconnectionsoncluster');
  }
  public set retainconnectionsoncluster(value: string) {
    this._retainconnectionsoncluster = value;
  }
  public resetRetainconnectionsoncluster() {
    this._retainconnectionsoncluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainconnectionsonclusterInput() {
    return this._retainconnectionsoncluster;
  }

  // rhistate - computed: true, optional: true, required: false
  private _rhistate?: string; 
  public get rhistate() {
    return this.getStringAttribute('rhistate');
  }
  public set rhistate(value: string) {
    this._rhistate = value;
  }
  public resetRhistate() {
    this._rhistate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhistateInput() {
    return this._rhistate;
  }

  // rtspnat - computed: true, optional: true, required: false
  private _rtspnat?: string; 
  public get rtspnat() {
    return this.getStringAttribute('rtspnat');
  }
  public set rtspnat(value: string) {
    this._rtspnat = value;
  }
  public resetRtspnat() {
    this._rtspnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspnatInput() {
    return this._rtspnat;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
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

  // servicetype - computed: true, optional: true, required: false
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  public resetServicetype() {
    this._servicetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
  }

  // sessionless - computed: true, optional: true, required: false
  private _sessionless?: string; 
  public get sessionless() {
    return this.getStringAttribute('sessionless');
  }
  public set sessionless(value: string) {
    this._sessionless = value;
  }
  public resetSessionless() {
    this._sessionless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlessInput() {
    return this._sessionless;
  }

  // skippersistency - computed: true, optional: true, required: false
  private _skippersistency?: string; 
  public get skippersistency() {
    return this.getStringAttribute('skippersistency');
  }
  public set skippersistency(value: string) {
    this._skippersistency = value;
  }
  public resetSkippersistency() {
    this._skippersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippersistencyInput() {
    return this._skippersistency;
  }

  // snisslcertkeys - computed: false, optional: true, required: false
  private _snisslcertkeys?: string[]; 
  public get snisslcertkeys() {
    return cdktf.Fn.tolist(this.getListAttribute('snisslcertkeys'));
  }
  public set snisslcertkeys(value: string[]) {
    this._snisslcertkeys = value;
  }
  public resetSnisslcertkeys() {
    this._snisslcertkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snisslcertkeysInput() {
    return this._snisslcertkeys;
  }

  // sobackupaction - computed: true, optional: true, required: false
  private _sobackupaction?: string; 
  public get sobackupaction() {
    return this.getStringAttribute('sobackupaction');
  }
  public set sobackupaction(value: string) {
    this._sobackupaction = value;
  }
  public resetSobackupaction() {
    this._sobackupaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sobackupactionInput() {
    return this._sobackupaction;
  }

  // somethod - computed: true, optional: true, required: false
  private _somethod?: string; 
  public get somethod() {
    return this.getStringAttribute('somethod');
  }
  public set somethod(value: string) {
    this._somethod = value;
  }
  public resetSomethod() {
    this._somethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get somethodInput() {
    return this._somethod;
  }

  // sopersistence - computed: true, optional: true, required: false
  private _sopersistence?: string; 
  public get sopersistence() {
    return this.getStringAttribute('sopersistence');
  }
  public set sopersistence(value: string) {
    this._sopersistence = value;
  }
  public resetSopersistence() {
    this._sopersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sopersistenceInput() {
    return this._sopersistence;
  }

  // sopersistencetimeout - computed: true, optional: true, required: false
  private _sopersistencetimeout?: number; 
  public get sopersistencetimeout() {
    return this.getNumberAttribute('sopersistencetimeout');
  }
  public set sopersistencetimeout(value: number) {
    this._sopersistencetimeout = value;
  }
  public resetSopersistencetimeout() {
    this._sopersistencetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sopersistencetimeoutInput() {
    return this._sopersistencetimeout;
  }

  // sothreshold - computed: true, optional: true, required: false
  private _sothreshold?: number; 
  public get sothreshold() {
    return this.getNumberAttribute('sothreshold');
  }
  public set sothreshold(value: number) {
    this._sothreshold = value;
  }
  public resetSothreshold() {
    this._sothreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sothresholdInput() {
    return this._sothreshold;
  }

  // sslcertkey - computed: false, optional: true, required: false
  private _sslcertkey?: string; 
  public get sslcertkey() {
    return this.getStringAttribute('sslcertkey');
  }
  public set sslcertkey(value: string) {
    this._sslcertkey = value;
  }
  public resetSslcertkey() {
    this._sslcertkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcertkeyInput() {
    return this._sslcertkey;
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

  // tcpprofilename - computed: true, optional: true, required: false
  private _tcpprofilename?: string; 
  public get tcpprofilename() {
    return this.getStringAttribute('tcpprofilename');
  }
  public set tcpprofilename(value: string) {
    this._tcpprofilename = value;
  }
  public resetTcpprofilename() {
    this._tcpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpprofilenameInput() {
    return this._tcpprofilename;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // trofspersistence - computed: true, optional: true, required: false
  private _trofspersistence?: string; 
  public get trofspersistence() {
    return this.getStringAttribute('trofspersistence');
  }
  public set trofspersistence(value: string) {
    this._trofspersistence = value;
  }
  public resetTrofspersistence() {
    this._trofspersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trofspersistenceInput() {
    return this._trofspersistence;
  }

  // v6netmasklen - computed: true, optional: true, required: false
  private _v6Netmasklen?: number; 
  public get v6Netmasklen() {
    return this.getNumberAttribute('v6netmasklen');
  }
  public set v6Netmasklen(value: number) {
    this._v6Netmasklen = value;
  }
  public resetV6Netmasklen() {
    this._v6Netmasklen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6NetmasklenInput() {
    return this._v6Netmasklen;
  }

  // v6persistmasklen - computed: true, optional: true, required: false
  private _v6Persistmasklen?: number; 
  public get v6Persistmasklen() {
    return this.getNumberAttribute('v6persistmasklen');
  }
  public set v6Persistmasklen(value: number) {
    this._v6Persistmasklen = value;
  }
  public resetV6Persistmasklen() {
    this._v6Persistmasklen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PersistmasklenInput() {
    return this._v6Persistmasklen;
  }

  // vipheader - computed: true, optional: true, required: false
  private _vipheader?: string; 
  public get vipheader() {
    return this.getStringAttribute('vipheader');
  }
  public set vipheader(value: string) {
    this._vipheader = value;
  }
  public resetVipheader() {
    this._vipheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipheaderInput() {
    return this._vipheader;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // sslpolicybinding - computed: false, optional: true, required: false
  private _sslpolicybinding = new LbvserverSslpolicybindingList(this, "sslpolicybinding", true);
  public get sslpolicybinding() {
    return this._sslpolicybinding;
  }
  public putSslpolicybinding(value: LbvserverSslpolicybinding[] | cdktf.IResolvable) {
    this._sslpolicybinding.internalValue = value;
  }
  public resetSslpolicybinding() {
    this._sslpolicybinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslpolicybindingInput() {
    return this._sslpolicybinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      authentication: cdktf.stringToTerraform(this._authentication),
      authenticationhost: cdktf.stringToTerraform(this._authenticationhost),
      authn401: cdktf.stringToTerraform(this._authn401),
      authnprofile: cdktf.stringToTerraform(this._authnprofile),
      authnvsname: cdktf.stringToTerraform(this._authnvsname),
      backuplbmethod: cdktf.stringToTerraform(this._backuplbmethod),
      backuppersistencetimeout: cdktf.numberToTerraform(this._backuppersistencetimeout),
      backupvserver: cdktf.stringToTerraform(this._backupvserver),
      bypassaaaa: cdktf.stringToTerraform(this._bypassaaaa),
      cacheable: cdktf.stringToTerraform(this._cacheable),
      ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphers),
      ciphersuites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphersuites),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      comment: cdktf.stringToTerraform(this._comment),
      connfailover: cdktf.stringToTerraform(this._connfailover),
      cookiename: cdktf.stringToTerraform(this._cookiename),
      datalength: cdktf.numberToTerraform(this._datalength),
      dataoffset: cdktf.numberToTerraform(this._dataoffset),
      dbprofilename: cdktf.stringToTerraform(this._dbprofilename),
      dbslb: cdktf.stringToTerraform(this._dbslb),
      disableprimaryondown: cdktf.stringToTerraform(this._disableprimaryondown),
      dns64: cdktf.stringToTerraform(this._dns64),
      dnsprofilename: cdktf.stringToTerraform(this._dnsprofilename),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      hashlength: cdktf.numberToTerraform(this._hashlength),
      healththreshold: cdktf.numberToTerraform(this._healththreshold),
      httpprofilename: cdktf.stringToTerraform(this._httpprofilename),
      httpsredirecturl: cdktf.stringToTerraform(this._httpsredirecturl),
      icmpvsrresponse: cdktf.stringToTerraform(this._icmpvsrresponse),
      id: cdktf.stringToTerraform(this._id),
      insertvserveripport: cdktf.stringToTerraform(this._insertvserveripport),
      ipmask: cdktf.stringToTerraform(this._ipmask),
      ippattern: cdktf.stringToTerraform(this._ippattern),
      ipset: cdktf.stringToTerraform(this._ipset),
      ipv46: cdktf.stringToTerraform(this._ipv46),
      l2conn: cdktf.stringToTerraform(this._l2Conn),
      lbmethod: cdktf.stringToTerraform(this._lbmethod),
      lbprofilename: cdktf.stringToTerraform(this._lbprofilename),
      listenpolicy: cdktf.stringToTerraform(this._listenpolicy),
      listenpriority: cdktf.numberToTerraform(this._listenpriority),
      m: cdktf.stringToTerraform(this._m),
      macmoderetainvlan: cdktf.stringToTerraform(this._macmoderetainvlan),
      maxautoscalemembers: cdktf.numberToTerraform(this._maxautoscalemembers),
      minautoscalemembers: cdktf.numberToTerraform(this._minautoscalemembers),
      mssqlserverversion: cdktf.stringToTerraform(this._mssqlserverversion),
      mysqlcharacterset: cdktf.numberToTerraform(this._mysqlcharacterset),
      mysqlprotocolversion: cdktf.numberToTerraform(this._mysqlprotocolversion),
      mysqlservercapabilities: cdktf.numberToTerraform(this._mysqlservercapabilities),
      mysqlserverversion: cdktf.stringToTerraform(this._mysqlserverversion),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      newname: cdktf.stringToTerraform(this._newname),
      newservicerequest: cdktf.numberToTerraform(this._newservicerequest),
      newservicerequestincrementinterval: cdktf.numberToTerraform(this._newservicerequestincrementinterval),
      newservicerequestunit: cdktf.stringToTerraform(this._newservicerequestunit),
      oracleserverversion: cdktf.stringToTerraform(this._oracleserverversion),
      persistencebackup: cdktf.stringToTerraform(this._persistencebackup),
      persistencetype: cdktf.stringToTerraform(this._persistencetype),
      persistmask: cdktf.stringToTerraform(this._persistmask),
      port: cdktf.numberToTerraform(this._port),
      probeport: cdktf.numberToTerraform(this._probeport),
      probeprotocol: cdktf.stringToTerraform(this._probeprotocol),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      push: cdktf.stringToTerraform(this._push),
      pushlabel: cdktf.stringToTerraform(this._pushlabel),
      pushmulticlients: cdktf.stringToTerraform(this._pushmulticlients),
      pushvserver: cdktf.stringToTerraform(this._pushvserver),
      quicbridgeprofilename: cdktf.stringToTerraform(this._quicbridgeprofilename),
      range: cdktf.numberToTerraform(this._range),
      recursionavailable: cdktf.stringToTerraform(this._recursionavailable),
      redirectfromport: cdktf.numberToTerraform(this._redirectfromport),
      redirectportrewrite: cdktf.stringToTerraform(this._redirectportrewrite),
      redirurl: cdktf.stringToTerraform(this._redirurl),
      redirurlflags: cdktf.booleanToTerraform(this._redirurlflags),
      resrule: cdktf.stringToTerraform(this._resrule),
      retainconnectionsoncluster: cdktf.stringToTerraform(this._retainconnectionsoncluster),
      rhistate: cdktf.stringToTerraform(this._rhistate),
      rtspnat: cdktf.stringToTerraform(this._rtspnat),
      rule: cdktf.stringToTerraform(this._rule),
      servicename: cdktf.stringToTerraform(this._servicename),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sessionless: cdktf.stringToTerraform(this._sessionless),
      skippersistency: cdktf.stringToTerraform(this._skippersistency),
      snisslcertkeys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snisslcertkeys),
      sobackupaction: cdktf.stringToTerraform(this._sobackupaction),
      somethod: cdktf.stringToTerraform(this._somethod),
      sopersistence: cdktf.stringToTerraform(this._sopersistence),
      sopersistencetimeout: cdktf.numberToTerraform(this._sopersistencetimeout),
      sothreshold: cdktf.numberToTerraform(this._sothreshold),
      sslcertkey: cdktf.stringToTerraform(this._sslcertkey),
      sslprofile: cdktf.stringToTerraform(this._sslprofile),
      state: cdktf.stringToTerraform(this._state),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      td: cdktf.numberToTerraform(this._td),
      timeout: cdktf.numberToTerraform(this._timeout),
      tosid: cdktf.numberToTerraform(this._tosid),
      trofspersistence: cdktf.stringToTerraform(this._trofspersistence),
      v6netmasklen: cdktf.numberToTerraform(this._v6Netmasklen),
      v6persistmasklen: cdktf.numberToTerraform(this._v6Persistmasklen),
      vipheader: cdktf.stringToTerraform(this._vipheader),
      weight: cdktf.numberToTerraform(this._weight),
      sslpolicybinding: cdktf.listMapper(lbvserverSslpolicybindingToTerraform, true)(this._sslpolicybinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticationhost: {
        value: cdktf.stringToHclTerraform(this._authenticationhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn401: {
        value: cdktf.stringToHclTerraform(this._authn401),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authnprofile: {
        value: cdktf.stringToHclTerraform(this._authnprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authnvsname: {
        value: cdktf.stringToHclTerraform(this._authnvsname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backuplbmethod: {
        value: cdktf.stringToHclTerraform(this._backuplbmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backuppersistencetimeout: {
        value: cdktf.numberToHclTerraform(this._backuppersistencetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupvserver: {
        value: cdktf.stringToHclTerraform(this._backupvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypassaaaa: {
        value: cdktf.stringToHclTerraform(this._bypassaaaa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacheable: {
        value: cdktf.stringToHclTerraform(this._cacheable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ciphersuites: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciphersuites),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clttimeout: {
        value: cdktf.numberToHclTerraform(this._clttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connfailover: {
        value: cdktf.stringToHclTerraform(this._connfailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiename: {
        value: cdktf.stringToHclTerraform(this._cookiename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datalength: {
        value: cdktf.numberToHclTerraform(this._datalength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dataoffset: {
        value: cdktf.numberToHclTerraform(this._dataoffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dbprofilename: {
        value: cdktf.stringToHclTerraform(this._dbprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbslb: {
        value: cdktf.stringToHclTerraform(this._dbslb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disableprimaryondown: {
        value: cdktf.stringToHclTerraform(this._disableprimaryondown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns64: {
        value: cdktf.stringToHclTerraform(this._dns64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsprofilename: {
        value: cdktf.stringToHclTerraform(this._dnsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstateflush: {
        value: cdktf.stringToHclTerraform(this._downstateflush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashlength: {
        value: cdktf.numberToHclTerraform(this._hashlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healththreshold: {
        value: cdktf.numberToHclTerraform(this._healththreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpprofilename: {
        value: cdktf.stringToHclTerraform(this._httpprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpsredirecturl: {
        value: cdktf.stringToHclTerraform(this._httpsredirecturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpvsrresponse: {
        value: cdktf.stringToHclTerraform(this._icmpvsrresponse),
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
      insertvserveripport: {
        value: cdktf.stringToHclTerraform(this._insertvserveripport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmask: {
        value: cdktf.stringToHclTerraform(this._ipmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ippattern: {
        value: cdktf.stringToHclTerraform(this._ippattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipset: {
        value: cdktf.stringToHclTerraform(this._ipset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv46: {
        value: cdktf.stringToHclTerraform(this._ipv46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2conn: {
        value: cdktf.stringToHclTerraform(this._l2Conn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbmethod: {
        value: cdktf.stringToHclTerraform(this._lbmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbprofilename: {
        value: cdktf.stringToHclTerraform(this._lbprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpolicy: {
        value: cdktf.stringToHclTerraform(this._listenpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpriority: {
        value: cdktf.numberToHclTerraform(this._listenpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      m: {
        value: cdktf.stringToHclTerraform(this._m),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macmoderetainvlan: {
        value: cdktf.stringToHclTerraform(this._macmoderetainvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxautoscalemembers: {
        value: cdktf.numberToHclTerraform(this._maxautoscalemembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minautoscalemembers: {
        value: cdktf.numberToHclTerraform(this._minautoscalemembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mssqlserverversion: {
        value: cdktf.stringToHclTerraform(this._mssqlserverversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysqlcharacterset: {
        value: cdktf.numberToHclTerraform(this._mysqlcharacterset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysqlprotocolversion: {
        value: cdktf.numberToHclTerraform(this._mysqlprotocolversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysqlservercapabilities: {
        value: cdktf.numberToHclTerraform(this._mysqlservercapabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysqlserverversion: {
        value: cdktf.stringToHclTerraform(this._mysqlserverversion),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
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
      newname: {
        value: cdktf.stringToHclTerraform(this._newname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      newservicerequest: {
        value: cdktf.numberToHclTerraform(this._newservicerequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      newservicerequestincrementinterval: {
        value: cdktf.numberToHclTerraform(this._newservicerequestincrementinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      newservicerequestunit: {
        value: cdktf.stringToHclTerraform(this._newservicerequestunit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracleserverversion: {
        value: cdktf.stringToHclTerraform(this._oracleserverversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistencebackup: {
        value: cdktf.stringToHclTerraform(this._persistencebackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistencetype: {
        value: cdktf.stringToHclTerraform(this._persistencetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistmask: {
        value: cdktf.stringToHclTerraform(this._persistmask),
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
      probeport: {
        value: cdktf.numberToHclTerraform(this._probeport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probeprotocol: {
        value: cdktf.stringToHclTerraform(this._probeprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push: {
        value: cdktf.stringToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pushlabel: {
        value: cdktf.stringToHclTerraform(this._pushlabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pushmulticlients: {
        value: cdktf.stringToHclTerraform(this._pushmulticlients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pushvserver: {
        value: cdktf.stringToHclTerraform(this._pushvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quicbridgeprofilename: {
        value: cdktf.stringToHclTerraform(this._quicbridgeprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recursionavailable: {
        value: cdktf.stringToHclTerraform(this._recursionavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectfromport: {
        value: cdktf.numberToHclTerraform(this._redirectfromport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirectportrewrite: {
        value: cdktf.stringToHclTerraform(this._redirectportrewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirurl: {
        value: cdktf.stringToHclTerraform(this._redirurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirurlflags: {
        value: cdktf.booleanToHclTerraform(this._redirurlflags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resrule: {
        value: cdktf.stringToHclTerraform(this._resrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retainconnectionsoncluster: {
        value: cdktf.stringToHclTerraform(this._retainconnectionsoncluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rhistate: {
        value: cdktf.stringToHclTerraform(this._rhistate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtspnat: {
        value: cdktf.stringToHclTerraform(this._rtspnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
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
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionless: {
        value: cdktf.stringToHclTerraform(this._sessionless),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skippersistency: {
        value: cdktf.stringToHclTerraform(this._skippersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snisslcertkeys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snisslcertkeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sobackupaction: {
        value: cdktf.stringToHclTerraform(this._sobackupaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      somethod: {
        value: cdktf.stringToHclTerraform(this._somethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sopersistence: {
        value: cdktf.stringToHclTerraform(this._sopersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sopersistencetimeout: {
        value: cdktf.numberToHclTerraform(this._sopersistencetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sothreshold: {
        value: cdktf.numberToHclTerraform(this._sothreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslcertkey: {
        value: cdktf.stringToHclTerraform(this._sslcertkey),
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
      tcpprofilename: {
        value: cdktf.stringToHclTerraform(this._tcpprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tosid: {
        value: cdktf.numberToHclTerraform(this._tosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trofspersistence: {
        value: cdktf.stringToHclTerraform(this._trofspersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6netmasklen: {
        value: cdktf.numberToHclTerraform(this._v6Netmasklen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6persistmasklen: {
        value: cdktf.numberToHclTerraform(this._v6Persistmasklen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vipheader: {
        value: cdktf.stringToHclTerraform(this._vipheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslpolicybinding: {
        value: cdktf.listMapperHcl(lbvserverSslpolicybindingToHclTerraform, true)(this._sslpolicybinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbvserverSslpolicybindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
