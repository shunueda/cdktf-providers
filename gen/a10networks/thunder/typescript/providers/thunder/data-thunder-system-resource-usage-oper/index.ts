// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#id DataThunderSystemResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#oper DataThunderSystemResourceUsageOper#oper}
  */
  readonly oper?: DataThunderSystemResourceUsageOperOper;
}
export interface DataThunderSystemResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_authz_collection_number_cur DataThunderSystemResourceUsageOper#aflex_authz_collection_number_cur}
  */
  readonly aflexAuthzCollectionNumberCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_authz_collection_number_default DataThunderSystemResourceUsageOper#aflex_authz_collection_number_default}
  */
  readonly aflexAuthzCollectionNumberDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_authz_collection_number_max DataThunderSystemResourceUsageOper#aflex_authz_collection_number_max}
  */
  readonly aflexAuthzCollectionNumberMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_authz_collection_number_min DataThunderSystemResourceUsageOper#aflex_authz_collection_number_min}
  */
  readonly aflexAuthzCollectionNumberMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_file_size_cur DataThunderSystemResourceUsageOper#aflex_file_size_cur}
  */
  readonly aflexFileSizeCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_file_size_default DataThunderSystemResourceUsageOper#aflex_file_size_default}
  */
  readonly aflexFileSizeDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_file_size_max DataThunderSystemResourceUsageOper#aflex_file_size_max}
  */
  readonly aflexFileSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_file_size_min DataThunderSystemResourceUsageOper#aflex_file_size_min}
  */
  readonly aflexFileSizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_table_entry_count_cur DataThunderSystemResourceUsageOper#aflex_table_entry_count_cur}
  */
  readonly aflexTableEntryCountCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_table_entry_count_default DataThunderSystemResourceUsageOper#aflex_table_entry_count_default}
  */
  readonly aflexTableEntryCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_table_entry_count_max DataThunderSystemResourceUsageOper#aflex_table_entry_count_max}
  */
  readonly aflexTableEntryCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#aflex_table_entry_count_min DataThunderSystemResourceUsageOper#aflex_table_entry_count_min}
  */
  readonly aflexTableEntryCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_html_file_size_cur DataThunderSystemResourceUsageOper#auth_portal_html_file_size_cur}
  */
  readonly authPortalHtmlFileSizeCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_html_file_size_default DataThunderSystemResourceUsageOper#auth_portal_html_file_size_default}
  */
  readonly authPortalHtmlFileSizeDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_html_file_size_max DataThunderSystemResourceUsageOper#auth_portal_html_file_size_max}
  */
  readonly authPortalHtmlFileSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_html_file_size_min DataThunderSystemResourceUsageOper#auth_portal_html_file_size_min}
  */
  readonly authPortalHtmlFileSizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_image_file_size_cur DataThunderSystemResourceUsageOper#auth_portal_image_file_size_cur}
  */
  readonly authPortalImageFileSizeCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_image_file_size_default DataThunderSystemResourceUsageOper#auth_portal_image_file_size_default}
  */
  readonly authPortalImageFileSizeDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_image_file_size_max DataThunderSystemResourceUsageOper#auth_portal_image_file_size_max}
  */
  readonly authPortalImageFileSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_portal_image_file_size_min DataThunderSystemResourceUsageOper#auth_portal_image_file_size_min}
  */
  readonly authPortalImageFileSizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_session_count_cur DataThunderSystemResourceUsageOper#auth_session_count_cur}
  */
  readonly authSessionCountCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_session_count_default DataThunderSystemResourceUsageOper#auth_session_count_default}
  */
  readonly authSessionCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_session_count_max DataThunderSystemResourceUsageOper#auth_session_count_max}
  */
  readonly authSessionCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#auth_session_count_min DataThunderSystemResourceUsageOper#auth_session_count_min}
  */
  readonly authSessionCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#authz_policy_number_cur DataThunderSystemResourceUsageOper#authz_policy_number_cur}
  */
  readonly authzPolicyNumberCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#authz_policy_number_default DataThunderSystemResourceUsageOper#authz_policy_number_default}
  */
  readonly authzPolicyNumberDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#authz_policy_number_max DataThunderSystemResourceUsageOper#authz_policy_number_max}
  */
  readonly authzPolicyNumberMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#authz_policy_number_min DataThunderSystemResourceUsageOper#authz_policy_number_min}
  */
  readonly authzPolicyNumberMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ac_cur DataThunderSystemResourceUsageOper#class_list_ac_cur}
  */
  readonly classListAcCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ac_default DataThunderSystemResourceUsageOper#class_list_ac_default}
  */
  readonly classListAcDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ac_max DataThunderSystemResourceUsageOper#class_list_ac_max}
  */
  readonly classListAcMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ac_min DataThunderSystemResourceUsageOper#class_list_ac_min}
  */
  readonly classListAcMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_entry_cur DataThunderSystemResourceUsageOper#class_list_entry_cur}
  */
  readonly classListEntryCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_entry_default DataThunderSystemResourceUsageOper#class_list_entry_default}
  */
  readonly classListEntryDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_entry_max DataThunderSystemResourceUsageOper#class_list_entry_max}
  */
  readonly classListEntryMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_entry_min DataThunderSystemResourceUsageOper#class_list_entry_min}
  */
  readonly classListEntryMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ipv6_addr_cur DataThunderSystemResourceUsageOper#class_list_ipv6_addr_cur}
  */
  readonly classListIpv6AddrCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ipv6_addr_default DataThunderSystemResourceUsageOper#class_list_ipv6_addr_default}
  */
  readonly classListIpv6AddrDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ipv6_addr_max DataThunderSystemResourceUsageOper#class_list_ipv6_addr_max}
  */
  readonly classListIpv6AddrMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#class_list_ipv6_addr_min DataThunderSystemResourceUsageOper#class_list_ipv6_addr_min}
  */
  readonly classListIpv6AddrMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ipsec_sa_number_cur DataThunderSystemResourceUsageOper#ipsec_sa_number_cur}
  */
  readonly ipsecSaNumberCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ipsec_sa_number_default DataThunderSystemResourceUsageOper#ipsec_sa_number_default}
  */
  readonly ipsecSaNumberDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ipsec_sa_number_max DataThunderSystemResourceUsageOper#ipsec_sa_number_max}
  */
  readonly ipsecSaNumberMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ipsec_sa_number_min DataThunderSystemResourceUsageOper#ipsec_sa_number_min}
  */
  readonly ipsecSaNumberMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#l4_session_count_cur DataThunderSystemResourceUsageOper#l4_session_count_cur}
  */
  readonly l4SessionCountCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#l4_session_count_default DataThunderSystemResourceUsageOper#l4_session_count_default}
  */
  readonly l4SessionCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#l4_session_count_max DataThunderSystemResourceUsageOper#l4_session_count_max}
  */
  readonly l4SessionCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#l4_session_count_min DataThunderSystemResourceUsageOper#l4_session_count_min}
  */
  readonly l4SessionCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#nat_pool_addr_cur DataThunderSystemResourceUsageOper#nat_pool_addr_cur}
  */
  readonly natPoolAddrCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#nat_pool_addr_default DataThunderSystemResourceUsageOper#nat_pool_addr_default}
  */
  readonly natPoolAddrDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#nat_pool_addr_max DataThunderSystemResourceUsageOper#nat_pool_addr_max}
  */
  readonly natPoolAddrMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#nat_pool_addr_min DataThunderSystemResourceUsageOper#nat_pool_addr_min}
  */
  readonly natPoolAddrMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#radius_table_size_cur DataThunderSystemResourceUsageOper#radius_table_size_cur}
  */
  readonly radiusTableSizeCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#radius_table_size_default DataThunderSystemResourceUsageOper#radius_table_size_default}
  */
  readonly radiusTableSizeDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#radius_table_size_max DataThunderSystemResourceUsageOper#radius_table_size_max}
  */
  readonly radiusTableSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#radius_table_size_min DataThunderSystemResourceUsageOper#radius_table_size_min}
  */
  readonly radiusTableSizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ram_cache_memory_limit_cur DataThunderSystemResourceUsageOper#ram_cache_memory_limit_cur}
  */
  readonly ramCacheMemoryLimitCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ram_cache_memory_limit_default DataThunderSystemResourceUsageOper#ram_cache_memory_limit_default}
  */
  readonly ramCacheMemoryLimitDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ram_cache_memory_limit_max DataThunderSystemResourceUsageOper#ram_cache_memory_limit_max}
  */
  readonly ramCacheMemoryLimitMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#ram_cache_memory_limit_min DataThunderSystemResourceUsageOper#ram_cache_memory_limit_min}
  */
  readonly ramCacheMemoryLimitMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#visibility_mon_entity_cur DataThunderSystemResourceUsageOper#visibility_mon_entity_cur}
  */
  readonly visibilityMonEntityCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#visibility_mon_entity_default DataThunderSystemResourceUsageOper#visibility_mon_entity_default}
  */
  readonly visibilityMonEntityDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#visibility_mon_entity_max DataThunderSystemResourceUsageOper#visibility_mon_entity_max}
  */
  readonly visibilityMonEntityMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#visibility_mon_entity_min DataThunderSystemResourceUsageOper#visibility_mon_entity_min}
  */
  readonly visibilityMonEntityMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#waf_template_cur DataThunderSystemResourceUsageOper#waf_template_cur}
  */
  readonly wafTemplateCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#waf_template_default DataThunderSystemResourceUsageOper#waf_template_default}
  */
  readonly wafTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#waf_template_max DataThunderSystemResourceUsageOper#waf_template_max}
  */
  readonly wafTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#waf_template_min DataThunderSystemResourceUsageOper#waf_template_min}
  */
  readonly wafTemplateMin?: number;
}

