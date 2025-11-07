// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DdosProtectionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#id DataThunderCgnv6DdosProtectionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#stats DataThunderCgnv6DdosProtectionStats#stats}
  */
  readonly stats?: DataThunderCgnv6DdosProtectionStatsStats;
}
export interface DataThunderCgnv6DdosProtectionStatsStats {
  /**
  * Entry added shadow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#entry_added_shadow DataThunderCgnv6DdosProtectionStats#entry_added_shadow}
  */
  readonly entryAddedShadow?: number;
  /**
  * Entry invalidated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#entry_invalidated DataThunderCgnv6DdosProtectionStats#entry_invalidated}
  */
  readonly entryInvalidated?: number;
  /**
  * Node alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_node_alloc DataThunderCgnv6DdosProtectionStats#ip_node_alloc}
  */
  readonly ipNodeAlloc?: number;
  /**
  * Node alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_node_alloc_failure DataThunderCgnv6DdosProtectionStats#ip_node_alloc_failure}
  */
  readonly ipNodeAllocFailure?: number;
  /**
  * Node free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_node_free DataThunderCgnv6DdosProtectionStats#ip_node_free}
  */
  readonly ipNodeFree?: number;
  /**
  * Other block alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_other_block_alloc DataThunderCgnv6DdosProtectionStats#ip_other_block_alloc}
  */
  readonly ipOtherBlockAlloc?: number;
  /**
  * Other block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_other_block_alloc_failure DataThunderCgnv6DdosProtectionStats#ip_other_block_alloc_failure}
  */
  readonly ipOtherBlockAllocFailure?: number;
  /**
  * Other block free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_other_block_free DataThunderCgnv6DdosProtectionStats#ip_other_block_free}
  */
  readonly ipOtherBlockFree?: number;
  /**
  * Port block alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_port_block_alloc DataThunderCgnv6DdosProtectionStats#ip_port_block_alloc}
  */
  readonly ipPortBlockAlloc?: number;
  /**
  * Port block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_port_block_alloc_failure DataThunderCgnv6DdosProtectionStats#ip_port_block_alloc_failure}
  */
  readonly ipPortBlockAllocFailure?: number;
  /**
  * Port block free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#ip_port_block_free DataThunderCgnv6DdosProtectionStats#ip_port_block_free}
  */
  readonly ipPortBlockFree?: number;
  /**
  * L3 Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_add_to_bgp_failure DataThunderCgnv6DdosProtectionStats#l3_entry_add_to_bgp_failure}
  */
  readonly l3EntryAddToBgpFailure?: number;
  /**
  * L3 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_add_to_hw_failure DataThunderCgnv6DdosProtectionStats#l3_entry_add_to_hw_failure}
  */
  readonly l3EntryAddToHwFailure?: number;
  /**
  * L3 Entry Added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_added DataThunderCgnv6DdosProtectionStats#l3_entry_added}
  */
  readonly l3EntryAdded?: number;
  /**
  * L3 Entry added to BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_added_to_bgp DataThunderCgnv6DdosProtectionStats#l3_entry_added_to_bgp}
  */
  readonly l3EntryAddedToBgp?: number;
  /**
  * L3 Entry added to HW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_added_to_hw DataThunderCgnv6DdosProtectionStats#l3_entry_added_to_hw}
  */
  readonly l3EntryAddedToHw?: number;
  /**
  * L3 Entry Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_deleted DataThunderCgnv6DdosProtectionStats#l3_entry_deleted}
  */
  readonly l3EntryDeleted?: number;
  /**
  * L3 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_drop_max_hw_exceeded DataThunderCgnv6DdosProtectionStats#l3_entry_drop_max_hw_exceeded}
  */
  readonly l3EntryDropMaxHwExceeded?: number;
  /**
  * L3 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_match_drop DataThunderCgnv6DdosProtectionStats#l3_entry_match_drop}
  */
  readonly l3EntryMatchDrop?: number;
  /**
  * L3 HW entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_match_drop_hw DataThunderCgnv6DdosProtectionStats#l3_entry_match_drop_hw}
  */
  readonly l3EntryMatchDropHw?: number;
  /**
  * L3 entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_remove_from_bgp_failure DataThunderCgnv6DdosProtectionStats#l3_entry_remove_from_bgp_failure}
  */
  readonly l3EntryRemoveFromBgpFailure?: number;
  /**
  * Entry removed from BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_removed_from_bgp DataThunderCgnv6DdosProtectionStats#l3_entry_removed_from_bgp}
  */
  readonly l3EntryRemovedFromBgp?: number;
  /**
  * L3 Entry removed from HW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_removed_from_hw DataThunderCgnv6DdosProtectionStats#l3_entry_removed_from_hw}
  */
  readonly l3EntryRemovedFromHw?: number;
  /**
  * L3 Too many entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l3_entry_too_many DataThunderCgnv6DdosProtectionStats#l3_entry_too_many}
  */
  readonly l3EntryTooMany?: number;
  /**
  * L4 Entry added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_added DataThunderCgnv6DdosProtectionStats#l4_entry_added}
  */
  readonly l4EntryAdded?: number;
  /**
  * L4 Entry added to HW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_added_to_hw DataThunderCgnv6DdosProtectionStats#l4_entry_added_to_hw}
  */
  readonly l4EntryAddedToHw?: number;
  /**
  * L4 Entry deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_deleted DataThunderCgnv6DdosProtectionStats#l4_entry_deleted}
  */
  readonly l4EntryDeleted?: number;
  /**
  * L4 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_drop_max_hw_exceeded DataThunderCgnv6DdosProtectionStats#l4_entry_drop_max_hw_exceeded}
  */
  readonly l4EntryDropMaxHwExceeded?: number;
  /**
  * L4 Entry list alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_list_alloc DataThunderCgnv6DdosProtectionStats#l4_entry_list_alloc}
  */
  readonly l4EntryListAlloc?: number;
  /**
  * L4 Entry list alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_list_alloc_failure DataThunderCgnv6DdosProtectionStats#l4_entry_list_alloc_failure}
  */
  readonly l4EntryListAllocFailure?: number;
  /**
  * L4 Entry list free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_list_free DataThunderCgnv6DdosProtectionStats#l4_entry_list_free}
  */
  readonly l4EntryListFree?: number;
  /**
  * L4 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_match_drop DataThunderCgnv6DdosProtectionStats#l4_entry_match_drop}
  */
  readonly l4EntryMatchDrop?: number;
  /**
  * L4 HW Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_match_drop_hw DataThunderCgnv6DdosProtectionStats#l4_entry_match_drop_hw}
  */
  readonly l4EntryMatchDropHw?: number;
  /**
  * L4 Entry removed from HW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_entry_removed_from_hw DataThunderCgnv6DdosProtectionStats#l4_entry_removed_from_hw}
  */
  readonly l4EntryRemovedFromHw?: number;
  /**
  * HW out of L4 entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#l4_hw_out_of_entries DataThunderCgnv6DdosProtectionStats#l4_hw_out_of_entries}
  */
  readonly l4HwOutOfEntries?: number;
  /**
  * SYN cookie SYN ACK sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#syn_cookie_syn_ack_sent DataThunderCgnv6DdosProtectionStats#syn_cookie_syn_ack_sent}
  */
  readonly synCookieSynAckSent?: number;
  /**
  * SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#syn_cookie_verification_failed DataThunderCgnv6DdosProtectionStats#syn_cookie_verification_failed}
  */
  readonly synCookieVerificationFailed?: number;
  /**
  * SYN cookie verification passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#syn_cookie_verification_passed DataThunderCgnv6DdosProtectionStats#syn_cookie_verification_passed}
  */
  readonly synCookieVerificationPassed?: number;
}

