// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LustreFileStorageLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#availability_domain LustreFileStorageLustreFileSystem#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#capacity_in_gbs LustreFileStorageLustreFileSystem#capacity_in_gbs}
  */
  readonly capacityInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#cluster_placement_group_id LustreFileStorageLustreFileSystem#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#compartment_id LustreFileStorageLustreFileSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#defined_tags LustreFileStorageLustreFileSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#display_name LustreFileStorageLustreFileSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#file_system_description LustreFileStorageLustreFileSystem#file_system_description}
  */
  readonly fileSystemDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#file_system_name LustreFileStorageLustreFileSystem#file_system_name}
  */
  readonly fileSystemName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#freeform_tags LustreFileStorageLustreFileSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#id LustreFileStorageLustreFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#kms_key_id LustreFileStorageLustreFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#nsg_ids LustreFileStorageLustreFileSystem#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#performance_tier LustreFileStorageLustreFileSystem#performance_tier}
  */
  readonly performanceTier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#subnet_id LustreFileStorageLustreFileSystem#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#system_tags LustreFileStorageLustreFileSystem#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * root_squash_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#root_squash_configuration LustreFileStorageLustreFileSystem#root_squash_configuration}
  */
  readonly rootSquashConfiguration: LustreFileStorageLustreFileSystemRootSquashConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#timeouts LustreFileStorageLustreFileSystem#timeouts}
  */
  readonly timeouts?: LustreFileStorageLustreFileSystemTimeouts;
}
export interface LustreFileStorageLustreFileSystemMaintenanceWindow {
}

export function lustreFileStorageLustreFileSystemMaintenanceWindowToTerraform(struct?: LustreFileStorageLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lustreFileStorageLustreFileSystemMaintenanceWindowToHclTerraform(struct?: LustreFileStorageLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LustreFileStorageLustreFileSystemMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LustreFileStorageLustreFileSystemMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreFileStorageLustreFileSystemMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class LustreFileStorageLustreFileSystemMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): LustreFileStorageLustreFileSystemMaintenanceWindowOutputReference {
    return new LustreFileStorageLustreFileSystemMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LustreFileStorageLustreFileSystemRootSquashConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#client_exceptions LustreFileStorageLustreFileSystem#client_exceptions}
  */
  readonly clientExceptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#identity_squash LustreFileStorageLustreFileSystem#identity_squash}
  */
  readonly identitySquash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#squash_gid LustreFileStorageLustreFileSystem#squash_gid}
  */
  readonly squashGid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#squash_uid LustreFileStorageLustreFileSystem#squash_uid}
  */
  readonly squashUid?: string;
}

export function lustreFileStorageLustreFileSystemRootSquashConfigurationToTerraform(struct?: LustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference | LustreFileStorageLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_exceptions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientExceptions),
    identity_squash: cdktf.stringToTerraform(struct!.identitySquash),
    squash_gid: cdktf.stringToTerraform(struct!.squashGid),
    squash_uid: cdktf.stringToTerraform(struct!.squashUid),
  }
}


