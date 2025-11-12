// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicesBulkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#id DevicesBulk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#devices DevicesBulk#devices}
  */
  readonly devices: DevicesBulkDevices[] | cdktf.IResolvable;
}
export interface DevicesBulkIdMappings {
}

export function devicesBulkIdMappingsToTerraform(struct?: DevicesBulkIdMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devicesBulkIdMappingsToHclTerraform(struct?: DevicesBulkIdMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevicesBulkIdMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevicesBulkIdMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesBulkIdMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DevicesBulkIdMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DevicesBulkIdMappingsOutputReference {
    return new DevicesBulkIdMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevicesBulkDevicesAccessPolicy {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#id DevicesBulk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#type DevicesBulk#type}
  */
  readonly type?: string;
}

export function devicesBulkDevicesAccessPolicyToTerraform(struct?: DevicesBulkDevicesAccessPolicyOutputReference | DevicesBulkDevicesAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function devicesBulkDevicesAccessPolicyToHclTerraform(struct?: DevicesBulkDevicesAccessPolicyOutputReference | DevicesBulkDevicesAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicesBulkDevicesAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevicesBulkDevicesAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesBulkDevicesAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DevicesBulkDevices {
  /**
  * The hostname of FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#hostname DevicesBulk#hostname}
  */
  readonly hostname: string;
  /**
  * License caps for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#license_caps DevicesBulk#license_caps}
  */
  readonly licenseCaps?: string[];
  /**
  * The name of FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#name DevicesBulk#name}
  */
  readonly name?: string;
  /**
  * NAT_ID is required, if configured in FTD 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#nat_id DevicesBulk#nat_id}
  */
  readonly natId?: string;
  /**
  * Select the desired performace tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#performance_tier DevicesBulk#performance_tier}
  */
  readonly performanceTier?: string;
  /**
  * Same regkey as entered in FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#regkey DevicesBulk#regkey}
  */
  readonly regkey: string;
  /**
  * access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#access_policy DevicesBulk#access_policy}
  */
  readonly accessPolicy: DevicesBulkDevicesAccessPolicy;
}

export function devicesBulkDevicesToTerraform(struct?: DevicesBulkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    license_caps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenseCaps),
    name: cdktf.stringToTerraform(struct!.name),
    nat_id: cdktf.stringToTerraform(struct!.natId),
    performance_tier: cdktf.stringToTerraform(struct!.performanceTier),
    regkey: cdktf.stringToTerraform(struct!.regkey),
    access_policy: devicesBulkDevicesAccessPolicyToTerraform(struct!.accessPolicy),
  }
}


export function devicesBulkDevicesToHclTerraform(struct?: DevicesBulkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_caps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.licenseCaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_id: {
      value: cdktf.stringToHclTerraform(struct!.natId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_tier: {
      value: cdktf.stringToHclTerraform(struct!.performanceTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regkey: {
      value: cdktf.stringToHclTerraform(struct!.regkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_policy: {
      value: devicesBulkDevicesAccessPolicyToHclTerraform(struct!.accessPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DevicesBulkDevicesAccessPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicesBulkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevicesBulkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._licenseCaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseCaps = this._licenseCaps;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natId = this._natId;
    }
    if (this._performanceTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceTier = this._performanceTier;
    }
    if (this._regkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.regkey = this._regkey;
    }
    if (this._accessPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicy = this._accessPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesBulkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._licenseCaps = undefined;
      this._name = undefined;
      this._natId = undefined;
      this._performanceTier = undefined;
      this._regkey = undefined;
      this._accessPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._licenseCaps = value.licenseCaps;
      this._name = value.name;
      this._natId = value.natId;
      this._performanceTier = value.performanceTier;
      this._regkey = value.regkey;
      this._accessPolicy.internalValue = value.accessPolicy;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_caps - computed: false, optional: true, required: false
  private _licenseCaps?: string[]; 
  public get licenseCaps() {
    return this.getListAttribute('license_caps');
  }
  public set licenseCaps(value: string[]) {
    this._licenseCaps = value;
  }
  public resetLicenseCaps() {
    this._licenseCaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCapsInput() {
    return this._licenseCaps;
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

  // nat_id - computed: false, optional: true, required: false
  private _natId?: string; 
  public get natId() {
    return this.getStringAttribute('nat_id');
  }
  public set natId(value: string) {
    this._natId = value;
  }
  public resetNatId() {
    this._natId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIdInput() {
    return this._natId;
  }

  // performance_tier - computed: false, optional: true, required: false
  private _performanceTier?: string; 
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }
  public set performanceTier(value: string) {
    this._performanceTier = value;
  }
  public resetPerformanceTier() {
    this._performanceTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTierInput() {
    return this._performanceTier;
  }

  // regkey - computed: false, optional: false, required: true
  private _regkey?: string; 
  public get regkey() {
    return this.getStringAttribute('regkey');
  }
  public set regkey(value: string) {
    this._regkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regkeyInput() {
    return this._regkey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy = new DevicesBulkDevicesAccessPolicyOutputReference(this, "access_policy");
  public get accessPolicy() {
    return this._accessPolicy;
  }
  public putAccessPolicy(value: DevicesBulkDevicesAccessPolicy) {
    this._accessPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy.internalValue;
  }
}

export class DevicesBulkDevicesList extends cdktf.ComplexList {
  public internalValue? : DevicesBulkDevices[] | cdktf.IResolvable

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
  public get(index: number): DevicesBulkDevicesOutputReference {
    return new DevicesBulkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk fmc_devices_bulk}
*/
export class DevicesBulk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_devices_bulk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicesBulk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicesBulk to import
  * @param importFromId The id of the existing DevicesBulk that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicesBulk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_devices_bulk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices_bulk fmc_devices_bulk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicesBulkConfig
  */
  public constructor(scope: Construct, id: string, config: DevicesBulkConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_devices_bulk',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._devices.internalValue = config.devices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id_mappings - computed: true, optional: false, required: false
  private _idMappings = new DevicesBulkIdMappingsList(this, "id_mappings", false);
  public get idMappings() {
    return this._idMappings;
  }

  // devices - computed: false, optional: false, required: true
  private _devices = new DevicesBulkDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DevicesBulkDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      devices: cdktf.listMapper(devicesBulkDevicesToTerraform, true)(this._devices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(devicesBulkDevicesToHclTerraform, true)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevicesBulkDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