export function dataThunderCgnv6DdosProtectionStatsStatsToTerraform(struct?: DataThunderCgnv6DdosProtectionStatsStatsOutputReference | DataThunderCgnv6DdosProtectionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_added_shadow: cdktf.numberToTerraform(struct!.entryAddedShadow),
    entry_invalidated: cdktf.numberToTerraform(struct!.entryInvalidated),
    ip_node_alloc: cdktf.numberToTerraform(struct!.ipNodeAlloc),
    ip_node_alloc_failure: cdktf.numberToTerraform(struct!.ipNodeAllocFailure),
    ip_node_free: cdktf.numberToTerraform(struct!.ipNodeFree),
    ip_other_block_alloc: cdktf.numberToTerraform(struct!.ipOtherBlockAlloc),
    ip_other_block_alloc_failure: cdktf.numberToTerraform(struct!.ipOtherBlockAllocFailure),
    ip_other_block_free: cdktf.numberToTerraform(struct!.ipOtherBlockFree),
    ip_port_block_alloc: cdktf.numberToTerraform(struct!.ipPortBlockAlloc),
    ip_port_block_alloc_failure: cdktf.numberToTerraform(struct!.ipPortBlockAllocFailure),
    ip_port_block_free: cdktf.numberToTerraform(struct!.ipPortBlockFree),
    l3_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryAddToBgpFailure),
    l3_entry_add_to_hw_failure: cdktf.numberToTerraform(struct!.l3EntryAddToHwFailure),
    l3_entry_added: cdktf.numberToTerraform(struct!.l3EntryAdded),
    l3_entry_added_to_bgp: cdktf.numberToTerraform(struct!.l3EntryAddedToBgp),
    l3_entry_added_to_hw: cdktf.numberToTerraform(struct!.l3EntryAddedToHw),
    l3_entry_deleted: cdktf.numberToTerraform(struct!.l3EntryDeleted),
    l3_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l3EntryDropMaxHwExceeded),
    l3_entry_match_drop: cdktf.numberToTerraform(struct!.l3EntryMatchDrop),
    l3_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l3EntryMatchDropHw),
    l3_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryRemoveFromBgpFailure),
    l3_entry_removed_from_bgp: cdktf.numberToTerraform(struct!.l3EntryRemovedFromBgp),
    l3_entry_removed_from_hw: cdktf.numberToTerraform(struct!.l3EntryRemovedFromHw),
    l3_entry_too_many: cdktf.numberToTerraform(struct!.l3EntryTooMany),
    l4_entry_added: cdktf.numberToTerraform(struct!.l4EntryAdded),
    l4_entry_added_to_hw: cdktf.numberToTerraform(struct!.l4EntryAddedToHw),
    l4_entry_deleted: cdktf.numberToTerraform(struct!.l4EntryDeleted),
    l4_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l4EntryDropMaxHwExceeded),
    l4_entry_list_alloc: cdktf.numberToTerraform(struct!.l4EntryListAlloc),
    l4_entry_list_alloc_failure: cdktf.numberToTerraform(struct!.l4EntryListAllocFailure),
    l4_entry_list_free: cdktf.numberToTerraform(struct!.l4EntryListFree),
    l4_entry_match_drop: cdktf.numberToTerraform(struct!.l4EntryMatchDrop),
    l4_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l4EntryMatchDropHw),
    l4_entry_removed_from_hw: cdktf.numberToTerraform(struct!.l4EntryRemovedFromHw),
    l4_hw_out_of_entries: cdktf.numberToTerraform(struct!.l4HwOutOfEntries),
    syn_cookie_syn_ack_sent: cdktf.numberToTerraform(struct!.synCookieSynAckSent),
    syn_cookie_verification_failed: cdktf.numberToTerraform(struct!.synCookieVerificationFailed),
    syn_cookie_verification_passed: cdktf.numberToTerraform(struct!.synCookieVerificationPassed),
  }
}


