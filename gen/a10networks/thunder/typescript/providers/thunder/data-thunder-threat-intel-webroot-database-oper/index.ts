// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderThreatIntelWebrootDatabaseOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#id DataThunderThreatIntelWebrootDatabaseOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#oper DataThunderThreatIntelWebrootDatabaseOper#oper}
  */
  readonly oper?: DataThunderThreatIntelWebrootDatabaseOperOper;
}
export interface DataThunderThreatIntelWebrootDatabaseOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#botnets DataThunderThreatIntelWebrootDatabaseOper#botnets}
  */
  readonly botnets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#connection_status DataThunderThreatIntelWebrootDatabaseOper#connection_status}
  */
  readonly connectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#dos_attacks DataThunderThreatIntelWebrootDatabaseOper#dos_attacks}
  */
  readonly dosAttacks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#failure_reason DataThunderThreatIntelWebrootDatabaseOper#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#last_successful_connection DataThunderThreatIntelWebrootDatabaseOper#last_successful_connection}
  */
  readonly lastSuccessfulConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#last_update_time DataThunderThreatIntelWebrootDatabaseOper#last_update_time}
  */
  readonly lastUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#mobile_threats DataThunderThreatIntelWebrootDatabaseOper#mobile_threats}
  */
  readonly mobileThreats?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#name DataThunderThreatIntelWebrootDatabaseOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#next_update_time DataThunderThreatIntelWebrootDatabaseOper#next_update_time}
  */
  readonly nextUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#phishing DataThunderThreatIntelWebrootDatabaseOper#phishing}
  */
  readonly phishing?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#proxy DataThunderThreatIntelWebrootDatabaseOper#proxy}
  */
  readonly proxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#reputation DataThunderThreatIntelWebrootDatabaseOper#reputation}
  */
  readonly reputation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#scanners DataThunderThreatIntelWebrootDatabaseOper#scanners}
  */
  readonly scanners?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#size DataThunderThreatIntelWebrootDatabaseOper#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#spam_sources DataThunderThreatIntelWebrootDatabaseOper#spam_sources}
  */
  readonly spamSources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#status DataThunderThreatIntelWebrootDatabaseOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#tor_proxy DataThunderThreatIntelWebrootDatabaseOper#tor_proxy}
  */
  readonly torProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#total_entries DataThunderThreatIntelWebrootDatabaseOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#version DataThunderThreatIntelWebrootDatabaseOper#version}
  */
  readonly version?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#web_attacks DataThunderThreatIntelWebrootDatabaseOper#web_attacks}
  */
  readonly webAttacks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#windows_exploits DataThunderThreatIntelWebrootDatabaseOper#windows_exploits}
  */
  readonly windowsExploits?: number;
}

export function dataThunderThreatIntelWebrootDatabaseOperOperToTerraform(struct?: DataThunderThreatIntelWebrootDatabaseOperOperOutputReference | DataThunderThreatIntelWebrootDatabaseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    botnets: cdktf.numberToTerraform(struct!.botnets),
    connection_status: cdktf.stringToTerraform(struct!.connectionStatus),
    dos_attacks: cdktf.numberToTerraform(struct!.dosAttacks),
    failure_reason: cdktf.stringToTerraform(struct!.failureReason),
    last_successful_connection: cdktf.stringToTerraform(struct!.lastSuccessfulConnection),
    last_update_time: cdktf.stringToTerraform(struct!.lastUpdateTime),
    mobile_threats: cdktf.numberToTerraform(struct!.mobileThreats),
    name: cdktf.stringToTerraform(struct!.name),
    next_update_time: cdktf.stringToTerraform(struct!.nextUpdateTime),
    phishing: cdktf.numberToTerraform(struct!.phishing),
    proxy: cdktf.numberToTerraform(struct!.proxy),
    reputation: cdktf.numberToTerraform(struct!.reputation),
    scanners: cdktf.numberToTerraform(struct!.scanners),
    size: cdktf.stringToTerraform(struct!.size),
    spam_sources: cdktf.numberToTerraform(struct!.spamSources),
    status: cdktf.stringToTerraform(struct!.status),
    tor_proxy: cdktf.numberToTerraform(struct!.torProxy),
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    version: cdktf.numberToTerraform(struct!.version),
    web_attacks: cdktf.numberToTerraform(struct!.webAttacks),
    windows_exploits: cdktf.numberToTerraform(struct!.windowsExploits),
  }
}


