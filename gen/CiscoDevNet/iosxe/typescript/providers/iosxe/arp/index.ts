// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#delete_mode Arp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#device Arp#device}
  */
  readonly device?: string;
  /**
  * Maximum learn entry limit
  *   - Range: `255`-`512000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#entry_learn Arp#entry_learn}
  */
  readonly entryLearn?: number;
  /**
  * Specify the number of IP addresses to resolve
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#incomplete_entries Arp#incomplete_entries}
  */
  readonly incompleteEntries?: number;
  /**
  * Specify ARP acl to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_filters Arp#inspection_filters}
  */
  readonly inspectionFilters?: ArpInspectionFilters[] | cdktf.IResolvable;
  /**
  * Number of entries for log buffer
  *   - Range: `0`-`1024`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_log_buffer_entries Arp#inspection_log_buffer_entries}
  */
  readonly inspectionLogBufferEntries?: number;
  /**
  * Number of entries for log buffer
  *   - Range: `0`-`1024`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_log_buffer_logs_entries Arp#inspection_log_buffer_logs_entries}
  */
  readonly inspectionLogBufferLogsEntries?: number;
  /**
  * Interval for controlling logging rate
  *   - Range: `0`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_log_buffer_logs_interval Arp#inspection_log_buffer_logs_interval}
  */
  readonly inspectionLogBufferLogsInterval?: number;
  /**
  * Allow 0.0.0.0 sender IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_validate_allow_zeros Arp#inspection_validate_allow_zeros}
  */
  readonly inspectionValidateAllowZeros?: boolean | cdktf.IResolvable;
  /**
  * Validate destination MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_validate_dst_mac Arp#inspection_validate_dst_mac}
  */
  readonly inspectionValidateDstMac?: boolean | cdktf.IResolvable;
  /**
  * Validate IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_validate_ip Arp#inspection_validate_ip}
  */
  readonly inspectionValidateIp?: boolean | cdktf.IResolvable;
  /**
  * Validate source MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_validate_src_mac Arp#inspection_validate_src_mac}
  */
  readonly inspectionValidateSrcMac?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable ARP Inspection on vlans(Deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#inspection_vlan Arp#inspection_vlan}
  */
  readonly inspectionVlan?: string;
  /**
  * Disable proxy ARP on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#proxy_disable Arp#proxy_disable}
  */
  readonly proxyDisable?: boolean | cdktf.IResolvable;
}
export interface ArpInspectionFiltersVlans {
  /**
  * Apply the ACL statically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#static Arp#static}
  */
  readonly static?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#vlan_range Arp#vlan_range}
  */
  readonly vlanRange: string;
}

export function arpInspectionFiltersVlansToTerraform(struct?: ArpInspectionFiltersVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static: cdktf.booleanToTerraform(struct!.static),
    vlan_range: cdktf.stringToTerraform(struct!.vlanRange),
  }
}


export function arpInspectionFiltersVlansToHclTerraform(struct?: ArpInspectionFiltersVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static: {
      value: cdktf.booleanToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_range: {
      value: cdktf.stringToHclTerraform(struct!.vlanRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArpInspectionFiltersVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArpInspectionFiltersVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._vlanRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanRange = this._vlanRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArpInspectionFiltersVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._static = undefined;
      this._vlanRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._static = value.static;
      this._vlanRange = value.vlanRange;
    }
  }

  // static - computed: false, optional: true, required: false
  private _static?: boolean | cdktf.IResolvable; 
  public get static() {
    return this.getBooleanAttribute('static');
  }
  public set static(value: boolean | cdktf.IResolvable) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // vlan_range - computed: false, optional: false, required: true
  private _vlanRange?: string; 
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }
  public set vlanRange(value: string) {
    this._vlanRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanRangeInput() {
    return this._vlanRange;
  }
}

export class ArpInspectionFiltersVlansList extends cdktf.ComplexList {
  public internalValue? : ArpInspectionFiltersVlans[] | cdktf.IResolvable

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
  public get(index: number): ArpInspectionFiltersVlansOutputReference {
    return new ArpInspectionFiltersVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArpInspectionFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#name Arp#name}
  */
  readonly name: string;
  /**
  * Vlans to apply the filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#vlans Arp#vlans}
  */
  readonly vlans?: ArpInspectionFiltersVlans[] | cdktf.IResolvable;
}

export function arpInspectionFiltersToTerraform(struct?: ArpInspectionFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlans: cdktf.listMapper(arpInspectionFiltersVlansToTerraform, false)(struct!.vlans),
  }
}


export function arpInspectionFiltersToHclTerraform(struct?: ArpInspectionFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.listMapperHcl(arpInspectionFiltersVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "ArpInspectionFiltersVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArpInspectionFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArpInspectionFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArpInspectionFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlans.internalValue = value.vlans;
    }
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

  // vlans - computed: false, optional: true, required: false
  private _vlans = new ArpInspectionFiltersVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: ArpInspectionFiltersVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }
}