export function dataThunderCgnv6DdosProtectionStatsStatsToHclTerraform(struct?: DataThunderCgnv6DdosProtectionStatsStatsOutputReference | DataThunderCgnv6DdosProtectionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_added_shadow: {
      value: cdktf.numberToHclTerraform(struct!.entryAddedShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_invalidated: {
      value: cdktf.numberToHclTerraform(struct!.entryInvalidated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_node_alloc: {
      value: cdktf.numberToHclTerraform(struct!.ipNodeAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_node_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipNodeAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_node_free: {
      value: cdktf.numberToHclTerraform(struct!.ipNodeFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_other_block_alloc: {
      value: cdktf.numberToHclTerraform(struct!.ipOtherBlockAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_other_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipOtherBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_other_block_free: {
      value: cdktf.numberToHclTerraform(struct!.ipOtherBlockFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_port_block_alloc: {
      value: cdktf.numberToHclTerraform(struct!.ipPortBlockAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_port_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipPortBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_port_block_free: {
      value: cdktf.numberToHclTerraform(struct!.ipPortBlockFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_added: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_added_to_bgp: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddedToBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_added_to_hw: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddedToHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_deleted: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_removed_from_bgp: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryRemovedFromBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_removed_from_hw: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryRemovedFromHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_too_many: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_added: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_added_to_hw: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryAddedToHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_deleted: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_list_alloc: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryListAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_list_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryListAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_list_free: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryListFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_removed_from_hw: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryRemovedFromHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_hw_out_of_entries: {
      value: cdktf.numberToHclTerraform(struct!.l4HwOutOfEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_syn_ack_sent: {
      value: cdktf.numberToHclTerraform(struct!.synCookieSynAckSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_verification_failed: {
      value: cdktf.numberToHclTerraform(struct!.synCookieVerificationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_verification_passed: {
      value: cdktf.numberToHclTerraform(struct!.synCookieVerificationPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DdosProtectionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DdosProtectionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryAddedShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAddedShadow = this._entryAddedShadow;
    }
    if (this._entryInvalidated !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryInvalidated = this._entryInvalidated;
    }
    if (this._ipNodeAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNodeAlloc = this._ipNodeAlloc;
    }
    if (this._ipNodeAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNodeAllocFailure = this._ipNodeAllocFailure;
    }
    if (this._ipNodeFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNodeFree = this._ipNodeFree;
    }
    if (this._ipOtherBlockAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOtherBlockAlloc = this._ipOtherBlockAlloc;
    }
    if (this._ipOtherBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOtherBlockAllocFailure = this._ipOtherBlockAllocFailure;
    }
    if (this._ipOtherBlockFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOtherBlockFree = this._ipOtherBlockFree;
    }
    if (this._ipPortBlockAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortBlockAlloc = this._ipPortBlockAlloc;
    }
    if (this._ipPortBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortBlockAllocFailure = this._ipPortBlockAllocFailure;
    }
    if (this._ipPortBlockFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortBlockFree = this._ipPortBlockFree;
    }
    if (this._l3EntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToBgpFailure = this._l3EntryAddToBgpFailure;
    }
    if (this._l3EntryAddToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToHwFailure = this._l3EntryAddToHwFailure;
    }
    if (this._l3EntryAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAdded = this._l3EntryAdded;
    }
    if (this._l3EntryAddedToBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddedToBgp = this._l3EntryAddedToBgp;
    }
    if (this._l3EntryAddedToHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddedToHw = this._l3EntryAddedToHw;
    }
    if (this._l3EntryDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDeleted = this._l3EntryDeleted;
    }
    if (this._l3EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDropMaxHwExceeded = this._l3EntryDropMaxHwExceeded;
    }
    if (this._l3EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDrop = this._l3EntryMatchDrop;
    }
    if (this._l3EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDropHw = this._l3EntryMatchDropHw;
    }
    if (this._l3EntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryRemoveFromBgpFailure = this._l3EntryRemoveFromBgpFailure;
    }
    if (this._l3EntryRemovedFromBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryRemovedFromBgp = this._l3EntryRemovedFromBgp;
    }
    if (this._l3EntryRemovedFromHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryRemovedFromHw = this._l3EntryRemovedFromHw;
    }
    if (this._l3EntryTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryTooMany = this._l3EntryTooMany;
    }
    if (this._l4EntryAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryAdded = this._l4EntryAdded;
    }
    if (this._l4EntryAddedToHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryAddedToHw = this._l4EntryAddedToHw;
    }
    if (this._l4EntryDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDeleted = this._l4EntryDeleted;
    }
    if (this._l4EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDropMaxHwExceeded = this._l4EntryDropMaxHwExceeded;
    }
    if (this._l4EntryListAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryListAlloc = this._l4EntryListAlloc;
    }
    if (this._l4EntryListAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryListAllocFailure = this._l4EntryListAllocFailure;
    }
    if (this._l4EntryListFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryListFree = this._l4EntryListFree;
    }
    if (this._l4EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDrop = this._l4EntryMatchDrop;
    }
    if (this._l4EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDropHw = this._l4EntryMatchDropHw;
    }
    if (this._l4EntryRemovedFromHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryRemovedFromHw = this._l4EntryRemovedFromHw;
    }
    if (this._l4HwOutOfEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4HwOutOfEntries = this._l4HwOutOfEntries;
    }
    if (this._synCookieSynAckSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieSynAckSent = this._synCookieSynAckSent;
    }
    if (this._synCookieVerificationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieVerificationFailed = this._synCookieVerificationFailed;
    }
    if (this._synCookieVerificationPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieVerificationPassed = this._synCookieVerificationPassed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryAddedShadow = undefined;
      this._entryInvalidated = undefined;
      this._ipNodeAlloc = undefined;
      this._ipNodeAllocFailure = undefined;
      this._ipNodeFree = undefined;
      this._ipOtherBlockAlloc = undefined;
      this._ipOtherBlockAllocFailure = undefined;
      this._ipOtherBlockFree = undefined;
      this._ipPortBlockAlloc = undefined;
      this._ipPortBlockAllocFailure = undefined;
      this._ipPortBlockFree = undefined;
      this._l3EntryAddToBgpFailure = undefined;
      this._l3EntryAddToHwFailure = undefined;
      this._l3EntryAdded = undefined;
      this._l3EntryAddedToBgp = undefined;
      this._l3EntryAddedToHw = undefined;
      this._l3EntryDeleted = undefined;
      this._l3EntryDropMaxHwExceeded = undefined;
      this._l3EntryMatchDrop = undefined;
      this._l3EntryMatchDropHw = undefined;
      this._l3EntryRemoveFromBgpFailure = undefined;
      this._l3EntryRemovedFromBgp = undefined;
      this._l3EntryRemovedFromHw = undefined;
      this._l3EntryTooMany = undefined;
      this._l4EntryAdded = undefined;
      this._l4EntryAddedToHw = undefined;
      this._l4EntryDeleted = undefined;
      this._l4EntryDropMaxHwExceeded = undefined;
      this._l4EntryListAlloc = undefined;
      this._l4EntryListAllocFailure = undefined;
      this._l4EntryListFree = undefined;
      this._l4EntryMatchDrop = undefined;
      this._l4EntryMatchDropHw = undefined;
      this._l4EntryRemovedFromHw = undefined;
      this._l4HwOutOfEntries = undefined;
      this._synCookieSynAckSent = undefined;
      this._synCookieVerificationFailed = undefined;
      this._synCookieVerificationPassed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryAddedShadow = value.entryAddedShadow;
      this._entryInvalidated = value.entryInvalidated;
      this._ipNodeAlloc = value.ipNodeAlloc;
      this._ipNodeAllocFailure = value.ipNodeAllocFailure;
      this._ipNodeFree = value.ipNodeFree;
      this._ipOtherBlockAlloc = value.ipOtherBlockAlloc;
      this._ipOtherBlockAllocFailure = value.ipOtherBlockAllocFailure;
      this._ipOtherBlockFree = value.ipOtherBlockFree;
      this._ipPortBlockAlloc = value.ipPortBlockAlloc;
      this._ipPortBlockAllocFailure = value.ipPortBlockAllocFailure;
      this._ipPortBlockFree = value.ipPortBlockFree;
      this._l3EntryAddToBgpFailure = value.l3EntryAddToBgpFailure;
      this._l3EntryAddToHwFailure = value.l3EntryAddToHwFailure;
      this._l3EntryAdded = value.l3EntryAdded;
      this._l3EntryAddedToBgp = value.l3EntryAddedToBgp;
      this._l3EntryAddedToHw = value.l3EntryAddedToHw;
      this._l3EntryDeleted = value.l3EntryDeleted;
      this._l3EntryDropMaxHwExceeded = value.l3EntryDropMaxHwExceeded;
      this._l3EntryMatchDrop = value.l3EntryMatchDrop;
      this._l3EntryMatchDropHw = value.l3EntryMatchDropHw;
      this._l3EntryRemoveFromBgpFailure = value.l3EntryRemoveFromBgpFailure;
      this._l3EntryRemovedFromBgp = value.l3EntryRemovedFromBgp;
      this._l3EntryRemovedFromHw = value.l3EntryRemovedFromHw;
      this._l3EntryTooMany = value.l3EntryTooMany;
      this._l4EntryAdded = value.l4EntryAdded;
      this._l4EntryAddedToHw = value.l4EntryAddedToHw;
      this._l4EntryDeleted = value.l4EntryDeleted;
      this._l4EntryDropMaxHwExceeded = value.l4EntryDropMaxHwExceeded;
      this._l4EntryListAlloc = value.l4EntryListAlloc;
      this._l4EntryListAllocFailure = value.l4EntryListAllocFailure;
      this._l4EntryListFree = value.l4EntryListFree;
      this._l4EntryMatchDrop = value.l4EntryMatchDrop;
      this._l4EntryMatchDropHw = value.l4EntryMatchDropHw;
      this._l4EntryRemovedFromHw = value.l4EntryRemovedFromHw;
      this._l4HwOutOfEntries = value.l4HwOutOfEntries;
      this._synCookieSynAckSent = value.synCookieSynAckSent;
      this._synCookieVerificationFailed = value.synCookieVerificationFailed;
      this._synCookieVerificationPassed = value.synCookieVerificationPassed;
    }
  }

  // entry_added_shadow - computed: false, optional: true, required: false
  private _entryAddedShadow?: number; 
  public get entryAddedShadow() {
    return this.getNumberAttribute('entry_added_shadow');
  }
  public set entryAddedShadow(value: number) {
    this._entryAddedShadow = value;
  }
  public resetEntryAddedShadow() {
    this._entryAddedShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAddedShadowInput() {
    return this._entryAddedShadow;
  }

  // entry_invalidated - computed: false, optional: true, required: false
  private _entryInvalidated?: number; 
  public get entryInvalidated() {
    return this.getNumberAttribute('entry_invalidated');
  }
  public set entryInvalidated(value: number) {
    this._entryInvalidated = value;
  }
  public resetEntryInvalidated() {
    this._entryInvalidated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInvalidatedInput() {
    return this._entryInvalidated;
  }

  // ip_node_alloc - computed: false, optional: true, required: false
  private _ipNodeAlloc?: number; 
  public get ipNodeAlloc() {
    return this.getNumberAttribute('ip_node_alloc');
  }
  public set ipNodeAlloc(value: number) {
    this._ipNodeAlloc = value;
  }
  public resetIpNodeAlloc() {
    this._ipNodeAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNodeAllocInput() {
    return this._ipNodeAlloc;
  }

  // ip_node_alloc_failure - computed: false, optional: true, required: false
  private _ipNodeAllocFailure?: number; 
  public get ipNodeAllocFailure() {
    return this.getNumberAttribute('ip_node_alloc_failure');
  }
  public set ipNodeAllocFailure(value: number) {
    this._ipNodeAllocFailure = value;
  }
  public resetIpNodeAllocFailure() {
    this._ipNodeAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNodeAllocFailureInput() {
    return this._ipNodeAllocFailure;
  }

  // ip_node_free - computed: false, optional: true, required: false
  private _ipNodeFree?: number; 
  public get ipNodeFree() {
    return this.getNumberAttribute('ip_node_free');
  }
  public set ipNodeFree(value: number) {
    this._ipNodeFree = value;
  }
  public resetIpNodeFree() {
    this._ipNodeFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNodeFreeInput() {
    return this._ipNodeFree;
  }

  // ip_other_block_alloc - computed: false, optional: true, required: false
  private _ipOtherBlockAlloc?: number; 
  public get ipOtherBlockAlloc() {
    return this.getNumberAttribute('ip_other_block_alloc');
  }
  public set ipOtherBlockAlloc(value: number) {
    this._ipOtherBlockAlloc = value;
  }
  public resetIpOtherBlockAlloc() {
    this._ipOtherBlockAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOtherBlockAllocInput() {
    return this._ipOtherBlockAlloc;
  }

  // ip_other_block_alloc_failure - computed: false, optional: true, required: false
  private _ipOtherBlockAllocFailure?: number; 
  public get ipOtherBlockAllocFailure() {
    return this.getNumberAttribute('ip_other_block_alloc_failure');
  }
  public set ipOtherBlockAllocFailure(value: number) {
    this._ipOtherBlockAllocFailure = value;
  }
  public resetIpOtherBlockAllocFailure() {
    this._ipOtherBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOtherBlockAllocFailureInput() {
    return this._ipOtherBlockAllocFailure;
  }

  // ip_other_block_free - computed: false, optional: true, required: false
  private _ipOtherBlockFree?: number; 
  public get ipOtherBlockFree() {
    return this.getNumberAttribute('ip_other_block_free');
  }
  public set ipOtherBlockFree(value: number) {
    this._ipOtherBlockFree = value;
  }
  public resetIpOtherBlockFree() {
    this._ipOtherBlockFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOtherBlockFreeInput() {
    return this._ipOtherBlockFree;
  }

  // ip_port_block_alloc - computed: false, optional: true, required: false
  private _ipPortBlockAlloc?: number; 
  public get ipPortBlockAlloc() {
    return this.getNumberAttribute('ip_port_block_alloc');
  }
  public set ipPortBlockAlloc(value: number) {
    this._ipPortBlockAlloc = value;
  }
  public resetIpPortBlockAlloc() {
    this._ipPortBlockAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortBlockAllocInput() {
    return this._ipPortBlockAlloc;
  }

  // ip_port_block_alloc_failure - computed: false, optional: true, required: false
  private _ipPortBlockAllocFailure?: number; 
  public get ipPortBlockAllocFailure() {
    return this.getNumberAttribute('ip_port_block_alloc_failure');
  }
  public set ipPortBlockAllocFailure(value: number) {
    this._ipPortBlockAllocFailure = value;
  }
  public resetIpPortBlockAllocFailure() {
    this._ipPortBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortBlockAllocFailureInput() {
    return this._ipPortBlockAllocFailure;
  }

  // ip_port_block_free - computed: false, optional: true, required: false
  private _ipPortBlockFree?: number; 
  public get ipPortBlockFree() {
    return this.getNumberAttribute('ip_port_block_free');
  }
  public set ipPortBlockFree(value: number) {
    this._ipPortBlockFree = value;
  }
  public resetIpPortBlockFree() {
    this._ipPortBlockFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortBlockFreeInput() {
    return this._ipPortBlockFree;
  }

  // l3_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryAddToBgpFailure?: number; 
  public get l3EntryAddToBgpFailure() {
    return this.getNumberAttribute('l3_entry_add_to_bgp_failure');
  }
  public set l3EntryAddToBgpFailure(value: number) {
    this._l3EntryAddToBgpFailure = value;
  }
  public resetL3EntryAddToBgpFailure() {
    this._l3EntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToBgpFailureInput() {
    return this._l3EntryAddToBgpFailure;
  }

  // l3_entry_add_to_hw_failure - computed: false, optional: true, required: false
  private _l3EntryAddToHwFailure?: number; 
  public get l3EntryAddToHwFailure() {
    return this.getNumberAttribute('l3_entry_add_to_hw_failure');
  }
  public set l3EntryAddToHwFailure(value: number) {
    this._l3EntryAddToHwFailure = value;
  }
  public resetL3EntryAddToHwFailure() {
    this._l3EntryAddToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToHwFailureInput() {
    return this._l3EntryAddToHwFailure;
  }

  // l3_entry_added - computed: false, optional: true, required: false
  private _l3EntryAdded?: number; 
  public get l3EntryAdded() {
    return this.getNumberAttribute('l3_entry_added');
  }
  public set l3EntryAdded(value: number) {
    this._l3EntryAdded = value;
  }
  public resetL3EntryAdded() {
    this._l3EntryAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddedInput() {
    return this._l3EntryAdded;
  }

  // l3_entry_added_to_bgp - computed: false, optional: true, required: false
  private _l3EntryAddedToBgp?: number; 
  public get l3EntryAddedToBgp() {
    return this.getNumberAttribute('l3_entry_added_to_bgp');
  }
  public set l3EntryAddedToBgp(value: number) {
    this._l3EntryAddedToBgp = value;
  }
  public resetL3EntryAddedToBgp() {
    this._l3EntryAddedToBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddedToBgpInput() {
    return this._l3EntryAddedToBgp;
  }

  // l3_entry_added_to_hw - computed: false, optional: true, required: false
  private _l3EntryAddedToHw?: number; 
  public get l3EntryAddedToHw() {
    return this.getNumberAttribute('l3_entry_added_to_hw');
  }
  public set l3EntryAddedToHw(value: number) {
    this._l3EntryAddedToHw = value;
  }
  public resetL3EntryAddedToHw() {
    this._l3EntryAddedToHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddedToHwInput() {
    return this._l3EntryAddedToHw;
  }

  // l3_entry_deleted - computed: false, optional: true, required: false
  private _l3EntryDeleted?: number; 
  public get l3EntryDeleted() {
    return this.getNumberAttribute('l3_entry_deleted');
  }
  public set l3EntryDeleted(value: number) {
    this._l3EntryDeleted = value;
  }
  public resetL3EntryDeleted() {
    this._l3EntryDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDeletedInput() {
    return this._l3EntryDeleted;
  }

  // l3_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l3EntryDropMaxHwExceeded?: number; 
  public get l3EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l3_entry_drop_max_hw_exceeded');
  }
  public set l3EntryDropMaxHwExceeded(value: number) {
    this._l3EntryDropMaxHwExceeded = value;
  }
  public resetL3EntryDropMaxHwExceeded() {
    this._l3EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDropMaxHwExceededInput() {
    return this._l3EntryDropMaxHwExceeded;
  }

  // l3_entry_match_drop - computed: false, optional: true, required: false
  private _l3EntryMatchDrop?: number; 
  public get l3EntryMatchDrop() {
    return this.getNumberAttribute('l3_entry_match_drop');
  }
  public set l3EntryMatchDrop(value: number) {
    this._l3EntryMatchDrop = value;
  }
  public resetL3EntryMatchDrop() {
    this._l3EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropInput() {
    return this._l3EntryMatchDrop;
  }

  // l3_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l3EntryMatchDropHw?: number; 
  public get l3EntryMatchDropHw() {
    return this.getNumberAttribute('l3_entry_match_drop_hw');
  }
  public set l3EntryMatchDropHw(value: number) {
    this._l3EntryMatchDropHw = value;
  }
  public resetL3EntryMatchDropHw() {
    this._l3EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropHwInput() {
    return this._l3EntryMatchDropHw;
  }

  // l3_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryRemoveFromBgpFailure?: number; 
  public get l3EntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('l3_entry_remove_from_bgp_failure');
  }
  public set l3EntryRemoveFromBgpFailure(value: number) {
    this._l3EntryRemoveFromBgpFailure = value;
  }
  public resetL3EntryRemoveFromBgpFailure() {
    this._l3EntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryRemoveFromBgpFailureInput() {
    return this._l3EntryRemoveFromBgpFailure;
  }

  // l3_entry_removed_from_bgp - computed: false, optional: true, required: false
  private _l3EntryRemovedFromBgp?: number; 
  public get l3EntryRemovedFromBgp() {
    return this.getNumberAttribute('l3_entry_removed_from_bgp');
  }
  public set l3EntryRemovedFromBgp(value: number) {
    this._l3EntryRemovedFromBgp = value;
  }
  public resetL3EntryRemovedFromBgp() {
    this._l3EntryRemovedFromBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryRemovedFromBgpInput() {
    return this._l3EntryRemovedFromBgp;
  }

  // l3_entry_removed_from_hw - computed: false, optional: true, required: false
  private _l3EntryRemovedFromHw?: number; 
  public get l3EntryRemovedFromHw() {
    return this.getNumberAttribute('l3_entry_removed_from_hw');
  }
  public set l3EntryRemovedFromHw(value: number) {
    this._l3EntryRemovedFromHw = value;
  }
  public resetL3EntryRemovedFromHw() {
    this._l3EntryRemovedFromHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryRemovedFromHwInput() {
    return this._l3EntryRemovedFromHw;
  }

  // l3_entry_too_many - computed: false, optional: true, required: false
  private _l3EntryTooMany?: number; 
  public get l3EntryTooMany() {
    return this.getNumberAttribute('l3_entry_too_many');
  }
  public set l3EntryTooMany(value: number) {
    this._l3EntryTooMany = value;
  }
  public resetL3EntryTooMany() {
    this._l3EntryTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryTooManyInput() {
    return this._l3EntryTooMany;
  }

  // l4_entry_added - computed: false, optional: true, required: false
  private _l4EntryAdded?: number; 
  public get l4EntryAdded() {
    return this.getNumberAttribute('l4_entry_added');
  }
  public set l4EntryAdded(value: number) {
    this._l4EntryAdded = value;
  }
  public resetL4EntryAdded() {
    this._l4EntryAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryAddedInput() {
    return this._l4EntryAdded;
  }

  // l4_entry_added_to_hw - computed: false, optional: true, required: false
  private _l4EntryAddedToHw?: number; 
  public get l4EntryAddedToHw() {
    return this.getNumberAttribute('l4_entry_added_to_hw');
  }
  public set l4EntryAddedToHw(value: number) {
    this._l4EntryAddedToHw = value;
  }
  public resetL4EntryAddedToHw() {
    this._l4EntryAddedToHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryAddedToHwInput() {
    return this._l4EntryAddedToHw;
  }

  // l4_entry_deleted - computed: false, optional: true, required: false
  private _l4EntryDeleted?: number; 
  public get l4EntryDeleted() {
    return this.getNumberAttribute('l4_entry_deleted');
  }
  public set l4EntryDeleted(value: number) {
    this._l4EntryDeleted = value;
  }
  public resetL4EntryDeleted() {
    this._l4EntryDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDeletedInput() {
    return this._l4EntryDeleted;
  }

  // l4_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l4EntryDropMaxHwExceeded?: number; 
  public get l4EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l4_entry_drop_max_hw_exceeded');
  }
  public set l4EntryDropMaxHwExceeded(value: number) {
    this._l4EntryDropMaxHwExceeded = value;
  }
  public resetL4EntryDropMaxHwExceeded() {
    this._l4EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDropMaxHwExceededInput() {
    return this._l4EntryDropMaxHwExceeded;
  }

  // l4_entry_list_alloc - computed: false, optional: true, required: false
  private _l4EntryListAlloc?: number; 
  public get l4EntryListAlloc() {
    return this.getNumberAttribute('l4_entry_list_alloc');
  }
  public set l4EntryListAlloc(value: number) {
    this._l4EntryListAlloc = value;
  }
  public resetL4EntryListAlloc() {
    this._l4EntryListAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryListAllocInput() {
    return this._l4EntryListAlloc;
  }

  // l4_entry_list_alloc_failure - computed: false, optional: true, required: false
  private _l4EntryListAllocFailure?: number; 
  public get l4EntryListAllocFailure() {
    return this.getNumberAttribute('l4_entry_list_alloc_failure');
  }
  public set l4EntryListAllocFailure(value: number) {
    this._l4EntryListAllocFailure = value;
  }
  public resetL4EntryListAllocFailure() {
    this._l4EntryListAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryListAllocFailureInput() {
    return this._l4EntryListAllocFailure;
  }

  // l4_entry_list_free - computed: false, optional: true, required: false
  private _l4EntryListFree?: number; 
  public get l4EntryListFree() {
    return this.getNumberAttribute('l4_entry_list_free');
  }
  public set l4EntryListFree(value: number) {
    this._l4EntryListFree = value;
  }
  public resetL4EntryListFree() {
    this._l4EntryListFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryListFreeInput() {
    return this._l4EntryListFree;
  }

  // l4_entry_match_drop - computed: false, optional: true, required: false
  private _l4EntryMatchDrop?: number; 
  public get l4EntryMatchDrop() {
    return this.getNumberAttribute('l4_entry_match_drop');
  }
  public set l4EntryMatchDrop(value: number) {
    this._l4EntryMatchDrop = value;
  }
  public resetL4EntryMatchDrop() {
    this._l4EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropInput() {
    return this._l4EntryMatchDrop;
  }

  // l4_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l4EntryMatchDropHw?: number; 
  public get l4EntryMatchDropHw() {
    return this.getNumberAttribute('l4_entry_match_drop_hw');
  }
  public set l4EntryMatchDropHw(value: number) {
    this._l4EntryMatchDropHw = value;
  }
  public resetL4EntryMatchDropHw() {
    this._l4EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropHwInput() {
    return this._l4EntryMatchDropHw;
  }

  // l4_entry_removed_from_hw - computed: false, optional: true, required: false
  private _l4EntryRemovedFromHw?: number; 
  public get l4EntryRemovedFromHw() {
    return this.getNumberAttribute('l4_entry_removed_from_hw');
  }
  public set l4EntryRemovedFromHw(value: number) {
    this._l4EntryRemovedFromHw = value;
  }
  public resetL4EntryRemovedFromHw() {
    this._l4EntryRemovedFromHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryRemovedFromHwInput() {
    return this._l4EntryRemovedFromHw;
  }

  // l4_hw_out_of_entries - computed: false, optional: true, required: false
  private _l4HwOutOfEntries?: number; 
  public get l4HwOutOfEntries() {
    return this.getNumberAttribute('l4_hw_out_of_entries');
  }
  public set l4HwOutOfEntries(value: number) {
    this._l4HwOutOfEntries = value;
  }
  public resetL4HwOutOfEntries() {
    this._l4HwOutOfEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4HwOutOfEntriesInput() {
    return this._l4HwOutOfEntries;
  }

  // syn_cookie_syn_ack_sent - computed: false, optional: true, required: false
  private _synCookieSynAckSent?: number; 
  public get synCookieSynAckSent() {
    return this.getNumberAttribute('syn_cookie_syn_ack_sent');
  }
  public set synCookieSynAckSent(value: number) {
    this._synCookieSynAckSent = value;
  }
  public resetSynCookieSynAckSent() {
    this._synCookieSynAckSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieSynAckSentInput() {
    return this._synCookieSynAckSent;
  }

  // syn_cookie_verification_failed - computed: false, optional: true, required: false
  private _synCookieVerificationFailed?: number; 
  public get synCookieVerificationFailed() {
    return this.getNumberAttribute('syn_cookie_verification_failed');
  }
  public set synCookieVerificationFailed(value: number) {
    this._synCookieVerificationFailed = value;
  }
  public resetSynCookieVerificationFailed() {
    this._synCookieVerificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieVerificationFailedInput() {
    return this._synCookieVerificationFailed;
  }

  // syn_cookie_verification_passed - computed: false, optional: true, required: false
  private _synCookieVerificationPassed?: number; 
  public get synCookieVerificationPassed() {
    return this.getNumberAttribute('syn_cookie_verification_passed');
  }
  public set synCookieVerificationPassed(value: number) {
    this._synCookieVerificationPassed = value;
  }
  public resetSynCookieVerificationPassed() {
    this._synCookieVerificationPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieVerificationPassedInput() {
    return this._synCookieVerificationPassed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats thunder_cgnv6_ddos_protection_stats}
*/
export class DataThunderCgnv6DdosProtectionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ddos_protection_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DdosProtectionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DdosProtectionStats to import
  * @param importFromId The id of the existing DataThunderCgnv6DdosProtectionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DdosProtectionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ddos_protection_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_stats thunder_cgnv6_ddos_protection_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DdosProtectionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DdosProtectionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ddos_protection_stats',
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
  private _stats = new DataThunderCgnv6DdosProtectionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6DdosProtectionStatsStats) {
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
      stats: dataThunderCgnv6DdosProtectionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6DdosProtectionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DdosProtectionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
