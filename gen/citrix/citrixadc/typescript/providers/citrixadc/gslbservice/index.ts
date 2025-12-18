// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#appflowlog Gslbservice#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#cip Gslbservice#cip}
  */
  readonly cip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#cipheader Gslbservice#cipheader}
  */
  readonly cipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#clttimeout Gslbservice#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#cnameentry Gslbservice#cnameentry}
  */
  readonly cnameentry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#comment Gslbservice#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#cookietimeout Gslbservice#cookietimeout}
  */
  readonly cookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#delay Gslbservice#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#downstateflush Gslbservice#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#hashid Gslbservice#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#healthmonitor Gslbservice#healthmonitor}
  */
  readonly healthmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#id Gslbservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#ip Gslbservice#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#ipaddress Gslbservice#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#maxaaausers Gslbservice#maxaaausers}
  */
  readonly maxaaausers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#maxbandwidth Gslbservice#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#maxclient Gslbservice#maxclient}
  */
  readonly maxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#monitornamesvc Gslbservice#monitornamesvc}
  */
  readonly monitornamesvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#monthreshold Gslbservice#monthreshold}
  */
  readonly monthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#naptrdomainttl Gslbservice#naptrdomainttl}
  */
  readonly naptrdomainttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#naptrorder Gslbservice#naptrorder}
  */
  readonly naptrorder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#naptrpreference Gslbservice#naptrpreference}
  */
  readonly naptrpreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#naptrreplacement Gslbservice#naptrreplacement}
  */
  readonly naptrreplacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#naptrservices Gslbservice#naptrservices}
  */
  readonly naptrservices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#port Gslbservice#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#publicip Gslbservice#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#publicport Gslbservice#publicport}
  */
  readonly publicport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#servername Gslbservice#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#servicename Gslbservice#servicename}
  */
  readonly servicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#servicetype Gslbservice#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#sitename Gslbservice#sitename}
  */
  readonly sitename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#sitepersistence Gslbservice#sitepersistence}
  */
  readonly sitepersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#siteprefix Gslbservice#siteprefix}
  */
  readonly siteprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#state Gslbservice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#svrtimeout Gslbservice#svrtimeout}
  */
  readonly svrtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#viewip Gslbservice#viewip}
  */
  readonly viewip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#viewname Gslbservice#viewname}
  */
  readonly viewname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#weight Gslbservice#weight}
  */
  readonly weight?: number;
  /**
  * lbmonitorbinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#lbmonitorbinding Gslbservice#lbmonitorbinding}
  */
  readonly lbmonitorbinding?: GslbserviceLbmonitorbinding[] | cdktf.IResolvable;
}
export interface GslbserviceLbmonitorbinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#monitor_name Gslbservice#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#monstate Gslbservice#monstate}
  */
  readonly monstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#weight Gslbservice#weight}
  */
  readonly weight?: number;
}

