// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderThreatIntelWebrootGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#id DataThunderThreatIntelWebrootGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#stats DataThunderThreatIntelWebrootGlobalStats#stats}
  */
  readonly stats?: DataThunderThreatIntelWebrootGlobalStatsStats;
}
export interface DataThunderThreatIntelWebrootGlobalStatsStats {
  /**
  * Hits for botnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#botnets DataThunderThreatIntelWebrootGlobalStats#botnets}
  */
  readonly botnets?: number;
  /**
  * Number of lookups in database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#database_lookup DataThunderThreatIntelWebrootGlobalStats#database_lookup}
  */
  readonly databaseLookup?: number;
  /**
  * Hits for dos attacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#dos_attacks DataThunderThreatIntelWebrootGlobalStats#dos_attacks}
  */
  readonly dosAttacks?: number;
  /**
  * Hits for mobile threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#mobile_threats DataThunderThreatIntelWebrootGlobalStats#mobile_threats}
  */
  readonly mobileThreats?: number;
  /**
  * IP's not found in database or RTU cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#non_malicious_ips DataThunderThreatIntelWebrootGlobalStats#non_malicious_ips}
  */
  readonly nonMaliciousIps?: number;
  /**
  * Hits for phishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#phishing DataThunderThreatIntelWebrootGlobalStats#phishing}
  */
  readonly phishing?: number;
  /**
  * Hits for proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#proxy DataThunderThreatIntelWebrootGlobalStats#proxy}
  */
  readonly proxy?: number;
  /**
  * Hits for reputation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#reputation DataThunderThreatIntelWebrootGlobalStats#reputation}
  */
  readonly reputation?: number;
  /**
  * Number of lookups in RTU cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#rtu_lookup DataThunderThreatIntelWebrootGlobalStats#rtu_lookup}
  */
  readonly rtuLookup?: number;
  /**
  * Hits for scanners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#scanners DataThunderThreatIntelWebrootGlobalStats#scanners}
  */
  readonly scanners?: number;
  /**
  * Hits for spam sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#spam_sources DataThunderThreatIntelWebrootGlobalStats#spam_sources}
  */
  readonly spamSources?: number;
  /**
  * Hits for tor-proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#tor_proxy DataThunderThreatIntelWebrootGlobalStats#tor_proxy}
  */
  readonly torProxy?: number;
  /**
  * Hits for web attacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#web_attacks DataThunderThreatIntelWebrootGlobalStats#web_attacks}
  */
  readonly webAttacks?: number;
  /**
  * Hits for windows exploits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#windows_exploits DataThunderThreatIntelWebrootGlobalStats#windows_exploits}
  */
  readonly windowsExploits?: number;
}

export function dataThunderThreatIntelWebrootGlobalStatsStatsToTerraform(struct?: DataThunderThreatIntelWebrootGlobalStatsStatsOutputReference | DataThunderThreatIntelWebrootGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    botnets: cdktf.numberToTerraform(struct!.botnets),
    database_lookup: cdktf.numberToTerraform(struct!.databaseLookup),
    dos_attacks: cdktf.numberToTerraform(struct!.dosAttacks),
    mobile_threats: cdktf.numberToTerraform(struct!.mobileThreats),
    non_malicious_ips: cdktf.numberToTerraform(struct!.nonMaliciousIps),
    phishing: cdktf.numberToTerraform(struct!.phishing),
    proxy: cdktf.numberToTerraform(struct!.proxy),
    reputation: cdktf.numberToTerraform(struct!.reputation),
    rtu_lookup: cdktf.numberToTerraform(struct!.rtuLookup),
    scanners: cdktf.numberToTerraform(struct!.scanners),
    spam_sources: cdktf.numberToTerraform(struct!.spamSources),
    tor_proxy: cdktf.numberToTerraform(struct!.torProxy),
    web_attacks: cdktf.numberToTerraform(struct!.webAttacks),
    windows_exploits: cdktf.numberToTerraform(struct!.windowsExploits),
  }
}