export class ArpInspectionFiltersList extends cdktf.ComplexList {
  public internalValue? : ArpInspectionFilters[] | cdktf.IResolvable

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
  public get(index: number): ArpInspectionFiltersOutputReference {
    return new ArpInspectionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp iosxe_arp}
*/
export class Arp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_arp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Arp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Arp to import
  * @param importFromId The id of the existing Arp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Arp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_arp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/arp iosxe_arp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_arp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._entryLearn = config.entryLearn;
    this._incompleteEntries = config.incompleteEntries;
    this._inspectionFilters.internalValue = config.inspectionFilters;
    this._inspectionLogBufferEntries = config.inspectionLogBufferEntries;
    this._inspectionLogBufferLogsEntries = config.inspectionLogBufferLogsEntries;
    this._inspectionLogBufferLogsInterval = config.inspectionLogBufferLogsInterval;
    this._inspectionValidateAllowZeros = config.inspectionValidateAllowZeros;
    this._inspectionValidateDstMac = config.inspectionValidateDstMac;
    this._inspectionValidateIp = config.inspectionValidateIp;
    this._inspectionValidateSrcMac = config.inspectionValidateSrcMac;
    this._inspectionVlan = config.inspectionVlan;
    this._proxyDisable = config.proxyDisable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // entry_learn - computed: false, optional: true, required: false
  private _entryLearn?: number; 
  public get entryLearn() {
    return this.getNumberAttribute('entry_learn');
  }
  public set entryLearn(value: number) {
    this._entryLearn = value;
  }
  public resetEntryLearn() {
    this._entryLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLearnInput() {
    return this._entryLearn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incomplete_entries - computed: false, optional: true, required: false
  private _incompleteEntries?: number; 
  public get incompleteEntries() {
    return this.getNumberAttribute('incomplete_entries');
  }
  public set incompleteEntries(value: number) {
    this._incompleteEntries = value;
  }
  public resetIncompleteEntries() {
    this._incompleteEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incompleteEntriesInput() {
    return this._incompleteEntries;
  }

  // inspection_filters - computed: false, optional: true, required: false
  private _inspectionFilters = new ArpInspectionFiltersList(this, "inspection_filters", false);
  public get inspectionFilters() {
    return this._inspectionFilters;
  }
  public putInspectionFilters(value: ArpInspectionFilters[] | cdktf.IResolvable) {
    this._inspectionFilters.internalValue = value;
  }
  public resetInspectionFilters() {
    this._inspectionFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionFiltersInput() {
    return this._inspectionFilters.internalValue;
  }

  // inspection_log_buffer_entries - computed: false, optional: true, required: false
  private _inspectionLogBufferEntries?: number; 
  public get inspectionLogBufferEntries() {
    return this.getNumberAttribute('inspection_log_buffer_entries');
  }
  public set inspectionLogBufferEntries(value: number) {
    this._inspectionLogBufferEntries = value;
  }
  public resetInspectionLogBufferEntries() {
    this._inspectionLogBufferEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLogBufferEntriesInput() {
    return this._inspectionLogBufferEntries;
  }

  // inspection_log_buffer_logs_entries - computed: false, optional: true, required: false
  private _inspectionLogBufferLogsEntries?: number; 
  public get inspectionLogBufferLogsEntries() {
    return this.getNumberAttribute('inspection_log_buffer_logs_entries');
  }
  public set inspectionLogBufferLogsEntries(value: number) {
    this._inspectionLogBufferLogsEntries = value;
  }
  public resetInspectionLogBufferLogsEntries() {
    this._inspectionLogBufferLogsEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLogBufferLogsEntriesInput() {
    return this._inspectionLogBufferLogsEntries;
  }

  // inspection_log_buffer_logs_interval - computed: false, optional: true, required: false
  private _inspectionLogBufferLogsInterval?: number; 
  public get inspectionLogBufferLogsInterval() {
    return this.getNumberAttribute('inspection_log_buffer_logs_interval');
  }
  public set inspectionLogBufferLogsInterval(value: number) {
    this._inspectionLogBufferLogsInterval = value;
  }
  public resetInspectionLogBufferLogsInterval() {
    this._inspectionLogBufferLogsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLogBufferLogsIntervalInput() {
    return this._inspectionLogBufferLogsInterval;
  }

  // inspection_validate_allow_zeros - computed: false, optional: true, required: false
  private _inspectionValidateAllowZeros?: boolean | cdktf.IResolvable; 
  public get inspectionValidateAllowZeros() {
    return this.getBooleanAttribute('inspection_validate_allow_zeros');
  }
  public set inspectionValidateAllowZeros(value: boolean | cdktf.IResolvable) {
    this._inspectionValidateAllowZeros = value;
  }
  public resetInspectionValidateAllowZeros() {
    this._inspectionValidateAllowZeros = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionValidateAllowZerosInput() {
    return this._inspectionValidateAllowZeros;
  }

  // inspection_validate_dst_mac - computed: false, optional: true, required: false
  private _inspectionValidateDstMac?: boolean | cdktf.IResolvable; 
  public get inspectionValidateDstMac() {
    return this.getBooleanAttribute('inspection_validate_dst_mac');
  }
  public set inspectionValidateDstMac(value: boolean | cdktf.IResolvable) {
    this._inspectionValidateDstMac = value;
  }
  public resetInspectionValidateDstMac() {
    this._inspectionValidateDstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionValidateDstMacInput() {
    return this._inspectionValidateDstMac;
  }

  // inspection_validate_ip - computed: false, optional: true, required: false
  private _inspectionValidateIp?: boolean | cdktf.IResolvable; 
  public get inspectionValidateIp() {
    return this.getBooleanAttribute('inspection_validate_ip');
  }
  public set inspectionValidateIp(value: boolean | cdktf.IResolvable) {
    this._inspectionValidateIp = value;
  }
  public resetInspectionValidateIp() {
    this._inspectionValidateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionValidateIpInput() {
    return this._inspectionValidateIp;
  }

  // inspection_validate_src_mac - computed: false, optional: true, required: false
  private _inspectionValidateSrcMac?: boolean | cdktf.IResolvable; 
  public get inspectionValidateSrcMac() {
    return this.getBooleanAttribute('inspection_validate_src_mac');
  }
  public set inspectionValidateSrcMac(value: boolean | cdktf.IResolvable) {
    this._inspectionValidateSrcMac = value;
  }
  public resetInspectionValidateSrcMac() {
    this._inspectionValidateSrcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionValidateSrcMacInput() {
    return this._inspectionValidateSrcMac;
  }

  // inspection_vlan - computed: false, optional: true, required: false
  private _inspectionVlan?: string; 
  public get inspectionVlan() {
    return this.getStringAttribute('inspection_vlan');
  }
  public set inspectionVlan(value: string) {
    this._inspectionVlan = value;
  }
  public resetInspectionVlan() {
    this._inspectionVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionVlanInput() {
    return this._inspectionVlan;
  }

  // proxy_disable - computed: false, optional: true, required: false
  private _proxyDisable?: boolean | cdktf.IResolvable; 
  public get proxyDisable() {
    return this.getBooleanAttribute('proxy_disable');
  }
  public set proxyDisable(value: boolean | cdktf.IResolvable) {
    this._proxyDisable = value;
  }
  public resetProxyDisable() {
    this._proxyDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyDisableInput() {
    return this._proxyDisable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      entry_learn: cdktf.numberToTerraform(this._entryLearn),
      incomplete_entries: cdktf.numberToTerraform(this._incompleteEntries),
      inspection_filters: cdktf.listMapper(arpInspectionFiltersToTerraform, false)(this._inspectionFilters.internalValue),
      inspection_log_buffer_entries: cdktf.numberToTerraform(this._inspectionLogBufferEntries),
      inspection_log_buffer_logs_entries: cdktf.numberToTerraform(this._inspectionLogBufferLogsEntries),
      inspection_log_buffer_logs_interval: cdktf.numberToTerraform(this._inspectionLogBufferLogsInterval),
      inspection_validate_allow_zeros: cdktf.booleanToTerraform(this._inspectionValidateAllowZeros),
      inspection_validate_dst_mac: cdktf.booleanToTerraform(this._inspectionValidateDstMac),
      inspection_validate_ip: cdktf.booleanToTerraform(this._inspectionValidateIp),
      inspection_validate_src_mac: cdktf.booleanToTerraform(this._inspectionValidateSrcMac),
      inspection_vlan: cdktf.stringToTerraform(this._inspectionVlan),
      proxy_disable: cdktf.booleanToTerraform(this._proxyDisable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_learn: {
        value: cdktf.numberToHclTerraform(this._entryLearn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      incomplete_entries: {
        value: cdktf.numberToHclTerraform(this._incompleteEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inspection_filters: {
        value: cdktf.listMapperHcl(arpInspectionFiltersToHclTerraform, false)(this._inspectionFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArpInspectionFiltersList",
      },
      inspection_log_buffer_entries: {
        value: cdktf.numberToHclTerraform(this._inspectionLogBufferEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inspection_log_buffer_logs_entries: {
        value: cdktf.numberToHclTerraform(this._inspectionLogBufferLogsEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inspection_log_buffer_logs_interval: {
        value: cdktf.numberToHclTerraform(this._inspectionLogBufferLogsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inspection_validate_allow_zeros: {
        value: cdktf.booleanToHclTerraform(this._inspectionValidateAllowZeros),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inspection_validate_dst_mac: {
        value: cdktf.booleanToHclTerraform(this._inspectionValidateDstMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inspection_validate_ip: {
        value: cdktf.booleanToHclTerraform(this._inspectionValidateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inspection_validate_src_mac: {
        value: cdktf.booleanToHclTerraform(this._inspectionValidateSrcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inspection_vlan: {
        value: cdktf.stringToHclTerraform(this._inspectionVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_disable: {
        value: cdktf.booleanToHclTerraform(this._proxyDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
