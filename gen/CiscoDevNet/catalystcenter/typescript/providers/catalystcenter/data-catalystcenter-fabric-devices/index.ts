// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_devices#fabric_id DataCatalystcenterFabricDevices#fabric_id}
  */
  readonly fabricId: string;
}
export interface DataCatalystcenterFabricDevicesFabricDevices {
}

export function dataCatalystcenterFabricDevicesFabricDevicesToTerraform(struct?: DataCatalystcenterFabricDevicesFabricDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterFabricDevicesFabricDevicesToHclTerraform(struct?: DataCatalystcenterFabricDevicesFabricDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterFabricDevicesFabricDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterFabricDevicesFabricDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterFabricDevicesFabricDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // border_priority - computed: true, optional: false, required: false
  public get borderPriority() {
    return this.getNumberAttribute('border_priority');
  }

  // border_types - computed: true, optional: false, required: false
  public get borderTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('border_types'));
  }

  // default_exit - computed: true, optional: false, required: false
  public get defaultExit() {
    return this.getBooleanAttribute('default_exit');
  }

  // device_roles - computed: true, optional: false, required: false
  public get deviceRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('device_roles'));
  }

  // fabric_id - computed: true, optional: false, required: false
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_external_routes - computed: true, optional: false, required: false
  public get importExternalRoutes() {
    return this.getBooleanAttribute('import_external_routes');
  }

  // local_autonomous_system_number - computed: true, optional: false, required: false
  public get localAutonomousSystemNumber() {
    return this.getStringAttribute('local_autonomous_system_number');
  }

  // network_device_id - computed: true, optional: false, required: false
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }

  // prepend_autonomous_system_count - computed: true, optional: false, required: false
  public get prependAutonomousSystemCount() {
    return this.getNumberAttribute('prepend_autonomous_system_count');
  }
}

export class DataCatalystcenterFabricDevicesFabricDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterFabricDevicesFabricDevicesOutputReference {
    return new DataCatalystcenterFabricDevicesFabricDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_devices catalystcenter_fabric_devices}
*/
export class DataCatalystcenterFabricDevices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricDevices to import
  * @param importFromId The id of the existing DataCatalystcenterFabricDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_devices catalystcenter_fabric_devices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_devices',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_devices - computed: true, optional: false, required: false
  private _fabricDevices = new DataCatalystcenterFabricDevicesFabricDevicesList(this, "fabric_devices", true);
  public get fabricDevices() {
    return this._fabricDevices;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