export function dataThunderThreatIntelWebrootGlobalStatsStatsToHclTerraform(struct?: DataThunderThreatIntelWebrootGlobalStatsStatsOutputReference | DataThunderThreatIntelWebrootGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    botnets: {
      value: cdktf.numberToHclTerraform(struct!.botnets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_lookup: {
      value: cdktf.numberToHclTerraform(struct!.databaseLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dos_attacks: {
      value: cdktf.numberToHclTerraform(struct!.dosAttacks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mobile_threats: {
      value: cdktf.numberToHclTerraform(struct!.mobileThreats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_malicious_ips: {
      value: cdktf.numberToHclTerraform(struct!.nonMaliciousIps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phishing: {
      value: cdktf.numberToHclTerraform(struct!.phishing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: cdktf.numberToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reputation: {
      value: cdktf.numberToHclTerraform(struct!.reputation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtu_lookup: {
      value: cdktf.numberToHclTerraform(struct!.rtuLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scanners: {
      value: cdktf.numberToHclTerraform(struct!.scanners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spam_sources: {
      value: cdktf.numberToHclTerraform(struct!.spamSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tor_proxy: {
      value: cdktf.numberToHclTerraform(struct!.torProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_attacks: {
      value: cdktf.numberToHclTerraform(struct!.webAttacks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    windows_exploits: {
      value: cdktf.numberToHclTerraform(struct!.windowsExploits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderThreatIntelWebrootGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderThreatIntelWebrootGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.botnets = this._botnets;
    }
    if (this._databaseLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseLookup = this._databaseLookup;
    }
    if (this._dosAttacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosAttacks = this._dosAttacks;
    }
    if (this._mobileThreats !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileThreats = this._mobileThreats;
    }
    if (this._nonMaliciousIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonMaliciousIps = this._nonMaliciousIps;
    }
    if (this._phishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.phishing = this._phishing;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._reputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputation = this._reputation;
    }
    if (this._rtuLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtuLookup = this._rtuLookup;
    }
    if (this._scanners !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanners = this._scanners;
    }
    if (this._spamSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.spamSources = this._spamSources;
    }
    if (this._torProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.torProxy = this._torProxy;
    }
    if (this._webAttacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAttacks = this._webAttacks;
    }
    if (this._windowsExploits !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsExploits = this._windowsExploits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderThreatIntelWebrootGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._botnets = undefined;
      this._databaseLookup = undefined;
      this._dosAttacks = undefined;
      this._mobileThreats = undefined;
      this._nonMaliciousIps = undefined;
      this._phishing = undefined;
      this._proxy = undefined;
      this._reputation = undefined;
      this._rtuLookup = undefined;
      this._scanners = undefined;
      this._spamSources = undefined;
      this._torProxy = undefined;
      this._webAttacks = undefined;
      this._windowsExploits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._botnets = value.botnets;
      this._databaseLookup = value.databaseLookup;
      this._dosAttacks = value.dosAttacks;
      this._mobileThreats = value.mobileThreats;
      this._nonMaliciousIps = value.nonMaliciousIps;
      this._phishing = value.phishing;
      this._proxy = value.proxy;
      this._reputation = value.reputation;
      this._rtuLookup = value.rtuLookup;
      this._scanners = value.scanners;
      this._spamSources = value.spamSources;
      this._torProxy = value.torProxy;
      this._webAttacks = value.webAttacks;
      this._windowsExploits = value.windowsExploits;
    }
  }

  // botnets - computed: false, optional: true, required: false
  private _botnets?: number; 
  public get botnets() {
    return this.getNumberAttribute('botnets');
  }
  public set botnets(value: number) {
    this._botnets = value;
  }
  public resetBotnets() {
    this._botnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetsInput() {
    return this._botnets;
  }

  // database_lookup - computed: false, optional: true, required: false
  private _databaseLookup?: number; 
  public get databaseLookup() {
    return this.getNumberAttribute('database_lookup');
  }
  public set databaseLookup(value: number) {
    this._databaseLookup = value;
  }
  public resetDatabaseLookup() {
    this._databaseLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseLookupInput() {
    return this._databaseLookup;
  }

  // dos_attacks - computed: false, optional: true, required: false
  private _dosAttacks?: number; 
  public get dosAttacks() {
    return this.getNumberAttribute('dos_attacks');
  }
  public set dosAttacks(value: number) {
    this._dosAttacks = value;
  }
  public resetDosAttacks() {
    this._dosAttacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosAttacksInput() {
    return this._dosAttacks;
  }

  // mobile_threats - computed: false, optional: true, required: false
  private _mobileThreats?: number; 
  public get mobileThreats() {
    return this.getNumberAttribute('mobile_threats');
  }
  public set mobileThreats(value: number) {
    this._mobileThreats = value;
  }
  public resetMobileThreats() {
    this._mobileThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileThreatsInput() {
    return this._mobileThreats;
  }

  // non_malicious_ips - computed: false, optional: true, required: false
  private _nonMaliciousIps?: number; 
  public get nonMaliciousIps() {
    return this.getNumberAttribute('non_malicious_ips');
  }
  public set nonMaliciousIps(value: number) {
    this._nonMaliciousIps = value;
  }
  public resetNonMaliciousIps() {
    this._nonMaliciousIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonMaliciousIpsInput() {
    return this._nonMaliciousIps;
  }

  // phishing - computed: false, optional: true, required: false
  private _phishing?: number; 
  public get phishing() {
    return this.getNumberAttribute('phishing');
  }
  public set phishing(value: number) {
    this._phishing = value;
  }
  public resetPhishing() {
    this._phishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phishingInput() {
    return this._phishing;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: number; 
  public get proxy() {
    return this.getNumberAttribute('proxy');
  }
  public set proxy(value: number) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // reputation - computed: false, optional: true, required: false
  private _reputation?: number; 
  public get reputation() {
    return this.getNumberAttribute('reputation');
  }
  public set reputation(value: number) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // rtu_lookup - computed: false, optional: true, required: false
  private _rtuLookup?: number; 
  public get rtuLookup() {
    return this.getNumberAttribute('rtu_lookup');
  }
  public set rtuLookup(value: number) {
    this._rtuLookup = value;
  }
  public resetRtuLookup() {
    this._rtuLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuLookupInput() {
    return this._rtuLookup;
  }

  // scanners - computed: false, optional: true, required: false
  private _scanners?: number; 
  public get scanners() {
    return this.getNumberAttribute('scanners');
  }
  public set scanners(value: number) {
    this._scanners = value;
  }
  public resetScanners() {
    this._scanners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersInput() {
    return this._scanners;
  }

  // spam_sources - computed: false, optional: true, required: false
  private _spamSources?: number; 
  public get spamSources() {
    return this.getNumberAttribute('spam_sources');
  }
  public set spamSources(value: number) {
    this._spamSources = value;
  }
  public resetSpamSources() {
    this._spamSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamSourcesInput() {
    return this._spamSources;
  }

  // tor_proxy - computed: false, optional: true, required: false
  private _torProxy?: number; 
  public get torProxy() {
    return this.getNumberAttribute('tor_proxy');
  }
  public set torProxy(value: number) {
    this._torProxy = value;
  }
  public resetTorProxy() {
    this._torProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torProxyInput() {
    return this._torProxy;
  }

  // web_attacks - computed: false, optional: true, required: false
  private _webAttacks?: number; 
  public get webAttacks() {
    return this.getNumberAttribute('web_attacks');
  }
  public set webAttacks(value: number) {
    this._webAttacks = value;
  }
  public resetWebAttacks() {
    this._webAttacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttacksInput() {
    return this._webAttacks;
  }

  // windows_exploits - computed: false, optional: true, required: false
  private _windowsExploits?: number; 
  public get windowsExploits() {
    return this.getNumberAttribute('windows_exploits');
  }
  public set windowsExploits(value: number) {
    this._windowsExploits = value;
  }
  public resetWindowsExploits() {
    this._windowsExploits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExploitsInput() {
    return this._windowsExploits;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats thunder_threat_intel_webroot_global_stats}
*/
export class DataThunderThreatIntelWebrootGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_webroot_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderThreatIntelWebrootGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderThreatIntelWebrootGlobalStats to import
  * @param importFromId The id of the existing DataThunderThreatIntelWebrootGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderThreatIntelWebrootGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_webroot_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_global_stats thunder_threat_intel_webroot_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderThreatIntelWebrootGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderThreatIntelWebrootGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_webroot_global_stats',
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
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderThreatIntelWebrootGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderThreatIntelWebrootGlobalStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderThreatIntelWebrootGlobalStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderThreatIntelWebrootGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderThreatIntelWebrootGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
