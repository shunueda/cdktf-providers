// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Excludes to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#excludes DataNdfcInterfaces#excludes}
  */
  readonly excludes?: string;
  /**
  * Interface types to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#interface_types DataNdfcInterfaces#interface_types}
  */
  readonly interfaceTypes?: string;
  /**
  * List of interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#interfaces DataNdfcInterfaces#interfaces}
  */
  readonly interfaces?: DataNdfcInterfacesInterfaces[] | cdktf.IResolvable;
  /**
  * Port modes to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#port_modes DataNdfcInterfaces#port_modes}
  */
  readonly portModes?: string;
  /**
  * Serial number of switch to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#serial_number DataNdfcInterfaces#serial_number}
  */
  readonly serialNumber: string;
}
export interface DataNdfcInterfacesInterfaces {
  /**
  * Mode of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#mode DataNdfcInterfaces#mode}
  */
  readonly mode?: string;
}

export function dataNdfcInterfacesInterfacesToTerraform(struct?: DataNdfcInterfacesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataNdfcInterfacesInterfacesToHclTerraform(struct?: DataNdfcInterfacesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNdfcInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcInterfacesInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcInterfacesInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // allowed_vlans - computed: true, optional: false, required: false
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fabric_name - computed: true, optional: false, required: false
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }

  // interface_index - computed: true, optional: false, required: false
  public get interfaceIndex() {
    return this.getNumberAttribute('interface_index');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // is_physical - computed: true, optional: false, required: false
  public get isPhysical() {
    return this.getBooleanAttribute('is_physical');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // native_vlan_id - computed: true, optional: false, required: false
  public get nativeVlanId() {
    return this.getNumberAttribute('native_vlan_id');
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }

  // oper_status_cause - computed: true, optional: false, required: false
  public get operStatusCause() {
    return this.getStringAttribute('oper_status_cause');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // switch_dbid - computed: true, optional: false, required: false
  public get switchDbid() {
    return this.getNumberAttribute('switch_dbid');
  }

  // switch_name - computed: true, optional: false, required: false
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataNdfcInterfacesInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataNdfcInterfacesInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataNdfcInterfacesInterfacesOutputReference {
    return new DataNdfcInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces ndfc_interfaces}
*/
export class DataNdfcInterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcInterfaces to import
  * @param importFromId The id of the existing DataNdfcInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/data-sources/interfaces ndfc_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcInterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcInterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludes = config.excludes;
    this._interfaceTypes = config.interfaceTypes;
    this._interfaces.internalValue = config.interfaces;
    this._portModes = config.portModes;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string; 
  public get excludes() {
    return this.getStringAttribute('excludes');
  }
  public set excludes(value: string) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // interface_types - computed: false, optional: true, required: false
  private _interfaceTypes?: string; 
  public get interfaceTypes() {
    return this.getStringAttribute('interface_types');
  }
  public set interfaceTypes(value: string) {
    this._interfaceTypes = value;
  }
  public resetInterfaceTypes() {
    this._interfaceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypesInput() {
    return this._interfaceTypes;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataNdfcInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataNdfcInterfacesInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // port_modes - computed: false, optional: true, required: false
  private _portModes?: string; 
  public get portModes() {
    return this.getStringAttribute('port_modes');
  }
  public set portModes(value: string) {
    this._portModes = value;
  }
  public resetPortModes() {
    this._portModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModesInput() {
    return this._portModes;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      excludes: cdktf.stringToTerraform(this._excludes),
      interface_types: cdktf.stringToTerraform(this._interfaceTypes),
      interfaces: cdktf.listMapper(dataNdfcInterfacesInterfacesToTerraform, false)(this._interfaces.internalValue),
      port_modes: cdktf.stringToTerraform(this._portModes),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      excludes: {
        value: cdktf.stringToHclTerraform(this._excludes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_types: {
        value: cdktf.stringToHclTerraform(this._interfaceTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(dataNdfcInterfacesInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNdfcInterfacesInterfacesList",
      },
      port_modes: {
        value: cdktf.stringToHclTerraform(this._portModes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
