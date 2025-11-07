// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#analysis_service SystemFortiguard#analysis_service}
  */
  readonly analysisService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_cache SystemFortiguard#antispam_cache}
  */
  readonly antispamCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_cache_mpercent SystemFortiguard#antispam_cache_mpercent}
  */
  readonly antispamCacheMpercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_cache_ttl SystemFortiguard#antispam_cache_ttl}
  */
  readonly antispamCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_expiration SystemFortiguard#antispam_expiration}
  */
  readonly antispamExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_force_off SystemFortiguard#antispam_force_off}
  */
  readonly antispamForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_license SystemFortiguard#antispam_license}
  */
  readonly antispamLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_score_threshold SystemFortiguard#antispam_score_threshold}
  */
  readonly antispamScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#antispam_timeout SystemFortiguard#antispam_timeout}
  */
  readonly antispamTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_cache SystemFortiguard#avquery_cache}
  */
  readonly avqueryCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_cache_mpercent SystemFortiguard#avquery_cache_mpercent}
  */
  readonly avqueryCacheMpercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_cache_ttl SystemFortiguard#avquery_cache_ttl}
  */
  readonly avqueryCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_expiration SystemFortiguard#avquery_expiration}
  */
  readonly avqueryExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_force_off SystemFortiguard#avquery_force_off}
  */
  readonly avqueryForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_license SystemFortiguard#avquery_license}
  */
  readonly avqueryLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#avquery_timeout SystemFortiguard#avquery_timeout}
  */
  readonly avqueryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#client_override_ip SystemFortiguard#client_override_ip}
  */
  readonly clientOverrideIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#client_override_status SystemFortiguard#client_override_status}
  */
  readonly clientOverrideStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#dynamic_sort_subtable SystemFortiguard#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#hostname SystemFortiguard#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#id SystemFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#load_balance_servers SystemFortiguard#load_balance_servers}
  */
  readonly loadBalanceServers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#port SystemFortiguard#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#service_account_id SystemFortiguard#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#srv_ovrd SystemFortiguard#srv_ovrd}
  */
  readonly srvOvrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_cache SystemFortiguard#webfilter_cache}
  */
  readonly webfilterCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_cache_ttl SystemFortiguard#webfilter_cache_ttl}
  */
  readonly webfilterCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_expiration SystemFortiguard#webfilter_expiration}
  */
  readonly webfilterExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_force_off SystemFortiguard#webfilter_force_off}
  */
  readonly webfilterForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_license SystemFortiguard#webfilter_license}
  */
  readonly webfilterLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#webfilter_timeout SystemFortiguard#webfilter_timeout}
  */
  readonly webfilterTimeout?: number;
  /**
  * srv_ovrd_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#srv_ovrd_list SystemFortiguard#srv_ovrd_list}
  */
  readonly srvOvrdList?: SystemFortiguardSrvOvrdListStruct[] | cdktf.IResolvable;
}
export interface SystemFortiguardSrvOvrdListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#addr_type SystemFortiguard#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#ip SystemFortiguard#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#ip6 SystemFortiguard#ip6}
  */
  readonly ip6?: string;
}

export function systemFortiguardSrvOvrdListStructToTerraform(struct?: SystemFortiguardSrvOvrdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
  }
}


export function systemFortiguardSrvOvrdListStructToHclTerraform(struct?: SystemFortiguardSrvOvrdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemFortiguardSrvOvrdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFortiguardSrvOvrdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFortiguardSrvOvrdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._ip = value.ip;
      this._ip6 = value.ip6;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
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

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }
}

