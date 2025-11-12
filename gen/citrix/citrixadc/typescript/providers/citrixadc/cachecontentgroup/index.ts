// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CachecontentgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#absexpiry Cachecontentgroup#absexpiry}
  */
  readonly absexpiry?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#absexpirygmt Cachecontentgroup#absexpirygmt}
  */
  readonly absexpirygmt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#alwaysevalpolicies Cachecontentgroup#alwaysevalpolicies}
  */
  readonly alwaysevalpolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#cachecontrol Cachecontentgroup#cachecontrol}
  */
  readonly cachecontrol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#expireatlastbyte Cachecontentgroup#expireatlastbyte}
  */
  readonly expireatlastbyte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#flashcache Cachecontentgroup#flashcache}
  */
  readonly flashcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#heurexpiryparam Cachecontentgroup#heurexpiryparam}
  */
  readonly heurexpiryparam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#hitparams Cachecontentgroup#hitparams}
  */
  readonly hitparams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#hitselector Cachecontentgroup#hitselector}
  */
  readonly hitselector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#host Cachecontentgroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#id Cachecontentgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#ignoreparamvaluecase Cachecontentgroup#ignoreparamvaluecase}
  */
  readonly ignoreparamvaluecase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#ignorereloadreq Cachecontentgroup#ignorereloadreq}
  */
  readonly ignorereloadreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#ignorereqcachinghdrs Cachecontentgroup#ignorereqcachinghdrs}
  */
  readonly ignorereqcachinghdrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#insertage Cachecontentgroup#insertage}
  */
  readonly insertage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#insertetag Cachecontentgroup#insertetag}
  */
  readonly insertetag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#insertvia Cachecontentgroup#insertvia}
  */
  readonly insertvia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#invalparams Cachecontentgroup#invalparams}
  */
  readonly invalparams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#invalrestrictedtohost Cachecontentgroup#invalrestrictedtohost}
  */
  readonly invalrestrictedtohost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#invalselector Cachecontentgroup#invalselector}
  */
  readonly invalselector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#lazydnsresolve Cachecontentgroup#lazydnsresolve}
  */
  readonly lazydnsresolve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#matchcookies Cachecontentgroup#matchcookies}
  */
  readonly matchcookies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#maxressize Cachecontentgroup#maxressize}
  */
  readonly maxressize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#memlimit Cachecontentgroup#memlimit}
  */
  readonly memlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#minhits Cachecontentgroup#minhits}
  */
  readonly minhits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#minressize Cachecontentgroup#minressize}
  */
  readonly minressize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#name Cachecontentgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#persistha Cachecontentgroup#persistha}
  */
  readonly persistha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#pinned Cachecontentgroup#pinned}
  */
  readonly pinned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#polleverytime Cachecontentgroup#polleverytime}
  */
  readonly polleverytime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#prefetch Cachecontentgroup#prefetch}
  */
  readonly prefetch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#prefetchmaxpending Cachecontentgroup#prefetchmaxpending}
  */
  readonly prefetchmaxpending?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#prefetchperiod Cachecontentgroup#prefetchperiod}
  */
  readonly prefetchperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#prefetchperiodmillisec Cachecontentgroup#prefetchperiodmillisec}
  */
  readonly prefetchperiodmillisec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#query Cachecontentgroup#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#quickabortsize Cachecontentgroup#quickabortsize}
  */
  readonly quickabortsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#relexpiry Cachecontentgroup#relexpiry}
  */
  readonly relexpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#relexpirymillisec Cachecontentgroup#relexpirymillisec}
  */
  readonly relexpirymillisec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#removecookies Cachecontentgroup#removecookies}
  */
  readonly removecookies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#selectorvalue Cachecontentgroup#selectorvalue}
  */
  readonly selectorvalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#tosecondary Cachecontentgroup#tosecondary}
  */
  readonly tosecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#type Cachecontentgroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#weaknegrelexpiry Cachecontentgroup#weaknegrelexpiry}
  */
  readonly weaknegrelexpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#weakposrelexpiry Cachecontentgroup#weakposrelexpiry}
  */
  readonly weakposrelexpiry?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup citrixadc_cachecontentgroup}
