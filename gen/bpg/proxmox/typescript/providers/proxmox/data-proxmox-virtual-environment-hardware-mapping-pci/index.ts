// https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_hardware_mapping_pci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentHardwareMappingPciConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this PCI hardware mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_hardware_mapping_pci#name DataProxmoxVirtualEnvironmentHardwareMappingPci#name}
  */
  readonly name: string;
}
export interface DataProxmoxVirtualEnvironmentHardwareMappingPciMap {
}

export function dataProxmoxVirtualEnvironmentHardwareMappingPciMapToTerraform(struct?: DataProxmoxVirtualEnvironmentHardwareMappingPciMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentHardwareMappingPciMapToHclTerraform(struct?: DataProxmoxVirtualEnvironmentHardwareMappingPciMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentHardwareMappingPciMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualEnvironmentHardwareMappingPciMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentHardwareMappingPciMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iommu_group - computed: true, optional: false, required: false
  public get iommuGroup() {
    return this.getNumberAttribute('iommu_group');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // subsystem_id - computed: true, optional: false, required: false
  public get subsystemId() {
    return this.getStringAttribute('subsystem_id');
  }
}

export class DataProxmoxVirtualEnvironmentHardwareMappingPciMapList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualEnvironmentHardwareMappingPciMapOutputReference {
    return new DataProxmoxVirtualEnvironmentHardwareMappingPciMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_hardware_mapping_pci proxmox_virtual_environment_hardware_mapping_pci}
*/
export class DataProxmoxVirtualEnvironmentHardwareMappingPci extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_hardware_mapping_pci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentHardwareMappingPci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentHardwareMappingPci to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentHardwareMappingPci that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_hardware_mapping_pci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentHardwareMappingPci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_hardware_mapping_pci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_hardware_mapping_pci proxmox_virtual_environment_hardware_mapping_pci} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentHardwareMappingPciConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentHardwareMappingPciConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_hardware_mapping_pci',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.1',
        providerVersionConstraint: '0.89.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // map - computed: true, optional: false, required: false
  private _map = new DataProxmoxVirtualEnvironmentHardwareMappingPciMapList(this, "map", true);
  public get map() {
    return this._map;
  }

  // mediated_devices - computed: true, optional: false, required: false
  public get mediatedDevices() {
    return this.getBooleanAttribute('mediated_devices');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
