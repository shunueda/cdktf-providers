// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * DRL mode of SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#drl_mode Sds#drl_mode}
  */
  readonly drlMode?: string;
  /**
  * Fault set id of SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#fault_set_id Sds#fault_set_id}
  */
  readonly faultSetId?: string;
  /**
  * List of IPs to be assigned to the SDS. There must be at least one IP with `all` role or at least two IPs, one with role `sdcOnly` and the other with role `sdsOnly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#ip_list Sds#ip_list}
  */
  readonly ipList: SdsIpListStruct[] | cdktf.IResolvable;
  /**
  * Name of SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#name Sds#name}
  */
  readonly name: string;
  /**
  * Performance Profile of SDS. Valid values are `Compact` and `HighPerformance`. Default value is determined by array settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#performance_profile Sds#performance_profile}
  */
  readonly performanceProfile?: string;
  /**
  * Port of SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#port Sds#port}
  */
  readonly port?: number;
  /**
  * ID of the Protection Domain under which the SDS will be created. Conflicts with `protection_domain_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#protection_domain_id Sds#protection_domain_id}
  */
  readonly protectionDomainId?: string;
  /**
  * Name of the Protection Domain under which the SDS will be created. Conflicts with `protection_domain_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#protection_domain_name Sds#protection_domain_name}
  */
  readonly protectionDomainName?: string;
  /**
  * Rfcache enabled state of SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#rfcache_enabled Sds#rfcache_enabled}
  */
  readonly rfcacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rmcache enabled state of SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#rmcache_enabled Sds#rmcache_enabled}
  */
  readonly rmcacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Read RAM cache size in MB of SDS. Can be set only when `rmcache_enabled` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#rmcache_size_in_mb Sds#rmcache_size_in_mb}
  */
  readonly rmcacheSizeInMb?: number;
}
export interface SdsIpListStruct {
  /**
  * IP address to be assigned to the SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#ip Sds#ip}
  */
  readonly ip: string;
  /**
  * Role to be assigned to the IP address. Valid values are `all`, `sdcOnly` and `sdsOnly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#role Sds#role}
  */
  readonly role: string;
}

