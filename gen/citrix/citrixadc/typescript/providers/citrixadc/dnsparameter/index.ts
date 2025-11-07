// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#cacheecszeroprefix Dnsparameter#cacheecszeroprefix}
  */
  readonly cacheecszeroprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#cachehitbypass Dnsparameter#cachehitbypass}
  */
  readonly cachehitbypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#cachenoexpire Dnsparameter#cachenoexpire}
  */
  readonly cachenoexpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#cacherecords Dnsparameter#cacherecords}
  */
  readonly cacherecords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#dns64timeout Dnsparameter#dns64timeout}
  */
  readonly dns64Timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#dnsrootreferral Dnsparameter#dnsrootreferral}
  */
  readonly dnsrootreferral?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#dnssec Dnsparameter#dnssec}
  */
  readonly dnssec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#ecsmaxsubnets Dnsparameter#ecsmaxsubnets}
  */
  readonly ecsmaxsubnets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#id Dnsparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxcachesize Dnsparameter#maxcachesize}
  */
  readonly maxcachesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxnegativecachesize Dnsparameter#maxnegativecachesize}
  */
  readonly maxnegativecachesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxnegcachettl Dnsparameter#maxnegcachettl}
  */
  readonly maxnegcachettl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxpipeline Dnsparameter#maxpipeline}
  */
  readonly maxpipeline?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxttl Dnsparameter#maxttl}
  */
  readonly maxttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#maxudppacketsize Dnsparameter#maxudppacketsize}
  */
  readonly maxudppacketsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#minttl Dnsparameter#minttl}
  */
  readonly minttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#namelookuppriority Dnsparameter#namelookuppriority}
  */
  readonly namelookuppriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#nxdomainratelimitthreshold Dnsparameter#nxdomainratelimitthreshold}
  */
  readonly nxdomainratelimitthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#recursion Dnsparameter#recursion}
  */
  readonly recursion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#resolutionorder Dnsparameter#resolutionorder}
  */
  readonly resolutionorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#retries Dnsparameter#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#splitpktqueryprocessing Dnsparameter#splitpktqueryprocessing}
  */
  readonly splitpktqueryprocessing?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter citrixadc_dnsparameter}