export function dataThunderThreatIntelWebrootDatabaseOperOperToHclTerraform(struct?: DataThunderThreatIntelWebrootDatabaseOperOperOutputReference | DataThunderThreatIntelWebrootDatabaseOperOper): any {
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
    connection_status: {
      value: cdktf.stringToHclTerraform(struct!.connectionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_attacks: {
      value: cdktf.numberToHclTerraform(struct!.dosAttacks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_reason: {
      value: cdktf.stringToHclTerraform(struct!.failureReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_successful_connection: {
      value: cdktf.stringToHclTerraform(struct!.lastSuccessfulConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update_time: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_threats: {
      value: cdktf.numberToHclTerraform(struct!.mobileThreats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_update_time: {
      value: cdktf.stringToHclTerraform(struct!.nextUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spam_sources: {
      value: cdktf.numberToHclTerraform(struct!.spamSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tor_proxy: {
      value: cdktf.numberToHclTerraform(struct!.torProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
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

export class DataThunderThreatIntelWebrootDatabaseOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderThreatIntelWebrootDatabaseOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.botnets = this._botnets;
    }
    if (this._connectionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionStatus = this._connectionStatus;
    }
    if (this._dosAttacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosAttacks = this._dosAttacks;
    }
    if (this._failureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReason = this._failureReason;
    }
    if (this._lastSuccessfulConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSuccessfulConnection = this._lastSuccessfulConnection;
    }
    if (this._lastUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdateTime = this._lastUpdateTime;
    }
    if (this._mobileThreats !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileThreats = this._mobileThreats;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpdateTime = this._nextUpdateTime;
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
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._spamSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.spamSources = this._spamSources;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._torProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.torProxy = this._torProxy;
    }
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
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

  public set internalValue(value: DataThunderThreatIntelWebrootDatabaseOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._botnets = undefined;
      this._connectionStatus = undefined;
      this._dosAttacks = undefined;
      this._failureReason = undefined;
      this._lastSuccessfulConnection = undefined;
      this._lastUpdateTime = undefined;
      this._mobileThreats = undefined;
      this._name = undefined;
      this._nextUpdateTime = undefined;
      this._phishing = undefined;
      this._proxy = undefined;
      this._reputation = undefined;
      this._scanners = undefined;
      this._size = undefined;
      this._spamSources = undefined;
      this._status = undefined;
      this._torProxy = undefined;
      this._totalEntries = undefined;
      this._version = undefined;
      this._webAttacks = undefined;
      this._windowsExploits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._botnets = value.botnets;
      this._connectionStatus = value.connectionStatus;
      this._dosAttacks = value.dosAttacks;
      this._failureReason = value.failureReason;
      this._lastSuccessfulConnection = value.lastSuccessfulConnection;
      this._lastUpdateTime = value.lastUpdateTime;
      this._mobileThreats = value.mobileThreats;
      this._name = value.name;
      this._nextUpdateTime = value.nextUpdateTime;
      this._phishing = value.phishing;
      this._proxy = value.proxy;
      this._reputation = value.reputation;
      this._scanners = value.scanners;
      this._size = value.size;
      this._spamSources = value.spamSources;
      this._status = value.status;
      this._torProxy = value.torProxy;
      this._totalEntries = value.totalEntries;
      this._version = value.version;
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

  // connection_status - computed: false, optional: true, required: false
  private _connectionStatus?: string; 
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }
  public set connectionStatus(value: string) {
    this._connectionStatus = value;
  }
  public resetConnectionStatus() {
    this._connectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStatusInput() {
    return this._connectionStatus;
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

  // failure_reason - computed: false, optional: true, required: false
  private _failureReason?: string; 
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason;
  }

  // last_successful_connection - computed: false, optional: true, required: false
  private _lastSuccessfulConnection?: string; 
  public get lastSuccessfulConnection() {
    return this.getStringAttribute('last_successful_connection');
  }
  public set lastSuccessfulConnection(value: string) {
    this._lastSuccessfulConnection = value;
  }
  public resetLastSuccessfulConnection() {
    this._lastSuccessfulConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSuccessfulConnectionInput() {
    return this._lastSuccessfulConnection;
  }

  // last_update_time - computed: false, optional: true, required: false
  private _lastUpdateTime?: string; 
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }
  public set lastUpdateTime(value: string) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
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

  // name - computed: false, optional: true, required: false
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

  // next_update_time - computed: false, optional: true, required: false
  private _nextUpdateTime?: string; 
  public get nextUpdateTime() {
    return this.getStringAttribute('next_update_time');
  }
  public set nextUpdateTime(value: string) {
    this._nextUpdateTime = value;
  }
  public resetNextUpdateTime() {
    this._nextUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpdateTimeInput() {
    return this._nextUpdateTime;
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

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // total_entries - computed: false, optional: true, required: false
  private _totalEntries?: number; 
  public get totalEntries() {
    return this.getNumberAttribute('total_entries');
  }
  public set totalEntries(value: number) {
    this._totalEntries = value;
  }
  public resetTotalEntries() {
    this._totalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInput() {
    return this._totalEntries;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper thunder_threat_intel_webroot_database_oper}
*/
export class DataThunderThreatIntelWebrootDatabaseOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_webroot_database_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderThreatIntelWebrootDatabaseOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderThreatIntelWebrootDatabaseOper to import
  * @param importFromId The id of the existing DataThunderThreatIntelWebrootDatabaseOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderThreatIntelWebrootDatabaseOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_webroot_database_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_database_oper thunder_threat_intel_webroot_database_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderThreatIntelWebrootDatabaseOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderThreatIntelWebrootDatabaseOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_webroot_database_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderThreatIntelWebrootDatabaseOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderThreatIntelWebrootDatabaseOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderThreatIntelWebrootDatabaseOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderThreatIntelWebrootDatabaseOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderThreatIntelWebrootDatabaseOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