export function sdsIpListStructToTerraform(struct?: SdsIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function sdsIpListStructToHclTerraform(struct?: SdsIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdsIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdsIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._role = value.role;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SdsIpListStructList extends cdktf.ComplexList {
  public internalValue? : SdsIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): SdsIpListStructOutputReference {
    return new SdsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds powerflex_sds}
*/
export class Sds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_sds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sds to import
  * @param importFromId The id of the existing Sds that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_sds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sds powerflex_sds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdsConfig
  */
  public constructor(scope: Construct, id: string, config: SdsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_sds',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._drlMode = config.drlMode;
    this._faultSetId = config.faultSetId;
    this._ipList.internalValue = config.ipList;
    this._name = config.name;
    this._performanceProfile = config.performanceProfile;
    this._port = config.port;
    this._protectionDomainId = config.protectionDomainId;
    this._protectionDomainName = config.protectionDomainName;
    this._rfcacheEnabled = config.rfcacheEnabled;
    this._rmcacheEnabled = config.rmcacheEnabled;
    this._rmcacheSizeInMb = config.rmcacheSizeInMb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drl_mode - computed: true, optional: true, required: false
  private _drlMode?: string; 
  public get drlMode() {
    return this.getStringAttribute('drl_mode');
  }
  public set drlMode(value: string) {
    this._drlMode = value;
  }
  public resetDrlMode() {
    this._drlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drlModeInput() {
    return this._drlMode;
  }

  // fault_set_id - computed: true, optional: true, required: false
  private _faultSetId?: string; 
  public get faultSetId() {
    return this.getStringAttribute('fault_set_id');
  }
  public set faultSetId(value: string) {
    this._faultSetId = value;
  }
  public resetFaultSetId() {
    this._faultSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultSetIdInput() {
    return this._faultSetId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList = new SdsIpListStructList(this, "ip_list", true);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SdsIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // is_on_vmware - computed: true, optional: false, required: false
  public get isOnVmware() {
    return this.getBooleanAttribute('is_on_vmware');
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
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

  // num_of_io_buffers - computed: true, optional: false, required: false
  public get numOfIoBuffers() {
    return this.getNumberAttribute('num_of_io_buffers');
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protection_domain_id - computed: true, optional: true, required: false
  private _protectionDomainId?: string; 
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }
  public set protectionDomainId(value: string) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // protection_domain_name - computed: false, optional: true, required: false
  private _protectionDomainName?: string; 
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }
  public set protectionDomainName(value: string) {
    this._protectionDomainName = value;
  }
  public resetProtectionDomainName() {
    this._protectionDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainNameInput() {
    return this._protectionDomainName;
  }

  // rfcache_enabled - computed: true, optional: true, required: false
  private _rfcacheEnabled?: boolean | cdktf.IResolvable; 
  public get rfcacheEnabled() {
    return this.getBooleanAttribute('rfcache_enabled');
  }
  public set rfcacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rfcacheEnabled = value;
  }
  public resetRfcacheEnabled() {
    this._rfcacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheEnabledInput() {
    return this._rfcacheEnabled;
  }

  // rmcache_enabled - computed: true, optional: true, required: false
  private _rmcacheEnabled?: boolean | cdktf.IResolvable; 
  public get rmcacheEnabled() {
    return this.getBooleanAttribute('rmcache_enabled');
  }
  public set rmcacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rmcacheEnabled = value;
  }
  public resetRmcacheEnabled() {
    this._rmcacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheEnabledInput() {
    return this._rmcacheEnabled;
  }

  // rmcache_frozen - computed: true, optional: false, required: false
  public get rmcacheFrozen() {
    return this.getBooleanAttribute('rmcache_frozen');
  }

  // rmcache_memory_allocation_state - computed: true, optional: false, required: false
  public get rmcacheMemoryAllocationState() {
    return this.getStringAttribute('rmcache_memory_allocation_state');
  }

  // rmcache_size_in_mb - computed: true, optional: true, required: false
  private _rmcacheSizeInMb?: number; 
  public get rmcacheSizeInMb() {
    return this.getNumberAttribute('rmcache_size_in_mb');
  }
  public set rmcacheSizeInMb(value: number) {
    this._rmcacheSizeInMb = value;
  }
  public resetRmcacheSizeInMb() {
    this._rmcacheSizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheSizeInMbInput() {
    return this._rmcacheSizeInMb;
  }

  // sds_state - computed: true, optional: false, required: false
  public get sdsState() {
    return this.getStringAttribute('sds_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drl_mode: cdktf.stringToTerraform(this._drlMode),
      fault_set_id: cdktf.stringToTerraform(this._faultSetId),
      ip_list: cdktf.listMapper(sdsIpListStructToTerraform, false)(this._ipList.internalValue),
      name: cdktf.stringToTerraform(this._name),
      performance_profile: cdktf.stringToTerraform(this._performanceProfile),
      port: cdktf.numberToTerraform(this._port),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      protection_domain_name: cdktf.stringToTerraform(this._protectionDomainName),
      rfcache_enabled: cdktf.booleanToTerraform(this._rfcacheEnabled),
      rmcache_enabled: cdktf.booleanToTerraform(this._rmcacheEnabled),
      rmcache_size_in_mb: cdktf.numberToTerraform(this._rmcacheSizeInMb),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drl_mode: {
        value: cdktf.stringToHclTerraform(this._drlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_set_id: {
        value: cdktf.stringToHclTerraform(this._faultSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list: {
        value: cdktf.listMapperHcl(sdsIpListStructToHclTerraform, false)(this._ipList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SdsIpListStructList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_profile: {
        value: cdktf.stringToHclTerraform(this._performanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._protectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_domain_name: {
        value: cdktf.stringToHclTerraform(this._protectionDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfcache_enabled: {
        value: cdktf.booleanToHclTerraform(this._rfcacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rmcache_enabled: {
        value: cdktf.booleanToHclTerraform(this._rmcacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rmcache_size_in_mb: {
        value: cdktf.numberToHclTerraform(this._rmcacheSizeInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
