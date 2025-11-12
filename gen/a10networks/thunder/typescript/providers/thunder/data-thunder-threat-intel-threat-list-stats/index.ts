// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderThreatIntelThreatListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#id DataThunderThreatIntelThreatListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Threat category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#name DataThunderThreatIntelThreatListStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#stats DataThunderThreatIntelThreatListStats#stats}
  */
  readonly stats?: DataThunderThreatIntelThreatListStatsStats;
}
export interface DataThunderThreatIntelThreatListStatsStats {
  /**
  * Hits for botnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#botnets DataThunderThreatIntelThreatListStats#botnets}
  */
  readonly botnets?: number;
  /**
  * Hits for dos attacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#dos_attacks DataThunderThreatIntelThreatListStats#dos_attacks}
  */
  readonly dosAttacks?: number;
  /**
  * Hits for mobile threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#mobile_threats DataThunderThreatIntelThreatListStats#mobile_threats}
  */
  readonly mobileThreats?: number;
  /**
  * Hits for phishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#phishing DataThunderThreatIntelThreatListStats#phishing}
  */
  readonly phishing?: number;
  /**
  * Hits for proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#proxy DataThunderThreatIntelThreatListStats#proxy}
  */
  readonly proxy?: number;
  /**
  * Hits for reputation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#reputation DataThunderThreatIntelThreatListStats#reputation}
  */
  readonly reputation?: number;
  /**
  * Hits for scanners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#scanners DataThunderThreatIntelThreatListStats#scanners}
  */
  readonly scanners?: number;
  /**
  * Hits for spam sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#spam_sources DataThunderThreatIntelThreatListStats#spam_sources}
  */
  readonly spamSources?: number;
  /**
  * Hits for tor-proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#tor_proxy DataThunderThreatIntelThreatListStats#tor_proxy}
  */
  readonly torProxy?: number;
  /**
  * Total hits for threat-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#total_hits DataThunderThreatIntelThreatListStats#total_hits}
  */
  readonly totalHits?: number;
  /**
  * Hits for web attacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#web_attacks DataThunderThreatIntelThreatListStats#web_attacks}
  */
  readonly webAttacks?: number;
  /**
  * Hits for windows exploits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#windows_exploits DataThunderThreatIntelThreatListStats#windows_exploits}
  */
  readonly windowsExploits?: number;
}

export function dataThunderThreatIntelThreatListStatsStatsToTerraform(struct?: DataThunderThreatIntelThreatListStatsStatsOutputReference | DataThunderThreatIntelThreatListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    botnets: cdktf.numberToTerraform(struct!.botnets),
    dos_attacks: cdktf.numberToTerraform(struct!.dosAttacks),
    mobile_threats: cdktf.numberToTerraform(struct!.mobileThreats),
    phishing: cdktf.numberToTerraform(struct!.phishing),
    proxy: cdktf.numberToTerraform(struct!.proxy),
    reputation: cdktf.numberToTerraform(struct!.reputation),
    scanners: cdktf.numberToTerraform(struct!.scanners),
    spam_sources: cdktf.numberToTerraform(struct!.spamSources),
    tor_proxy: cdktf.numberToTerraform(struct!.torProxy),
    total_hits: cdktf.numberToTerraform(struct!.totalHits),
    web_attacks: cdktf.numberToTerraform(struct!.webAttacks),
    windows_exploits: cdktf.numberToTerraform(struct!.windowsExploits),
  }
}


export function dataThunderThreatIntelThreatListStatsStatsToHclTerraform(struct?: DataThunderThreatIntelThreatListStatsStatsOutputReference | DataThunderThreatIntelThreatListStatsStats): any {
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
    total_hits: {
      value: cdktf.numberToHclTerraform(struct!.totalHits),
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

export class DataThunderThreatIntelThreatListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderThreatIntelThreatListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.botnets = this._botnets;
    }
    if (this._dosAttacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosAttacks = this._dosAttacks;
    }
    if (this._mobileThreats !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileThreats = this._mobileThreats;
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
    if (this._totalHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHits = this._totalHits;
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

  public set internalValue(value: DataThunderThreatIntelThreatListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._botnets = undefined;
      this._dosAttacks = undefined;
      this._mobileThreats = undefined;
      this._phishing = undefined;
      this._proxy = undefined;
      this._reputation = undefined;
      this._scanners = undefined;
      this._spamSources = undefined;
      this._torProxy = undefined;
      this._totalHits = undefined;
      this._webAttacks = undefined;
      this._windowsExploits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._botnets = value.botnets;
      this._dosAttacks = value.dosAttacks;
      this._mobileThreats = value.mobileThreats;
      this._phishing = value.phishing;
      this._proxy = value.proxy;
      this._reputation = value.reputation;
      this._scanners = value.scanners;
      this._spamSources = value.spamSources;
      this._torProxy = value.torProxy;
      this._totalHits = value.totalHits;
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

  // total_hits - computed: false, optional: true, required: false
  private _totalHits?: number; 
  public get totalHits() {
    return this.getNumberAttribute('total_hits');
  }
  public set totalHits(value: number) {
    this._totalHits = value;
  }
  public resetTotalHits() {
    this._totalHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHitsInput() {
    return this._totalHits;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats thunder_threat_intel_threat_list_stats}
*/
export class DataThunderThreatIntelThreatListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_threat_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderThreatIntelThreatListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderThreatIntelThreatListStats to import
  * @param importFromId The id of the existing DataThunderThreatIntelThreatListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderThreatIntelThreatListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_threat_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_threat_list_stats thunder_threat_intel_threat_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderThreatIntelThreatListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderThreatIntelThreatListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_threat_list_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._name = config.name;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderThreatIntelThreatListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderThreatIntelThreatListStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderThreatIntelThreatListStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderThreatIntelThreatListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderThreatIntelThreatListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
