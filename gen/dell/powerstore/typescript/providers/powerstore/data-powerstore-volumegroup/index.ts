// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerstoreVolumegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * PowerStore filter expression to filter Replication rules by. Conflicts with `id` and `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup#filter_expression DataPowerstoreVolumegroup#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Unique identifier of the volume group. Conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup#id DataPowerstoreVolumegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Volume group name. Conflicts with `id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup#name DataPowerstoreVolumegroup#name}
  */
  readonly name?: string;
}
export interface DataPowerstoreVolumegroupVolumeGroupsLocationHistory {
}

export function dataPowerstoreVolumegroupVolumeGroupsLocationHistoryToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsLocationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsLocationHistoryToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsLocationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsLocationHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroupsLocationHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroupsLocationHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_appliance_id - computed: true, optional: false, required: false
  public get fromApplianceId() {
    return this.getStringAttribute('from_appliance_id');
  }

  // to_appliance_id - computed: true, optional: false, required: false
  public get toApplianceId() {
    return this.getStringAttribute('to_appliance_id');
  }
}

export class DataPowerstoreVolumegroupVolumeGroupsLocationHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreVolumegroupVolumeGroupsLocationHistoryOutputReference {
    return new DataPowerstoreVolumegroupVolumeGroupsLocationHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerstoreVolumegroupVolumeGroupsMigrationSession {
}

export function dataPowerstoreVolumegroupVolumeGroupsMigrationSessionToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsMigrationSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsMigrationSessionToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsMigrationSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsMigrationSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroupsMigrationSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroupsMigrationSession | undefined) {
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
export interface DataPowerstoreVolumegroupVolumeGroupsProtectionData {
}

export function dataPowerstoreVolumegroupVolumeGroupsProtectionDataToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsProtectionData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsProtectionDataToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsProtectionData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsProtectionDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroupsProtectionData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroupsProtectionData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creator_type - computed: true, optional: false, required: false
  public get creatorType() {
    return this.getStringAttribute('creator_type');
  }

  // expiration_timestamp - computed: true, optional: false, required: false
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
}
export interface DataPowerstoreVolumegroupVolumeGroupsProtectionPolicy {
}

export function dataPowerstoreVolumegroupVolumeGroupsProtectionPolicyToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsProtectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsProtectionPolicyToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsProtectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsProtectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroupsProtectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroupsProtectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataPowerstoreVolumegroupVolumeGroupsVolumes {
}

export function dataPowerstoreVolumegroupVolumeGroupsVolumesToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsVolumesToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroupsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroupsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroupsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

export class DataPowerstoreVolumegroupVolumeGroupsVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreVolumegroupVolumeGroupsVolumesOutputReference {
    return new DataPowerstoreVolumegroupVolumeGroupsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerstoreVolumegroupVolumeGroups {
}

export function dataPowerstoreVolumegroupVolumeGroupsToTerraform(struct?: DataPowerstoreVolumegroupVolumeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreVolumegroupVolumeGroupsToHclTerraform(struct?: DataPowerstoreVolumegroupVolumeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreVolumegroupVolumeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreVolumegroupVolumeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreVolumegroupVolumeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_importing - computed: true, optional: false, required: false
  public get isImporting() {
    return this.getBooleanAttribute('is_importing');
  }

  // is_protectable - computed: true, optional: false, required: false
  public get isProtectable() {
    return this.getBooleanAttribute('is_protectable');
  }

  // is_replication_destination - computed: true, optional: false, required: false
  public get isReplicationDestination() {
    return this.getBooleanAttribute('is_replication_destination');
  }

  // is_write_order_consistent - computed: true, optional: false, required: false
  public get isWriteOrderConsistent() {
    return this.getBooleanAttribute('is_write_order_consistent');
  }

  // location_history - computed: true, optional: false, required: false
  private _locationHistory = new DataPowerstoreVolumegroupVolumeGroupsLocationHistoryList(this, "location_history", false);
  public get locationHistory() {
    return this._locationHistory;
  }

  // migration_session - computed: true, optional: false, required: false
  private _migrationSession = new DataPowerstoreVolumegroupVolumeGroupsMigrationSessionOutputReference(this, "migration_session");
  public get migrationSession() {
    return this._migrationSession;
  }

  // migration_session_id - computed: true, optional: false, required: false
  public get migrationSessionId() {
    return this.getStringAttribute('migration_session_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // placement_rule - computed: true, optional: false, required: false
  public get placementRule() {
    return this.getStringAttribute('placement_rule');
  }

  // protection_data - computed: true, optional: false, required: false
  private _protectionData = new DataPowerstoreVolumegroupVolumeGroupsProtectionDataOutputReference(this, "protection_data");
  public get protectionData() {
    return this._protectionData;
  }

  // protection_policy - computed: true, optional: false, required: false
  private _protectionPolicy = new DataPowerstoreVolumegroupVolumeGroupsProtectionPolicyOutputReference(this, "protection_policy");
  public get protectionPolicy() {
    return this._protectionPolicy;
  }

  // protection_policy_id - computed: true, optional: false, required: false
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_l10n - computed: true, optional: false, required: false
  public get typeL10N() {
    return this.getStringAttribute('type_l10n');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataPowerstoreVolumegroupVolumeGroupsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataPowerstoreVolumegroupVolumeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreVolumegroupVolumeGroupsOutputReference {
    return new DataPowerstoreVolumegroupVolumeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup powerstore_volumegroup}
*/
export class DataPowerstoreVolumegroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_volumegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerstoreVolumegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerstoreVolumegroup to import
  * @param importFromId The id of the existing DataPowerstoreVolumegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerstoreVolumegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_volumegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/volumegroup powerstore_volumegroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerstoreVolumegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerstoreVolumegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerstore_volumegroup',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterExpression = config.filterExpression;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
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

  // volume_groups - computed: true, optional: false, required: false
  private _volumeGroups = new DataPowerstoreVolumegroupVolumeGroupsList(this, "volume_groups", false);
  public get volumeGroups() {
    return this._volumeGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
