// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#appflowlog Gslbvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backupip Gslbvserver#backupip}
  */
  readonly backupip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backuplbmethod Gslbvserver#backuplbmethod}
  */
  readonly backuplbmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backupsessiontimeout Gslbvserver#backupsessiontimeout}
  */
  readonly backupsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backupvserver Gslbvserver#backupvserver}
  */
  readonly backupvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#comment Gslbvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#considereffectivestate Gslbvserver#considereffectivestate}
  */
  readonly considereffectivestate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#cookiedomain Gslbvserver#cookiedomain}
  */
  readonly cookiedomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#cookietimeout Gslbvserver#cookietimeout}
  */
  readonly cookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#disableprimaryondown Gslbvserver#disableprimaryondown}
  */
  readonly disableprimaryondown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#dnsrecordtype Gslbvserver#dnsrecordtype}
  */
  readonly dnsrecordtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#domainname Gslbvserver#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#dynamicweight Gslbvserver#dynamicweight}
  */
  readonly dynamicweight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#ecs Gslbvserver#ecs}
  */
  readonly ecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#ecsaddrvalidation Gslbvserver#ecsaddrvalidation}
  */
  readonly ecsaddrvalidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#edr Gslbvserver#edr}
  */
  readonly edr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#id Gslbvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#iptype Gslbvserver#iptype}
  */
  readonly iptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#lbmethod Gslbvserver#lbmethod}
  */
  readonly lbmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#mir Gslbvserver#mir}
  */
  readonly mir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#name Gslbvserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#netmask Gslbvserver#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#persistenceid Gslbvserver#persistenceid}
  */
  readonly persistenceid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#persistencetype Gslbvserver#persistencetype}
  */
  readonly persistencetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#persistmask Gslbvserver#persistmask}
  */
  readonly persistmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#servicename Gslbvserver#servicename}
  */
  readonly servicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#servicetype Gslbvserver#servicetype}
  */
  readonly servicetype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sitedomainttl Gslbvserver#sitedomainttl}
  */
  readonly sitedomainttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sobackupaction Gslbvserver#sobackupaction}
  */
  readonly sobackupaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#somethod Gslbvserver#somethod}
  */
  readonly somethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sopersistence Gslbvserver#sopersistence}
  */
  readonly sopersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sopersistencetimeout Gslbvserver#sopersistencetimeout}
  */
  readonly sopersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sothreshold Gslbvserver#sothreshold}
  */
  readonly sothreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#state Gslbvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#timeout Gslbvserver#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#tolerance Gslbvserver#tolerance}
  */
  readonly tolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#ttl Gslbvserver#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#v6netmasklen Gslbvserver#v6netmasklen}
  */
  readonly v6Netmasklen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#v6persistmasklen Gslbvserver#v6persistmasklen}
  */
  readonly v6Persistmasklen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#weight Gslbvserver#weight}
  */
  readonly weight?: number;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#domain Gslbvserver#domain}
  */
  readonly domain?: GslbvserverDomain[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#service Gslbvserver#service}
  */
  readonly service?: GslbvserverService[] | cdktf.IResolvable;
}
export interface GslbvserverDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backupip Gslbvserver#backupip}
  */
  readonly backupip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#backupipflag Gslbvserver#backupipflag}
  */
  readonly backupipflag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#cookiedomain Gslbvserver#cookiedomain}
  */
  readonly cookiedomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#cookiedomainflag Gslbvserver#cookiedomainflag}
  */
  readonly cookiedomainflag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#cookietimeout Gslbvserver#cookietimeout}
  */
  readonly cookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#domainname Gslbvserver#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#name Gslbvserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#sitedomainttl Gslbvserver#sitedomainttl}
  */
  readonly sitedomainttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#ttl Gslbvserver#ttl}
  */
  readonly ttl?: number;
}

