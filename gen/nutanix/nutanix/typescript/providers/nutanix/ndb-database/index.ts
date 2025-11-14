// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#autotunestagingdrive NdbDatabase#autotunestagingdrive}
  */
  readonly autotunestagingdrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#clustered NdbDatabase#clustered}
  */
  readonly clustered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#computeprofileid NdbDatabase#computeprofileid}
  */
  readonly computeprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#createdbserver NdbDatabase#createdbserver}
  */
  readonly createdbserver?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#database_instance_id NdbDatabase#database_instance_id}
  */
  readonly databaseInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#databasetype NdbDatabase#databasetype}
  */
  readonly databasetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dbparameterprofileid NdbDatabase#dbparameterprofileid}
  */
  readonly dbparameterprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dbserverid NdbDatabase#dbserverid}
  */
  readonly dbserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#delete NdbDatabase#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#delete_logical_cluster NdbDatabase#delete_logical_cluster}
  */
  readonly deleteLogicalCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#delete_time_machine NdbDatabase#delete_time_machine}
  */
  readonly deleteTimeMachine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#description NdbDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#forced NdbDatabase#forced}
  */
  readonly forced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#id NdbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#name NdbDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#networkprofileid NdbDatabase#networkprofileid}
  */
  readonly networkprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#newdbservertimezone NdbDatabase#newdbservertimezone}
  */
  readonly newdbservertimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nodecount NdbDatabase#nodecount}
  */
  readonly nodecount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nxclusterid NdbDatabase#nxclusterid}
  */
  readonly nxclusterid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#remove NdbDatabase#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#soft_remove NdbDatabase#soft_remove}
  */
  readonly softRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#softwareprofileid NdbDatabase#softwareprofileid}
  */
  readonly softwareprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#softwareprofileversionid NdbDatabase#softwareprofileversionid}
  */
  readonly softwareprofileversionid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#sshpublickey NdbDatabase#sshpublickey}
  */
  readonly sshpublickey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#vm_password NdbDatabase#vm_password}
  */
  readonly vmPassword?: string;
  /**
  * actionarguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#actionarguments NdbDatabase#actionarguments}
  */
  readonly actionarguments?: NdbDatabaseActionarguments[] | cdktf.IResolvable;
  /**
  * cluster_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#cluster_info NdbDatabase#cluster_info}
  */
  readonly clusterInfo?: NdbDatabaseClusterInfo[] | cdktf.IResolvable;
  /**
  * maintenance_tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#maintenance_tasks NdbDatabase#maintenance_tasks}
  */
  readonly maintenanceTasks?: NdbDatabaseMaintenanceTasks;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nodes NdbDatabase#nodes}
  */
  readonly nodes?: NdbDatabaseNodes[] | cdktf.IResolvable;
  /**
  * postgresql_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#postgresql_info NdbDatabase#postgresql_info}
  */
  readonly postgresqlInfo?: NdbDatabasePostgresqlInfo;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tags NdbDatabase#tags}
  */
  readonly tags?: NdbDatabaseTags[] | cdktf.IResolvable;
  /**
  * timemachineinfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#timemachineinfo NdbDatabase#timemachineinfo}
  */
  readonly timemachineinfo?: NdbDatabaseTimemachineinfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#timeouts NdbDatabase#timeouts}
  */
  readonly timeouts?: NdbDatabaseTimeouts;
}
export interface NdbDatabaseDatabaseNodesInfo {
}

