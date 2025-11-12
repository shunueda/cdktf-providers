// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualChassisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto software update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#auto_sw_update VirtualChassis#auto_sw_update}
  */
  readonly autoSwUpdate?: boolean | cdktf.IResolvable;
  /**
  * URL or pathname of software package to auto software update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#auto_sw_update_package_name VirtualChassis#auto_sw_update_package_name}
  */
  readonly autoSwUpdatePackageName?: string;
  /**
  * Disable graceful restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#graceful_restart_disable VirtualChassis#graceful_restart_disable}
  */
  readonly gracefulRestartDisable?: boolean | cdktf.IResolvable;
  /**
  * Virtual chassis identifier, of type ISO system-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#identifier VirtualChassis#identifier}
  */
  readonly identifier?: string;
  /**
  * MAC persistence time (minutes) or disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#mac_persistence_timer VirtualChassis#mac_persistence_timer}
  */
  readonly macPersistenceTimer?: string;
  /**
  * Disable split detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#no_split_detection VirtualChassis#no_split_detection}
  */
  readonly noSplitDetection?: boolean | cdktf.IResolvable;
  /**
  * Only accept preprovisioned members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#preprovisioned VirtualChassis#preprovisioned}
  */
  readonly preprovisioned?: boolean | cdktf.IResolvable;
  /**
  * Set no hold time for vcp interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#vcp_no_hold_time VirtualChassis#vcp_no_hold_time}
  */
  readonly vcpNoHoldTime?: boolean | cdktf.IResolvable;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#alias VirtualChassis#alias}
  */
  readonly alias?: VirtualChassisAlias[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#member VirtualChassis#member}
  */
  readonly member?: VirtualChassisMember[] | cdktf.IResolvable;
  /**
  * traceoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#traceoptions VirtualChassis#traceoptions}
  */
  readonly traceoptions?: VirtualChassisTraceoptions;
}
export interface VirtualChassisAlias {
  /**
  * Alias name for this serial-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#alias_name VirtualChassis#alias_name}
  */
  readonly aliasName: string;
  /**
  * Member's serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#serial_number VirtualChassis#serial_number}
  */
  readonly serialNumber: string;
}

export function virtualChassisAliasToTerraform(struct?: VirtualChassisAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function virtualChassisAliasToHclTerraform(struct?: VirtualChassisAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualChassisAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualChassisAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualChassisAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasName = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasName = value.aliasName;
      this._serialNumber = value.serialNumber;
    }
  }

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
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
}