export function dataThunderSystemResourceUsageOperOperToTerraform(struct?: DataThunderSystemResourceUsageOperOperOutputReference | DataThunderSystemResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_authz_collection_number_cur: cdktf.numberToTerraform(struct!.aflexAuthzCollectionNumberCur),
    aflex_authz_collection_number_default: cdktf.numberToTerraform(struct!.aflexAuthzCollectionNumberDefault),
    aflex_authz_collection_number_max: cdktf.numberToTerraform(struct!.aflexAuthzCollectionNumberMax),
    aflex_authz_collection_number_min: cdktf.numberToTerraform(struct!.aflexAuthzCollectionNumberMin),
    aflex_file_size_cur: cdktf.numberToTerraform(struct!.aflexFileSizeCur),
    aflex_file_size_default: cdktf.numberToTerraform(struct!.aflexFileSizeDefault),
    aflex_file_size_max: cdktf.numberToTerraform(struct!.aflexFileSizeMax),
    aflex_file_size_min: cdktf.numberToTerraform(struct!.aflexFileSizeMin),
    aflex_table_entry_count_cur: cdktf.numberToTerraform(struct!.aflexTableEntryCountCur),
    aflex_table_entry_count_default: cdktf.numberToTerraform(struct!.aflexTableEntryCountDefault),
    aflex_table_entry_count_max: cdktf.numberToTerraform(struct!.aflexTableEntryCountMax),
    aflex_table_entry_count_min: cdktf.numberToTerraform(struct!.aflexTableEntryCountMin),
    auth_portal_html_file_size_cur: cdktf.numberToTerraform(struct!.authPortalHtmlFileSizeCur),
    auth_portal_html_file_size_default: cdktf.numberToTerraform(struct!.authPortalHtmlFileSizeDefault),
    auth_portal_html_file_size_max: cdktf.numberToTerraform(struct!.authPortalHtmlFileSizeMax),
    auth_portal_html_file_size_min: cdktf.numberToTerraform(struct!.authPortalHtmlFileSizeMin),
    auth_portal_image_file_size_cur: cdktf.numberToTerraform(struct!.authPortalImageFileSizeCur),
    auth_portal_image_file_size_default: cdktf.numberToTerraform(struct!.authPortalImageFileSizeDefault),
    auth_portal_image_file_size_max: cdktf.numberToTerraform(struct!.authPortalImageFileSizeMax),
    auth_portal_image_file_size_min: cdktf.numberToTerraform(struct!.authPortalImageFileSizeMin),
    auth_session_count_cur: cdktf.numberToTerraform(struct!.authSessionCountCur),
    auth_session_count_default: cdktf.numberToTerraform(struct!.authSessionCountDefault),
    auth_session_count_max: cdktf.numberToTerraform(struct!.authSessionCountMax),
    auth_session_count_min: cdktf.numberToTerraform(struct!.authSessionCountMin),
    authz_policy_number_cur: cdktf.numberToTerraform(struct!.authzPolicyNumberCur),
    authz_policy_number_default: cdktf.numberToTerraform(struct!.authzPolicyNumberDefault),
    authz_policy_number_max: cdktf.numberToTerraform(struct!.authzPolicyNumberMax),
    authz_policy_number_min: cdktf.numberToTerraform(struct!.authzPolicyNumberMin),
    class_list_ac_cur: cdktf.numberToTerraform(struct!.classListAcCur),
    class_list_ac_default: cdktf.numberToTerraform(struct!.classListAcDefault),
    class_list_ac_max: cdktf.numberToTerraform(struct!.classListAcMax),
    class_list_ac_min: cdktf.numberToTerraform(struct!.classListAcMin),
    class_list_entry_cur: cdktf.numberToTerraform(struct!.classListEntryCur),
    class_list_entry_default: cdktf.numberToTerraform(struct!.classListEntryDefault),
    class_list_entry_max: cdktf.numberToTerraform(struct!.classListEntryMax),
    class_list_entry_min: cdktf.numberToTerraform(struct!.classListEntryMin),
    class_list_ipv6_addr_cur: cdktf.numberToTerraform(struct!.classListIpv6AddrCur),
    class_list_ipv6_addr_default: cdktf.numberToTerraform(struct!.classListIpv6AddrDefault),
    class_list_ipv6_addr_max: cdktf.numberToTerraform(struct!.classListIpv6AddrMax),
    class_list_ipv6_addr_min: cdktf.numberToTerraform(struct!.classListIpv6AddrMin),
    ipsec_sa_number_cur: cdktf.numberToTerraform(struct!.ipsecSaNumberCur),
    ipsec_sa_number_default: cdktf.numberToTerraform(struct!.ipsecSaNumberDefault),
    ipsec_sa_number_max: cdktf.numberToTerraform(struct!.ipsecSaNumberMax),
    ipsec_sa_number_min: cdktf.numberToTerraform(struct!.ipsecSaNumberMin),
    l4_session_count_cur: cdktf.numberToTerraform(struct!.l4SessionCountCur),
    l4_session_count_default: cdktf.numberToTerraform(struct!.l4SessionCountDefault),
    l4_session_count_max: cdktf.numberToTerraform(struct!.l4SessionCountMax),
    l4_session_count_min: cdktf.numberToTerraform(struct!.l4SessionCountMin),
    nat_pool_addr_cur: cdktf.numberToTerraform(struct!.natPoolAddrCur),
    nat_pool_addr_default: cdktf.numberToTerraform(struct!.natPoolAddrDefault),
    nat_pool_addr_max: cdktf.numberToTerraform(struct!.natPoolAddrMax),
    nat_pool_addr_min: cdktf.numberToTerraform(struct!.natPoolAddrMin),
    radius_table_size_cur: cdktf.numberToTerraform(struct!.radiusTableSizeCur),
    radius_table_size_default: cdktf.numberToTerraform(struct!.radiusTableSizeDefault),
    radius_table_size_max: cdktf.numberToTerraform(struct!.radiusTableSizeMax),
    radius_table_size_min: cdktf.numberToTerraform(struct!.radiusTableSizeMin),
    ram_cache_memory_limit_cur: cdktf.numberToTerraform(struct!.ramCacheMemoryLimitCur),
    ram_cache_memory_limit_default: cdktf.numberToTerraform(struct!.ramCacheMemoryLimitDefault),
    ram_cache_memory_limit_max: cdktf.numberToTerraform(struct!.ramCacheMemoryLimitMax),
    ram_cache_memory_limit_min: cdktf.numberToTerraform(struct!.ramCacheMemoryLimitMin),
    visibility_mon_entity_cur: cdktf.numberToTerraform(struct!.visibilityMonEntityCur),
    visibility_mon_entity_default: cdktf.numberToTerraform(struct!.visibilityMonEntityDefault),
    visibility_mon_entity_max: cdktf.numberToTerraform(struct!.visibilityMonEntityMax),
    visibility_mon_entity_min: cdktf.numberToTerraform(struct!.visibilityMonEntityMin),
    waf_template_cur: cdktf.numberToTerraform(struct!.wafTemplateCur),
    waf_template_default: cdktf.numberToTerraform(struct!.wafTemplateDefault),
    waf_template_max: cdktf.numberToTerraform(struct!.wafTemplateMax),
    waf_template_min: cdktf.numberToTerraform(struct!.wafTemplateMin),
  }
}


