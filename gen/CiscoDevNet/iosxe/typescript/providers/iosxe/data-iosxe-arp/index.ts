// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/arp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeArpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/arp#device DataIosxeArp#device}
  */
  readonly device?: string;
}
export interface DataIosxeArpInspectionFiltersVlans {
}

export function dataIosxeArpInspectionFiltersVlansToTerraform(struct?: DataIosxeArpInspectionFiltersVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeArpInspectionFiltersVlansToHclTerraform(struct?: DataIosxeArpInspectionFiltersVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeArpInspectionFiltersVlansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeArpInspectionFiltersVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeArpInspectionFiltersVlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getBooleanAttribute('static');
  }

  // vlan_range - computed: true, optional: false, required: false
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }
}

export class DataIosxeArpInspectionFiltersVlansList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeArpInspectionFiltersVlansOutputReference {
    return new DataIosxeArpInspectionFiltersVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeArpInspectionFilters {
}

export function dataIosxeArpInspectionFiltersToTerraform(struct?: DataIosxeArpInspectionFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeArpInspectionFiltersToHclTerraform(struct?: DataIosxeArpInspectionFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeArpInspectionFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeArpInspectionFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeArpInspectionFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vlans - computed: true, optional: false, required: false
  private _vlans = new DataIosxeArpInspectionFiltersVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
}

export class DataIosxeArpInspectionFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeArpInspectionFiltersOutputReference {
    return new DataIosxeArpInspectionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/arp iosxe_arp}
*/
export class DataIosxeArp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_arp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeArp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeArp to import
  * @param importFromId The id of the existing DataIosxeArp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/arp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeArp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_arp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/arp iosxe_arp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeArpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeArpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_arp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entry_learn - computed: true, optional: false, required: false
  public get entryLearn() {
    return this.getNumberAttribute('entry_learn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incomplete_entries - computed: true, optional: false, required: false
  public get incompleteEntries() {
    return this.getNumberAttribute('incomplete_entries');
  }

  // inspection_filters - computed: true, optional: false, required: false
  private _inspectionFilters = new DataIosxeArpInspectionFiltersList(this, "inspection_filters", false);
  public get inspectionFilters() {
    return this._inspectionFilters;
  }

  // inspection_log_buffer_entries - computed: true, optional: false, required: false
  public get inspectionLogBufferEntries() {
    return this.getNumberAttribute('inspection_log_buffer_entries');
  }

  // inspection_log_buffer_logs_entries - computed: true, optional: false, required: false
  public get inspectionLogBufferLogsEntries() {
    return this.getNumberAttribute('inspection_log_buffer_logs_entries');
  }

  // inspection_log_buffer_logs_interval - computed: true, optional: false, required: false
  public get inspectionLogBufferLogsInterval() {
    return this.getNumberAttribute('inspection_log_buffer_logs_interval');
  }

  // inspection_validate_allow_zeros - computed: true, optional: false, required: false
  public get inspectionValidateAllowZeros() {
    return this.getBooleanAttribute('inspection_validate_allow_zeros');
  }

  // inspection_validate_dst_mac - computed: true, optional: false, required: false
  public get inspectionValidateDstMac() {
    return this.getBooleanAttribute('inspection_validate_dst_mac');
  }

  // inspection_validate_ip - computed: true, optional: false, required: false
  public get inspectionValidateIp() {
    return this.getBooleanAttribute('inspection_validate_ip');
  }

  // inspection_validate_src_mac - computed: true, optional: false, required: false
  public get inspectionValidateSrcMac() {
    return this.getBooleanAttribute('inspection_validate_src_mac');
  }

  // inspection_vlan - computed: true, optional: false, required: false
  public get inspectionVlan() {
    return this.getStringAttribute('inspection_vlan');
  }

  // proxy_disable - computed: true, optional: false, required: false
  public get proxyDisable() {
    return this.getBooleanAttribute('proxy_disable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
