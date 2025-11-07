// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastPimsmglobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#accept_register_list RouterMulticastPimsmglobal#accept_register_list}
  */
  readonly acceptRegisterList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#accept_source_list RouterMulticastPimsmglobal#accept_source_list}
  */
  readonly acceptSourceList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#bsr_allow_quick_refresh RouterMulticastPimsmglobal#bsr_allow_quick_refresh}
  */
  readonly bsrAllowQuickRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#bsr_candidate RouterMulticastPimsmglobal#bsr_candidate}
  */
  readonly bsrCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#bsr_hash RouterMulticastPimsmglobal#bsr_hash}
  */
  readonly bsrHash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#bsr_interface RouterMulticastPimsmglobal#bsr_interface}
  */
  readonly bsrInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#bsr_priority RouterMulticastPimsmglobal#bsr_priority}
  */
  readonly bsrPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#cisco_crp_prefix RouterMulticastPimsmglobal#cisco_crp_prefix}
  */
  readonly ciscoCrpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#cisco_ignore_rp_set_priority RouterMulticastPimsmglobal#cisco_ignore_rp_set_priority}
  */
  readonly ciscoIgnoreRpSetPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#cisco_register_checksum RouterMulticastPimsmglobal#cisco_register_checksum}
  */
  readonly ciscoRegisterChecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#cisco_register_checksum_group RouterMulticastPimsmglobal#cisco_register_checksum_group}
  */
  readonly ciscoRegisterChecksumGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#device_name RouterMulticastPimsmglobal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#device_vdom RouterMulticastPimsmglobal#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#dynamic_sort_subtable RouterMulticastPimsmglobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#id RouterMulticastPimsmglobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#join_prune_holdtime RouterMulticastPimsmglobal#join_prune_holdtime}
  */
  readonly joinPruneHoldtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#message_interval RouterMulticastPimsmglobal#message_interval}
  */
  readonly messageInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#null_register_retries RouterMulticastPimsmglobal#null_register_retries}
  */
  readonly nullRegisterRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#pim_use_sdwan RouterMulticastPimsmglobal#pim_use_sdwan}
  */
  readonly pimUseSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_rate_limit RouterMulticastPimsmglobal#register_rate_limit}
  */
  readonly registerRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_rp_reachability RouterMulticastPimsmglobal#register_rp_reachability}
  */
  readonly registerRpReachability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_source RouterMulticastPimsmglobal#register_source}
  */
  readonly registerSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_source_interface RouterMulticastPimsmglobal#register_source_interface}
  */
  readonly registerSourceInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_source_ip RouterMulticastPimsmglobal#register_source_ip}
  */
  readonly registerSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#register_supression RouterMulticastPimsmglobal#register_supression}
  */
  readonly registerSupression?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#rp_register_keepalive RouterMulticastPimsmglobal#rp_register_keepalive}
  */
  readonly rpRegisterKeepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#spt_threshold RouterMulticastPimsmglobal#spt_threshold}
  */
  readonly sptThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#spt_threshold_group RouterMulticastPimsmglobal#spt_threshold_group}
  */
  readonly sptThresholdGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#ssm RouterMulticastPimsmglobal#ssm}
  */
  readonly ssm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#ssm_range RouterMulticastPimsmglobal#ssm_range}
  */
  readonly ssmRange?: string[];
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#rp_address RouterMulticastPimsmglobal#rp_address}
  */
  readonly rpAddress?: RouterMulticastPimsmglobalRpAddress[] | cdktf.IResolvable;
}
export interface RouterMulticastPimsmglobalRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#group RouterMulticastPimsmglobal#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#id RouterMulticastPimsmglobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#ip_address RouterMulticastPimsmglobal#ip_address}
  */
  readonly ipAddress?: string;
}

