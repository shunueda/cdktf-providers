// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#appflowlog Csvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#authentication Csvserver#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#authenticationhost Csvserver#authenticationhost}
  */
  readonly authenticationhost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#authn401 Csvserver#authn401}
  */
  readonly authn401?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#authnprofile Csvserver#authnprofile}
  */
  readonly authnprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#authnvsname Csvserver#authnvsname}
  */
  readonly authnvsname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#backupip Csvserver#backupip}
  */
  readonly backupip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#backupvserver Csvserver#backupvserver}
  */
  readonly backupvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#cacheable Csvserver#cacheable}
  */
  readonly cacheable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#casesensitive Csvserver#casesensitive}
  */
  readonly casesensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ciphers Csvserver#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ciphersuites Csvserver#ciphersuites}
  */
  readonly ciphersuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#clttimeout Csvserver#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#comment Csvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#cookiedomain Csvserver#cookiedomain}
  */
  readonly cookiedomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#cookietimeout Csvserver#cookietimeout}
  */
  readonly cookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#dbprofilename Csvserver#dbprofilename}
  */
  readonly dbprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#disableprimaryondown Csvserver#disableprimaryondown}
  */
  readonly disableprimaryondown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#dnsprofilename Csvserver#dnsprofilename}
  */
  readonly dnsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#dnsrecordtype Csvserver#dnsrecordtype}
  */
  readonly dnsrecordtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#domainname Csvserver#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#downstateflush Csvserver#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#httpprofilename Csvserver#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#httpsredirecturl Csvserver#httpsredirecturl}
  */
  readonly httpsredirecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#icmpvsrresponse Csvserver#icmpvsrresponse}
  */
  readonly icmpvsrresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#id Csvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#insertvserveripport Csvserver#insertvserveripport}
  */
  readonly insertvserveripport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ipmask Csvserver#ipmask}
  */
  readonly ipmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ippattern Csvserver#ippattern}
  */
  readonly ippattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ipset Csvserver#ipset}
  */
  readonly ipset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ipv46 Csvserver#ipv46}
  */
  readonly ipv46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#l2conn Csvserver#l2conn}
  */
  readonly l2Conn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#lbvserverbinding Csvserver#lbvserverbinding}
  */
  readonly lbvserverbinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#listenpolicy Csvserver#listenpolicy}
  */
  readonly listenpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#listenpriority Csvserver#listenpriority}
  */
  readonly listenpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#mssqlserverversion Csvserver#mssqlserverversion}
  */
  readonly mssqlserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#mysqlcharacterset Csvserver#mysqlcharacterset}
  */
  readonly mysqlcharacterset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#mysqlprotocolversion Csvserver#mysqlprotocolversion}
  */
  readonly mysqlprotocolversion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#mysqlservercapabilities Csvserver#mysqlservercapabilities}
  */
  readonly mysqlservercapabilities?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#mysqlserverversion Csvserver#mysqlserverversion}
  */
  readonly mysqlserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#name Csvserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#netprofile Csvserver#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#oracleserverversion Csvserver#oracleserverversion}
  */
  readonly oracleserverversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#persistenceid Csvserver#persistenceid}
  */
  readonly persistenceid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#persistencetype Csvserver#persistencetype}
  */
  readonly persistencetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#port Csvserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#precedence Csvserver#precedence}
  */
  readonly precedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#push Csvserver#push}
  */
  readonly push?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#pushlabel Csvserver#pushlabel}
  */
  readonly pushlabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#pushmulticlients Csvserver#pushmulticlients}
  */
  readonly pushmulticlients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#pushvserver Csvserver#pushvserver}
  */
  readonly pushvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#range Csvserver#range}
  */
  readonly range?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#redirectfromport Csvserver#redirectfromport}
  */
  readonly redirectfromport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#redirectportrewrite Csvserver#redirectportrewrite}
  */
  readonly redirectportrewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#redirecturl Csvserver#redirecturl}
  */
  readonly redirecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#rhistate Csvserver#rhistate}
  */
  readonly rhistate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#rtspnat Csvserver#rtspnat}
  */
  readonly rtspnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#servicetype Csvserver#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sitedomainttl Csvserver#sitedomainttl}
  */
  readonly sitedomainttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#snisslcertkeys Csvserver#snisslcertkeys}
  */
  readonly snisslcertkeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sobackupaction Csvserver#sobackupaction}
  */
  readonly sobackupaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#somethod Csvserver#somethod}
  */
  readonly somethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sopersistence Csvserver#sopersistence}
  */
  readonly sopersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sopersistencetimeout Csvserver#sopersistencetimeout}
  */
  readonly sopersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sothreshold Csvserver#sothreshold}
  */
  readonly sothreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sslcertkey Csvserver#sslcertkey}
  */
  readonly sslcertkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sslprofile Csvserver#sslprofile}
  */
  readonly sslprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#state Csvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#stateupdate Csvserver#stateupdate}
  */
  readonly stateupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#targettype Csvserver#targettype}
  */
  readonly targettype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#tcpprofilename Csvserver#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#td Csvserver#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#ttl Csvserver#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#vipheader Csvserver#vipheader}
  */
  readonly vipheader?: string;
  /**
  * sslpolicybinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#sslpolicybinding Csvserver#sslpolicybinding}
  */
  readonly sslpolicybinding?: CsvserverSslpolicybinding[] | cdktf.IResolvable;
}
export interface CsvserverSslpolicybinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#gotopriorityexpression Csvserver#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#invoke Csvserver#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#labelname Csvserver#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#labeltype Csvserver#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#policyname Csvserver#policyname}
  */
  readonly policyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#priority Csvserver#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#type Csvserver#type}
  */
  readonly type?: string;
}

