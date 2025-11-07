// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbDatabaseScaleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#application_type NdbDatabaseScale#application_type}
  */
  readonly applicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#data_storage_size NdbDatabaseScale#data_storage_size}
  */
  readonly dataStorageSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#database_uuid NdbDatabaseScale#database_uuid}
  */
  readonly databaseUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#id NdbDatabaseScale#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#post_script_cmd NdbDatabaseScale#post_script_cmd}
  */
  readonly postScriptCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#pre_script_cmd NdbDatabaseScale#pre_script_cmd}
  */
  readonly preScriptCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#scale_count NdbDatabaseScale#scale_count}
  */
  readonly scaleCount?: number;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#tags NdbDatabaseScale#tags}
  */
  readonly tags?: NdbDatabaseScaleTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#timeouts NdbDatabaseScale#timeouts}
  */
  readonly timeouts?: NdbDatabaseScaleTimeouts;
}
export interface NdbDatabaseScaleDatabaseNodesInfo {
}

export function ndbDatabaseScaleDatabaseNodesInfoToTerraform(struct?: NdbDatabaseScaleDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesInfoToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodesInfo | undefined) {
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

export class NdbDatabaseScaleDatabaseNodesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesInfoOutputReference {
    return new NdbDatabaseScaleDatabaseNodesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleDatabaseNodesProperties {
}

export function ndbDatabaseScaleDatabaseNodesPropertiesToTerraform(struct?: NdbDatabaseScaleDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesPropertiesToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodesProperties | undefined) {
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

export class NdbDatabaseScaleDatabaseNodesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesPropertiesOutputReference {
    return new NdbDatabaseScaleDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleDatabaseNodesProtectionDomainProperties {
}

export function ndbDatabaseScaleDatabaseNodesProtectionDomainPropertiesToTerraform(struct?: NdbDatabaseScaleDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesProtectionDomainPropertiesToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesProtectionDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodesProtectionDomainProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodesProtectionDomainProperties | undefined) {
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

export class NdbDatabaseScaleDatabaseNodesProtectionDomainPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesProtectionDomainPropertiesOutputReference {
    return new NdbDatabaseScaleDatabaseNodesProtectionDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleDatabaseNodesProtectionDomain {
}

export function ndbDatabaseScaleDatabaseNodesProtectionDomainToTerraform(struct?: NdbDatabaseScaleDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesProtectionDomainToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesProtectionDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodesProtectionDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodesProtectionDomain | undefined) {
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
  private _properties = new NdbDatabaseScaleDatabaseNodesProtectionDomainPropertiesList(this, "properties", false);
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

export class NdbDatabaseScaleDatabaseNodesProtectionDomainList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesProtectionDomainOutputReference {
    return new NdbDatabaseScaleDatabaseNodesProtectionDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleDatabaseNodesTags {
}

export function ndbDatabaseScaleDatabaseNodesTagsToTerraform(struct?: NdbDatabaseScaleDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesTagsToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodesTags | undefined) {
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

export class NdbDatabaseScaleDatabaseNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesTagsOutputReference {
    return new NdbDatabaseScaleDatabaseNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleDatabaseNodes {
}

export function ndbDatabaseScaleDatabaseNodesToTerraform(struct?: NdbDatabaseScaleDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleDatabaseNodesToHclTerraform(struct?: NdbDatabaseScaleDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleDatabaseNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleDatabaseNodes | undefined) {
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
  private _info = new NdbDatabaseScaleDatabaseNodesInfoList(this, "info", false);
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
  private _properties = new NdbDatabaseScaleDatabaseNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain - computed: true, optional: false, required: false
  private _protectionDomain = new NdbDatabaseScaleDatabaseNodesProtectionDomainList(this, "protection_domain", false);
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
  private _tags = new NdbDatabaseScaleDatabaseNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class NdbDatabaseScaleDatabaseNodesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleDatabaseNodesOutputReference {
    return new NdbDatabaseScaleDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsBpgDbParam {
}

export function ndbDatabaseScaleInfoBpgConfigsBpgDbParamToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsBpgDbParamToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsBpgDbParam | undefined) {
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

export class NdbDatabaseScaleInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsBpgDbParamOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorage {
}

export function ndbDatabaseScaleInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorage | undefined) {
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

export class NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsStorageDataDisks {
}

export function ndbDatabaseScaleInfoBpgConfigsStorageDataDisksToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsStorageDataDisks | undefined) {
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

export class NdbDatabaseScaleInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsStorageDataDisksOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsStorageLogDisks {
}

export function ndbDatabaseScaleInfoBpgConfigsStorageLogDisksToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsStorageLogDisks | undefined) {
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

export class NdbDatabaseScaleInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsStorageLogDisksOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsStorage {
}

export function ndbDatabaseScaleInfoBpgConfigsStorageToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsStorageToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new NdbDatabaseScaleInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new NdbDatabaseScaleInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new NdbDatabaseScaleInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class NdbDatabaseScaleInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsStorageOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigsVmProperties {
}

export function ndbDatabaseScaleInfoBpgConfigsVmPropertiesToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsVmPropertiesToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigsVmProperties | undefined) {
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

export class NdbDatabaseScaleInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsVmPropertiesOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfoBpgConfigs {
}

export function ndbDatabaseScaleInfoBpgConfigsToTerraform(struct?: NdbDatabaseScaleInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoBpgConfigsToHclTerraform(struct?: NdbDatabaseScaleInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new NdbDatabaseScaleInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new NdbDatabaseScaleInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new NdbDatabaseScaleInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class NdbDatabaseScaleInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoBpgConfigsOutputReference {
    return new NdbDatabaseScaleInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleInfo {
}

export function ndbDatabaseScaleInfoToTerraform(struct?: NdbDatabaseScaleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleInfoToHclTerraform(struct?: NdbDatabaseScaleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new NdbDatabaseScaleInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class NdbDatabaseScaleInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleInfoOutputReference {
    return new NdbDatabaseScaleInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLcmConfigExpiryDetails {
}

export function ndbDatabaseScaleLcmConfigExpiryDetailsToTerraform(struct?: NdbDatabaseScaleLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLcmConfigExpiryDetailsToHclTerraform(struct?: NdbDatabaseScaleLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLcmConfigExpiryDetails | undefined) {
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

export class NdbDatabaseScaleLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLcmConfigExpiryDetailsOutputReference {
    return new NdbDatabaseScaleLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLcmConfigPostDeleteCommand {
}

export function ndbDatabaseScaleLcmConfigPostDeleteCommandToTerraform(struct?: NdbDatabaseScaleLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLcmConfigPostDeleteCommandToHclTerraform(struct?: NdbDatabaseScaleLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLcmConfigPostDeleteCommand | undefined) {
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

export class NdbDatabaseScaleLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLcmConfigPostDeleteCommandOutputReference {
    return new NdbDatabaseScaleLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLcmConfigPreDeleteCommand {
}

export function ndbDatabaseScaleLcmConfigPreDeleteCommandToTerraform(struct?: NdbDatabaseScaleLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLcmConfigPreDeleteCommandToHclTerraform(struct?: NdbDatabaseScaleLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLcmConfigPreDeleteCommand | undefined) {
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

export class NdbDatabaseScaleLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLcmConfigPreDeleteCommandOutputReference {
    return new NdbDatabaseScaleLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLcmConfigRefreshDetails {
}

export function ndbDatabaseScaleLcmConfigRefreshDetailsToTerraform(struct?: NdbDatabaseScaleLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLcmConfigRefreshDetailsToHclTerraform(struct?: NdbDatabaseScaleLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLcmConfigRefreshDetails | undefined) {
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

export class NdbDatabaseScaleLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLcmConfigRefreshDetailsOutputReference {
    return new NdbDatabaseScaleLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLcmConfig {
}

export function ndbDatabaseScaleLcmConfigToTerraform(struct?: NdbDatabaseScaleLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLcmConfigToHclTerraform(struct?: NdbDatabaseScaleLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new NdbDatabaseScaleLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new NdbDatabaseScaleLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new NdbDatabaseScaleLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new NdbDatabaseScaleLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class NdbDatabaseScaleLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLcmConfigOutputReference {
    return new NdbDatabaseScaleLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLinkedDatabasesInfo {
}

export function ndbDatabaseScaleLinkedDatabasesInfoToTerraform(struct?: NdbDatabaseScaleLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLinkedDatabasesInfoToHclTerraform(struct?: NdbDatabaseScaleLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLinkedDatabasesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLinkedDatabasesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLinkedDatabasesInfo | undefined) {
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

export class NdbDatabaseScaleLinkedDatabasesInfoList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLinkedDatabasesInfoOutputReference {
    return new NdbDatabaseScaleLinkedDatabasesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleLinkedDatabases {
}

export function ndbDatabaseScaleLinkedDatabasesToTerraform(struct?: NdbDatabaseScaleLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleLinkedDatabasesToHclTerraform(struct?: NdbDatabaseScaleLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleLinkedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleLinkedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleLinkedDatabases | undefined) {
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
  private _info = new NdbDatabaseScaleLinkedDatabasesInfoList(this, "info", false);
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

export class NdbDatabaseScaleLinkedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleLinkedDatabasesOutputReference {
    return new NdbDatabaseScaleLinkedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleProperties {
}

export function ndbDatabaseScalePropertiesToTerraform(struct?: NdbDatabaseScaleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScalePropertiesToHclTerraform(struct?: NdbDatabaseScaleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScalePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleProperties | undefined) {
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

export class NdbDatabaseScalePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScalePropertiesOutputReference {
    return new NdbDatabaseScalePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineProperties {
}

export function ndbDatabaseScaleTimeMachinePropertiesToTerraform(struct?: NdbDatabaseScaleTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachinePropertiesToHclTerraform(struct?: NdbDatabaseScaleTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineProperties | undefined) {
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

export class NdbDatabaseScaleTimeMachinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachinePropertiesOutputReference {
    return new NdbDatabaseScaleTimeMachinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleContinuousSchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleContinuousScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleContinuousScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleContinuousScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleContinuousSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleContinuousSchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleContinuousScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleContinuousScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleContinuousScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleDailySchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleDailyScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleDailyScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleDailySchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleDailyScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleMonthlySchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleMonthlyScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleMonthlyScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleMonthlySchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleMonthlyScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleQuartelySchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleQuartelyScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleQuartelyScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleQuartelyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleQuartelySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleQuartelySchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleQuartelyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleQuartelyScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleQuartelyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDay {
}

export function ndbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDay | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleWeeklySchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleWeeklyScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleWeeklyScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleWeeklySchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleWeeklyScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineScheduleYearlySchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleYearlyScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleYearlyScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineScheduleYearlySchedule | undefined) {
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

export class NdbDatabaseScaleTimeMachineScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleYearlyScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineSchedule {
}

export function ndbDatabaseScaleTimeMachineScheduleToTerraform(struct?: NdbDatabaseScaleTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineScheduleToHclTerraform(struct?: NdbDatabaseScaleTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_schedule - computed: true, optional: false, required: false
  private _continuousSchedule = new NdbDatabaseScaleTimeMachineScheduleContinuousScheduleList(this, "continuous_schedule", false);
  public get continuousSchedule() {
    return this._continuousSchedule;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new NdbDatabaseScaleTimeMachineScheduleDailyScheduleList(this, "daily_schedule", false);
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
  private _monthlySchedule = new NdbDatabaseScaleTimeMachineScheduleMonthlyScheduleList(this, "monthly_schedule", false);
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
  private _quartelySchedule = new NdbDatabaseScaleTimeMachineScheduleQuartelyScheduleList(this, "quartely_schedule", false);
  public get quartelySchedule() {
    return this._quartelySchedule;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // snapshot_time_of_day - computed: true, optional: false, required: false
  private _snapshotTimeOfDay = new NdbDatabaseScaleTimeMachineScheduleSnapshotTimeOfDayList(this, "snapshot_time_of_day", false);
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
  private _weeklySchedule = new NdbDatabaseScaleTimeMachineScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new NdbDatabaseScaleTimeMachineScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class NdbDatabaseScaleTimeMachineScheduleList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineScheduleOutputReference {
    return new NdbDatabaseScaleTimeMachineScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineSla {
}

export function ndbDatabaseScaleTimeMachineSlaToTerraform(struct?: NdbDatabaseScaleTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineSlaToHclTerraform(struct?: NdbDatabaseScaleTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineSla | undefined) {
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

export class NdbDatabaseScaleTimeMachineSlaList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineSlaOutputReference {
    return new NdbDatabaseScaleTimeMachineSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachineTags {
}

export function ndbDatabaseScaleTimeMachineTagsToTerraform(struct?: NdbDatabaseScaleTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineTagsToHclTerraform(struct?: NdbDatabaseScaleTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachineTags | undefined) {
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

export class NdbDatabaseScaleTimeMachineTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineTagsOutputReference {
    return new NdbDatabaseScaleTimeMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeMachine {
}

export function ndbDatabaseScaleTimeMachineToTerraform(struct?: NdbDatabaseScaleTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseScaleTimeMachineToHclTerraform(struct?: NdbDatabaseScaleTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseScaleTimeMachineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTimeMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeMachine | undefined) {
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
  private _properties = new NdbDatabaseScaleTimeMachinePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new NdbDatabaseScaleTimeMachineScheduleList(this, "schedule", false);
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
  private _sla = new NdbDatabaseScaleTimeMachineSlaList(this, "sla", false);
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
  private _tags = new NdbDatabaseScaleTimeMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NdbDatabaseScaleTimeMachineList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseScaleTimeMachineOutputReference {
    return new NdbDatabaseScaleTimeMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#tag_id NdbDatabaseScale#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#tag_name NdbDatabaseScale#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#value NdbDatabaseScale#value}
  */
  readonly value?: string;
}

export function ndbDatabaseScaleTagsToTerraform(struct?: NdbDatabaseScaleTags | cdktf.IResolvable): any {
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


export function ndbDatabaseScaleTagsToHclTerraform(struct?: NdbDatabaseScaleTags | cdktf.IResolvable): any {
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

export class NdbDatabaseScaleTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseScaleTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDatabaseScaleTags | cdktf.IResolvable | undefined) {
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

export class NdbDatabaseScaleTagsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseScaleTags[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseScaleTagsOutputReference {
    return new NdbDatabaseScaleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseScaleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#create NdbDatabaseScale#create}
  */
  readonly create?: string;
}

export function ndbDatabaseScaleTimeoutsToTerraform(struct?: NdbDatabaseScaleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function ndbDatabaseScaleTimeoutsToHclTerraform(struct?: NdbDatabaseScaleTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseScaleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbDatabaseScaleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseScaleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale nutanix_ndb_database_scale}
*/
export class NdbDatabaseScale extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_database_scale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbDatabaseScale resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbDatabaseScale to import
  * @param importFromId The id of the existing NdbDatabaseScale that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbDatabaseScale to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_database_scale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_scale nutanix_ndb_database_scale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbDatabaseScaleConfig
  */
  public constructor(scope: Construct, id: string, config: NdbDatabaseScaleConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_database_scale',
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
    this._applicationType = config.applicationType;
    this._dataStorageSize = config.dataStorageSize;
    this._databaseUuid = config.databaseUuid;
    this._id = config.id;
    this._postScriptCmd = config.postScriptCmd;
    this._preScriptCmd = config.preScriptCmd;
    this._scaleCount = config.scaleCount;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: false, optional: false, required: true
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // clone - computed: true, optional: false, required: false
  public get clone() {
    return this.getBooleanAttribute('clone');
  }

  // data_storage_size - computed: false, optional: false, required: true
  private _dataStorageSize?: number; 
  public get dataStorageSize() {
    return this.getNumberAttribute('data_storage_size');
  }
  public set dataStorageSize(value: number) {
    this._dataStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInput() {
    return this._dataStorageSize;
  }

  // database_cluster_type - computed: true, optional: false, required: false
  public get databaseClusterType() {
    return this.getStringAttribute('database_cluster_type');
  }

  // database_instance_id - computed: true, optional: false, required: false
  public get databaseInstanceId() {
    return this.getStringAttribute('database_instance_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_nodes - computed: true, optional: false, required: false
  private _databaseNodes = new NdbDatabaseScaleDatabaseNodesList(this, "database_nodes", false);
  public get databaseNodes() {
    return this._databaseNodes;
  }

  // database_uuid - computed: false, optional: false, required: true
  private _databaseUuid?: string; 
  public get databaseUuid() {
    return this.getStringAttribute('database_uuid');
  }
  public set databaseUuid(value: string) {
    this._databaseUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUuidInput() {
    return this._databaseUuid;
  }

  // databasetype - computed: true, optional: false, required: false
  public get databasetype() {
    return this.getStringAttribute('databasetype');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
  private _info = new NdbDatabaseScaleInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new NdbDatabaseScaleLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // linked_databases - computed: true, optional: false, required: false
  private _linkedDatabases = new NdbDatabaseScaleLinkedDatabasesList(this, "linked_databases", false);
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

  // parent_database_id - computed: true, optional: false, required: false
  public get parentDatabaseId() {
    return this.getStringAttribute('parent_database_id');
  }

  // parent_source_database_id - computed: true, optional: false, required: false
  public get parentSourceDatabaseId() {
    return this.getStringAttribute('parent_source_database_id');
  }

  // post_script_cmd - computed: false, optional: true, required: false
  private _postScriptCmd?: string; 
  public get postScriptCmd() {
    return this.getStringAttribute('post_script_cmd');
  }
  public set postScriptCmd(value: string) {
    this._postScriptCmd = value;
  }
  public resetPostScriptCmd() {
    this._postScriptCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptCmdInput() {
    return this._postScriptCmd;
  }

  // pre_script_cmd - computed: false, optional: true, required: false
  private _preScriptCmd?: string; 
  public get preScriptCmd() {
    return this.getStringAttribute('pre_script_cmd');
  }
  public set preScriptCmd(value: string) {
    this._preScriptCmd = value;
  }
  public resetPreScriptCmd() {
    this._preScriptCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptCmdInput() {
    return this._preScriptCmd;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbDatabaseScalePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scale_count - computed: false, optional: true, required: false
  private _scaleCount?: number; 
  public get scaleCount() {
    return this.getNumberAttribute('scale_count');
  }
  public set scaleCount(value: number) {
    this._scaleCount = value;
  }
  public resetScaleCount() {
    this._scaleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleCountInput() {
    return this._scaleCount;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine - computed: true, optional: false, required: false
  private _timeMachine = new NdbDatabaseScaleTimeMachineList(this, "time_machine", false);
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

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbDatabaseScaleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbDatabaseScaleTags[] | cdktf.IResolvable) {
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
  private _timeouts = new NdbDatabaseScaleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbDatabaseScaleTimeouts) {
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
      application_type: cdktf.stringToTerraform(this._applicationType),
      data_storage_size: cdktf.numberToTerraform(this._dataStorageSize),
      database_uuid: cdktf.stringToTerraform(this._databaseUuid),
      id: cdktf.stringToTerraform(this._id),
      post_script_cmd: cdktf.stringToTerraform(this._postScriptCmd),
      pre_script_cmd: cdktf.stringToTerraform(this._preScriptCmd),
      scale_count: cdktf.numberToTerraform(this._scaleCount),
      tags: cdktf.listMapper(ndbDatabaseScaleTagsToTerraform, true)(this._tags.internalValue),
      timeouts: ndbDatabaseScaleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_storage_size: {
        value: cdktf.numberToHclTerraform(this._dataStorageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_uuid: {
        value: cdktf.stringToHclTerraform(this._databaseUuid),
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
      post_script_cmd: {
        value: cdktf.stringToHclTerraform(this._postScriptCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_script_cmd: {
        value: cdktf.stringToHclTerraform(this._preScriptCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_count: {
        value: cdktf.numberToHclTerraform(this._scaleCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbDatabaseScaleTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabaseScaleTagsList",
      },
      timeouts: {
        value: ndbDatabaseScaleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbDatabaseScaleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
