// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbRegisterDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#auto_tune_staging_drive NdbRegisterDatabase#auto_tune_staging_drive}
  */
  readonly autoTuneStagingDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#category NdbRegisterDatabase#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#clustered NdbRegisterDatabase#clustered}
  */
  readonly clustered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#database_name NdbRegisterDatabase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#database_type NdbRegisterDatabase#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#delete NdbRegisterDatabase#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#delete_logical_cluster NdbRegisterDatabase#delete_logical_cluster}
  */
  readonly deleteLogicalCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#delete_time_machine NdbRegisterDatabase#delete_time_machine}
  */
  readonly deleteTimeMachine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#description NdbRegisterDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#forced NdbRegisterDatabase#forced}
  */
  readonly forced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#forced_install NdbRegisterDatabase#forced_install}
  */
  readonly forcedInstall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#id NdbRegisterDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#nx_cluster_id NdbRegisterDatabase#nx_cluster_id}
  */
  readonly nxClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#remove NdbRegisterDatabase#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#reset_description_in_nx_cluster NdbRegisterDatabase#reset_description_in_nx_cluster}
  */
  readonly resetDescriptionInNxCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#soft_remove NdbRegisterDatabase#soft_remove}
  */
  readonly softRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_description NdbRegisterDatabase#vm_description}
  */
  readonly vmDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_ip NdbRegisterDatabase#vm_ip}
  */
  readonly vmIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_password NdbRegisterDatabase#vm_password}
  */
  readonly vmPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_sshkey NdbRegisterDatabase#vm_sshkey}
  */
  readonly vmSshkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_username NdbRegisterDatabase#vm_username}
  */
  readonly vmUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#working_directory NdbRegisterDatabase#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * actionarguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#actionarguments NdbRegisterDatabase#actionarguments}
  */
  readonly actionarguments?: NdbRegisterDatabaseActionarguments[] | cdktf.IResolvable;
  /**
  * postgress_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#postgress_info NdbRegisterDatabase#postgress_info}
  */
  readonly postgressInfo?: NdbRegisterDatabasePostgressInfo[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tags NdbRegisterDatabase#tags}
  */
  readonly tags?: NdbRegisterDatabaseTags[] | cdktf.IResolvable;
  /**
  * time_machine_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#time_machine_info NdbRegisterDatabase#time_machine_info}
  */
  readonly timeMachineInfo?: NdbRegisterDatabaseTimeMachineInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#timeouts NdbRegisterDatabase#timeouts}
  */
  readonly timeouts?: NdbRegisterDatabaseTimeouts;
}
export interface NdbRegisterDatabaseDatabaseNodesInfo {
}

