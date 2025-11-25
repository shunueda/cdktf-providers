// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditTrackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Track interface type, optional:- `Read`: Read interface- `Write`: Write interface- `*`: All interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#action_type AuditTrack#action_type}
  */
  readonly actionType: string;
  /**
  * Track interface name list:- when ResourceType is `*`, EventNames is must `[&amp;quot;*&amp;quot;]`- when ResourceType is a single product, EventNames support all interface:`[&amp;quot;*&amp;quot;]`- when ResourceType is a single product, EventNames support some interface, up to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#event_names AuditTrack#event_names}
  */
  readonly eventNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#id AuditTrack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Track name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#name AuditTrack#name}
  */
  readonly name: string;
  /**
  * Track product, optional:- `*`: All product- Single product, such as `cos`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#resource_type AuditTrack#resource_type}
  */
  readonly resourceType: string;
  /**
  * Track status, optional:- `0`: Close- `1`: Open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#status AuditTrack#status}
  */
  readonly status: number;
  /**
  * Whether to enable the delivery of group member operation logs to the group management account or trusted service management account, optional:- `0`: Close- `1`: Open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#track_for_all_members AuditTrack#track_for_all_members}
  */
  readonly trackForAllMembers?: number;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage AuditTrack#storage}
  */
  readonly storage: AuditTrackStorage;
}
export interface AuditTrackStorage {
  /**
  * Designated to store user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_account_id AuditTrack#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Designated to store user appid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_app_id AuditTrack#storage_app_id}
  */
  readonly storageAppId?: string;
  /**
  * Track Storage name:- when StorageType is `cls`, StorageName is cls topicId- when StorageType is `cos`, StorageName is cos bucket name that does not contain `-APPID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_name AuditTrack#storage_name}
  */
  readonly storageName: string;
  /**
  * Storage path prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_prefix AuditTrack#storage_prefix}
  */
  readonly storagePrefix: string;
  /**
  * Storage region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_region AuditTrack#storage_region}
  */
  readonly storageRegion: string;
  /**
  * Track Storage type, optional:- `cos`- `cls`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#storage_type AuditTrack#storage_type}
  */
  readonly storageType: string;
}

export function auditTrackStorageToTerraform(struct?: AuditTrackStorageOutputReference | AuditTrackStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_app_id: cdktf.stringToTerraform(struct!.storageAppId),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    storage_region: cdktf.stringToTerraform(struct!.storageRegion),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function auditTrackStorageToHclTerraform(struct?: AuditTrackStorageOutputReference | AuditTrackStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_app_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_region: {
      value: cdktf.stringToHclTerraform(struct!.storageRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrackStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrackStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    if (this._storageAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAppId = this._storageAppId;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._storageRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRegion = this._storageRegion;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrackStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountId = undefined;
      this._storageAppId = undefined;
      this._storageName = undefined;
      this._storagePrefix = undefined;
      this._storageRegion = undefined;
      this._storageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountId = value.storageAccountId;
      this._storageAppId = value.storageAppId;
      this._storageName = value.storageName;
      this._storagePrefix = value.storagePrefix;
      this._storageRegion = value.storageRegion;
      this._storageType = value.storageType;
    }
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // storage_app_id - computed: false, optional: true, required: false
  private _storageAppId?: string; 
  public get storageAppId() {
    return this.getStringAttribute('storage_app_id');
  }
  public set storageAppId(value: string) {
    this._storageAppId = value;
  }
  public resetStorageAppId() {
    this._storageAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAppIdInput() {
    return this._storageAppId;
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_prefix - computed: false, optional: false, required: true
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // storage_region - computed: false, optional: false, required: true
  private _storageRegion?: string; 
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
  public set storageRegion(value: string) {
    this._storageRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRegionInput() {
    return this._storageRegion;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track tencentcloud_audit_track}
*/
export class AuditTrack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_audit_track";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditTrack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditTrack to import
  * @param importFromId The id of the existing AuditTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditTrack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_audit_track", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/audit_track tencentcloud_audit_track} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditTrackConfig
  */
  public constructor(scope: Construct, id: string, config: AuditTrackConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_audit_track',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._eventNames = config.eventNames;
    this._id = config.id;
    this._name = config.name;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._trackForAllMembers = config.trackForAllMembers;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // event_names - computed: false, optional: false, required: true
  private _eventNames?: string[]; 
  public get eventNames() {
    return cdktf.Fn.tolist(this.getListAttribute('event_names'));
  }
  public set eventNames(value: string[]) {
    this._eventNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNamesInput() {
    return this._eventNames;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // track_for_all_members - computed: false, optional: true, required: false
  private _trackForAllMembers?: number; 
  public get trackForAllMembers() {
    return this.getNumberAttribute('track_for_all_members');
  }
  public set trackForAllMembers(value: number) {
    this._trackForAllMembers = value;
  }
  public resetTrackForAllMembers() {
    this._trackForAllMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackForAllMembersInput() {
    return this._trackForAllMembers;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new AuditTrackStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: AuditTrackStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      event_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventNames),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.numberToTerraform(this._status),
      track_for_all_members: cdktf.numberToTerraform(this._trackForAllMembers),
      storage: auditTrackStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_for_all_members: {
        value: cdktf.numberToHclTerraform(this._trackForAllMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage: {
        value: auditTrackStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrackStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