export function ndbDatabaseDatabaseNodesInfoToTerraform(struct?: NdbDatabaseDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesInfoToHclTerraform(struct?: NdbDatabaseDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodesInfo | undefined) {
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

export class NdbDatabaseDatabaseNodesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesInfoOutputReference {
    return new NdbDatabaseDatabaseNodesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseDatabaseNodesProperties {
}

export function ndbDatabaseDatabaseNodesPropertiesToTerraform(struct?: NdbDatabaseDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesPropertiesToHclTerraform(struct?: NdbDatabaseDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodesProperties | undefined) {
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

export class NdbDatabaseDatabaseNodesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesPropertiesOutputReference {
    return new NdbDatabaseDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseDatabaseNodesProtectionDomainProperties {
}

export function ndbDatabaseDatabaseNodesProtectionDomainPropertiesToTerraform(struct?: NdbDatabaseDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesProtectionDomainPropertiesToHclTerraform(struct?: NdbDatabaseDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodesProtectionDomainProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodesProtectionDomainProperties | undefined) {
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

export class NdbDatabaseDatabaseNodesProtectionDomainPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference {
    return new NdbDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseDatabaseNodesProtectionDomain {
}

export function ndbDatabaseDatabaseNodesProtectionDomainToTerraform(struct?: NdbDatabaseDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesProtectionDomainToHclTerraform(struct?: NdbDatabaseDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesProtectionDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodesProtectionDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodesProtectionDomain | undefined) {
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
  private _properties = new NdbDatabaseDatabaseNodesProtectionDomainPropertiesList(this, "properties", false);
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

export class NdbDatabaseDatabaseNodesProtectionDomainList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesProtectionDomainOutputReference {
    return new NdbDatabaseDatabaseNodesProtectionDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseDatabaseNodesTags {
}

export function ndbDatabaseDatabaseNodesTagsToTerraform(struct?: NdbDatabaseDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesTagsToHclTerraform(struct?: NdbDatabaseDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodesTags | undefined) {
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

export class NdbDatabaseDatabaseNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesTagsOutputReference {
    return new NdbDatabaseDatabaseNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseDatabaseNodes {
}

export function ndbDatabaseDatabaseNodesToTerraform(struct?: NdbDatabaseDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseDatabaseNodesToHclTerraform(struct?: NdbDatabaseDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseDatabaseNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseDatabaseNodes | undefined) {
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
  private _info = new NdbDatabaseDatabaseNodesInfoList(this, "info", false);
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
  private _properties = new NdbDatabaseDatabaseNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain - computed: true, optional: false, required: false
  private _protectionDomain = new NdbDatabaseDatabaseNodesProtectionDomainList(this, "protection_domain", false);
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
  private _tags = new NdbDatabaseDatabaseNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class NdbDatabaseDatabaseNodesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseDatabaseNodesOutputReference {
    return new NdbDatabaseDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsBpgDbParam {
}

export function ndbDatabaseInfoBpgConfigsBpgDbParamToTerraform(struct?: NdbDatabaseInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsBpgDbParamToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsBpgDbParam | undefined) {
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

export class NdbDatabaseInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsBpgDbParamOutputReference {
    return new NdbDatabaseInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsStorageArchiveStorage {
}

export function ndbDatabaseInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsStorageArchiveStorage | undefined) {
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

export class NdbDatabaseInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new NdbDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsStorageDataDisks {
}

export function ndbDatabaseInfoBpgConfigsStorageDataDisksToTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsStorageDataDisks | undefined) {
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

export class NdbDatabaseInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsStorageDataDisksOutputReference {
    return new NdbDatabaseInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsStorageLogDisks {
}

export function ndbDatabaseInfoBpgConfigsStorageLogDisksToTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsStorageLogDisks | undefined) {
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

export class NdbDatabaseInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsStorageLogDisksOutputReference {
    return new NdbDatabaseInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsStorage {
}

export function ndbDatabaseInfoBpgConfigsStorageToTerraform(struct?: NdbDatabaseInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsStorageToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new NdbDatabaseInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new NdbDatabaseInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new NdbDatabaseInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class NdbDatabaseInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsStorageOutputReference {
    return new NdbDatabaseInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigsVmProperties {
}

export function ndbDatabaseInfoBpgConfigsVmPropertiesToTerraform(struct?: NdbDatabaseInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsVmPropertiesToHclTerraform(struct?: NdbDatabaseInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigsVmProperties | undefined) {
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

export class NdbDatabaseInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsVmPropertiesOutputReference {
    return new NdbDatabaseInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfoBpgConfigs {
}

export function ndbDatabaseInfoBpgConfigsToTerraform(struct?: NdbDatabaseInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoBpgConfigsToHclTerraform(struct?: NdbDatabaseInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new NdbDatabaseInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new NdbDatabaseInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new NdbDatabaseInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class NdbDatabaseInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoBpgConfigsOutputReference {
    return new NdbDatabaseInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseInfo {
}

export function ndbDatabaseInfoToTerraform(struct?: NdbDatabaseInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseInfoToHclTerraform(struct?: NdbDatabaseInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new NdbDatabaseInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbDatabaseInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseInfoOutputReference {
    return new NdbDatabaseInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLcmConfigExpiryDetails {
}

export function ndbDatabaseLcmConfigExpiryDetailsToTerraform(struct?: NdbDatabaseLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLcmConfigExpiryDetailsToHclTerraform(struct?: NdbDatabaseLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLcmConfigExpiryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_database - computed: true, optional: false, required: false
  public get deleteDatabase() {
    return this.getBooleanAttribute('delete_database');
  }

  // delete_time_machine - computed: true, optional: false, required: false
  public get deleteTimeMachine() {
    return this.getBooleanAttribute('delete_time_machine');
  }

  // delete_vm - computed: true, optional: false, required: false
  public get deleteVm() {
    return this.getBooleanAttribute('delete_vm');
  }

  // effective_timestamp - computed: true, optional: false, required: false
  public get effectiveTimestamp() {
    return this.getStringAttribute('effective_timestamp');
  }

  // expire_in_days - computed: true, optional: false, required: false
  public get expireInDays() {
    return this.getNumberAttribute('expire_in_days');
  }

  // expiry_date_timezone - computed: true, optional: false, required: false
  public get expiryDateTimezone() {
    return this.getStringAttribute('expiry_date_timezone');
  }

  // expiry_timestamp - computed: true, optional: false, required: false
  public get expiryTimestamp() {
    return this.getStringAttribute('expiry_timestamp');
  }

  // remind_before_in_days - computed: true, optional: false, required: false
  public get remindBeforeInDays() {
    return this.getNumberAttribute('remind_before_in_days');
  }

  // user_created - computed: true, optional: false, required: false
  public get userCreated() {
    return this.getBooleanAttribute('user_created');
  }
}

export class NdbDatabaseLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLcmConfigExpiryDetailsOutputReference {
    return new NdbDatabaseLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLcmConfigPostDeleteCommand {
}

export function ndbDatabaseLcmConfigPostDeleteCommandToTerraform(struct?: NdbDatabaseLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLcmConfigPostDeleteCommandToHclTerraform(struct?: NdbDatabaseLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLcmConfigPostDeleteCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }
}

export class NdbDatabaseLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLcmConfigPostDeleteCommandOutputReference {
    return new NdbDatabaseLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLcmConfigPreDeleteCommand {
}

export function ndbDatabaseLcmConfigPreDeleteCommandToTerraform(struct?: NdbDatabaseLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLcmConfigPreDeleteCommandToHclTerraform(struct?: NdbDatabaseLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLcmConfigPreDeleteCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }
}

export class NdbDatabaseLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLcmConfigPreDeleteCommandOutputReference {
    return new NdbDatabaseLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLcmConfigRefreshDetails {
}

export function ndbDatabaseLcmConfigRefreshDetailsToTerraform(struct?: NdbDatabaseLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLcmConfigRefreshDetailsToHclTerraform(struct?: NdbDatabaseLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLcmConfigRefreshDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_refresh_date - computed: true, optional: false, required: false
  public get lastRefreshDate() {
    return this.getStringAttribute('last_refresh_date');
  }

  // next_refresh_date - computed: true, optional: false, required: false
  public get nextRefreshDate() {
    return this.getStringAttribute('next_refresh_date');
  }

  // refresh_date_timezone - computed: true, optional: false, required: false
  public get refreshDateTimezone() {
    return this.getStringAttribute('refresh_date_timezone');
  }

  // refresh_in_days - computed: true, optional: false, required: false
  public get refreshInDays() {
    return this.getNumberAttribute('refresh_in_days');
  }

  // refresh_in_hours - computed: true, optional: false, required: false
  public get refreshInHours() {
    return this.getNumberAttribute('refresh_in_hours');
  }

  // refresh_in_months - computed: true, optional: false, required: false
  public get refreshInMonths() {
    return this.getNumberAttribute('refresh_in_months');
  }

  // refresh_time - computed: true, optional: false, required: false
  public get refreshTime() {
    return this.getStringAttribute('refresh_time');
  }
}

export class NdbDatabaseLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLcmConfigRefreshDetailsOutputReference {
    return new NdbDatabaseLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLcmConfig {
}

export function ndbDatabaseLcmConfigToTerraform(struct?: NdbDatabaseLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLcmConfigToHclTerraform(struct?: NdbDatabaseLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new NdbDatabaseLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new NdbDatabaseLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new NdbDatabaseLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new NdbDatabaseLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class NdbDatabaseLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLcmConfigOutputReference {
    return new NdbDatabaseLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLinkedDatabasesInfo {
}

export function ndbDatabaseLinkedDatabasesInfoToTerraform(struct?: NdbDatabaseLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLinkedDatabasesInfoToHclTerraform(struct?: NdbDatabaseLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLinkedDatabasesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLinkedDatabasesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLinkedDatabasesInfo | undefined) {
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

export class NdbDatabaseLinkedDatabasesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLinkedDatabasesInfoOutputReference {
    return new NdbDatabaseLinkedDatabasesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseLinkedDatabases {
}

export function ndbDatabaseLinkedDatabasesToTerraform(struct?: NdbDatabaseLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseLinkedDatabasesToHclTerraform(struct?: NdbDatabaseLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseLinkedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseLinkedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseLinkedDatabases | undefined) {
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
  private _info = new NdbDatabaseLinkedDatabasesInfoList(this, "info", false);
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

export class NdbDatabaseLinkedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseLinkedDatabasesOutputReference {
    return new NdbDatabaseLinkedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseProperties {
}

export function ndbDatabasePropertiesToTerraform(struct?: NdbDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabasePropertiesToHclTerraform(struct?: NdbDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabasePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseProperties | undefined) {
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

export class NdbDatabasePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabasePropertiesOutputReference {
    return new NdbDatabasePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineProperties {
}

export function ndbDatabaseTimeMachinePropertiesToTerraform(struct?: NdbDatabaseTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachinePropertiesToHclTerraform(struct?: NdbDatabaseTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineProperties | undefined) {
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

export class NdbDatabaseTimeMachinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachinePropertiesOutputReference {
    return new NdbDatabaseTimeMachinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleContinuousSchedule {
}

export function ndbDatabaseTimeMachineScheduleContinuousScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleContinuousScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleContinuousScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleContinuousSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleContinuousSchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleContinuousScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleContinuousScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleContinuousScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleDailySchedule {
}

export function ndbDatabaseTimeMachineScheduleDailyScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleDailyScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleDailySchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleDailyScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleMonthlySchedule {
}

export function ndbDatabaseTimeMachineScheduleMonthlyScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleMonthlyScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleMonthlySchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleMonthlyScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleQuartelySchedule {
}

export function ndbDatabaseTimeMachineScheduleQuartelyScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleQuartelyScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleQuartelyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleQuartelySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleQuartelySchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleQuartelyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleQuartelyScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleQuartelyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleSnapshotTimeOfDay {
}

export function ndbDatabaseTimeMachineScheduleSnapshotTimeOfDayToTerraform(struct?: NdbDatabaseTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleSnapshotTimeOfDayToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleSnapshotTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleSnapshotTimeOfDay | undefined) {
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

export class NdbDatabaseTimeMachineScheduleSnapshotTimeOfDayList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference {
    return new NdbDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleWeeklySchedule {
}

export function ndbDatabaseTimeMachineScheduleWeeklyScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleWeeklyScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleWeeklySchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleWeeklyScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineScheduleYearlySchedule {
}

export function ndbDatabaseTimeMachineScheduleYearlyScheduleToTerraform(struct?: NdbDatabaseTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleYearlyScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineScheduleYearlySchedule | undefined) {
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

export class NdbDatabaseTimeMachineScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleYearlyScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineSchedule {
}

export function ndbDatabaseTimeMachineScheduleToTerraform(struct?: NdbDatabaseTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineScheduleToHclTerraform(struct?: NdbDatabaseTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_schedule - computed: true, optional: false, required: false
  private _continuousSchedule = new NdbDatabaseTimeMachineScheduleContinuousScheduleList(this, "continuous_schedule", false);
  public get continuousSchedule() {
    return this._continuousSchedule;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new NdbDatabaseTimeMachineScheduleDailyScheduleList(this, "daily_schedule", false);
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
  private _monthlySchedule = new NdbDatabaseTimeMachineScheduleMonthlyScheduleList(this, "monthly_schedule", false);
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
  private _quartelySchedule = new NdbDatabaseTimeMachineScheduleQuartelyScheduleList(this, "quartely_schedule", false);
  public get quartelySchedule() {
    return this._quartelySchedule;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // snapshot_time_of_day - computed: true, optional: false, required: false
  private _snapshotTimeOfDay = new NdbDatabaseTimeMachineScheduleSnapshotTimeOfDayList(this, "snapshot_time_of_day", false);
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
  private _weeklySchedule = new NdbDatabaseTimeMachineScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new NdbDatabaseTimeMachineScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class NdbDatabaseTimeMachineScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineScheduleOutputReference {
    return new NdbDatabaseTimeMachineScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineSla {
}

export function ndbDatabaseTimeMachineSlaToTerraform(struct?: NdbDatabaseTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineSlaToHclTerraform(struct?: NdbDatabaseTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineSla | undefined) {
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

export class NdbDatabaseTimeMachineSlaList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineSlaOutputReference {
    return new NdbDatabaseTimeMachineSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachineTags {
}

export function ndbDatabaseTimeMachineTagsToTerraform(struct?: NdbDatabaseTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineTagsToHclTerraform(struct?: NdbDatabaseTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachineTags | undefined) {
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

export class NdbDatabaseTimeMachineTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineTagsOutputReference {
    return new NdbDatabaseTimeMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimeMachine {
}

export function ndbDatabaseTimeMachineToTerraform(struct?: NdbDatabaseTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseTimeMachineToHclTerraform(struct?: NdbDatabaseTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseTimeMachineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimeMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimeMachine | undefined) {
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
  private _properties = new NdbDatabaseTimeMachinePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new NdbDatabaseTimeMachineScheduleList(this, "schedule", false);
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
  private _sla = new NdbDatabaseTimeMachineSlaList(this, "sla", false);
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
  private _tags = new NdbDatabaseTimeMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NdbDatabaseTimeMachineList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseTimeMachineOutputReference {
    return new NdbDatabaseTimeMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseActionarguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#name NdbDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#value NdbDatabase#value}
  */
  readonly value: string;
}

export function ndbDatabaseActionargumentsToTerraform(struct?: NdbDatabaseActionarguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbDatabaseActionargumentsToHclTerraform(struct?: NdbDatabaseActionarguments | cdktf.IResolvable): any {
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

export class NdbDatabaseActionargumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseActionarguments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseActionarguments | cdktf.IResolvable | undefined) {
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

export class NdbDatabaseActionargumentsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseActionarguments[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseActionargumentsOutputReference {
    return new NdbDatabaseActionargumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseClusterInfoClusterIpInfosIpInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_addresses NdbDatabase#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_type NdbDatabase#ip_type}
  */
  readonly ipType?: string;
}

export function ndbDatabaseClusterInfoClusterIpInfosIpInfosToTerraform(struct?: NdbDatabaseClusterInfoClusterIpInfosIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
  }
}


export function ndbDatabaseClusterInfoClusterIpInfosIpInfosToHclTerraform(struct?: NdbDatabaseClusterInfoClusterIpInfosIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseClusterInfoClusterIpInfosIpInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseClusterInfoClusterIpInfosIpInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseClusterInfoClusterIpInfosIpInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
      this._ipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
      this._ipType = value.ipType;
    }
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}

export class NdbDatabaseClusterInfoClusterIpInfosIpInfosList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseClusterInfoClusterIpInfosIpInfos[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseClusterInfoClusterIpInfosIpInfosOutputReference {
    return new NdbDatabaseClusterInfoClusterIpInfosIpInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseClusterInfoClusterIpInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nx_cluster_id NdbDatabase#nx_cluster_id}
  */
  readonly nxClusterId: string;
  /**
  * ip_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_infos NdbDatabase#ip_infos}
  */
  readonly ipInfos?: NdbDatabaseClusterInfoClusterIpInfosIpInfos[] | cdktf.IResolvable;
}

export function ndbDatabaseClusterInfoClusterIpInfosToTerraform(struct?: NdbDatabaseClusterInfoClusterIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nx_cluster_id: cdktf.stringToTerraform(struct!.nxClusterId),
    ip_infos: cdktf.listMapper(ndbDatabaseClusterInfoClusterIpInfosIpInfosToTerraform, true)(struct!.ipInfos),
  }
}


export function ndbDatabaseClusterInfoClusterIpInfosToHclTerraform(struct?: NdbDatabaseClusterInfoClusterIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nx_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.nxClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_infos: {
      value: cdktf.listMapperHcl(ndbDatabaseClusterInfoClusterIpInfosIpInfosToHclTerraform, true)(struct!.ipInfos),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseClusterInfoClusterIpInfosIpInfosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseClusterInfoClusterIpInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseClusterInfoClusterIpInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nxClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxClusterId = this._nxClusterId;
    }
    if (this._ipInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipInfos = this._ipInfos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseClusterInfoClusterIpInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nxClusterId = undefined;
      this._ipInfos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nxClusterId = value.nxClusterId;
      this._ipInfos.internalValue = value.ipInfos;
    }
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

  // ip_infos - computed: false, optional: true, required: false
  private _ipInfos = new NdbDatabaseClusterInfoClusterIpInfosIpInfosList(this, "ip_infos", false);
  public get ipInfos() {
    return this._ipInfos;
  }
  public putIpInfos(value: NdbDatabaseClusterInfoClusterIpInfosIpInfos[] | cdktf.IResolvable) {
    this._ipInfos.internalValue = value;
  }
  public resetIpInfos() {
    this._ipInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInfosInput() {
    return this._ipInfos.internalValue;
  }
}

export class NdbDatabaseClusterInfoClusterIpInfosList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseClusterInfoClusterIpInfos[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseClusterInfoClusterIpInfosOutputReference {
    return new NdbDatabaseClusterInfoClusterIpInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseClusterInfo {
  /**
  * cluster_ip_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#cluster_ip_infos NdbDatabase#cluster_ip_infos}
  */
  readonly clusterIpInfos: NdbDatabaseClusterInfoClusterIpInfos[] | cdktf.IResolvable;
}

export function ndbDatabaseClusterInfoToTerraform(struct?: NdbDatabaseClusterInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ip_infos: cdktf.listMapper(ndbDatabaseClusterInfoClusterIpInfosToTerraform, true)(struct!.clusterIpInfos),
  }
}


export function ndbDatabaseClusterInfoToHclTerraform(struct?: NdbDatabaseClusterInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ip_infos: {
      value: cdktf.listMapperHcl(ndbDatabaseClusterInfoClusterIpInfosToHclTerraform, true)(struct!.clusterIpInfos),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseClusterInfoClusterIpInfosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseClusterInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseClusterInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpInfos = this._clusterIpInfos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseClusterInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIpInfos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIpInfos.internalValue = value.clusterIpInfos;
    }
  }

  // cluster_ip_infos - computed: false, optional: false, required: true
  private _clusterIpInfos = new NdbDatabaseClusterInfoClusterIpInfosList(this, "cluster_ip_infos", false);
  public get clusterIpInfos() {
    return this._clusterIpInfos;
  }
  public putClusterIpInfos(value: NdbDatabaseClusterInfoClusterIpInfos[] | cdktf.IResolvable) {
    this._clusterIpInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInfosInput() {
    return this._clusterIpInfos.internalValue;
  }
}

export class NdbDatabaseClusterInfoList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseClusterInfo[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseClusterInfoOutputReference {
    return new NdbDatabaseClusterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseMaintenanceTasksTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#post_command NdbDatabase#post_command}
  */
  readonly postCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#pre_command NdbDatabase#pre_command}
  */
  readonly preCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#task_type NdbDatabase#task_type}
  */
  readonly taskType?: string;
}

export function ndbDatabaseMaintenanceTasksTasksToTerraform(struct?: NdbDatabaseMaintenanceTasksTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_command: cdktf.stringToTerraform(struct!.postCommand),
    pre_command: cdktf.stringToTerraform(struct!.preCommand),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function ndbDatabaseMaintenanceTasksTasksToHclTerraform(struct?: NdbDatabaseMaintenanceTasksTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_command: {
      value: cdktf.stringToHclTerraform(struct!.postCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_command: {
      value: cdktf.stringToHclTerraform(struct!.preCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseMaintenanceTasksTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseMaintenanceTasksTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCommand = this._postCommand;
    }
    if (this._preCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCommand = this._preCommand;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseMaintenanceTasksTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postCommand = undefined;
      this._preCommand = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postCommand = value.postCommand;
      this._preCommand = value.preCommand;
      this._taskType = value.taskType;
    }
  }

  // post_command - computed: false, optional: true, required: false
  private _postCommand?: string; 
  public get postCommand() {
    return this.getStringAttribute('post_command');
  }
  public set postCommand(value: string) {
    this._postCommand = value;
  }
  public resetPostCommand() {
    this._postCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCommandInput() {
    return this._postCommand;
  }

  // pre_command - computed: false, optional: true, required: false
  private _preCommand?: string; 
  public get preCommand() {
    return this.getStringAttribute('pre_command');
  }
  public set preCommand(value: string) {
    this._preCommand = value;
  }
  public resetPreCommand() {
    this._preCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCommandInput() {
    return this._preCommand;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class NdbDatabaseMaintenanceTasksTasksList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseMaintenanceTasksTasks[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseMaintenanceTasksTasksOutputReference {
    return new NdbDatabaseMaintenanceTasksTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseMaintenanceTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#maintenance_window_id NdbDatabase#maintenance_window_id}
  */
  readonly maintenanceWindowId?: string;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tasks NdbDatabase#tasks}
  */
  readonly tasks?: NdbDatabaseMaintenanceTasksTasks[] | cdktf.IResolvable;
}

export function ndbDatabaseMaintenanceTasksToTerraform(struct?: NdbDatabaseMaintenanceTasksOutputReference | NdbDatabaseMaintenanceTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window_id: cdktf.stringToTerraform(struct!.maintenanceWindowId),
    tasks: cdktf.listMapper(ndbDatabaseMaintenanceTasksTasksToTerraform, true)(struct!.tasks),
  }
}


export function ndbDatabaseMaintenanceTasksToHclTerraform(struct?: NdbDatabaseMaintenanceTasksOutputReference | NdbDatabaseMaintenanceTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window_id: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks: {
      value: cdktf.listMapperHcl(ndbDatabaseMaintenanceTasksTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseMaintenanceTasksTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseMaintenanceTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseMaintenanceTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowId = this._maintenanceWindowId;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseMaintenanceTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindowId = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindowId = value.maintenanceWindowId;
      this._tasks.internalValue = value.tasks;
    }
  }

  // maintenance_window_id - computed: false, optional: true, required: false
  private _maintenanceWindowId?: string; 
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }
  public set maintenanceWindowId(value: string) {
    this._maintenanceWindowId = value;
  }
  public resetMaintenanceWindowId() {
    this._maintenanceWindowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowIdInput() {
    return this._maintenanceWindowId;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new NdbDatabaseMaintenanceTasksTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: NdbDatabaseMaintenanceTasksTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface NdbDatabaseNodesIpInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_addresses NdbDatabase#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_type NdbDatabase#ip_type}
  */
  readonly ipType?: string;
}

export function ndbDatabaseNodesIpInfosToTerraform(struct?: NdbDatabaseNodesIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
  }
}


export function ndbDatabaseNodesIpInfosToHclTerraform(struct?: NdbDatabaseNodesIpInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseNodesIpInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseNodesIpInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseNodesIpInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
      this._ipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
      this._ipType = value.ipType;
    }
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}

export class NdbDatabaseNodesIpInfosList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseNodesIpInfos[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseNodesIpInfosOutputReference {
    return new NdbDatabaseNodesIpInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseNodesProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#name NdbDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#value NdbDatabase#value}
  */
  readonly value: string;
}

export function ndbDatabaseNodesPropertiesToTerraform(struct?: NdbDatabaseNodesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbDatabaseNodesPropertiesToHclTerraform(struct?: NdbDatabaseNodesProperties | cdktf.IResolvable): any {
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

export class NdbDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseNodesProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseNodesProperties | cdktf.IResolvable | undefined) {
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

export class NdbDatabaseNodesPropertiesList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseNodesProperties[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseNodesPropertiesOutputReference {
    return new NdbDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#computeprofileid NdbDatabase#computeprofileid}
  */
  readonly computeprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dbserverid NdbDatabase#dbserverid}
  */
  readonly dbserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#networkprofileid NdbDatabase#networkprofileid}
  */
  readonly networkprofileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nx_cluster_id NdbDatabase#nx_cluster_id}
  */
  readonly nxClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#vmname NdbDatabase#vmname}
  */
  readonly vmname: string;
  /**
  * ip_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ip_infos NdbDatabase#ip_infos}
  */
  readonly ipInfos?: NdbDatabaseNodesIpInfos[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#properties NdbDatabase#properties}
  */
  readonly properties?: NdbDatabaseNodesProperties[] | cdktf.IResolvable;
}

export function ndbDatabaseNodesToTerraform(struct?: NdbDatabaseNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    computeprofileid: cdktf.stringToTerraform(struct!.computeprofileid),
    dbserverid: cdktf.stringToTerraform(struct!.dbserverid),
    networkprofileid: cdktf.stringToTerraform(struct!.networkprofileid),
    nx_cluster_id: cdktf.stringToTerraform(struct!.nxClusterId),
    vmname: cdktf.stringToTerraform(struct!.vmname),
    ip_infos: cdktf.listMapper(ndbDatabaseNodesIpInfosToTerraform, true)(struct!.ipInfos),
    properties: cdktf.listMapper(ndbDatabaseNodesPropertiesToTerraform, true)(struct!.properties),
  }
}


export function ndbDatabaseNodesToHclTerraform(struct?: NdbDatabaseNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    computeprofileid: {
      value: cdktf.stringToHclTerraform(struct!.computeprofileid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbserverid: {
      value: cdktf.stringToHclTerraform(struct!.dbserverid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkprofileid: {
      value: cdktf.stringToHclTerraform(struct!.networkprofileid),
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
    vmname: {
      value: cdktf.stringToHclTerraform(struct!.vmname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_infos: {
      value: cdktf.listMapperHcl(ndbDatabaseNodesIpInfosToHclTerraform, true)(struct!.ipInfos),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseNodesIpInfosList",
    },
    properties: {
      value: cdktf.listMapperHcl(ndbDatabaseNodesPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "set",
      storageClassType: "NdbDatabaseNodesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeprofileid !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeprofileid = this._computeprofileid;
    }
    if (this._dbserverid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbserverid = this._dbserverid;
    }
    if (this._networkprofileid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkprofileid = this._networkprofileid;
    }
    if (this._nxClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxClusterId = this._nxClusterId;
    }
    if (this._vmname !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmname = this._vmname;
    }
    if (this._ipInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipInfos = this._ipInfos?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeprofileid = undefined;
      this._dbserverid = undefined;
      this._networkprofileid = undefined;
      this._nxClusterId = undefined;
      this._vmname = undefined;
      this._ipInfos.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeprofileid = value.computeprofileid;
      this._dbserverid = value.dbserverid;
      this._networkprofileid = value.networkprofileid;
      this._nxClusterId = value.nxClusterId;
      this._vmname = value.vmname;
      this._ipInfos.internalValue = value.ipInfos;
      this._properties.internalValue = value.properties;
    }
  }

  // computeprofileid - computed: false, optional: true, required: false
  private _computeprofileid?: string; 
  public get computeprofileid() {
    return this.getStringAttribute('computeprofileid');
  }
  public set computeprofileid(value: string) {
    this._computeprofileid = value;
  }
  public resetComputeprofileid() {
    this._computeprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeprofileidInput() {
    return this._computeprofileid;
  }

  // dbserverid - computed: false, optional: true, required: false
  private _dbserverid?: string; 
  public get dbserverid() {
    return this.getStringAttribute('dbserverid');
  }
  public set dbserverid(value: string) {
    this._dbserverid = value;
  }
  public resetDbserverid() {
    this._dbserverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserveridInput() {
    return this._dbserverid;
  }

  // networkprofileid - computed: false, optional: true, required: false
  private _networkprofileid?: string; 
  public get networkprofileid() {
    return this.getStringAttribute('networkprofileid');
  }
  public set networkprofileid(value: string) {
    this._networkprofileid = value;
  }
  public resetNetworkprofileid() {
    this._networkprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkprofileidInput() {
    return this._networkprofileid;
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

  // vmname - computed: false, optional: false, required: true
  private _vmname?: string; 
  public get vmname() {
    return this.getStringAttribute('vmname');
  }
  public set vmname(value: string) {
    this._vmname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnameInput() {
    return this._vmname;
  }

  // ip_infos - computed: false, optional: true, required: false
  private _ipInfos = new NdbDatabaseNodesIpInfosList(this, "ip_infos", false);
  public get ipInfos() {
    return this._ipInfos;
  }
  public putIpInfos(value: NdbDatabaseNodesIpInfos[] | cdktf.IResolvable) {
    this._ipInfos.internalValue = value;
  }
  public resetIpInfos() {
    this._ipInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInfosInput() {
    return this._ipInfos.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new NdbDatabaseNodesPropertiesList(this, "properties", true);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: NdbDatabaseNodesProperties[] | cdktf.IResolvable) {
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

export class NdbDatabaseNodesList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseNodes[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseNodesOutputReference {
    return new NdbDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabasePostgresqlInfoHaInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#archive_wal_expire_days NdbDatabase#archive_wal_expire_days}
  */
  readonly archiveWalExpireDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#backup_policy NdbDatabase#backup_policy}
  */
  readonly backupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#cluster_description NdbDatabase#cluster_description}
  */
  readonly clusterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#cluster_name NdbDatabase#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#deploy_haproxy NdbDatabase#deploy_haproxy}
  */
  readonly deployHaproxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enable_peer_auth NdbDatabase#enable_peer_auth}
  */
  readonly enablePeerAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enable_synchronous_mode NdbDatabase#enable_synchronous_mode}
  */
  readonly enableSynchronousMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#failover_mode NdbDatabase#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#node_type NdbDatabase#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#patroni_cluster_name NdbDatabase#patroni_cluster_name}
  */
  readonly patroniClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#provision_virtual_ip NdbDatabase#provision_virtual_ip}
  */
  readonly provisionVirtualIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#proxy_read_port NdbDatabase#proxy_read_port}
  */
  readonly proxyReadPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#proxy_write_port NdbDatabase#proxy_write_port}
  */
  readonly proxyWritePort: string;
}

export function ndbDatabasePostgresqlInfoHaInstanceToTerraform(struct?: NdbDatabasePostgresqlInfoHaInstanceOutputReference | NdbDatabasePostgresqlInfoHaInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_wal_expire_days: cdktf.numberToTerraform(struct!.archiveWalExpireDays),
    backup_policy: cdktf.stringToTerraform(struct!.backupPolicy),
    cluster_description: cdktf.stringToTerraform(struct!.clusterDescription),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    deploy_haproxy: cdktf.booleanToTerraform(struct!.deployHaproxy),
    enable_peer_auth: cdktf.booleanToTerraform(struct!.enablePeerAuth),
    enable_synchronous_mode: cdktf.booleanToTerraform(struct!.enableSynchronousMode),
    failover_mode: cdktf.stringToTerraform(struct!.failoverMode),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    patroni_cluster_name: cdktf.stringToTerraform(struct!.patroniClusterName),
    provision_virtual_ip: cdktf.booleanToTerraform(struct!.provisionVirtualIp),
    proxy_read_port: cdktf.stringToTerraform(struct!.proxyReadPort),
    proxy_write_port: cdktf.stringToTerraform(struct!.proxyWritePort),
  }
}


export function ndbDatabasePostgresqlInfoHaInstanceToHclTerraform(struct?: NdbDatabasePostgresqlInfoHaInstanceOutputReference | NdbDatabasePostgresqlInfoHaInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_wal_expire_days: {
      value: cdktf.numberToHclTerraform(struct!.archiveWalExpireDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_policy: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_description: {
      value: cdktf.stringToHclTerraform(struct!.clusterDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_haproxy: {
      value: cdktf.booleanToHclTerraform(struct!.deployHaproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_peer_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enablePeerAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_synchronous_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableSynchronousMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover_mode: {
      value: cdktf.stringToHclTerraform(struct!.failoverMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patroni_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.patroniClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provision_virtual_ip: {
      value: cdktf.booleanToHclTerraform(struct!.provisionVirtualIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_read_port: {
      value: cdktf.stringToHclTerraform(struct!.proxyReadPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_write_port: {
      value: cdktf.stringToHclTerraform(struct!.proxyWritePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabasePostgresqlInfoHaInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabasePostgresqlInfoHaInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveWalExpireDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveWalExpireDays = this._archiveWalExpireDays;
    }
    if (this._backupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy;
    }
    if (this._clusterDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDescription = this._clusterDescription;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._deployHaproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployHaproxy = this._deployHaproxy;
    }
    if (this._enablePeerAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeerAuth = this._enablePeerAuth;
    }
    if (this._enableSynchronousMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSynchronousMode = this._enableSynchronousMode;
    }
    if (this._failoverMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverMode = this._failoverMode;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._patroniClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroniClusterName = this._patroniClusterName;
    }
    if (this._provisionVirtualIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionVirtualIp = this._provisionVirtualIp;
    }
    if (this._proxyReadPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyReadPort = this._proxyReadPort;
    }
    if (this._proxyWritePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyWritePort = this._proxyWritePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabasePostgresqlInfoHaInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveWalExpireDays = undefined;
      this._backupPolicy = undefined;
      this._clusterDescription = undefined;
      this._clusterName = undefined;
      this._deployHaproxy = undefined;
      this._enablePeerAuth = undefined;
      this._enableSynchronousMode = undefined;
      this._failoverMode = undefined;
      this._nodeType = undefined;
      this._patroniClusterName = undefined;
      this._provisionVirtualIp = undefined;
      this._proxyReadPort = undefined;
      this._proxyWritePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveWalExpireDays = value.archiveWalExpireDays;
      this._backupPolicy = value.backupPolicy;
      this._clusterDescription = value.clusterDescription;
      this._clusterName = value.clusterName;
      this._deployHaproxy = value.deployHaproxy;
      this._enablePeerAuth = value.enablePeerAuth;
      this._enableSynchronousMode = value.enableSynchronousMode;
      this._failoverMode = value.failoverMode;
      this._nodeType = value.nodeType;
      this._patroniClusterName = value.patroniClusterName;
      this._provisionVirtualIp = value.provisionVirtualIp;
      this._proxyReadPort = value.proxyReadPort;
      this._proxyWritePort = value.proxyWritePort;
    }
  }

  // archive_wal_expire_days - computed: false, optional: true, required: false
  private _archiveWalExpireDays?: number; 
  public get archiveWalExpireDays() {
    return this.getNumberAttribute('archive_wal_expire_days');
  }
  public set archiveWalExpireDays(value: number) {
    this._archiveWalExpireDays = value;
  }
  public resetArchiveWalExpireDays() {
    this._archiveWalExpireDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveWalExpireDaysInput() {
    return this._archiveWalExpireDays;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy?: string; 
  public get backupPolicy() {
    return this.getStringAttribute('backup_policy');
  }
  public set backupPolicy(value: string) {
    this._backupPolicy = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy;
  }

  // cluster_description - computed: false, optional: true, required: false
  private _clusterDescription?: string; 
  public get clusterDescription() {
    return this.getStringAttribute('cluster_description');
  }
  public set clusterDescription(value: string) {
    this._clusterDescription = value;
  }
  public resetClusterDescription() {
    this._clusterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescriptionInput() {
    return this._clusterDescription;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // deploy_haproxy - computed: false, optional: true, required: false
  private _deployHaproxy?: boolean | cdktf.IResolvable; 
  public get deployHaproxy() {
    return this.getBooleanAttribute('deploy_haproxy');
  }
  public set deployHaproxy(value: boolean | cdktf.IResolvable) {
    this._deployHaproxy = value;
  }
  public resetDeployHaproxy() {
    this._deployHaproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployHaproxyInput() {
    return this._deployHaproxy;
  }

  // enable_peer_auth - computed: false, optional: true, required: false
  private _enablePeerAuth?: boolean | cdktf.IResolvable; 
  public get enablePeerAuth() {
    return this.getBooleanAttribute('enable_peer_auth');
  }
  public set enablePeerAuth(value: boolean | cdktf.IResolvable) {
    this._enablePeerAuth = value;
  }
  public resetEnablePeerAuth() {
    this._enablePeerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeerAuthInput() {
    return this._enablePeerAuth;
  }

  // enable_synchronous_mode - computed: false, optional: true, required: false
  private _enableSynchronousMode?: boolean | cdktf.IResolvable; 
  public get enableSynchronousMode() {
    return this.getBooleanAttribute('enable_synchronous_mode');
  }
  public set enableSynchronousMode(value: boolean | cdktf.IResolvable) {
    this._enableSynchronousMode = value;
  }
  public resetEnableSynchronousMode() {
    this._enableSynchronousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSynchronousModeInput() {
    return this._enableSynchronousMode;
  }

  // failover_mode - computed: false, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // patroni_cluster_name - computed: false, optional: false, required: true
  private _patroniClusterName?: string; 
  public get patroniClusterName() {
    return this.getStringAttribute('patroni_cluster_name');
  }
  public set patroniClusterName(value: string) {
    this._patroniClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniClusterNameInput() {
    return this._patroniClusterName;
  }

  // provision_virtual_ip - computed: false, optional: true, required: false
  private _provisionVirtualIp?: boolean | cdktf.IResolvable; 
  public get provisionVirtualIp() {
    return this.getBooleanAttribute('provision_virtual_ip');
  }
  public set provisionVirtualIp(value: boolean | cdktf.IResolvable) {
    this._provisionVirtualIp = value;
  }
  public resetProvisionVirtualIp() {
    this._provisionVirtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVirtualIpInput() {
    return this._provisionVirtualIp;
  }

  // proxy_read_port - computed: false, optional: false, required: true
  private _proxyReadPort?: string; 
  public get proxyReadPort() {
    return this.getStringAttribute('proxy_read_port');
  }
  public set proxyReadPort(value: string) {
    this._proxyReadPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReadPortInput() {
    return this._proxyReadPort;
  }

  // proxy_write_port - computed: false, optional: false, required: true
  private _proxyWritePort?: string; 
  public get proxyWritePort() {
    return this.getStringAttribute('proxy_write_port');
  }
  public set proxyWritePort(value: string) {
    this._proxyWritePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyWritePortInput() {
    return this._proxyWritePort;
  }
}
export interface NdbDatabasePostgresqlInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#allocate_pg_hugepage NdbDatabase#allocate_pg_hugepage}
  */
  readonly allocatePgHugepage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#auth_method NdbDatabase#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#auto_tune_staging_drive NdbDatabase#auto_tune_staging_drive}
  */
  readonly autoTuneStagingDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#cluster_database NdbDatabase#cluster_database}
  */
  readonly clusterDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#database_names NdbDatabase#database_names}
  */
  readonly databaseNames: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#database_size NdbDatabase#database_size}
  */
  readonly databaseSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#db_password NdbDatabase#db_password}
  */
  readonly dbPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#listener_port NdbDatabase#listener_port}
  */
  readonly listenerPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#post_create_script NdbDatabase#post_create_script}
  */
  readonly postCreateScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#pre_create_script NdbDatabase#pre_create_script}
  */
  readonly preCreateScript?: string;
  /**
  * ha_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#ha_instance NdbDatabase#ha_instance}
  */
  readonly haInstance?: NdbDatabasePostgresqlInfoHaInstance;
}

export function ndbDatabasePostgresqlInfoToTerraform(struct?: NdbDatabasePostgresqlInfoOutputReference | NdbDatabasePostgresqlInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_pg_hugepage: cdktf.booleanToTerraform(struct!.allocatePgHugepage),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auto_tune_staging_drive: cdktf.booleanToTerraform(struct!.autoTuneStagingDrive),
    cluster_database: cdktf.booleanToTerraform(struct!.clusterDatabase),
    database_names: cdktf.stringToTerraform(struct!.databaseNames),
    database_size: cdktf.stringToTerraform(struct!.databaseSize),
    db_password: cdktf.stringToTerraform(struct!.dbPassword),
    listener_port: cdktf.stringToTerraform(struct!.listenerPort),
    post_create_script: cdktf.stringToTerraform(struct!.postCreateScript),
    pre_create_script: cdktf.stringToTerraform(struct!.preCreateScript),
    ha_instance: ndbDatabasePostgresqlInfoHaInstanceToTerraform(struct!.haInstance),
  }
}


export function ndbDatabasePostgresqlInfoToHclTerraform(struct?: NdbDatabasePostgresqlInfoOutputReference | NdbDatabasePostgresqlInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_pg_hugepage: {
      value: cdktf.booleanToHclTerraform(struct!.allocatePgHugepage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_tune_staging_drive: {
      value: cdktf.booleanToHclTerraform(struct!.autoTuneStagingDrive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_database: {
      value: cdktf.booleanToHclTerraform(struct!.clusterDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_names: {
      value: cdktf.stringToHclTerraform(struct!.databaseNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_size: {
      value: cdktf.stringToHclTerraform(struct!.databaseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_password: {
      value: cdktf.stringToHclTerraform(struct!.dbPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_port: {
      value: cdktf.stringToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_create_script: {
      value: cdktf.stringToHclTerraform(struct!.postCreateScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_create_script: {
      value: cdktf.stringToHclTerraform(struct!.preCreateScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_instance: {
      value: ndbDatabasePostgresqlInfoHaInstanceToHclTerraform(struct!.haInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabasePostgresqlInfoHaInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabasePostgresqlInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabasePostgresqlInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatePgHugepage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatePgHugepage = this._allocatePgHugepage;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._autoTuneStagingDrive !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTuneStagingDrive = this._autoTuneStagingDrive;
    }
    if (this._clusterDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDatabase = this._clusterDatabase;
    }
    if (this._databaseNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseNames = this._databaseNames;
    }
    if (this._databaseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSize = this._databaseSize;
    }
    if (this._dbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPassword = this._dbPassword;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._postCreateScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCreateScript = this._postCreateScript;
    }
    if (this._preCreateScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCreateScript = this._preCreateScript;
    }
    if (this._haInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haInstance = this._haInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabasePostgresqlInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatePgHugepage = undefined;
      this._authMethod = undefined;
      this._autoTuneStagingDrive = undefined;
      this._clusterDatabase = undefined;
      this._databaseNames = undefined;
      this._databaseSize = undefined;
      this._dbPassword = undefined;
      this._listenerPort = undefined;
      this._postCreateScript = undefined;
      this._preCreateScript = undefined;
      this._haInstance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatePgHugepage = value.allocatePgHugepage;
      this._authMethod = value.authMethod;
      this._autoTuneStagingDrive = value.autoTuneStagingDrive;
      this._clusterDatabase = value.clusterDatabase;
      this._databaseNames = value.databaseNames;
      this._databaseSize = value.databaseSize;
      this._dbPassword = value.dbPassword;
      this._listenerPort = value.listenerPort;
      this._postCreateScript = value.postCreateScript;
      this._preCreateScript = value.preCreateScript;
      this._haInstance.internalValue = value.haInstance;
    }
  }

  // allocate_pg_hugepage - computed: false, optional: true, required: false
  private _allocatePgHugepage?: boolean | cdktf.IResolvable; 
  public get allocatePgHugepage() {
    return this.getBooleanAttribute('allocate_pg_hugepage');
  }
  public set allocatePgHugepage(value: boolean | cdktf.IResolvable) {
    this._allocatePgHugepage = value;
  }
  public resetAllocatePgHugepage() {
    this._allocatePgHugepage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePgHugepageInput() {
    return this._allocatePgHugepage;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // auto_tune_staging_drive - computed: false, optional: true, required: false
  private _autoTuneStagingDrive?: boolean | cdktf.IResolvable; 
  public get autoTuneStagingDrive() {
    return this.getBooleanAttribute('auto_tune_staging_drive');
  }
  public set autoTuneStagingDrive(value: boolean | cdktf.IResolvable) {
    this._autoTuneStagingDrive = value;
  }
  public resetAutoTuneStagingDrive() {
    this._autoTuneStagingDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTuneStagingDriveInput() {
    return this._autoTuneStagingDrive;
  }

  // cluster_database - computed: false, optional: true, required: false
  private _clusterDatabase?: boolean | cdktf.IResolvable; 
  public get clusterDatabase() {
    return this.getBooleanAttribute('cluster_database');
  }
  public set clusterDatabase(value: boolean | cdktf.IResolvable) {
    this._clusterDatabase = value;
  }
  public resetClusterDatabase() {
    this._clusterDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDatabaseInput() {
    return this._clusterDatabase;
  }

  // database_names - computed: false, optional: false, required: true
  private _databaseNames?: string; 
  public get databaseNames() {
    return this.getStringAttribute('database_names');
  }
  public set databaseNames(value: string) {
    this._databaseNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNamesInput() {
    return this._databaseNames;
  }

  // database_size - computed: false, optional: false, required: true
  private _databaseSize?: string; 
  public get databaseSize() {
    return this.getStringAttribute('database_size');
  }
  public set databaseSize(value: string) {
    this._databaseSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSizeInput() {
    return this._databaseSize;
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

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: string; 
  public get listenerPort() {
    return this.getStringAttribute('listener_port');
  }
  public set listenerPort(value: string) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // post_create_script - computed: false, optional: true, required: false
  private _postCreateScript?: string; 
  public get postCreateScript() {
    return this.getStringAttribute('post_create_script');
  }
  public set postCreateScript(value: string) {
    this._postCreateScript = value;
  }
  public resetPostCreateScript() {
    this._postCreateScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCreateScriptInput() {
    return this._postCreateScript;
  }

  // pre_create_script - computed: false, optional: true, required: false
  private _preCreateScript?: string; 
  public get preCreateScript() {
    return this.getStringAttribute('pre_create_script');
  }
  public set preCreateScript(value: string) {
    this._preCreateScript = value;
  }
  public resetPreCreateScript() {
    this._preCreateScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCreateScriptInput() {
    return this._preCreateScript;
  }

  // ha_instance - computed: false, optional: true, required: false
  private _haInstance = new NdbDatabasePostgresqlInfoHaInstanceOutputReference(this, "ha_instance");
  public get haInstance() {
    return this._haInstance;
  }
  public putHaInstance(value: NdbDatabasePostgresqlInfoHaInstance) {
    this._haInstance.internalValue = value;
  }
  public resetHaInstance() {
    this._haInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInstanceInput() {
    return this._haInstance.internalValue;
  }
}
export interface NdbDatabaseTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tag_id NdbDatabase#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tag_name NdbDatabase#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#value NdbDatabase#value}
  */
  readonly value?: string;
}

export function ndbDatabaseTagsToTerraform(struct?: NdbDatabaseTags | cdktf.IResolvable): any {
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


export function ndbDatabaseTagsToHclTerraform(struct?: NdbDatabaseTags | cdktf.IResolvable): any {
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

export class NdbDatabaseTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseTags | cdktf.IResolvable | undefined) {
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

export class NdbDatabaseTagsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseTags[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseTagsOutputReference {
    return new NdbDatabaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimemachineinfoScheduleContinuousschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enabled NdbDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#logbackupinterval NdbDatabase#logbackupinterval}
  */
  readonly logbackupinterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#snapshotsperday NdbDatabase#snapshotsperday}
  */
  readonly snapshotsperday: number;
}

export function ndbDatabaseTimemachineinfoScheduleContinuousscheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleContinuousscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleContinuousschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    logbackupinterval: cdktf.numberToTerraform(struct!.logbackupinterval),
    snapshotsperday: cdktf.numberToTerraform(struct!.snapshotsperday),
  }
}


export function ndbDatabaseTimemachineinfoScheduleContinuousscheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleContinuousscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleContinuousschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logbackupinterval: {
      value: cdktf.numberToHclTerraform(struct!.logbackupinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshotsperday: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsperday),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleContinuousscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleContinuousschedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logbackupinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logbackupinterval = this._logbackupinterval;
    }
    if (this._snapshotsperday !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsperday = this._snapshotsperday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleContinuousschedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logbackupinterval = undefined;
      this._snapshotsperday = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logbackupinterval = value.logbackupinterval;
      this._snapshotsperday = value.snapshotsperday;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // logbackupinterval - computed: false, optional: false, required: true
  private _logbackupinterval?: number; 
  public get logbackupinterval() {
    return this.getNumberAttribute('logbackupinterval');
  }
  public set logbackupinterval(value: number) {
    this._logbackupinterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logbackupintervalInput() {
    return this._logbackupinterval;
  }

  // snapshotsperday - computed: false, optional: false, required: true
  private _snapshotsperday?: number; 
  public get snapshotsperday() {
    return this.getNumberAttribute('snapshotsperday');
  }
  public set snapshotsperday(value: number) {
    this._snapshotsperday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsperdayInput() {
    return this._snapshotsperday;
  }
}
export interface NdbDatabaseTimemachineinfoScheduleMonthlyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dayofmonth NdbDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enabled NdbDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ndbDatabaseTimemachineinfoScheduleMonthlyscheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleMonthlyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleMonthlyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofmonth: cdktf.numberToTerraform(struct!.dayofmonth),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ndbDatabaseTimemachineinfoScheduleMonthlyscheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleMonthlyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleMonthlyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofmonth: {
      value: cdktf.numberToHclTerraform(struct!.dayofmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleMonthlyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleMonthlyschedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofmonth = this._dayofmonth;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleMonthlyschedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayofmonth = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayofmonth = value.dayofmonth;
      this._enabled = value.enabled;
    }
  }

  // dayofmonth - computed: false, optional: false, required: true
  private _dayofmonth?: number; 
  public get dayofmonth() {
    return this.getNumberAttribute('dayofmonth');
  }
  public set dayofmonth(value: number) {
    this._dayofmonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofmonthInput() {
    return this._dayofmonth;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NdbDatabaseTimemachineinfoScheduleQuartelyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dayofmonth NdbDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enabled NdbDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#startmonth NdbDatabase#startmonth}
  */
  readonly startmonth: string;
}

export function ndbDatabaseTimemachineinfoScheduleQuartelyscheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleQuartelyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleQuartelyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofmonth: cdktf.numberToTerraform(struct!.dayofmonth),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    startmonth: cdktf.stringToTerraform(struct!.startmonth),
  }
}


export function ndbDatabaseTimemachineinfoScheduleQuartelyscheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleQuartelyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleQuartelyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofmonth: {
      value: cdktf.numberToHclTerraform(struct!.dayofmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    startmonth: {
      value: cdktf.stringToHclTerraform(struct!.startmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleQuartelyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleQuartelyschedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofmonth = this._dayofmonth;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._startmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.startmonth = this._startmonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleQuartelyschedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayofmonth = undefined;
      this._enabled = undefined;
      this._startmonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayofmonth = value.dayofmonth;
      this._enabled = value.enabled;
      this._startmonth = value.startmonth;
    }
  }

  // dayofmonth - computed: false, optional: false, required: true
  private _dayofmonth?: number; 
  public get dayofmonth() {
    return this.getNumberAttribute('dayofmonth');
  }
  public set dayofmonth(value: number) {
    this._dayofmonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofmonthInput() {
    return this._dayofmonth;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // startmonth - computed: false, optional: false, required: true
  private _startmonth?: string; 
  public get startmonth() {
    return this.getStringAttribute('startmonth');
  }
  public set startmonth(value: string) {
    this._startmonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startmonthInput() {
    return this._startmonth;
  }
}
export interface NdbDatabaseTimemachineinfoScheduleSnapshottimeofday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#hours NdbDatabase#hours}
  */
  readonly hours: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#minutes NdbDatabase#minutes}
  */
  readonly minutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#seconds NdbDatabase#seconds}
  */
  readonly seconds: number;
}

export function ndbDatabaseTimemachineinfoScheduleSnapshottimeofdayToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleSnapshottimeofdayOutputReference | NdbDatabaseTimemachineinfoScheduleSnapshottimeofday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function ndbDatabaseTimemachineinfoScheduleSnapshottimeofdayToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleSnapshottimeofdayOutputReference | NdbDatabaseTimemachineinfoScheduleSnapshottimeofday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleSnapshottimeofdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleSnapshottimeofday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleSnapshottimeofday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface NdbDatabaseTimemachineinfoScheduleWeeklyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dayofweek NdbDatabase#dayofweek}
  */
  readonly dayofweek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enabled NdbDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ndbDatabaseTimemachineinfoScheduleWeeklyscheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleWeeklyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleWeeklyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofweek: cdktf.stringToTerraform(struct!.dayofweek),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ndbDatabaseTimemachineinfoScheduleWeeklyscheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleWeeklyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleWeeklyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofweek: {
      value: cdktf.stringToHclTerraform(struct!.dayofweek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleWeeklyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleWeeklyschedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofweek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofweek = this._dayofweek;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleWeeklyschedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayofweek = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayofweek = value.dayofweek;
      this._enabled = value.enabled;
    }
  }

  // dayofweek - computed: false, optional: false, required: true
  private _dayofweek?: string; 
  public get dayofweek() {
    return this.getStringAttribute('dayofweek');
  }
  public set dayofweek(value: string) {
    this._dayofweek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofweekInput() {
    return this._dayofweek;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NdbDatabaseTimemachineinfoScheduleYearlyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#dayofmonth NdbDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#enabled NdbDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#month NdbDatabase#month}
  */
  readonly month: string;
}

export function ndbDatabaseTimemachineinfoScheduleYearlyscheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleYearlyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleYearlyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofmonth: cdktf.numberToTerraform(struct!.dayofmonth),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function ndbDatabaseTimemachineinfoScheduleYearlyscheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleYearlyscheduleOutputReference | NdbDatabaseTimemachineinfoScheduleYearlyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofmonth: {
      value: cdktf.numberToHclTerraform(struct!.dayofmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleYearlyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoScheduleYearlyschedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofmonth = this._dayofmonth;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoScheduleYearlyschedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayofmonth = undefined;
      this._enabled = undefined;
      this._month = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayofmonth = value.dayofmonth;
      this._enabled = value.enabled;
      this._month = value.month;
    }
  }

  // dayofmonth - computed: false, optional: false, required: true
  private _dayofmonth?: number; 
  public get dayofmonth() {
    return this.getNumberAttribute('dayofmonth');
  }
  public set dayofmonth(value: number) {
    this._dayofmonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofmonthInput() {
    return this._dayofmonth;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // month - computed: false, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}
export interface NdbDatabaseTimemachineinfoSchedule {
  /**
  * continuousschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#continuousschedule NdbDatabase#continuousschedule}
  */
  readonly continuousschedule?: NdbDatabaseTimemachineinfoScheduleContinuousschedule;
  /**
  * monthlyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#monthlyschedule NdbDatabase#monthlyschedule}
  */
  readonly monthlyschedule?: NdbDatabaseTimemachineinfoScheduleMonthlyschedule;
  /**
  * quartelyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#quartelyschedule NdbDatabase#quartelyschedule}
  */
  readonly quartelyschedule?: NdbDatabaseTimemachineinfoScheduleQuartelyschedule;
  /**
  * snapshottimeofday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#snapshottimeofday NdbDatabase#snapshottimeofday}
  */
  readonly snapshottimeofday?: NdbDatabaseTimemachineinfoScheduleSnapshottimeofday;
  /**
  * weeklyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#weeklyschedule NdbDatabase#weeklyschedule}
  */
  readonly weeklyschedule?: NdbDatabaseTimemachineinfoScheduleWeeklyschedule;
  /**
  * yearlyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#yearlyschedule NdbDatabase#yearlyschedule}
  */
  readonly yearlyschedule?: NdbDatabaseTimemachineinfoScheduleYearlyschedule;
}

export function ndbDatabaseTimemachineinfoScheduleToTerraform(struct?: NdbDatabaseTimemachineinfoScheduleOutputReference | NdbDatabaseTimemachineinfoSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuousschedule: ndbDatabaseTimemachineinfoScheduleContinuousscheduleToTerraform(struct!.continuousschedule),
    monthlyschedule: ndbDatabaseTimemachineinfoScheduleMonthlyscheduleToTerraform(struct!.monthlyschedule),
    quartelyschedule: ndbDatabaseTimemachineinfoScheduleQuartelyscheduleToTerraform(struct!.quartelyschedule),
    snapshottimeofday: ndbDatabaseTimemachineinfoScheduleSnapshottimeofdayToTerraform(struct!.snapshottimeofday),
    weeklyschedule: ndbDatabaseTimemachineinfoScheduleWeeklyscheduleToTerraform(struct!.weeklyschedule),
    yearlyschedule: ndbDatabaseTimemachineinfoScheduleYearlyscheduleToTerraform(struct!.yearlyschedule),
  }
}


export function ndbDatabaseTimemachineinfoScheduleToHclTerraform(struct?: NdbDatabaseTimemachineinfoScheduleOutputReference | NdbDatabaseTimemachineinfoSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuousschedule: {
      value: ndbDatabaseTimemachineinfoScheduleContinuousscheduleToHclTerraform(struct!.continuousschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleContinuousscheduleList",
    },
    monthlyschedule: {
      value: ndbDatabaseTimemachineinfoScheduleMonthlyscheduleToHclTerraform(struct!.monthlyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleMonthlyscheduleList",
    },
    quartelyschedule: {
      value: ndbDatabaseTimemachineinfoScheduleQuartelyscheduleToHclTerraform(struct!.quartelyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleQuartelyscheduleList",
    },
    snapshottimeofday: {
      value: ndbDatabaseTimemachineinfoScheduleSnapshottimeofdayToHclTerraform(struct!.snapshottimeofday),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleSnapshottimeofdayList",
    },
    weeklyschedule: {
      value: ndbDatabaseTimemachineinfoScheduleWeeklyscheduleToHclTerraform(struct!.weeklyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleWeeklyscheduleList",
    },
    yearlyschedule: {
      value: ndbDatabaseTimemachineinfoScheduleYearlyscheduleToHclTerraform(struct!.yearlyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleYearlyscheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfoSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousschedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousschedule = this._continuousschedule?.internalValue;
    }
    if (this._monthlyschedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyschedule = this._monthlyschedule?.internalValue;
    }
    if (this._quartelyschedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartelyschedule = this._quartelyschedule?.internalValue;
    }
    if (this._snapshottimeofday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshottimeofday = this._snapshottimeofday?.internalValue;
    }
    if (this._weeklyschedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyschedule = this._weeklyschedule?.internalValue;
    }
    if (this._yearlyschedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlyschedule = this._yearlyschedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuousschedule.internalValue = undefined;
      this._monthlyschedule.internalValue = undefined;
      this._quartelyschedule.internalValue = undefined;
      this._snapshottimeofday.internalValue = undefined;
      this._weeklyschedule.internalValue = undefined;
      this._yearlyschedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuousschedule.internalValue = value.continuousschedule;
      this._monthlyschedule.internalValue = value.monthlyschedule;
      this._quartelyschedule.internalValue = value.quartelyschedule;
      this._snapshottimeofday.internalValue = value.snapshottimeofday;
      this._weeklyschedule.internalValue = value.weeklyschedule;
      this._yearlyschedule.internalValue = value.yearlyschedule;
    }
  }

  // continuousschedule - computed: false, optional: true, required: false
  private _continuousschedule = new NdbDatabaseTimemachineinfoScheduleContinuousscheduleOutputReference(this, "continuousschedule");
  public get continuousschedule() {
    return this._continuousschedule;
  }
  public putContinuousschedule(value: NdbDatabaseTimemachineinfoScheduleContinuousschedule) {
    this._continuousschedule.internalValue = value;
  }
  public resetContinuousschedule() {
    this._continuousschedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousscheduleInput() {
    return this._continuousschedule.internalValue;
  }

  // monthlyschedule - computed: false, optional: true, required: false
  private _monthlyschedule = new NdbDatabaseTimemachineinfoScheduleMonthlyscheduleOutputReference(this, "monthlyschedule");
  public get monthlyschedule() {
    return this._monthlyschedule;
  }
  public putMonthlyschedule(value: NdbDatabaseTimemachineinfoScheduleMonthlyschedule) {
    this._monthlyschedule.internalValue = value;
  }
  public resetMonthlyschedule() {
    this._monthlyschedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyscheduleInput() {
    return this._monthlyschedule.internalValue;
  }

  // quartelyschedule - computed: false, optional: true, required: false
  private _quartelyschedule = new NdbDatabaseTimemachineinfoScheduleQuartelyscheduleOutputReference(this, "quartelyschedule");
  public get quartelyschedule() {
    return this._quartelyschedule;
  }
  public putQuartelyschedule(value: NdbDatabaseTimemachineinfoScheduleQuartelyschedule) {
    this._quartelyschedule.internalValue = value;
  }
  public resetQuartelyschedule() {
    this._quartelyschedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quartelyscheduleInput() {
    return this._quartelyschedule.internalValue;
  }

  // snapshottimeofday - computed: false, optional: true, required: false
  private _snapshottimeofday = new NdbDatabaseTimemachineinfoScheduleSnapshottimeofdayOutputReference(this, "snapshottimeofday");
  public get snapshottimeofday() {
    return this._snapshottimeofday;
  }
  public putSnapshottimeofday(value: NdbDatabaseTimemachineinfoScheduleSnapshottimeofday) {
    this._snapshottimeofday.internalValue = value;
  }
  public resetSnapshottimeofday() {
    this._snapshottimeofday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshottimeofdayInput() {
    return this._snapshottimeofday.internalValue;
  }

  // weeklyschedule - computed: false, optional: true, required: false
  private _weeklyschedule = new NdbDatabaseTimemachineinfoScheduleWeeklyscheduleOutputReference(this, "weeklyschedule");
  public get weeklyschedule() {
    return this._weeklyschedule;
  }
  public putWeeklyschedule(value: NdbDatabaseTimemachineinfoScheduleWeeklyschedule) {
    this._weeklyschedule.internalValue = value;
  }
  public resetWeeklyschedule() {
    this._weeklyschedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyscheduleInput() {
    return this._weeklyschedule.internalValue;
  }

  // yearlyschedule - computed: false, optional: true, required: false
  private _yearlyschedule = new NdbDatabaseTimemachineinfoScheduleYearlyscheduleOutputReference(this, "yearlyschedule");
  public get yearlyschedule() {
    return this._yearlyschedule;
  }
  public putYearlyschedule(value: NdbDatabaseTimemachineinfoScheduleYearlyschedule) {
    this._yearlyschedule.internalValue = value;
  }
  public resetYearlyschedule() {
    this._yearlyschedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyscheduleInput() {
    return this._yearlyschedule.internalValue;
  }
}
export interface NdbDatabaseTimemachineinfoSlaDetailsPrimarySla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#nx_cluster_ids NdbDatabase#nx_cluster_ids}
  */
  readonly nxClusterIds?: string[];
  /**
  * description of SLA ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#sla_id NdbDatabase#sla_id}
  */
  readonly slaId: string;
}

export function ndbDatabaseTimemachineinfoSlaDetailsPrimarySlaToTerraform(struct?: NdbDatabaseTimemachineinfoSlaDetailsPrimarySla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nx_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nxClusterIds),
    sla_id: cdktf.stringToTerraform(struct!.slaId),
  }
}


export function ndbDatabaseTimemachineinfoSlaDetailsPrimarySlaToHclTerraform(struct?: NdbDatabaseTimemachineinfoSlaDetailsPrimarySla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nx_cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nxClusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sla_id: {
      value: cdktf.stringToHclTerraform(struct!.slaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimemachineinfoSlaDetailsPrimarySla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nxClusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxClusterIds = this._nxClusterIds;
    }
    if (this._slaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaId = this._slaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoSlaDetailsPrimarySla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nxClusterIds = undefined;
      this._slaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nxClusterIds = value.nxClusterIds;
      this._slaId = value.slaId;
    }
  }

  // nx_cluster_ids - computed: false, optional: true, required: false
  private _nxClusterIds?: string[]; 
  public get nxClusterIds() {
    return this.getListAttribute('nx_cluster_ids');
  }
  public set nxClusterIds(value: string[]) {
    this._nxClusterIds = value;
  }
  public resetNxClusterIds() {
    this._nxClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxClusterIdsInput() {
    return this._nxClusterIds;
  }

  // sla_id - computed: false, optional: false, required: true
  private _slaId?: string; 
  public get slaId() {
    return this.getStringAttribute('sla_id');
  }
  public set slaId(value: string) {
    this._slaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdInput() {
    return this._slaId;
  }
}

export class NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseTimemachineinfoSlaDetailsPrimarySla[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaOutputReference {
    return new NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimemachineinfoSlaDetails {
  /**
  * primary_sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#primary_sla NdbDatabase#primary_sla}
  */
  readonly primarySla?: NdbDatabaseTimemachineinfoSlaDetailsPrimarySla[] | cdktf.IResolvable;
}

export function ndbDatabaseTimemachineinfoSlaDetailsToTerraform(struct?: NdbDatabaseTimemachineinfoSlaDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_sla: cdktf.listMapper(ndbDatabaseTimemachineinfoSlaDetailsPrimarySlaToTerraform, true)(struct!.primarySla),
  }
}


export function ndbDatabaseTimemachineinfoSlaDetailsToHclTerraform(struct?: NdbDatabaseTimemachineinfoSlaDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_sla: {
      value: cdktf.listMapperHcl(ndbDatabaseTimemachineinfoSlaDetailsPrimarySlaToHclTerraform, true)(struct!.primarySla),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoSlaDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimemachineinfoSlaDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primarySla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySla = this._primarySla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfoSlaDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primarySla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primarySla.internalValue = value.primarySla;
    }
  }

  // primary_sla - computed: false, optional: true, required: false
  private _primarySla = new NdbDatabaseTimemachineinfoSlaDetailsPrimarySlaList(this, "primary_sla", false);
  public get primarySla() {
    return this._primarySla;
  }
  public putPrimarySla(value: NdbDatabaseTimemachineinfoSlaDetailsPrimarySla[] | cdktf.IResolvable) {
    this._primarySla.internalValue = value;
  }
  public resetPrimarySla() {
    this._primarySla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySlaInput() {
    return this._primarySla.internalValue;
  }
}

export class NdbDatabaseTimemachineinfoSlaDetailsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseTimemachineinfoSlaDetails[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseTimemachineinfoSlaDetailsOutputReference {
    return new NdbDatabaseTimemachineinfoSlaDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimemachineinfoTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tag_id NdbDatabase#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tag_name NdbDatabase#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#value NdbDatabase#value}
  */
  readonly value?: string;
}

export function ndbDatabaseTimemachineinfoTagsToTerraform(struct?: NdbDatabaseTimemachineinfoTags | cdktf.IResolvable): any {
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


export function ndbDatabaseTimemachineinfoTagsToHclTerraform(struct?: NdbDatabaseTimemachineinfoTags | cdktf.IResolvable): any {
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

export class NdbDatabaseTimemachineinfoTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseTimemachineinfoTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseTimemachineinfoTags | cdktf.IResolvable | undefined) {
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

export class NdbDatabaseTimemachineinfoTagsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseTimemachineinfoTags[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseTimemachineinfoTagsOutputReference {
    return new NdbDatabaseTimemachineinfoTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseTimemachineinfo {
  /**
  * description of autoTuneLogDrive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#autotunelogdrive NdbDatabase#autotunelogdrive}
  */
  readonly autotunelogdrive?: boolean | cdktf.IResolvable;
  /**
  * description of time machine's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#description NdbDatabase#description}
  */
  readonly description?: string;
  /**
  * description of time machine's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#name NdbDatabase#name}
  */
  readonly name: string;
  /**
  * description of SLA ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#slaid NdbDatabase#slaid}
  */
  readonly slaid?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#schedule NdbDatabase#schedule}
  */
  readonly schedule: NdbDatabaseTimemachineinfoSchedule;
  /**
  * sla_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#sla_details NdbDatabase#sla_details}
  */
  readonly slaDetails?: NdbDatabaseTimemachineinfoSlaDetails[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#tags NdbDatabase#tags}
  */
  readonly tags?: NdbDatabaseTimemachineinfoTags[] | cdktf.IResolvable;
}

export function ndbDatabaseTimemachineinfoToTerraform(struct?: NdbDatabaseTimemachineinfoOutputReference | NdbDatabaseTimemachineinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotunelogdrive: cdktf.booleanToTerraform(struct!.autotunelogdrive),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    slaid: cdktf.stringToTerraform(struct!.slaid),
    schedule: ndbDatabaseTimemachineinfoScheduleToTerraform(struct!.schedule),
    sla_details: cdktf.listMapper(ndbDatabaseTimemachineinfoSlaDetailsToTerraform, true)(struct!.slaDetails),
    tags: cdktf.listMapper(ndbDatabaseTimemachineinfoTagsToTerraform, true)(struct!.tags),
  }
}


export function ndbDatabaseTimemachineinfoToHclTerraform(struct?: NdbDatabaseTimemachineinfoOutputReference | NdbDatabaseTimemachineinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotunelogdrive: {
      value: cdktf.booleanToHclTerraform(struct!.autotunelogdrive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slaid: {
      value: cdktf.stringToHclTerraform(struct!.slaid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: ndbDatabaseTimemachineinfoScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "set",
      storageClassType: "NdbDatabaseTimemachineinfoScheduleList",
    },
    sla_details: {
      value: cdktf.listMapperHcl(ndbDatabaseTimemachineinfoSlaDetailsToHclTerraform, true)(struct!.slaDetails),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoSlaDetailsList",
    },
    tags: {
      value: cdktf.listMapperHcl(ndbDatabaseTimemachineinfoTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDatabaseTimemachineinfoTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseTimemachineinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDatabaseTimemachineinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotunelogdrive !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotunelogdrive = this._autotunelogdrive;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaid = this._slaid;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._slaDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaDetails = this._slaDetails?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseTimemachineinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autotunelogdrive = undefined;
      this._description = undefined;
      this._name = undefined;
      this._slaid = undefined;
      this._schedule.internalValue = undefined;
      this._slaDetails.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autotunelogdrive = value.autotunelogdrive;
      this._description = value.description;
      this._name = value.name;
      this._slaid = value.slaid;
      this._schedule.internalValue = value.schedule;
      this._slaDetails.internalValue = value.slaDetails;
      this._tags.internalValue = value.tags;
    }
  }

  // autotunelogdrive - computed: false, optional: true, required: false
  private _autotunelogdrive?: boolean | cdktf.IResolvable; 
  public get autotunelogdrive() {
    return this.getBooleanAttribute('autotunelogdrive');
  }
  public set autotunelogdrive(value: boolean | cdktf.IResolvable) {
    this._autotunelogdrive = value;
  }
  public resetAutotunelogdrive() {
    this._autotunelogdrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotunelogdriveInput() {
    return this._autotunelogdrive;
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

  // slaid - computed: false, optional: true, required: false
  private _slaid?: string; 
  public get slaid() {
    return this.getStringAttribute('slaid');
  }
  public set slaid(value: string) {
    this._slaid = value;
  }
  public resetSlaid() {
    this._slaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaidInput() {
    return this._slaid;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new NdbDatabaseTimemachineinfoScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: NdbDatabaseTimemachineinfoSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sla_details - computed: false, optional: true, required: false
  private _slaDetails = new NdbDatabaseTimemachineinfoSlaDetailsList(this, "sla_details", false);
  public get slaDetails() {
    return this._slaDetails;
  }
  public putSlaDetails(value: NdbDatabaseTimemachineinfoSlaDetails[] | cdktf.IResolvable) {
    this._slaDetails.internalValue = value;
  }
  public resetSlaDetails() {
    this._slaDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaDetailsInput() {
    return this._slaDetails.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbDatabaseTimemachineinfoTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbDatabaseTimemachineinfoTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface NdbDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#create NdbDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#delete NdbDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#update NdbDatabase#update}
  */
  readonly update?: string;
}

export function ndbDatabaseTimeoutsToTerraform(struct?: NdbDatabaseTimeouts | cdktf.IResolvable): any {
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


export function ndbDatabaseTimeoutsToHclTerraform(struct?: NdbDatabaseTimeouts | cdktf.IResolvable): any {
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

export class NdbDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database nutanix_ndb_database}
*/
export class NdbDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbDatabase to import
  * @param importFromId The id of the existing NdbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_database nutanix_ndb_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: NdbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_database',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autotunestagingdrive = config.autotunestagingdrive;
    this._clustered = config.clustered;
    this._computeprofileid = config.computeprofileid;
    this._createdbserver = config.createdbserver;
    this._databaseInstanceId = config.databaseInstanceId;
    this._databasetype = config.databasetype;
    this._dbparameterprofileid = config.dbparameterprofileid;
    this._dbserverid = config.dbserverid;
    this._delete = config.delete;
    this._deleteLogicalCluster = config.deleteLogicalCluster;
    this._deleteTimeMachine = config.deleteTimeMachine;
    this._description = config.description;
    this._forced = config.forced;
    this._id = config.id;
    this._name = config.name;
    this._networkprofileid = config.networkprofileid;
    this._newdbservertimezone = config.newdbservertimezone;
    this._nodecount = config.nodecount;
    this._nxclusterid = config.nxclusterid;
    this._remove = config.remove;
    this._softRemove = config.softRemove;
    this._softwareprofileid = config.softwareprofileid;
    this._softwareprofileversionid = config.softwareprofileversionid;
    this._sshpublickey = config.sshpublickey;
    this._vmPassword = config.vmPassword;
    this._actionarguments.internalValue = config.actionarguments;
    this._clusterInfo.internalValue = config.clusterInfo;
    this._maintenanceTasks.internalValue = config.maintenanceTasks;
    this._nodes.internalValue = config.nodes;
    this._postgresqlInfo.internalValue = config.postgresqlInfo;
    this._tags.internalValue = config.tags;
    this._timemachineinfo.internalValue = config.timemachineinfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autotunestagingdrive - computed: false, optional: true, required: false
  private _autotunestagingdrive?: boolean | cdktf.IResolvable; 
  public get autotunestagingdrive() {
    return this.getBooleanAttribute('autotunestagingdrive');
  }
  public set autotunestagingdrive(value: boolean | cdktf.IResolvable) {
    this._autotunestagingdrive = value;
  }
  public resetAutotunestagingdrive() {
    this._autotunestagingdrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotunestagingdriveInput() {
    return this._autotunestagingdrive;
  }

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

  // computeprofileid - computed: false, optional: true, required: false
  private _computeprofileid?: string; 
  public get computeprofileid() {
    return this.getStringAttribute('computeprofileid');
  }
  public set computeprofileid(value: string) {
    this._computeprofileid = value;
  }
  public resetComputeprofileid() {
    this._computeprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeprofileidInput() {
    return this._computeprofileid;
  }

  // createdbserver - computed: false, optional: true, required: false
  private _createdbserver?: boolean | cdktf.IResolvable; 
  public get createdbserver() {
    return this.getBooleanAttribute('createdbserver');
  }
  public set createdbserver(value: boolean | cdktf.IResolvable) {
    this._createdbserver = value;
  }
  public resetCreatedbserver() {
    this._createdbserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdbserverInput() {
    return this._createdbserver;
  }

  // database_cluster_type - computed: true, optional: false, required: false
  public get databaseClusterType() {
    return this.getStringAttribute('database_cluster_type');
  }

  // database_instance_id - computed: true, optional: true, required: false
  private _databaseInstanceId?: string; 
  public get databaseInstanceId() {
    return this.getStringAttribute('database_instance_id');
  }
  public set databaseInstanceId(value: string) {
    this._databaseInstanceId = value;
  }
  public resetDatabaseInstanceId() {
    this._databaseInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInstanceIdInput() {
    return this._databaseInstanceId;
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_nodes - computed: true, optional: false, required: false
  private _databaseNodes = new NdbDatabaseDatabaseNodesList(this, "database_nodes", false);
  public get databaseNodes() {
    return this._databaseNodes;
  }

  // databasetype - computed: false, optional: true, required: false
  private _databasetype?: string; 
  public get databasetype() {
    return this.getStringAttribute('databasetype');
  }
  public set databasetype(value: string) {
    this._databasetype = value;
  }
  public resetDatabasetype() {
    this._databasetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasetypeInput() {
    return this._databasetype;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // dbparameterprofileid - computed: false, optional: true, required: false
  private _dbparameterprofileid?: string; 
  public get dbparameterprofileid() {
    return this.getStringAttribute('dbparameterprofileid');
  }
  public set dbparameterprofileid(value: string) {
    this._dbparameterprofileid = value;
  }
  public resetDbparameterprofileid() {
    this._dbparameterprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbparameterprofileidInput() {
    return this._dbparameterprofileid;
  }

  // dbserver_logical_cluster - computed: true, optional: false, required: false
  private _dbserverLogicalCluster = new cdktf.StringMap(this, "dbserver_logical_cluster");
  public get dbserverLogicalCluster() {
    return this._dbserverLogicalCluster;
  }

  // dbserver_logical_cluster_id - computed: true, optional: false, required: false
  public get dbserverLogicalClusterId() {
    return this.getStringAttribute('dbserver_logical_cluster_id');
  }

  // dbserverid - computed: false, optional: true, required: false
  private _dbserverid?: string; 
  public get dbserverid() {
    return this.getStringAttribute('dbserverid');
  }
  public set dbserverid(value: string) {
    this._dbserverid = value;
  }
  public resetDbserverid() {
    this._dbserverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserveridInput() {
    return this._dbserverid;
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
  private _info = new NdbDatabaseInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new NdbDatabaseLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // linked_databases - computed: true, optional: false, required: false
  private _linkedDatabases = new NdbDatabaseLinkedDatabasesList(this, "linked_databases", false);
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

  // networkprofileid - computed: false, optional: true, required: false
  private _networkprofileid?: string; 
  public get networkprofileid() {
    return this.getStringAttribute('networkprofileid');
  }
  public set networkprofileid(value: string) {
    this._networkprofileid = value;
  }
  public resetNetworkprofileid() {
    this._networkprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkprofileidInput() {
    return this._networkprofileid;
  }

  // newdbservertimezone - computed: false, optional: true, required: false
  private _newdbservertimezone?: string; 
  public get newdbservertimezone() {
    return this.getStringAttribute('newdbservertimezone');
  }
  public set newdbservertimezone(value: string) {
    this._newdbservertimezone = value;
  }
  public resetNewdbservertimezone() {
    this._newdbservertimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newdbservertimezoneInput() {
    return this._newdbservertimezone;
  }

  // nodecount - computed: false, optional: true, required: false
  private _nodecount?: number; 
  public get nodecount() {
    return this.getNumberAttribute('nodecount');
  }
  public set nodecount(value: number) {
    this._nodecount = value;
  }
  public resetNodecount() {
    this._nodecount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodecountInput() {
    return this._nodecount;
  }

  // nxclusterid - computed: false, optional: true, required: false
  private _nxclusterid?: string; 
  public get nxclusterid() {
    return this.getStringAttribute('nxclusterid');
  }
  public set nxclusterid(value: string) {
    this._nxclusterid = value;
  }
  public resetNxclusterid() {
    this._nxclusterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxclusteridInput() {
    return this._nxclusterid;
  }

  // parent_database_id - computed: true, optional: false, required: false
  public get parentDatabaseId() {
    return this.getStringAttribute('parent_database_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbDatabasePropertiesList(this, "properties", false);
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

  // softwareprofileid - computed: false, optional: true, required: false
  private _softwareprofileid?: string; 
  public get softwareprofileid() {
    return this.getStringAttribute('softwareprofileid');
  }
  public set softwareprofileid(value: string) {
    this._softwareprofileid = value;
  }
  public resetSoftwareprofileid() {
    this._softwareprofileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareprofileidInput() {
    return this._softwareprofileid;
  }

  // softwareprofileversionid - computed: false, optional: true, required: false
  private _softwareprofileversionid?: string; 
  public get softwareprofileversionid() {
    return this.getStringAttribute('softwareprofileversionid');
  }
  public set softwareprofileversionid(value: string) {
    this._softwareprofileversionid = value;
  }
  public resetSoftwareprofileversionid() {
    this._softwareprofileversionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareprofileversionidInput() {
    return this._softwareprofileversionid;
  }

  // sshpublickey - computed: false, optional: true, required: false
  private _sshpublickey?: string; 
  public get sshpublickey() {
    return this.getStringAttribute('sshpublickey');
  }
  public set sshpublickey(value: string) {
    this._sshpublickey = value;
  }
  public resetSshpublickey() {
    this._sshpublickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshpublickeyInput() {
    return this._sshpublickey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine - computed: true, optional: false, required: false
  private _timeMachine = new NdbDatabaseTimeMachineList(this, "time_machine", false);
  public get timeMachine() {
    return this._timeMachine;
  }

  // time_machine_id - computed: true, optional: false, required: false
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
  private _actionarguments = new NdbDatabaseActionargumentsList(this, "actionarguments", true);
  public get actionarguments() {
    return this._actionarguments;
  }
  public putActionarguments(value: NdbDatabaseActionarguments[] | cdktf.IResolvable) {
    this._actionarguments.internalValue = value;
  }
  public resetActionarguments() {
    this._actionarguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionargumentsInput() {
    return this._actionarguments.internalValue;
  }

  // cluster_info - computed: false, optional: true, required: false
  private _clusterInfo = new NdbDatabaseClusterInfoList(this, "cluster_info", false);
  public get clusterInfo() {
    return this._clusterInfo;
  }
  public putClusterInfo(value: NdbDatabaseClusterInfo[] | cdktf.IResolvable) {
    this._clusterInfo.internalValue = value;
  }
  public resetClusterInfo() {
    this._clusterInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInfoInput() {
    return this._clusterInfo.internalValue;
  }

  // maintenance_tasks - computed: false, optional: true, required: false
  private _maintenanceTasks = new NdbDatabaseMaintenanceTasksOutputReference(this, "maintenance_tasks");
  public get maintenanceTasks() {
    return this._maintenanceTasks;
  }
  public putMaintenanceTasks(value: NdbDatabaseMaintenanceTasks) {
    this._maintenanceTasks.internalValue = value;
  }
  public resetMaintenanceTasks() {
    this._maintenanceTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTasksInput() {
    return this._maintenanceTasks.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new NdbDatabaseNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: NdbDatabaseNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // postgresql_info - computed: false, optional: true, required: false
  private _postgresqlInfo = new NdbDatabasePostgresqlInfoOutputReference(this, "postgresql_info");
  public get postgresqlInfo() {
    return this._postgresqlInfo;
  }
  public putPostgresqlInfo(value: NdbDatabasePostgresqlInfo) {
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
  private _tags = new NdbDatabaseTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbDatabaseTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timemachineinfo - computed: false, optional: true, required: false
  private _timemachineinfo = new NdbDatabaseTimemachineinfoOutputReference(this, "timemachineinfo");
  public get timemachineinfo() {
    return this._timemachineinfo;
  }
  public putTimemachineinfo(value: NdbDatabaseTimemachineinfo) {
    this._timemachineinfo.internalValue = value;
  }
  public resetTimemachineinfo() {
    this._timemachineinfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timemachineinfoInput() {
    return this._timemachineinfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbDatabaseTimeouts) {
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
      autotunestagingdrive: cdktf.booleanToTerraform(this._autotunestagingdrive),
      clustered: cdktf.booleanToTerraform(this._clustered),
      computeprofileid: cdktf.stringToTerraform(this._computeprofileid),
      createdbserver: cdktf.booleanToTerraform(this._createdbserver),
      database_instance_id: cdktf.stringToTerraform(this._databaseInstanceId),
      databasetype: cdktf.stringToTerraform(this._databasetype),
      dbparameterprofileid: cdktf.stringToTerraform(this._dbparameterprofileid),
      dbserverid: cdktf.stringToTerraform(this._dbserverid),
      delete: cdktf.booleanToTerraform(this._delete),
      delete_logical_cluster: cdktf.booleanToTerraform(this._deleteLogicalCluster),
      delete_time_machine: cdktf.booleanToTerraform(this._deleteTimeMachine),
      description: cdktf.stringToTerraform(this._description),
      forced: cdktf.booleanToTerraform(this._forced),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      networkprofileid: cdktf.stringToTerraform(this._networkprofileid),
      newdbservertimezone: cdktf.stringToTerraform(this._newdbservertimezone),
      nodecount: cdktf.numberToTerraform(this._nodecount),
      nxclusterid: cdktf.stringToTerraform(this._nxclusterid),
      remove: cdktf.booleanToTerraform(this._remove),
      soft_remove: cdktf.booleanToTerraform(this._softRemove),
      softwareprofileid: cdktf.stringToTerraform(this._softwareprofileid),
      softwareprofileversionid: cdktf.stringToTerraform(this._softwareprofileversionid),
      sshpublickey: cdktf.stringToTerraform(this._sshpublickey),
      vm_password: cdktf.stringToTerraform(this._vmPassword),
      actionarguments: cdktf.listMapper(ndbDatabaseActionargumentsToTerraform, true)(this._actionarguments.internalValue),
      cluster_info: cdktf.listMapper(ndbDatabaseClusterInfoToTerraform, true)(this._clusterInfo.internalValue),
      maintenance_tasks: ndbDatabaseMaintenanceTasksToTerraform(this._maintenanceTasks.internalValue),
      nodes: cdktf.listMapper(ndbDatabaseNodesToTerraform, true)(this._nodes.internalValue),
      postgresql_info: ndbDatabasePostgresqlInfoToTerraform(this._postgresqlInfo.internalValue),
      tags: cdktf.listMapper(ndbDatabaseTagsToTerraform, true)(this._tags.internalValue),
      timemachineinfo: ndbDatabaseTimemachineinfoToTerraform(this._timemachineinfo.internalValue),
      timeouts: ndbDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autotunestagingdrive: {
        value: cdktf.booleanToHclTerraform(this._autotunestagingdrive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clustered: {
        value: cdktf.booleanToHclTerraform(this._clustered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      computeprofileid: {
        value: cdktf.stringToHclTerraform(this._computeprofileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      createdbserver: {
        value: cdktf.booleanToHclTerraform(this._createdbserver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_instance_id: {
        value: cdktf.stringToHclTerraform(this._databaseInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databasetype: {
        value: cdktf.stringToHclTerraform(this._databasetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbparameterprofileid: {
        value: cdktf.stringToHclTerraform(this._dbparameterprofileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbserverid: {
        value: cdktf.stringToHclTerraform(this._dbserverid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkprofileid: {
        value: cdktf.stringToHclTerraform(this._networkprofileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      newdbservertimezone: {
        value: cdktf.stringToHclTerraform(this._newdbservertimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodecount: {
        value: cdktf.numberToHclTerraform(this._nodecount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxclusterid: {
        value: cdktf.stringToHclTerraform(this._nxclusterid),
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
      soft_remove: {
        value: cdktf.booleanToHclTerraform(this._softRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      softwareprofileid: {
        value: cdktf.stringToHclTerraform(this._softwareprofileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      softwareprofileversionid: {
        value: cdktf.stringToHclTerraform(this._softwareprofileversionid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sshpublickey: {
        value: cdktf.stringToHclTerraform(this._sshpublickey),
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
        value: cdktf.listMapperHcl(ndbDatabaseActionargumentsToHclTerraform, true)(this._actionarguments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbDatabaseActionargumentsList",
      },
      cluster_info: {
        value: cdktf.listMapperHcl(ndbDatabaseClusterInfoToHclTerraform, true)(this._clusterInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabaseClusterInfoList",
      },
      maintenance_tasks: {
        value: ndbDatabaseMaintenanceTasksToHclTerraform(this._maintenanceTasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabaseMaintenanceTasksList",
      },
      nodes: {
        value: cdktf.listMapperHcl(ndbDatabaseNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbDatabaseNodesList",
      },
      postgresql_info: {
        value: ndbDatabasePostgresqlInfoToHclTerraform(this._postgresqlInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabasePostgresqlInfoList",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbDatabaseTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabaseTagsList",
      },
      timemachineinfo: {
        value: ndbDatabaseTimemachineinfoToHclTerraform(this._timemachineinfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbDatabaseTimemachineinfoList",
      },
      timeouts: {
        value: ndbDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
