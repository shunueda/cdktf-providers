// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPbslbStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#id DataThunderSystemPbslbStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#stats DataThunderSystemPbslbStats#stats}
  */
  readonly stats?: DataThunderSystemPbslbStatsStats;
}
export interface DataThunderSystemPbslbStatsStats {
  /**
  * Current PBSLB Entry Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries DataThunderSystemPbslbStats#curr_entries}
  */
  readonly currEntries?: number;
  /**
  * Current Entry Stats Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_stats DataThunderSystemPbslbStats#curr_entries_stats}
  */
  readonly currEntriesStats?: number;
  /**
  * Current Entry Target Global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_global DataThunderSystemPbslbStats#curr_entries_target_global}
  */
  readonly currEntriesTargetGlobal?: number;
  /**
  * Current Entry Target LOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_loc DataThunderSystemPbslbStats#curr_entries_target_loc}
  */
  readonly currEntriesTargetLoc?: number;
  /**
  * Current Entry Target Rport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_rport DataThunderSystemPbslbStats#curr_entries_target_rport}
  */
  readonly currEntriesTargetRport?: number;
  /**
  * Current Entry Target Rserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_rserver DataThunderSystemPbslbStats#curr_entries_target_rserver}
  */
  readonly currEntriesTargetRserver?: number;
  /**
  * Current Entry Target Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_service DataThunderSystemPbslbStats#curr_entries_target_service}
  */
  readonly currEntriesTargetService?: number;
  /**
  * Current Entry Target Vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_vport DataThunderSystemPbslbStats#curr_entries_target_vport}
  */
  readonly currEntriesTargetVport?: number;
  /**
  * Current Entry Target Vserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#curr_entries_target_vserver DataThunderSystemPbslbStats#curr_entries_target_vserver}
  */
  readonly currEntriesTargetVserver?: number;
  /**
  * Total Direct Action Entry Count Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_direct_action_entries_created DataThunderSystemPbslbStats#total_direct_action_entries_created}
  */
  readonly totalDirectActionEntriesCreated?: number;
  /**
  * Total Direct Action Entry Count Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_direct_action_entries_freed DataThunderSystemPbslbStats#total_direct_action_entries_freed}
  */
  readonly totalDirectActionEntriesFreed?: number;
  /**
  * Total Domain Entry Count Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_domain_entries_created DataThunderSystemPbslbStats#total_domain_entries_created}
  */
  readonly totalDomainEntriesCreated?: number;
  /**
  * Total Domain Entry Count Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_domain_entries_freed DataThunderSystemPbslbStats#total_domain_entries_freed}
  */
  readonly totalDomainEntriesFreed?: number;
  /**
  * Total V4 Entry Count Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_v4_entries_created DataThunderSystemPbslbStats#total_v4_entries_created}
  */
  readonly totalV4EntriesCreated?: number;
  /**
  * Total V4 Entry Count Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_v4_entries_freed DataThunderSystemPbslbStats#total_v4_entries_freed}
  */
  readonly totalV4EntriesFreed?: number;
  /**
  * Total V6 Entry Count Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_v6_entries_created DataThunderSystemPbslbStats#total_v6_entries_created}
  */
  readonly totalV6EntriesCreated?: number;
  /**
  * Total V6 Entry Count Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#total_v6_entries_freed DataThunderSystemPbslbStats#total_v6_entries_freed}
  */
  readonly totalV6EntriesFreed?: number;
}

export function dataThunderSystemPbslbStatsStatsToTerraform(struct?: DataThunderSystemPbslbStatsStatsOutputReference | DataThunderSystemPbslbStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_entries: cdktf.numberToTerraform(struct!.currEntries),
    curr_entries_stats: cdktf.numberToTerraform(struct!.currEntriesStats),
    curr_entries_target_global: cdktf.numberToTerraform(struct!.currEntriesTargetGlobal),
    curr_entries_target_loc: cdktf.numberToTerraform(struct!.currEntriesTargetLoc),
    curr_entries_target_rport: cdktf.numberToTerraform(struct!.currEntriesTargetRport),
    curr_entries_target_rserver: cdktf.numberToTerraform(struct!.currEntriesTargetRserver),
    curr_entries_target_service: cdktf.numberToTerraform(struct!.currEntriesTargetService),
    curr_entries_target_vport: cdktf.numberToTerraform(struct!.currEntriesTargetVport),
    curr_entries_target_vserver: cdktf.numberToTerraform(struct!.currEntriesTargetVserver),
    total_direct_action_entries_created: cdktf.numberToTerraform(struct!.totalDirectActionEntriesCreated),
    total_direct_action_entries_freed: cdktf.numberToTerraform(struct!.totalDirectActionEntriesFreed),
    total_domain_entries_created: cdktf.numberToTerraform(struct!.totalDomainEntriesCreated),
    total_domain_entries_freed: cdktf.numberToTerraform(struct!.totalDomainEntriesFreed),
    total_v4_entries_created: cdktf.numberToTerraform(struct!.totalV4EntriesCreated),
    total_v4_entries_freed: cdktf.numberToTerraform(struct!.totalV4EntriesFreed),
    total_v6_entries_created: cdktf.numberToTerraform(struct!.totalV6EntriesCreated),
    total_v6_entries_freed: cdktf.numberToTerraform(struct!.totalV6EntriesFreed),
  }
}


