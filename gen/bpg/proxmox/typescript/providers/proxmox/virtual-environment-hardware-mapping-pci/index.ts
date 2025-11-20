// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentHardwareMappingPciConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comment of this PCI hardware mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#comment VirtualEnvironmentHardwareMappingPci#comment}
  */
  readonly comment?: string;
  /**
  * The actual map of devices for the PCI hardware mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#map VirtualEnvironmentHardwareMappingPci#map}
  */
  readonly map: VirtualEnvironmentHardwareMappingPciMap[] | cdktf.IResolvable;
  /**
  * Indicates whether to enable mediated devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#mediated_devices VirtualEnvironmentHardwareMappingPci#mediated_devices}
  */
  readonly mediatedDevices?: boolean | cdktf.IResolvable;
  /**
  * The name of this PCI hardware mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#name VirtualEnvironmentHardwareMappingPci#name}
  */
  readonly name: string;
}
export interface VirtualEnvironmentHardwareMappingPciMap {
  /**
  * The comment of the mapped PCI device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#comment VirtualEnvironmentHardwareMappingPci#comment}
  */
  readonly comment?: string;
  /**
  * The ID of the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#id VirtualEnvironmentHardwareMappingPci#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The IOMMU group of the map. Not mandatory for the Proxmox VE API call, but causes a PCI hardware mapping to be incomplete when not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#iommu_group VirtualEnvironmentHardwareMappingPci#iommu_group}
  */
  readonly iommuGroup?: number;
  /**
  * The node name of the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#node VirtualEnvironmentHardwareMappingPci#node}
  */
  readonly nodeAttribute: string;
  /**
  * The path of the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#path VirtualEnvironmentHardwareMappingPci#path}
  */
  readonly path: string;
  /**
  * The subsystem ID group of the map. Not mandatory for the Proxmox VE API call, but causes a PCI hardware mapping to be incomplete when not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#subsystem_id VirtualEnvironmentHardwareMappingPci#subsystem_id}
  */
  readonly subsystemId?: string;
}

export function virtualEnvironmentHardwareMappingPciMapToTerraform(struct?: VirtualEnvironmentHardwareMappingPciMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    iommu_group: cdktf.numberToTerraform(struct!.iommuGroup),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    path: cdktf.stringToTerraform(struct!.path),
    subsystem_id: cdktf.stringToTerraform(struct!.subsystemId),
  }
}


export function virtualEnvironmentHardwareMappingPciMapToHclTerraform(struct?: VirtualEnvironmentHardwareMappingPciMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iommu_group: {
      value: cdktf.numberToHclTerraform(struct!.iommuGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subsystem_id: {
      value: cdktf.stringToHclTerraform(struct!.subsystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentHardwareMappingPciMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentHardwareMappingPciMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._iommuGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.iommuGroup = this._iommuGroup;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._subsystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemId = this._subsystemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentHardwareMappingPciMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._iommuGroup = undefined;
      this._node = undefined;
      this._path = undefined;
      this._subsystemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._id = value.id;
      this._iommuGroup = value.iommuGroup;
      this._node = value.nodeAttribute;
      this._path = value.path;
      this._subsystemId = value.subsystemId;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iommu_group - computed: false, optional: true, required: false
  private _iommuGroup?: number; 
  public get iommuGroup() {
    return this.getNumberAttribute('iommu_group');
  }
  public set iommuGroup(value: number) {
    this._iommuGroup = value;
  }
  public resetIommuGroup() {
    this._iommuGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iommuGroupInput() {
    return this._iommuGroup;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // subsystem_id - computed: false, optional: true, required: false
  private _subsystemId?: string; 
  public get subsystemId() {
    return this.getStringAttribute('subsystem_id');
  }
  public set subsystemId(value: string) {
    this._subsystemId = value;
  }
  public resetSubsystemId() {
    this._subsystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemIdInput() {
    return this._subsystemId;
  }
}

export class VirtualEnvironmentHardwareMappingPciMapList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentHardwareMappingPciMap[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentHardwareMappingPciMapOutputReference {
    return new VirtualEnvironmentHardwareMappingPciMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci proxmox_virtual_environment_hardware_mapping_pci}
*/
export class VirtualEnvironmentHardwareMappingPci extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_hardware_mapping_pci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentHardwareMappingPci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentHardwareMappingPci to import
  * @param importFromId The id of the existing VirtualEnvironmentHardwareMappingPci that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentHardwareMappingPci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_hardware_mapping_pci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_hardware_mapping_pci proxmox_virtual_environment_hardware_mapping_pci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentHardwareMappingPciConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentHardwareMappingPciConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_hardware_mapping_pci',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._map.internalValue = config.map;
    this._mediatedDevices = config.mediatedDevices;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // map - computed: false, optional: false, required: true
  private _map = new VirtualEnvironmentHardwareMappingPciMapList(this, "map", true);
  public get map() {
    return this._map;
  }
  public putMap(value: VirtualEnvironmentHardwareMappingPciMap[] | cdktf.IResolvable) {
    this._map.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // mediated_devices - computed: true, optional: true, required: false
  private _mediatedDevices?: boolean | cdktf.IResolvable; 
  public get mediatedDevices() {
    return this.getBooleanAttribute('mediated_devices');
  }
  public set mediatedDevices(value: boolean | cdktf.IResolvable) {
    this._mediatedDevices = value;
  }
  public resetMediatedDevices() {
    this._mediatedDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatedDevicesInput() {
    return this._mediatedDevices;
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
      comment: cdktf.stringToTerraform(this._comment),
      map: cdktf.listMapper(virtualEnvironmentHardwareMappingPciMapToTerraform, false)(this._map.internalValue),
      mediated_devices: cdktf.booleanToTerraform(this._mediatedDevices),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map: {
        value: cdktf.listMapperHcl(virtualEnvironmentHardwareMappingPciMapToHclTerraform, false)(this._map.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualEnvironmentHardwareMappingPciMapList",
      },
      mediated_devices: {
        value: cdktf.booleanToHclTerraform(this._mediatedDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
