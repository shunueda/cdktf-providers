// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixFoundationCentralImagedNodesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#id DataNutanixFoundationCentralImagedNodesList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#length DataNutanixFoundationCentralImagedNodesList#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#offset DataNutanixFoundationCentralImagedNodesList#offset}
  */
  readonly offset?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#filters DataNutanixFoundationCentralImagedNodesList#filters}
  */
  readonly filters?: DataNutanixFoundationCentralImagedNodesListFilters;
}
export interface DataNutanixFoundationCentralImagedNodesListImagedNodes {
}

export function dataNutanixFoundationCentralImagedNodesListImagedNodesToTerraform(struct?: DataNutanixFoundationCentralImagedNodesListImagedNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedNodesListImagedNodesToHclTerraform(struct?: DataNutanixFoundationCentralImagedNodesListImagedNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedNodesListImagedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedNodesListImagedNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedNodesListImagedNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aos_version - computed: true, optional: false, required: false
  public get aosVersion() {
    return this.getStringAttribute('aos_version');
  }

  // api_key_uuid - computed: true, optional: false, required: false
  public get apiKeyUuid() {
    return this.getStringAttribute('api_key_uuid');
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // block_serial - computed: true, optional: false, required: false
  public get blockSerial() {
    return this.getStringAttribute('block_serial');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }

  // cvm_gateway - computed: true, optional: false, required: false
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }

  // cvm_ip - computed: true, optional: false, required: false
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }

  // cvm_ipv6 - computed: true, optional: false, required: false
  public get cvmIpv6() {
    return this.getStringAttribute('cvm_ipv6');
  }

  // cvm_netmask - computed: true, optional: false, required: false
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }

  // cvm_up - computed: true, optional: false, required: false
  public get cvmUp() {
    return this.getBooleanAttribute('cvm_up');
  }

  // cvm_uuid - computed: true, optional: false, required: false
  public get cvmUuid() {
    return this.getStringAttribute('cvm_uuid');
  }

  // cvm_vlan_id - computed: true, optional: false, required: false
  public get cvmVlanId() {
    return this.getNumberAttribute('cvm_vlan_id');
  }

  // foundation_version - computed: true, optional: false, required: false
  public get foundationVersion() {
    return this.getStringAttribute('foundation_version');
  }

  // hardware_attributes - computed: true, optional: false, required: false
  private _hardwareAttributes = new cdktf.StringMap(this, "hardware_attributes");
  public get hardwareAttributes() {
    return this._hardwareAttributes;
  }

  // hypervisor_gateway - computed: true, optional: false, required: false
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }

  // hypervisor_hostname - computed: true, optional: false, required: false
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }

  // hypervisor_ip - computed: true, optional: false, required: false
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }

  // hypervisor_netmask - computed: true, optional: false, required: false
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }

  // imaged_cluster_uuid - computed: true, optional: false, required: false
  public get imagedClusterUuid() {
    return this.getStringAttribute('imaged_cluster_uuid');
  }

  // imaged_node_uuid - computed: true, optional: false, required: false
  public get imagedNodeUuid() {
    return this.getStringAttribute('imaged_node_uuid');
  }

  // ipmi_gateway - computed: true, optional: false, required: false
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }

  // ipmi_netmask - computed: true, optional: false, required: false
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }

  // ipv6_interface - computed: true, optional: false, required: false
  public get ipv6Interface() {
    return this.getStringAttribute('ipv6_interface');
  }

  // latest_hb_ts_list - computed: true, optional: false, required: false
  public get latestHbTsList() {
    return this.getListAttribute('latest_hb_ts_list');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // node_position - computed: true, optional: false, required: false
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }

  // node_serial - computed: true, optional: false, required: false
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }

  // node_state - computed: true, optional: false, required: false
  public get nodeState() {
    return this.getStringAttribute('node_state');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // supported_features - computed: true, optional: false, required: false
  public get supportedFeatures() {
    return this.getListAttribute('supported_features');
  }
}

export class DataNutanixFoundationCentralImagedNodesListImagedNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedNodesListImagedNodesOutputReference {
    return new DataNutanixFoundationCentralImagedNodesListImagedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedNodesListMetadata {
}

export function dataNutanixFoundationCentralImagedNodesListMetadataToTerraform(struct?: DataNutanixFoundationCentralImagedNodesListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedNodesListMetadataToHclTerraform(struct?: DataNutanixFoundationCentralImagedNodesListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedNodesListMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedNodesListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedNodesListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // total_matches - computed: true, optional: false, required: false
  public get totalMatches() {
    return this.getNumberAttribute('total_matches');
  }
}

export class DataNutanixFoundationCentralImagedNodesListMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedNodesListMetadataOutputReference {
    return new DataNutanixFoundationCentralImagedNodesListMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedNodesListFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#node_state DataNutanixFoundationCentralImagedNodesList#node_state}
  */
  readonly nodeState?: string;
}

export function dataNutanixFoundationCentralImagedNodesListFiltersToTerraform(struct?: DataNutanixFoundationCentralImagedNodesListFiltersOutputReference | DataNutanixFoundationCentralImagedNodesListFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_state: cdktf.stringToTerraform(struct!.nodeState),
  }
}


export function dataNutanixFoundationCentralImagedNodesListFiltersToHclTerraform(struct?: DataNutanixFoundationCentralImagedNodesListFiltersOutputReference | DataNutanixFoundationCentralImagedNodesListFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_state: {
      value: cdktf.stringToHclTerraform(struct!.nodeState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixFoundationCentralImagedNodesListFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNutanixFoundationCentralImagedNodesListFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeState = this._nodeState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedNodesListFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeState = value.nodeState;
    }
  }

  // node_state - computed: false, optional: true, required: false
  private _nodeState?: string; 
  public get nodeState() {
    return this.getStringAttribute('node_state');
  }
  public set nodeState(value: string) {
    this._nodeState = value;
  }
  public resetNodeState() {
    this._nodeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStateInput() {
    return this._nodeState;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list nutanix_foundation_central_imaged_nodes_list}
*/
export class DataNutanixFoundationCentralImagedNodesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_imaged_nodes_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFoundationCentralImagedNodesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFoundationCentralImagedNodesList to import
  * @param importFromId The id of the existing DataNutanixFoundationCentralImagedNodesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFoundationCentralImagedNodesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_imaged_nodes_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_imaged_nodes_list nutanix_foundation_central_imaged_nodes_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFoundationCentralImagedNodesListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFoundationCentralImagedNodesListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_imaged_nodes_list',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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
    this._length = config.length;
    this._offset = config.offset;
    this._filters.internalValue = config.filters;
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

  // imaged_nodes - computed: true, optional: false, required: false
  private _imagedNodes = new DataNutanixFoundationCentralImagedNodesListImagedNodesList(this, "imaged_nodes", false);
  public get imagedNodes() {
    return this._imagedNodes;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFoundationCentralImagedNodesListMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataNutanixFoundationCentralImagedNodesListFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataNutanixFoundationCentralImagedNodesListFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      offset: cdktf.numberToTerraform(this._offset),
      filters: dataNutanixFoundationCentralImagedNodesListFiltersToTerraform(this._filters.internalValue),
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
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: dataNutanixFoundationCentralImagedNodesListFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixFoundationCentralImagedNodesListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
