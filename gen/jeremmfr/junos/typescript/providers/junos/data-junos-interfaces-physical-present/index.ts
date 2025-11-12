// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosInterfacesPhysicalPresentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter on interfaces that have admin status `up`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present#match_admin_up DataJunosInterfacesPhysicalPresent#match_admin_up}
  */
  readonly matchAdminUp?: boolean | cdktf.IResolvable;
  /**
  * A regexp to apply filter on name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present#match_name DataJunosInterfacesPhysicalPresent#match_name}
  */
  readonly matchName?: string;
  /**
  * Filter on interfaces that have operational status `up`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present#match_oper_up DataJunosInterfacesPhysicalPresent#match_oper_up}
  */
  readonly matchOperUp?: boolean | cdktf.IResolvable;
}
export interface DataJunosInterfacesPhysicalPresentInterfaceStatuses {
}

export function dataJunosInterfacesPhysicalPresentInterfaceStatusesToTerraform(struct?: DataJunosInterfacesPhysicalPresentInterfaceStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacesPhysicalPresentInterfaceStatusesToHclTerraform(struct?: DataJunosInterfacesPhysicalPresentInterfaceStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacesPhysicalPresentInterfaceStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfacesPhysicalPresentInterfaceStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacesPhysicalPresentInterfaceStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }
}

export class DataJunosInterfacesPhysicalPresentInterfaceStatusesList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfacesPhysicalPresentInterfaceStatusesOutputReference {
    return new DataJunosInterfacesPhysicalPresentInterfaceStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfacesPhysicalPresentInterfaces {
}

export function dataJunosInterfacesPhysicalPresentInterfacesToTerraform(struct?: DataJunosInterfacesPhysicalPresentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacesPhysicalPresentInterfacesToHclTerraform(struct?: DataJunosInterfacesPhysicalPresentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacesPhysicalPresentInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataJunosInterfacesPhysicalPresentInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacesPhysicalPresentInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // logical_interface_names - computed: true, optional: false, required: false
  public get logicalInterfaceNames() {
    return this.getListAttribute('logical_interface_names');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }
}

export class DataJunosInterfacesPhysicalPresentInterfacesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataJunosInterfacesPhysicalPresentInterfacesOutputReference {
    return new DataJunosInterfacesPhysicalPresentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present junos_interfaces_physical_present}
*/
export class DataJunosInterfacesPhysicalPresent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interfaces_physical_present";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosInterfacesPhysicalPresent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosInterfacesPhysicalPresent to import
  * @param importFromId The id of the existing DataJunosInterfacesPhysicalPresent that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosInterfacesPhysicalPresent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interfaces_physical_present", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interfaces_physical_present junos_interfaces_physical_present} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosInterfacesPhysicalPresentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosInterfacesPhysicalPresentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_interfaces_physical_present',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._matchAdminUp = config.matchAdminUp;
    this._matchName = config.matchName;
    this._matchOperUp = config.matchOperUp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_names - computed: true, optional: false, required: false
  public get interfaceNames() {
    return this.getListAttribute('interface_names');
  }

  // interface_statuses - computed: true, optional: false, required: false
  private _interfaceStatuses = new DataJunosInterfacesPhysicalPresentInterfaceStatusesList(this, "interface_statuses", false);
  public get interfaceStatuses() {
    return this._interfaceStatuses;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataJunosInterfacesPhysicalPresentInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }

  // match_admin_up - computed: false, optional: true, required: false
  private _matchAdminUp?: boolean | cdktf.IResolvable; 
  public get matchAdminUp() {
    return this.getBooleanAttribute('match_admin_up');
  }
  public set matchAdminUp(value: boolean | cdktf.IResolvable) {
    this._matchAdminUp = value;
  }
  public resetMatchAdminUp() {
    this._matchAdminUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAdminUpInput() {
    return this._matchAdminUp;
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_oper_up - computed: false, optional: true, required: false
  private _matchOperUp?: boolean | cdktf.IResolvable; 
  public get matchOperUp() {
    return this.getBooleanAttribute('match_oper_up');
  }
  public set matchOperUp(value: boolean | cdktf.IResolvable) {
    this._matchOperUp = value;
  }
  public resetMatchOperUp() {
    this._matchOperUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperUpInput() {
    return this._matchOperUp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      match_admin_up: cdktf.booleanToTerraform(this._matchAdminUp),
      match_name: cdktf.stringToTerraform(this._matchName),
      match_oper_up: cdktf.booleanToTerraform(this._matchOperUp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      match_admin_up: {
        value: cdktf.booleanToHclTerraform(this._matchAdminUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_name: {
        value: cdktf.stringToHclTerraform(this._matchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_oper_up: {
        value: cdktf.booleanToHclTerraform(this._matchOperUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
