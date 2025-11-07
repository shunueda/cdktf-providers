// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#description Vapp#description}
  */
  readonly description?: string;
  /**
  * Key/value settings for guest properties. Will be picked up by new VMs when created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#guest_properties Vapp#guest_properties}
  */
  readonly guestProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#id Vapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key value map of metadata to assign to this vApp. Key and value can be any string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#metadata Vapp#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A name for the vApp, unique withing the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#name Vapp#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#org Vapp#org}
  */
  readonly org?: string;
  /**
  * A boolean value stating if this vApp should be powered on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#power_on Vapp#power_on}
  */
  readonly powerOn?: boolean | cdktf.IResolvable;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#vdc Vapp#vdc}
  */
  readonly vdc?: string;
  /**
  * lease block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#lease Vapp#lease}
  */
  readonly lease?: VappLease;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#metadata_entry Vapp#metadata_entry}
  */
  readonly metadataEntry?: VappMetadataEntry[] | cdktf.IResolvable;
}
export interface VappLease {
  /**
  * How long any of the VMs in the vApp can run before the vApp is automatically powered off or suspended. 0 means never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#runtime_lease_in_sec Vapp#runtime_lease_in_sec}
  */
  readonly runtimeLeaseInSec: number;
  /**
  * How long the vApp is available before being automatically deleted or marked as expired. 0 means never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#storage_lease_in_sec Vapp#storage_lease_in_sec}
  */
  readonly storageLeaseInSec: number;
}

export function vappLeaseToTerraform(struct?: VappLeaseOutputReference | VappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runtime_lease_in_sec: cdktf.numberToTerraform(struct!.runtimeLeaseInSec),
    storage_lease_in_sec: cdktf.numberToTerraform(struct!.storageLeaseInSec),
  }
}


export function vappLeaseToHclTerraform(struct?: VappLeaseOutputReference | VappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runtime_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.runtimeLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.storageLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VappLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runtimeLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLeaseInSec = this._runtimeLeaseInSec;
    }
    if (this._storageLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLeaseInSec = this._storageLeaseInSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runtimeLeaseInSec = undefined;
      this._storageLeaseInSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runtimeLeaseInSec = value.runtimeLeaseInSec;
      this._storageLeaseInSec = value.storageLeaseInSec;
    }
  }

  // runtime_lease_in_sec - computed: false, optional: false, required: true
  private _runtimeLeaseInSec?: number; 
  public get runtimeLeaseInSec() {
    return this.getNumberAttribute('runtime_lease_in_sec');
  }
  public set runtimeLeaseInSec(value: number) {
    this._runtimeLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLeaseInSecInput() {
    return this._runtimeLeaseInSec;
  }

  // storage_lease_in_sec - computed: false, optional: false, required: true
  private _storageLeaseInSec?: number; 
  public get storageLeaseInSec() {
    return this.getNumberAttribute('storage_lease_in_sec');
  }
  public set storageLeaseInSec(value: number) {
    this._storageLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLeaseInSecInput() {
    return this._storageLeaseInSec;
  }
}
export interface VappMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#is_system Vapp#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#key Vapp#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#type Vapp#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#user_access Vapp#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#value Vapp#value}
  */
  readonly value?: string;
}

export function vappMetadataEntryToTerraform(struct?: VappMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vappMetadataEntryToHclTerraform(struct?: VappMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VappMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : VappMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): VappMetadataEntryOutputReference {
    return new VappMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp vcd_vapp}
*/
export class Vapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vapp to import
  * @param importFromId The id of the existing Vapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp vcd_vapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappConfig
  */
  public constructor(scope: Construct, id: string, config: VappConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._guestProperties = config.guestProperties;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._org = config.org;
    this._powerOn = config.powerOn;
    this._vdc = config.vdc;
    this._lease.internalValue = config.lease;
    this._metadataEntry.internalValue = config.metadataEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // guest_properties - computed: false, optional: true, required: false
  private _guestProperties?: { [key: string]: string }; 
  public get guestProperties() {
    return this.getStringMapAttribute('guest_properties');
  }
  public set guestProperties(value: { [key: string]: string }) {
    this._guestProperties = value;
  }
  public resetGuestProperties() {
    this._guestProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPropertiesInput() {
    return this._guestProperties;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

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

  // inherited_metadata - computed: true, optional: false, required: false
  private _inheritedMetadata = new cdktf.StringMap(this, "inherited_metadata");
  public get inheritedMetadata() {
    return this._inheritedMetadata;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // power_on - computed: false, optional: true, required: false
  private _powerOn?: boolean | cdktf.IResolvable; 
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }
  public set powerOn(value: boolean | cdktf.IResolvable) {
    this._powerOn = value;
  }
  public resetPowerOn() {
    this._powerOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnInput() {
    return this._powerOn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_text - computed: true, optional: false, required: false
  public get statusText() {
    return this.getStringAttribute('status_text');
  }

  // vapp_network_names - computed: true, optional: false, required: false
  public get vappNetworkNames() {
    return this.getListAttribute('vapp_network_names');
  }

  // vapp_org_network_names - computed: true, optional: false, required: false
  public get vappOrgNetworkNames() {
    return this.getListAttribute('vapp_org_network_names');
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vm_names - computed: true, optional: false, required: false
  public get vmNames() {
    return this.getListAttribute('vm_names');
  }

  // lease - computed: false, optional: true, required: false
  private _lease = new VappLeaseOutputReference(this, "lease");
  public get lease() {
    return this._lease;
  }
  public putLease(value: VappLease) {
    this._lease.internalValue = value;
  }
  public resetLease() {
    this._lease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseInput() {
    return this._lease.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new VappMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: VappMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      guest_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestProperties),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      power_on: cdktf.booleanToTerraform(this._powerOn),
      vdc: cdktf.stringToTerraform(this._vdc),
      lease: vappLeaseToTerraform(this._lease.internalValue),
      metadata_entry: cdktf.listMapper(vappMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_on: {
        value: cdktf.booleanToHclTerraform(this._powerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease: {
        value: vappLeaseToHclTerraform(this._lease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappLeaseList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(vappMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappMetadataEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