*/
export class Cachecontentgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cachecontentgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cachecontentgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cachecontentgroup to import
  * @param importFromId The id of the existing Cachecontentgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cachecontentgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cachecontentgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cachecontentgroup citrixadc_cachecontentgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CachecontentgroupConfig
  */
  public constructor(scope: Construct, id: string, config: CachecontentgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cachecontentgroup',
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
    this._absexpiry = config.absexpiry;
    this._absexpirygmt = config.absexpirygmt;
    this._alwaysevalpolicies = config.alwaysevalpolicies;
    this._cachecontrol = config.cachecontrol;
    this._expireatlastbyte = config.expireatlastbyte;
    this._flashcache = config.flashcache;
    this._heurexpiryparam = config.heurexpiryparam;
    this._hitparams = config.hitparams;
    this._hitselector = config.hitselector;
    this._host = config.host;
    this._id = config.id;
    this._ignoreparamvaluecase = config.ignoreparamvaluecase;
    this._ignorereloadreq = config.ignorereloadreq;
    this._ignorereqcachinghdrs = config.ignorereqcachinghdrs;
    this._insertage = config.insertage;
    this._insertetag = config.insertetag;
    this._insertvia = config.insertvia;
    this._invalparams = config.invalparams;
    this._invalrestrictedtohost = config.invalrestrictedtohost;
    this._invalselector = config.invalselector;
    this._lazydnsresolve = config.lazydnsresolve;
    this._matchcookies = config.matchcookies;
    this._maxressize = config.maxressize;
    this._memlimit = config.memlimit;
    this._minhits = config.minhits;
    this._minressize = config.minressize;
    this._name = config.name;
    this._persistha = config.persistha;
    this._pinned = config.pinned;
    this._polleverytime = config.polleverytime;
    this._prefetch = config.prefetch;
    this._prefetchmaxpending = config.prefetchmaxpending;
    this._prefetchperiod = config.prefetchperiod;
    this._prefetchperiodmillisec = config.prefetchperiodmillisec;
    this._query = config.query;
    this._quickabortsize = config.quickabortsize;
    this._relexpiry = config.relexpiry;
    this._relexpirymillisec = config.relexpirymillisec;
    this._removecookies = config.removecookies;
    this._selectorvalue = config.selectorvalue;
    this._tosecondary = config.tosecondary;
    this._type = config.type;
    this._weaknegrelexpiry = config.weaknegrelexpiry;
    this._weakposrelexpiry = config.weakposrelexpiry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absexpiry - computed: true, optional: true, required: false
  private _absexpiry?: string[]; 
  public get absexpiry() {
    return this.getListAttribute('absexpiry');
  }
  public set absexpiry(value: string[]) {
    this._absexpiry = value;
  }
  public resetAbsexpiry() {
    this._absexpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absexpiryInput() {
    return this._absexpiry;
  }

  // absexpirygmt - computed: true, optional: true, required: false
  private _absexpirygmt?: string[]; 
  public get absexpirygmt() {
    return this.getListAttribute('absexpirygmt');
  }
  public set absexpirygmt(value: string[]) {
    this._absexpirygmt = value;
  }
  public resetAbsexpirygmt() {
    this._absexpirygmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absexpirygmtInput() {
    return this._absexpirygmt;
  }

  // alwaysevalpolicies - computed: true, optional: true, required: false
  private _alwaysevalpolicies?: string; 
  public get alwaysevalpolicies() {
    return this.getStringAttribute('alwaysevalpolicies');
  }
  public set alwaysevalpolicies(value: string) {
    this._alwaysevalpolicies = value;
  }
  public resetAlwaysevalpolicies() {
    this._alwaysevalpolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysevalpoliciesInput() {
    return this._alwaysevalpolicies;
  }

  // cachecontrol - computed: true, optional: true, required: false
  private _cachecontrol?: string; 
  public get cachecontrol() {
    return this.getStringAttribute('cachecontrol');
  }
  public set cachecontrol(value: string) {
    this._cachecontrol = value;
  }
  public resetCachecontrol() {
    this._cachecontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachecontrolInput() {
    return this._cachecontrol;
  }

  // expireatlastbyte - computed: true, optional: true, required: false
  private _expireatlastbyte?: string; 
  public get expireatlastbyte() {
    return this.getStringAttribute('expireatlastbyte');
  }
  public set expireatlastbyte(value: string) {
    this._expireatlastbyte = value;
  }
  public resetExpireatlastbyte() {
    this._expireatlastbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireatlastbyteInput() {
    return this._expireatlastbyte;
  }

  // flashcache - computed: true, optional: true, required: false
  private _flashcache?: string; 
  public get flashcache() {
    return this.getStringAttribute('flashcache');
  }
  public set flashcache(value: string) {
    this._flashcache = value;
  }
  public resetFlashcache() {
    this._flashcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashcacheInput() {
    return this._flashcache;
  }

  // heurexpiryparam - computed: true, optional: true, required: false
  private _heurexpiryparam?: number; 
  public get heurexpiryparam() {
    return this.getNumberAttribute('heurexpiryparam');
  }
  public set heurexpiryparam(value: number) {
    this._heurexpiryparam = value;
  }
  public resetHeurexpiryparam() {
    this._heurexpiryparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heurexpiryparamInput() {
    return this._heurexpiryparam;
  }

  // hitparams - computed: true, optional: true, required: false
  private _hitparams?: string[]; 
  public get hitparams() {
    return this.getListAttribute('hitparams');
  }
  public set hitparams(value: string[]) {
    this._hitparams = value;
  }
  public resetHitparams() {
    this._hitparams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitparamsInput() {
    return this._hitparams;
  }

  // hitselector - computed: true, optional: true, required: false
  private _hitselector?: string; 
  public get hitselector() {
    return this.getStringAttribute('hitselector');
  }
  public set hitselector(value: string) {
    this._hitselector = value;
  }
  public resetHitselector() {
    this._hitselector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitselectorInput() {
    return this._hitselector;
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

  // ignoreparamvaluecase - computed: true, optional: true, required: false
  private _ignoreparamvaluecase?: string; 
  public get ignoreparamvaluecase() {
    return this.getStringAttribute('ignoreparamvaluecase');
  }
  public set ignoreparamvaluecase(value: string) {
    this._ignoreparamvaluecase = value;
  }
  public resetIgnoreparamvaluecase() {
    this._ignoreparamvaluecase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreparamvaluecaseInput() {
    return this._ignoreparamvaluecase;
  }

  // ignorereloadreq - computed: true, optional: true, required: false
  private _ignorereloadreq?: string; 
  public get ignorereloadreq() {
    return this.getStringAttribute('ignorereloadreq');
  }
  public set ignorereloadreq(value: string) {
    this._ignorereloadreq = value;
  }
  public resetIgnorereloadreq() {
    this._ignorereloadreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorereloadreqInput() {
    return this._ignorereloadreq;
  }

  // ignorereqcachinghdrs - computed: true, optional: true, required: false
  private _ignorereqcachinghdrs?: string; 
  public get ignorereqcachinghdrs() {
    return this.getStringAttribute('ignorereqcachinghdrs');
  }
  public set ignorereqcachinghdrs(value: string) {
    this._ignorereqcachinghdrs = value;
  }
  public resetIgnorereqcachinghdrs() {
    this._ignorereqcachinghdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorereqcachinghdrsInput() {
    return this._ignorereqcachinghdrs;
  }

  // insertage - computed: true, optional: true, required: false
  private _insertage?: string; 
  public get insertage() {
    return this.getStringAttribute('insertage');
  }
  public set insertage(value: string) {
    this._insertage = value;
  }
  public resetInsertage() {
    this._insertage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertageInput() {
    return this._insertage;
  }

  // insertetag - computed: true, optional: true, required: false
  private _insertetag?: string; 
  public get insertetag() {
    return this.getStringAttribute('insertetag');
  }
  public set insertetag(value: string) {
    this._insertetag = value;
  }
  public resetInsertetag() {
    this._insertetag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertetagInput() {
    return this._insertetag;
  }

  // insertvia - computed: true, optional: true, required: false
  private _insertvia?: string; 
  public get insertvia() {
    return this.getStringAttribute('insertvia');
  }
  public set insertvia(value: string) {
    this._insertvia = value;
  }
  public resetInsertvia() {
    this._insertvia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertviaInput() {
    return this._insertvia;
  }

  // invalparams - computed: true, optional: true, required: false
  private _invalparams?: string[]; 
  public get invalparams() {
    return this.getListAttribute('invalparams');
  }
  public set invalparams(value: string[]) {
    this._invalparams = value;
  }
  public resetInvalparams() {
    this._invalparams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalparamsInput() {
    return this._invalparams;
  }

  // invalrestrictedtohost - computed: true, optional: true, required: false
  private _invalrestrictedtohost?: string; 
  public get invalrestrictedtohost() {
    return this.getStringAttribute('invalrestrictedtohost');
  }
  public set invalrestrictedtohost(value: string) {
    this._invalrestrictedtohost = value;
  }
  public resetInvalrestrictedtohost() {
    this._invalrestrictedtohost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalrestrictedtohostInput() {
    return this._invalrestrictedtohost;
  }

  // invalselector - computed: true, optional: true, required: false
  private _invalselector?: string; 
  public get invalselector() {
    return this.getStringAttribute('invalselector');
  }
  public set invalselector(value: string) {
    this._invalselector = value;
  }
  public resetInvalselector() {
    this._invalselector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalselectorInput() {
    return this._invalselector;
  }

  // lazydnsresolve - computed: true, optional: true, required: false
  private _lazydnsresolve?: string; 
  public get lazydnsresolve() {
    return this.getStringAttribute('lazydnsresolve');
  }
  public set lazydnsresolve(value: string) {
    this._lazydnsresolve = value;
  }
  public resetLazydnsresolve() {
    this._lazydnsresolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lazydnsresolveInput() {
    return this._lazydnsresolve;
  }

  // matchcookies - computed: true, optional: true, required: false
  private _matchcookies?: string; 
  public get matchcookies() {
    return this.getStringAttribute('matchcookies');
  }
  public set matchcookies(value: string) {
    this._matchcookies = value;
  }
  public resetMatchcookies() {
    this._matchcookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchcookiesInput() {
    return this._matchcookies;
  }

  // maxressize - computed: true, optional: true, required: false
  private _maxressize?: number; 
  public get maxressize() {
    return this.getNumberAttribute('maxressize');
  }
  public set maxressize(value: number) {
    this._maxressize = value;
  }
  public resetMaxressize() {
    this._maxressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxressizeInput() {
    return this._maxressize;
  }

  // memlimit - computed: true, optional: true, required: false
  private _memlimit?: number; 
  public get memlimit() {
    return this.getNumberAttribute('memlimit');
  }
  public set memlimit(value: number) {
    this._memlimit = value;
  }
  public resetMemlimit() {
    this._memlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memlimitInput() {
    return this._memlimit;
  }

  // minhits - computed: true, optional: true, required: false
  private _minhits?: number; 
  public get minhits() {
    return this.getNumberAttribute('minhits');
  }
  public set minhits(value: number) {
    this._minhits = value;
  }
  public resetMinhits() {
    this._minhits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minhitsInput() {
    return this._minhits;
  }

  // minressize - computed: true, optional: true, required: false
  private _minressize?: number; 
  public get minressize() {
    return this.getNumberAttribute('minressize');
  }
  public set minressize(value: number) {
    this._minressize = value;
  }
  public resetMinressize() {
    this._minressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minressizeInput() {
    return this._minressize;
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

  // persistha - computed: true, optional: true, required: false
  private _persistha?: string; 
  public get persistha() {
    return this.getStringAttribute('persistha');
  }
  public set persistha(value: string) {
    this._persistha = value;
  }
  public resetPersistha() {
    this._persistha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persisthaInput() {
    return this._persistha;
  }

  // pinned - computed: true, optional: true, required: false
  private _pinned?: string; 
  public get pinned() {
    return this.getStringAttribute('pinned');
  }
  public set pinned(value: string) {
    this._pinned = value;
  }
  public resetPinned() {
    this._pinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedInput() {
    return this._pinned;
  }

  // polleverytime - computed: true, optional: true, required: false
  private _polleverytime?: string; 
  public get polleverytime() {
    return this.getStringAttribute('polleverytime');
  }
  public set polleverytime(value: string) {
    this._polleverytime = value;
  }
  public resetPolleverytime() {
    this._polleverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polleverytimeInput() {
    return this._polleverytime;
  }

  // prefetch - computed: true, optional: true, required: false
  private _prefetch?: string; 
  public get prefetch() {
    return this.getStringAttribute('prefetch');
  }
  public set prefetch(value: string) {
    this._prefetch = value;
  }
  public resetPrefetch() {
    this._prefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchInput() {
    return this._prefetch;
  }

  // prefetchmaxpending - computed: true, optional: true, required: false
  private _prefetchmaxpending?: number; 
  public get prefetchmaxpending() {
    return this.getNumberAttribute('prefetchmaxpending');
  }
  public set prefetchmaxpending(value: number) {
    this._prefetchmaxpending = value;
  }
  public resetPrefetchmaxpending() {
    this._prefetchmaxpending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchmaxpendingInput() {
    return this._prefetchmaxpending;
  }

  // prefetchperiod - computed: true, optional: true, required: false
  private _prefetchperiod?: number; 
  public get prefetchperiod() {
    return this.getNumberAttribute('prefetchperiod');
  }
  public set prefetchperiod(value: number) {
    this._prefetchperiod = value;
  }
  public resetPrefetchperiod() {
    this._prefetchperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchperiodInput() {
    return this._prefetchperiod;
  }

  // prefetchperiodmillisec - computed: true, optional: true, required: false
  private _prefetchperiodmillisec?: number; 
  public get prefetchperiodmillisec() {
    return this.getNumberAttribute('prefetchperiodmillisec');
  }
  public set prefetchperiodmillisec(value: number) {
    this._prefetchperiodmillisec = value;
  }
  public resetPrefetchperiodmillisec() {
    this._prefetchperiodmillisec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchperiodmillisecInput() {
    return this._prefetchperiodmillisec;
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

  // quickabortsize - computed: true, optional: true, required: false
  private _quickabortsize?: number; 
  public get quickabortsize() {
    return this.getNumberAttribute('quickabortsize');
  }
  public set quickabortsize(value: number) {
    this._quickabortsize = value;
  }
  public resetQuickabortsize() {
    this._quickabortsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickabortsizeInput() {
    return this._quickabortsize;
  }

  // relexpiry - computed: true, optional: true, required: false
  private _relexpiry?: number; 
  public get relexpiry() {
    return this.getNumberAttribute('relexpiry');
  }
  public set relexpiry(value: number) {
    this._relexpiry = value;
  }
  public resetRelexpiry() {
    this._relexpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relexpiryInput() {
    return this._relexpiry;
  }

  // relexpirymillisec - computed: true, optional: true, required: false
  private _relexpirymillisec?: number; 
  public get relexpirymillisec() {
    return this.getNumberAttribute('relexpirymillisec');
  }
  public set relexpirymillisec(value: number) {
    this._relexpirymillisec = value;
  }
  public resetRelexpirymillisec() {
    this._relexpirymillisec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relexpirymillisecInput() {
    return this._relexpirymillisec;
  }

  // removecookies - computed: true, optional: true, required: false
  private _removecookies?: string; 
  public get removecookies() {
    return this.getStringAttribute('removecookies');
  }
  public set removecookies(value: string) {
    this._removecookies = value;
  }
  public resetRemovecookies() {
    this._removecookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removecookiesInput() {
    return this._removecookies;
  }

  // selectorvalue - computed: true, optional: true, required: false
  private _selectorvalue?: string; 
  public get selectorvalue() {
    return this.getStringAttribute('selectorvalue');
  }
  public set selectorvalue(value: string) {
    this._selectorvalue = value;
  }
  public resetSelectorvalue() {
    this._selectorvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorvalueInput() {
    return this._selectorvalue;
  }

  // tosecondary - computed: true, optional: true, required: false
  private _tosecondary?: string; 
  public get tosecondary() {
    return this.getStringAttribute('tosecondary');
  }
  public set tosecondary(value: string) {
    this._tosecondary = value;
  }
  public resetTosecondary() {
    this._tosecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosecondaryInput() {
    return this._tosecondary;
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

  // weaknegrelexpiry - computed: true, optional: true, required: false
  private _weaknegrelexpiry?: number; 
  public get weaknegrelexpiry() {
    return this.getNumberAttribute('weaknegrelexpiry');
  }
  public set weaknegrelexpiry(value: number) {
    this._weaknegrelexpiry = value;
  }
  public resetWeaknegrelexpiry() {
    this._weaknegrelexpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaknegrelexpiryInput() {
    return this._weaknegrelexpiry;
  }

  // weakposrelexpiry - computed: true, optional: true, required: false
  private _weakposrelexpiry?: number; 
  public get weakposrelexpiry() {
    return this.getNumberAttribute('weakposrelexpiry');
  }
  public set weakposrelexpiry(value: number) {
    this._weakposrelexpiry = value;
  }
  public resetWeakposrelexpiry() {
    this._weakposrelexpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakposrelexpiryInput() {
    return this._weakposrelexpiry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      absexpiry: cdktf.listMapper(cdktf.stringToTerraform, false)(this._absexpiry),
      absexpirygmt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._absexpirygmt),
      alwaysevalpolicies: cdktf.stringToTerraform(this._alwaysevalpolicies),
      cachecontrol: cdktf.stringToTerraform(this._cachecontrol),
      expireatlastbyte: cdktf.stringToTerraform(this._expireatlastbyte),
      flashcache: cdktf.stringToTerraform(this._flashcache),
      heurexpiryparam: cdktf.numberToTerraform(this._heurexpiryparam),
      hitparams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hitparams),
      hitselector: cdktf.stringToTerraform(this._hitselector),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      ignoreparamvaluecase: cdktf.stringToTerraform(this._ignoreparamvaluecase),
      ignorereloadreq: cdktf.stringToTerraform(this._ignorereloadreq),
      ignorereqcachinghdrs: cdktf.stringToTerraform(this._ignorereqcachinghdrs),
      insertage: cdktf.stringToTerraform(this._insertage),
      insertetag: cdktf.stringToTerraform(this._insertetag),
      insertvia: cdktf.stringToTerraform(this._insertvia),
      invalparams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invalparams),
      invalrestrictedtohost: cdktf.stringToTerraform(this._invalrestrictedtohost),
      invalselector: cdktf.stringToTerraform(this._invalselector),
      lazydnsresolve: cdktf.stringToTerraform(this._lazydnsresolve),
      matchcookies: cdktf.stringToTerraform(this._matchcookies),
      maxressize: cdktf.numberToTerraform(this._maxressize),
      memlimit: cdktf.numberToTerraform(this._memlimit),
      minhits: cdktf.numberToTerraform(this._minhits),
      minressize: cdktf.numberToTerraform(this._minressize),
      name: cdktf.stringToTerraform(this._name),
      persistha: cdktf.stringToTerraform(this._persistha),
      pinned: cdktf.stringToTerraform(this._pinned),
      polleverytime: cdktf.stringToTerraform(this._polleverytime),
      prefetch: cdktf.stringToTerraform(this._prefetch),
      prefetchmaxpending: cdktf.numberToTerraform(this._prefetchmaxpending),
      prefetchperiod: cdktf.numberToTerraform(this._prefetchperiod),
      prefetchperiodmillisec: cdktf.numberToTerraform(this._prefetchperiodmillisec),
      query: cdktf.stringToTerraform(this._query),
      quickabortsize: cdktf.numberToTerraform(this._quickabortsize),
      relexpiry: cdktf.numberToTerraform(this._relexpiry),
      relexpirymillisec: cdktf.numberToTerraform(this._relexpirymillisec),
      removecookies: cdktf.stringToTerraform(this._removecookies),
      selectorvalue: cdktf.stringToTerraform(this._selectorvalue),
      tosecondary: cdktf.stringToTerraform(this._tosecondary),
      type: cdktf.stringToTerraform(this._type),
      weaknegrelexpiry: cdktf.numberToTerraform(this._weaknegrelexpiry),
      weakposrelexpiry: cdktf.numberToTerraform(this._weakposrelexpiry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absexpiry: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._absexpiry),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      absexpirygmt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._absexpirygmt),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alwaysevalpolicies: {
        value: cdktf.stringToHclTerraform(this._alwaysevalpolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachecontrol: {
        value: cdktf.stringToHclTerraform(this._cachecontrol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expireatlastbyte: {
        value: cdktf.stringToHclTerraform(this._expireatlastbyte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flashcache: {
        value: cdktf.stringToHclTerraform(this._flashcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heurexpiryparam: {
        value: cdktf.numberToHclTerraform(this._heurexpiryparam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hitparams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hitparams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hitselector: {
        value: cdktf.stringToHclTerraform(this._hitselector),
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
      ignoreparamvaluecase: {
        value: cdktf.stringToHclTerraform(this._ignoreparamvaluecase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignorereloadreq: {
        value: cdktf.stringToHclTerraform(this._ignorereloadreq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignorereqcachinghdrs: {
        value: cdktf.stringToHclTerraform(this._ignorereqcachinghdrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertage: {
        value: cdktf.stringToHclTerraform(this._insertage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertetag: {
        value: cdktf.stringToHclTerraform(this._insertetag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertvia: {
        value: cdktf.stringToHclTerraform(this._insertvia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalparams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invalparams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      invalrestrictedtohost: {
        value: cdktf.stringToHclTerraform(this._invalrestrictedtohost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalselector: {
        value: cdktf.stringToHclTerraform(this._invalselector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lazydnsresolve: {
        value: cdktf.stringToHclTerraform(this._lazydnsresolve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matchcookies: {
        value: cdktf.stringToHclTerraform(this._matchcookies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxressize: {
        value: cdktf.numberToHclTerraform(this._maxressize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memlimit: {
        value: cdktf.numberToHclTerraform(this._memlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minhits: {
        value: cdktf.numberToHclTerraform(this._minhits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minressize: {
        value: cdktf.numberToHclTerraform(this._minressize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistha: {
        value: cdktf.stringToHclTerraform(this._persistha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pinned: {
        value: cdktf.stringToHclTerraform(this._pinned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polleverytime: {
        value: cdktf.stringToHclTerraform(this._polleverytime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefetch: {
        value: cdktf.stringToHclTerraform(this._prefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefetchmaxpending: {
        value: cdktf.numberToHclTerraform(this._prefetchmaxpending),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefetchperiod: {
        value: cdktf.numberToHclTerraform(this._prefetchperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefetchperiodmillisec: {
        value: cdktf.numberToHclTerraform(this._prefetchperiodmillisec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quickabortsize: {
        value: cdktf.numberToHclTerraform(this._quickabortsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relexpiry: {
        value: cdktf.numberToHclTerraform(this._relexpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relexpirymillisec: {
        value: cdktf.numberToHclTerraform(this._relexpirymillisec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      removecookies: {
        value: cdktf.stringToHclTerraform(this._removecookies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selectorvalue: {
        value: cdktf.stringToHclTerraform(this._selectorvalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tosecondary: {
        value: cdktf.stringToHclTerraform(this._tosecondary),
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
      weaknegrelexpiry: {
        value: cdktf.numberToHclTerraform(this._weaknegrelexpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weakposrelexpiry: {
        value: cdktf.numberToHclTerraform(this._weakposrelexpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