export function lustreFileStorageLustreFileSystemRootSquashConfigurationToHclTerraform(struct?: LustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference | LustreFileStorageLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_exceptions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientExceptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    identity_squash: {
      value: cdktf.stringToHclTerraform(struct!.identitySquash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    squash_gid: {
      value: cdktf.stringToHclTerraform(struct!.squashGid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    squash_uid: {
      value: cdktf.stringToHclTerraform(struct!.squashUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreFileStorageLustreFileSystemRootSquashConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientExceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientExceptions = this._clientExceptions;
    }
    if (this._identitySquash !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySquash = this._identitySquash;
    }
    if (this._squashGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.squashGid = this._squashGid;
    }
    if (this._squashUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.squashUid = this._squashUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreFileStorageLustreFileSystemRootSquashConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientExceptions = undefined;
      this._identitySquash = undefined;
      this._squashGid = undefined;
      this._squashUid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientExceptions = value.clientExceptions;
      this._identitySquash = value.identitySquash;
      this._squashGid = value.squashGid;
      this._squashUid = value.squashUid;
    }
  }

  // client_exceptions - computed: true, optional: true, required: false
  private _clientExceptions?: string[]; 
  public get clientExceptions() {
    return this.getListAttribute('client_exceptions');
  }
  public set clientExceptions(value: string[]) {
    this._clientExceptions = value;
  }
  public resetClientExceptions() {
    this._clientExceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientExceptionsInput() {
    return this._clientExceptions;
  }

  // identity_squash - computed: true, optional: true, required: false
  private _identitySquash?: string; 
  public get identitySquash() {
    return this.getStringAttribute('identity_squash');
  }
  public set identitySquash(value: string) {
    this._identitySquash = value;
  }
  public resetIdentitySquash() {
    this._identitySquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySquashInput() {
    return this._identitySquash;
  }

  // squash_gid - computed: true, optional: true, required: false
  private _squashGid?: string; 
  public get squashGid() {
    return this.getStringAttribute('squash_gid');
  }
  public set squashGid(value: string) {
    this._squashGid = value;
  }
  public resetSquashGid() {
    this._squashGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashGidInput() {
    return this._squashGid;
  }

  // squash_uid - computed: true, optional: true, required: false
  private _squashUid?: string; 
  public get squashUid() {
    return this.getStringAttribute('squash_uid');
  }
  public set squashUid(value: string) {
    this._squashUid = value;
  }
  public resetSquashUid() {
    this._squashUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashUidInput() {
    return this._squashUid;
  }
}
export interface LustreFileStorageLustreFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#create LustreFileStorageLustreFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#delete LustreFileStorageLustreFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#update LustreFileStorageLustreFileSystem#update}
  */
  readonly update?: string;
}

export function lustreFileStorageLustreFileSystemTimeoutsToTerraform(struct?: LustreFileStorageLustreFileSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lustreFileStorageLustreFileSystemTimeoutsToHclTerraform(struct?: LustreFileStorageLustreFileSystemTimeouts | cdktf.IResolvable): any {
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

export class LustreFileStorageLustreFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LustreFileStorageLustreFileSystemTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: LustreFileStorageLustreFileSystemTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system oci_lustre_file_storage_lustre_file_system}
*/
export class LustreFileStorageLustreFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_lustre_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LustreFileStorageLustreFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LustreFileStorageLustreFileSystem to import
  * @param importFromId The id of the existing LustreFileStorageLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LustreFileStorageLustreFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_lustre_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/lustre_file_storage_lustre_file_system oci_lustre_file_storage_lustre_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LustreFileStorageLustreFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: LustreFileStorageLustreFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_lustre_file_system',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._capacityInGbs = config.capacityInGbs;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._fileSystemDescription = config.fileSystemDescription;
    this._fileSystemName = config.fileSystemName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._nsgIds = config.nsgIds;
    this._performanceTier = config.performanceTier;
    this._subnetId = config.subnetId;
    this._systemTags = config.systemTags;
    this._rootSquashConfiguration.internalValue = config.rootSquashConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_in_gbs - computed: false, optional: false, required: true
  private _capacityInGbs?: number; 
  public get capacityInGbs() {
    return this.getNumberAttribute('capacity_in_gbs');
  }
  public set capacityInGbs(value: number) {
    this._capacityInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInGbsInput() {
    return this._capacityInGbs;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // file_system_description - computed: true, optional: true, required: false
  private _fileSystemDescription?: string; 
  public get fileSystemDescription() {
    return this.getStringAttribute('file_system_description');
  }
  public set fileSystemDescription(value: string) {
    this._fileSystemDescription = value;
  }
  public resetFileSystemDescription() {
    this._fileSystemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDescriptionInput() {
    return this._fileSystemDescription;
  }

  // file_system_name - computed: false, optional: false, required: true
  private _fileSystemName?: string; 
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lnet - computed: true, optional: false, required: false
  public get lnet() {
    return this.getStringAttribute('lnet');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new LustreFileStorageLustreFileSystemMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }

  // management_service_address - computed: true, optional: false, required: false
  public get managementServiceAddress() {
    return this.getStringAttribute('management_service_address');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // performance_tier - computed: false, optional: false, required: true
  private _performanceTier?: string; 
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }
  public set performanceTier(value: string) {
    this._performanceTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTierInput() {
    return this._performanceTier;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // time_billing_cycle_end - computed: true, optional: false, required: false
  public get timeBillingCycleEnd() {
    return this.getStringAttribute('time_billing_cycle_end');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // root_squash_configuration - computed: false, optional: false, required: true
  private _rootSquashConfiguration = new LustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference(this, "root_squash_configuration");
  public get rootSquashConfiguration() {
    return this._rootSquashConfiguration;
  }
  public putRootSquashConfiguration(value: LustreFileStorageLustreFileSystemRootSquashConfiguration) {
    this._rootSquashConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashConfigurationInput() {
    return this._rootSquashConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LustreFileStorageLustreFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LustreFileStorageLustreFileSystemTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      capacity_in_gbs: cdktf.numberToTerraform(this._capacityInGbs),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      file_system_description: cdktf.stringToTerraform(this._fileSystemDescription),
      file_system_name: cdktf.stringToTerraform(this._fileSystemName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      performance_tier: cdktf.stringToTerraform(this._performanceTier),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      root_squash_configuration: lustreFileStorageLustreFileSystemRootSquashConfigurationToTerraform(this._rootSquashConfiguration.internalValue),
      timeouts: lustreFileStorageLustreFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_in_gbs: {
        value: cdktf.numberToHclTerraform(this._capacityInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_description: {
        value: cdktf.stringToHclTerraform(this._fileSystemDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_name: {
        value: cdktf.stringToHclTerraform(this._fileSystemName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      performance_tier: {
        value: cdktf.stringToHclTerraform(this._performanceTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      root_squash_configuration: {
        value: lustreFileStorageLustreFileSystemRootSquashConfigurationToHclTerraform(this._rootSquashConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LustreFileStorageLustreFileSystemRootSquashConfigurationList",
      },
      timeouts: {
        value: lustreFileStorageLustreFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LustreFileStorageLustreFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
