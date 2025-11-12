// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoDiscoveredNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks#filter DataProsimoDiscoveredNetworks#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks#id DataProsimoDiscoveredNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks#input_account_name DataProsimoDiscoveredNetworks#input_account_name}
  */
  readonly inputAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks#input_cloud_type DataProsimoDiscoveredNetworks#input_cloud_type}
  */
  readonly inputCloudType?: string;
}
export interface DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcs {
}

export function dataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsToTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsToHclTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // subnet_count - computed: true, optional: false, required: false
  public get subnetCount() {
    return this.getNumberAttribute('subnet_count');
  }
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsOutputReference {
    return new DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoDiscoveredNetworksDiscoveredNetworksRegions {
}

export function dataProsimoDiscoveredNetworksDiscoveredNetworksRegionsToTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworksRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoDiscoveredNetworksDiscoveredNetworksRegionsToHclTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworksRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoDiscoveredNetworksDiscoveredNetworksRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoDiscoveredNetworksDiscoveredNetworksRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_creds_id - computed: true, optional: false, required: false
  public get cloudCredsId() {
    return this.getStringAttribute('cloud_creds_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vpc_count - computed: true, optional: false, required: false
  public get vpcCount() {
    return this.getNumberAttribute('vpc_count');
  }

  // vpcs - computed: true, optional: false, required: false
  private _vpcs = new DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsVpcsList(this, "vpcs", true);
  public get vpcs() {
    return this._vpcs;
  }
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsOutputReference {
    return new DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoDiscoveredNetworksDiscoveredNetworks {
}

export function dataProsimoDiscoveredNetworksDiscoveredNetworksToTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoDiscoveredNetworksDiscoveredNetworksToHclTerraform(struct?: DataProsimoDiscoveredNetworksDiscoveredNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoDiscoveredNetworksDiscoveredNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoDiscoveredNetworksDiscoveredNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accountname - computed: true, optional: false, required: false
  public get accountname() {
    return this.getStringAttribute('accountname');
  }

  // cloudtype - computed: true, optional: false, required: false
  public get cloudtype() {
    return this.getStringAttribute('cloudtype');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataProsimoDiscoveredNetworksDiscoveredNetworksRegionsList(this, "regions", true);
  public get regions() {
    return this._regions;
  }
}

export class DataProsimoDiscoveredNetworksDiscoveredNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoDiscoveredNetworksDiscoveredNetworksOutputReference {
    return new DataProsimoDiscoveredNetworksDiscoveredNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks prosimo_discovered_networks}
*/
export class DataProsimoDiscoveredNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_discovered_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoDiscoveredNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoDiscoveredNetworks to import
  * @param importFromId The id of the existing DataProsimoDiscoveredNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoDiscoveredNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_discovered_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/discovered_networks prosimo_discovered_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoDiscoveredNetworksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoDiscoveredNetworksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_discovered_networks',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
    this._inputAccountName = config.inputAccountName;
    this._inputCloudType = config.inputCloudType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovered_networks - computed: true, optional: false, required: false
  private _discoveredNetworks = new DataProsimoDiscoveredNetworksDiscoveredNetworksList(this, "discovered_networks", true);
  public get discoveredNetworks() {
    return this._discoveredNetworks;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // input_account_name - computed: false, optional: true, required: false
  private _inputAccountName?: string; 
  public get inputAccountName() {
    return this.getStringAttribute('input_account_name');
  }
  public set inputAccountName(value: string) {
    this._inputAccountName = value;
  }
  public resetInputAccountName() {
    this._inputAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAccountNameInput() {
    return this._inputAccountName;
  }

  // input_cloud_type - computed: false, optional: true, required: false
  private _inputCloudType?: string; 
  public get inputCloudType() {
    return this.getStringAttribute('input_cloud_type');
  }
  public set inputCloudType(value: string) {
    this._inputCloudType = value;
  }
  public resetInputCloudType() {
    this._inputCloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCloudTypeInput() {
    return this._inputCloudType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      input_account_name: cdktf.stringToTerraform(this._inputAccountName),
      input_cloud_type: cdktf.stringToTerraform(this._inputCloudType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      input_account_name: {
        value: cdktf.stringToHclTerraform(this._inputAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_cloud_type: {
        value: cdktf.stringToHclTerraform(this._inputCloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
