// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceUsageAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Total aFleX table entry in the system (Total aFlex entry in the system)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#aflex_table_entry_count SystemResourceUsageA#aflex_table_entry_count}
  */
  readonly aflexTableEntryCount?: number;
  /**
  * Specify maximum html file size for each html page in auth portal (in KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#auth_portal_html_file_size SystemResourceUsageA#auth_portal_html_file_size}
  */
  readonly authPortalHtmlFileSize?: number;
  /**
  * Specify maximum image file size for default portal (in KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#auth_portal_image_file_size SystemResourceUsageA#auth_portal_image_file_size}
  */
  readonly authPortalImageFileSize?: number;
  /**
  * Total auth sessions in the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#auth_session_count SystemResourceUsageA#auth_session_count}
  */
  readonly authSessionCount?: number;
  /**
  * Specify the maximum number of authorization policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#authz_policy_number SystemResourceUsageA#authz_policy_number}
  */
  readonly authzPolicyNumber?: number;
  /**
  * Total entries for AC class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#class_list_ac_entry_count SystemResourceUsageA#class_list_ac_entry_count}
  */
  readonly classListAcEntryCount?: number;
  /**
  * Total entries for class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#class_list_entry_count SystemResourceUsageA#class_list_entry_count}
  */
  readonly classListEntryCount?: number;
  /**
  * Total IPv6 addresses for class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#class_list_ipv6_addr_count SystemResourceUsageA#class_list_ipv6_addr_count}
  */
  readonly classListIpv6AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#id SystemResourceUsageA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the maximum number of IPsec SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#ipsec_sa_number SystemResourceUsageA#ipsec_sa_number}
  */
  readonly ipsecSaNumber?: number;
  /**
  * Total Sessions in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#l4_session_count SystemResourceUsageA#l4_session_count}
  */
  readonly l4SessionCount?: number;
  /**
  * Specify the maximum number of collections supported by aFleX authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#max_aflex_authz_collection_number SystemResourceUsageA#max_aflex_authz_collection_number}
  */
  readonly maxAflexAuthzCollectionNumber?: number;
  /**
  * Set maximum aFleX file size (Maximum file size in KBytes, default is 32K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#max_aflex_file_size SystemResourceUsageA#max_aflex_file_size}
  */
  readonly maxAflexFileSize?: number;
  /**
  * Total configurable NAT Pool addresses in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#nat_pool_addr_count SystemResourceUsageA#nat_pool_addr_count}
  */
  readonly natPoolAddrCount?: number;
  /**
  * Specify the maximum cache entries for NGWAF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#ngwaf_cache_entry SystemResourceUsageA#ngwaf_cache_entry}
  */
  readonly ngwafCacheEntry?: number;
  /**
  * Total configurable CGNV6 RADIUS Table entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#radius_table_size SystemResourceUsageA#radius_table_size}
  */
  readonly radiusTableSize?: number;
  /**
  * Specify the maximum memory used by ram cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#ram_cache_memory_limit SystemResourceUsageA#ram_cache_memory_limit}
  */
  readonly ramCacheMemoryLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#uuid SystemResourceUsageA#uuid}
  */
  readonly uuid?: string;
  /**
  * visibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#visibility SystemResourceUsageA#visibility}
  */
  readonly visibility?: SystemResourceUsageVisibilityA;
}
export interface SystemResourceUsageVisibilityA {
  /**
  * Total number of monitored entities for visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#monitored_entity_count SystemResourceUsageA#monitored_entity_count}
  */
  readonly monitoredEntityCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#uuid SystemResourceUsageA#uuid}
  */
  readonly uuid?: string;
}

