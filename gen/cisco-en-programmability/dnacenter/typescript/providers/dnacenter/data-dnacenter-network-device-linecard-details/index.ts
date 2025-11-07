// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceLinecardDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceUuid path parameter. instanceuuid of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details#device_uuid DataDnacenterNetworkDeviceLinecardDetails#device_uuid}
  */
  readonly deviceUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details#id DataDnacenterNetworkDeviceLinecardDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterNetworkDeviceLinecardDetailsItems {
}

export function dataDnacenterNetworkDeviceLinecardDetailsItemsToTerraform(struct?: DataDnacenterNetworkDeviceLinecardDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceLinecardDetailsItemsToHclTerraform(struct?: DataDnacenterNetworkDeviceLinecardDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceLinecardDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceLinecardDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceLinecardDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partno - computed: true, optional: false, required: false
  public get partno() {
    return this.getStringAttribute('partno');
  }

  // serialno - computed: true, optional: false, required: false
  public get serialno() {
    return this.getStringAttribute('serialno');
  }

  // slotno - computed: true, optional: false, required: false
  public get slotno() {
    return this.getStringAttribute('slotno');
  }

  // switchno - computed: true, optional: false, required: false
  public get switchno() {
    return this.getStringAttribute('switchno');
  }
}

export class DataDnacenterNetworkDeviceLinecardDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceLinecardDetailsItemsOutputReference {
    return new DataDnacenterNetworkDeviceLinecardDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details dnacenter_network_device_linecard_details}
*/
export class DataDnacenterNetworkDeviceLinecardDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_linecard_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceLinecardDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceLinecardDetails to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceLinecardDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceLinecardDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_linecard_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_linecard_details dnacenter_network_device_linecard_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceLinecardDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceLinecardDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_linecard_details',
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
    this._deviceUuid = config.deviceUuid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_uuid - computed: false, optional: false, required: true
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterNetworkDeviceLinecardDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