export function csvserverSslpolicybindingToTerraform(struct?: CsvserverSslpolicybinding | cdktf.IResolvable): any {
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


export function csvserverSslpolicybindingToHclTerraform(struct?: CsvserverSslpolicybinding | cdktf.IResolvable): any {
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

export class CsvserverSslpolicybindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsvserverSslpolicybinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsvserverSslpolicybinding | cdktf.IResolvable | undefined) {
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

export class CsvserverSslpolicybindingList extends cdktf.ComplexList {
  public internalValue? : CsvserverSslpolicybinding[] | cdktf.IResolvable

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
  public get(index: number): CsvserverSslpolicybindingOutputReference {
    return new CsvserverSslpolicybindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver citrixadc_csvserver}
*/
export class Csvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_csvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Csvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Csvserver to import
  * @param importFromId The id of the existing Csvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Csvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_csvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver citrixadc_csvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsvserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CsvserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_csvserver',
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
    this._backupip = config.backupip;
    this._backupvserver = config.backupvserver;
    this._cacheable = config.cacheable;
    this._casesensitive = config.casesensitive;
    this._ciphers = config.ciphers;
    this._ciphersuites = config.ciphersuites;
    this._clttimeout = config.clttimeout;
    this._comment = config.comment;
    this._cookiedomain = config.cookiedomain;
    this._cookietimeout = config.cookietimeout;
    this._dbprofilename = config.dbprofilename;
    this._disableprimaryondown = config.disableprimaryondown;
    this._dnsprofilename = config.dnsprofilename;
    this._dnsrecordtype = config.dnsrecordtype;
    this._domainname = config.domainname;
    this._downstateflush = config.downstateflush;
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
    this._lbvserverbinding = config.lbvserverbinding;
    this._listenpolicy = config.listenpolicy;
    this._listenpriority = config.listenpriority;
    this._mssqlserverversion = config.mssqlserverversion;
    this._mysqlcharacterset = config.mysqlcharacterset;
    this._mysqlprotocolversion = config.mysqlprotocolversion;
    this._mysqlservercapabilities = config.mysqlservercapabilities;
    this._mysqlserverversion = config.mysqlserverversion;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._oracleserverversion = config.oracleserverversion;
    this._persistenceid = config.persistenceid;
    this._persistencetype = config.persistencetype;
    this._port = config.port;
    this._precedence = config.precedence;
    this._push = config.push;
    this._pushlabel = config.pushlabel;
    this._pushmulticlients = config.pushmulticlients;
    this._pushvserver = config.pushvserver;
    this._range = config.range;
    this._redirectfromport = config.redirectfromport;
    this._redirectportrewrite = config.redirectportrewrite;
    this._redirecturl = config.redirecturl;
    this._rhistate = config.rhistate;
    this._rtspnat = config.rtspnat;
    this._servicetype = config.servicetype;
    this._sitedomainttl = config.sitedomainttl;
    this._snisslcertkeys = config.snisslcertkeys;
    this._sobackupaction = config.sobackupaction;
    this._somethod = config.somethod;
    this._sopersistence = config.sopersistence;
    this._sopersistencetimeout = config.sopersistencetimeout;
    this._sothreshold = config.sothreshold;
    this._sslcertkey = config.sslcertkey;
    this._sslprofile = config.sslprofile;
    this._state = config.state;
    this._stateupdate = config.stateupdate;
    this._targettype = config.targettype;
    this._tcpprofilename = config.tcpprofilename;
    this._td = config.td;
    this._ttl = config.ttl;
    this._vipheader = config.vipheader;
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

  // backupip - computed: true, optional: true, required: false
  private _backupip?: string; 
  public get backupip() {
    return this.getStringAttribute('backupip');
  }
  public set backupip(value: string) {
    this._backupip = value;
  }
  public resetBackupip() {
    this._backupip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupipInput() {
    return this._backupip;
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

  // casesensitive - computed: true, optional: true, required: false
  private _casesensitive?: string; 
  public get casesensitive() {
    return this.getStringAttribute('casesensitive');
  }
  public set casesensitive(value: string) {
    this._casesensitive = value;
  }
  public resetCasesensitive() {
    this._casesensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesensitiveInput() {
    return this._casesensitive;
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

  // cookiedomain - computed: true, optional: true, required: false
  private _cookiedomain?: string; 
  public get cookiedomain() {
    return this.getStringAttribute('cookiedomain');
  }
  public set cookiedomain(value: string) {
    this._cookiedomain = value;
  }
  public resetCookiedomain() {
    this._cookiedomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainInput() {
    return this._cookiedomain;
  }

  // cookietimeout - computed: true, optional: true, required: false
  private _cookietimeout?: number; 
  public get cookietimeout() {
    return this.getNumberAttribute('cookietimeout');
  }
  public set cookietimeout(value: number) {
    this._cookietimeout = value;
  }
  public resetCookietimeout() {
    this._cookietimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookietimeoutInput() {
    return this._cookietimeout;
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

  // dnsrecordtype - computed: true, optional: true, required: false
  private _dnsrecordtype?: string; 
  public get dnsrecordtype() {
    return this.getStringAttribute('dnsrecordtype');
  }
  public set dnsrecordtype(value: string) {
    this._dnsrecordtype = value;
  }
  public resetDnsrecordtype() {
    this._dnsrecordtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrecordtypeInput() {
    return this._dnsrecordtype;
  }

  // domainname - computed: true, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
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

  // lbvserverbinding - computed: false, optional: true, required: false
  private _lbvserverbinding?: string; 
  public get lbvserverbinding() {
    return this.getStringAttribute('lbvserverbinding');
  }
  public set lbvserverbinding(value: string) {
    this._lbvserverbinding = value;
  }
  public resetLbvserverbinding() {
    this._lbvserverbinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvserverbindingInput() {
    return this._lbvserverbinding;
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

  // persistenceid - computed: true, optional: true, required: false
  private _persistenceid?: number; 
  public get persistenceid() {
    return this.getNumberAttribute('persistenceid');
  }
  public set persistenceid(value: number) {
    this._persistenceid = value;
  }
  public resetPersistenceid() {
    this._persistenceid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceidInput() {
    return this._persistenceid;
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

  // precedence - computed: true, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
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

  // redirecturl - computed: true, optional: true, required: false
  private _redirecturl?: string; 
  public get redirecturl() {
    return this.getStringAttribute('redirecturl');
  }
  public set redirecturl(value: string) {
    this._redirecturl = value;
  }
  public resetRedirecturl() {
    this._redirecturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirecturlInput() {
    return this._redirecturl;
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

  // sitedomainttl - computed: true, optional: true, required: false
  private _sitedomainttl?: number; 
  public get sitedomainttl() {
    return this.getNumberAttribute('sitedomainttl');
  }
  public set sitedomainttl(value: number) {
    this._sitedomainttl = value;
  }
  public resetSitedomainttl() {
    this._sitedomainttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitedomainttlInput() {
    return this._sitedomainttl;
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

  // sslprofile - computed: false, optional: true, required: false
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

  // stateupdate - computed: true, optional: true, required: false
  private _stateupdate?: string; 
  public get stateupdate() {
    return this.getStringAttribute('stateupdate');
  }
  public set stateupdate(value: string) {
    this._stateupdate = value;
  }
  public resetStateupdate() {
    this._stateupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateupdateInput() {
    return this._stateupdate;
  }

  // targettype - computed: true, optional: true, required: false
  private _targettype?: string; 
  public get targettype() {
    return this.getStringAttribute('targettype');
  }
  public set targettype(value: string) {
    this._targettype = value;
  }
  public resetTargettype() {
    this._targettype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targettypeInput() {
    return this._targettype;
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

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sslpolicybinding - computed: false, optional: true, required: false
  private _sslpolicybinding = new CsvserverSslpolicybindingList(this, "sslpolicybinding", true);
  public get sslpolicybinding() {
    return this._sslpolicybinding;
  }
  public putSslpolicybinding(value: CsvserverSslpolicybinding[] | cdktf.IResolvable) {
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
      backupip: cdktf.stringToTerraform(this._backupip),
      backupvserver: cdktf.stringToTerraform(this._backupvserver),
      cacheable: cdktf.stringToTerraform(this._cacheable),
      casesensitive: cdktf.stringToTerraform(this._casesensitive),
      ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphers),
      ciphersuites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphersuites),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      comment: cdktf.stringToTerraform(this._comment),
      cookiedomain: cdktf.stringToTerraform(this._cookiedomain),
      cookietimeout: cdktf.numberToTerraform(this._cookietimeout),
      dbprofilename: cdktf.stringToTerraform(this._dbprofilename),
      disableprimaryondown: cdktf.stringToTerraform(this._disableprimaryondown),
      dnsprofilename: cdktf.stringToTerraform(this._dnsprofilename),
      dnsrecordtype: cdktf.stringToTerraform(this._dnsrecordtype),
      domainname: cdktf.stringToTerraform(this._domainname),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
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
      lbvserverbinding: cdktf.stringToTerraform(this._lbvserverbinding),
      listenpolicy: cdktf.stringToTerraform(this._listenpolicy),
      listenpriority: cdktf.numberToTerraform(this._listenpriority),
      mssqlserverversion: cdktf.stringToTerraform(this._mssqlserverversion),
      mysqlcharacterset: cdktf.numberToTerraform(this._mysqlcharacterset),
      mysqlprotocolversion: cdktf.numberToTerraform(this._mysqlprotocolversion),
      mysqlservercapabilities: cdktf.numberToTerraform(this._mysqlservercapabilities),
      mysqlserverversion: cdktf.stringToTerraform(this._mysqlserverversion),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      oracleserverversion: cdktf.stringToTerraform(this._oracleserverversion),
      persistenceid: cdktf.numberToTerraform(this._persistenceid),
      persistencetype: cdktf.stringToTerraform(this._persistencetype),
      port: cdktf.numberToTerraform(this._port),
      precedence: cdktf.stringToTerraform(this._precedence),
      push: cdktf.stringToTerraform(this._push),
      pushlabel: cdktf.stringToTerraform(this._pushlabel),
      pushmulticlients: cdktf.stringToTerraform(this._pushmulticlients),
      pushvserver: cdktf.stringToTerraform(this._pushvserver),
      range: cdktf.numberToTerraform(this._range),
      redirectfromport: cdktf.numberToTerraform(this._redirectfromport),
      redirectportrewrite: cdktf.stringToTerraform(this._redirectportrewrite),
      redirecturl: cdktf.stringToTerraform(this._redirecturl),
      rhistate: cdktf.stringToTerraform(this._rhistate),
      rtspnat: cdktf.stringToTerraform(this._rtspnat),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sitedomainttl: cdktf.numberToTerraform(this._sitedomainttl),
      snisslcertkeys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snisslcertkeys),
      sobackupaction: cdktf.stringToTerraform(this._sobackupaction),
      somethod: cdktf.stringToTerraform(this._somethod),
      sopersistence: cdktf.stringToTerraform(this._sopersistence),
      sopersistencetimeout: cdktf.numberToTerraform(this._sopersistencetimeout),
      sothreshold: cdktf.numberToTerraform(this._sothreshold),
      sslcertkey: cdktf.stringToTerraform(this._sslcertkey),
      sslprofile: cdktf.stringToTerraform(this._sslprofile),
      state: cdktf.stringToTerraform(this._state),
      stateupdate: cdktf.stringToTerraform(this._stateupdate),
      targettype: cdktf.stringToTerraform(this._targettype),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      td: cdktf.numberToTerraform(this._td),
      ttl: cdktf.numberToTerraform(this._ttl),
      vipheader: cdktf.stringToTerraform(this._vipheader),
      sslpolicybinding: cdktf.listMapper(csvserverSslpolicybindingToTerraform, true)(this._sslpolicybinding.internalValue),
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
      backupip: {
        value: cdktf.stringToHclTerraform(this._backupip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupvserver: {
        value: cdktf.stringToHclTerraform(this._backupvserver),
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
      casesensitive: {
        value: cdktf.stringToHclTerraform(this._casesensitive),
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
      cookiedomain: {
        value: cdktf.stringToHclTerraform(this._cookiedomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookietimeout: {
        value: cdktf.numberToHclTerraform(this._cookietimeout),
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
      disableprimaryondown: {
        value: cdktf.stringToHclTerraform(this._disableprimaryondown),
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
      dnsrecordtype: {
        value: cdktf.stringToHclTerraform(this._dnsrecordtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domainname: {
        value: cdktf.stringToHclTerraform(this._domainname),
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
      lbvserverbinding: {
        value: cdktf.stringToHclTerraform(this._lbvserverbinding),
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
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
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
      persistenceid: {
        value: cdktf.numberToHclTerraform(this._persistenceid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistencetype: {
        value: cdktf.stringToHclTerraform(this._persistencetype),
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
      precedence: {
        value: cdktf.stringToHclTerraform(this._precedence),
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
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      redirecturl: {
        value: cdktf.stringToHclTerraform(this._redirecturl),
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
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitedomainttl: {
        value: cdktf.numberToHclTerraform(this._sitedomainttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      stateupdate: {
        value: cdktf.stringToHclTerraform(this._stateupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targettype: {
        value: cdktf.stringToHclTerraform(this._targettype),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
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
      sslpolicybinding: {
        value: cdktf.listMapperHcl(csvserverSslpolicybindingToHclTerraform, true)(this._sslpolicybinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CsvserverSslpolicybindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
