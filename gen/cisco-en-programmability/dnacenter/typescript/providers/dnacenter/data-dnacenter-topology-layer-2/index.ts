// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterTopologyLayer2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2#id DataDnacenterTopologyLayer2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vlanID path parameter. Vlan Name for e.g Vlan1, Vlan23 etc
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2#vlan_id DataDnacenterTopologyLayer2#vlan_id}
  */
  readonly vlanId: string;
}
export interface DataDnacenterTopologyLayer2ItemLinks {
}

export function dataDnacenterTopologyLayer2ItemLinksToTerraform(struct?: DataDnacenterTopologyLayer2ItemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTopologyLayer2ItemLinksToHclTerraform(struct?: DataDnacenterTopologyLayer2ItemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTopologyLayer2ItemLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTopologyLayer2ItemLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTopologyLayer2ItemLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_info - computed: true, optional: false, required: false
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getStringAttribute('end_port_id');
  }

  // end_port_ipv4_address - computed: true, optional: false, required: false
  public get endPortIpv4Address() {
    return this.getStringAttribute('end_port_ipv4_address');
  }

  // end_port_ipv4_mask - computed: true, optional: false, required: false
  public get endPortIpv4Mask() {
    return this.getStringAttribute('end_port_ipv4_mask');
  }

  // end_port_name - computed: true, optional: false, required: false
  public get endPortName() {
    return this.getStringAttribute('end_port_name');
  }

  // end_port_speed - computed: true, optional: false, required: false
  public get endPortSpeed() {
    return this.getStringAttribute('end_port_speed');
  }

  // grey_out - computed: true, optional: false, required: false
  public get greyOut() {
    return this.getStringAttribute('grey_out');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getStringAttribute('start_port_id');
  }

  // start_port_ipv4_address - computed: true, optional: false, required: false
  public get startPortIpv4Address() {
    return this.getStringAttribute('start_port_ipv4_address');
  }

  // start_port_ipv4_mask - computed: true, optional: false, required: false
  public get startPortIpv4Mask() {
    return this.getStringAttribute('start_port_ipv4_mask');
  }

  // start_port_name - computed: true, optional: false, required: false
  public get startPortName() {
    return this.getStringAttribute('start_port_name');
  }

  // start_port_speed - computed: true, optional: false, required: false
  public get startPortSpeed() {
    return this.getStringAttribute('start_port_speed');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataDnacenterTopologyLayer2ItemLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTopologyLayer2ItemLinksOutputReference {
    return new DataDnacenterTopologyLayer2ItemLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTopologyLayer2ItemNodesCustomParam {
}

export function dataDnacenterTopologyLayer2ItemNodesCustomParamToTerraform(struct?: DataDnacenterTopologyLayer2ItemNodesCustomParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTopologyLayer2ItemNodesCustomParamToHclTerraform(struct?: DataDnacenterTopologyLayer2ItemNodesCustomParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTopologyLayer2ItemNodesCustomParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTopologyLayer2ItemNodesCustomParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTopologyLayer2ItemNodesCustomParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // parent_node_id - computed: true, optional: false, required: false
  public get parentNodeId() {
    return this.getStringAttribute('parent_node_id');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}

export class DataDnacenterTopologyLayer2ItemNodesCustomParamList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTopologyLayer2ItemNodesCustomParamOutputReference {
    return new DataDnacenterTopologyLayer2ItemNodesCustomParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTopologyLayer2ItemNodes {
}

export function dataDnacenterTopologyLayer2ItemNodesToTerraform(struct?: DataDnacenterTopologyLayer2ItemNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTopologyLayer2ItemNodesToHclTerraform(struct?: DataDnacenterTopologyLayer2ItemNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTopologyLayer2ItemNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTopologyLayer2ItemNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTopologyLayer2ItemNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_applied - computed: true, optional: false, required: false
  public get aclApplied() {
    return this.getStringAttribute('acl_applied');
  }

  // additional_info - computed: true, optional: false, required: false
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }

  // custom_param - computed: true, optional: false, required: false
  private _customParam = new DataDnacenterTopologyLayer2ItemNodesCustomParamList(this, "custom_param", false);
  public get customParam() {
    return this._customParam;
  }

  // data_path_id - computed: true, optional: false, required: false
  public get dataPathId() {
    return this.getStringAttribute('data_path_id');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // fixed - computed: true, optional: false, required: false
  public get fixed() {
    return this.getStringAttribute('fixed');
  }

  // grey_out - computed: true, optional: false, required: false
  public get greyOut() {
    return this.getStringAttribute('grey_out');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_source - computed: true, optional: false, required: false
  public get roleSource() {
    return this.getStringAttribute('role_source');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // upper_node - computed: true, optional: false, required: false
  public get upperNode() {
    return this.getStringAttribute('upper_node');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}

export class DataDnacenterTopologyLayer2ItemNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTopologyLayer2ItemNodesOutputReference {
    return new DataDnacenterTopologyLayer2ItemNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTopologyLayer2Item {
}

export function dataDnacenterTopologyLayer2ItemToTerraform(struct?: DataDnacenterTopologyLayer2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTopologyLayer2ItemToHclTerraform(struct?: DataDnacenterTopologyLayer2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTopologyLayer2ItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTopologyLayer2Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTopologyLayer2Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataDnacenterTopologyLayer2ItemLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataDnacenterTopologyLayer2ItemNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class DataDnacenterTopologyLayer2ItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTopologyLayer2ItemOutputReference {
    return new DataDnacenterTopologyLayer2ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2 dnacenter_topology_layer_2}
*/
export class DataDnacenterTopologyLayer2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_topology_layer_2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterTopologyLayer2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterTopologyLayer2 to import
  * @param importFromId The id of the existing DataDnacenterTopologyLayer2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterTopologyLayer2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_topology_layer_2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/topology_layer_2 dnacenter_topology_layer_2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterTopologyLayer2Config
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterTopologyLayer2Config) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_topology_layer_2',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._vlanId = config.vlanId;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterTopologyLayer2ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
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
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
