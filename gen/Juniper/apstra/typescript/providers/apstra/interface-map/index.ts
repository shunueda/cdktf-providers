// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of Device Profile to be mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#device_profile_id InterfaceMap#device_profile_id}
  */
  readonly deviceProfileId: string;
  /**
  * Set of interface mapping info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#interfaces InterfaceMap#interfaces}
  */
  readonly interfaces: InterfaceMapInterfaces[] | cdktf.IResolvable;
  /**
  * ID of Logical Device to be mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#logical_device_id InterfaceMap#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Interface Map name as displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#name InterfaceMap#name}
  */
  readonly name: string;
}
export interface InterfaceMapInterfaces {
  /**
  * Panel and Port number of logical device expressed in the form "<panel>/<port>". Both numbers are 1-indexed, so the 2nd port on the 1st panel would be "1/2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#logical_device_port InterfaceMap#logical_device_port}
  */
  readonly logicalDevicePort: string;
  /**
  * Interface name found in the Device Profile, e.g. "et-0/0/1:2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#physical_interface_name InterfaceMap#physical_interface_name}
  */
  readonly physicalInterfaceName: string;
  /**
  * Transformation ID number identifying the desired port behavior, detailed in the Device Profile. Required only when multiple transformation candidates are found for a given physical_interface_name and speed as determined by definitions found the Logical Device definition and logical_device_port field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#transformation_id InterfaceMap#transformation_id}
  */
  readonly transformationId?: number;
}

export function interfaceMapInterfacesToTerraform(struct?: InterfaceMapInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_device_port: cdktf.stringToTerraform(struct!.logicalDevicePort),
    physical_interface_name: cdktf.stringToTerraform(struct!.physicalInterfaceName),
    transformation_id: cdktf.numberToTerraform(struct!.transformationId),
  }
}


export function interfaceMapInterfacesToHclTerraform(struct?: InterfaceMapInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_device_port: {
      value: cdktf.stringToHclTerraform(struct!.logicalDevicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.physicalInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_id: {
      value: cdktf.numberToHclTerraform(struct!.transformationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceMapInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceMapInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalDevicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDevicePort = this._logicalDevicePort;
    }
    if (this._physicalInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalInterfaceName = this._physicalInterfaceName;
    }
    if (this._transformationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationId = this._transformationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceMapInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalDevicePort = undefined;
      this._physicalInterfaceName = undefined;
      this._transformationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalDevicePort = value.logicalDevicePort;
      this._physicalInterfaceName = value.physicalInterfaceName;
      this._transformationId = value.transformationId;
    }
  }

  // logical_device_port - computed: false, optional: false, required: true
  private _logicalDevicePort?: string; 
  public get logicalDevicePort() {
    return this.getStringAttribute('logical_device_port');
  }
  public set logicalDevicePort(value: string) {
    this._logicalDevicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDevicePortInput() {
    return this._logicalDevicePort;
  }

  // physical_interface_name - computed: false, optional: false, required: true
  private _physicalInterfaceName?: string; 
  public get physicalInterfaceName() {
    return this.getStringAttribute('physical_interface_name');
  }
  public set physicalInterfaceName(value: string) {
    this._physicalInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalInterfaceNameInput() {
    return this._physicalInterfaceName;
  }

  // transformation_id - computed: true, optional: true, required: false
  private _transformationId?: number; 
  public get transformationId() {
    return this.getNumberAttribute('transformation_id');
  }
  public set transformationId(value: number) {
    this._transformationId = value;
  }
  public resetTransformationId() {
    this._transformationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationIdInput() {
    return this._transformationId;
  }
}

export class InterfaceMapInterfacesList extends cdktf.ComplexList {
  public internalValue? : InterfaceMapInterfaces[] | cdktf.IResolvable

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
  public get(index: number): InterfaceMapInterfacesOutputReference {
    return new InterfaceMapInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceMapUnusedInterfaces {
}

export function interfaceMapUnusedInterfacesToTerraform(struct?: InterfaceMapUnusedInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceMapUnusedInterfacesToHclTerraform(struct?: InterfaceMapUnusedInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceMapUnusedInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceMapUnusedInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceMapUnusedInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device_port - computed: true, optional: false, required: false
  public get logicalDevicePort() {
    return this.getStringAttribute('logical_device_port');
  }

  // physical_interface_name - computed: true, optional: false, required: false
  public get physicalInterfaceName() {
    return this.getStringAttribute('physical_interface_name');
  }

  // transformation_id - computed: true, optional: false, required: false
  public get transformationId() {
    return this.getNumberAttribute('transformation_id');
  }
}

export class InterfaceMapUnusedInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceMapUnusedInterfacesOutputReference {
    return new InterfaceMapUnusedInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map apstra_interface_map}
*/
export class InterfaceMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_interface_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceMap to import
  * @param importFromId The id of the existing InterfaceMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_interface_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/interface_map apstra_interface_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceMapConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceMapConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_interface_map',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceProfileId = config.deviceProfileId;
    this._interfaces.internalValue = config.interfaces;
    this._logicalDeviceId = config.logicalDeviceId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_profile_id - computed: false, optional: false, required: true
  private _deviceProfileId?: string; 
  public get deviceProfileId() {
    return this.getStringAttribute('device_profile_id');
  }
  public set deviceProfileId(value: string) {
    this._deviceProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileIdInput() {
    return this._deviceProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new InterfaceMapInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: InterfaceMapInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // logical_device_id - computed: false, optional: false, required: true
  private _logicalDeviceId?: string; 
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }
  public set logicalDeviceId(value: string) {
    this._logicalDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDeviceIdInput() {
    return this._logicalDeviceId;
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

  // unused_interfaces - computed: true, optional: false, required: false
  private _unusedInterfaces = new InterfaceMapUnusedInterfacesList(this, "unused_interfaces", true);
  public get unusedInterfaces() {
    return this._unusedInterfaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_profile_id: cdktf.stringToTerraform(this._deviceProfileId),
      interfaces: cdktf.listMapper(interfaceMapInterfacesToTerraform, false)(this._interfaces.internalValue),
      logical_device_id: cdktf.stringToTerraform(this._logicalDeviceId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_profile_id: {
        value: cdktf.stringToHclTerraform(this._deviceProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(interfaceMapInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InterfaceMapInterfacesList",
      },
      logical_device_id: {
        value: cdktf.stringToHclTerraform(this._logicalDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
