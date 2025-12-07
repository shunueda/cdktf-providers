// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/data-sources/virtual_environment_sdn_vnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentSdnVnetsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataProxmoxVirtualEnvironmentSdnVnetsVnets {
}

export function dataProxmoxVirtualEnvironmentSdnVnetsVnetsToTerraform(struct?: DataProxmoxVirtualEnvironmentSdnVnetsVnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentSdnVnetsVnetsToHclTerraform(struct?: DataProxmoxVirtualEnvironmentSdnVnetsVnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentSdnVnetsVnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualEnvironmentSdnVnetsVnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentSdnVnetsVnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolate_ports - computed: true, optional: false, required: false
  public get isolatePorts() {
    return this.getBooleanAttribute('isolate_ports');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // vlan_aware - computed: true, optional: false, required: false
  public get vlanAware() {
    return this.getBooleanAttribute('vlan_aware');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataProxmoxVirtualEnvironmentSdnVnetsVnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualEnvironmentSdnVnetsVnetsOutputReference {
    return new DataProxmoxVirtualEnvironmentSdnVnetsVnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/data-sources/virtual_environment_sdn_vnets proxmox_virtual_environment_sdn_vnets}
*/
export class DataProxmoxVirtualEnvironmentSdnVnets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_vnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentSdnVnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentSdnVnets to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentSdnVnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/data-sources/virtual_environment_sdn_vnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentSdnVnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_vnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/data-sources/virtual_environment_sdn_vnets proxmox_virtual_environment_sdn_vnets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentSdnVnetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentSdnVnetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_vnets',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // vnets - computed: true, optional: false, required: false
  private _vnets = new DataProxmoxVirtualEnvironmentSdnVnetsVnetsList(this, "vnets", false);
  public get vnets() {
    return this._vnets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