export function systemResourceUsageVisibilityAToTerraform(struct?: SystemResourceUsageVisibilityAOutputReference | SystemResourceUsageVisibilityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitored_entity_count: cdktf.numberToTerraform(struct!.monitoredEntityCount),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemResourceUsageVisibilityAToHclTerraform(struct?: SystemResourceUsageVisibilityAOutputReference | SystemResourceUsageVisibilityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitored_entity_count: {
      value: cdktf.numberToHclTerraform(struct!.monitoredEntityCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceUsageVisibilityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceUsageVisibilityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoredEntityCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredEntityCount = this._monitoredEntityCount;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceUsageVisibilityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitoredEntityCount = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitoredEntityCount = value.monitoredEntityCount;
      this._uuid = value.uuid;
    }
  }

  // monitored_entity_count - computed: false, optional: true, required: false
  private _monitoredEntityCount?: number; 
  public get monitoredEntityCount() {
    return this.getNumberAttribute('monitored_entity_count');
  }
  public set monitoredEntityCount(value: number) {
    this._monitoredEntityCount = value;
  }
  public resetMonitoredEntityCount() {
    this._monitoredEntityCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredEntityCountInput() {
    return this._monitoredEntityCount;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage thunder_system_resource_usage}
*/
export class SystemResourceUsageA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceUsageA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceUsageA to import
  * @param importFromId The id of the existing SystemResourceUsageA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceUsageA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage thunder_system_resource_usage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceUsageAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemResourceUsageAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_usage',
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
    this._aflexTableEntryCount = config.aflexTableEntryCount;
    this._authPortalHtmlFileSize = config.authPortalHtmlFileSize;
    this._authPortalImageFileSize = config.authPortalImageFileSize;
    this._authSessionCount = config.authSessionCount;
    this._authzPolicyNumber = config.authzPolicyNumber;
    this._classListAcEntryCount = config.classListAcEntryCount;
    this._classListEntryCount = config.classListEntryCount;
    this._classListIpv6AddrCount = config.classListIpv6AddrCount;
    this._id = config.id;
    this._ipsecSaNumber = config.ipsecSaNumber;
    this._l4SessionCount = config.l4SessionCount;
    this._maxAflexAuthzCollectionNumber = config.maxAflexAuthzCollectionNumber;
    this._maxAflexFileSize = config.maxAflexFileSize;
    this._natPoolAddrCount = config.natPoolAddrCount;
    this._ngwafCacheEntry = config.ngwafCacheEntry;
    this._radiusTableSize = config.radiusTableSize;
    this._ramCacheMemoryLimit = config.ramCacheMemoryLimit;
    this._uuid = config.uuid;
    this._visibility.internalValue = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflex_table_entry_count - computed: false, optional: true, required: false
  private _aflexTableEntryCount?: number; 
  public get aflexTableEntryCount() {
    return this.getNumberAttribute('aflex_table_entry_count');
  }
  public set aflexTableEntryCount(value: number) {
    this._aflexTableEntryCount = value;
  }
  public resetAflexTableEntryCount() {
    this._aflexTableEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountInput() {
    return this._aflexTableEntryCount;
  }

  // auth_portal_html_file_size - computed: false, optional: true, required: false
  private _authPortalHtmlFileSize?: number; 
  public get authPortalHtmlFileSize() {
    return this.getNumberAttribute('auth_portal_html_file_size');
  }
  public set authPortalHtmlFileSize(value: number) {
    this._authPortalHtmlFileSize = value;
  }
  public resetAuthPortalHtmlFileSize() {
    this._authPortalHtmlFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeInput() {
    return this._authPortalHtmlFileSize;
  }

  // auth_portal_image_file_size - computed: false, optional: true, required: false
  private _authPortalImageFileSize?: number; 
  public get authPortalImageFileSize() {
    return this.getNumberAttribute('auth_portal_image_file_size');
  }
  public set authPortalImageFileSize(value: number) {
    this._authPortalImageFileSize = value;
  }
  public resetAuthPortalImageFileSize() {
    this._authPortalImageFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeInput() {
    return this._authPortalImageFileSize;
  }

  // auth_session_count - computed: false, optional: true, required: false
  private _authSessionCount?: number; 
  public get authSessionCount() {
    return this.getNumberAttribute('auth_session_count');
  }
  public set authSessionCount(value: number) {
    this._authSessionCount = value;
  }
  public resetAuthSessionCount() {
    this._authSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountInput() {
    return this._authSessionCount;
  }

  // authz_policy_number - computed: false, optional: true, required: false
  private _authzPolicyNumber?: number; 
  public get authzPolicyNumber() {
    return this.getNumberAttribute('authz_policy_number');
  }
  public set authzPolicyNumber(value: number) {
    this._authzPolicyNumber = value;
  }
  public resetAuthzPolicyNumber() {
    this._authzPolicyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberInput() {
    return this._authzPolicyNumber;
  }

  // class_list_ac_entry_count - computed: false, optional: true, required: false
  private _classListAcEntryCount?: number; 
  public get classListAcEntryCount() {
    return this.getNumberAttribute('class_list_ac_entry_count');
  }
  public set classListAcEntryCount(value: number) {
    this._classListAcEntryCount = value;
  }
  public resetClassListAcEntryCount() {
    this._classListAcEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcEntryCountInput() {
    return this._classListAcEntryCount;
  }

  // class_list_entry_count - computed: false, optional: true, required: false
  private _classListEntryCount?: number; 
  public get classListEntryCount() {
    return this.getNumberAttribute('class_list_entry_count');
  }
  public set classListEntryCount(value: number) {
    this._classListEntryCount = value;
  }
  public resetClassListEntryCount() {
    this._classListEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryCountInput() {
    return this._classListEntryCount;
  }

  // class_list_ipv6_addr_count - computed: false, optional: true, required: false
  private _classListIpv6AddrCount?: number; 
  public get classListIpv6AddrCount() {
    return this.getNumberAttribute('class_list_ipv6_addr_count');
  }
  public set classListIpv6AddrCount(value: number) {
    this._classListIpv6AddrCount = value;
  }
  public resetClassListIpv6AddrCount() {
    this._classListIpv6AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrCountInput() {
    return this._classListIpv6AddrCount;
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

  // ipsec_sa_number - computed: false, optional: true, required: false
  private _ipsecSaNumber?: number; 
  public get ipsecSaNumber() {
    return this.getNumberAttribute('ipsec_sa_number');
  }
  public set ipsecSaNumber(value: number) {
    this._ipsecSaNumber = value;
  }
  public resetIpsecSaNumber() {
    this._ipsecSaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberInput() {
    return this._ipsecSaNumber;
  }

  // l4_session_count - computed: false, optional: true, required: false
  private _l4SessionCount?: number; 
  public get l4SessionCount() {
    return this.getNumberAttribute('l4_session_count');
  }
  public set l4SessionCount(value: number) {
    this._l4SessionCount = value;
  }
  public resetL4SessionCount() {
    this._l4SessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountInput() {
    return this._l4SessionCount;
  }

  // max_aflex_authz_collection_number - computed: false, optional: true, required: false
  private _maxAflexAuthzCollectionNumber?: number; 
  public get maxAflexAuthzCollectionNumber() {
    return this.getNumberAttribute('max_aflex_authz_collection_number');
  }
  public set maxAflexAuthzCollectionNumber(value: number) {
    this._maxAflexAuthzCollectionNumber = value;
  }
  public resetMaxAflexAuthzCollectionNumber() {
    this._maxAflexAuthzCollectionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAflexAuthzCollectionNumberInput() {
    return this._maxAflexAuthzCollectionNumber;
  }

  // max_aflex_file_size - computed: false, optional: true, required: false
  private _maxAflexFileSize?: number; 
  public get maxAflexFileSize() {
    return this.getNumberAttribute('max_aflex_file_size');
  }
  public set maxAflexFileSize(value: number) {
    this._maxAflexFileSize = value;
  }
  public resetMaxAflexFileSize() {
    this._maxAflexFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAflexFileSizeInput() {
    return this._maxAflexFileSize;
  }

  // nat_pool_addr_count - computed: false, optional: true, required: false
  private _natPoolAddrCount?: number; 
  public get natPoolAddrCount() {
    return this.getNumberAttribute('nat_pool_addr_count');
  }
  public set natPoolAddrCount(value: number) {
    this._natPoolAddrCount = value;
  }
  public resetNatPoolAddrCount() {
    this._natPoolAddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrCountInput() {
    return this._natPoolAddrCount;
  }

  // ngwaf_cache_entry - computed: false, optional: true, required: false
  private _ngwafCacheEntry?: number; 
  public get ngwafCacheEntry() {
    return this.getNumberAttribute('ngwaf_cache_entry');
  }
  public set ngwafCacheEntry(value: number) {
    this._ngwafCacheEntry = value;
  }
  public resetNgwafCacheEntry() {
    this._ngwafCacheEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafCacheEntryInput() {
    return this._ngwafCacheEntry;
  }

  // radius_table_size - computed: false, optional: true, required: false
  private _radiusTableSize?: number; 
  public get radiusTableSize() {
    return this.getNumberAttribute('radius_table_size');
  }
  public set radiusTableSize(value: number) {
    this._radiusTableSize = value;
  }
  public resetRadiusTableSize() {
    this._radiusTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeInput() {
    return this._radiusTableSize;
  }

  // ram_cache_memory_limit - computed: false, optional: true, required: false
  private _ramCacheMemoryLimit?: number; 
  public get ramCacheMemoryLimit() {
    return this.getNumberAttribute('ram_cache_memory_limit');
  }
  public set ramCacheMemoryLimit(value: number) {
    this._ramCacheMemoryLimit = value;
  }
  public resetRamCacheMemoryLimit() {
    this._ramCacheMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitInput() {
    return this._ramCacheMemoryLimit;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility = new SystemResourceUsageVisibilityAOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
  public putVisibility(value: SystemResourceUsageVisibilityA) {
    this._visibility.internalValue = value;
  }
  public resetVisibility() {
    this._visibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aflex_table_entry_count: cdktf.numberToTerraform(this._aflexTableEntryCount),
      auth_portal_html_file_size: cdktf.numberToTerraform(this._authPortalHtmlFileSize),
      auth_portal_image_file_size: cdktf.numberToTerraform(this._authPortalImageFileSize),
      auth_session_count: cdktf.numberToTerraform(this._authSessionCount),
      authz_policy_number: cdktf.numberToTerraform(this._authzPolicyNumber),
      class_list_ac_entry_count: cdktf.numberToTerraform(this._classListAcEntryCount),
      class_list_entry_count: cdktf.numberToTerraform(this._classListEntryCount),
      class_list_ipv6_addr_count: cdktf.numberToTerraform(this._classListIpv6AddrCount),
      id: cdktf.stringToTerraform(this._id),
      ipsec_sa_number: cdktf.numberToTerraform(this._ipsecSaNumber),
      l4_session_count: cdktf.numberToTerraform(this._l4SessionCount),
      max_aflex_authz_collection_number: cdktf.numberToTerraform(this._maxAflexAuthzCollectionNumber),
      max_aflex_file_size: cdktf.numberToTerraform(this._maxAflexFileSize),
      nat_pool_addr_count: cdktf.numberToTerraform(this._natPoolAddrCount),
      ngwaf_cache_entry: cdktf.numberToTerraform(this._ngwafCacheEntry),
      radius_table_size: cdktf.numberToTerraform(this._radiusTableSize),
      ram_cache_memory_limit: cdktf.numberToTerraform(this._ramCacheMemoryLimit),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: systemResourceUsageVisibilityAToTerraform(this._visibility.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflex_table_entry_count: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_portal_html_file_size: {
        value: cdktf.numberToHclTerraform(this._authPortalHtmlFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_portal_image_file_size: {
        value: cdktf.numberToHclTerraform(this._authPortalImageFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_session_count: {
        value: cdktf.numberToHclTerraform(this._authSessionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authz_policy_number: {
        value: cdktf.numberToHclTerraform(this._authzPolicyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_list_ac_entry_count: {
        value: cdktf.numberToHclTerraform(this._classListAcEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_list_entry_count: {
        value: cdktf.numberToHclTerraform(this._classListEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_list_ipv6_addr_count: {
        value: cdktf.numberToHclTerraform(this._classListIpv6AddrCount),
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
      ipsec_sa_number: {
        value: cdktf.numberToHclTerraform(this._ipsecSaNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_count: {
        value: cdktf.numberToHclTerraform(this._l4SessionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_aflex_authz_collection_number: {
        value: cdktf.numberToHclTerraform(this._maxAflexAuthzCollectionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_aflex_file_size: {
        value: cdktf.numberToHclTerraform(this._maxAflexFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_pool_addr_count: {
        value: cdktf.numberToHclTerraform(this._natPoolAddrCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ngwaf_cache_entry: {
        value: cdktf.numberToHclTerraform(this._ngwafCacheEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_table_size: {
        value: cdktf.numberToHclTerraform(this._radiusTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ram_cache_memory_limit: {
        value: cdktf.numberToHclTerraform(this._ramCacheMemoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: systemResourceUsageVisibilityAToHclTerraform(this._visibility.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceUsageVisibilityAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
