// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#cpu_hot_plug Snapshot#cpu_hot_plug}
  */
  readonly cpuHotPlug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#datacenter_id Snapshot#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Human readable description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#description Snapshot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#disc_virtio_hot_plug Snapshot#disc_virtio_hot_plug}
  */
  readonly discVirtioHotPlug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#disc_virtio_hot_unplug Snapshot#disc_virtio_hot_unplug}
  */
  readonly discVirtioHotUnplug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#id Snapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OS type of this Snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#licence_type Snapshot#licence_type}
  */
  readonly licenceType?: string;
  /**
  * A name of that resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#name Snapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#nic_hot_plug Snapshot#nic_hot_plug}
  */
  readonly nicHotPlug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#nic_hot_unplug Snapshot#nic_hot_unplug}
  */
  readonly nicHotUnplug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#ram_hot_plug Snapshot#ram_hot_plug}
  */
  readonly ramHotPlug?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the image requires the legacy BIOS for compatibility or specific needs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#require_legacy_bios Snapshot#require_legacy_bios}
  */
  readonly requireLegacyBios?: boolean | cdktf.IResolvable;
  /**
  * Boolean value representing if the snapshot requires extra protection e.g. two factor protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#sec_auth_protection Snapshot#sec_auth_protection}
  */
  readonly secAuthProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#volume_id Snapshot#volume_id}
  */
  readonly volumeId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#timeouts Snapshot#timeouts}
  */
  readonly timeouts?: SnapshotTimeouts;
}
export interface SnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#create Snapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#default Snapshot#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#delete Snapshot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#update Snapshot#update}
  */
  readonly update?: string;
}