export function gslbvserverDomainToTerraform(struct?: GslbvserverDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupip: cdktf.stringToTerraform(struct!.backupip),
    backupipflag: cdktf.booleanToTerraform(struct!.backupipflag),
    cookiedomain: cdktf.stringToTerraform(struct!.cookiedomain),
    cookiedomainflag: cdktf.booleanToTerraform(struct!.cookiedomainflag),
    cookietimeout: cdktf.numberToTerraform(struct!.cookietimeout),
    domainname: cdktf.stringToTerraform(struct!.domainname),
    name: cdktf.stringToTerraform(struct!.name),
    sitedomainttl: cdktf.numberToTerraform(struct!.sitedomainttl),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function gslbvserverDomainToHclTerraform(struct?: GslbvserverDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupip: {
      value: cdktf.stringToHclTerraform(struct!.backupip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupipflag: {
      value: cdktf.booleanToHclTerraform(struct!.backupipflag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookiedomain: {
      value: cdktf.stringToHclTerraform(struct!.cookiedomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookiedomainflag: {
      value: cdktf.booleanToHclTerraform(struct!.cookiedomainflag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookietimeout: {
      value: cdktf.numberToHclTerraform(struct!.cookietimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domainname: {
      value: cdktf.stringToHclTerraform(struct!.domainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sitedomainttl: {
      value: cdktf.numberToHclTerraform(struct!.sitedomainttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbvserverDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbvserverDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupip !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupip = this._backupip;
    }
    if (this._backupipflag !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupipflag = this._backupipflag;
    }
    if (this._cookiedomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiedomain = this._cookiedomain;
    }
    if (this._cookiedomainflag !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiedomainflag = this._cookiedomainflag;
    }
    if (this._cookietimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookietimeout = this._cookietimeout;
    }
    if (this._domainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainname = this._domainname;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sitedomainttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitedomainttl = this._sitedomainttl;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbvserverDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupip = undefined;
      this._backupipflag = undefined;
      this._cookiedomain = undefined;
      this._cookiedomainflag = undefined;
      this._cookietimeout = undefined;
      this._domainname = undefined;
      this._name = undefined;
      this._sitedomainttl = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupip = value.backupip;
      this._backupipflag = value.backupipflag;
      this._cookiedomain = value.cookiedomain;
      this._cookiedomainflag = value.cookiedomainflag;
      this._cookietimeout = value.cookietimeout;
      this._domainname = value.domainname;
      this._name = value.name;
      this._sitedomainttl = value.sitedomainttl;
      this._ttl = value.ttl;
    }
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

  // backupipflag - computed: true, optional: true, required: false
  private _backupipflag?: boolean | cdktf.IResolvable; 
  public get backupipflag() {
    return this.getBooleanAttribute('backupipflag');
  }
  public set backupipflag(value: boolean | cdktf.IResolvable) {
    this._backupipflag = value;
  }
  public resetBackupipflag() {
    this._backupipflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupipflagInput() {
    return this._backupipflag;
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

  // cookiedomainflag - computed: true, optional: true, required: false
  private _cookiedomainflag?: boolean | cdktf.IResolvable; 
  public get cookiedomainflag() {
    return this.getBooleanAttribute('cookiedomainflag');
  }
  public set cookiedomainflag(value: boolean | cdktf.IResolvable) {
    this._cookiedomainflag = value;
  }
  public resetCookiedomainflag() {
    this._cookiedomainflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainflagInput() {
    return this._cookiedomainflag;
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
}

export class GslbvserverDomainList extends cdktf.ComplexList {
  public internalValue? : GslbvserverDomain[] | cdktf.IResolvable

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
  public get(index: number): GslbvserverDomainOutputReference {
    return new GslbvserverDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbvserverService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#domainname Gslbvserver#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#servicename Gslbvserver#servicename}
  */
  readonly servicename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#weight Gslbvserver#weight}
  */
  readonly weight?: number;
}

export function gslbvserverServiceToTerraform(struct?: GslbvserverService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domainname: cdktf.stringToTerraform(struct!.domainname),
    servicename: cdktf.stringToTerraform(struct!.servicename),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbvserverServiceToHclTerraform(struct?: GslbvserverService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domainname: {
      value: cdktf.stringToHclTerraform(struct!.domainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicename: {
      value: cdktf.stringToHclTerraform(struct!.servicename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbvserverServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbvserverService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainname = this._domainname;
    }
    if (this._servicename !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicename = this._servicename;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbvserverService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainname = undefined;
      this._servicename = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainname = value.domainname;
      this._servicename = value.servicename;
      this._weight = value.weight;
    }
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

  // servicename - computed: false, optional: false, required: true
  private _servicename?: string; 
  public get servicename() {
    return this.getStringAttribute('servicename');
  }
  public set servicename(value: string) {
    this._servicename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenameInput() {
    return this._servicename;
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
}

export class GslbvserverServiceList extends cdktf.ComplexList {
  public internalValue? : GslbvserverService[] | cdktf.IResolvable

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
  public get(index: number): GslbvserverServiceOutputReference {
    return new GslbvserverServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver citrixadc_gslbvserver}
*/
export class Gslbvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbvserver to import
  * @param importFromId The id of the existing Gslbvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbvserver citrixadc_gslbvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbvserverConfig
  */
  public constructor(scope: Construct, id: string, config: GslbvserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbvserver',
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
    this._backupip = config.backupip;
    this._backuplbmethod = config.backuplbmethod;
    this._backupsessiontimeout = config.backupsessiontimeout;
    this._backupvserver = config.backupvserver;
    this._comment = config.comment;
    this._considereffectivestate = config.considereffectivestate;
    this._cookiedomain = config.cookiedomain;
    this._cookietimeout = config.cookietimeout;
    this._disableprimaryondown = config.disableprimaryondown;
    this._dnsrecordtype = config.dnsrecordtype;
    this._domainname = config.domainname;
    this._dynamicweight = config.dynamicweight;
    this._ecs = config.ecs;
    this._ecsaddrvalidation = config.ecsaddrvalidation;
    this._edr = config.edr;
    this._id = config.id;
    this._iptype = config.iptype;
    this._lbmethod = config.lbmethod;
    this._mir = config.mir;
    this._name = config.name;
    this._netmask = config.netmask;
    this._persistenceid = config.persistenceid;
    this._persistencetype = config.persistencetype;
    this._persistmask = config.persistmask;
    this._servicename = config.servicename;
    this._servicetype = config.servicetype;
    this._sitedomainttl = config.sitedomainttl;
    this._sobackupaction = config.sobackupaction;
    this._somethod = config.somethod;
    this._sopersistence = config.sopersistence;
    this._sopersistencetimeout = config.sopersistencetimeout;
    this._sothreshold = config.sothreshold;
    this._state = config.state;
    this._timeout = config.timeout;
    this._tolerance = config.tolerance;
    this._ttl = config.ttl;
    this._v6Netmasklen = config.v6Netmasklen;
    this._v6Persistmasklen = config.v6Persistmasklen;
    this._weight = config.weight;
    this._domain.internalValue = config.domain;
    this._service.internalValue = config.service;
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

  // backupsessiontimeout - computed: true, optional: true, required: false
  private _backupsessiontimeout?: number; 
  public get backupsessiontimeout() {
    return this.getNumberAttribute('backupsessiontimeout');
  }
  public set backupsessiontimeout(value: number) {
    this._backupsessiontimeout = value;
  }
  public resetBackupsessiontimeout() {
    this._backupsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsessiontimeoutInput() {
    return this._backupsessiontimeout;
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

  // considereffectivestate - computed: true, optional: true, required: false
  private _considereffectivestate?: string; 
  public get considereffectivestate() {
    return this.getStringAttribute('considereffectivestate');
  }
  public set considereffectivestate(value: string) {
    this._considereffectivestate = value;
  }
  public resetConsidereffectivestate() {
    this._considereffectivestate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considereffectivestateInput() {
    return this._considereffectivestate;
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

  // dynamicweight - computed: true, optional: true, required: false
  private _dynamicweight?: string; 
  public get dynamicweight() {
    return this.getStringAttribute('dynamicweight');
  }
  public set dynamicweight(value: string) {
    this._dynamicweight = value;
  }
  public resetDynamicweight() {
    this._dynamicweight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicweightInput() {
    return this._dynamicweight;
  }

  // ecs - computed: true, optional: true, required: false
  private _ecs?: string; 
  public get ecs() {
    return this.getStringAttribute('ecs');
  }
  public set ecs(value: string) {
    this._ecs = value;
  }
  public resetEcs() {
    this._ecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsInput() {
    return this._ecs;
  }

  // ecsaddrvalidation - computed: true, optional: true, required: false
  private _ecsaddrvalidation?: string; 
  public get ecsaddrvalidation() {
    return this.getStringAttribute('ecsaddrvalidation');
  }
  public set ecsaddrvalidation(value: string) {
    this._ecsaddrvalidation = value;
  }
  public resetEcsaddrvalidation() {
    this._ecsaddrvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsaddrvalidationInput() {
    return this._ecsaddrvalidation;
  }

  // edr - computed: true, optional: true, required: false
  private _edr?: string; 
  public get edr() {
    return this.getStringAttribute('edr');
  }
  public set edr(value: string) {
    this._edr = value;
  }
  public resetEdr() {
    this._edr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrInput() {
    return this._edr;
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

  // iptype - computed: true, optional: true, required: false
  private _iptype?: string; 
  public get iptype() {
    return this.getStringAttribute('iptype');
  }
  public set iptype(value: string) {
    this._iptype = value;
  }
  public resetIptype() {
    this._iptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptypeInput() {
    return this._iptype;
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

  // mir - computed: true, optional: true, required: false
  private _mir?: string; 
  public get mir() {
    return this.getStringAttribute('mir');
  }
  public set mir(value: string) {
    this._mir = value;
  }
  public resetMir() {
    this._mir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirInput() {
    return this._mir;
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

  // servicetype - computed: false, optional: false, required: true
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
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

  // timeout - computed: true, optional: true, required: false
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

  // tolerance - computed: true, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new GslbvserverDomainList(this, "domain", true);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: GslbvserverDomain[] | cdktf.IResolvable) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new GslbvserverServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: GslbvserverService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      backupip: cdktf.stringToTerraform(this._backupip),
      backuplbmethod: cdktf.stringToTerraform(this._backuplbmethod),
      backupsessiontimeout: cdktf.numberToTerraform(this._backupsessiontimeout),
      backupvserver: cdktf.stringToTerraform(this._backupvserver),
      comment: cdktf.stringToTerraform(this._comment),
      considereffectivestate: cdktf.stringToTerraform(this._considereffectivestate),
      cookiedomain: cdktf.stringToTerraform(this._cookiedomain),
      cookietimeout: cdktf.numberToTerraform(this._cookietimeout),
      disableprimaryondown: cdktf.stringToTerraform(this._disableprimaryondown),
      dnsrecordtype: cdktf.stringToTerraform(this._dnsrecordtype),
      domainname: cdktf.stringToTerraform(this._domainname),
      dynamicweight: cdktf.stringToTerraform(this._dynamicweight),
      ecs: cdktf.stringToTerraform(this._ecs),
      ecsaddrvalidation: cdktf.stringToTerraform(this._ecsaddrvalidation),
      edr: cdktf.stringToTerraform(this._edr),
      id: cdktf.stringToTerraform(this._id),
      iptype: cdktf.stringToTerraform(this._iptype),
      lbmethod: cdktf.stringToTerraform(this._lbmethod),
      mir: cdktf.stringToTerraform(this._mir),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      persistenceid: cdktf.numberToTerraform(this._persistenceid),
      persistencetype: cdktf.stringToTerraform(this._persistencetype),
      persistmask: cdktf.stringToTerraform(this._persistmask),
      servicename: cdktf.stringToTerraform(this._servicename),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sitedomainttl: cdktf.numberToTerraform(this._sitedomainttl),
      sobackupaction: cdktf.stringToTerraform(this._sobackupaction),
      somethod: cdktf.stringToTerraform(this._somethod),
      sopersistence: cdktf.stringToTerraform(this._sopersistence),
      sopersistencetimeout: cdktf.numberToTerraform(this._sopersistencetimeout),
      sothreshold: cdktf.numberToTerraform(this._sothreshold),
      state: cdktf.stringToTerraform(this._state),
      timeout: cdktf.numberToTerraform(this._timeout),
      tolerance: cdktf.numberToTerraform(this._tolerance),
      ttl: cdktf.numberToTerraform(this._ttl),
      v6netmasklen: cdktf.numberToTerraform(this._v6Netmasklen),
      v6persistmasklen: cdktf.numberToTerraform(this._v6Persistmasklen),
      weight: cdktf.numberToTerraform(this._weight),
      domain: cdktf.listMapper(gslbvserverDomainToTerraform, true)(this._domain.internalValue),
      service: cdktf.listMapper(gslbvserverServiceToTerraform, true)(this._service.internalValue),
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
      backupip: {
        value: cdktf.stringToHclTerraform(this._backupip),
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
      backupsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._backupsessiontimeout),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      considereffectivestate: {
        value: cdktf.stringToHclTerraform(this._considereffectivestate),
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
      disableprimaryondown: {
        value: cdktf.stringToHclTerraform(this._disableprimaryondown),
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
      dynamicweight: {
        value: cdktf.stringToHclTerraform(this._dynamicweight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs: {
        value: cdktf.stringToHclTerraform(this._ecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecsaddrvalidation: {
        value: cdktf.stringToHclTerraform(this._ecsaddrvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edr: {
        value: cdktf.stringToHclTerraform(this._edr),
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
      iptype: {
        value: cdktf.stringToHclTerraform(this._iptype),
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
      mir: {
        value: cdktf.stringToHclTerraform(this._mir),
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
      persistmask: {
        value: cdktf.stringToHclTerraform(this._persistmask),
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
      sitedomainttl: {
        value: cdktf.numberToHclTerraform(this._sitedomainttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tolerance: {
        value: cdktf.numberToHclTerraform(this._tolerance),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.listMapperHcl(gslbvserverDomainToHclTerraform, true)(this._domain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbvserverDomainList",
      },
      service: {
        value: cdktf.listMapperHcl(gslbvserverServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbvserverServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
