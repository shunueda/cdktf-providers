// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#id DataHcloudServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#name DataHcloudServer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#placement_group_id DataHcloudServer#placement_group_id}
  */
  readonly placementGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#selector DataHcloudServer#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#with_selector DataHcloudServer#with_selector}
  */
  readonly withSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#with_status DataHcloudServer#with_status}
  */
  readonly withStatus?: string[];
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#network DataHcloudServer#network}
  */
  readonly network?: DataHcloudServerNetwork[] | cdktf.IResolvable;
}
export interface DataHcloudServerNetwork {
}

export function dataHcloudServerNetworkToTerraform(struct?: DataHcloudServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudServerNetworkToHclTerraform(struct?: DataHcloudServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudServerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudServerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudServerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // alias_ips - computed: true, optional: false, required: false
  public get aliasIps() {
    return cdktf.Fn.tolist(this.getListAttribute('alias_ips'));
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
}

export class DataHcloudServerNetworkList extends cdktf.ComplexList {
  public internalValue? : DataHcloudServerNetwork[] | cdktf.IResolvable

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
  public get(index: number): DataHcloudServerNetworkOutputReference {
    return new DataHcloudServerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server hcloud_server}
*/
export class DataHcloudServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudServer to import
  * @param importFromId The id of the existing DataHcloudServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/server hcloud_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_server',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
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
    this._name = config.name;
    this._placementGroupId = config.placementGroupId;
    this._selector = config.selector;
    this._withSelector = config.withSelector;
    this._withStatus = config.withStatus;
    this._network.internalValue = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_window - computed: true, optional: false, required: false
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }

  // backups - computed: true, optional: false, required: false
  public get backups() {
    return this.getBooleanAttribute('backups');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // firewall_ids - computed: true, optional: false, required: false
  public get firewallIds() {
    return this.getNumberListAttribute('firewall_ids');
  }

  // id - computed: true, optional: true, required: false
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_network - computed: true, optional: false, required: false
  public get ipv6Network() {
    return this.getStringAttribute('ipv6_network');
  }

  // iso - computed: true, optional: false, required: false
  public get iso() {
    return this.getStringAttribute('iso');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // placement_group_id - computed: false, optional: true, required: false
  private _placementGroupId?: number; 
  public get placementGroupId() {
    return this.getNumberAttribute('placement_group_id');
  }
  public set placementGroupId(value: number) {
    this._placementGroupId = value;
  }
  public resetPlacementGroupId() {
    this._placementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }

  // primary_disk_size - computed: true, optional: false, required: false
  public get primaryDiskSize() {
    return this.getNumberAttribute('primary_disk_size');
  }

  // rebuild_protection - computed: true, optional: false, required: false
  public get rebuildProtection() {
    return this.getBooleanAttribute('rebuild_protection');
  }

  // rescue - computed: true, optional: false, required: false
  public get rescue() {
    return this.getStringAttribute('rescue');
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // with_selector - computed: false, optional: true, required: false
  private _withSelector?: string; 
  public get withSelector() {
    return this.getStringAttribute('with_selector');
  }
  public set withSelector(value: string) {
    this._withSelector = value;
  }
  public resetWithSelector() {
    this._withSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectorInput() {
    return this._withSelector;
  }

  // with_status - computed: false, optional: true, required: false
  private _withStatus?: string[]; 
  public get withStatus() {
    return this.getListAttribute('with_status');
  }
  public set withStatus(value: string[]) {
    this._withStatus = value;
  }
  public resetWithStatus() {
    this._withStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withStatusInput() {
    return this._withStatus;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataHcloudServerNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataHcloudServerNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      placement_group_id: cdktf.numberToTerraform(this._placementGroupId),
      selector: cdktf.stringToTerraform(this._selector),
      with_selector: cdktf.stringToTerraform(this._withSelector),
      with_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._withStatus),
      network: cdktf.listMapper(dataHcloudServerNetworkToTerraform, true)(this._network.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group_id: {
        value: cdktf.numberToHclTerraform(this._placementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_selector: {
        value: cdktf.stringToHclTerraform(this._withSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._withStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network: {
        value: cdktf.listMapperHcl(dataHcloudServerNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHcloudServerNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
