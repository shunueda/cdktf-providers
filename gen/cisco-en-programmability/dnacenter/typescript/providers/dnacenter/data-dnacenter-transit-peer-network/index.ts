// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterTransitPeerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network#id DataDnacenterTransitPeerNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * transitPeerNetworkName query parameter. Transit or Peer Network Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network#transit_peer_network_name DataDnacenterTransitPeerNetwork#transit_peer_network_name}
  */
  readonly transitPeerNetworkName: string;
}
export interface DataDnacenterTransitPeerNetworkItemIpTransitSettings {
}

export function dataDnacenterTransitPeerNetworkItemIpTransitSettingsToTerraform(struct?: DataDnacenterTransitPeerNetworkItemIpTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTransitPeerNetworkItemIpTransitSettingsToHclTerraform(struct?: DataDnacenterTransitPeerNetworkItemIpTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTransitPeerNetworkItemIpTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTransitPeerNetworkItemIpTransitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTransitPeerNetworkItemIpTransitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_system_number - computed: true, optional: false, required: false
  public get autonomousSystemNumber() {
    return this.getStringAttribute('autonomous_system_number');
  }

  // routing_protocol_name - computed: true, optional: false, required: false
  public get routingProtocolName() {
    return this.getStringAttribute('routing_protocol_name');
  }
}

export class DataDnacenterTransitPeerNetworkItemIpTransitSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTransitPeerNetworkItemIpTransitSettingsOutputReference {
    return new DataDnacenterTransitPeerNetworkItemIpTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings {
}

export function dataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsToTerraform(struct?: DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsToHclTerraform(struct?: DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
}

export class DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference {
    return new DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTransitPeerNetworkItemSdaTransitSettings {
}

export function dataDnacenterTransitPeerNetworkItemSdaTransitSettingsToTerraform(struct?: DataDnacenterTransitPeerNetworkItemSdaTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTransitPeerNetworkItemSdaTransitSettingsToHclTerraform(struct?: DataDnacenterTransitPeerNetworkItemSdaTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTransitPeerNetworkItemSdaTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTransitPeerNetworkItemSdaTransitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTransitPeerNetworkItemSdaTransitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transit_control_plane_settings - computed: true, optional: false, required: false
  private _transitControlPlaneSettings = new DataDnacenterTransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsList(this, "transit_control_plane_settings", false);
  public get transitControlPlaneSettings() {
    return this._transitControlPlaneSettings;
  }
}

export class DataDnacenterTransitPeerNetworkItemSdaTransitSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTransitPeerNetworkItemSdaTransitSettingsOutputReference {
    return new DataDnacenterTransitPeerNetworkItemSdaTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterTransitPeerNetworkItem {
}

export function dataDnacenterTransitPeerNetworkItemToTerraform(struct?: DataDnacenterTransitPeerNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterTransitPeerNetworkItemToHclTerraform(struct?: DataDnacenterTransitPeerNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterTransitPeerNetworkItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterTransitPeerNetworkItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterTransitPeerNetworkItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_transit_settings - computed: true, optional: false, required: false
  private _ipTransitSettings = new DataDnacenterTransitPeerNetworkItemIpTransitSettingsList(this, "ip_transit_settings", false);
  public get ipTransitSettings() {
    return this._ipTransitSettings;
  }

  // sda_transit_settings - computed: true, optional: false, required: false
  private _sdaTransitSettings = new DataDnacenterTransitPeerNetworkItemSdaTransitSettingsList(this, "sda_transit_settings", false);
  public get sdaTransitSettings() {
    return this._sdaTransitSettings;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_peer_network_name - computed: true, optional: false, required: false
  public get transitPeerNetworkName() {
    return this.getStringAttribute('transit_peer_network_name');
  }

  // transit_peer_network_type - computed: true, optional: false, required: false
  public get transitPeerNetworkType() {
    return this.getStringAttribute('transit_peer_network_type');
  }
}

export class DataDnacenterTransitPeerNetworkItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterTransitPeerNetworkItemOutputReference {
    return new DataDnacenterTransitPeerNetworkItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network dnacenter_transit_peer_network}
*/
export class DataDnacenterTransitPeerNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_transit_peer_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterTransitPeerNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterTransitPeerNetwork to import
  * @param importFromId The id of the existing DataDnacenterTransitPeerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterTransitPeerNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_transit_peer_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/transit_peer_network dnacenter_transit_peer_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterTransitPeerNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterTransitPeerNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_transit_peer_network',
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
    this._transitPeerNetworkName = config.transitPeerNetworkName;
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
  private _item = new DataDnacenterTransitPeerNetworkItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // transit_peer_network_name - computed: false, optional: false, required: true
  private _transitPeerNetworkName?: string; 
  public get transitPeerNetworkName() {
    return this.getStringAttribute('transit_peer_network_name');
  }
  public set transitPeerNetworkName(value: string) {
    this._transitPeerNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitPeerNetworkNameInput() {
    return this._transitPeerNetworkName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_peer_network_name: cdktf.stringToTerraform(this._transitPeerNetworkName),
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
      transit_peer_network_name: {
        value: cdktf.stringToHclTerraform(this._transitPeerNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