export function dataThunderSystemPbslbStatsStatsToHclTerraform(struct?: DataThunderSystemPbslbStatsStatsOutputReference | DataThunderSystemPbslbStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_entries: {
      value: cdktf.numberToHclTerraform(struct!.currEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_stats: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_global: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_loc: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetLoc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_rport: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_rserver: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetRserver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_service: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetService),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_vport: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetVport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_entries_target_vserver: {
      value: cdktf.numberToHclTerraform(struct!.currEntriesTargetVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_direct_action_entries_created: {
      value: cdktf.numberToHclTerraform(struct!.totalDirectActionEntriesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_direct_action_entries_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalDirectActionEntriesFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_domain_entries_created: {
      value: cdktf.numberToHclTerraform(struct!.totalDomainEntriesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_domain_entries_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalDomainEntriesFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v4_entries_created: {
      value: cdktf.numberToHclTerraform(struct!.totalV4EntriesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v4_entries_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalV4EntriesFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v6_entries_created: {
      value: cdktf.numberToHclTerraform(struct!.totalV6EntriesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v6_entries_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalV6EntriesFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPbslbStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPbslbStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntries = this._currEntries;
    }
    if (this._currEntriesStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesStats = this._currEntriesStats;
    }
    if (this._currEntriesTargetGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetGlobal = this._currEntriesTargetGlobal;
    }
    if (this._currEntriesTargetLoc !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetLoc = this._currEntriesTargetLoc;
    }
    if (this._currEntriesTargetRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetRport = this._currEntriesTargetRport;
    }
    if (this._currEntriesTargetRserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetRserver = this._currEntriesTargetRserver;
    }
    if (this._currEntriesTargetService !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetService = this._currEntriesTargetService;
    }
    if (this._currEntriesTargetVport !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetVport = this._currEntriesTargetVport;
    }
    if (this._currEntriesTargetVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntriesTargetVserver = this._currEntriesTargetVserver;
    }
    if (this._totalDirectActionEntriesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDirectActionEntriesCreated = this._totalDirectActionEntriesCreated;
    }
    if (this._totalDirectActionEntriesFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDirectActionEntriesFreed = this._totalDirectActionEntriesFreed;
    }
    if (this._totalDomainEntriesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDomainEntriesCreated = this._totalDomainEntriesCreated;
    }
    if (this._totalDomainEntriesFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDomainEntriesFreed = this._totalDomainEntriesFreed;
    }
    if (this._totalV4EntriesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV4EntriesCreated = this._totalV4EntriesCreated;
    }
    if (this._totalV4EntriesFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV4EntriesFreed = this._totalV4EntriesFreed;
    }
    if (this._totalV6EntriesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV6EntriesCreated = this._totalV6EntriesCreated;
    }
    if (this._totalV6EntriesFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV6EntriesFreed = this._totalV6EntriesFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPbslbStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currEntries = undefined;
      this._currEntriesStats = undefined;
      this._currEntriesTargetGlobal = undefined;
      this._currEntriesTargetLoc = undefined;
      this._currEntriesTargetRport = undefined;
      this._currEntriesTargetRserver = undefined;
      this._currEntriesTargetService = undefined;
      this._currEntriesTargetVport = undefined;
      this._currEntriesTargetVserver = undefined;
      this._totalDirectActionEntriesCreated = undefined;
      this._totalDirectActionEntriesFreed = undefined;
      this._totalDomainEntriesCreated = undefined;
      this._totalDomainEntriesFreed = undefined;
      this._totalV4EntriesCreated = undefined;
      this._totalV4EntriesFreed = undefined;
      this._totalV6EntriesCreated = undefined;
      this._totalV6EntriesFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currEntries = value.currEntries;
      this._currEntriesStats = value.currEntriesStats;
      this._currEntriesTargetGlobal = value.currEntriesTargetGlobal;
      this._currEntriesTargetLoc = value.currEntriesTargetLoc;
      this._currEntriesTargetRport = value.currEntriesTargetRport;
      this._currEntriesTargetRserver = value.currEntriesTargetRserver;
      this._currEntriesTargetService = value.currEntriesTargetService;
      this._currEntriesTargetVport = value.currEntriesTargetVport;
      this._currEntriesTargetVserver = value.currEntriesTargetVserver;
      this._totalDirectActionEntriesCreated = value.totalDirectActionEntriesCreated;
      this._totalDirectActionEntriesFreed = value.totalDirectActionEntriesFreed;
      this._totalDomainEntriesCreated = value.totalDomainEntriesCreated;
      this._totalDomainEntriesFreed = value.totalDomainEntriesFreed;
      this._totalV4EntriesCreated = value.totalV4EntriesCreated;
      this._totalV4EntriesFreed = value.totalV4EntriesFreed;
      this._totalV6EntriesCreated = value.totalV6EntriesCreated;
      this._totalV6EntriesFreed = value.totalV6EntriesFreed;
    }
  }

  // curr_entries - computed: false, optional: true, required: false
  private _currEntries?: number; 
  public get currEntries() {
    return this.getNumberAttribute('curr_entries');
  }
  public set currEntries(value: number) {
    this._currEntries = value;
  }
  public resetCurrEntries() {
    this._currEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesInput() {
    return this._currEntries;
  }

  // curr_entries_stats - computed: false, optional: true, required: false
  private _currEntriesStats?: number; 
  public get currEntriesStats() {
    return this.getNumberAttribute('curr_entries_stats');
  }
  public set currEntriesStats(value: number) {
    this._currEntriesStats = value;
  }
  public resetCurrEntriesStats() {
    this._currEntriesStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesStatsInput() {
    return this._currEntriesStats;
  }

  // curr_entries_target_global - computed: false, optional: true, required: false
  private _currEntriesTargetGlobal?: number; 
  public get currEntriesTargetGlobal() {
    return this.getNumberAttribute('curr_entries_target_global');
  }
  public set currEntriesTargetGlobal(value: number) {
    this._currEntriesTargetGlobal = value;
  }
  public resetCurrEntriesTargetGlobal() {
    this._currEntriesTargetGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetGlobalInput() {
    return this._currEntriesTargetGlobal;
  }

  // curr_entries_target_loc - computed: false, optional: true, required: false
  private _currEntriesTargetLoc?: number; 
  public get currEntriesTargetLoc() {
    return this.getNumberAttribute('curr_entries_target_loc');
  }
  public set currEntriesTargetLoc(value: number) {
    this._currEntriesTargetLoc = value;
  }
  public resetCurrEntriesTargetLoc() {
    this._currEntriesTargetLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetLocInput() {
    return this._currEntriesTargetLoc;
  }

  // curr_entries_target_rport - computed: false, optional: true, required: false
  private _currEntriesTargetRport?: number; 
  public get currEntriesTargetRport() {
    return this.getNumberAttribute('curr_entries_target_rport');
  }
  public set currEntriesTargetRport(value: number) {
    this._currEntriesTargetRport = value;
  }
  public resetCurrEntriesTargetRport() {
    this._currEntriesTargetRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetRportInput() {
    return this._currEntriesTargetRport;
  }

  // curr_entries_target_rserver - computed: false, optional: true, required: false
  private _currEntriesTargetRserver?: number; 
  public get currEntriesTargetRserver() {
    return this.getNumberAttribute('curr_entries_target_rserver');
  }
  public set currEntriesTargetRserver(value: number) {
    this._currEntriesTargetRserver = value;
  }
  public resetCurrEntriesTargetRserver() {
    this._currEntriesTargetRserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetRserverInput() {
    return this._currEntriesTargetRserver;
  }

  // curr_entries_target_service - computed: false, optional: true, required: false
  private _currEntriesTargetService?: number; 
  public get currEntriesTargetService() {
    return this.getNumberAttribute('curr_entries_target_service');
  }
  public set currEntriesTargetService(value: number) {
    this._currEntriesTargetService = value;
  }
  public resetCurrEntriesTargetService() {
    this._currEntriesTargetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetServiceInput() {
    return this._currEntriesTargetService;
  }

  // curr_entries_target_vport - computed: false, optional: true, required: false
  private _currEntriesTargetVport?: number; 
  public get currEntriesTargetVport() {
    return this.getNumberAttribute('curr_entries_target_vport');
  }
  public set currEntriesTargetVport(value: number) {
    this._currEntriesTargetVport = value;
  }
  public resetCurrEntriesTargetVport() {
    this._currEntriesTargetVport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetVportInput() {
    return this._currEntriesTargetVport;
  }

  // curr_entries_target_vserver - computed: false, optional: true, required: false
  private _currEntriesTargetVserver?: number; 
  public get currEntriesTargetVserver() {
    return this.getNumberAttribute('curr_entries_target_vserver');
  }
  public set currEntriesTargetVserver(value: number) {
    this._currEntriesTargetVserver = value;
  }
  public resetCurrEntriesTargetVserver() {
    this._currEntriesTargetVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesTargetVserverInput() {
    return this._currEntriesTargetVserver;
  }

  // total_direct_action_entries_created - computed: false, optional: true, required: false
  private _totalDirectActionEntriesCreated?: number; 
  public get totalDirectActionEntriesCreated() {
    return this.getNumberAttribute('total_direct_action_entries_created');
  }
  public set totalDirectActionEntriesCreated(value: number) {
    this._totalDirectActionEntriesCreated = value;
  }
  public resetTotalDirectActionEntriesCreated() {
    this._totalDirectActionEntriesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDirectActionEntriesCreatedInput() {
    return this._totalDirectActionEntriesCreated;
  }

  // total_direct_action_entries_freed - computed: false, optional: true, required: false
  private _totalDirectActionEntriesFreed?: number; 
  public get totalDirectActionEntriesFreed() {
    return this.getNumberAttribute('total_direct_action_entries_freed');
  }
  public set totalDirectActionEntriesFreed(value: number) {
    this._totalDirectActionEntriesFreed = value;
  }
  public resetTotalDirectActionEntriesFreed() {
    this._totalDirectActionEntriesFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDirectActionEntriesFreedInput() {
    return this._totalDirectActionEntriesFreed;
  }

  // total_domain_entries_created - computed: false, optional: true, required: false
  private _totalDomainEntriesCreated?: number; 
  public get totalDomainEntriesCreated() {
    return this.getNumberAttribute('total_domain_entries_created');
  }
  public set totalDomainEntriesCreated(value: number) {
    this._totalDomainEntriesCreated = value;
  }
  public resetTotalDomainEntriesCreated() {
    this._totalDomainEntriesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDomainEntriesCreatedInput() {
    return this._totalDomainEntriesCreated;
  }

  // total_domain_entries_freed - computed: false, optional: true, required: false
  private _totalDomainEntriesFreed?: number; 
  public get totalDomainEntriesFreed() {
    return this.getNumberAttribute('total_domain_entries_freed');
  }
  public set totalDomainEntriesFreed(value: number) {
    this._totalDomainEntriesFreed = value;
  }
  public resetTotalDomainEntriesFreed() {
    this._totalDomainEntriesFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDomainEntriesFreedInput() {
    return this._totalDomainEntriesFreed;
  }

  // total_v4_entries_created - computed: false, optional: true, required: false
  private _totalV4EntriesCreated?: number; 
  public get totalV4EntriesCreated() {
    return this.getNumberAttribute('total_v4_entries_created');
  }
  public set totalV4EntriesCreated(value: number) {
    this._totalV4EntriesCreated = value;
  }
  public resetTotalV4EntriesCreated() {
    this._totalV4EntriesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV4EntriesCreatedInput() {
    return this._totalV4EntriesCreated;
  }

  // total_v4_entries_freed - computed: false, optional: true, required: false
  private _totalV4EntriesFreed?: number; 
  public get totalV4EntriesFreed() {
    return this.getNumberAttribute('total_v4_entries_freed');
  }
  public set totalV4EntriesFreed(value: number) {
    this._totalV4EntriesFreed = value;
  }
  public resetTotalV4EntriesFreed() {
    this._totalV4EntriesFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV4EntriesFreedInput() {
    return this._totalV4EntriesFreed;
  }

  // total_v6_entries_created - computed: false, optional: true, required: false
  private _totalV6EntriesCreated?: number; 
  public get totalV6EntriesCreated() {
    return this.getNumberAttribute('total_v6_entries_created');
  }
  public set totalV6EntriesCreated(value: number) {
    this._totalV6EntriesCreated = value;
  }
  public resetTotalV6EntriesCreated() {
    this._totalV6EntriesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV6EntriesCreatedInput() {
    return this._totalV6EntriesCreated;
  }

  // total_v6_entries_freed - computed: false, optional: true, required: false
  private _totalV6EntriesFreed?: number; 
  public get totalV6EntriesFreed() {
    return this.getNumberAttribute('total_v6_entries_freed');
  }
  public set totalV6EntriesFreed(value: number) {
    this._totalV6EntriesFreed = value;
  }
  public resetTotalV6EntriesFreed() {
    this._totalV6EntriesFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV6EntriesFreedInput() {
    return this._totalV6EntriesFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats thunder_system_pbslb_stats}
*/
export class DataThunderSystemPbslbStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_pbslb_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPbslbStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPbslbStats to import
  * @param importFromId The id of the existing DataThunderSystemPbslbStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPbslbStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_pbslb_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_pbslb_stats thunder_system_pbslb_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPbslbStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPbslbStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_pbslb_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderSystemPbslbStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemPbslbStatsStats) {
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
      stats: dataThunderSystemPbslbStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemPbslbStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPbslbStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