*/
export class Dnsparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnsparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsparameter to import
  * @param importFromId The id of the existing Dnsparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnsparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsparameter citrixadc_dnsparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnsparameter',
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
    this._cacheecszeroprefix = config.cacheecszeroprefix;
    this._cachehitbypass = config.cachehitbypass;
    this._cachenoexpire = config.cachenoexpire;
    this._cacherecords = config.cacherecords;
    this._dns64Timeout = config.dns64Timeout;
    this._dnsrootreferral = config.dnsrootreferral;
    this._dnssec = config.dnssec;
    this._ecsmaxsubnets = config.ecsmaxsubnets;
    this._id = config.id;
    this._maxcachesize = config.maxcachesize;
    this._maxnegativecachesize = config.maxnegativecachesize;
    this._maxnegcachettl = config.maxnegcachettl;
    this._maxpipeline = config.maxpipeline;
    this._maxttl = config.maxttl;
    this._maxudppacketsize = config.maxudppacketsize;
    this._minttl = config.minttl;
    this._namelookuppriority = config.namelookuppriority;
    this._nxdomainratelimitthreshold = config.nxdomainratelimitthreshold;
    this._recursion = config.recursion;
    this._resolutionorder = config.resolutionorder;
    this._retries = config.retries;
    this._splitpktqueryprocessing = config.splitpktqueryprocessing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacheecszeroprefix - computed: true, optional: true, required: false
  private _cacheecszeroprefix?: string; 
  public get cacheecszeroprefix() {
    return this.getStringAttribute('cacheecszeroprefix');
  }
  public set cacheecszeroprefix(value: string) {
    this._cacheecszeroprefix = value;
  }
  public resetCacheecszeroprefix() {
    this._cacheecszeroprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheecszeroprefixInput() {
    return this._cacheecszeroprefix;
  }

  // cachehitbypass - computed: true, optional: true, required: false
  private _cachehitbypass?: string; 
  public get cachehitbypass() {
    return this.getStringAttribute('cachehitbypass');
  }
  public set cachehitbypass(value: string) {
    this._cachehitbypass = value;
  }
  public resetCachehitbypass() {
    this._cachehitbypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachehitbypassInput() {
    return this._cachehitbypass;
  }

  // cachenoexpire - computed: true, optional: true, required: false
  private _cachenoexpire?: string; 
  public get cachenoexpire() {
    return this.getStringAttribute('cachenoexpire');
  }
  public set cachenoexpire(value: string) {
    this._cachenoexpire = value;
  }
  public resetCachenoexpire() {
    this._cachenoexpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachenoexpireInput() {
    return this._cachenoexpire;
  }

  // cacherecords - computed: true, optional: true, required: false
  private _cacherecords?: string; 
  public get cacherecords() {
    return this.getStringAttribute('cacherecords');
  }
  public set cacherecords(value: string) {
    this._cacherecords = value;
  }
  public resetCacherecords() {
    this._cacherecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacherecordsInput() {
    return this._cacherecords;
  }

  // dns64timeout - computed: true, optional: true, required: false
  private _dns64Timeout?: number; 
  public get dns64Timeout() {
    return this.getNumberAttribute('dns64timeout');
  }
  public set dns64Timeout(value: number) {
    this._dns64Timeout = value;
  }
  public resetDns64Timeout() {
    this._dns64Timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64TimeoutInput() {
    return this._dns64Timeout;
  }

  // dnsrootreferral - computed: true, optional: true, required: false
  private _dnsrootreferral?: string; 
  public get dnsrootreferral() {
    return this.getStringAttribute('dnsrootreferral');
  }
  public set dnsrootreferral(value: string) {
    this._dnsrootreferral = value;
  }
  public resetDnsrootreferral() {
    this._dnsrootreferral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrootreferralInput() {
    return this._dnsrootreferral;
  }

  // dnssec - computed: true, optional: true, required: false
  private _dnssec?: string; 
  public get dnssec() {
    return this.getStringAttribute('dnssec');
  }
  public set dnssec(value: string) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }

  // ecsmaxsubnets - computed: true, optional: true, required: false
  private _ecsmaxsubnets?: number; 
  public get ecsmaxsubnets() {
    return this.getNumberAttribute('ecsmaxsubnets');
  }
  public set ecsmaxsubnets(value: number) {
    this._ecsmaxsubnets = value;
  }
  public resetEcsmaxsubnets() {
    this._ecsmaxsubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsmaxsubnetsInput() {
    return this._ecsmaxsubnets;
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

  // maxcachesize - computed: true, optional: true, required: false
  private _maxcachesize?: number; 
  public get maxcachesize() {
    return this.getNumberAttribute('maxcachesize');
  }
  public set maxcachesize(value: number) {
    this._maxcachesize = value;
  }
  public resetMaxcachesize() {
    this._maxcachesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxcachesizeInput() {
    return this._maxcachesize;
  }

  // maxnegativecachesize - computed: true, optional: true, required: false
  private _maxnegativecachesize?: number; 
  public get maxnegativecachesize() {
    return this.getNumberAttribute('maxnegativecachesize');
  }
  public set maxnegativecachesize(value: number) {
    this._maxnegativecachesize = value;
  }
  public resetMaxnegativecachesize() {
    this._maxnegativecachesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxnegativecachesizeInput() {
    return this._maxnegativecachesize;
  }

  // maxnegcachettl - computed: true, optional: true, required: false
  private _maxnegcachettl?: number; 
  public get maxnegcachettl() {
    return this.getNumberAttribute('maxnegcachettl');
  }
  public set maxnegcachettl(value: number) {
    this._maxnegcachettl = value;
  }
  public resetMaxnegcachettl() {
    this._maxnegcachettl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxnegcachettlInput() {
    return this._maxnegcachettl;
  }

  // maxpipeline - computed: true, optional: true, required: false
  private _maxpipeline?: number; 
  public get maxpipeline() {
    return this.getNumberAttribute('maxpipeline');
  }
  public set maxpipeline(value: number) {
    this._maxpipeline = value;
  }
  public resetMaxpipeline() {
    this._maxpipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpipelineInput() {
    return this._maxpipeline;
  }

  // maxttl - computed: true, optional: true, required: false
  private _maxttl?: number; 
  public get maxttl() {
    return this.getNumberAttribute('maxttl');
  }
  public set maxttl(value: number) {
    this._maxttl = value;
  }
  public resetMaxttl() {
    this._maxttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxttlInput() {
    return this._maxttl;
  }

  // maxudppacketsize - computed: true, optional: true, required: false
  private _maxudppacketsize?: number; 
  public get maxudppacketsize() {
    return this.getNumberAttribute('maxudppacketsize');
  }
  public set maxudppacketsize(value: number) {
    this._maxudppacketsize = value;
  }
  public resetMaxudppacketsize() {
    this._maxudppacketsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxudppacketsizeInput() {
    return this._maxudppacketsize;
  }

  // minttl - computed: true, optional: true, required: false
  private _minttl?: number; 
  public get minttl() {
    return this.getNumberAttribute('minttl');
  }
  public set minttl(value: number) {
    this._minttl = value;
  }
  public resetMinttl() {
    this._minttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minttlInput() {
    return this._minttl;
  }

  // namelookuppriority - computed: true, optional: true, required: false
  private _namelookuppriority?: string; 
  public get namelookuppriority() {
    return this.getStringAttribute('namelookuppriority');
  }
  public set namelookuppriority(value: string) {
    this._namelookuppriority = value;
  }
  public resetNamelookuppriority() {
    this._namelookuppriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namelookuppriorityInput() {
    return this._namelookuppriority;
  }

  // nxdomainratelimitthreshold - computed: true, optional: true, required: false
  private _nxdomainratelimitthreshold?: number; 
  public get nxdomainratelimitthreshold() {
    return this.getNumberAttribute('nxdomainratelimitthreshold');
  }
  public set nxdomainratelimitthreshold(value: number) {
    this._nxdomainratelimitthreshold = value;
  }
  public resetNxdomainratelimitthreshold() {
    this._nxdomainratelimitthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainratelimitthresholdInput() {
    return this._nxdomainratelimitthreshold;
  }

  // recursion - computed: true, optional: true, required: false
  private _recursion?: string; 
  public get recursion() {
    return this.getStringAttribute('recursion');
  }
  public set recursion(value: string) {
    this._recursion = value;
  }
  public resetRecursion() {
    this._recursion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionInput() {
    return this._recursion;
  }

  // resolutionorder - computed: true, optional: true, required: false
  private _resolutionorder?: string; 
  public get resolutionorder() {
    return this.getStringAttribute('resolutionorder');
  }
  public set resolutionorder(value: string) {
    this._resolutionorder = value;
  }
  public resetResolutionorder() {
    this._resolutionorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionorderInput() {
    return this._resolutionorder;
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

  // splitpktqueryprocessing - computed: true, optional: true, required: false
  private _splitpktqueryprocessing?: string; 
  public get splitpktqueryprocessing() {
    return this.getStringAttribute('splitpktqueryprocessing');
  }
  public set splitpktqueryprocessing(value: string) {
    this._splitpktqueryprocessing = value;
  }
  public resetSplitpktqueryprocessing() {
    this._splitpktqueryprocessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitpktqueryprocessingInput() {
    return this._splitpktqueryprocessing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacheecszeroprefix: cdktf.stringToTerraform(this._cacheecszeroprefix),
      cachehitbypass: cdktf.stringToTerraform(this._cachehitbypass),
      cachenoexpire: cdktf.stringToTerraform(this._cachenoexpire),
      cacherecords: cdktf.stringToTerraform(this._cacherecords),
      dns64timeout: cdktf.numberToTerraform(this._dns64Timeout),
      dnsrootreferral: cdktf.stringToTerraform(this._dnsrootreferral),
      dnssec: cdktf.stringToTerraform(this._dnssec),
      ecsmaxsubnets: cdktf.numberToTerraform(this._ecsmaxsubnets),
      id: cdktf.stringToTerraform(this._id),
      maxcachesize: cdktf.numberToTerraform(this._maxcachesize),
      maxnegativecachesize: cdktf.numberToTerraform(this._maxnegativecachesize),
      maxnegcachettl: cdktf.numberToTerraform(this._maxnegcachettl),
      maxpipeline: cdktf.numberToTerraform(this._maxpipeline),
      maxttl: cdktf.numberToTerraform(this._maxttl),
      maxudppacketsize: cdktf.numberToTerraform(this._maxudppacketsize),
      minttl: cdktf.numberToTerraform(this._minttl),
      namelookuppriority: cdktf.stringToTerraform(this._namelookuppriority),
      nxdomainratelimitthreshold: cdktf.numberToTerraform(this._nxdomainratelimitthreshold),
      recursion: cdktf.stringToTerraform(this._recursion),
      resolutionorder: cdktf.stringToTerraform(this._resolutionorder),
      retries: cdktf.numberToTerraform(this._retries),
      splitpktqueryprocessing: cdktf.stringToTerraform(this._splitpktqueryprocessing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacheecszeroprefix: {
        value: cdktf.stringToHclTerraform(this._cacheecszeroprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachehitbypass: {
        value: cdktf.stringToHclTerraform(this._cachehitbypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachenoexpire: {
        value: cdktf.stringToHclTerraform(this._cachenoexpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacherecords: {
        value: cdktf.stringToHclTerraform(this._cacherecords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns64timeout: {
        value: cdktf.numberToHclTerraform(this._dns64Timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsrootreferral: {
        value: cdktf.stringToHclTerraform(this._dnsrootreferral),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec: {
        value: cdktf.stringToHclTerraform(this._dnssec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecsmaxsubnets: {
        value: cdktf.numberToHclTerraform(this._ecsmaxsubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxcachesize: {
        value: cdktf.numberToHclTerraform(this._maxcachesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxnegativecachesize: {
        value: cdktf.numberToHclTerraform(this._maxnegativecachesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxnegcachettl: {
        value: cdktf.numberToHclTerraform(this._maxnegcachettl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpipeline: {
        value: cdktf.numberToHclTerraform(this._maxpipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxttl: {
        value: cdktf.numberToHclTerraform(this._maxttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxudppacketsize: {
        value: cdktf.numberToHclTerraform(this._maxudppacketsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minttl: {
        value: cdktf.numberToHclTerraform(this._minttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namelookuppriority: {
        value: cdktf.stringToHclTerraform(this._namelookuppriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxdomainratelimitthreshold: {
        value: cdktf.numberToHclTerraform(this._nxdomainratelimitthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recursion: {
        value: cdktf.stringToHclTerraform(this._recursion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolutionorder: {
        value: cdktf.stringToHclTerraform(this._resolutionorder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      splitpktqueryprocessing: {
        value: cdktf.stringToHclTerraform(this._splitpktqueryprocessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