export function snapshotTimeoutsToTerraform(struct?: SnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function snapshotTimeoutsToHclTerraform(struct?: SnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot ionoscloud_snapshot}
*/
export class Snapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshot to import
  * @param importFromId The id of the existing Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/snapshot ionoscloud_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuHotPlug = config.cpuHotPlug;
    this._datacenterId = config.datacenterId;
    this._description = config.description;
    this._discVirtioHotPlug = config.discVirtioHotPlug;
    this._discVirtioHotUnplug = config.discVirtioHotUnplug;
    this._id = config.id;
    this._licenceType = config.licenceType;
    this._name = config.name;
    this._nicHotPlug = config.nicHotPlug;
    this._nicHotUnplug = config.nicHotUnplug;
    this._ramHotPlug = config.ramHotPlug;
    this._requireLegacyBios = config.requireLegacyBios;
    this._secAuthProtection = config.secAuthProtection;
    this._volumeId = config.volumeId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_hot_plug - computed: true, optional: true, required: false
  private _cpuHotPlug?: boolean | cdktf.IResolvable; 
  public get cpuHotPlug() {
    return this.getBooleanAttribute('cpu_hot_plug');
  }
  public set cpuHotPlug(value: boolean | cdktf.IResolvable) {
    this._cpuHotPlug = value;
  }
  public resetCpuHotPlug() {
    this._cpuHotPlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuHotPlugInput() {
    return this._cpuHotPlug;
  }

  // cpu_hot_unplug - computed: true, optional: false, required: false
  public get cpuHotUnplug() {
    return this.getBooleanAttribute('cpu_hot_unplug');
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // description - computed: true, optional: true, required: false
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

  // disc_scsi_hot_plug - computed: true, optional: false, required: false
  public get discScsiHotPlug() {
    return this.getBooleanAttribute('disc_scsi_hot_plug');
  }

  // disc_scsi_hot_unplug - computed: true, optional: false, required: false
  public get discScsiHotUnplug() {
    return this.getBooleanAttribute('disc_scsi_hot_unplug');
  }

  // disc_virtio_hot_plug - computed: true, optional: true, required: false
  private _discVirtioHotPlug?: boolean | cdktf.IResolvable; 
  public get discVirtioHotPlug() {
    return this.getBooleanAttribute('disc_virtio_hot_plug');
  }
  public set discVirtioHotPlug(value: boolean | cdktf.IResolvable) {
    this._discVirtioHotPlug = value;
  }
  public resetDiscVirtioHotPlug() {
    this._discVirtioHotPlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discVirtioHotPlugInput() {
    return this._discVirtioHotPlug;
  }

  // disc_virtio_hot_unplug - computed: true, optional: true, required: false
  private _discVirtioHotUnplug?: boolean | cdktf.IResolvable; 
  public get discVirtioHotUnplug() {
    return this.getBooleanAttribute('disc_virtio_hot_unplug');
  }
  public set discVirtioHotUnplug(value: boolean | cdktf.IResolvable) {
    this._discVirtioHotUnplug = value;
  }
  public resetDiscVirtioHotUnplug() {
    this._discVirtioHotUnplug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discVirtioHotUnplugInput() {
    return this._discVirtioHotUnplug;
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

  // licence_type - computed: true, optional: true, required: false
  private _licenceType?: string; 
  public get licenceType() {
    return this.getStringAttribute('licence_type');
  }
  public set licenceType(value: string) {
    this._licenceType = value;
  }
  public resetLicenceType() {
    this._licenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenceTypeInput() {
    return this._licenceType;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // nic_hot_plug - computed: true, optional: true, required: false
  private _nicHotPlug?: boolean | cdktf.IResolvable; 
  public get nicHotPlug() {
    return this.getBooleanAttribute('nic_hot_plug');
  }
  public set nicHotPlug(value: boolean | cdktf.IResolvable) {
    this._nicHotPlug = value;
  }
  public resetNicHotPlug() {
    this._nicHotPlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicHotPlugInput() {
    return this._nicHotPlug;
  }

  // nic_hot_unplug - computed: true, optional: true, required: false
  private _nicHotUnplug?: boolean | cdktf.IResolvable; 
  public get nicHotUnplug() {
    return this.getBooleanAttribute('nic_hot_unplug');
  }
  public set nicHotUnplug(value: boolean | cdktf.IResolvable) {
    this._nicHotUnplug = value;
  }
  public resetNicHotUnplug() {
    this._nicHotUnplug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicHotUnplugInput() {
    return this._nicHotUnplug;
  }

  // ram_hot_plug - computed: true, optional: true, required: false
  private _ramHotPlug?: boolean | cdktf.IResolvable; 
  public get ramHotPlug() {
    return this.getBooleanAttribute('ram_hot_plug');
  }
  public set ramHotPlug(value: boolean | cdktf.IResolvable) {
    this._ramHotPlug = value;
  }
  public resetRamHotPlug() {
    this._ramHotPlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramHotPlugInput() {
    return this._ramHotPlug;
  }

  // ram_hot_unplug - computed: true, optional: false, required: false
  public get ramHotUnplug() {
    return this.getBooleanAttribute('ram_hot_unplug');
  }

  // require_legacy_bios - computed: true, optional: true, required: false
  private _requireLegacyBios?: boolean | cdktf.IResolvable; 
  public get requireLegacyBios() {
    return this.getBooleanAttribute('require_legacy_bios');
  }
  public set requireLegacyBios(value: boolean | cdktf.IResolvable) {
    this._requireLegacyBios = value;
  }
  public resetRequireLegacyBios() {
    this._requireLegacyBios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLegacyBiosInput() {
    return this._requireLegacyBios;
  }

  // sec_auth_protection - computed: true, optional: true, required: false
  private _secAuthProtection?: boolean | cdktf.IResolvable; 
  public get secAuthProtection() {
    return this.getBooleanAttribute('sec_auth_protection');
  }
  public set secAuthProtection(value: boolean | cdktf.IResolvable) {
    this._secAuthProtection = value;
  }
  public resetSecAuthProtection() {
    this._secAuthProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secAuthProtectionInput() {
    return this._secAuthProtection;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_hot_plug: cdktf.booleanToTerraform(this._cpuHotPlug),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      description: cdktf.stringToTerraform(this._description),
      disc_virtio_hot_plug: cdktf.booleanToTerraform(this._discVirtioHotPlug),
      disc_virtio_hot_unplug: cdktf.booleanToTerraform(this._discVirtioHotUnplug),
      id: cdktf.stringToTerraform(this._id),
      licence_type: cdktf.stringToTerraform(this._licenceType),
      name: cdktf.stringToTerraform(this._name),
      nic_hot_plug: cdktf.booleanToTerraform(this._nicHotPlug),
      nic_hot_unplug: cdktf.booleanToTerraform(this._nicHotUnplug),
      ram_hot_plug: cdktf.booleanToTerraform(this._ramHotPlug),
      require_legacy_bios: cdktf.booleanToTerraform(this._requireLegacyBios),
      sec_auth_protection: cdktf.booleanToTerraform(this._secAuthProtection),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      timeouts: snapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_hot_plug: {
        value: cdktf.booleanToHclTerraform(this._cpuHotPlug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disc_virtio_hot_plug: {
        value: cdktf.booleanToHclTerraform(this._discVirtioHotPlug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disc_virtio_hot_unplug: {
        value: cdktf.booleanToHclTerraform(this._discVirtioHotUnplug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licence_type: {
        value: cdktf.stringToHclTerraform(this._licenceType),
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
      nic_hot_plug: {
        value: cdktf.booleanToHclTerraform(this._nicHotPlug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nic_hot_unplug: {
        value: cdktf.booleanToHclTerraform(this._nicHotUnplug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ram_hot_plug: {
        value: cdktf.booleanToHclTerraform(this._ramHotPlug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_legacy_bios: {
        value: cdktf.booleanToHclTerraform(this._requireLegacyBios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sec_auth_protection: {
        value: cdktf.booleanToHclTerraform(this._secAuthProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: snapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
