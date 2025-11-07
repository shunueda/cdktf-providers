// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreReservedfixedipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#fixed_ip_address GcoreReservedfixedip#fixed_ip_address}
  */
  readonly fixedIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#id GcoreReservedfixedip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#is_vip GcoreReservedfixedip#is_vip}
  */
  readonly isVip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#last_updated GcoreReservedfixedip#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#network_id GcoreReservedfixedip#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#project_id GcoreReservedfixedip#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#project_name GcoreReservedfixedip#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#region_id GcoreReservedfixedip#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#region_name GcoreReservedfixedip#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#subnet_id GcoreReservedfixedip#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Available values is 'external', 'subnet', 'any_subnet', 'ip_address'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#type GcoreReservedfixedip#type}
  */
  readonly type: string;
  /**
  * allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#allowed_address_pairs GcoreReservedfixedip#allowed_address_pairs}
  */
  readonly allowedAddressPairs?: GcoreReservedfixedipAllowedAddressPairs[] | cdktf.IResolvable;
}
export interface GcoreReservedfixedipAllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#ip_address GcoreReservedfixedip#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#mac_address GcoreReservedfixedip#mac_address}
  */
  readonly macAddress?: string;
}

export function gcoreReservedfixedipAllowedAddressPairsToTerraform(struct?: GcoreReservedfixedipAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function gcoreReservedfixedipAllowedAddressPairsToHclTerraform(struct?: GcoreReservedfixedipAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreReservedfixedipAllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreReservedfixedipAllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreReservedfixedipAllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
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

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class GcoreReservedfixedipAllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : GcoreReservedfixedipAllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): GcoreReservedfixedipAllowedAddressPairsOutputReference {
    return new GcoreReservedfixedipAllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip gcore_reservedfixedip}
*/
export class GcoreReservedfixedip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_reservedfixedip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreReservedfixedip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreReservedfixedip to import
  * @param importFromId The id of the existing GcoreReservedfixedip that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreReservedfixedip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_reservedfixedip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_reservedfixedip gcore_reservedfixedip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreReservedfixedipConfig
  */
  public constructor(scope: Construct, id: string, config: GcoreReservedfixedipConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_reservedfixedip',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fixedIpAddress = config.fixedIpAddress;
    this._id = config.id;
    this._isVip = config.isVip;
    this._lastUpdated = config.lastUpdated;
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._subnetId = config.subnetId;
    this._type = config.type;
    this._allowedAddressPairs.internalValue = config.allowedAddressPairs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fixed_ip_address - computed: true, optional: true, required: false
  private _fixedIpAddress?: string; 
  public get fixedIpAddress() {
    return this.getStringAttribute('fixed_ip_address');
  }
  public set fixedIpAddress(value: string) {
    this._fixedIpAddress = value;
  }
  public resetFixedIpAddress() {
    this._fixedIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpAddressInput() {
    return this._fixedIpAddress;
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

  // is_vip - computed: false, optional: false, required: true
  private _isVip?: boolean | cdktf.IResolvable; 
  public get isVip() {
    return this.getBooleanAttribute('is_vip');
  }
  public set isVip(value: boolean | cdktf.IResolvable) {
    this._isVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isVipInput() {
    return this._isVip;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // allowed_address_pairs - computed: false, optional: true, required: false
  private _allowedAddressPairs = new GcoreReservedfixedipAllowedAddressPairsList(this, "allowed_address_pairs", false);
  public get allowedAddressPairs() {
    return this._allowedAddressPairs;
  }
  public putAllowedAddressPairs(value: GcoreReservedfixedipAllowedAddressPairs[] | cdktf.IResolvable) {
    this._allowedAddressPairs.internalValue = value;
  }
  public resetAllowedAddressPairs() {
    this._allowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressPairsInput() {
    return this._allowedAddressPairs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fixed_ip_address: cdktf.stringToTerraform(this._fixedIpAddress),
      id: cdktf.stringToTerraform(this._id),
      is_vip: cdktf.booleanToTerraform(this._isVip),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      type: cdktf.stringToTerraform(this._type),
      allowed_address_pairs: cdktf.listMapper(gcoreReservedfixedipAllowedAddressPairsToTerraform, true)(this._allowedAddressPairs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fixed_ip_address: {
        value: cdktf.stringToHclTerraform(this._fixedIpAddress),
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
      is_vip: {
        value: cdktf.booleanToHclTerraform(this._isVip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_address_pairs: {
        value: cdktf.listMapperHcl(gcoreReservedfixedipAllowedAddressPairsToHclTerraform, true)(this._allowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreReservedfixedipAllowedAddressPairsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