export function ndbRegisterDatabaseDatabaseNodesInfoToTerraform(struct?: NdbRegisterDatabaseDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesInfoToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodesInfo | undefined) {
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

export class NdbRegisterDatabaseDatabaseNodesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesInfoOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseDatabaseNodesProperties {
}

export function ndbRegisterDatabaseDatabaseNodesPropertiesToTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesPropertiesToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodesProperties | undefined) {
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

export class NdbRegisterDatabaseDatabaseNodesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesPropertiesOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseDatabaseNodesProtectionDomainProperties {
}

export function ndbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesToTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodesProtectionDomainProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodesProtectionDomainProperties | undefined) {
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

export class NdbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseDatabaseNodesProtectionDomain {
}

export function ndbRegisterDatabaseDatabaseNodesProtectionDomainToTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesProtectionDomainToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesProtectionDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodesProtectionDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodesProtectionDomain | undefined) {
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
  private _properties = new NdbRegisterDatabaseDatabaseNodesProtectionDomainPropertiesList(this, "properties", false);
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

export class NdbRegisterDatabaseDatabaseNodesProtectionDomainList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesProtectionDomainOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesProtectionDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseDatabaseNodesTags {
}

export function ndbRegisterDatabaseDatabaseNodesTagsToTerraform(struct?: NdbRegisterDatabaseDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesTagsToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodesTags | undefined) {
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

export class NdbRegisterDatabaseDatabaseNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesTagsOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseDatabaseNodes {
}

export function ndbRegisterDatabaseDatabaseNodesToTerraform(struct?: NdbRegisterDatabaseDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseDatabaseNodesToHclTerraform(struct?: NdbRegisterDatabaseDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseDatabaseNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseDatabaseNodes | undefined) {
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
  private _info = new NdbRegisterDatabaseDatabaseNodesInfoList(this, "info", false);
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
  private _properties = new NdbRegisterDatabaseDatabaseNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain - computed: true, optional: false, required: false
  private _protectionDomain = new NdbRegisterDatabaseDatabaseNodesProtectionDomainList(this, "protection_domain", false);
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
  private _tags = new NdbRegisterDatabaseDatabaseNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class NdbRegisterDatabaseDatabaseNodesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseDatabaseNodesOutputReference {
    return new NdbRegisterDatabaseDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsBpgDbParam {
}

export function ndbRegisterDatabaseInfoBpgConfigsBpgDbParamToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsBpgDbParamToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsBpgDbParam | undefined) {
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

export class NdbRegisterDatabaseInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsBpgDbParamOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorage {
}

export function ndbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorage | undefined) {
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

export class NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsStorageDataDisks {
}

export function ndbRegisterDatabaseInfoBpgConfigsStorageDataDisksToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsStorageDataDisks | undefined) {
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

export class NdbRegisterDatabaseInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsStorageDataDisksOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsStorageLogDisks {
}

export function ndbRegisterDatabaseInfoBpgConfigsStorageLogDisksToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsStorageLogDisks | undefined) {
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

export class NdbRegisterDatabaseInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsStorageLogDisksOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsStorage {
}

export function ndbRegisterDatabaseInfoBpgConfigsStorageToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsStorageToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new NdbRegisterDatabaseInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new NdbRegisterDatabaseInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new NdbRegisterDatabaseInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class NdbRegisterDatabaseInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsStorageOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigsVmProperties {
}

export function ndbRegisterDatabaseInfoBpgConfigsVmPropertiesToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsVmPropertiesToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigsVmProperties | undefined) {
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

export class NdbRegisterDatabaseInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsVmPropertiesOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfoBpgConfigs {
}

export function ndbRegisterDatabaseInfoBpgConfigsToTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoBpgConfigsToHclTerraform(struct?: NdbRegisterDatabaseInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new NdbRegisterDatabaseInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new NdbRegisterDatabaseInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new NdbRegisterDatabaseInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class NdbRegisterDatabaseInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoBpgConfigsOutputReference {
    return new NdbRegisterDatabaseInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseInfo {
}

export function ndbRegisterDatabaseInfoToTerraform(struct?: NdbRegisterDatabaseInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseInfoToHclTerraform(struct?: NdbRegisterDatabaseInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new NdbRegisterDatabaseInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbRegisterDatabaseInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseInfoOutputReference {
    return new NdbRegisterDatabaseInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLcmConfigExpiryDetails {
}

export function ndbRegisterDatabaseLcmConfigExpiryDetailsToTerraform(struct?: NdbRegisterDatabaseLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLcmConfigExpiryDetailsToHclTerraform(struct?: NdbRegisterDatabaseLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLcmConfigExpiryDetails | undefined) {
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

export class NdbRegisterDatabaseLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLcmConfigExpiryDetailsOutputReference {
    return new NdbRegisterDatabaseLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLcmConfigPostDeleteCommand {
}

export function ndbRegisterDatabaseLcmConfigPostDeleteCommandToTerraform(struct?: NdbRegisterDatabaseLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLcmConfigPostDeleteCommandToHclTerraform(struct?: NdbRegisterDatabaseLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLcmConfigPostDeleteCommand | undefined) {
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

export class NdbRegisterDatabaseLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLcmConfigPostDeleteCommandOutputReference {
    return new NdbRegisterDatabaseLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLcmConfigPreDeleteCommand {
}

export function ndbRegisterDatabaseLcmConfigPreDeleteCommandToTerraform(struct?: NdbRegisterDatabaseLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLcmConfigPreDeleteCommandToHclTerraform(struct?: NdbRegisterDatabaseLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLcmConfigPreDeleteCommand | undefined) {
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

export class NdbRegisterDatabaseLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLcmConfigPreDeleteCommandOutputReference {
    return new NdbRegisterDatabaseLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLcmConfigRefreshDetails {
}

export function ndbRegisterDatabaseLcmConfigRefreshDetailsToTerraform(struct?: NdbRegisterDatabaseLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLcmConfigRefreshDetailsToHclTerraform(struct?: NdbRegisterDatabaseLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLcmConfigRefreshDetails | undefined) {
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

export class NdbRegisterDatabaseLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLcmConfigRefreshDetailsOutputReference {
    return new NdbRegisterDatabaseLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLcmConfig {
}

export function ndbRegisterDatabaseLcmConfigToTerraform(struct?: NdbRegisterDatabaseLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLcmConfigToHclTerraform(struct?: NdbRegisterDatabaseLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new NdbRegisterDatabaseLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new NdbRegisterDatabaseLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new NdbRegisterDatabaseLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new NdbRegisterDatabaseLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class NdbRegisterDatabaseLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLcmConfigOutputReference {
    return new NdbRegisterDatabaseLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLinkedDatabasesInfo {
}

export function ndbRegisterDatabaseLinkedDatabasesInfoToTerraform(struct?: NdbRegisterDatabaseLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLinkedDatabasesInfoToHclTerraform(struct?: NdbRegisterDatabaseLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLinkedDatabasesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLinkedDatabasesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLinkedDatabasesInfo | undefined) {
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

export class NdbRegisterDatabaseLinkedDatabasesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLinkedDatabasesInfoOutputReference {
    return new NdbRegisterDatabaseLinkedDatabasesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseLinkedDatabases {
}

export function ndbRegisterDatabaseLinkedDatabasesToTerraform(struct?: NdbRegisterDatabaseLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseLinkedDatabasesToHclTerraform(struct?: NdbRegisterDatabaseLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseLinkedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseLinkedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseLinkedDatabases | undefined) {
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
  private _info = new NdbRegisterDatabaseLinkedDatabasesInfoList(this, "info", false);
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

export class NdbRegisterDatabaseLinkedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseLinkedDatabasesOutputReference {
    return new NdbRegisterDatabaseLinkedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseProperties {
}

export function ndbRegisterDatabasePropertiesToTerraform(struct?: NdbRegisterDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabasePropertiesToHclTerraform(struct?: NdbRegisterDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabasePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseProperties | undefined) {
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

export class NdbRegisterDatabasePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabasePropertiesOutputReference {
    return new NdbRegisterDatabasePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineProperties {
}

export function ndbRegisterDatabaseTimeMachinePropertiesToTerraform(struct?: NdbRegisterDatabaseTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachinePropertiesToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineProperties | undefined) {
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

export class NdbRegisterDatabaseTimeMachinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachinePropertiesOutputReference {
    return new NdbRegisterDatabaseTimeMachinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleContinuousSchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleContinuousScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleContinuousScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleContinuousScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleContinuousSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleContinuousSchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleContinuousScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleContinuousScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleContinuousScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleDailySchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleDailyScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleDailyScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleDailySchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleDailyScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleMonthlySchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleMonthlyScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleMonthlyScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleMonthlySchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleMonthlyScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleQuartelySchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleQuartelyScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleQuartelyScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleQuartelyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleQuartelySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleQuartelySchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleQuartelyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleQuartelyScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleQuartelyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDay {
}

export function ndbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDay | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleWeeklySchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleWeeklyScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleWeeklyScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleWeeklySchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleWeeklyScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineScheduleYearlySchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleYearlyScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleYearlyScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineScheduleYearlySchedule | undefined) {
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

export class NdbRegisterDatabaseTimeMachineScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleYearlyScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineSchedule {
}

export function ndbRegisterDatabaseTimeMachineScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_schedule - computed: true, optional: false, required: false
  private _continuousSchedule = new NdbRegisterDatabaseTimeMachineScheduleContinuousScheduleList(this, "continuous_schedule", false);
  public get continuousSchedule() {
    return this._continuousSchedule;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new NdbRegisterDatabaseTimeMachineScheduleDailyScheduleList(this, "daily_schedule", false);
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
  private _monthlySchedule = new NdbRegisterDatabaseTimeMachineScheduleMonthlyScheduleList(this, "monthly_schedule", false);
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
  private _quartelySchedule = new NdbRegisterDatabaseTimeMachineScheduleQuartelyScheduleList(this, "quartely_schedule", false);
  public get quartelySchedule() {
    return this._quartelySchedule;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // snapshot_time_of_day - computed: true, optional: false, required: false
  private _snapshotTimeOfDay = new NdbRegisterDatabaseTimeMachineScheduleSnapshotTimeOfDayList(this, "snapshot_time_of_day", false);
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
  private _weeklySchedule = new NdbRegisterDatabaseTimeMachineScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new NdbRegisterDatabaseTimeMachineScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class NdbRegisterDatabaseTimeMachineScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineScheduleOutputReference {
    return new NdbRegisterDatabaseTimeMachineScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineSla {
}

export function ndbRegisterDatabaseTimeMachineSlaToTerraform(struct?: NdbRegisterDatabaseTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineSlaToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineSla | undefined) {
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

export class NdbRegisterDatabaseTimeMachineSlaList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineSlaOutputReference {
    return new NdbRegisterDatabaseTimeMachineSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineTags {
}

export function ndbRegisterDatabaseTimeMachineTagsToTerraform(struct?: NdbRegisterDatabaseTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineTagsToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachineTags | undefined) {
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

export class NdbRegisterDatabaseTimeMachineTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineTagsOutputReference {
    return new NdbRegisterDatabaseTimeMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachine {
}

export function ndbRegisterDatabaseTimeMachineToTerraform(struct?: NdbRegisterDatabaseTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDatabaseTimeMachineToHclTerraform(struct?: NdbRegisterDatabaseTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDatabaseTimeMachineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabaseTimeMachine | undefined) {
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
  private _properties = new NdbRegisterDatabaseTimeMachinePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new NdbRegisterDatabaseTimeMachineScheduleList(this, "schedule", false);
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
  private _sla = new NdbRegisterDatabaseTimeMachineSlaList(this, "sla", false);
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
  private _tags = new NdbRegisterDatabaseTimeMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NdbRegisterDatabaseTimeMachineList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDatabaseTimeMachineOutputReference {
    return new NdbRegisterDatabaseTimeMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseActionarguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#name NdbRegisterDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#value NdbRegisterDatabase#value}
  */
  readonly value: string;
}

export function ndbRegisterDatabaseActionargumentsToTerraform(struct?: NdbRegisterDatabaseActionarguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbRegisterDatabaseActionargumentsToHclTerraform(struct?: NdbRegisterDatabaseActionarguments | cdktf.IResolvable): any {
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

export class NdbRegisterDatabaseActionargumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseActionarguments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseActionarguments | cdktf.IResolvable | undefined) {
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

export class NdbRegisterDatabaseActionargumentsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabaseActionarguments[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabaseActionargumentsOutputReference {
    return new NdbRegisterDatabaseActionargumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabasePostgressInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#allow_multiple_databases NdbRegisterDatabase#allow_multiple_databases}
  */
  readonly allowMultipleDatabases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#backup_policy NdbRegisterDatabase#backup_policy}
  */
  readonly backupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#db_name NdbRegisterDatabase#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#db_password NdbRegisterDatabase#db_password}
  */
  readonly dbPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#db_user NdbRegisterDatabase#db_user}
  */
  readonly dbUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#listener_port NdbRegisterDatabase#listener_port}
  */
  readonly listenerPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#postgres_software_home NdbRegisterDatabase#postgres_software_home}
  */
  readonly postgresSoftwareHome: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#software_home NdbRegisterDatabase#software_home}
  */
  readonly softwareHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#switch_log NdbRegisterDatabase#switch_log}
  */
  readonly switchLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#vm_ip NdbRegisterDatabase#vm_ip}
  */
  readonly vmIp?: string;
}

export function ndbRegisterDatabasePostgressInfoToTerraform(struct?: NdbRegisterDatabasePostgressInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_multiple_databases: cdktf.booleanToTerraform(struct!.allowMultipleDatabases),
    backup_policy: cdktf.stringToTerraform(struct!.backupPolicy),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_password: cdktf.stringToTerraform(struct!.dbPassword),
    db_user: cdktf.stringToTerraform(struct!.dbUser),
    listener_port: cdktf.stringToTerraform(struct!.listenerPort),
    postgres_software_home: cdktf.stringToTerraform(struct!.postgresSoftwareHome),
    software_home: cdktf.stringToTerraform(struct!.softwareHome),
    switch_log: cdktf.booleanToTerraform(struct!.switchLog),
    vm_ip: cdktf.stringToTerraform(struct!.vmIp),
  }
}


export function ndbRegisterDatabasePostgressInfoToHclTerraform(struct?: NdbRegisterDatabasePostgressInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_multiple_databases: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultipleDatabases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_policy: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
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
    db_user: {
      value: cdktf.stringToHclTerraform(struct!.dbUser),
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
    postgres_software_home: {
      value: cdktf.stringToHclTerraform(struct!.postgresSoftwareHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_home: {
      value: cdktf.stringToHclTerraform(struct!.softwareHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_log: {
      value: cdktf.booleanToHclTerraform(struct!.switchLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_ip: {
      value: cdktf.stringToHclTerraform(struct!.vmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDatabasePostgressInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabasePostgressInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMultipleDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultipleDatabases = this._allowMultipleDatabases;
    }
    if (this._backupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPassword = this._dbPassword;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._postgresSoftwareHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresSoftwareHome = this._postgresSoftwareHome;
    }
    if (this._softwareHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareHome = this._softwareHome;
    }
    if (this._switchLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchLog = this._switchLog;
    }
    if (this._vmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIp = this._vmIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDatabasePostgressInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMultipleDatabases = undefined;
      this._backupPolicy = undefined;
      this._dbName = undefined;
      this._dbPassword = undefined;
      this._dbUser = undefined;
      this._listenerPort = undefined;
      this._postgresSoftwareHome = undefined;
      this._softwareHome = undefined;
      this._switchLog = undefined;
      this._vmIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMultipleDatabases = value.allowMultipleDatabases;
      this._backupPolicy = value.backupPolicy;
      this._dbName = value.dbName;
      this._dbPassword = value.dbPassword;
      this._dbUser = value.dbUser;
      this._listenerPort = value.listenerPort;
      this._postgresSoftwareHome = value.postgresSoftwareHome;
      this._softwareHome = value.softwareHome;
      this._switchLog = value.switchLog;
      this._vmIp = value.vmIp;
    }
  }

  // allow_multiple_databases - computed: false, optional: true, required: false
  private _allowMultipleDatabases?: boolean | cdktf.IResolvable; 
  public get allowMultipleDatabases() {
    return this.getBooleanAttribute('allow_multiple_databases');
  }
  public set allowMultipleDatabases(value: boolean | cdktf.IResolvable) {
    this._allowMultipleDatabases = value;
  }
  public resetAllowMultipleDatabases() {
    this._allowMultipleDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleDatabasesInput() {
    return this._allowMultipleDatabases;
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

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
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

  // postgres_software_home - computed: false, optional: false, required: true
  private _postgresSoftwareHome?: string; 
  public get postgresSoftwareHome() {
    return this.getStringAttribute('postgres_software_home');
  }
  public set postgresSoftwareHome(value: string) {
    this._postgresSoftwareHome = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSoftwareHomeInput() {
    return this._postgresSoftwareHome;
  }

  // software_home - computed: false, optional: true, required: false
  private _softwareHome?: string; 
  public get softwareHome() {
    return this.getStringAttribute('software_home');
  }
  public set softwareHome(value: string) {
    this._softwareHome = value;
  }
  public resetSoftwareHome() {
    this._softwareHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareHomeInput() {
    return this._softwareHome;
  }

  // switch_log - computed: false, optional: true, required: false
  private _switchLog?: boolean | cdktf.IResolvable; 
  public get switchLog() {
    return this.getBooleanAttribute('switch_log');
  }
  public set switchLog(value: boolean | cdktf.IResolvable) {
    this._switchLog = value;
  }
  public resetSwitchLog() {
    this._switchLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchLogInput() {
    return this._switchLog;
  }

  // vm_ip - computed: false, optional: true, required: false
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  public resetVmIp() {
    this._vmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
  }
}

export class NdbRegisterDatabasePostgressInfoList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabasePostgressInfo[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabasePostgressInfoOutputReference {
    return new NdbRegisterDatabasePostgressInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tag_id NdbRegisterDatabase#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tag_name NdbRegisterDatabase#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#value NdbRegisterDatabase#value}
  */
  readonly value?: string;
}

export function ndbRegisterDatabaseTagsToTerraform(struct?: NdbRegisterDatabaseTags | cdktf.IResolvable): any {
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


export function ndbRegisterDatabaseTagsToHclTerraform(struct?: NdbRegisterDatabaseTags | cdktf.IResolvable): any {
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

export class NdbRegisterDatabaseTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTags | cdktf.IResolvable | undefined) {
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

export class NdbRegisterDatabaseTagsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabaseTags[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabaseTagsOutputReference {
    return new NdbRegisterDatabaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#enabled NdbRegisterDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#logbackupinterval NdbRegisterDatabase#logbackupinterval}
  */
  readonly logbackupinterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#snapshotsperday NdbRegisterDatabase#snapshotsperday}
  */
  readonly snapshotsperday: number;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule): any {
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


export function ndbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#dayofmonth NdbRegisterDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#enabled NdbRegisterDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofmonth: cdktf.numberToTerraform(struct!.dayofmonth),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#dayofmonth NdbRegisterDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#enabled NdbRegisterDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#startmonth NdbRegisterDatabase#startmonth}
  */
  readonly startmonth: string;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule): any {
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


export function ndbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#hours NdbRegisterDatabase#hours}
  */
  readonly hours: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#minutes NdbRegisterDatabase#minutes}
  */
  readonly minutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#seconds NdbRegisterDatabase#seconds}
  */
  readonly seconds: number;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday): any {
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


export function ndbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#dayofweek NdbRegisterDatabase#dayofweek}
  */
  readonly dayofweek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#enabled NdbRegisterDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofweek: cdktf.stringToTerraform(struct!.dayofweek),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#dayofmonth NdbRegisterDatabase#dayofmonth}
  */
  readonly dayofmonth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#enabled NdbRegisterDatabase#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#month NdbRegisterDatabase#month}
  */
  readonly month: string;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule): any {
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


export function ndbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule): any {
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

export class NdbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule | undefined) {
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
export interface NdbRegisterDatabaseTimeMachineInfoSchedule {
  /**
  * continuousschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#continuousschedule NdbRegisterDatabase#continuousschedule}
  */
  readonly continuousschedule?: NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule;
  /**
  * monthlyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#monthlyschedule NdbRegisterDatabase#monthlyschedule}
  */
  readonly monthlyschedule?: NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule;
  /**
  * quartelyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#quartelyschedule NdbRegisterDatabase#quartelyschedule}
  */
  readonly quartelyschedule?: NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule;
  /**
  * snapshottimeofday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#snapshottimeofday NdbRegisterDatabase#snapshottimeofday}
  */
  readonly snapshottimeofday?: NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday;
  /**
  * weeklyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#weeklyschedule NdbRegisterDatabase#weeklyschedule}
  */
  readonly weeklyschedule?: NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule;
  /**
  * yearlyschedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#yearlyschedule NdbRegisterDatabase#yearlyschedule}
  */
  readonly yearlyschedule?: NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule;
}

export function ndbRegisterDatabaseTimeMachineInfoScheduleToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuousschedule: ndbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleToTerraform(struct!.continuousschedule),
    monthlyschedule: ndbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleToTerraform(struct!.monthlyschedule),
    quartelyschedule: ndbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleToTerraform(struct!.quartelyschedule),
    snapshottimeofday: ndbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayToTerraform(struct!.snapshottimeofday),
    weeklyschedule: ndbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleToTerraform(struct!.weeklyschedule),
    yearlyschedule: ndbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleToTerraform(struct!.yearlyschedule),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoScheduleToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoScheduleOutputReference | NdbRegisterDatabaseTimeMachineInfoSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuousschedule: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleToHclTerraform(struct!.continuousschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleList",
    },
    monthlyschedule: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleToHclTerraform(struct!.monthlyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleList",
    },
    quartelyschedule: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleToHclTerraform(struct!.quartelyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleList",
    },
    snapshottimeofday: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayToHclTerraform(struct!.snapshottimeofday),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayList",
    },
    weeklyschedule: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleToHclTerraform(struct!.weeklyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleList",
    },
    yearlyschedule: {
      value: ndbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleToHclTerraform(struct!.yearlyschedule),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDatabaseTimeMachineInfoScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoSchedule | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoSchedule | undefined) {
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
  private _continuousschedule = new NdbRegisterDatabaseTimeMachineInfoScheduleContinuousscheduleOutputReference(this, "continuousschedule");
  public get continuousschedule() {
    return this._continuousschedule;
  }
  public putContinuousschedule(value: NdbRegisterDatabaseTimeMachineInfoScheduleContinuousschedule) {
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
  private _monthlyschedule = new NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyscheduleOutputReference(this, "monthlyschedule");
  public get monthlyschedule() {
    return this._monthlyschedule;
  }
  public putMonthlyschedule(value: NdbRegisterDatabaseTimeMachineInfoScheduleMonthlyschedule) {
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
  private _quartelyschedule = new NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyscheduleOutputReference(this, "quartelyschedule");
  public get quartelyschedule() {
    return this._quartelyschedule;
  }
  public putQuartelyschedule(value: NdbRegisterDatabaseTimeMachineInfoScheduleQuartelyschedule) {
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
  private _snapshottimeofday = new NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofdayOutputReference(this, "snapshottimeofday");
  public get snapshottimeofday() {
    return this._snapshottimeofday;
  }
  public putSnapshottimeofday(value: NdbRegisterDatabaseTimeMachineInfoScheduleSnapshottimeofday) {
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
  private _weeklyschedule = new NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyscheduleOutputReference(this, "weeklyschedule");
  public get weeklyschedule() {
    return this._weeklyschedule;
  }
  public putWeeklyschedule(value: NdbRegisterDatabaseTimeMachineInfoScheduleWeeklyschedule) {
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
  private _yearlyschedule = new NdbRegisterDatabaseTimeMachineInfoScheduleYearlyscheduleOutputReference(this, "yearlyschedule");
  public get yearlyschedule() {
    return this._yearlyschedule;
  }
  public putYearlyschedule(value: NdbRegisterDatabaseTimeMachineInfoScheduleYearlyschedule) {
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
export interface NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#nx_cluster_ids NdbRegisterDatabase#nx_cluster_ids}
  */
  readonly nxClusterIds?: string[];
  /**
  * description of SLA ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#sla_id NdbRegisterDatabase#sla_id}
  */
  readonly slaId: string;
}

export function ndbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nx_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nxClusterIds),
    sla_id: cdktf.stringToTerraform(struct!.slaId),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla | cdktf.IResolvable): any {
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

export class NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla | cdktf.IResolvable | undefined) {
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

export class NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaOutputReference {
    return new NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineInfoSlaDetails {
  /**
  * primary_sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#primary_sla NdbRegisterDatabase#primary_sla}
  */
  readonly primarySla?: NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla[] | cdktf.IResolvable;
}

export function ndbRegisterDatabaseTimeMachineInfoSlaDetailsToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoSlaDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_sla: cdktf.listMapper(ndbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaToTerraform, true)(struct!.primarySla),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoSlaDetailsToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoSlaDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_sla: {
      value: cdktf.listMapperHcl(ndbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaToHclTerraform, true)(struct!.primarySla),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDatabaseTimeMachineInfoSlaDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoSlaDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoSlaDetails | cdktf.IResolvable | undefined) {
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
  private _primarySla = new NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySlaList(this, "primary_sla", false);
  public get primarySla() {
    return this._primarySla;
  }
  public putPrimarySla(value: NdbRegisterDatabaseTimeMachineInfoSlaDetailsPrimarySla[] | cdktf.IResolvable) {
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

export class NdbRegisterDatabaseTimeMachineInfoSlaDetailsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabaseTimeMachineInfoSlaDetails[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabaseTimeMachineInfoSlaDetailsOutputReference {
    return new NdbRegisterDatabaseTimeMachineInfoSlaDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineInfoTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tag_id NdbRegisterDatabase#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tag_name NdbRegisterDatabase#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#value NdbRegisterDatabase#value}
  */
  readonly value?: string;
}

export function ndbRegisterDatabaseTimeMachineInfoTagsToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoTags | cdktf.IResolvable): any {
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


export function ndbRegisterDatabaseTimeMachineInfoTagsToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoTags | cdktf.IResolvable): any {
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

export class NdbRegisterDatabaseTimeMachineInfoTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfoTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfoTags | cdktf.IResolvable | undefined) {
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

export class NdbRegisterDatabaseTimeMachineInfoTagsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDatabaseTimeMachineInfoTags[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDatabaseTimeMachineInfoTagsOutputReference {
    return new NdbRegisterDatabaseTimeMachineInfoTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDatabaseTimeMachineInfo {
  /**
  * description of autoTuneLogDrive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#autotunelogdrive NdbRegisterDatabase#autotunelogdrive}
  */
  readonly autotunelogdrive?: boolean | cdktf.IResolvable;
  /**
  * description of time machine's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#description NdbRegisterDatabase#description}
  */
  readonly description?: string;
  /**
  * description of time machine's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#name NdbRegisterDatabase#name}
  */
  readonly name: string;
  /**
  * description of SLA ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#slaid NdbRegisterDatabase#slaid}
  */
  readonly slaid?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#schedule NdbRegisterDatabase#schedule}
  */
  readonly schedule: NdbRegisterDatabaseTimeMachineInfoSchedule;
  /**
  * sla_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#sla_details NdbRegisterDatabase#sla_details}
  */
  readonly slaDetails?: NdbRegisterDatabaseTimeMachineInfoSlaDetails[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#tags NdbRegisterDatabase#tags}
  */
  readonly tags?: NdbRegisterDatabaseTimeMachineInfoTags[] | cdktf.IResolvable;
}

export function ndbRegisterDatabaseTimeMachineInfoToTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoOutputReference | NdbRegisterDatabaseTimeMachineInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotunelogdrive: cdktf.booleanToTerraform(struct!.autotunelogdrive),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    slaid: cdktf.stringToTerraform(struct!.slaid),
    schedule: ndbRegisterDatabaseTimeMachineInfoScheduleToTerraform(struct!.schedule),
    sla_details: cdktf.listMapper(ndbRegisterDatabaseTimeMachineInfoSlaDetailsToTerraform, true)(struct!.slaDetails),
    tags: cdktf.listMapper(ndbRegisterDatabaseTimeMachineInfoTagsToTerraform, true)(struct!.tags),
  }
}


export function ndbRegisterDatabaseTimeMachineInfoToHclTerraform(struct?: NdbRegisterDatabaseTimeMachineInfoOutputReference | NdbRegisterDatabaseTimeMachineInfo): any {
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
      value: ndbRegisterDatabaseTimeMachineInfoScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "set",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoScheduleList",
    },
    sla_details: {
      value: cdktf.listMapperHcl(ndbRegisterDatabaseTimeMachineInfoSlaDetailsToHclTerraform, true)(struct!.slaDetails),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoSlaDetailsList",
    },
    tags: {
      value: cdktf.listMapperHcl(ndbRegisterDatabaseTimeMachineInfoTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "NdbRegisterDatabaseTimeMachineInfoTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDatabaseTimeMachineInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbRegisterDatabaseTimeMachineInfo | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeMachineInfo | undefined) {
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
  private _schedule = new NdbRegisterDatabaseTimeMachineInfoScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: NdbRegisterDatabaseTimeMachineInfoSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sla_details - computed: false, optional: true, required: false
  private _slaDetails = new NdbRegisterDatabaseTimeMachineInfoSlaDetailsList(this, "sla_details", false);
  public get slaDetails() {
    return this._slaDetails;
  }
  public putSlaDetails(value: NdbRegisterDatabaseTimeMachineInfoSlaDetails[] | cdktf.IResolvable) {
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
  private _tags = new NdbRegisterDatabaseTimeMachineInfoTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbRegisterDatabaseTimeMachineInfoTags[] | cdktf.IResolvable) {
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
export interface NdbRegisterDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#create NdbRegisterDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#delete NdbRegisterDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#update NdbRegisterDatabase#update}
  */
  readonly update?: string;
}

export function ndbRegisterDatabaseTimeoutsToTerraform(struct?: NdbRegisterDatabaseTimeouts | cdktf.IResolvable): any {
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


export function ndbRegisterDatabaseTimeoutsToHclTerraform(struct?: NdbRegisterDatabaseTimeouts | cdktf.IResolvable): any {
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

export class NdbRegisterDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbRegisterDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbRegisterDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database nutanix_ndb_register_database}
*/
export class NdbRegisterDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_register_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbRegisterDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbRegisterDatabase to import
  * @param importFromId The id of the existing NdbRegisterDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbRegisterDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_register_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_database nutanix_ndb_register_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbRegisterDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: NdbRegisterDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_register_database',
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
    this._autoTuneStagingDrive = config.autoTuneStagingDrive;
    this._category = config.category;
    this._clustered = config.clustered;
    this._databaseName = config.databaseName;
    this._databaseType = config.databaseType;
    this._delete = config.delete;
    this._deleteLogicalCluster = config.deleteLogicalCluster;
    this._deleteTimeMachine = config.deleteTimeMachine;
    this._description = config.description;
    this._forced = config.forced;
    this._forcedInstall = config.forcedInstall;
    this._id = config.id;
    this._nxClusterId = config.nxClusterId;
    this._remove = config.remove;
    this._resetDescriptionInNxCluster = config.resetDescriptionInNxCluster;
    this._softRemove = config.softRemove;
    this._vmDescription = config.vmDescription;
    this._vmIp = config.vmIp;
    this._vmPassword = config.vmPassword;
    this._vmSshkey = config.vmSshkey;
    this._vmUsername = config.vmUsername;
    this._workingDirectory = config.workingDirectory;
    this._actionarguments.internalValue = config.actionarguments;
    this._postgressInfo.internalValue = config.postgressInfo;
    this._tags.internalValue = config.tags;
    this._timeMachineInfo.internalValue = config.timeMachineInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // database_cluster_type - computed: true, optional: false, required: false
  public get databaseClusterType() {
    return this.getStringAttribute('database_cluster_type');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_nodes - computed: true, optional: false, required: false
  private _databaseNodes = new NdbRegisterDatabaseDatabaseNodesList(this, "database_nodes", false);
  public get databaseNodes() {
    return this._databaseNodes;
  }

  // database_status - computed: true, optional: false, required: false
  public get databaseStatus() {
    return this.getStringAttribute('database_status');
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
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

  // forced_install - computed: false, optional: true, required: false
  private _forcedInstall?: boolean | cdktf.IResolvable; 
  public get forcedInstall() {
    return this.getBooleanAttribute('forced_install');
  }
  public set forcedInstall(value: boolean | cdktf.IResolvable) {
    this._forcedInstall = value;
  }
  public resetForcedInstall() {
    this._forcedInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedInstallInput() {
    return this._forcedInstall;
  }

  // group_info - computed: true, optional: false, required: false
  private _groupInfo = new cdktf.StringMap(this, "group_info");
  public get groupInfo() {
    return this._groupInfo;
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
  private _info = new NdbRegisterDatabaseInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new NdbRegisterDatabaseLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // linked_databases - computed: true, optional: false, required: false
  private _linkedDatabases = new NdbRegisterDatabaseLinkedDatabasesList(this, "linked_databases", false);
  public get linkedDatabases() {
    return this._linkedDatabases;
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

  // parent_database_id - computed: true, optional: false, required: false
  public get parentDatabaseId() {
    return this.getStringAttribute('parent_database_id');
  }

  // parent_source_database_id - computed: true, optional: false, required: false
  public get parentSourceDatabaseId() {
    return this.getStringAttribute('parent_source_database_id');
  }

  // parent_time_machine_id - computed: true, optional: false, required: false
  public get parentTimeMachineId() {
    return this.getStringAttribute('parent_time_machine_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbRegisterDatabasePropertiesList(this, "properties", false);
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

  // reset_description_in_nx_cluster - computed: false, optional: true, required: false
  private _resetDescriptionInNxCluster?: boolean | cdktf.IResolvable; 
  public get resetDescriptionInNxCluster() {
    return this.getBooleanAttribute('reset_description_in_nx_cluster');
  }
  public set resetDescriptionInNxCluster(value: boolean | cdktf.IResolvable) {
    this._resetDescriptionInNxCluster = value;
  }
  public resetResetDescriptionInNxCluster() {
    this._resetDescriptionInNxCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetDescriptionInNxClusterInput() {
    return this._resetDescriptionInNxCluster;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine - computed: true, optional: false, required: false
  private _timeMachine = new NdbRegisterDatabaseTimeMachineList(this, "time_machine", false);
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

  // vm_description - computed: false, optional: true, required: false
  private _vmDescription?: string; 
  public get vmDescription() {
    return this.getStringAttribute('vm_description');
  }
  public set vmDescription(value: string) {
    this._vmDescription = value;
  }
  public resetVmDescription() {
    this._vmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDescriptionInput() {
    return this._vmDescription;
  }

  // vm_ip - computed: false, optional: false, required: true
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
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

  // vm_sshkey - computed: false, optional: true, required: false
  private _vmSshkey?: string; 
  public get vmSshkey() {
    return this.getStringAttribute('vm_sshkey');
  }
  public set vmSshkey(value: string) {
    this._vmSshkey = value;
  }
  public resetVmSshkey() {
    this._vmSshkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSshkeyInput() {
    return this._vmSshkey;
  }

  // vm_username - computed: false, optional: true, required: false
  private _vmUsername?: string; 
  public get vmUsername() {
    return this.getStringAttribute('vm_username');
  }
  public set vmUsername(value: string) {
    this._vmUsername = value;
  }
  public resetVmUsername() {
    this._vmUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmUsernameInput() {
    return this._vmUsername;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // actionarguments - computed: false, optional: true, required: false
  private _actionarguments = new NdbRegisterDatabaseActionargumentsList(this, "actionarguments", true);
  public get actionarguments() {
    return this._actionarguments;
  }
  public putActionarguments(value: NdbRegisterDatabaseActionarguments[] | cdktf.IResolvable) {
    this._actionarguments.internalValue = value;
  }
  public resetActionarguments() {
    this._actionarguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionargumentsInput() {
    return this._actionarguments.internalValue;
  }

  // postgress_info - computed: false, optional: true, required: false
  private _postgressInfo = new NdbRegisterDatabasePostgressInfoList(this, "postgress_info", false);
  public get postgressInfo() {
    return this._postgressInfo;
  }
  public putPostgressInfo(value: NdbRegisterDatabasePostgressInfo[] | cdktf.IResolvable) {
    this._postgressInfo.internalValue = value;
  }
  public resetPostgressInfo() {
    this._postgressInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgressInfoInput() {
    return this._postgressInfo.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbRegisterDatabaseTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbRegisterDatabaseTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // time_machine_info - computed: false, optional: true, required: false
  private _timeMachineInfo = new NdbRegisterDatabaseTimeMachineInfoOutputReference(this, "time_machine_info");
  public get timeMachineInfo() {
    return this._timeMachineInfo;
  }
  public putTimeMachineInfo(value: NdbRegisterDatabaseTimeMachineInfo) {
    this._timeMachineInfo.internalValue = value;
  }
  public resetTimeMachineInfo() {
    this._timeMachineInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineInfoInput() {
    return this._timeMachineInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbRegisterDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbRegisterDatabaseTimeouts) {
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
      auto_tune_staging_drive: cdktf.booleanToTerraform(this._autoTuneStagingDrive),
      category: cdktf.stringToTerraform(this._category),
      clustered: cdktf.booleanToTerraform(this._clustered),
      database_name: cdktf.stringToTerraform(this._databaseName),
      database_type: cdktf.stringToTerraform(this._databaseType),
      delete: cdktf.booleanToTerraform(this._delete),
      delete_logical_cluster: cdktf.booleanToTerraform(this._deleteLogicalCluster),
      delete_time_machine: cdktf.booleanToTerraform(this._deleteTimeMachine),
      description: cdktf.stringToTerraform(this._description),
      forced: cdktf.booleanToTerraform(this._forced),
      forced_install: cdktf.booleanToTerraform(this._forcedInstall),
      id: cdktf.stringToTerraform(this._id),
      nx_cluster_id: cdktf.stringToTerraform(this._nxClusterId),
      remove: cdktf.booleanToTerraform(this._remove),
      reset_description_in_nx_cluster: cdktf.booleanToTerraform(this._resetDescriptionInNxCluster),
      soft_remove: cdktf.booleanToTerraform(this._softRemove),
      vm_description: cdktf.stringToTerraform(this._vmDescription),
      vm_ip: cdktf.stringToTerraform(this._vmIp),
      vm_password: cdktf.stringToTerraform(this._vmPassword),
      vm_sshkey: cdktf.stringToTerraform(this._vmSshkey),
      vm_username: cdktf.stringToTerraform(this._vmUsername),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      actionarguments: cdktf.listMapper(ndbRegisterDatabaseActionargumentsToTerraform, true)(this._actionarguments.internalValue),
      postgress_info: cdktf.listMapper(ndbRegisterDatabasePostgressInfoToTerraform, true)(this._postgressInfo.internalValue),
      tags: cdktf.listMapper(ndbRegisterDatabaseTagsToTerraform, true)(this._tags.internalValue),
      time_machine_info: ndbRegisterDatabaseTimeMachineInfoToTerraform(this._timeMachineInfo.internalValue),
      timeouts: ndbRegisterDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_tune_staging_drive: {
        value: cdktf.booleanToHclTerraform(this._autoTuneStagingDrive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clustered: {
        value: cdktf.booleanToHclTerraform(this._clustered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
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
      forced_install: {
        value: cdktf.booleanToHclTerraform(this._forcedInstall),
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
      reset_description_in_nx_cluster: {
        value: cdktf.booleanToHclTerraform(this._resetDescriptionInNxCluster),
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
      vm_description: {
        value: cdktf.stringToHclTerraform(this._vmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_ip: {
        value: cdktf.stringToHclTerraform(this._vmIp),
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
      vm_sshkey: {
        value: cdktf.stringToHclTerraform(this._vmSshkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_username: {
        value: cdktf.stringToHclTerraform(this._vmUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actionarguments: {
        value: cdktf.listMapperHcl(ndbRegisterDatabaseActionargumentsToHclTerraform, true)(this._actionarguments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbRegisterDatabaseActionargumentsList",
      },
      postgress_info: {
        value: cdktf.listMapperHcl(ndbRegisterDatabasePostgressInfoToHclTerraform, true)(this._postgressInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbRegisterDatabasePostgressInfoList",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbRegisterDatabaseTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbRegisterDatabaseTagsList",
      },
      time_machine_info: {
        value: ndbRegisterDatabaseTimeMachineInfoToHclTerraform(this._timeMachineInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NdbRegisterDatabaseTimeMachineInfoList",
      },
      timeouts: {
        value: ndbRegisterDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbRegisterDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
