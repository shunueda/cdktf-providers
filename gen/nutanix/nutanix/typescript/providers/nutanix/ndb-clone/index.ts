// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbCloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#clustered NdbClone#clustered}
  */
  readonly clustered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#compute_profile_id NdbClone#compute_profile_id}
  */
  readonly computeProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#create_dbserver NdbClone#create_dbserver}
  */
  readonly createDbserver?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#database_parameter_profile_id NdbClone#database_parameter_profile_id}
  */
  readonly databaseParameterProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#dbserver_cluster_id NdbClone#dbserver_cluster_id}
  */
  readonly dbserverClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#dbserver_id NdbClone#dbserver_id}
  */
  readonly dbserverId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#dbserver_logical_cluster_id NdbClone#dbserver_logical_cluster_id}
  */
  readonly dbserverLogicalClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#delete NdbClone#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#delete_logical_cluster NdbClone#delete_logical_cluster}
  */
  readonly deleteLogicalCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#delete_time_machine NdbClone#delete_time_machine}
  */
  readonly deleteTimeMachine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#description NdbClone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#forced NdbClone#forced}
  */
  readonly forced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#id NdbClone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#latest_snapshot NdbClone#latest_snapshot}
  */
  readonly latestSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#name NdbClone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#network_profile_id NdbClone#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#node_count NdbClone#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#nx_cluster_id NdbClone#nx_cluster_id}
  */
  readonly nxClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#remove NdbClone#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#remove_logical_cluster NdbClone#remove_logical_cluster}
  */
  readonly removeLogicalCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#snapshot_id NdbClone#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#soft_remove NdbClone#soft_remove}
  */
  readonly softRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#ssh_public_key NdbClone#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#time_machine_id NdbClone#time_machine_id}
  */
  readonly timeMachineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#time_machine_name NdbClone#time_machine_name}
  */
  readonly timeMachineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#time_zone NdbClone#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#user_pitr_timestamp NdbClone#user_pitr_timestamp}
  */
  readonly userPitrTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#vm_password NdbClone#vm_password}
  */
  readonly vmPassword?: string;
  /**
  * actionarguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#actionarguments NdbClone#actionarguments}
  */
  readonly actionarguments?: NdbCloneActionarguments[] | cdktf.IResolvable;
  /**
  * lcm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#lcm_config NdbClone#lcm_config}
  */
  readonly lcmConfig?: NdbCloneLcmConfig[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#nodes NdbClone#nodes}
  */
  readonly nodes: NdbCloneNodes[] | cdktf.IResolvable;
  /**
  * postgresql_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#postgresql_info NdbClone#postgresql_info}
  */
  readonly postgresqlInfo?: NdbClonePostgresqlInfo[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#tags NdbClone#tags}
  */
  readonly tags?: NdbCloneTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#timeouts NdbClone#timeouts}
  */
  readonly timeouts?: NdbCloneTimeouts;
}
export interface NdbCloneDatabaseNodesInfo {
}

export function ndbCloneDatabaseNodesInfoToTerraform(struct?: NdbCloneDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesInfoToHclTerraform(struct?: NdbCloneDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodesInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // info - computed: true, optional: false, required: false
  private _info = new cdktf.StringMap(this, "info");
  public get info() {
    return this._info;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbCloneDatabaseNodesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesInfoOutputReference {
    return new NdbCloneDatabaseNodesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneDatabaseNodesProperties {
}

export function ndbCloneDatabaseNodesPropertiesToTerraform(struct?: NdbCloneDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesPropertiesToHclTerraform(struct?: NdbCloneDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodesProperties | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbCloneDatabaseNodesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesPropertiesOutputReference {
    return new NdbCloneDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneDatabaseNodesProtectionDomainProperties {
}

export function ndbCloneDatabaseNodesProtectionDomainPropertiesToTerraform(struct?: NdbCloneDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesProtectionDomainPropertiesToHclTerraform(struct?: NdbCloneDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesProtectionDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodesProtectionDomainProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodesProtectionDomainProperties | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbCloneDatabaseNodesProtectionDomainPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesProtectionDomainPropertiesOutputReference {
    return new NdbCloneDatabaseNodesProtectionDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneDatabaseNodesProtectionDomain {
}

export function ndbCloneDatabaseNodesProtectionDomainToTerraform(struct?: NdbCloneDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesProtectionDomainToHclTerraform(struct?: NdbCloneDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesProtectionDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodesProtectionDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodesProtectionDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assoc_entities - computed: true, optional: false, required: false
  public get assocEntities() {
    return this.getListAttribute('assoc_entities');
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // era_created - computed: true, optional: false, required: false
  public get eraCreated() {
    return this.getBooleanAttribute('era_created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // primary_host - computed: true, optional: false, required: false
  public get primaryHost() {
    return this.getStringAttribute('primary_host');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbCloneDatabaseNodesProtectionDomainPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NdbCloneDatabaseNodesProtectionDomainList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesProtectionDomainOutputReference {
    return new NdbCloneDatabaseNodesProtectionDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneDatabaseNodesTags {
}

export function ndbCloneDatabaseNodesTagsToTerraform(struct?: NdbCloneDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesTagsToHclTerraform(struct?: NdbCloneDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbCloneDatabaseNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesTagsOutputReference {
    return new NdbCloneDatabaseNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneDatabaseNodes {
}

export function ndbCloneDatabaseNodesToTerraform(struct?: NdbCloneDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneDatabaseNodesToHclTerraform(struct?: NdbCloneDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneDatabaseNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneDatabaseNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  private _accessLevel = new cdktf.StringMap(this, "access_level");
  public get accessLevel() {
    return this._accessLevel;
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_status - computed: true, optional: false, required: false
  public get databaseStatus() {
    return this.getStringAttribute('database_status');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // dbserver - computed: true, optional: false, required: false
  private _dbserver = new cdktf.StringMap(this, "dbserver");
  public get dbserver() {
    return this._dbserver;
  }

  // dbserver_id - computed: true, optional: false, required: false
  public get dbserverId() {
    return this.getStringAttribute('dbserver_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  private _info = new NdbCloneDatabaseNodesInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbCloneDatabaseNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain - computed: true, optional: false, required: false
  private _protectionDomain = new NdbCloneDatabaseNodesProtectionDomainList(this, "protection_domain", false);
  public get protectionDomain() {
    return this._protectionDomain;
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // software_installation_id - computed: true, optional: false, required: false
  public get softwareInstallationId() {
    return this.getStringAttribute('software_installation_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new NdbCloneDatabaseNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class NdbCloneDatabaseNodesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneDatabaseNodesOutputReference {
    return new NdbCloneDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsBpgDbParam {
}

export function ndbCloneInfoBpgConfigsBpgDbParamToTerraform(struct?: NdbCloneInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsBpgDbParamToHclTerraform(struct?: NdbCloneInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsBpgDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_cache_size - computed: true, optional: false, required: false
  public get effectiveCacheSize() {
    return this.getStringAttribute('effective_cache_size');
  }

  // maintenance_work_mem - computed: true, optional: false, required: false
  public get maintenanceWorkMem() {
    return this.getStringAttribute('maintenance_work_mem');
  }

  // max_parallel_workers_per_gather - computed: true, optional: false, required: false
  public get maxParallelWorkersPerGather() {
    return this.getStringAttribute('max_parallel_workers_per_gather');
  }

  // max_worker_processes - computed: true, optional: false, required: false
  public get maxWorkerProcesses() {
    return this.getStringAttribute('max_worker_processes');
  }

  // shared_buffers - computed: true, optional: false, required: false
  public get sharedBuffers() {
    return this.getStringAttribute('shared_buffers');
  }

  // work_mem - computed: true, optional: false, required: false
  public get workMem() {
    return this.getStringAttribute('work_mem');
  }
}

export class NdbCloneInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsBpgDbParamOutputReference {
    return new NdbCloneInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsStorageArchiveStorage {
}

export function ndbCloneInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: NdbCloneInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: NdbCloneInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsStorageArchiveStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class NdbCloneInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new NdbCloneInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsStorageDataDisks {
}

export function ndbCloneInfoBpgConfigsStorageDataDisksToTerraform(struct?: NdbCloneInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: NdbCloneInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsStorageDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class NdbCloneInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsStorageDataDisksOutputReference {
    return new NdbCloneInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsStorageLogDisks {
}

export function ndbCloneInfoBpgConfigsStorageLogDisksToTerraform(struct?: NdbCloneInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: NdbCloneInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsStorageLogDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class NdbCloneInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsStorageLogDisksOutputReference {
    return new NdbCloneInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsStorage {
}

export function ndbCloneInfoBpgConfigsStorageToTerraform(struct?: NdbCloneInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsStorageToHclTerraform(struct?: NdbCloneInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new NdbCloneInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new NdbCloneInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new NdbCloneInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class NdbCloneInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsStorageOutputReference {
    return new NdbCloneInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigsVmProperties {
}

export function ndbCloneInfoBpgConfigsVmPropertiesToTerraform(struct?: NdbCloneInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsVmPropertiesToHclTerraform(struct?: NdbCloneInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigsVmProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dirty_background_ratio - computed: true, optional: false, required: false
  public get dirtyBackgroundRatio() {
    return this.getNumberAttribute('dirty_background_ratio');
  }

  // dirty_expire_centisecs - computed: true, optional: false, required: false
  public get dirtyExpireCentisecs() {
    return this.getNumberAttribute('dirty_expire_centisecs');
  }

  // dirty_ratio - computed: true, optional: false, required: false
  public get dirtyRatio() {
    return this.getNumberAttribute('dirty_ratio');
  }

  // dirty_writeback_centisecs - computed: true, optional: false, required: false
  public get dirtyWritebackCentisecs() {
    return this.getNumberAttribute('dirty_writeback_centisecs');
  }

  // nr_hugepages - computed: true, optional: false, required: false
  public get nrHugepages() {
    return this.getNumberAttribute('nr_hugepages');
  }

  // overcommit_memory - computed: true, optional: false, required: false
  public get overcommitMemory() {
    return this.getNumberAttribute('overcommit_memory');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }
}

export class NdbCloneInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsVmPropertiesOutputReference {
    return new NdbCloneInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfoBpgConfigs {
}

export function ndbCloneInfoBpgConfigsToTerraform(struct?: NdbCloneInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoBpgConfigsToHclTerraform(struct?: NdbCloneInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new NdbCloneInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new NdbCloneInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new NdbCloneInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class NdbCloneInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoBpgConfigsOutputReference {
    return new NdbCloneInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneInfo {
}

export function ndbCloneInfoToTerraform(struct?: NdbCloneInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneInfoToHclTerraform(struct?: NdbCloneInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new NdbCloneInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbCloneInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneInfoOutputReference {
    return new NdbCloneInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLinkedDatabasesInfo {
}

export function ndbCloneLinkedDatabasesInfoToTerraform(struct?: NdbCloneLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneLinkedDatabasesInfoToHclTerraform(struct?: NdbCloneLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneLinkedDatabasesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLinkedDatabasesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLinkedDatabasesInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // info - computed: true, optional: false, required: false
  private _info = new cdktf.StringMap(this, "info");
  public get info() {
    return this._info;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbCloneLinkedDatabasesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneLinkedDatabasesInfoOutputReference {
    return new NdbCloneLinkedDatabasesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLinkedDatabases {
}

export function ndbCloneLinkedDatabasesToTerraform(struct?: NdbCloneLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneLinkedDatabasesToHclTerraform(struct?: NdbCloneLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneLinkedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLinkedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLinkedDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_status - computed: true, optional: false, required: false
  public get databaseStatus() {
    return this.getStringAttribute('database_status');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  private _info = new NdbCloneLinkedDatabasesInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new cdktf.StringMap(this, "metric");
  public get metric() {
    return this._metric;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_database_id - computed: true, optional: false, required: false
  public get parentDatabaseId() {
    return this.getStringAttribute('parent_database_id');
  }

  // parent_linked_database_id - computed: true, optional: false, required: false
  public get parentLinkedDatabaseId() {
    return this.getStringAttribute('parent_linked_database_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class NdbCloneLinkedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneLinkedDatabasesOutputReference {
    return new NdbCloneLinkedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneProperties {
}

export function ndbClonePropertiesToTerraform(struct?: NdbCloneProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbClonePropertiesToHclTerraform(struct?: NdbCloneProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbClonePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbClonePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbClonePropertiesOutputReference {
    return new NdbClonePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineProperties {
}

export function ndbCloneTimeMachinePropertiesToTerraform(struct?: NdbCloneTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachinePropertiesToHclTerraform(struct?: NdbCloneTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineProperties | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbCloneTimeMachinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachinePropertiesOutputReference {
    return new NdbCloneTimeMachinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleContinuousSchedule {
}

export function ndbCloneTimeMachineScheduleContinuousScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleContinuousScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleContinuousScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleContinuousSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleContinuousSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_backup_interval - computed: true, optional: false, required: false
  public get logBackupInterval() {
    return this.getNumberAttribute('log_backup_interval');
  }

  // snapshots_per_day - computed: true, optional: false, required: false
  public get snapshotsPerDay() {
    return this.getNumberAttribute('snapshots_per_day');
  }
}

export class NdbCloneTimeMachineScheduleContinuousScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleContinuousScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleContinuousScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleDailySchedule {
}

export function ndbCloneTimeMachineScheduleDailyScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleDailyScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class NdbCloneTimeMachineScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleDailyScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleMonthlySchedule {
}

export function ndbCloneTimeMachineScheduleMonthlyScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleMonthlyScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class NdbCloneTimeMachineScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleMonthlyScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleQuartelySchedule {
}

export function ndbCloneTimeMachineScheduleQuartelyScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleQuartelyScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleQuartelyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleQuartelySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleQuartelySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // start_month - computed: true, optional: false, required: false
  public get startMonth() {
    return this.getStringAttribute('start_month');
  }

  // start_month_value - computed: true, optional: false, required: false
  public get startMonthValue() {
    return this.getStringAttribute('start_month_value');
  }
}

export class NdbCloneTimeMachineScheduleQuartelyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleQuartelyScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleQuartelyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleSnapshotTimeOfDay {
}

export function ndbCloneTimeMachineScheduleSnapshotTimeOfDayToTerraform(struct?: NdbCloneTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleSnapshotTimeOfDayToHclTerraform(struct?: NdbCloneTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleSnapshotTimeOfDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleSnapshotTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleSnapshotTimeOfDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra - computed: true, optional: false, required: false
  public get extra() {
    return this.getBooleanAttribute('extra');
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class NdbCloneTimeMachineScheduleSnapshotTimeOfDayList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleSnapshotTimeOfDayOutputReference {
    return new NdbCloneTimeMachineScheduleSnapshotTimeOfDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleWeeklySchedule {
}

export function ndbCloneTimeMachineScheduleWeeklyScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleWeeklyScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleWeeklySchedule | undefined) {
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

  // day_of_week_value - computed: true, optional: false, required: false
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class NdbCloneTimeMachineScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleWeeklyScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineScheduleYearlySchedule {
}

export function ndbCloneTimeMachineScheduleYearlyScheduleToTerraform(struct?: NdbCloneTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleYearlyScheduleToHclTerraform(struct?: NdbCloneTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getStringAttribute('month');
  }

  // month_value - computed: true, optional: false, required: false
  public get monthValue() {
    return this.getStringAttribute('month_value');
  }
}

export class NdbCloneTimeMachineScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleYearlyScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineSchedule {
}

export function ndbCloneTimeMachineScheduleToTerraform(struct?: NdbCloneTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineScheduleToHclTerraform(struct?: NdbCloneTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_schedule - computed: true, optional: false, required: false
  private _continuousSchedule = new NdbCloneTimeMachineScheduleContinuousScheduleList(this, "continuous_schedule", false);
  public get continuousSchedule() {
    return this._continuousSchedule;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new NdbCloneTimeMachineScheduleDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // global_policy - computed: true, optional: false, required: false
  public get globalPolicy() {
    return this.getBooleanAttribute('global_policy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monthly_schedule - computed: true, optional: false, required: false
  private _monthlySchedule = new NdbCloneTimeMachineScheduleMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // quartely_schedule - computed: true, optional: false, required: false
  private _quartelySchedule = new NdbCloneTimeMachineScheduleQuartelyScheduleList(this, "quartely_schedule", false);
  public get quartelySchedule() {
    return this._quartelySchedule;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // snapshot_time_of_day - computed: true, optional: false, required: false
  private _snapshotTimeOfDay = new NdbCloneTimeMachineScheduleSnapshotTimeOfDayList(this, "snapshot_time_of_day", false);
  public get snapshotTimeOfDay() {
    return this._snapshotTimeOfDay;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // system_policy - computed: true, optional: false, required: false
  public get systemPolicy() {
    return this.getBooleanAttribute('system_policy');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new NdbCloneTimeMachineScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new NdbCloneTimeMachineScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class NdbCloneTimeMachineScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineScheduleOutputReference {
    return new NdbCloneTimeMachineScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineSla {
}

export function ndbCloneTimeMachineSlaToTerraform(struct?: NdbCloneTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineSlaToHclTerraform(struct?: NdbCloneTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineSla | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_retention - computed: true, optional: false, required: false
  public get continuousRetention() {
    return this.getNumberAttribute('continuous_retention');
  }

  // current_active_frequency - computed: true, optional: false, required: false
  public get currentActiveFrequency() {
    return this.getStringAttribute('current_active_frequency');
  }

  // daily_retention - computed: true, optional: false, required: false
  public get dailyRetention() {
    return this.getNumberAttribute('daily_retention');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monthly_retention - computed: true, optional: false, required: false
  public get monthlyRetention() {
    return this.getNumberAttribute('monthly_retention');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // pitr_enabled - computed: true, optional: false, required: false
  public get pitrEnabled() {
    return this.getBooleanAttribute('pitr_enabled');
  }

  // quarterly_retention - computed: true, optional: false, required: false
  public get quarterlyRetention() {
    return this.getNumberAttribute('quarterly_retention');
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // system_sla - computed: true, optional: false, required: false
  public get systemSla() {
    return this.getBooleanAttribute('system_sla');
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // weekly_retention - computed: true, optional: false, required: false
  public get weeklyRetention() {
    return this.getNumberAttribute('weekly_retention');
  }

  // yearly_retention - computed: true, optional: false, required: false
  public get yearlyRetention() {
    return this.getNumberAttribute('yearly_retention');
  }
}

export class NdbCloneTimeMachineSlaList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineSlaOutputReference {
    return new NdbCloneTimeMachineSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachineTags {
}

export function ndbCloneTimeMachineTagsToTerraform(struct?: NdbCloneTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineTagsToHclTerraform(struct?: NdbCloneTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachineTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbCloneTimeMachineTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineTagsOutputReference {
    return new NdbCloneTimeMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeMachine {
}

export function ndbCloneTimeMachineToTerraform(struct?: NdbCloneTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbCloneTimeMachineToHclTerraform(struct?: NdbCloneTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbCloneTimeMachineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTimeMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // clone - computed: true, optional: false, required: false
  public get clone() {
    return this.getBooleanAttribute('clone');
  }

  // clones - computed: true, optional: false, required: false
  public get clones() {
    return this.getStringAttribute('clones');
  }

  // clustered - computed: true, optional: false, required: false
  public get clustered() {
    return this.getBooleanAttribute('clustered');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ea_status - computed: true, optional: false, required: false
  public get eaStatus() {
    return this.getStringAttribute('ea_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbCloneTimeMachinePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new NdbCloneTimeMachineScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // sla - computed: true, optional: false, required: false
  private _sla = new NdbCloneTimeMachineSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }

  // sla_id - computed: true, optional: false, required: false
  public get slaId() {
    return this.getStringAttribute('sla_id');
  }

  // sla_update_in_progress - computed: true, optional: false, required: false
  public get slaUpdateInProgress() {
    return this.getBooleanAttribute('sla_update_in_progress');
  }

  // sla_update_metadata - computed: true, optional: false, required: false
  public get slaUpdateMetadata() {
    return this.getStringAttribute('sla_update_metadata');
  }

  // source_nx_clusters - computed: true, optional: false, required: false
  public get sourceNxClusters() {
    return this.getListAttribute('source_nx_clusters');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new NdbCloneTimeMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NdbCloneTimeMachineList extends cdktf.ComplexList {

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
  public get(index: number): NdbCloneTimeMachineOutputReference {
    return new NdbCloneTimeMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneActionarguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#name NdbClone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#value NdbClone#value}
  */
  readonly value: string;
}

export function ndbCloneActionargumentsToTerraform(struct?: NdbCloneActionarguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbCloneActionargumentsToHclTerraform(struct?: NdbCloneActionarguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NdbCloneActionargumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneActionarguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneActionarguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NdbCloneActionargumentsList extends cdktf.ComplexList {
  public internalValue? : NdbCloneActionarguments[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneActionargumentsOutputReference {
    return new NdbCloneActionargumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#delete_database NdbClone#delete_database}
  */
  readonly deleteDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#expire_in_days NdbClone#expire_in_days}
  */
  readonly expireInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#expiry_date_timezone NdbClone#expiry_date_timezone}
  */
  readonly expiryDateTimezone: string;
}

export function ndbCloneLcmConfigDatabaseLcmConfigExpiryDetailsToTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_database: cdktf.booleanToTerraform(struct!.deleteDatabase),
    expire_in_days: cdktf.numberToTerraform(struct!.expireInDays),
    expiry_date_timezone: cdktf.stringToTerraform(struct!.expiryDateTimezone),
  }
}


export function ndbCloneLcmConfigDatabaseLcmConfigExpiryDetailsToHclTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_database: {
      value: cdktf.booleanToHclTerraform(struct!.deleteDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_in_days: {
      value: cdktf.numberToHclTerraform(struct!.expireInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiry_date_timezone: {
      value: cdktf.stringToHclTerraform(struct!.expiryDateTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDatabase = this._deleteDatabase;
    }
    if (this._expireInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireInDays = this._expireInDays;
    }
    if (this._expiryDateTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryDateTimezone = this._expiryDateTimezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteDatabase = undefined;
      this._expireInDays = undefined;
      this._expiryDateTimezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteDatabase = value.deleteDatabase;
      this._expireInDays = value.expireInDays;
      this._expiryDateTimezone = value.expiryDateTimezone;
    }
  }

  // delete_database - computed: false, optional: true, required: false
  private _deleteDatabase?: boolean | cdktf.IResolvable; 
  public get deleteDatabase() {
    return this.getBooleanAttribute('delete_database');
  }
  public set deleteDatabase(value: boolean | cdktf.IResolvable) {
    this._deleteDatabase = value;
  }
  public resetDeleteDatabase() {
    this._deleteDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDatabaseInput() {
    return this._deleteDatabase;
  }

  // expire_in_days - computed: false, optional: true, required: false
  private _expireInDays?: number; 
  public get expireInDays() {
    return this.getNumberAttribute('expire_in_days');
  }
  public set expireInDays(value: number) {
    this._expireInDays = value;
  }
  public resetExpireInDays() {
    this._expireInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInDaysInput() {
    return this._expireInDays;
  }

  // expiry_date_timezone - computed: false, optional: false, required: true
  private _expiryDateTimezone?: string; 
  public get expiryDateTimezone() {
    return this.getStringAttribute('expiry_date_timezone');
  }
  public set expiryDateTimezone(value: string) {
    this._expiryDateTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateTimezoneInput() {
    return this._expiryDateTimezone;
  }
}

export class NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsList extends cdktf.ComplexList {
  public internalValue? : NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsOutputReference {
    return new NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#refresh_date_timezone NdbClone#refresh_date_timezone}
  */
  readonly refreshDateTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#refresh_in_days NdbClone#refresh_in_days}
  */
  readonly refreshInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#refresh_time NdbClone#refresh_time}
  */
  readonly refreshTime?: string;
}

export function ndbCloneLcmConfigDatabaseLcmConfigRefreshDetailsToTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_date_timezone: cdktf.stringToTerraform(struct!.refreshDateTimezone),
    refresh_in_days: cdktf.numberToTerraform(struct!.refreshInDays),
    refresh_time: cdktf.stringToTerraform(struct!.refreshTime),
  }
}


export function ndbCloneLcmConfigDatabaseLcmConfigRefreshDetailsToHclTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_date_timezone: {
      value: cdktf.stringToHclTerraform(struct!.refreshDateTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_in_days: {
      value: cdktf.numberToHclTerraform(struct!.refreshInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_time: {
      value: cdktf.stringToHclTerraform(struct!.refreshTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshDateTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshDateTimezone = this._refreshDateTimezone;
    }
    if (this._refreshInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInDays = this._refreshInDays;
    }
    if (this._refreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTime = this._refreshTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refreshDateTimezone = undefined;
      this._refreshInDays = undefined;
      this._refreshTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refreshDateTimezone = value.refreshDateTimezone;
      this._refreshInDays = value.refreshInDays;
      this._refreshTime = value.refreshTime;
    }
  }

  // refresh_date_timezone - computed: false, optional: true, required: false
  private _refreshDateTimezone?: string; 
  public get refreshDateTimezone() {
    return this.getStringAttribute('refresh_date_timezone');
  }
  public set refreshDateTimezone(value: string) {
    this._refreshDateTimezone = value;
  }
  public resetRefreshDateTimezone() {
    this._refreshDateTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshDateTimezoneInput() {
    return this._refreshDateTimezone;
  }

  // refresh_in_days - computed: false, optional: true, required: false
  private _refreshInDays?: number; 
  public get refreshInDays() {
    return this.getNumberAttribute('refresh_in_days');
  }
  public set refreshInDays(value: number) {
    this._refreshInDays = value;
  }
  public resetRefreshInDays() {
    this._refreshInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInDaysInput() {
    return this._refreshInDays;
  }

  // refresh_time - computed: false, optional: true, required: false
  private _refreshTime?: string; 
  public get refreshTime() {
    return this.getStringAttribute('refresh_time');
  }
  public set refreshTime(value: string) {
    this._refreshTime = value;
  }
  public resetRefreshTime() {
    this._refreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTimeInput() {
    return this._refreshTime;
  }
}

export class NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsList extends cdktf.ComplexList {
  public internalValue? : NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsOutputReference {
    return new NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLcmConfigDatabaseLcmConfig {
  /**
  * expiry_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#expiry_details NdbClone#expiry_details}
  */
  readonly expiryDetails?: NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails[] | cdktf.IResolvable;
  /**
  * refresh_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#refresh_details NdbClone#refresh_details}
  */
  readonly refreshDetails?: NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails[] | cdktf.IResolvable;
}

export function ndbCloneLcmConfigDatabaseLcmConfigToTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry_details: cdktf.listMapper(ndbCloneLcmConfigDatabaseLcmConfigExpiryDetailsToTerraform, true)(struct!.expiryDetails),
    refresh_details: cdktf.listMapper(ndbCloneLcmConfigDatabaseLcmConfigRefreshDetailsToTerraform, true)(struct!.refreshDetails),
  }
}


export function ndbCloneLcmConfigDatabaseLcmConfigToHclTerraform(struct?: NdbCloneLcmConfigDatabaseLcmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiry_details: {
      value: cdktf.listMapperHcl(ndbCloneLcmConfigDatabaseLcmConfigExpiryDetailsToHclTerraform, true)(struct!.expiryDetails),
      isBlock: true,
      type: "list",
      storageClassType: "NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsList",
    },
    refresh_details: {
      value: cdktf.listMapperHcl(ndbCloneLcmConfigDatabaseLcmConfigRefreshDetailsToHclTerraform, true)(struct!.refreshDetails),
      isBlock: true,
      type: "list",
      storageClassType: "NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneLcmConfigDatabaseLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLcmConfigDatabaseLcmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiryDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryDetails = this._expiryDetails?.internalValue;
    }
    if (this._refreshDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshDetails = this._refreshDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLcmConfigDatabaseLcmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiryDetails.internalValue = undefined;
      this._refreshDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiryDetails.internalValue = value.expiryDetails;
      this._refreshDetails.internalValue = value.refreshDetails;
    }
  }

  // expiry_details - computed: false, optional: true, required: false
  private _expiryDetails = new NdbCloneLcmConfigDatabaseLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }
  public putExpiryDetails(value: NdbCloneLcmConfigDatabaseLcmConfigExpiryDetails[] | cdktf.IResolvable) {
    this._expiryDetails.internalValue = value;
  }
  public resetExpiryDetails() {
    this._expiryDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDetailsInput() {
    return this._expiryDetails.internalValue;
  }

  // refresh_details - computed: false, optional: true, required: false
  private _refreshDetails = new NdbCloneLcmConfigDatabaseLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
  public putRefreshDetails(value: NdbCloneLcmConfigDatabaseLcmConfigRefreshDetails[] | cdktf.IResolvable) {
    this._refreshDetails.internalValue = value;
  }
  public resetRefreshDetails() {
    this._refreshDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshDetailsInput() {
    return this._refreshDetails.internalValue;
  }
}

export class NdbCloneLcmConfigDatabaseLcmConfigList extends cdktf.ComplexList {
  public internalValue? : NdbCloneLcmConfigDatabaseLcmConfig[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneLcmConfigDatabaseLcmConfigOutputReference {
    return new NdbCloneLcmConfigDatabaseLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneLcmConfig {
  /**
  * database_lcm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#database_lcm_config NdbClone#database_lcm_config}
  */
  readonly databaseLcmConfig?: NdbCloneLcmConfigDatabaseLcmConfig[] | cdktf.IResolvable;
}

export function ndbCloneLcmConfigToTerraform(struct?: NdbCloneLcmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_lcm_config: cdktf.listMapper(ndbCloneLcmConfigDatabaseLcmConfigToTerraform, true)(struct!.databaseLcmConfig),
  }
}


export function ndbCloneLcmConfigToHclTerraform(struct?: NdbCloneLcmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_lcm_config: {
      value: cdktf.listMapperHcl(ndbCloneLcmConfigDatabaseLcmConfigToHclTerraform, true)(struct!.databaseLcmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NdbCloneLcmConfigDatabaseLcmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneLcmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseLcmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseLcmConfig = this._databaseLcmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneLcmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseLcmConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseLcmConfig.internalValue = value.databaseLcmConfig;
    }
  }

  // database_lcm_config - computed: false, optional: true, required: false
  private _databaseLcmConfig = new NdbCloneLcmConfigDatabaseLcmConfigList(this, "database_lcm_config", false);
  public get databaseLcmConfig() {
    return this._databaseLcmConfig;
  }
  public putDatabaseLcmConfig(value: NdbCloneLcmConfigDatabaseLcmConfig[] | cdktf.IResolvable) {
    this._databaseLcmConfig.internalValue = value;
  }
  public resetDatabaseLcmConfig() {
    this._databaseLcmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseLcmConfigInput() {
    return this._databaseLcmConfig.internalValue;
  }
}

export class NdbCloneLcmConfigList extends cdktf.ComplexList {
  public internalValue? : NdbCloneLcmConfig[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneLcmConfigOutputReference {
    return new NdbCloneLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneNodesProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#name NdbClone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#value NdbClone#value}
  */
  readonly value?: string;
}

export function ndbCloneNodesPropertiesToTerraform(struct?: NdbCloneNodesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbCloneNodesPropertiesToHclTerraform(struct?: NdbCloneNodesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NdbCloneNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneNodesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneNodesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class NdbCloneNodesPropertiesList extends cdktf.ComplexList {
  public internalValue? : NdbCloneNodesProperties[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneNodesPropertiesOutputReference {
    return new NdbCloneNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#compute_profile_id NdbClone#compute_profile_id}
  */
  readonly computeProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#dbserver_id NdbClone#dbserver_id}
  */
  readonly dbserverId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#network_profile_id NdbClone#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#new_db_server_time_zone NdbClone#new_db_server_time_zone}
  */
  readonly newDbServerTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#nx_cluster_id NdbClone#nx_cluster_id}
  */
  readonly nxClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#vm_name NdbClone#vm_name}
  */
  readonly vmName?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#properties NdbClone#properties}
  */
  readonly properties?: NdbCloneNodesProperties[] | cdktf.IResolvable;
}

export function ndbCloneNodesToTerraform(struct?: NdbCloneNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_profile_id: cdktf.stringToTerraform(struct!.computeProfileId),
    dbserver_id: cdktf.stringToTerraform(struct!.dbserverId),
    network_profile_id: cdktf.stringToTerraform(struct!.networkProfileId),
    new_db_server_time_zone: cdktf.stringToTerraform(struct!.newDbServerTimeZone),
    nx_cluster_id: cdktf.stringToTerraform(struct!.nxClusterId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    properties: cdktf.listMapper(ndbCloneNodesPropertiesToTerraform, true)(struct!.properties),
  }
}


export function ndbCloneNodesToHclTerraform(struct?: NdbCloneNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.computeProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbserver_id: {
      value: cdktf.stringToHclTerraform(struct!.dbserverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.networkProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_db_server_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.newDbServerTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nx_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.nxClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(ndbCloneNodesPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "NdbCloneNodesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeProfileId = this._computeProfileId;
    }
    if (this._dbserverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbserverId = this._dbserverId;
    }
    if (this._networkProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProfileId = this._networkProfileId;
    }
    if (this._newDbServerTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.newDbServerTimeZone = this._newDbServerTimeZone;
    }
    if (this._nxClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxClusterId = this._nxClusterId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeProfileId = undefined;
      this._dbserverId = undefined;
      this._networkProfileId = undefined;
      this._newDbServerTimeZone = undefined;
      this._nxClusterId = undefined;
      this._vmName = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeProfileId = value.computeProfileId;
      this._dbserverId = value.dbserverId;
      this._networkProfileId = value.networkProfileId;
      this._newDbServerTimeZone = value.newDbServerTimeZone;
      this._nxClusterId = value.nxClusterId;
      this._vmName = value.vmName;
      this._properties.internalValue = value.properties;
    }
  }

  // compute_profile_id - computed: false, optional: true, required: false
  private _computeProfileId?: string; 
  public get computeProfileId() {
    return this.getStringAttribute('compute_profile_id');
  }
  public set computeProfileId(value: string) {
    this._computeProfileId = value;
  }
  public resetComputeProfileId() {
    this._computeProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProfileIdInput() {
    return this._computeProfileId;
  }

  // dbserver_id - computed: false, optional: true, required: false
  private _dbserverId?: string; 
  public get dbserverId() {
    return this.getStringAttribute('dbserver_id');
  }
  public set dbserverId(value: string) {
    this._dbserverId = value;
  }
  public resetDbserverId() {
    this._dbserverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverIdInput() {
    return this._dbserverId;
  }

  // network_profile_id - computed: false, optional: true, required: false
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
  }

  // new_db_server_time_zone - computed: false, optional: true, required: false
  private _newDbServerTimeZone?: string; 
  public get newDbServerTimeZone() {
    return this.getStringAttribute('new_db_server_time_zone');
  }
  public set newDbServerTimeZone(value: string) {
    this._newDbServerTimeZone = value;
  }
  public resetNewDbServerTimeZone() {
    this._newDbServerTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDbServerTimeZoneInput() {
    return this._newDbServerTimeZone;
  }

  // nx_cluster_id - computed: false, optional: true, required: false
  private _nxClusterId?: string; 
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }
  public set nxClusterId(value: string) {
    this._nxClusterId = value;
  }
  public resetNxClusterId() {
    this._nxClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxClusterIdInput() {
    return this._nxClusterId;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new NdbCloneNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: NdbCloneNodesProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class NdbCloneNodesList extends cdktf.ComplexList {
  public internalValue? : NdbCloneNodes[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneNodesOutputReference {
    return new NdbCloneNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbClonePostgresqlInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#db_password NdbClone#db_password}
  */
  readonly dbPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#dbserver_description NdbClone#dbserver_description}
  */
  readonly dbserverDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#post_clone_cmd NdbClone#post_clone_cmd}
  */
  readonly postCloneCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#pre_clone_cmd NdbClone#pre_clone_cmd}
  */
  readonly preCloneCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#vm_name NdbClone#vm_name}
  */
  readonly vmName: string;
}

export function ndbClonePostgresqlInfoToTerraform(struct?: NdbClonePostgresqlInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_password: cdktf.stringToTerraform(struct!.dbPassword),
    dbserver_description: cdktf.stringToTerraform(struct!.dbserverDescription),
    post_clone_cmd: cdktf.stringToTerraform(struct!.postCloneCmd),
    pre_clone_cmd: cdktf.stringToTerraform(struct!.preCloneCmd),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
  }
}


export function ndbClonePostgresqlInfoToHclTerraform(struct?: NdbClonePostgresqlInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_password: {
      value: cdktf.stringToHclTerraform(struct!.dbPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbserver_description: {
      value: cdktf.stringToHclTerraform(struct!.dbserverDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_clone_cmd: {
      value: cdktf.stringToHclTerraform(struct!.postCloneCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_clone_cmd: {
      value: cdktf.stringToHclTerraform(struct!.preCloneCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbClonePostgresqlInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbClonePostgresqlInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPassword = this._dbPassword;
    }
    if (this._dbserverDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbserverDescription = this._dbserverDescription;
    }
    if (this._postCloneCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCloneCmd = this._postCloneCmd;
    }
    if (this._preCloneCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCloneCmd = this._preCloneCmd;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbClonePostgresqlInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbPassword = undefined;
      this._dbserverDescription = undefined;
      this._postCloneCmd = undefined;
      this._preCloneCmd = undefined;
      this._vmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbPassword = value.dbPassword;
      this._dbserverDescription = value.dbserverDescription;
      this._postCloneCmd = value.postCloneCmd;
      this._preCloneCmd = value.preCloneCmd;
      this._vmName = value.vmName;
    }
  }

  // db_password - computed: false, optional: false, required: true
  private _dbPassword?: string; 
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // dbserver_description - computed: false, optional: true, required: false
  private _dbserverDescription?: string; 
  public get dbserverDescription() {
    return this.getStringAttribute('dbserver_description');
  }
  public set dbserverDescription(value: string) {
    this._dbserverDescription = value;
  }
  public resetDbserverDescription() {
    this._dbserverDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverDescriptionInput() {
    return this._dbserverDescription;
  }

  // post_clone_cmd - computed: false, optional: true, required: false
  private _postCloneCmd?: string; 
  public get postCloneCmd() {
    return this.getStringAttribute('post_clone_cmd');
  }
  public set postCloneCmd(value: string) {
    this._postCloneCmd = value;
  }
  public resetPostCloneCmd() {
    this._postCloneCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCloneCmdInput() {
    return this._postCloneCmd;
  }

  // pre_clone_cmd - computed: false, optional: true, required: false
  private _preCloneCmd?: string; 
  public get preCloneCmd() {
    return this.getStringAttribute('pre_clone_cmd');
  }
  public set preCloneCmd(value: string) {
    this._preCloneCmd = value;
  }
  public resetPreCloneCmd() {
    this._preCloneCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCloneCmdInput() {
    return this._preCloneCmd;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }
}

export class NdbClonePostgresqlInfoList extends cdktf.ComplexList {
  public internalValue? : NdbClonePostgresqlInfo[] | cdktf.IResolvable

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
  public get(index: number): NdbClonePostgresqlInfoOutputReference {
    return new NdbClonePostgresqlInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#tag_id NdbClone#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#tag_name NdbClone#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#value NdbClone#value}
  */
  readonly value?: string;
}

export function ndbCloneTagsToTerraform(struct?: NdbCloneTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbCloneTagsToHclTerraform(struct?: NdbCloneTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
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

export class NdbCloneTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbCloneTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagId = undefined;
      this._tagName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagId = value.tagId;
      this._tagName = value.tagName;
      this._value = value.value;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // value - computed: true, optional: true, required: false
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

export class NdbCloneTagsList extends cdktf.ComplexList {
  public internalValue? : NdbCloneTags[] | cdktf.IResolvable

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
  public get(index: number): NdbCloneTagsOutputReference {
    return new NdbCloneTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbCloneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#create NdbClone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#delete NdbClone#delete}
  */
  readonly delete?: string;
}

export function ndbCloneTimeoutsToTerraform(struct?: NdbCloneTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ndbCloneTimeoutsToHclTerraform(struct?: NdbCloneTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbCloneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbCloneTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbCloneTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone nutanix_ndb_clone}
*/
export class NdbClone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbClone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbClone to import
  * @param importFromId The id of the existing NdbClone that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbClone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_clone nutanix_ndb_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbCloneConfig
  */
  public constructor(scope: Construct, id: string, config: NdbCloneConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_clone',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clustered = config.clustered;
    this._computeProfileId = config.computeProfileId;
    this._createDbserver = config.createDbserver;
    this._databaseParameterProfileId = config.databaseParameterProfileId;
    this._dbserverClusterId = config.dbserverClusterId;
    this._dbserverId = config.dbserverId;
    this._dbserverLogicalClusterId = config.dbserverLogicalClusterId;
    this._delete = config.delete;
    this._deleteLogicalCluster = config.deleteLogicalCluster;
    this._deleteTimeMachine = config.deleteTimeMachine;
    this._description = config.description;
    this._forced = config.forced;
    this._id = config.id;
    this._latestSnapshot = config.latestSnapshot;
    this._name = config.name;
    this._networkProfileId = config.networkProfileId;
    this._nodeCount = config.nodeCount;
    this._nxClusterId = config.nxClusterId;
    this._remove = config.remove;
    this._removeLogicalCluster = config.removeLogicalCluster;
    this._snapshotId = config.snapshotId;
    this._softRemove = config.softRemove;
    this._sshPublicKey = config.sshPublicKey;
    this._timeMachineId = config.timeMachineId;
    this._timeMachineName = config.timeMachineName;
    this._timeZone = config.timeZone;
    this._userPitrTimestamp = config.userPitrTimestamp;
    this._vmPassword = config.vmPassword;
    this._actionarguments.internalValue = config.actionarguments;
    this._lcmConfig.internalValue = config.lcmConfig;
    this._nodes.internalValue = config.nodes;
    this._postgresqlInfo.internalValue = config.postgresqlInfo;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone - computed: true, optional: false, required: false
  public get clone() {
    return this.getBooleanAttribute('clone');
  }

  // clustered - computed: false, optional: true, required: false
  private _clustered?: boolean | cdktf.IResolvable; 
  public get clustered() {
    return this.getBooleanAttribute('clustered');
  }
  public set clustered(value: boolean | cdktf.IResolvable) {
    this._clustered = value;
  }
  public resetClustered() {
    this._clustered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteredInput() {
    return this._clustered;
  }

  // compute_profile_id - computed: false, optional: true, required: false
  private _computeProfileId?: string; 
  public get computeProfileId() {
    return this.getStringAttribute('compute_profile_id');
  }
  public set computeProfileId(value: string) {
    this._computeProfileId = value;
  }
  public resetComputeProfileId() {
    this._computeProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProfileIdInput() {
    return this._computeProfileId;
  }

  // create_dbserver - computed: false, optional: true, required: false
  private _createDbserver?: boolean | cdktf.IResolvable; 
  public get createDbserver() {
    return this.getBooleanAttribute('create_dbserver');
  }
  public set createDbserver(value: boolean | cdktf.IResolvable) {
    this._createDbserver = value;
  }
  public resetCreateDbserver() {
    this._createDbserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDbserverInput() {
    return this._createDbserver;
  }

  // database_cluster_type - computed: true, optional: false, required: false
  public get databaseClusterType() {
    return this.getStringAttribute('database_cluster_type');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_nodes - computed: true, optional: false, required: false
  private _databaseNodes = new NdbCloneDatabaseNodesList(this, "database_nodes", false);
  public get databaseNodes() {
    return this._databaseNodes;
  }

  // database_parameter_profile_id - computed: false, optional: true, required: false
  private _databaseParameterProfileId?: string; 
  public get databaseParameterProfileId() {
    return this.getStringAttribute('database_parameter_profile_id');
  }
  public set databaseParameterProfileId(value: string) {
    this._databaseParameterProfileId = value;
  }
  public resetDatabaseParameterProfileId() {
    this._databaseParameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseParameterProfileIdInput() {
    return this._databaseParameterProfileId;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // dbserver_cluster_id - computed: false, optional: true, required: false
  private _dbserverClusterId?: string; 
  public get dbserverClusterId() {
    return this.getStringAttribute('dbserver_cluster_id');
  }
  public set dbserverClusterId(value: string) {
    this._dbserverClusterId = value;
  }
  public resetDbserverClusterId() {
    this._dbserverClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverClusterIdInput() {
    return this._dbserverClusterId;
  }

  // dbserver_id - computed: false, optional: true, required: false
  private _dbserverId?: string; 
  public get dbserverId() {
    return this.getStringAttribute('dbserver_id');
  }
  public set dbserverId(value: string) {
    this._dbserverId = value;
  }
  public resetDbserverId() {
    this._dbserverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverIdInput() {
    return this._dbserverId;
  }

  // dbserver_logical_cluster - computed: true, optional: false, required: false
  private _dbserverLogicalCluster = new cdktf.StringMap(this, "dbserver_logical_cluster");
  public get dbserverLogicalCluster() {
    return this._dbserverLogicalCluster;
  }

  // dbserver_logical_cluster_id - computed: false, optional: true, required: false
  private _dbserverLogicalClusterId?: string; 
  public get dbserverLogicalClusterId() {
    return this.getStringAttribute('dbserver_logical_cluster_id');
  }
  public set dbserverLogicalClusterId(value: string) {
    this._dbserverLogicalClusterId = value;
  }
  public resetDbserverLogicalClusterId() {
    this._dbserverLogicalClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverLogicalClusterIdInput() {
    return this._dbserverLogicalClusterId;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // delete_logical_cluster - computed: false, optional: true, required: false
  private _deleteLogicalCluster?: boolean | cdktf.IResolvable; 
  public get deleteLogicalCluster() {
    return this.getBooleanAttribute('delete_logical_cluster');
  }
  public set deleteLogicalCluster(value: boolean | cdktf.IResolvable) {
    this._deleteLogicalCluster = value;
  }
  public resetDeleteLogicalCluster() {
    this._deleteLogicalCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLogicalClusterInput() {
    return this._deleteLogicalCluster;
  }

  // delete_time_machine - computed: false, optional: true, required: false
  private _deleteTimeMachine?: boolean | cdktf.IResolvable; 
  public get deleteTimeMachine() {
    return this.getBooleanAttribute('delete_time_machine');
  }
  public set deleteTimeMachine(value: boolean | cdktf.IResolvable) {
    this._deleteTimeMachine = value;
  }
  public resetDeleteTimeMachine() {
    this._deleteTimeMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTimeMachineInput() {
    return this._deleteTimeMachine;
  }

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

  // forced - computed: false, optional: true, required: false
  private _forced?: boolean | cdktf.IResolvable; 
  public get forced() {
    return this.getBooleanAttribute('forced');
  }
  public set forced(value: boolean | cdktf.IResolvable) {
    this._forced = value;
  }
  public resetForced() {
    this._forced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedInput() {
    return this._forced;
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

  // info - computed: true, optional: false, required: false
  private _info = new NdbCloneInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // latest_snapshot - computed: false, optional: true, required: false
  private _latestSnapshot?: boolean | cdktf.IResolvable; 
  public get latestSnapshot() {
    return this.getBooleanAttribute('latest_snapshot');
  }
  public set latestSnapshot(value: boolean | cdktf.IResolvable) {
    this._latestSnapshot = value;
  }
  public resetLatestSnapshot() {
    this._latestSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestSnapshotInput() {
    return this._latestSnapshot;
  }

  // linked_databases - computed: true, optional: false, required: false
  private _linkedDatabases = new NdbCloneLinkedDatabasesList(this, "linked_databases", false);
  public get linkedDatabases() {
    return this._linkedDatabases;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new cdktf.StringMap(this, "metric");
  public get metric() {
    return this._metric;
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

  // network_profile_id - computed: false, optional: true, required: false
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // nx_cluster_id - computed: false, optional: false, required: true
  private _nxClusterId?: string; 
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }
  public set nxClusterId(value: string) {
    this._nxClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nxClusterIdInput() {
    return this._nxClusterId;
  }

  // parent_database_id - computed: true, optional: false, required: false
  public get parentDatabaseId() {
    return this.getStringAttribute('parent_database_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbClonePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // remove_logical_cluster - computed: false, optional: true, required: false
  private _removeLogicalCluster?: boolean | cdktf.IResolvable; 
  public get removeLogicalCluster() {
    return this.getBooleanAttribute('remove_logical_cluster');
  }
  public set removeLogicalCluster(value: boolean | cdktf.IResolvable) {
    this._removeLogicalCluster = value;
  }
  public resetRemoveLogicalCluster() {
    this._removeLogicalCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLogicalClusterInput() {
    return this._removeLogicalCluster;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // soft_remove - computed: false, optional: true, required: false
  private _softRemove?: boolean | cdktf.IResolvable; 
  public get softRemove() {
    return this.getBooleanAttribute('soft_remove');
  }
  public set softRemove(value: boolean | cdktf.IResolvable) {
    this._softRemove = value;
  }
  public resetSoftRemove() {
    this._softRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softRemoveInput() {
    return this._softRemove;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine - computed: true, optional: false, required: false
  private _timeMachine = new NdbCloneTimeMachineList(this, "time_machine", false);
  public get timeMachine() {
    return this._timeMachine;
  }

  // time_machine_id - computed: false, optional: true, required: false
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  public resetTimeMachineId() {
    this._timeMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
  }

  // time_machine_name - computed: false, optional: true, required: false
  private _timeMachineName?: string; 
  public get timeMachineName() {
    return this.getStringAttribute('time_machine_name');
  }
  public set timeMachineName(value: string) {
    this._timeMachineName = value;
  }
  public resetTimeMachineName() {
    this._timeMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineNameInput() {
    return this._timeMachineName;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_pitr_timestamp - computed: false, optional: true, required: false
  private _userPitrTimestamp?: string; 
  public get userPitrTimestamp() {
    return this.getStringAttribute('user_pitr_timestamp');
  }
  public set userPitrTimestamp(value: string) {
    this._userPitrTimestamp = value;
  }
  public resetUserPitrTimestamp() {
    this._userPitrTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPitrTimestampInput() {
    return this._userPitrTimestamp;
  }

  // vm_password - computed: false, optional: true, required: false
  private _vmPassword?: string; 
  public get vmPassword() {
    return this.getStringAttribute('vm_password');
  }
  public set vmPassword(value: string) {
    this._vmPassword = value;
  }
  public resetVmPassword() {
    this._vmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPasswordInput() {
    return this._vmPassword;
  }

  // actionarguments - computed: false, optional: true, required: false
  private _actionarguments = new NdbCloneActionargumentsList(this, "actionarguments", true);
  public get actionarguments() {
    return this._actionarguments;
  }
  public putActionarguments(value: NdbCloneActionarguments[] | cdktf.IResolvable) {
    this._actionarguments.internalValue = value;
  }
  public resetActionarguments() {
    this._actionarguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionargumentsInput() {
    return this._actionarguments.internalValue;
  }

  // lcm_config - computed: false, optional: true, required: false
  private _lcmConfig = new NdbCloneLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }
  public putLcmConfig(value: NdbCloneLcmConfig[] | cdktf.IResolvable) {
    this._lcmConfig.internalValue = value;
  }
  public resetLcmConfig() {
    this._lcmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcmConfigInput() {
    return this._lcmConfig.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new NdbCloneNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: NdbCloneNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // postgresql_info - computed: false, optional: true, required: false
  private _postgresqlInfo = new NdbClonePostgresqlInfoList(this, "postgresql_info", false);
  public get postgresqlInfo() {
    return this._postgresqlInfo;
  }
  public putPostgresqlInfo(value: NdbClonePostgresqlInfo[] | cdktf.IResolvable) {
    this._postgresqlInfo.internalValue = value;
  }
  public resetPostgresqlInfo() {
    this._postgresqlInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInfoInput() {
    return this._postgresqlInfo.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbCloneTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbCloneTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbCloneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbCloneTimeouts) {
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
      clustered: cdktf.booleanToTerraform(this._clustered),
      compute_profile_id: cdktf.stringToTerraform(this._computeProfileId),
      create_dbserver: cdktf.booleanToTerraform(this._createDbserver),
      database_parameter_profile_id: cdktf.stringToTerraform(this._databaseParameterProfileId),
      dbserver_cluster_id: cdktf.stringToTerraform(this._dbserverClusterId),
      dbserver_id: cdktf.stringToTerraform(this._dbserverId),
      dbserver_logical_cluster_id: cdktf.stringToTerraform(this._dbserverLogicalClusterId),
      delete: cdktf.booleanToTerraform(this._delete),
      delete_logical_cluster: cdktf.booleanToTerraform(this._deleteLogicalCluster),
      delete_time_machine: cdktf.booleanToTerraform(this._deleteTimeMachine),
      description: cdktf.stringToTerraform(this._description),
      forced: cdktf.booleanToTerraform(this._forced),
      id: cdktf.stringToTerraform(this._id),
      latest_snapshot: cdktf.booleanToTerraform(this._latestSnapshot),
      name: cdktf.stringToTerraform(this._name),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      nx_cluster_id: cdktf.stringToTerraform(this._nxClusterId),
      remove: cdktf.booleanToTerraform(this._remove),
      remove_logical_cluster: cdktf.booleanToTerraform(this._removeLogicalCluster),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      soft_remove: cdktf.booleanToTerraform(this._softRemove),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
      time_machine_name: cdktf.stringToTerraform(this._timeMachineName),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      user_pitr_timestamp: cdktf.stringToTerraform(this._userPitrTimestamp),
      vm_password: cdktf.stringToTerraform(this._vmPassword),
      actionarguments: cdktf.listMapper(ndbCloneActionargumentsToTerraform, true)(this._actionarguments.internalValue),
      lcm_config: cdktf.listMapper(ndbCloneLcmConfigToTerraform, true)(this._lcmConfig.internalValue),
      nodes: cdktf.listMapper(ndbCloneNodesToTerraform, true)(this._nodes.internalValue),
      postgresql_info: cdktf.listMapper(ndbClonePostgresqlInfoToTerraform, true)(this._postgresqlInfo.internalValue),
      tags: cdktf.listMapper(ndbCloneTagsToTerraform, true)(this._tags.internalValue),
      timeouts: ndbCloneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clustered: {
        value: cdktf.booleanToHclTerraform(this._clustered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_profile_id: {
        value: cdktf.stringToHclTerraform(this._computeProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_dbserver: {
        value: cdktf.booleanToHclTerraform(this._createDbserver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_parameter_profile_id: {
        value: cdktf.stringToHclTerraform(this._databaseParameterProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbserver_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbserverClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbserver_id: {
        value: cdktf.stringToHclTerraform(this._dbserverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbserver_logical_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbserverLogicalClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete: {
        value: cdktf.booleanToHclTerraform(this._delete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_logical_cluster: {
        value: cdktf.booleanToHclTerraform(this._deleteLogicalCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_time_machine: {
        value: cdktf.booleanToHclTerraform(this._deleteTimeMachine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forced: {
        value: cdktf.booleanToHclTerraform(this._forced),
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
      latest_snapshot: {
        value: cdktf.booleanToHclTerraform(this._latestSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_profile_id: {
        value: cdktf.stringToHclTerraform(this._networkProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nx_cluster_id: {
        value: cdktf.stringToHclTerraform(this._nxClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove: {
        value: cdktf.booleanToHclTerraform(this._remove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_logical_cluster: {
        value: cdktf.booleanToHclTerraform(this._removeLogicalCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_remove: {
        value: cdktf.booleanToHclTerraform(this._softRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_name: {
        value: cdktf.stringToHclTerraform(this._timeMachineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pitr_timestamp: {
        value: cdktf.stringToHclTerraform(this._userPitrTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_password: {
        value: cdktf.stringToHclTerraform(this._vmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actionarguments: {
        value: cdktf.listMapperHcl(ndbCloneActionargumentsToHclTerraform, true)(this._actionarguments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbCloneActionargumentsList",
      },
      lcm_config: {
        value: cdktf.listMapperHcl(ndbCloneLcmConfigToHclTerraform, true)(this._lcmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbCloneLcmConfigList",
      },
      nodes: {
        value: cdktf.listMapperHcl(ndbCloneNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbCloneNodesList",
      },
      postgresql_info: {
        value: cdktf.listMapperHcl(ndbClonePostgresqlInfoToHclTerraform, true)(this._postgresqlInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbClonePostgresqlInfoList",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbCloneTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbCloneTagsList",
      },
      timeouts: {
        value: ndbCloneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbCloneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