export function dataThunderSystemResourceUsageOperOperToHclTerraform(struct?: DataThunderSystemResourceUsageOperOperOutputReference | DataThunderSystemResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_authz_collection_number_cur: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzCollectionNumberCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_authz_collection_number_default: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzCollectionNumberDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_authz_collection_number_max: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzCollectionNumberMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_authz_collection_number_min: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzCollectionNumberMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_file_size_cur: {
      value: cdktf.numberToHclTerraform(struct!.aflexFileSizeCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_file_size_default: {
      value: cdktf.numberToHclTerraform(struct!.aflexFileSizeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.aflexFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_file_size_min: {
      value: cdktf.numberToHclTerraform(struct!.aflexFileSizeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_count_cur: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntryCountCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_count_default: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntryCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_count_max: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntryCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_count_min: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntryCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_html_file_size_cur: {
      value: cdktf.numberToHclTerraform(struct!.authPortalHtmlFileSizeCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_html_file_size_default: {
      value: cdktf.numberToHclTerraform(struct!.authPortalHtmlFileSizeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_html_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.authPortalHtmlFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_html_file_size_min: {
      value: cdktf.numberToHclTerraform(struct!.authPortalHtmlFileSizeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_image_file_size_cur: {
      value: cdktf.numberToHclTerraform(struct!.authPortalImageFileSizeCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_image_file_size_default: {
      value: cdktf.numberToHclTerraform(struct!.authPortalImageFileSizeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_image_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.authPortalImageFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_image_file_size_min: {
      value: cdktf.numberToHclTerraform(struct!.authPortalImageFileSizeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_session_count_cur: {
      value: cdktf.numberToHclTerraform(struct!.authSessionCountCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_session_count_default: {
      value: cdktf.numberToHclTerraform(struct!.authSessionCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_session_count_max: {
      value: cdktf.numberToHclTerraform(struct!.authSessionCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_session_count_min: {
      value: cdktf.numberToHclTerraform(struct!.authSessionCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_policy_number_cur: {
      value: cdktf.numberToHclTerraform(struct!.authzPolicyNumberCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_policy_number_default: {
      value: cdktf.numberToHclTerraform(struct!.authzPolicyNumberDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_policy_number_max: {
      value: cdktf.numberToHclTerraform(struct!.authzPolicyNumberMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_policy_number_min: {
      value: cdktf.numberToHclTerraform(struct!.authzPolicyNumberMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ac_cur: {
      value: cdktf.numberToHclTerraform(struct!.classListAcCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ac_default: {
      value: cdktf.numberToHclTerraform(struct!.classListAcDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ac_max: {
      value: cdktf.numberToHclTerraform(struct!.classListAcMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ac_min: {
      value: cdktf.numberToHclTerraform(struct!.classListAcMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_entry_cur: {
      value: cdktf.numberToHclTerraform(struct!.classListEntryCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_entry_default: {
      value: cdktf.numberToHclTerraform(struct!.classListEntryDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_entry_max: {
      value: cdktf.numberToHclTerraform(struct!.classListEntryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_entry_min: {
      value: cdktf.numberToHclTerraform(struct!.classListEntryMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ipv6_addr_cur: {
      value: cdktf.numberToHclTerraform(struct!.classListIpv6AddrCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ipv6_addr_default: {
      value: cdktf.numberToHclTerraform(struct!.classListIpv6AddrDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ipv6_addr_max: {
      value: cdktf.numberToHclTerraform(struct!.classListIpv6AddrMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ipv6_addr_min: {
      value: cdktf.numberToHclTerraform(struct!.classListIpv6AddrMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa_number_cur: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaNumberCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa_number_default: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaNumberDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa_number_max: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaNumberMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa_number_min: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaNumberMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_count_cur: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCountCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_count_default: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_count_max: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_count_min: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_cur: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_default: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_max: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_min: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_cur: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_default: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_max: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_min: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram_cache_memory_limit_cur: {
      value: cdktf.numberToHclTerraform(struct!.ramCacheMemoryLimitCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram_cache_memory_limit_default: {
      value: cdktf.numberToHclTerraform(struct!.ramCacheMemoryLimitDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram_cache_memory_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.ramCacheMemoryLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram_cache_memory_limit_min: {
      value: cdktf.numberToHclTerraform(struct!.ramCacheMemoryLimitMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_mon_entity_cur: {
      value: cdktf.numberToHclTerraform(struct!.visibilityMonEntityCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_mon_entity_default: {
      value: cdktf.numberToHclTerraform(struct!.visibilityMonEntityDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_mon_entity_max: {
      value: cdktf.numberToHclTerraform(struct!.visibilityMonEntityMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_mon_entity_min: {
      value: cdktf.numberToHclTerraform(struct!.visibilityMonEntityMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_template_cur: {
      value: cdktf.numberToHclTerraform(struct!.wafTemplateCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_template_default: {
      value: cdktf.numberToHclTerraform(struct!.wafTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_template_max: {
      value: cdktf.numberToHclTerraform(struct!.wafTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_template_min: {
      value: cdktf.numberToHclTerraform(struct!.wafTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexAuthzCollectionNumberCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzCollectionNumberCur = this._aflexAuthzCollectionNumberCur;
    }
    if (this._aflexAuthzCollectionNumberDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzCollectionNumberDefault = this._aflexAuthzCollectionNumberDefault;
    }
    if (this._aflexAuthzCollectionNumberMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzCollectionNumberMax = this._aflexAuthzCollectionNumberMax;
    }
    if (this._aflexAuthzCollectionNumberMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzCollectionNumberMin = this._aflexAuthzCollectionNumberMin;
    }
    if (this._aflexFileSizeCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexFileSizeCur = this._aflexFileSizeCur;
    }
    if (this._aflexFileSizeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexFileSizeDefault = this._aflexFileSizeDefault;
    }
    if (this._aflexFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexFileSizeMax = this._aflexFileSizeMax;
    }
    if (this._aflexFileSizeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexFileSizeMin = this._aflexFileSizeMin;
    }
    if (this._aflexTableEntryCountCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntryCountCur = this._aflexTableEntryCountCur;
    }
    if (this._aflexTableEntryCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntryCountDefault = this._aflexTableEntryCountDefault;
    }
    if (this._aflexTableEntryCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntryCountMax = this._aflexTableEntryCountMax;
    }
    if (this._aflexTableEntryCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntryCountMin = this._aflexTableEntryCountMin;
    }
    if (this._authPortalHtmlFileSizeCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalHtmlFileSizeCur = this._authPortalHtmlFileSizeCur;
    }
    if (this._authPortalHtmlFileSizeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalHtmlFileSizeDefault = this._authPortalHtmlFileSizeDefault;
    }
    if (this._authPortalHtmlFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalHtmlFileSizeMax = this._authPortalHtmlFileSizeMax;
    }
    if (this._authPortalHtmlFileSizeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalHtmlFileSizeMin = this._authPortalHtmlFileSizeMin;
    }
    if (this._authPortalImageFileSizeCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalImageFileSizeCur = this._authPortalImageFileSizeCur;
    }
    if (this._authPortalImageFileSizeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalImageFileSizeDefault = this._authPortalImageFileSizeDefault;
    }
    if (this._authPortalImageFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalImageFileSizeMax = this._authPortalImageFileSizeMax;
    }
    if (this._authPortalImageFileSizeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalImageFileSizeMin = this._authPortalImageFileSizeMin;
    }
    if (this._authSessionCountCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSessionCountCur = this._authSessionCountCur;
    }
    if (this._authSessionCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSessionCountDefault = this._authSessionCountDefault;
    }
    if (this._authSessionCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSessionCountMax = this._authSessionCountMax;
    }
    if (this._authSessionCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSessionCountMin = this._authSessionCountMin;
    }
    if (this._authzPolicyNumberCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzPolicyNumberCur = this._authzPolicyNumberCur;
    }
    if (this._authzPolicyNumberDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzPolicyNumberDefault = this._authzPolicyNumberDefault;
    }
    if (this._authzPolicyNumberMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzPolicyNumberMax = this._authzPolicyNumberMax;
    }
    if (this._authzPolicyNumberMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzPolicyNumberMin = this._authzPolicyNumberMin;
    }
    if (this._classListAcCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListAcCur = this._classListAcCur;
    }
    if (this._classListAcDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListAcDefault = this._classListAcDefault;
    }
    if (this._classListAcMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListAcMax = this._classListAcMax;
    }
    if (this._classListAcMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListAcMin = this._classListAcMin;
    }
    if (this._classListEntryCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntryCur = this._classListEntryCur;
    }
    if (this._classListEntryDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntryDefault = this._classListEntryDefault;
    }
    if (this._classListEntryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntryMax = this._classListEntryMax;
    }
    if (this._classListEntryMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntryMin = this._classListEntryMin;
    }
    if (this._classListIpv6AddrCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListIpv6AddrCur = this._classListIpv6AddrCur;
    }
    if (this._classListIpv6AddrDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListIpv6AddrDefault = this._classListIpv6AddrDefault;
    }
    if (this._classListIpv6AddrMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListIpv6AddrMax = this._classListIpv6AddrMax;
    }
    if (this._classListIpv6AddrMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListIpv6AddrMin = this._classListIpv6AddrMin;
    }
    if (this._ipsecSaNumberCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaNumberCur = this._ipsecSaNumberCur;
    }
    if (this._ipsecSaNumberDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaNumberDefault = this._ipsecSaNumberDefault;
    }
    if (this._ipsecSaNumberMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaNumberMax = this._ipsecSaNumberMax;
    }
    if (this._ipsecSaNumberMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaNumberMin = this._ipsecSaNumberMin;
    }
    if (this._l4SessionCountCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCountCur = this._l4SessionCountCur;
    }
    if (this._l4SessionCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCountDefault = this._l4SessionCountDefault;
    }
    if (this._l4SessionCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCountMax = this._l4SessionCountMax;
    }
    if (this._l4SessionCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCountMin = this._l4SessionCountMin;
    }
    if (this._natPoolAddrCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrCur = this._natPoolAddrCur;
    }
    if (this._natPoolAddrDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrDefault = this._natPoolAddrDefault;
    }
    if (this._natPoolAddrMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrMax = this._natPoolAddrMax;
    }
    if (this._natPoolAddrMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrMin = this._natPoolAddrMin;
    }
    if (this._radiusTableSizeCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeCur = this._radiusTableSizeCur;
    }
    if (this._radiusTableSizeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeDefault = this._radiusTableSizeDefault;
    }
    if (this._radiusTableSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeMax = this._radiusTableSizeMax;
    }
    if (this._radiusTableSizeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeMin = this._radiusTableSizeMin;
    }
    if (this._ramCacheMemoryLimitCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramCacheMemoryLimitCur = this._ramCacheMemoryLimitCur;
    }
    if (this._ramCacheMemoryLimitDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramCacheMemoryLimitDefault = this._ramCacheMemoryLimitDefault;
    }
    if (this._ramCacheMemoryLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramCacheMemoryLimitMax = this._ramCacheMemoryLimitMax;
    }
    if (this._ramCacheMemoryLimitMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramCacheMemoryLimitMin = this._ramCacheMemoryLimitMin;
    }
    if (this._visibilityMonEntityCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityMonEntityCur = this._visibilityMonEntityCur;
    }
    if (this._visibilityMonEntityDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityMonEntityDefault = this._visibilityMonEntityDefault;
    }
    if (this._visibilityMonEntityMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityMonEntityMax = this._visibilityMonEntityMax;
    }
    if (this._visibilityMonEntityMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityMonEntityMin = this._visibilityMonEntityMin;
    }
    if (this._wafTemplateCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafTemplateCur = this._wafTemplateCur;
    }
    if (this._wafTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafTemplateDefault = this._wafTemplateDefault;
    }
    if (this._wafTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafTemplateMax = this._wafTemplateMax;
    }
    if (this._wafTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafTemplateMin = this._wafTemplateMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexAuthzCollectionNumberCur = undefined;
      this._aflexAuthzCollectionNumberDefault = undefined;
      this._aflexAuthzCollectionNumberMax = undefined;
      this._aflexAuthzCollectionNumberMin = undefined;
      this._aflexFileSizeCur = undefined;
      this._aflexFileSizeDefault = undefined;
      this._aflexFileSizeMax = undefined;
      this._aflexFileSizeMin = undefined;
      this._aflexTableEntryCountCur = undefined;
      this._aflexTableEntryCountDefault = undefined;
      this._aflexTableEntryCountMax = undefined;
      this._aflexTableEntryCountMin = undefined;
      this._authPortalHtmlFileSizeCur = undefined;
      this._authPortalHtmlFileSizeDefault = undefined;
      this._authPortalHtmlFileSizeMax = undefined;
      this._authPortalHtmlFileSizeMin = undefined;
      this._authPortalImageFileSizeCur = undefined;
      this._authPortalImageFileSizeDefault = undefined;
      this._authPortalImageFileSizeMax = undefined;
      this._authPortalImageFileSizeMin = undefined;
      this._authSessionCountCur = undefined;
      this._authSessionCountDefault = undefined;
      this._authSessionCountMax = undefined;
      this._authSessionCountMin = undefined;
      this._authzPolicyNumberCur = undefined;
      this._authzPolicyNumberDefault = undefined;
      this._authzPolicyNumberMax = undefined;
      this._authzPolicyNumberMin = undefined;
      this._classListAcCur = undefined;
      this._classListAcDefault = undefined;
      this._classListAcMax = undefined;
      this._classListAcMin = undefined;
      this._classListEntryCur = undefined;
      this._classListEntryDefault = undefined;
      this._classListEntryMax = undefined;
      this._classListEntryMin = undefined;
      this._classListIpv6AddrCur = undefined;
      this._classListIpv6AddrDefault = undefined;
      this._classListIpv6AddrMax = undefined;
      this._classListIpv6AddrMin = undefined;
      this._ipsecSaNumberCur = undefined;
      this._ipsecSaNumberDefault = undefined;
      this._ipsecSaNumberMax = undefined;
      this._ipsecSaNumberMin = undefined;
      this._l4SessionCountCur = undefined;
      this._l4SessionCountDefault = undefined;
      this._l4SessionCountMax = undefined;
      this._l4SessionCountMin = undefined;
      this._natPoolAddrCur = undefined;
      this._natPoolAddrDefault = undefined;
      this._natPoolAddrMax = undefined;
      this._natPoolAddrMin = undefined;
      this._radiusTableSizeCur = undefined;
      this._radiusTableSizeDefault = undefined;
      this._radiusTableSizeMax = undefined;
      this._radiusTableSizeMin = undefined;
      this._ramCacheMemoryLimitCur = undefined;
      this._ramCacheMemoryLimitDefault = undefined;
      this._ramCacheMemoryLimitMax = undefined;
      this._ramCacheMemoryLimitMin = undefined;
      this._visibilityMonEntityCur = undefined;
      this._visibilityMonEntityDefault = undefined;
      this._visibilityMonEntityMax = undefined;
      this._visibilityMonEntityMin = undefined;
      this._wafTemplateCur = undefined;
      this._wafTemplateDefault = undefined;
      this._wafTemplateMax = undefined;
      this._wafTemplateMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexAuthzCollectionNumberCur = value.aflexAuthzCollectionNumberCur;
      this._aflexAuthzCollectionNumberDefault = value.aflexAuthzCollectionNumberDefault;
      this._aflexAuthzCollectionNumberMax = value.aflexAuthzCollectionNumberMax;
      this._aflexAuthzCollectionNumberMin = value.aflexAuthzCollectionNumberMin;
      this._aflexFileSizeCur = value.aflexFileSizeCur;
      this._aflexFileSizeDefault = value.aflexFileSizeDefault;
      this._aflexFileSizeMax = value.aflexFileSizeMax;
      this._aflexFileSizeMin = value.aflexFileSizeMin;
      this._aflexTableEntryCountCur = value.aflexTableEntryCountCur;
      this._aflexTableEntryCountDefault = value.aflexTableEntryCountDefault;
      this._aflexTableEntryCountMax = value.aflexTableEntryCountMax;
      this._aflexTableEntryCountMin = value.aflexTableEntryCountMin;
      this._authPortalHtmlFileSizeCur = value.authPortalHtmlFileSizeCur;
      this._authPortalHtmlFileSizeDefault = value.authPortalHtmlFileSizeDefault;
      this._authPortalHtmlFileSizeMax = value.authPortalHtmlFileSizeMax;
      this._authPortalHtmlFileSizeMin = value.authPortalHtmlFileSizeMin;
      this._authPortalImageFileSizeCur = value.authPortalImageFileSizeCur;
      this._authPortalImageFileSizeDefault = value.authPortalImageFileSizeDefault;
      this._authPortalImageFileSizeMax = value.authPortalImageFileSizeMax;
      this._authPortalImageFileSizeMin = value.authPortalImageFileSizeMin;
      this._authSessionCountCur = value.authSessionCountCur;
      this._authSessionCountDefault = value.authSessionCountDefault;
      this._authSessionCountMax = value.authSessionCountMax;
      this._authSessionCountMin = value.authSessionCountMin;
      this._authzPolicyNumberCur = value.authzPolicyNumberCur;
      this._authzPolicyNumberDefault = value.authzPolicyNumberDefault;
      this._authzPolicyNumberMax = value.authzPolicyNumberMax;
      this._authzPolicyNumberMin = value.authzPolicyNumberMin;
      this._classListAcCur = value.classListAcCur;
      this._classListAcDefault = value.classListAcDefault;
      this._classListAcMax = value.classListAcMax;
      this._classListAcMin = value.classListAcMin;
      this._classListEntryCur = value.classListEntryCur;
      this._classListEntryDefault = value.classListEntryDefault;
      this._classListEntryMax = value.classListEntryMax;
      this._classListEntryMin = value.classListEntryMin;
      this._classListIpv6AddrCur = value.classListIpv6AddrCur;
      this._classListIpv6AddrDefault = value.classListIpv6AddrDefault;
      this._classListIpv6AddrMax = value.classListIpv6AddrMax;
      this._classListIpv6AddrMin = value.classListIpv6AddrMin;
      this._ipsecSaNumberCur = value.ipsecSaNumberCur;
      this._ipsecSaNumberDefault = value.ipsecSaNumberDefault;
      this._ipsecSaNumberMax = value.ipsecSaNumberMax;
      this._ipsecSaNumberMin = value.ipsecSaNumberMin;
      this._l4SessionCountCur = value.l4SessionCountCur;
      this._l4SessionCountDefault = value.l4SessionCountDefault;
      this._l4SessionCountMax = value.l4SessionCountMax;
      this._l4SessionCountMin = value.l4SessionCountMin;
      this._natPoolAddrCur = value.natPoolAddrCur;
      this._natPoolAddrDefault = value.natPoolAddrDefault;
      this._natPoolAddrMax = value.natPoolAddrMax;
      this._natPoolAddrMin = value.natPoolAddrMin;
      this._radiusTableSizeCur = value.radiusTableSizeCur;
      this._radiusTableSizeDefault = value.radiusTableSizeDefault;
      this._radiusTableSizeMax = value.radiusTableSizeMax;
      this._radiusTableSizeMin = value.radiusTableSizeMin;
      this._ramCacheMemoryLimitCur = value.ramCacheMemoryLimitCur;
      this._ramCacheMemoryLimitDefault = value.ramCacheMemoryLimitDefault;
      this._ramCacheMemoryLimitMax = value.ramCacheMemoryLimitMax;
      this._ramCacheMemoryLimitMin = value.ramCacheMemoryLimitMin;
      this._visibilityMonEntityCur = value.visibilityMonEntityCur;
      this._visibilityMonEntityDefault = value.visibilityMonEntityDefault;
      this._visibilityMonEntityMax = value.visibilityMonEntityMax;
      this._visibilityMonEntityMin = value.visibilityMonEntityMin;
      this._wafTemplateCur = value.wafTemplateCur;
      this._wafTemplateDefault = value.wafTemplateDefault;
      this._wafTemplateMax = value.wafTemplateMax;
      this._wafTemplateMin = value.wafTemplateMin;
    }
  }

  // aflex_authz_collection_number_cur - computed: false, optional: true, required: false
  private _aflexAuthzCollectionNumberCur?: number; 
  public get aflexAuthzCollectionNumberCur() {
    return this.getNumberAttribute('aflex_authz_collection_number_cur');
  }
  public set aflexAuthzCollectionNumberCur(value: number) {
    this._aflexAuthzCollectionNumberCur = value;
  }
  public resetAflexAuthzCollectionNumberCur() {
    this._aflexAuthzCollectionNumberCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzCollectionNumberCurInput() {
    return this._aflexAuthzCollectionNumberCur;
  }

  // aflex_authz_collection_number_default - computed: false, optional: true, required: false
  private _aflexAuthzCollectionNumberDefault?: number; 
  public get aflexAuthzCollectionNumberDefault() {
    return this.getNumberAttribute('aflex_authz_collection_number_default');
  }
  public set aflexAuthzCollectionNumberDefault(value: number) {
    this._aflexAuthzCollectionNumberDefault = value;
  }
  public resetAflexAuthzCollectionNumberDefault() {
    this._aflexAuthzCollectionNumberDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzCollectionNumberDefaultInput() {
    return this._aflexAuthzCollectionNumberDefault;
  }

  // aflex_authz_collection_number_max - computed: false, optional: true, required: false
  private _aflexAuthzCollectionNumberMax?: number; 
  public get aflexAuthzCollectionNumberMax() {
    return this.getNumberAttribute('aflex_authz_collection_number_max');
  }
  public set aflexAuthzCollectionNumberMax(value: number) {
    this._aflexAuthzCollectionNumberMax = value;
  }
  public resetAflexAuthzCollectionNumberMax() {
    this._aflexAuthzCollectionNumberMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzCollectionNumberMaxInput() {
    return this._aflexAuthzCollectionNumberMax;
  }

  // aflex_authz_collection_number_min - computed: false, optional: true, required: false
  private _aflexAuthzCollectionNumberMin?: number; 
  public get aflexAuthzCollectionNumberMin() {
    return this.getNumberAttribute('aflex_authz_collection_number_min');
  }
  public set aflexAuthzCollectionNumberMin(value: number) {
    this._aflexAuthzCollectionNumberMin = value;
  }
  public resetAflexAuthzCollectionNumberMin() {
    this._aflexAuthzCollectionNumberMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzCollectionNumberMinInput() {
    return this._aflexAuthzCollectionNumberMin;
  }

  // aflex_file_size_cur - computed: false, optional: true, required: false
  private _aflexFileSizeCur?: number; 
  public get aflexFileSizeCur() {
    return this.getNumberAttribute('aflex_file_size_cur');
  }
  public set aflexFileSizeCur(value: number) {
    this._aflexFileSizeCur = value;
  }
  public resetAflexFileSizeCur() {
    this._aflexFileSizeCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexFileSizeCurInput() {
    return this._aflexFileSizeCur;
  }

  // aflex_file_size_default - computed: false, optional: true, required: false
  private _aflexFileSizeDefault?: number; 
  public get aflexFileSizeDefault() {
    return this.getNumberAttribute('aflex_file_size_default');
  }
  public set aflexFileSizeDefault(value: number) {
    this._aflexFileSizeDefault = value;
  }
  public resetAflexFileSizeDefault() {
    this._aflexFileSizeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexFileSizeDefaultInput() {
    return this._aflexFileSizeDefault;
  }

  // aflex_file_size_max - computed: false, optional: true, required: false
  private _aflexFileSizeMax?: number; 
  public get aflexFileSizeMax() {
    return this.getNumberAttribute('aflex_file_size_max');
  }
  public set aflexFileSizeMax(value: number) {
    this._aflexFileSizeMax = value;
  }
  public resetAflexFileSizeMax() {
    this._aflexFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexFileSizeMaxInput() {
    return this._aflexFileSizeMax;
  }

  // aflex_file_size_min - computed: false, optional: true, required: false
  private _aflexFileSizeMin?: number; 
  public get aflexFileSizeMin() {
    return this.getNumberAttribute('aflex_file_size_min');
  }
  public set aflexFileSizeMin(value: number) {
    this._aflexFileSizeMin = value;
  }
  public resetAflexFileSizeMin() {
    this._aflexFileSizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexFileSizeMinInput() {
    return this._aflexFileSizeMin;
  }

  // aflex_table_entry_count_cur - computed: false, optional: true, required: false
  private _aflexTableEntryCountCur?: number; 
  public get aflexTableEntryCountCur() {
    return this.getNumberAttribute('aflex_table_entry_count_cur');
  }
  public set aflexTableEntryCountCur(value: number) {
    this._aflexTableEntryCountCur = value;
  }
  public resetAflexTableEntryCountCur() {
    this._aflexTableEntryCountCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountCurInput() {
    return this._aflexTableEntryCountCur;
  }

  // aflex_table_entry_count_default - computed: false, optional: true, required: false
  private _aflexTableEntryCountDefault?: number; 
  public get aflexTableEntryCountDefault() {
    return this.getNumberAttribute('aflex_table_entry_count_default');
  }
  public set aflexTableEntryCountDefault(value: number) {
    this._aflexTableEntryCountDefault = value;
  }
  public resetAflexTableEntryCountDefault() {
    this._aflexTableEntryCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountDefaultInput() {
    return this._aflexTableEntryCountDefault;
  }

  // aflex_table_entry_count_max - computed: false, optional: true, required: false
  private _aflexTableEntryCountMax?: number; 
  public get aflexTableEntryCountMax() {
    return this.getNumberAttribute('aflex_table_entry_count_max');
  }
  public set aflexTableEntryCountMax(value: number) {
    this._aflexTableEntryCountMax = value;
  }
  public resetAflexTableEntryCountMax() {
    this._aflexTableEntryCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountMaxInput() {
    return this._aflexTableEntryCountMax;
  }

  // aflex_table_entry_count_min - computed: false, optional: true, required: false
  private _aflexTableEntryCountMin?: number; 
  public get aflexTableEntryCountMin() {
    return this.getNumberAttribute('aflex_table_entry_count_min');
  }
  public set aflexTableEntryCountMin(value: number) {
    this._aflexTableEntryCountMin = value;
  }
  public resetAflexTableEntryCountMin() {
    this._aflexTableEntryCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountMinInput() {
    return this._aflexTableEntryCountMin;
  }

  // auth_portal_html_file_size_cur - computed: false, optional: true, required: false
  private _authPortalHtmlFileSizeCur?: number; 
  public get authPortalHtmlFileSizeCur() {
    return this.getNumberAttribute('auth_portal_html_file_size_cur');
  }
  public set authPortalHtmlFileSizeCur(value: number) {
    this._authPortalHtmlFileSizeCur = value;
  }
  public resetAuthPortalHtmlFileSizeCur() {
    this._authPortalHtmlFileSizeCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeCurInput() {
    return this._authPortalHtmlFileSizeCur;
  }

  // auth_portal_html_file_size_default - computed: false, optional: true, required: false
  private _authPortalHtmlFileSizeDefault?: number; 
  public get authPortalHtmlFileSizeDefault() {
    return this.getNumberAttribute('auth_portal_html_file_size_default');
  }
  public set authPortalHtmlFileSizeDefault(value: number) {
    this._authPortalHtmlFileSizeDefault = value;
  }
  public resetAuthPortalHtmlFileSizeDefault() {
    this._authPortalHtmlFileSizeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeDefaultInput() {
    return this._authPortalHtmlFileSizeDefault;
  }

  // auth_portal_html_file_size_max - computed: false, optional: true, required: false
  private _authPortalHtmlFileSizeMax?: number; 
  public get authPortalHtmlFileSizeMax() {
    return this.getNumberAttribute('auth_portal_html_file_size_max');
  }
  public set authPortalHtmlFileSizeMax(value: number) {
    this._authPortalHtmlFileSizeMax = value;
  }
  public resetAuthPortalHtmlFileSizeMax() {
    this._authPortalHtmlFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeMaxInput() {
    return this._authPortalHtmlFileSizeMax;
  }

  // auth_portal_html_file_size_min - computed: false, optional: true, required: false
  private _authPortalHtmlFileSizeMin?: number; 
  public get authPortalHtmlFileSizeMin() {
    return this.getNumberAttribute('auth_portal_html_file_size_min');
  }
  public set authPortalHtmlFileSizeMin(value: number) {
    this._authPortalHtmlFileSizeMin = value;
  }
  public resetAuthPortalHtmlFileSizeMin() {
    this._authPortalHtmlFileSizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeMinInput() {
    return this._authPortalHtmlFileSizeMin;
  }

  // auth_portal_image_file_size_cur - computed: false, optional: true, required: false
  private _authPortalImageFileSizeCur?: number; 
  public get authPortalImageFileSizeCur() {
    return this.getNumberAttribute('auth_portal_image_file_size_cur');
  }
  public set authPortalImageFileSizeCur(value: number) {
    this._authPortalImageFileSizeCur = value;
  }
  public resetAuthPortalImageFileSizeCur() {
    this._authPortalImageFileSizeCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeCurInput() {
    return this._authPortalImageFileSizeCur;
  }

  // auth_portal_image_file_size_default - computed: false, optional: true, required: false
  private _authPortalImageFileSizeDefault?: number; 
  public get authPortalImageFileSizeDefault() {
    return this.getNumberAttribute('auth_portal_image_file_size_default');
  }
  public set authPortalImageFileSizeDefault(value: number) {
    this._authPortalImageFileSizeDefault = value;
  }
  public resetAuthPortalImageFileSizeDefault() {
    this._authPortalImageFileSizeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeDefaultInput() {
    return this._authPortalImageFileSizeDefault;
  }

  // auth_portal_image_file_size_max - computed: false, optional: true, required: false
  private _authPortalImageFileSizeMax?: number; 
  public get authPortalImageFileSizeMax() {
    return this.getNumberAttribute('auth_portal_image_file_size_max');
  }
  public set authPortalImageFileSizeMax(value: number) {
    this._authPortalImageFileSizeMax = value;
  }
  public resetAuthPortalImageFileSizeMax() {
    this._authPortalImageFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeMaxInput() {
    return this._authPortalImageFileSizeMax;
  }

  // auth_portal_image_file_size_min - computed: false, optional: true, required: false
  private _authPortalImageFileSizeMin?: number; 
  public get authPortalImageFileSizeMin() {
    return this.getNumberAttribute('auth_portal_image_file_size_min');
  }
  public set authPortalImageFileSizeMin(value: number) {
    this._authPortalImageFileSizeMin = value;
  }
  public resetAuthPortalImageFileSizeMin() {
    this._authPortalImageFileSizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeMinInput() {
    return this._authPortalImageFileSizeMin;
  }

  // auth_session_count_cur - computed: false, optional: true, required: false
  private _authSessionCountCur?: number; 
  public get authSessionCountCur() {
    return this.getNumberAttribute('auth_session_count_cur');
  }
  public set authSessionCountCur(value: number) {
    this._authSessionCountCur = value;
  }
  public resetAuthSessionCountCur() {
    this._authSessionCountCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountCurInput() {
    return this._authSessionCountCur;
  }

  // auth_session_count_default - computed: false, optional: true, required: false
  private _authSessionCountDefault?: number; 
  public get authSessionCountDefault() {
    return this.getNumberAttribute('auth_session_count_default');
  }
  public set authSessionCountDefault(value: number) {
    this._authSessionCountDefault = value;
  }
  public resetAuthSessionCountDefault() {
    this._authSessionCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountDefaultInput() {
    return this._authSessionCountDefault;
  }

  // auth_session_count_max - computed: false, optional: true, required: false
  private _authSessionCountMax?: number; 
  public get authSessionCountMax() {
    return this.getNumberAttribute('auth_session_count_max');
  }
  public set authSessionCountMax(value: number) {
    this._authSessionCountMax = value;
  }
  public resetAuthSessionCountMax() {
    this._authSessionCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountMaxInput() {
    return this._authSessionCountMax;
  }

  // auth_session_count_min - computed: false, optional: true, required: false
  private _authSessionCountMin?: number; 
  public get authSessionCountMin() {
    return this.getNumberAttribute('auth_session_count_min');
  }
  public set authSessionCountMin(value: number) {
    this._authSessionCountMin = value;
  }
  public resetAuthSessionCountMin() {
    this._authSessionCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountMinInput() {
    return this._authSessionCountMin;
  }

  // authz_policy_number_cur - computed: false, optional: true, required: false
  private _authzPolicyNumberCur?: number; 
  public get authzPolicyNumberCur() {
    return this.getNumberAttribute('authz_policy_number_cur');
  }
  public set authzPolicyNumberCur(value: number) {
    this._authzPolicyNumberCur = value;
  }
  public resetAuthzPolicyNumberCur() {
    this._authzPolicyNumberCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberCurInput() {
    return this._authzPolicyNumberCur;
  }

  // authz_policy_number_default - computed: false, optional: true, required: false
  private _authzPolicyNumberDefault?: number; 
  public get authzPolicyNumberDefault() {
    return this.getNumberAttribute('authz_policy_number_default');
  }
  public set authzPolicyNumberDefault(value: number) {
    this._authzPolicyNumberDefault = value;
  }
  public resetAuthzPolicyNumberDefault() {
    this._authzPolicyNumberDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberDefaultInput() {
    return this._authzPolicyNumberDefault;
  }

  // authz_policy_number_max - computed: false, optional: true, required: false
  private _authzPolicyNumberMax?: number; 
  public get authzPolicyNumberMax() {
    return this.getNumberAttribute('authz_policy_number_max');
  }
  public set authzPolicyNumberMax(value: number) {
    this._authzPolicyNumberMax = value;
  }
  public resetAuthzPolicyNumberMax() {
    this._authzPolicyNumberMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberMaxInput() {
    return this._authzPolicyNumberMax;
  }

  // authz_policy_number_min - computed: false, optional: true, required: false
  private _authzPolicyNumberMin?: number; 
  public get authzPolicyNumberMin() {
    return this.getNumberAttribute('authz_policy_number_min');
  }
  public set authzPolicyNumberMin(value: number) {
    this._authzPolicyNumberMin = value;
  }
  public resetAuthzPolicyNumberMin() {
    this._authzPolicyNumberMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberMinInput() {
    return this._authzPolicyNumberMin;
  }

  // class_list_ac_cur - computed: false, optional: true, required: false
  private _classListAcCur?: number; 
  public get classListAcCur() {
    return this.getNumberAttribute('class_list_ac_cur');
  }
  public set classListAcCur(value: number) {
    this._classListAcCur = value;
  }
  public resetClassListAcCur() {
    this._classListAcCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcCurInput() {
    return this._classListAcCur;
  }

  // class_list_ac_default - computed: false, optional: true, required: false
  private _classListAcDefault?: number; 
  public get classListAcDefault() {
    return this.getNumberAttribute('class_list_ac_default');
  }
  public set classListAcDefault(value: number) {
    this._classListAcDefault = value;
  }
  public resetClassListAcDefault() {
    this._classListAcDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcDefaultInput() {
    return this._classListAcDefault;
  }

  // class_list_ac_max - computed: false, optional: true, required: false
  private _classListAcMax?: number; 
  public get classListAcMax() {
    return this.getNumberAttribute('class_list_ac_max');
  }
  public set classListAcMax(value: number) {
    this._classListAcMax = value;
  }
  public resetClassListAcMax() {
    this._classListAcMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcMaxInput() {
    return this._classListAcMax;
  }

  // class_list_ac_min - computed: false, optional: true, required: false
  private _classListAcMin?: number; 
  public get classListAcMin() {
    return this.getNumberAttribute('class_list_ac_min');
  }
  public set classListAcMin(value: number) {
    this._classListAcMin = value;
  }
  public resetClassListAcMin() {
    this._classListAcMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcMinInput() {
    return this._classListAcMin;
  }

  // class_list_entry_cur - computed: false, optional: true, required: false
  private _classListEntryCur?: number; 
  public get classListEntryCur() {
    return this.getNumberAttribute('class_list_entry_cur');
  }
  public set classListEntryCur(value: number) {
    this._classListEntryCur = value;
  }
  public resetClassListEntryCur() {
    this._classListEntryCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryCurInput() {
    return this._classListEntryCur;
  }

  // class_list_entry_default - computed: false, optional: true, required: false
  private _classListEntryDefault?: number; 
  public get classListEntryDefault() {
    return this.getNumberAttribute('class_list_entry_default');
  }
  public set classListEntryDefault(value: number) {
    this._classListEntryDefault = value;
  }
  public resetClassListEntryDefault() {
    this._classListEntryDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryDefaultInput() {
    return this._classListEntryDefault;
  }

  // class_list_entry_max - computed: false, optional: true, required: false
  private _classListEntryMax?: number; 
  public get classListEntryMax() {
    return this.getNumberAttribute('class_list_entry_max');
  }
  public set classListEntryMax(value: number) {
    this._classListEntryMax = value;
  }
  public resetClassListEntryMax() {
    this._classListEntryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryMaxInput() {
    return this._classListEntryMax;
  }

  // class_list_entry_min - computed: false, optional: true, required: false
  private _classListEntryMin?: number; 
  public get classListEntryMin() {
    return this.getNumberAttribute('class_list_entry_min');
  }
  public set classListEntryMin(value: number) {
    this._classListEntryMin = value;
  }
  public resetClassListEntryMin() {
    this._classListEntryMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryMinInput() {
    return this._classListEntryMin;
  }

  // class_list_ipv6_addr_cur - computed: false, optional: true, required: false
  private _classListIpv6AddrCur?: number; 
  public get classListIpv6AddrCur() {
    return this.getNumberAttribute('class_list_ipv6_addr_cur');
  }
  public set classListIpv6AddrCur(value: number) {
    this._classListIpv6AddrCur = value;
  }
  public resetClassListIpv6AddrCur() {
    this._classListIpv6AddrCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrCurInput() {
    return this._classListIpv6AddrCur;
  }

  // class_list_ipv6_addr_default - computed: false, optional: true, required: false
  private _classListIpv6AddrDefault?: number; 
  public get classListIpv6AddrDefault() {
    return this.getNumberAttribute('class_list_ipv6_addr_default');
  }
  public set classListIpv6AddrDefault(value: number) {
    this._classListIpv6AddrDefault = value;
  }
  public resetClassListIpv6AddrDefault() {
    this._classListIpv6AddrDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrDefaultInput() {
    return this._classListIpv6AddrDefault;
  }

  // class_list_ipv6_addr_max - computed: false, optional: true, required: false
  private _classListIpv6AddrMax?: number; 
  public get classListIpv6AddrMax() {
    return this.getNumberAttribute('class_list_ipv6_addr_max');
  }
  public set classListIpv6AddrMax(value: number) {
    this._classListIpv6AddrMax = value;
  }
  public resetClassListIpv6AddrMax() {
    this._classListIpv6AddrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrMaxInput() {
    return this._classListIpv6AddrMax;
  }

  // class_list_ipv6_addr_min - computed: false, optional: true, required: false
  private _classListIpv6AddrMin?: number; 
  public get classListIpv6AddrMin() {
    return this.getNumberAttribute('class_list_ipv6_addr_min');
  }
  public set classListIpv6AddrMin(value: number) {
    this._classListIpv6AddrMin = value;
  }
  public resetClassListIpv6AddrMin() {
    this._classListIpv6AddrMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrMinInput() {
    return this._classListIpv6AddrMin;
  }

  // ipsec_sa_number_cur - computed: false, optional: true, required: false
  private _ipsecSaNumberCur?: number; 
  public get ipsecSaNumberCur() {
    return this.getNumberAttribute('ipsec_sa_number_cur');
  }
  public set ipsecSaNumberCur(value: number) {
    this._ipsecSaNumberCur = value;
  }
  public resetIpsecSaNumberCur() {
    this._ipsecSaNumberCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberCurInput() {
    return this._ipsecSaNumberCur;
  }

  // ipsec_sa_number_default - computed: false, optional: true, required: false
  private _ipsecSaNumberDefault?: number; 
  public get ipsecSaNumberDefault() {
    return this.getNumberAttribute('ipsec_sa_number_default');
  }
  public set ipsecSaNumberDefault(value: number) {
    this._ipsecSaNumberDefault = value;
  }
  public resetIpsecSaNumberDefault() {
    this._ipsecSaNumberDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberDefaultInput() {
    return this._ipsecSaNumberDefault;
  }

  // ipsec_sa_number_max - computed: false, optional: true, required: false
  private _ipsecSaNumberMax?: number; 
  public get ipsecSaNumberMax() {
    return this.getNumberAttribute('ipsec_sa_number_max');
  }
  public set ipsecSaNumberMax(value: number) {
    this._ipsecSaNumberMax = value;
  }
  public resetIpsecSaNumberMax() {
    this._ipsecSaNumberMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberMaxInput() {
    return this._ipsecSaNumberMax;
  }

  // ipsec_sa_number_min - computed: false, optional: true, required: false
  private _ipsecSaNumberMin?: number; 
  public get ipsecSaNumberMin() {
    return this.getNumberAttribute('ipsec_sa_number_min');
  }
  public set ipsecSaNumberMin(value: number) {
    this._ipsecSaNumberMin = value;
  }
  public resetIpsecSaNumberMin() {
    this._ipsecSaNumberMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberMinInput() {
    return this._ipsecSaNumberMin;
  }

  // l4_session_count_cur - computed: false, optional: true, required: false
  private _l4SessionCountCur?: number; 
  public get l4SessionCountCur() {
    return this.getNumberAttribute('l4_session_count_cur');
  }
  public set l4SessionCountCur(value: number) {
    this._l4SessionCountCur = value;
  }
  public resetL4SessionCountCur() {
    this._l4SessionCountCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountCurInput() {
    return this._l4SessionCountCur;
  }

  // l4_session_count_default - computed: false, optional: true, required: false
  private _l4SessionCountDefault?: number; 
  public get l4SessionCountDefault() {
    return this.getNumberAttribute('l4_session_count_default');
  }
  public set l4SessionCountDefault(value: number) {
    this._l4SessionCountDefault = value;
  }
  public resetL4SessionCountDefault() {
    this._l4SessionCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountDefaultInput() {
    return this._l4SessionCountDefault;
  }

  // l4_session_count_max - computed: false, optional: true, required: false
  private _l4SessionCountMax?: number; 
  public get l4SessionCountMax() {
    return this.getNumberAttribute('l4_session_count_max');
  }
  public set l4SessionCountMax(value: number) {
    this._l4SessionCountMax = value;
  }
  public resetL4SessionCountMax() {
    this._l4SessionCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountMaxInput() {
    return this._l4SessionCountMax;
  }

  // l4_session_count_min - computed: false, optional: true, required: false
  private _l4SessionCountMin?: number; 
  public get l4SessionCountMin() {
    return this.getNumberAttribute('l4_session_count_min');
  }
  public set l4SessionCountMin(value: number) {
    this._l4SessionCountMin = value;
  }
  public resetL4SessionCountMin() {
    this._l4SessionCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountMinInput() {
    return this._l4SessionCountMin;
  }

  // nat_pool_addr_cur - computed: false, optional: true, required: false
  private _natPoolAddrCur?: number; 
  public get natPoolAddrCur() {
    return this.getNumberAttribute('nat_pool_addr_cur');
  }
  public set natPoolAddrCur(value: number) {
    this._natPoolAddrCur = value;
  }
  public resetNatPoolAddrCur() {
    this._natPoolAddrCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrCurInput() {
    return this._natPoolAddrCur;
  }

  // nat_pool_addr_default - computed: false, optional: true, required: false
  private _natPoolAddrDefault?: number; 
  public get natPoolAddrDefault() {
    return this.getNumberAttribute('nat_pool_addr_default');
  }
  public set natPoolAddrDefault(value: number) {
    this._natPoolAddrDefault = value;
  }
  public resetNatPoolAddrDefault() {
    this._natPoolAddrDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrDefaultInput() {
    return this._natPoolAddrDefault;
  }

  // nat_pool_addr_max - computed: false, optional: true, required: false
  private _natPoolAddrMax?: number; 
  public get natPoolAddrMax() {
    return this.getNumberAttribute('nat_pool_addr_max');
  }
  public set natPoolAddrMax(value: number) {
    this._natPoolAddrMax = value;
  }
  public resetNatPoolAddrMax() {
    this._natPoolAddrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrMaxInput() {
    return this._natPoolAddrMax;
  }

  // nat_pool_addr_min - computed: false, optional: true, required: false
  private _natPoolAddrMin?: number; 
  public get natPoolAddrMin() {
    return this.getNumberAttribute('nat_pool_addr_min');
  }
  public set natPoolAddrMin(value: number) {
    this._natPoolAddrMin = value;
  }
  public resetNatPoolAddrMin() {
    this._natPoolAddrMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrMinInput() {
    return this._natPoolAddrMin;
  }

  // radius_table_size_cur - computed: false, optional: true, required: false
  private _radiusTableSizeCur?: number; 
  public get radiusTableSizeCur() {
    return this.getNumberAttribute('radius_table_size_cur');
  }
  public set radiusTableSizeCur(value: number) {
    this._radiusTableSizeCur = value;
  }
  public resetRadiusTableSizeCur() {
    this._radiusTableSizeCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeCurInput() {
    return this._radiusTableSizeCur;
  }

  // radius_table_size_default - computed: false, optional: true, required: false
  private _radiusTableSizeDefault?: number; 
  public get radiusTableSizeDefault() {
    return this.getNumberAttribute('radius_table_size_default');
  }
  public set radiusTableSizeDefault(value: number) {
    this._radiusTableSizeDefault = value;
  }
  public resetRadiusTableSizeDefault() {
    this._radiusTableSizeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeDefaultInput() {
    return this._radiusTableSizeDefault;
  }

  // radius_table_size_max - computed: false, optional: true, required: false
  private _radiusTableSizeMax?: number; 
  public get radiusTableSizeMax() {
    return this.getNumberAttribute('radius_table_size_max');
  }
  public set radiusTableSizeMax(value: number) {
    this._radiusTableSizeMax = value;
  }
  public resetRadiusTableSizeMax() {
    this._radiusTableSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeMaxInput() {
    return this._radiusTableSizeMax;
  }

  // radius_table_size_min - computed: false, optional: true, required: false
  private _radiusTableSizeMin?: number; 
  public get radiusTableSizeMin() {
    return this.getNumberAttribute('radius_table_size_min');
  }
  public set radiusTableSizeMin(value: number) {
    this._radiusTableSizeMin = value;
  }
  public resetRadiusTableSizeMin() {
    this._radiusTableSizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeMinInput() {
    return this._radiusTableSizeMin;
  }

  // ram_cache_memory_limit_cur - computed: false, optional: true, required: false
  private _ramCacheMemoryLimitCur?: number; 
  public get ramCacheMemoryLimitCur() {
    return this.getNumberAttribute('ram_cache_memory_limit_cur');
  }
  public set ramCacheMemoryLimitCur(value: number) {
    this._ramCacheMemoryLimitCur = value;
  }
  public resetRamCacheMemoryLimitCur() {
    this._ramCacheMemoryLimitCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitCurInput() {
    return this._ramCacheMemoryLimitCur;
  }

  // ram_cache_memory_limit_default - computed: false, optional: true, required: false
  private _ramCacheMemoryLimitDefault?: number; 
  public get ramCacheMemoryLimitDefault() {
    return this.getNumberAttribute('ram_cache_memory_limit_default');
  }
  public set ramCacheMemoryLimitDefault(value: number) {
    this._ramCacheMemoryLimitDefault = value;
  }
  public resetRamCacheMemoryLimitDefault() {
    this._ramCacheMemoryLimitDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitDefaultInput() {
    return this._ramCacheMemoryLimitDefault;
  }

  // ram_cache_memory_limit_max - computed: false, optional: true, required: false
  private _ramCacheMemoryLimitMax?: number; 
  public get ramCacheMemoryLimitMax() {
    return this.getNumberAttribute('ram_cache_memory_limit_max');
  }
  public set ramCacheMemoryLimitMax(value: number) {
    this._ramCacheMemoryLimitMax = value;
  }
  public resetRamCacheMemoryLimitMax() {
    this._ramCacheMemoryLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitMaxInput() {
    return this._ramCacheMemoryLimitMax;
  }

  // ram_cache_memory_limit_min - computed: false, optional: true, required: false
  private _ramCacheMemoryLimitMin?: number; 
  public get ramCacheMemoryLimitMin() {
    return this.getNumberAttribute('ram_cache_memory_limit_min');
  }
  public set ramCacheMemoryLimitMin(value: number) {
    this._ramCacheMemoryLimitMin = value;
  }
  public resetRamCacheMemoryLimitMin() {
    this._ramCacheMemoryLimitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitMinInput() {
    return this._ramCacheMemoryLimitMin;
  }

  // visibility_mon_entity_cur - computed: false, optional: true, required: false
  private _visibilityMonEntityCur?: number; 
  public get visibilityMonEntityCur() {
    return this.getNumberAttribute('visibility_mon_entity_cur');
  }
  public set visibilityMonEntityCur(value: number) {
    this._visibilityMonEntityCur = value;
  }
  public resetVisibilityMonEntityCur() {
    this._visibilityMonEntityCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityMonEntityCurInput() {
    return this._visibilityMonEntityCur;
  }

  // visibility_mon_entity_default - computed: false, optional: true, required: false
  private _visibilityMonEntityDefault?: number; 
  public get visibilityMonEntityDefault() {
    return this.getNumberAttribute('visibility_mon_entity_default');
  }
  public set visibilityMonEntityDefault(value: number) {
    this._visibilityMonEntityDefault = value;
  }
  public resetVisibilityMonEntityDefault() {
    this._visibilityMonEntityDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityMonEntityDefaultInput() {
    return this._visibilityMonEntityDefault;
  }

  // visibility_mon_entity_max - computed: false, optional: true, required: false
  private _visibilityMonEntityMax?: number; 
  public get visibilityMonEntityMax() {
    return this.getNumberAttribute('visibility_mon_entity_max');
  }
  public set visibilityMonEntityMax(value: number) {
    this._visibilityMonEntityMax = value;
  }
  public resetVisibilityMonEntityMax() {
    this._visibilityMonEntityMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityMonEntityMaxInput() {
    return this._visibilityMonEntityMax;
  }

  // visibility_mon_entity_min - computed: false, optional: true, required: false
  private _visibilityMonEntityMin?: number; 
  public get visibilityMonEntityMin() {
    return this.getNumberAttribute('visibility_mon_entity_min');
  }
  public set visibilityMonEntityMin(value: number) {
    this._visibilityMonEntityMin = value;
  }
  public resetVisibilityMonEntityMin() {
    this._visibilityMonEntityMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityMonEntityMinInput() {
    return this._visibilityMonEntityMin;
  }

  // waf_template_cur - computed: false, optional: true, required: false
  private _wafTemplateCur?: number; 
  public get wafTemplateCur() {
    return this.getNumberAttribute('waf_template_cur');
  }
  public set wafTemplateCur(value: number) {
    this._wafTemplateCur = value;
  }
  public resetWafTemplateCur() {
    this._wafTemplateCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTemplateCurInput() {
    return this._wafTemplateCur;
  }

  // waf_template_default - computed: false, optional: true, required: false
  private _wafTemplateDefault?: number; 
  public get wafTemplateDefault() {
    return this.getNumberAttribute('waf_template_default');
  }
  public set wafTemplateDefault(value: number) {
    this._wafTemplateDefault = value;
  }
  public resetWafTemplateDefault() {
    this._wafTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTemplateDefaultInput() {
    return this._wafTemplateDefault;
  }

  // waf_template_max - computed: false, optional: true, required: false
  private _wafTemplateMax?: number; 
  public get wafTemplateMax() {
    return this.getNumberAttribute('waf_template_max');
  }
  public set wafTemplateMax(value: number) {
    this._wafTemplateMax = value;
  }
  public resetWafTemplateMax() {
    this._wafTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTemplateMaxInput() {
    return this._wafTemplateMax;
  }

  // waf_template_min - computed: false, optional: true, required: false
  private _wafTemplateMin?: number; 
  public get wafTemplateMin() {
    return this.getNumberAttribute('waf_template_min');
  }
  public set wafTemplateMin(value: number) {
    this._wafTemplateMin = value;
  }
  public resetWafTemplateMin() {
    this._wafTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTemplateMinInput() {
    return this._wafTemplateMin;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper thunder_system_resource_usage_oper}
*/
export class DataThunderSystemResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderSystemResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_usage_oper thunder_system_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_usage_oper',
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
  private _oper = new DataThunderSystemResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemResourceUsageOperOper) {
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
      oper: dataThunderSystemResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
