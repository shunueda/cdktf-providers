// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDataCenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Group IDs to be added into the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#group_ids VirtualDataCenter#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#id VirtualDataCenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#name VirtualDataCenter#name}
  */
  readonly name: string;
  /**
  * zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#zones VirtualDataCenter#zones}
  */
  readonly zones?: VirtualDataCenterZones[] | cdktf.IResolvable;
}
export interface VirtualDataCenterZones {
  /**
  * List of cluster IDs from the Zone to add in the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#cluster_ids VirtualDataCenter#cluster_ids}
  */
  readonly clusterIds?: number[];
  /**
  * List of Datastore IDs from the Zone to add in the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#datastore_ids VirtualDataCenter#datastore_ids}
  */
  readonly datastoreIds?: number[];
  /**
  * List of Host IDs from the Zone to add in the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#host_ids VirtualDataCenter#host_ids}
  */
  readonly hostIds?: number[];
  /**
  * Resources Zone ID (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#id VirtualDataCenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * List of VNET IDs from the Zone to add in the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#vnet_ids VirtualDataCenter#vnet_ids}
  */
  readonly vnetIds?: number[];
}

export function virtualDataCenterZonesToTerraform(struct?: VirtualDataCenterZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.clusterIds),
    datastore_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.datastoreIds),
    host_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hostIds),
    id: cdktf.numberToTerraform(struct!.id),
    vnet_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vnetIds),
  }
}


export function virtualDataCenterZonesToHclTerraform(struct?: VirtualDataCenterZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.clusterIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    datastore_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.datastoreIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    host_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hostIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vnet_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualDataCenterZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualDataCenterZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIds = this._clusterIds;
    }
    if (this._datastoreIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreIds = this._datastoreIds;
    }
    if (this._hostIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIds = this._hostIds;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._vnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetIds = this._vnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDataCenterZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIds = undefined;
      this._datastoreIds = undefined;
      this._hostIds = undefined;
      this._id = undefined;
      this._vnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIds = value.clusterIds;
      this._datastoreIds = value.datastoreIds;
      this._hostIds = value.hostIds;
      this._id = value.id;
      this._vnetIds = value.vnetIds;
    }
  }

  // cluster_ids - computed: true, optional: true, required: false
  private _clusterIds?: number[]; 
  public get clusterIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_ids')));
  }
  public set clusterIds(value: number[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // datastore_ids - computed: true, optional: true, required: false
  private _datastoreIds?: number[]; 
  public get datastoreIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('datastore_ids')));
  }
  public set datastoreIds(value: number[]) {
    this._datastoreIds = value;
  }
  public resetDatastoreIds() {
    this._datastoreIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdsInput() {
    return this._datastoreIds;
  }

  // host_ids - computed: true, optional: true, required: false
  private _hostIds?: number[]; 
  public get hostIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('host_ids')));
  }
  public set hostIds(value: number[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
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

  // vnet_ids - computed: true, optional: true, required: false
  private _vnetIds?: number[]; 
  public get vnetIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vnet_ids')));
  }
  public set vnetIds(value: number[]) {
    this._vnetIds = value;
  }
  public resetVnetIds() {
    this._vnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdsInput() {
    return this._vnetIds;
  }
}

export class VirtualDataCenterZonesList extends cdktf.ComplexList {
  public internalValue? : VirtualDataCenterZones[] | cdktf.IResolvable

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
  public get(index: number): VirtualDataCenterZonesOutputReference {
    return new VirtualDataCenterZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center opennebula_virtual_data_center}
*/
export class VirtualDataCenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_data_center";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualDataCenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualDataCenter to import
  * @param importFromId The id of the existing VirtualDataCenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualDataCenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_data_center", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_data_center opennebula_virtual_data_center} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDataCenterConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDataCenterConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_data_center',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._name = config.name;
    this._zones.internalValue = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: number[]; 
  public get groupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_ids')));
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // zones - computed: false, optional: true, required: false
  private _zones = new VirtualDataCenterZonesList(this, "zones", true);
  public get zones() {
    return this._zones;
  }
  public putZones(value: VirtualDataCenterZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      zones: cdktf.listMapper(virtualDataCenterZonesToTerraform, true)(this._zones.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(virtualDataCenterZonesToHclTerraform, true)(this._zones.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualDataCenterZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