export class SystemFortiguardSrvOvrdListStructList extends cdktf.ComplexList {
  public internalValue? : SystemFortiguardSrvOvrdListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemFortiguardSrvOvrdListStructOutputReference {
    return new SystemFortiguardSrvOvrdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard fortiswitch_system_fortiguard}
*/
export class SystemFortiguard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortiguard to import
  * @param importFromId The id of the existing SystemFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortiguard fortiswitch_system_fortiguard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortiguardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFortiguardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_fortiguard',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analysisService = config.analysisService;
    this._antispamCache = config.antispamCache;
    this._antispamCacheMpercent = config.antispamCacheMpercent;
    this._antispamCacheTtl = config.antispamCacheTtl;
    this._antispamExpiration = config.antispamExpiration;
    this._antispamForceOff = config.antispamForceOff;
    this._antispamLicense = config.antispamLicense;
    this._antispamScoreThreshold = config.antispamScoreThreshold;
    this._antispamTimeout = config.antispamTimeout;
    this._avqueryCache = config.avqueryCache;
    this._avqueryCacheMpercent = config.avqueryCacheMpercent;
    this._avqueryCacheTtl = config.avqueryCacheTtl;
    this._avqueryExpiration = config.avqueryExpiration;
    this._avqueryForceOff = config.avqueryForceOff;
    this._avqueryLicense = config.avqueryLicense;
    this._avqueryTimeout = config.avqueryTimeout;
    this._clientOverrideIp = config.clientOverrideIp;
    this._clientOverrideStatus = config.clientOverrideStatus;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._hostname = config.hostname;
    this._id = config.id;
    this._loadBalanceServers = config.loadBalanceServers;
    this._port = config.port;
    this._serviceAccountId = config.serviceAccountId;
    this._srvOvrd = config.srvOvrd;
    this._webfilterCache = config.webfilterCache;
    this._webfilterCacheTtl = config.webfilterCacheTtl;
    this._webfilterExpiration = config.webfilterExpiration;
    this._webfilterForceOff = config.webfilterForceOff;
    this._webfilterLicense = config.webfilterLicense;
    this._webfilterTimeout = config.webfilterTimeout;
    this._srvOvrdList.internalValue = config.srvOvrdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_service - computed: true, optional: true, required: false
  private _analysisService?: string; 
  public get analysisService() {
    return this.getStringAttribute('analysis_service');
  }
  public set analysisService(value: string) {
    this._analysisService = value;
  }
  public resetAnalysisService() {
    this._analysisService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisServiceInput() {
    return this._analysisService;
  }

  // antispam_cache - computed: true, optional: true, required: false
  private _antispamCache?: string; 
  public get antispamCache() {
    return this.getStringAttribute('antispam_cache');
  }
  public set antispamCache(value: string) {
    this._antispamCache = value;
  }
  public resetAntispamCache() {
    this._antispamCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheInput() {
    return this._antispamCache;
  }

  // antispam_cache_mpercent - computed: true, optional: true, required: false
  private _antispamCacheMpercent?: number; 
  public get antispamCacheMpercent() {
    return this.getNumberAttribute('antispam_cache_mpercent');
  }
  public set antispamCacheMpercent(value: number) {
    this._antispamCacheMpercent = value;
  }
  public resetAntispamCacheMpercent() {
    this._antispamCacheMpercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheMpercentInput() {
    return this._antispamCacheMpercent;
  }

  // antispam_cache_ttl - computed: true, optional: true, required: false
  private _antispamCacheTtl?: number; 
  public get antispamCacheTtl() {
    return this.getNumberAttribute('antispam_cache_ttl');
  }
  public set antispamCacheTtl(value: number) {
    this._antispamCacheTtl = value;
  }
  public resetAntispamCacheTtl() {
    this._antispamCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheTtlInput() {
    return this._antispamCacheTtl;
  }

  // antispam_expiration - computed: true, optional: true, required: false
  private _antispamExpiration?: number; 
  public get antispamExpiration() {
    return this.getNumberAttribute('antispam_expiration');
  }
  public set antispamExpiration(value: number) {
    this._antispamExpiration = value;
  }
  public resetAntispamExpiration() {
    this._antispamExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamExpirationInput() {
    return this._antispamExpiration;
  }

  // antispam_force_off - computed: true, optional: true, required: false
  private _antispamForceOff?: string; 
  public get antispamForceOff() {
    return this.getStringAttribute('antispam_force_off');
  }
  public set antispamForceOff(value: string) {
    this._antispamForceOff = value;
  }
  public resetAntispamForceOff() {
    this._antispamForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamForceOffInput() {
    return this._antispamForceOff;
  }

  // antispam_license - computed: true, optional: true, required: false
  private _antispamLicense?: number; 
  public get antispamLicense() {
    return this.getNumberAttribute('antispam_license');
  }
  public set antispamLicense(value: number) {
    this._antispamLicense = value;
  }
  public resetAntispamLicense() {
    this._antispamLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamLicenseInput() {
    return this._antispamLicense;
  }

  // antispam_score_threshold - computed: true, optional: true, required: false
  private _antispamScoreThreshold?: number; 
  public get antispamScoreThreshold() {
    return this.getNumberAttribute('antispam_score_threshold');
  }
  public set antispamScoreThreshold(value: number) {
    this._antispamScoreThreshold = value;
  }
  public resetAntispamScoreThreshold() {
    this._antispamScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamScoreThresholdInput() {
    return this._antispamScoreThreshold;
  }

  // antispam_timeout - computed: true, optional: true, required: false
  private _antispamTimeout?: number; 
  public get antispamTimeout() {
    return this.getNumberAttribute('antispam_timeout');
  }
  public set antispamTimeout(value: number) {
    this._antispamTimeout = value;
  }
  public resetAntispamTimeout() {
    this._antispamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamTimeoutInput() {
    return this._antispamTimeout;
  }

  // avquery_cache - computed: true, optional: true, required: false
  private _avqueryCache?: string; 
  public get avqueryCache() {
    return this.getStringAttribute('avquery_cache');
  }
  public set avqueryCache(value: string) {
    this._avqueryCache = value;
  }
  public resetAvqueryCache() {
    this._avqueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryCacheInput() {
    return this._avqueryCache;
  }

  // avquery_cache_mpercent - computed: true, optional: true, required: false
  private _avqueryCacheMpercent?: number; 
  public get avqueryCacheMpercent() {
    return this.getNumberAttribute('avquery_cache_mpercent');
  }
  public set avqueryCacheMpercent(value: number) {
    this._avqueryCacheMpercent = value;
  }
  public resetAvqueryCacheMpercent() {
    this._avqueryCacheMpercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryCacheMpercentInput() {
    return this._avqueryCacheMpercent;
  }

  // avquery_cache_ttl - computed: true, optional: true, required: false
  private _avqueryCacheTtl?: number; 
  public get avqueryCacheTtl() {
    return this.getNumberAttribute('avquery_cache_ttl');
  }
  public set avqueryCacheTtl(value: number) {
    this._avqueryCacheTtl = value;
  }
  public resetAvqueryCacheTtl() {
    this._avqueryCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryCacheTtlInput() {
    return this._avqueryCacheTtl;
  }

  // avquery_expiration - computed: true, optional: true, required: false
  private _avqueryExpiration?: number; 
  public get avqueryExpiration() {
    return this.getNumberAttribute('avquery_expiration');
  }
  public set avqueryExpiration(value: number) {
    this._avqueryExpiration = value;
  }
  public resetAvqueryExpiration() {
    this._avqueryExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryExpirationInput() {
    return this._avqueryExpiration;
  }

  // avquery_force_off - computed: true, optional: true, required: false
  private _avqueryForceOff?: string; 
  public get avqueryForceOff() {
    return this.getStringAttribute('avquery_force_off');
  }
  public set avqueryForceOff(value: string) {
    this._avqueryForceOff = value;
  }
  public resetAvqueryForceOff() {
    this._avqueryForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryForceOffInput() {
    return this._avqueryForceOff;
  }

  // avquery_license - computed: true, optional: true, required: false
  private _avqueryLicense?: number; 
  public get avqueryLicense() {
    return this.getNumberAttribute('avquery_license');
  }
  public set avqueryLicense(value: number) {
    this._avqueryLicense = value;
  }
  public resetAvqueryLicense() {
    this._avqueryLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryLicenseInput() {
    return this._avqueryLicense;
  }

  // avquery_timeout - computed: true, optional: true, required: false
  private _avqueryTimeout?: number; 
  public get avqueryTimeout() {
    return this.getNumberAttribute('avquery_timeout');
  }
  public set avqueryTimeout(value: number) {
    this._avqueryTimeout = value;
  }
  public resetAvqueryTimeout() {
    this._avqueryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avqueryTimeoutInput() {
    return this._avqueryTimeout;
  }

  // client_override_ip - computed: true, optional: true, required: false
  private _clientOverrideIp?: string; 
  public get clientOverrideIp() {
    return this.getStringAttribute('client_override_ip');
  }
  public set clientOverrideIp(value: string) {
    this._clientOverrideIp = value;
  }
  public resetClientOverrideIp() {
    this._clientOverrideIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOverrideIpInput() {
    return this._clientOverrideIp;
  }

  // client_override_status - computed: true, optional: true, required: false
  private _clientOverrideStatus?: string; 
  public get clientOverrideStatus() {
    return this.getStringAttribute('client_override_status');
  }
  public set clientOverrideStatus(value: string) {
    this._clientOverrideStatus = value;
  }
  public resetClientOverrideStatus() {
    this._clientOverrideStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOverrideStatusInput() {
    return this._clientOverrideStatus;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // load_balance_servers - computed: true, optional: true, required: false
  private _loadBalanceServers?: number; 
  public get loadBalanceServers() {
    return this.getNumberAttribute('load_balance_servers');
  }
  public set loadBalanceServers(value: number) {
    this._loadBalanceServers = value;
  }
  public resetLoadBalanceServers() {
    this._loadBalanceServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceServersInput() {
    return this._loadBalanceServers;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // srv_ovrd - computed: true, optional: true, required: false
  private _srvOvrd?: string; 
  public get srvOvrd() {
    return this.getStringAttribute('srv_ovrd');
  }
  public set srvOvrd(value: string) {
    this._srvOvrd = value;
  }
  public resetSrvOvrd() {
    this._srvOvrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvOvrdInput() {
    return this._srvOvrd;
  }

  // webfilter_cache - computed: true, optional: true, required: false
  private _webfilterCache?: string; 
  public get webfilterCache() {
    return this.getStringAttribute('webfilter_cache');
  }
  public set webfilterCache(value: string) {
    this._webfilterCache = value;
  }
  public resetWebfilterCache() {
    this._webfilterCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterCacheInput() {
    return this._webfilterCache;
  }

  // webfilter_cache_ttl - computed: true, optional: true, required: false
  private _webfilterCacheTtl?: number; 
  public get webfilterCacheTtl() {
    return this.getNumberAttribute('webfilter_cache_ttl');
  }
  public set webfilterCacheTtl(value: number) {
    this._webfilterCacheTtl = value;
  }
  public resetWebfilterCacheTtl() {
    this._webfilterCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterCacheTtlInput() {
    return this._webfilterCacheTtl;
  }

  // webfilter_expiration - computed: true, optional: true, required: false
  private _webfilterExpiration?: number; 
  public get webfilterExpiration() {
    return this.getNumberAttribute('webfilter_expiration');
  }
  public set webfilterExpiration(value: number) {
    this._webfilterExpiration = value;
  }
  public resetWebfilterExpiration() {
    this._webfilterExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterExpirationInput() {
    return this._webfilterExpiration;
  }

  // webfilter_force_off - computed: true, optional: true, required: false
  private _webfilterForceOff?: string; 
  public get webfilterForceOff() {
    return this.getStringAttribute('webfilter_force_off');
  }
  public set webfilterForceOff(value: string) {
    this._webfilterForceOff = value;
  }
  public resetWebfilterForceOff() {
    this._webfilterForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterForceOffInput() {
    return this._webfilterForceOff;
  }

  // webfilter_license - computed: true, optional: true, required: false
  private _webfilterLicense?: number; 
  public get webfilterLicense() {
    return this.getNumberAttribute('webfilter_license');
  }
  public set webfilterLicense(value: number) {
    this._webfilterLicense = value;
  }
  public resetWebfilterLicense() {
    this._webfilterLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterLicenseInput() {
    return this._webfilterLicense;
  }

  // webfilter_timeout - computed: true, optional: true, required: false
  private _webfilterTimeout?: number; 
  public get webfilterTimeout() {
    return this.getNumberAttribute('webfilter_timeout');
  }
  public set webfilterTimeout(value: number) {
    this._webfilterTimeout = value;
  }
  public resetWebfilterTimeout() {
    this._webfilterTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterTimeoutInput() {
    return this._webfilterTimeout;
  }

  // srv_ovrd_list - computed: false, optional: true, required: false
  private _srvOvrdList = new SystemFortiguardSrvOvrdListStructList(this, "srv_ovrd_list", false);
  public get srvOvrdList() {
    return this._srvOvrdList;
  }
  public putSrvOvrdList(value: SystemFortiguardSrvOvrdListStruct[] | cdktf.IResolvable) {
    this._srvOvrdList.internalValue = value;
  }
  public resetSrvOvrdList() {
    this._srvOvrdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvOvrdListInput() {
    return this._srvOvrdList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analysis_service: cdktf.stringToTerraform(this._analysisService),
      antispam_cache: cdktf.stringToTerraform(this._antispamCache),
      antispam_cache_mpercent: cdktf.numberToTerraform(this._antispamCacheMpercent),
      antispam_cache_ttl: cdktf.numberToTerraform(this._antispamCacheTtl),
      antispam_expiration: cdktf.numberToTerraform(this._antispamExpiration),
      antispam_force_off: cdktf.stringToTerraform(this._antispamForceOff),
      antispam_license: cdktf.numberToTerraform(this._antispamLicense),
      antispam_score_threshold: cdktf.numberToTerraform(this._antispamScoreThreshold),
      antispam_timeout: cdktf.numberToTerraform(this._antispamTimeout),
      avquery_cache: cdktf.stringToTerraform(this._avqueryCache),
      avquery_cache_mpercent: cdktf.numberToTerraform(this._avqueryCacheMpercent),
      avquery_cache_ttl: cdktf.numberToTerraform(this._avqueryCacheTtl),
      avquery_expiration: cdktf.numberToTerraform(this._avqueryExpiration),
      avquery_force_off: cdktf.stringToTerraform(this._avqueryForceOff),
      avquery_license: cdktf.numberToTerraform(this._avqueryLicense),
      avquery_timeout: cdktf.numberToTerraform(this._avqueryTimeout),
      client_override_ip: cdktf.stringToTerraform(this._clientOverrideIp),
      client_override_status: cdktf.stringToTerraform(this._clientOverrideStatus),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      load_balance_servers: cdktf.numberToTerraform(this._loadBalanceServers),
      port: cdktf.stringToTerraform(this._port),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      srv_ovrd: cdktf.stringToTerraform(this._srvOvrd),
      webfilter_cache: cdktf.stringToTerraform(this._webfilterCache),
      webfilter_cache_ttl: cdktf.numberToTerraform(this._webfilterCacheTtl),
      webfilter_expiration: cdktf.numberToTerraform(this._webfilterExpiration),
      webfilter_force_off: cdktf.stringToTerraform(this._webfilterForceOff),
      webfilter_license: cdktf.numberToTerraform(this._webfilterLicense),
      webfilter_timeout: cdktf.numberToTerraform(this._webfilterTimeout),
      srv_ovrd_list: cdktf.listMapper(systemFortiguardSrvOvrdListStructToTerraform, true)(this._srvOvrdList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analysis_service: {
        value: cdktf.stringToHclTerraform(this._analysisService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antispam_cache: {
        value: cdktf.stringToHclTerraform(this._antispamCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antispam_cache_mpercent: {
        value: cdktf.numberToHclTerraform(this._antispamCacheMpercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._antispamCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_expiration: {
        value: cdktf.numberToHclTerraform(this._antispamExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_force_off: {
        value: cdktf.stringToHclTerraform(this._antispamForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antispam_license: {
        value: cdktf.numberToHclTerraform(this._antispamLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_score_threshold: {
        value: cdktf.numberToHclTerraform(this._antispamScoreThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_timeout: {
        value: cdktf.numberToHclTerraform(this._antispamTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avquery_cache: {
        value: cdktf.stringToHclTerraform(this._avqueryCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avquery_cache_mpercent: {
        value: cdktf.numberToHclTerraform(this._avqueryCacheMpercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avquery_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._avqueryCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avquery_expiration: {
        value: cdktf.numberToHclTerraform(this._avqueryExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avquery_force_off: {
        value: cdktf.stringToHclTerraform(this._avqueryForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avquery_license: {
        value: cdktf.numberToHclTerraform(this._avqueryLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avquery_timeout: {
        value: cdktf.numberToHclTerraform(this._avqueryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_override_ip: {
        value: cdktf.stringToHclTerraform(this._clientOverrideIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_override_status: {
        value: cdktf.stringToHclTerraform(this._clientOverrideStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balance_servers: {
        value: cdktf.numberToHclTerraform(this._loadBalanceServers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srv_ovrd: {
        value: cdktf.stringToHclTerraform(this._srvOvrd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_cache: {
        value: cdktf.stringToHclTerraform(this._webfilterCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._webfilterCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_expiration: {
        value: cdktf.numberToHclTerraform(this._webfilterExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_force_off: {
        value: cdktf.stringToHclTerraform(this._webfilterForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_license: {
        value: cdktf.numberToHclTerraform(this._webfilterLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_timeout: {
        value: cdktf.numberToHclTerraform(this._webfilterTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srv_ovrd_list: {
        value: cdktf.listMapperHcl(systemFortiguardSrvOvrdListStructToHclTerraform, true)(this._srvOvrdList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemFortiguardSrvOvrdListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
