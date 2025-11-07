// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterVirtualNetworkBindingConstructorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to determine the redundancy group and access/leaf relationships of each specified switch ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor#blueprint_id DataApstraDatacenterVirtualNetworkBindingConstructor#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Set of graph db node IDs representing access and/or leaf switches for which a binding should be constructed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor#switch_ids DataApstraDatacenterVirtualNetworkBindingConstructor#switch_ids}
  */
  readonly switchIds: string[];
  /**
  * VLAN ID will be populated directly into the `bindings` output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor#vlan_id DataApstraDatacenterVirtualNetworkBindingConstructor#vlan_id}
  */
  readonly vlanId?: number;
}
export interface DataApstraDatacenterVirtualNetworkBindingConstructorBindings {
}

export function dataApstraDatacenterVirtualNetworkBindingConstructorBindingsToTerraform(struct?: DataApstraDatacenterVirtualNetworkBindingConstructorBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterVirtualNetworkBindingConstructorBindingsToHclTerraform(struct?: DataApstraDatacenterVirtualNetworkBindingConstructorBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterVirtualNetworkBindingConstructorBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraDatacenterVirtualNetworkBindingConstructorBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworkBindingConstructorBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_ids - computed: true, optional: false, required: false
  public get accessIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_ids'));
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataApstraDatacenterVirtualNetworkBindingConstructorBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraDatacenterVirtualNetworkBindingConstructorBindingsOutputReference {
    return new DataApstraDatacenterVirtualNetworkBindingConstructorBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor apstra_datacenter_virtual_network_binding_constructor}
*/
export class DataApstraDatacenterVirtualNetworkBindingConstructor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_virtual_network_binding_constructor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterVirtualNetworkBindingConstructor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterVirtualNetworkBindingConstructor to import
  * @param importFromId The id of the existing DataApstraDatacenterVirtualNetworkBindingConstructor that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterVirtualNetworkBindingConstructor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_virtual_network_binding_constructor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network_binding_constructor apstra_datacenter_virtual_network_binding_constructor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterVirtualNetworkBindingConstructorConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterVirtualNetworkBindingConstructorConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_virtual_network_binding_constructor',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._switchIds = config.switchIds;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataApstraDatacenterVirtualNetworkBindingConstructorBindingsMap(this, "bindings");
  public get bindings() {
    return this._bindings;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // switch_ids - computed: false, optional: false, required: true
  private _switchIds?: string[]; 
  public get switchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_ids'));
  }
  public set switchIds(value: string[]) {
    this._switchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdsInput() {
    return this._switchIds;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
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
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      switch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchIds),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
