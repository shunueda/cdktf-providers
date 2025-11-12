// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Logical Device name displayed in the Apstra web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#name LogicalDevice#name}
  */
  readonly name: string;
  /**
  * Details physical layout of interfaces on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#panels LogicalDevice#panels}
  */
  readonly panels: LogicalDevicePanels[] | cdktf.IResolvable;
}
export interface LogicalDevicePanelsPortGroups {
  /**
  * Number of ports in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#port_count LogicalDevice#port_count}
  */
  readonly portCount: number;
  /**
  * One or more of: 'access', 'generic', 'leaf', 'peer', 'spine', 'superspine', 'unused', by default all values are selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#port_roles LogicalDevice#port_roles}
  */
  readonly portRoles?: string[];
  /**
  * Port speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#port_speed LogicalDevice#port_speed}
  */
  readonly portSpeed: string;
}

export function logicalDevicePanelsPortGroupsToTerraform(struct?: LogicalDevicePanelsPortGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_count: cdktf.numberToTerraform(struct!.portCount),
    port_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRoles),
    port_speed: cdktf.stringToTerraform(struct!.portSpeed),
  }
}


export function logicalDevicePanelsPortGroupsToHclTerraform(struct?: LogicalDevicePanelsPortGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_speed: {
      value: cdktf.stringToHclTerraform(struct!.portSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalDevicePanelsPortGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._portRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRoles = this._portRoles;
    }
    if (this._portSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpeed = this._portSpeed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalDevicePanelsPortGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portCount = undefined;
      this._portRoles = undefined;
      this._portSpeed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portCount = value.portCount;
      this._portRoles = value.portRoles;
      this._portSpeed = value.portSpeed;
    }
  }

  // port_count - computed: false, optional: false, required: true
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // port_roles - computed: true, optional: true, required: false
  private _portRoles?: string[]; 
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }
  public set portRoles(value: string[]) {
    this._portRoles = value;
  }
  public resetPortRoles() {
    this._portRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRolesInput() {
    return this._portRoles;
  }

  // port_speed - computed: false, optional: false, required: true
  private _portSpeed?: string; 
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
  public set portSpeed(value: string) {
    this._portSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpeedInput() {
    return this._portSpeed;
  }
}

export class LogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {
  public internalValue? : LogicalDevicePanelsPortGroups[] | cdktf.IResolvable

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
  public get(index: number): LogicalDevicePanelsPortGroupsOutputReference {
    return new LogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalDevicePanels {
  /**
  * Physical horizontal dimension of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#columns LogicalDevice#columns}
  */
  readonly columns: number;
  /**
  * Ordered logical groupings of interfaces by speed or purpose within a panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#port_groups LogicalDevice#port_groups}
  */
  readonly portGroups: LogicalDevicePanelsPortGroups[] | cdktf.IResolvable;
  /**
  * Physical vertical dimension of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#rows LogicalDevice#rows}
  */
  readonly rows: number;
}

export function logicalDevicePanelsToTerraform(struct?: LogicalDevicePanels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.numberToTerraform(struct!.columns),
    port_groups: cdktf.listMapper(logicalDevicePanelsPortGroupsToTerraform, false)(struct!.portGroups),
    rows: cdktf.numberToTerraform(struct!.rows),
  }
}


export function logicalDevicePanelsToHclTerraform(struct?: LogicalDevicePanels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.numberToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_groups: {
      value: cdktf.listMapperHcl(logicalDevicePanelsPortGroupsToHclTerraform, false)(struct!.portGroups),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalDevicePanelsPortGroupsList",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalDevicePanels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._portGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portGroups = this._portGroups?.internalValue;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalDevicePanels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._portGroups.internalValue = undefined;
      this._rows = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._portGroups.internalValue = value.portGroups;
      this._rows = value.rows;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: number; 
  public get columns() {
    return this.getNumberAttribute('columns');
  }
  public set columns(value: number) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // port_groups - computed: false, optional: false, required: true
  private _portGroups = new LogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }
  public putPortGroups(value: LogicalDevicePanelsPortGroups[] | cdktf.IResolvable) {
    this._portGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portGroupsInput() {
    return this._portGroups.internalValue;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }
}

export class LogicalDevicePanelsList extends cdktf.ComplexList {
  public internalValue? : LogicalDevicePanels[] | cdktf.IResolvable

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
  public get(index: number): LogicalDevicePanelsOutputReference {
    return new LogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device apstra_logical_device}
*/
export class LogicalDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_logical_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalDevice to import
  * @param importFromId The id of the existing LogicalDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_logical_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/logical_device apstra_logical_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_logical_device',
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
    this._name = config.name;
    this._panels.internalValue = config.panels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // panels - computed: false, optional: false, required: true
  private _panels = new LogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
  public putPanels(value: LogicalDevicePanels[] | cdktf.IResolvable) {
    this._panels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get panelsInput() {
    return this._panels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      panels: cdktf.listMapper(logicalDevicePanelsToTerraform, false)(this._panels.internalValue),
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
      panels: {
        value: cdktf.listMapperHcl(logicalDevicePanelsToHclTerraform, false)(this._panels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalDevicePanelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