export function gslbserviceLbmonitorbindingToTerraform(struct?: GslbserviceLbmonitorbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    monstate: cdktf.stringToTerraform(struct!.monstate),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbserviceLbmonitorbindingToHclTerraform(struct?: GslbserviceLbmonitorbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monstate: {
      value: cdktf.stringToHclTerraform(struct!.monstate),
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

export class GslbserviceLbmonitorbindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceLbmonitorbinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monstate = this._monstate;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceLbmonitorbinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorName = undefined;
      this._monstate = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorName = value.monitorName;
      this._monstate = value.monstate;
      this._weight = value.weight;
    }
  }

  // monitor_name - computed: true, optional: true, required: false
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monstate - computed: true, optional: true, required: false
  private _monstate?: string; 
  public get monstate() {
    return this.getStringAttribute('monstate');
  }
  public set monstate(value: string) {
    this._monstate = value;
  }
  public resetMonstate() {
    this._monstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monstateInput() {
    return this._monstate;
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

export class GslbserviceLbmonitorbindingList extends cdktf.ComplexList {
  public internalValue? : GslbserviceLbmonitorbinding[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceLbmonitorbindingOutputReference {
    return new GslbserviceLbmonitorbindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice citrixadc_gslbservice}
*/
export class Gslbservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbservice to import
  * @param importFromId The id of the existing Gslbservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbservice citrixadc_gslbservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbservice',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._cip = config.cip;
    this._cipheader = config.cipheader;
    this._clttimeout = config.clttimeout;
    this._cnameentry = config.cnameentry;
    this._comment = config.comment;
    this._cookietimeout = config.cookietimeout;
    this._delay = config.delay;
    this._downstateflush = config.downstateflush;
    this._hashid = config.hashid;
    this._healthmonitor = config.healthmonitor;
    this._id = config.id;
    this._ip = config.ip;
    this._ipaddress = config.ipaddress;
    this._maxaaausers = config.maxaaausers;
    this._maxbandwidth = config.maxbandwidth;
    this._maxclient = config.maxclient;
    this._monitornamesvc = config.monitornamesvc;
    this._monthreshold = config.monthreshold;
    this._naptrdomainttl = config.naptrdomainttl;
    this._naptrorder = config.naptrorder;
    this._naptrpreference = config.naptrpreference;
    this._naptrreplacement = config.naptrreplacement;
    this._naptrservices = config.naptrservices;
    this._port = config.port;
    this._publicip = config.publicip;
    this._publicport = config.publicport;
    this._servername = config.servername;
    this._servicename = config.servicename;
    this._servicetype = config.servicetype;
    this._sitename = config.sitename;
    this._sitepersistence = config.sitepersistence;
    this._siteprefix = config.siteprefix;
    this._state = config.state;
    this._svrtimeout = config.svrtimeout;
    this._viewip = config.viewip;
    this._viewname = config.viewname;
    this._weight = config.weight;
    this._lbmonitorbinding.internalValue = config.lbmonitorbinding;
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

  // cip - computed: true, optional: true, required: false
  private _cip?: string; 
  public get cip() {
    return this.getStringAttribute('cip');
  }
  public set cip(value: string) {
    this._cip = value;
  }
  public resetCip() {
    this._cip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipInput() {
    return this._cip;
  }

  // cipheader - computed: true, optional: true, required: false
  private _cipheader?: string; 
  public get cipheader() {
    return this.getStringAttribute('cipheader');
  }
  public set cipheader(value: string) {
    this._cipheader = value;
  }
  public resetCipheader() {
    this._cipheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipheaderInput() {
    return this._cipheader;
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

  // cnameentry - computed: true, optional: true, required: false
  private _cnameentry?: string; 
  public get cnameentry() {
    return this.getStringAttribute('cnameentry');
  }
  public set cnameentry(value: string) {
    this._cnameentry = value;
  }
  public resetCnameentry() {
    this._cnameentry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameentryInput() {
    return this._cnameentry;
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

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // hashid - computed: true, optional: true, required: false
  private _hashid?: number; 
  public get hashid() {
    return this.getNumberAttribute('hashid');
  }
  public set hashid(value: number) {
    this._hashid = value;
  }
  public resetHashid() {
    this._hashid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashidInput() {
    return this._hashid;
  }

  // healthmonitor - computed: true, optional: true, required: false
  private _healthmonitor?: string; 
  public get healthmonitor() {
    return this.getStringAttribute('healthmonitor');
  }
  public set healthmonitor(value: string) {
    this._healthmonitor = value;
  }
  public resetHealthmonitor() {
    this._healthmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthmonitorInput() {
    return this._healthmonitor;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // maxaaausers - computed: true, optional: true, required: false
  private _maxaaausers?: number; 
  public get maxaaausers() {
    return this.getNumberAttribute('maxaaausers');
  }
  public set maxaaausers(value: number) {
    this._maxaaausers = value;
  }
  public resetMaxaaausers() {
    this._maxaaausers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxaaausersInput() {
    return this._maxaaausers;
  }

  // maxbandwidth - computed: true, optional: true, required: false
  private _maxbandwidth?: number; 
  public get maxbandwidth() {
    return this.getNumberAttribute('maxbandwidth');
  }
  public set maxbandwidth(value: number) {
    this._maxbandwidth = value;
  }
  public resetMaxbandwidth() {
    this._maxbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbandwidthInput() {
    return this._maxbandwidth;
  }

  // maxclient - computed: true, optional: true, required: false
  private _maxclient?: number; 
  public get maxclient() {
    return this.getNumberAttribute('maxclient');
  }
  public set maxclient(value: number) {
    this._maxclient = value;
  }
  public resetMaxclient() {
    this._maxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxclientInput() {
    return this._maxclient;
  }

  // monitornamesvc - computed: true, optional: true, required: false
  private _monitornamesvc?: string; 
  public get monitornamesvc() {
    return this.getStringAttribute('monitornamesvc');
  }
  public set monitornamesvc(value: string) {
    this._monitornamesvc = value;
  }
  public resetMonitornamesvc() {
    this._monitornamesvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornamesvcInput() {
    return this._monitornamesvc;
  }

  // monthreshold - computed: true, optional: true, required: false
  private _monthreshold?: number; 
  public get monthreshold() {
    return this.getNumberAttribute('monthreshold');
  }
  public set monthreshold(value: number) {
    this._monthreshold = value;
  }
  public resetMonthreshold() {
    this._monthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthresholdInput() {
    return this._monthreshold;
  }

  // naptrdomainttl - computed: true, optional: true, required: false
  private _naptrdomainttl?: number; 
  public get naptrdomainttl() {
    return this.getNumberAttribute('naptrdomainttl');
  }
  public set naptrdomainttl(value: number) {
    this._naptrdomainttl = value;
  }
  public resetNaptrdomainttl() {
    this._naptrdomainttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrdomainttlInput() {
    return this._naptrdomainttl;
  }

  // naptrorder - computed: true, optional: true, required: false
  private _naptrorder?: number; 
  public get naptrorder() {
    return this.getNumberAttribute('naptrorder');
  }
  public set naptrorder(value: number) {
    this._naptrorder = value;
  }
  public resetNaptrorder() {
    this._naptrorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrorderInput() {
    return this._naptrorder;
  }

  // naptrpreference - computed: true, optional: true, required: false
  private _naptrpreference?: number; 
  public get naptrpreference() {
    return this.getNumberAttribute('naptrpreference');
  }
  public set naptrpreference(value: number) {
    this._naptrpreference = value;
  }
  public resetNaptrpreference() {
    this._naptrpreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrpreferenceInput() {
    return this._naptrpreference;
  }

  // naptrreplacement - computed: true, optional: true, required: false
  private _naptrreplacement?: string; 
  public get naptrreplacement() {
    return this.getStringAttribute('naptrreplacement');
  }
  public set naptrreplacement(value: string) {
    this._naptrreplacement = value;
  }
  public resetNaptrreplacement() {
    this._naptrreplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrreplacementInput() {
    return this._naptrreplacement;
  }

  // naptrservices - computed: true, optional: true, required: false
  private _naptrservices?: string; 
  public get naptrservices() {
    return this.getStringAttribute('naptrservices');
  }
  public set naptrservices(value: string) {
    this._naptrservices = value;
  }
  public resetNaptrservices() {
    this._naptrservices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrservicesInput() {
    return this._naptrservices;
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

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // publicport - computed: true, optional: true, required: false
  private _publicport?: number; 
  public get publicport() {
    return this.getNumberAttribute('publicport');
  }
  public set publicport(value: number) {
    this._publicport = value;
  }
  public resetPublicport() {
    this._publicport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicportInput() {
    return this._publicport;
  }

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
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

  // sitename - computed: true, optional: true, required: false
  private _sitename?: string; 
  public get sitename() {
    return this.getStringAttribute('sitename');
  }
  public set sitename(value: string) {
    this._sitename = value;
  }
  public resetSitename() {
    this._sitename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitenameInput() {
    return this._sitename;
  }

  // sitepersistence - computed: true, optional: true, required: false
  private _sitepersistence?: string; 
  public get sitepersistence() {
    return this.getStringAttribute('sitepersistence');
  }
  public set sitepersistence(value: string) {
    this._sitepersistence = value;
  }
  public resetSitepersistence() {
    this._sitepersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitepersistenceInput() {
    return this._sitepersistence;
  }

  // siteprefix - computed: true, optional: true, required: false
  private _siteprefix?: string; 
  public get siteprefix() {
    return this.getStringAttribute('siteprefix');
  }
  public set siteprefix(value: string) {
    this._siteprefix = value;
  }
  public resetSiteprefix() {
    this._siteprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteprefixInput() {
    return this._siteprefix;
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

  // svrtimeout - computed: true, optional: true, required: false
  private _svrtimeout?: number; 
  public get svrtimeout() {
    return this.getNumberAttribute('svrtimeout');
  }
  public set svrtimeout(value: number) {
    this._svrtimeout = value;
  }
  public resetSvrtimeout() {
    this._svrtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrtimeoutInput() {
    return this._svrtimeout;
  }

  // viewip - computed: true, optional: true, required: false
  private _viewip?: string; 
  public get viewip() {
    return this.getStringAttribute('viewip');
  }
  public set viewip(value: string) {
    this._viewip = value;
  }
  public resetViewip() {
    this._viewip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewipInput() {
    return this._viewip;
  }

  // viewname - computed: true, optional: true, required: false
  private _viewname?: string; 
  public get viewname() {
    return this.getStringAttribute('viewname');
  }
  public set viewname(value: string) {
    this._viewname = value;
  }
  public resetViewname() {
    this._viewname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewnameInput() {
    return this._viewname;
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

  // lbmonitorbinding - computed: false, optional: true, required: false
  private _lbmonitorbinding = new GslbserviceLbmonitorbindingList(this, "lbmonitorbinding", true);
  public get lbmonitorbinding() {
    return this._lbmonitorbinding;
  }
  public putLbmonitorbinding(value: GslbserviceLbmonitorbinding[] | cdktf.IResolvable) {
    this._lbmonitorbinding.internalValue = value;
  }
  public resetLbmonitorbinding() {
    this._lbmonitorbinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbmonitorbindingInput() {
    return this._lbmonitorbinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      cip: cdktf.stringToTerraform(this._cip),
      cipheader: cdktf.stringToTerraform(this._cipheader),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      cnameentry: cdktf.stringToTerraform(this._cnameentry),
      comment: cdktf.stringToTerraform(this._comment),
      cookietimeout: cdktf.numberToTerraform(this._cookietimeout),
      delay: cdktf.numberToTerraform(this._delay),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      hashid: cdktf.numberToTerraform(this._hashid),
      healthmonitor: cdktf.stringToTerraform(this._healthmonitor),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      maxaaausers: cdktf.numberToTerraform(this._maxaaausers),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      maxclient: cdktf.numberToTerraform(this._maxclient),
      monitornamesvc: cdktf.stringToTerraform(this._monitornamesvc),
      monthreshold: cdktf.numberToTerraform(this._monthreshold),
      naptrdomainttl: cdktf.numberToTerraform(this._naptrdomainttl),
      naptrorder: cdktf.numberToTerraform(this._naptrorder),
      naptrpreference: cdktf.numberToTerraform(this._naptrpreference),
      naptrreplacement: cdktf.stringToTerraform(this._naptrreplacement),
      naptrservices: cdktf.stringToTerraform(this._naptrservices),
      port: cdktf.numberToTerraform(this._port),
      publicip: cdktf.stringToTerraform(this._publicip),
      publicport: cdktf.numberToTerraform(this._publicport),
      servername: cdktf.stringToTerraform(this._servername),
      servicename: cdktf.stringToTerraform(this._servicename),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sitename: cdktf.stringToTerraform(this._sitename),
      sitepersistence: cdktf.stringToTerraform(this._sitepersistence),
      siteprefix: cdktf.stringToTerraform(this._siteprefix),
      state: cdktf.stringToTerraform(this._state),
      svrtimeout: cdktf.numberToTerraform(this._svrtimeout),
      viewip: cdktf.stringToTerraform(this._viewip),
      viewname: cdktf.stringToTerraform(this._viewname),
      weight: cdktf.numberToTerraform(this._weight),
      lbmonitorbinding: cdktf.listMapper(gslbserviceLbmonitorbindingToTerraform, true)(this._lbmonitorbinding.internalValue),
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
      cip: {
        value: cdktf.stringToHclTerraform(this._cip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipheader: {
        value: cdktf.stringToHclTerraform(this._cipheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clttimeout: {
        value: cdktf.numberToHclTerraform(this._clttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cnameentry: {
        value: cdktf.stringToHclTerraform(this._cnameentry),
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
      cookietimeout: {
        value: cdktf.numberToHclTerraform(this._cookietimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downstateflush: {
        value: cdktf.stringToHclTerraform(this._downstateflush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashid: {
        value: cdktf.numberToHclTerraform(this._hashid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthmonitor: {
        value: cdktf.stringToHclTerraform(this._healthmonitor),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxaaausers: {
        value: cdktf.numberToHclTerraform(this._maxaaausers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxbandwidth: {
        value: cdktf.numberToHclTerraform(this._maxbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxclient: {
        value: cdktf.numberToHclTerraform(this._maxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitornamesvc: {
        value: cdktf.stringToHclTerraform(this._monitornamesvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monthreshold: {
        value: cdktf.numberToHclTerraform(this._monthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptrdomainttl: {
        value: cdktf.numberToHclTerraform(this._naptrdomainttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptrorder: {
        value: cdktf.numberToHclTerraform(this._naptrorder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptrpreference: {
        value: cdktf.numberToHclTerraform(this._naptrpreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptrreplacement: {
        value: cdktf.stringToHclTerraform(this._naptrreplacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      naptrservices: {
        value: cdktf.stringToHclTerraform(this._naptrservices),
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
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicport: {
        value: cdktf.numberToHclTerraform(this._publicport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
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
      sitename: {
        value: cdktf.stringToHclTerraform(this._sitename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitepersistence: {
        value: cdktf.stringToHclTerraform(this._sitepersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteprefix: {
        value: cdktf.stringToHclTerraform(this._siteprefix),
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
      svrtimeout: {
        value: cdktf.numberToHclTerraform(this._svrtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      viewip: {
        value: cdktf.stringToHclTerraform(this._viewip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewname: {
        value: cdktf.stringToHclTerraform(this._viewname),
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
      lbmonitorbinding: {
        value: cdktf.listMapperHcl(gslbserviceLbmonitorbindingToHclTerraform, true)(this._lbmonitorbinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbserviceLbmonitorbindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