export class VirtualChassisAliasList extends cdktf.ComplexList {
  public internalValue? : VirtualChassisAlias[] | cdktf.IResolvable

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
  public get(index: number): VirtualChassisAliasOutputReference {
    return new VirtualChassisAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualChassisMember {
  /**
  * Member identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#id VirtualChassis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Member's location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#location VirtualChassis#location}
  */
  readonly location?: string;
  /**
  * Member's mastership priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#mastership_priority VirtualChassis#mastership_priority}
  */
  readonly mastershipPriority?: number;
  /**
  * Disable management VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#no_management_vlan VirtualChassis#no_management_vlan}
  */
  readonly noManagementVlan?: boolean | cdktf.IResolvable;
  /**
  * Member's role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#role VirtualChassis#role}
  */
  readonly role?: string;
  /**
  * Member's serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#serial_number VirtualChassis#serial_number}
  */
  readonly serialNumber?: string;
}

export function virtualChassisMemberToTerraform(struct?: VirtualChassisMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    location: cdktf.stringToTerraform(struct!.location),
    mastership_priority: cdktf.numberToTerraform(struct!.mastershipPriority),
    no_management_vlan: cdktf.booleanToTerraform(struct!.noManagementVlan),
    role: cdktf.stringToTerraform(struct!.role),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function virtualChassisMemberToHclTerraform(struct?: VirtualChassisMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mastership_priority: {
      value: cdktf.numberToHclTerraform(struct!.mastershipPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_management_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.noManagementVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualChassisMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualChassisMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._mastershipPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.mastershipPriority = this._mastershipPriority;
    }
    if (this._noManagementVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.noManagementVlan = this._noManagementVlan;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualChassisMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._location = undefined;
      this._mastershipPriority = undefined;
      this._noManagementVlan = undefined;
      this._role = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._location = value.location;
      this._mastershipPriority = value.mastershipPriority;
      this._noManagementVlan = value.noManagementVlan;
      this._role = value.role;
      this._serialNumber = value.serialNumber;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mastership_priority - computed: false, optional: true, required: false
  private _mastershipPriority?: number; 
  public get mastershipPriority() {
    return this.getNumberAttribute('mastership_priority');
  }
  public set mastershipPriority(value: number) {
    this._mastershipPriority = value;
  }
  public resetMastershipPriority() {
    this._mastershipPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastershipPriorityInput() {
    return this._mastershipPriority;
  }

  // no_management_vlan - computed: false, optional: true, required: false
  private _noManagementVlan?: boolean | cdktf.IResolvable; 
  public get noManagementVlan() {
    return this.getBooleanAttribute('no_management_vlan');
  }
  public set noManagementVlan(value: boolean | cdktf.IResolvable) {
    this._noManagementVlan = value;
  }
  public resetNoManagementVlan() {
    this._noManagementVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noManagementVlanInput() {
    return this._noManagementVlan;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}

export class VirtualChassisMemberList extends cdktf.ComplexList {
  public internalValue? : VirtualChassisMember[] | cdktf.IResolvable

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
  public get(index: number): VirtualChassisMemberOutputReference {
    return new VirtualChassisMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualChassisTraceoptionsFile {
  /**
  * Maximum number of trace files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#files VirtualChassis#files}
  */
  readonly files?: number;
  /**
  * Name of file in which to write trace information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#name VirtualChassis#name}
  */
  readonly name?: string;
  /**
  * Do not timestamp trace file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#no_stamp VirtualChassis#no_stamp}
  */
  readonly noStamp?: boolean | cdktf.IResolvable;
  /**
  * Don't allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#no_world_readable VirtualChassis#no_world_readable}
  */
  readonly noWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Replace trace file rather than appending to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#replace VirtualChassis#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Maximum trace file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#size VirtualChassis#size}
  */
  readonly size?: number;
  /**
  * Allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#world_readable VirtualChassis#world_readable}
  */
  readonly worldReadable?: boolean | cdktf.IResolvable;
}

export function virtualChassisTraceoptionsFileToTerraform(struct?: VirtualChassisTraceoptionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.numberToTerraform(struct!.files),
    name: cdktf.stringToTerraform(struct!.name),
    no_stamp: cdktf.booleanToTerraform(struct!.noStamp),
    no_world_readable: cdktf.booleanToTerraform(struct!.noWorldReadable),
    replace: cdktf.booleanToTerraform(struct!.replace),
    size: cdktf.numberToTerraform(struct!.size),
    world_readable: cdktf.booleanToTerraform(struct!.worldReadable),
  }
}


export function virtualChassisTraceoptionsFileToHclTerraform(struct?: VirtualChassisTraceoptionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_stamp: {
      value: cdktf.booleanToHclTerraform(struct!.noStamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.noWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.worldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualChassisTraceoptionsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualChassisTraceoptionsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noStamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStamp = this._noStamp;
    }
    if (this._noWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorldReadable = this._noWorldReadable;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._worldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.worldReadable = this._worldReadable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualChassisTraceoptionsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._name = undefined;
      this._noStamp = undefined;
      this._noWorldReadable = undefined;
      this._replace = undefined;
      this._size = undefined;
      this._worldReadable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._name = value.name;
      this._noStamp = value.noStamp;
      this._noWorldReadable = value.noWorldReadable;
      this._replace = value.replace;
      this._size = value.size;
      this._worldReadable = value.worldReadable;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: number; 
  public get files() {
    return this.getNumberAttribute('files');
  }
  public set files(value: number) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // no_stamp - computed: false, optional: true, required: false
  private _noStamp?: boolean | cdktf.IResolvable; 
  public get noStamp() {
    return this.getBooleanAttribute('no_stamp');
  }
  public set noStamp(value: boolean | cdktf.IResolvable) {
    this._noStamp = value;
  }
  public resetNoStamp() {
    this._noStamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStampInput() {
    return this._noStamp;
  }

  // no_world_readable - computed: false, optional: true, required: false
  private _noWorldReadable?: boolean | cdktf.IResolvable; 
  public get noWorldReadable() {
    return this.getBooleanAttribute('no_world_readable');
  }
  public set noWorldReadable(value: boolean | cdktf.IResolvable) {
    this._noWorldReadable = value;
  }
  public resetNoWorldReadable() {
    this._noWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorldReadableInput() {
    return this._noWorldReadable;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // world_readable - computed: false, optional: true, required: false
  private _worldReadable?: boolean | cdktf.IResolvable; 
  public get worldReadable() {
    return this.getBooleanAttribute('world_readable');
  }
  public set worldReadable(value: boolean | cdktf.IResolvable) {
    this._worldReadable = value;
  }
  public resetWorldReadable() {
    this._worldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worldReadableInput() {
    return this._worldReadable;
  }
}
export interface VirtualChassisTraceoptions {
  /**
  * Tracing parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#flag VirtualChassis#flag}
  */
  readonly flag?: string[];
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#file VirtualChassis#file}
  */
  readonly file?: VirtualChassisTraceoptionsFile;
}

export function virtualChassisTraceoptionsToTerraform(struct?: VirtualChassisTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flag),
    file: virtualChassisTraceoptionsFileToTerraform(struct!.file),
  }
}


export function virtualChassisTraceoptionsToHclTerraform(struct?: VirtualChassisTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flag),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    file: {
      value: virtualChassisTraceoptionsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualChassisTraceoptionsFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualChassisTraceoptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualChassisTraceoptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualChassisTraceoptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flag = value.flag;
      this._file.internalValue = value.file;
    }
  }

  // flag - computed: false, optional: true, required: false
  private _flag?: string[]; 
  public get flag() {
    return cdktf.Fn.tolist(this.getListAttribute('flag'));
  }
  public set flag(value: string[]) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // file - computed: false, optional: true, required: false
  private _file = new VirtualChassisTraceoptionsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: VirtualChassisTraceoptionsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis junos_virtual_chassis}
*/
export class VirtualChassis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_virtual_chassis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualChassis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualChassis to import
  * @param importFromId The id of the existing VirtualChassis that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualChassis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_virtual_chassis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/virtual_chassis junos_virtual_chassis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualChassisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualChassisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_virtual_chassis',
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
    this._autoSwUpdate = config.autoSwUpdate;
    this._autoSwUpdatePackageName = config.autoSwUpdatePackageName;
    this._gracefulRestartDisable = config.gracefulRestartDisable;
    this._identifier = config.identifier;
    this._macPersistenceTimer = config.macPersistenceTimer;
    this._noSplitDetection = config.noSplitDetection;
    this._preprovisioned = config.preprovisioned;
    this._vcpNoHoldTime = config.vcpNoHoldTime;
    this._alias.internalValue = config.alias;
    this._member.internalValue = config.member;
    this._traceoptions.internalValue = config.traceoptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sw_update - computed: false, optional: true, required: false
  private _autoSwUpdate?: boolean | cdktf.IResolvable; 
  public get autoSwUpdate() {
    return this.getBooleanAttribute('auto_sw_update');
  }
  public set autoSwUpdate(value: boolean | cdktf.IResolvable) {
    this._autoSwUpdate = value;
  }
  public resetAutoSwUpdate() {
    this._autoSwUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwUpdateInput() {
    return this._autoSwUpdate;
  }

  // auto_sw_update_package_name - computed: false, optional: true, required: false
  private _autoSwUpdatePackageName?: string; 
  public get autoSwUpdatePackageName() {
    return this.getStringAttribute('auto_sw_update_package_name');
  }
  public set autoSwUpdatePackageName(value: string) {
    this._autoSwUpdatePackageName = value;
  }
  public resetAutoSwUpdatePackageName() {
    this._autoSwUpdatePackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwUpdatePackageNameInput() {
    return this._autoSwUpdatePackageName;
  }

  // graceful_restart_disable - computed: false, optional: true, required: false
  private _gracefulRestartDisable?: boolean | cdktf.IResolvable; 
  public get gracefulRestartDisable() {
    return this.getBooleanAttribute('graceful_restart_disable');
  }
  public set gracefulRestartDisable(value: boolean | cdktf.IResolvable) {
    this._gracefulRestartDisable = value;
  }
  public resetGracefulRestartDisable() {
    this._gracefulRestartDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartDisableInput() {
    return this._gracefulRestartDisable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // mac_persistence_timer - computed: false, optional: true, required: false
  private _macPersistenceTimer?: string; 
  public get macPersistenceTimer() {
    return this.getStringAttribute('mac_persistence_timer');
  }
  public set macPersistenceTimer(value: string) {
    this._macPersistenceTimer = value;
  }
  public resetMacPersistenceTimer() {
    this._macPersistenceTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPersistenceTimerInput() {
    return this._macPersistenceTimer;
  }

  // no_split_detection - computed: false, optional: true, required: false
  private _noSplitDetection?: boolean | cdktf.IResolvable; 
  public get noSplitDetection() {
    return this.getBooleanAttribute('no_split_detection');
  }
  public set noSplitDetection(value: boolean | cdktf.IResolvable) {
    this._noSplitDetection = value;
  }
  public resetNoSplitDetection() {
    this._noSplitDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSplitDetectionInput() {
    return this._noSplitDetection;
  }

  // preprovisioned - computed: false, optional: true, required: false
  private _preprovisioned?: boolean | cdktf.IResolvable; 
  public get preprovisioned() {
    return this.getBooleanAttribute('preprovisioned');
  }
  public set preprovisioned(value: boolean | cdktf.IResolvable) {
    this._preprovisioned = value;
  }
  public resetPreprovisioned() {
    this._preprovisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprovisionedInput() {
    return this._preprovisioned;
  }

  // vcp_no_hold_time - computed: false, optional: true, required: false
  private _vcpNoHoldTime?: boolean | cdktf.IResolvable; 
  public get vcpNoHoldTime() {
    return this.getBooleanAttribute('vcp_no_hold_time');
  }
  public set vcpNoHoldTime(value: boolean | cdktf.IResolvable) {
    this._vcpNoHoldTime = value;
  }
  public resetVcpNoHoldTime() {
    this._vcpNoHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpNoHoldTimeInput() {
    return this._vcpNoHoldTime;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new VirtualChassisAliasList(this, "alias", true);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: VirtualChassisAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new VirtualChassisMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: VirtualChassisMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // traceoptions - computed: false, optional: true, required: false
  private _traceoptions = new VirtualChassisTraceoptionsOutputReference(this, "traceoptions");
  public get traceoptions() {
    return this._traceoptions;
  }
  public putTraceoptions(value: VirtualChassisTraceoptions) {
    this._traceoptions.internalValue = value;
  }
  public resetTraceoptions() {
    this._traceoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceoptionsInput() {
    return this._traceoptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sw_update: cdktf.booleanToTerraform(this._autoSwUpdate),
      auto_sw_update_package_name: cdktf.stringToTerraform(this._autoSwUpdatePackageName),
      graceful_restart_disable: cdktf.booleanToTerraform(this._gracefulRestartDisable),
      identifier: cdktf.stringToTerraform(this._identifier),
      mac_persistence_timer: cdktf.stringToTerraform(this._macPersistenceTimer),
      no_split_detection: cdktf.booleanToTerraform(this._noSplitDetection),
      preprovisioned: cdktf.booleanToTerraform(this._preprovisioned),
      vcp_no_hold_time: cdktf.booleanToTerraform(this._vcpNoHoldTime),
      alias: cdktf.listMapper(virtualChassisAliasToTerraform, true)(this._alias.internalValue),
      member: cdktf.listMapper(virtualChassisMemberToTerraform, true)(this._member.internalValue),
      traceoptions: virtualChassisTraceoptionsToTerraform(this._traceoptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sw_update: {
        value: cdktf.booleanToHclTerraform(this._autoSwUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_sw_update_package_name: {
        value: cdktf.stringToHclTerraform(this._autoSwUpdatePackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_disable: {
        value: cdktf.booleanToHclTerraform(this._gracefulRestartDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_persistence_timer: {
        value: cdktf.stringToHclTerraform(this._macPersistenceTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_split_detection: {
        value: cdktf.booleanToHclTerraform(this._noSplitDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preprovisioned: {
        value: cdktf.booleanToHclTerraform(this._preprovisioned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vcp_no_hold_time: {
        value: cdktf.booleanToHclTerraform(this._vcpNoHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.listMapperHcl(virtualChassisAliasToHclTerraform, true)(this._alias.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualChassisAliasList",
      },
      member: {
        value: cdktf.listMapperHcl(virtualChassisMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualChassisMemberList",
      },
      traceoptions: {
        value: virtualChassisTraceoptionsToHclTerraform(this._traceoptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualChassisTraceoptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