export function routerMulticastPimsmglobalRpAddressToTerraform(struct?: RouterMulticastPimsmglobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function routerMulticastPimsmglobalRpAddressToHclTerraform(struct?: RouterMulticastPimsmglobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimsmglobalRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastPimsmglobalRpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimsmglobalRpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RouterMulticastPimsmglobalRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastPimsmglobalRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastPimsmglobalRpAddressOutputReference {
    return new RouterMulticastPimsmglobalRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal fmgdevice_router_multicast_pimsmglobal}
*/
export class RouterMulticastPimsmglobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast_pimsmglobal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastPimsmglobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastPimsmglobal to import
  * @param importFromId The id of the existing RouterMulticastPimsmglobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastPimsmglobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast_pimsmglobal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobal fmgdevice_router_multicast_pimsmglobal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastPimsmglobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastPimsmglobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast_pimsmglobal',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptRegisterList = config.acceptRegisterList;
    this._acceptSourceList = config.acceptSourceList;
    this._bsrAllowQuickRefresh = config.bsrAllowQuickRefresh;
    this._bsrCandidate = config.bsrCandidate;
    this._bsrHash = config.bsrHash;
    this._bsrInterface = config.bsrInterface;
    this._bsrPriority = config.bsrPriority;
    this._ciscoCrpPrefix = config.ciscoCrpPrefix;
    this._ciscoIgnoreRpSetPriority = config.ciscoIgnoreRpSetPriority;
    this._ciscoRegisterChecksum = config.ciscoRegisterChecksum;
    this._ciscoRegisterChecksumGroup = config.ciscoRegisterChecksumGroup;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._joinPruneHoldtime = config.joinPruneHoldtime;
    this._messageInterval = config.messageInterval;
    this._nullRegisterRetries = config.nullRegisterRetries;
    this._pimUseSdwan = config.pimUseSdwan;
    this._registerRateLimit = config.registerRateLimit;
    this._registerRpReachability = config.registerRpReachability;
    this._registerSource = config.registerSource;
    this._registerSourceInterface = config.registerSourceInterface;
    this._registerSourceIp = config.registerSourceIp;
    this._registerSupression = config.registerSupression;
    this._rpRegisterKeepalive = config.rpRegisterKeepalive;
    this._sptThreshold = config.sptThreshold;
    this._sptThresholdGroup = config.sptThresholdGroup;
    this._ssm = config.ssm;
    this._ssmRange = config.ssmRange;
    this._rpAddress.internalValue = config.rpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_register_list - computed: true, optional: true, required: false
  private _acceptRegisterList?: string[]; 
  public get acceptRegisterList() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_register_list'));
  }
  public set acceptRegisterList(value: string[]) {
    this._acceptRegisterList = value;
  }
  public resetAcceptRegisterList() {
    this._acceptRegisterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRegisterListInput() {
    return this._acceptRegisterList;
  }

  // accept_source_list - computed: true, optional: true, required: false
  private _acceptSourceList?: string[]; 
  public get acceptSourceList() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_source_list'));
  }
  public set acceptSourceList(value: string[]) {
    this._acceptSourceList = value;
  }
  public resetAcceptSourceList() {
    this._acceptSourceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSourceListInput() {
    return this._acceptSourceList;
  }

  // bsr_allow_quick_refresh - computed: true, optional: true, required: false
  private _bsrAllowQuickRefresh?: string; 
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }
  public set bsrAllowQuickRefresh(value: string) {
    this._bsrAllowQuickRefresh = value;
  }
  public resetBsrAllowQuickRefresh() {
    this._bsrAllowQuickRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrAllowQuickRefreshInput() {
    return this._bsrAllowQuickRefresh;
  }

  // bsr_candidate - computed: true, optional: true, required: false
  private _bsrCandidate?: string; 
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }
  public set bsrCandidate(value: string) {
    this._bsrCandidate = value;
  }
  public resetBsrCandidate() {
    this._bsrCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateInput() {
    return this._bsrCandidate;
  }

  // bsr_hash - computed: false, optional: true, required: false
  private _bsrHash?: number; 
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }
  public set bsrHash(value: number) {
    this._bsrHash = value;
  }
  public resetBsrHash() {
    this._bsrHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrHashInput() {
    return this._bsrHash;
  }

  // bsr_interface - computed: true, optional: true, required: false
  private _bsrInterface?: string[]; 
  public get bsrInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('bsr_interface'));
  }
  public set bsrInterface(value: string[]) {
    this._bsrInterface = value;
  }
  public resetBsrInterface() {
    this._bsrInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrInterfaceInput() {
    return this._bsrInterface;
  }

  // bsr_priority - computed: false, optional: true, required: false
  private _bsrPriority?: number; 
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }
  public set bsrPriority(value: number) {
    this._bsrPriority = value;
  }
  public resetBsrPriority() {
    this._bsrPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrPriorityInput() {
    return this._bsrPriority;
  }

  // cisco_crp_prefix - computed: true, optional: true, required: false
  private _ciscoCrpPrefix?: string; 
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }
  public set ciscoCrpPrefix(value: string) {
    this._ciscoCrpPrefix = value;
  }
  public resetCiscoCrpPrefix() {
    this._ciscoCrpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoCrpPrefixInput() {
    return this._ciscoCrpPrefix;
  }

  // cisco_ignore_rp_set_priority - computed: true, optional: true, required: false
  private _ciscoIgnoreRpSetPriority?: string; 
  public get ciscoIgnoreRpSetPriority() {
    return this.getStringAttribute('cisco_ignore_rp_set_priority');
  }
  public set ciscoIgnoreRpSetPriority(value: string) {
    this._ciscoIgnoreRpSetPriority = value;
  }
  public resetCiscoIgnoreRpSetPriority() {
    this._ciscoIgnoreRpSetPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoIgnoreRpSetPriorityInput() {
    return this._ciscoIgnoreRpSetPriority;
  }

  // cisco_register_checksum - computed: true, optional: true, required: false
  private _ciscoRegisterChecksum?: string; 
  public get ciscoRegisterChecksum() {
    return this.getStringAttribute('cisco_register_checksum');
  }
  public set ciscoRegisterChecksum(value: string) {
    this._ciscoRegisterChecksum = value;
  }
  public resetCiscoRegisterChecksum() {
    this._ciscoRegisterChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoRegisterChecksumInput() {
    return this._ciscoRegisterChecksum;
  }

  // cisco_register_checksum_group - computed: true, optional: true, required: false
  private _ciscoRegisterChecksumGroup?: string[]; 
  public get ciscoRegisterChecksumGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('cisco_register_checksum_group'));
  }
  public set ciscoRegisterChecksumGroup(value: string[]) {
    this._ciscoRegisterChecksumGroup = value;
  }
  public resetCiscoRegisterChecksumGroup() {
    this._ciscoRegisterChecksumGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoRegisterChecksumGroupInput() {
    return this._ciscoRegisterChecksumGroup;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // join_prune_holdtime - computed: true, optional: true, required: false
  private _joinPruneHoldtime?: number; 
  public get joinPruneHoldtime() {
    return this.getNumberAttribute('join_prune_holdtime');
  }
  public set joinPruneHoldtime(value: number) {
    this._joinPruneHoldtime = value;
  }
  public resetJoinPruneHoldtime() {
    this._joinPruneHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPruneHoldtimeInput() {
    return this._joinPruneHoldtime;
  }

  // message_interval - computed: true, optional: true, required: false
  private _messageInterval?: number; 
  public get messageInterval() {
    return this.getNumberAttribute('message_interval');
  }
  public set messageInterval(value: number) {
    this._messageInterval = value;
  }
  public resetMessageInterval() {
    this._messageInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIntervalInput() {
    return this._messageInterval;
  }

  // null_register_retries - computed: true, optional: true, required: false
  private _nullRegisterRetries?: number; 
  public get nullRegisterRetries() {
    return this.getNumberAttribute('null_register_retries');
  }
  public set nullRegisterRetries(value: number) {
    this._nullRegisterRetries = value;
  }
  public resetNullRegisterRetries() {
    this._nullRegisterRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullRegisterRetriesInput() {
    return this._nullRegisterRetries;
  }

  // pim_use_sdwan - computed: true, optional: true, required: false
  private _pimUseSdwan?: string; 
  public get pimUseSdwan() {
    return this.getStringAttribute('pim_use_sdwan');
  }
  public set pimUseSdwan(value: string) {
    this._pimUseSdwan = value;
  }
  public resetPimUseSdwan() {
    this._pimUseSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimUseSdwanInput() {
    return this._pimUseSdwan;
  }

  // register_rate_limit - computed: false, optional: true, required: false
  private _registerRateLimit?: number; 
  public get registerRateLimit() {
    return this.getNumberAttribute('register_rate_limit');
  }
  public set registerRateLimit(value: number) {
    this._registerRateLimit = value;
  }
  public resetRegisterRateLimit() {
    this._registerRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateLimitInput() {
    return this._registerRateLimit;
  }

  // register_rp_reachability - computed: true, optional: true, required: false
  private _registerRpReachability?: string; 
  public get registerRpReachability() {
    return this.getStringAttribute('register_rp_reachability');
  }
  public set registerRpReachability(value: string) {
    this._registerRpReachability = value;
  }
  public resetRegisterRpReachability() {
    this._registerRpReachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRpReachabilityInput() {
    return this._registerRpReachability;
  }

  // register_source - computed: true, optional: true, required: false
  private _registerSource?: string; 
  public get registerSource() {
    return this.getStringAttribute('register_source');
  }
  public set registerSource(value: string) {
    this._registerSource = value;
  }
  public resetRegisterSource() {
    this._registerSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInput() {
    return this._registerSource;
  }

  // register_source_interface - computed: true, optional: true, required: false
  private _registerSourceInterface?: string[]; 
  public get registerSourceInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('register_source_interface'));
  }
  public set registerSourceInterface(value: string[]) {
    this._registerSourceInterface = value;
  }
  public resetRegisterSourceInterface() {
    this._registerSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInterfaceInput() {
    return this._registerSourceInterface;
  }

  // register_source_ip - computed: false, optional: true, required: false
  private _registerSourceIp?: string; 
  public get registerSourceIp() {
    return this.getStringAttribute('register_source_ip');
  }
  public set registerSourceIp(value: string) {
    this._registerSourceIp = value;
  }
  public resetRegisterSourceIp() {
    this._registerSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceIpInput() {
    return this._registerSourceIp;
  }

  // register_supression - computed: true, optional: true, required: false
  private _registerSupression?: number; 
  public get registerSupression() {
    return this.getNumberAttribute('register_supression');
  }
  public set registerSupression(value: number) {
    this._registerSupression = value;
  }
  public resetRegisterSupression() {
    this._registerSupression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSupressionInput() {
    return this._registerSupression;
  }

  // rp_register_keepalive - computed: true, optional: true, required: false
  private _rpRegisterKeepalive?: number; 
  public get rpRegisterKeepalive() {
    return this.getNumberAttribute('rp_register_keepalive');
  }
  public set rpRegisterKeepalive(value: number) {
    this._rpRegisterKeepalive = value;
  }
  public resetRpRegisterKeepalive() {
    this._rpRegisterKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpRegisterKeepaliveInput() {
    return this._rpRegisterKeepalive;
  }

  // spt_threshold - computed: true, optional: true, required: false
  private _sptThreshold?: string; 
  public get sptThreshold() {
    return this.getStringAttribute('spt_threshold');
  }
  public set sptThreshold(value: string) {
    this._sptThreshold = value;
  }
  public resetSptThreshold() {
    this._sptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdInput() {
    return this._sptThreshold;
  }

  // spt_threshold_group - computed: true, optional: true, required: false
  private _sptThresholdGroup?: string[]; 
  public get sptThresholdGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('spt_threshold_group'));
  }
  public set sptThresholdGroup(value: string[]) {
    this._sptThresholdGroup = value;
  }
  public resetSptThresholdGroup() {
    this._sptThresholdGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdGroupInput() {
    return this._sptThresholdGroup;
  }

  // ssm - computed: true, optional: true, required: false
  private _ssm?: string; 
  public get ssm() {
    return this.getStringAttribute('ssm');
  }
  public set ssm(value: string) {
    this._ssm = value;
  }
  public resetSsm() {
    this._ssm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm;
  }

  // ssm_range - computed: true, optional: true, required: false
  private _ssmRange?: string[]; 
  public get ssmRange() {
    return cdktf.Fn.tolist(this.getListAttribute('ssm_range'));
  }
  public set ssmRange(value: string[]) {
    this._ssmRange = value;
  }
  public resetSsmRange() {
    this._ssmRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmRangeInput() {
    return this._ssmRange;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress = new RouterMulticastPimsmglobalRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticastPimsmglobalRpAddress[] | cdktf.IResolvable) {
    this._rpAddress.internalValue = value;
  }
  public resetRpAddress() {
    this._rpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_register_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acceptRegisterList),
      accept_source_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acceptSourceList),
      bsr_allow_quick_refresh: cdktf.stringToTerraform(this._bsrAllowQuickRefresh),
      bsr_candidate: cdktf.stringToTerraform(this._bsrCandidate),
      bsr_hash: cdktf.numberToTerraform(this._bsrHash),
      bsr_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bsrInterface),
      bsr_priority: cdktf.numberToTerraform(this._bsrPriority),
      cisco_crp_prefix: cdktf.stringToTerraform(this._ciscoCrpPrefix),
      cisco_ignore_rp_set_priority: cdktf.stringToTerraform(this._ciscoIgnoreRpSetPriority),
      cisco_register_checksum: cdktf.stringToTerraform(this._ciscoRegisterChecksum),
      cisco_register_checksum_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciscoRegisterChecksumGroup),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      join_prune_holdtime: cdktf.numberToTerraform(this._joinPruneHoldtime),
      message_interval: cdktf.numberToTerraform(this._messageInterval),
      null_register_retries: cdktf.numberToTerraform(this._nullRegisterRetries),
      pim_use_sdwan: cdktf.stringToTerraform(this._pimUseSdwan),
      register_rate_limit: cdktf.numberToTerraform(this._registerRateLimit),
      register_rp_reachability: cdktf.stringToTerraform(this._registerRpReachability),
      register_source: cdktf.stringToTerraform(this._registerSource),
      register_source_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registerSourceInterface),
      register_source_ip: cdktf.stringToTerraform(this._registerSourceIp),
      register_supression: cdktf.numberToTerraform(this._registerSupression),
      rp_register_keepalive: cdktf.numberToTerraform(this._rpRegisterKeepalive),
      spt_threshold: cdktf.stringToTerraform(this._sptThreshold),
      spt_threshold_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sptThresholdGroup),
      ssm: cdktf.stringToTerraform(this._ssm),
      ssm_range: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssmRange),
      rp_address: cdktf.listMapper(routerMulticastPimsmglobalRpAddressToTerraform, true)(this._rpAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_register_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acceptRegisterList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      accept_source_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acceptSourceList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bsr_allow_quick_refresh: {
        value: cdktf.stringToHclTerraform(this._bsrAllowQuickRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_candidate: {
        value: cdktf.stringToHclTerraform(this._bsrCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_hash: {
        value: cdktf.numberToHclTerraform(this._bsrHash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bsr_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bsrInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bsr_priority: {
        value: cdktf.numberToHclTerraform(this._bsrPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cisco_crp_prefix: {
        value: cdktf.stringToHclTerraform(this._ciscoCrpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_ignore_rp_set_priority: {
        value: cdktf.stringToHclTerraform(this._ciscoIgnoreRpSetPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_register_checksum: {
        value: cdktf.stringToHclTerraform(this._ciscoRegisterChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_register_checksum_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciscoRegisterChecksumGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_prune_holdtime: {
        value: cdktf.numberToHclTerraform(this._joinPruneHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_interval: {
        value: cdktf.numberToHclTerraform(this._messageInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      null_register_retries: {
        value: cdktf.numberToHclTerraform(this._nullRegisterRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pim_use_sdwan: {
        value: cdktf.stringToHclTerraform(this._pimUseSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_rate_limit: {
        value: cdktf.numberToHclTerraform(this._registerRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      register_rp_reachability: {
        value: cdktf.stringToHclTerraform(this._registerRpReachability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_source: {
        value: cdktf.stringToHclTerraform(this._registerSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_source_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registerSourceInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      register_source_ip: {
        value: cdktf.stringToHclTerraform(this._registerSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_supression: {
        value: cdktf.numberToHclTerraform(this._registerSupression),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_register_keepalive: {
        value: cdktf.numberToHclTerraform(this._rpRegisterKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spt_threshold: {
        value: cdktf.stringToHclTerraform(this._sptThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spt_threshold_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sptThresholdGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssm: {
        value: cdktf.stringToHclTerraform(this._ssm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm_range: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssmRange),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rp_address: {
        value: cdktf.listMapperHcl(routerMulticastPimsmglobalRpAddressToHclTerraform, true)(this._rpAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastPimsmglobalRpAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
