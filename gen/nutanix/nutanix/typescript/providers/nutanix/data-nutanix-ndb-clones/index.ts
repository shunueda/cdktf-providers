// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNdbClonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#id DataNutanixNdbClones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#filters DataNutanixNdbClones#filters}
  */
  readonly filters?: DataNutanixNdbClonesFilters[] | cdktf.IResolvable;
}
export interface DataNutanixNdbClonesClonesDatabaseNodesInfo {
}

export function dataNutanixNdbClonesClonesDatabaseNodesInfoToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesInfoToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodesInfo | undefined) {
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

export class DataNutanixNdbClonesClonesDatabaseNodesInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesInfoOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesDatabaseNodesProperties {
}

export function dataNutanixNdbClonesClonesDatabaseNodesPropertiesToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesPropertiesToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodesProperties | undefined) {
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

export class DataNutanixNdbClonesClonesDatabaseNodesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesPropertiesOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainProperties {
}

export function dataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainProperties | undefined) {
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

export class DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesDatabaseNodesProtectionDomain {
}

export function dataNutanixNdbClonesClonesDatabaseNodesProtectionDomainToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesProtectionDomainToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodesProtectionDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodesProtectionDomain | undefined) {
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
  private _properties = new DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainPropertiesList(this, "properties", false);
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

export class DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesDatabaseNodesTags {
}

export function dataNutanixNdbClonesClonesDatabaseNodesTagsToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesTagsToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodesTags | undefined) {
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

export class DataNutanixNdbClonesClonesDatabaseNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesTagsOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesDatabaseNodes {
}

export function dataNutanixNdbClonesClonesDatabaseNodesToTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesDatabaseNodesToHclTerraform(struct?: DataNutanixNdbClonesClonesDatabaseNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesDatabaseNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesDatabaseNodes | undefined) {
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
  private _info = new DataNutanixNdbClonesClonesDatabaseNodesInfoList(this, "info", false);
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
  private _properties = new DataNutanixNdbClonesClonesDatabaseNodesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain - computed: true, optional: false, required: false
  private _protectionDomain = new DataNutanixNdbClonesClonesDatabaseNodesProtectionDomainList(this, "protection_domain", false);
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
  private _tags = new DataNutanixNdbClonesClonesDatabaseNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataNutanixNdbClonesClonesDatabaseNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesDatabaseNodesOutputReference {
    return new DataNutanixNdbClonesClonesDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParam {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParam | undefined) {
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

export class DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorage {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorage | undefined) {
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

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisks {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisks | undefined) {
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

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisks {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisks | undefined) {
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

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsStorage {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsStorageToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new DataNutanixNdbClonesClonesInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataNutanixNdbClonesClonesInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new DataNutanixNdbClonesClonesInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsStorageOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigsVmProperties {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigsVmProperties | undefined) {
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

export class DataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfoBpgConfigs {
}

export function dataNutanixNdbClonesClonesInfoBpgConfigsToTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoBpgConfigsToHclTerraform(struct?: DataNutanixNdbClonesClonesInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new DataNutanixNdbClonesClonesInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataNutanixNdbClonesClonesInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new DataNutanixNdbClonesClonesInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class DataNutanixNdbClonesClonesInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoBpgConfigsOutputReference {
    return new DataNutanixNdbClonesClonesInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesInfo {
}

export function dataNutanixNdbClonesClonesInfoToTerraform(struct?: DataNutanixNdbClonesClonesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesInfoToHclTerraform(struct?: DataNutanixNdbClonesClonesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new DataNutanixNdbClonesClonesInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class DataNutanixNdbClonesClonesInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesInfoOutputReference {
    return new DataNutanixNdbClonesClonesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLcmConfigExpiryDetails {
}

export function dataNutanixNdbClonesClonesLcmConfigExpiryDetailsToTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLcmConfigExpiryDetailsToHclTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLcmConfigExpiryDetails | undefined) {
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

export class DataNutanixNdbClonesClonesLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLcmConfigExpiryDetailsOutputReference {
    return new DataNutanixNdbClonesClonesLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLcmConfigPostDeleteCommand {
}

export function dataNutanixNdbClonesClonesLcmConfigPostDeleteCommandToTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLcmConfigPostDeleteCommandToHclTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLcmConfigPostDeleteCommand | undefined) {
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

export class DataNutanixNdbClonesClonesLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLcmConfigPostDeleteCommandOutputReference {
    return new DataNutanixNdbClonesClonesLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLcmConfigPreDeleteCommand {
}

export function dataNutanixNdbClonesClonesLcmConfigPreDeleteCommandToTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLcmConfigPreDeleteCommandToHclTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLcmConfigPreDeleteCommand | undefined) {
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

export class DataNutanixNdbClonesClonesLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLcmConfigPreDeleteCommandOutputReference {
    return new DataNutanixNdbClonesClonesLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLcmConfigRefreshDetails {
}

export function dataNutanixNdbClonesClonesLcmConfigRefreshDetailsToTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLcmConfigRefreshDetailsToHclTerraform(struct?: DataNutanixNdbClonesClonesLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLcmConfigRefreshDetails | undefined) {
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

export class DataNutanixNdbClonesClonesLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLcmConfigRefreshDetailsOutputReference {
    return new DataNutanixNdbClonesClonesLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLcmConfig {
}

export function dataNutanixNdbClonesClonesLcmConfigToTerraform(struct?: DataNutanixNdbClonesClonesLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLcmConfigToHclTerraform(struct?: DataNutanixNdbClonesClonesLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new DataNutanixNdbClonesClonesLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new DataNutanixNdbClonesClonesLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new DataNutanixNdbClonesClonesLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new DataNutanixNdbClonesClonesLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class DataNutanixNdbClonesClonesLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLcmConfigOutputReference {
    return new DataNutanixNdbClonesClonesLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLinkedDatabasesInfo {
}

export function dataNutanixNdbClonesClonesLinkedDatabasesInfoToTerraform(struct?: DataNutanixNdbClonesClonesLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLinkedDatabasesInfoToHclTerraform(struct?: DataNutanixNdbClonesClonesLinkedDatabasesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLinkedDatabasesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLinkedDatabasesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLinkedDatabasesInfo | undefined) {
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

export class DataNutanixNdbClonesClonesLinkedDatabasesInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLinkedDatabasesInfoOutputReference {
    return new DataNutanixNdbClonesClonesLinkedDatabasesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesLinkedDatabases {
}

export function dataNutanixNdbClonesClonesLinkedDatabasesToTerraform(struct?: DataNutanixNdbClonesClonesLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesLinkedDatabasesToHclTerraform(struct?: DataNutanixNdbClonesClonesLinkedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesLinkedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesLinkedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesLinkedDatabases | undefined) {
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
  private _info = new DataNutanixNdbClonesClonesLinkedDatabasesInfoList(this, "info", false);
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

export class DataNutanixNdbClonesClonesLinkedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesLinkedDatabasesOutputReference {
    return new DataNutanixNdbClonesClonesLinkedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesProperties {
}

export function dataNutanixNdbClonesClonesPropertiesToTerraform(struct?: DataNutanixNdbClonesClonesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesPropertiesToHclTerraform(struct?: DataNutanixNdbClonesClonesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesProperties | undefined) {
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

export class DataNutanixNdbClonesClonesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesPropertiesOutputReference {
    return new DataNutanixNdbClonesClonesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTags {
}

export function dataNutanixNdbClonesClonesTagsToTerraform(struct?: DataNutanixNdbClonesClonesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTagsToHclTerraform(struct?: DataNutanixNdbClonesClonesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTags | undefined) {
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

export class DataNutanixNdbClonesClonesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTagsOutputReference {
    return new DataNutanixNdbClonesClonesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineProperties {
}

export function dataNutanixNdbClonesClonesTimeMachinePropertiesToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachinePropertiesToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineProperties | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachinePropertiesOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleContinuousSchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleContinuousSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleContinuousSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleContinuousSchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleDailySchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleDailySchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleMonthlySchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleMonthlySchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleQuartelySchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleQuartelySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleQuartelySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleQuartelySchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDay {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDay | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleWeeklySchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleWeeklySchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineScheduleYearlySchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineScheduleYearlySchedule | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineSchedule {
}

export function dataNutanixNdbClonesClonesTimeMachineScheduleToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineScheduleToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_schedule - computed: true, optional: false, required: false
  private _continuousSchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleContinuousScheduleList(this, "continuous_schedule", false);
  public get continuousSchedule() {
    return this._continuousSchedule;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleDailyScheduleList(this, "daily_schedule", false);
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
  private _monthlySchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleMonthlyScheduleList(this, "monthly_schedule", false);
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
  private _quartelySchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleQuartelyScheduleList(this, "quartely_schedule", false);
  public get quartelySchedule() {
    return this._quartelySchedule;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // snapshot_time_of_day - computed: true, optional: false, required: false
  private _snapshotTimeOfDay = new DataNutanixNdbClonesClonesTimeMachineScheduleSnapshotTimeOfDayList(this, "snapshot_time_of_day", false);
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
  private _weeklySchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new DataNutanixNdbClonesClonesTimeMachineScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class DataNutanixNdbClonesClonesTimeMachineScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineScheduleOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineSla {
}

export function dataNutanixNdbClonesClonesTimeMachineSlaToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineSlaToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineSla | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineSlaList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineSlaOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachineTags {
}

export function dataNutanixNdbClonesClonesTimeMachineTagsToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineTagsToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachineTags | undefined) {
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

export class DataNutanixNdbClonesClonesTimeMachineTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineTagsOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClonesTimeMachine {
}

export function dataNutanixNdbClonesClonesTimeMachineToTerraform(struct?: DataNutanixNdbClonesClonesTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesTimeMachineToHclTerraform(struct?: DataNutanixNdbClonesClonesTimeMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesTimeMachineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClonesTimeMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClonesTimeMachine | undefined) {
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
  private _properties = new DataNutanixNdbClonesClonesTimeMachinePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataNutanixNdbClonesClonesTimeMachineScheduleList(this, "schedule", false);
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
  private _sla = new DataNutanixNdbClonesClonesTimeMachineSlaList(this, "sla", false);
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
  private _tags = new DataNutanixNdbClonesClonesTimeMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNdbClonesClonesTimeMachineList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesTimeMachineOutputReference {
    return new DataNutanixNdbClonesClonesTimeMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesClones {
}

export function dataNutanixNdbClonesClonesToTerraform(struct?: DataNutanixNdbClonesClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClonesClonesToHclTerraform(struct?: DataNutanixNdbClonesClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClonesClonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesClones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesClones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clone - computed: true, optional: false, required: false
  public get clone() {
    return this.getBooleanAttribute('clone');
  }

  // clustered - computed: true, optional: false, required: false
  public get clustered() {
    return this.getBooleanAttribute('clustered');
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
  private _databaseNodes = new DataNutanixNdbClonesClonesDatabaseNodesList(this, "database_nodes", false);
  public get databaseNodes() {
    return this._databaseNodes;
  }

  // database_status - computed: true, optional: false, required: false
  public get databaseStatus() {
    return this.getStringAttribute('database_status');
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new cdktf.StringMap(this, "databases");
  public get databases() {
    return this._databases;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataNutanixNdbClonesClonesInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new DataNutanixNdbClonesClonesLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // linked_databases - computed: true, optional: false, required: false
  private _linkedDatabases = new DataNutanixNdbClonesClonesLinkedDatabasesList(this, "linked_databases", false);
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

  // parent_time_machine_id - computed: true, optional: false, required: false
  public get parentTimeMachineId() {
    return this.getStringAttribute('parent_time_machine_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataNutanixNdbClonesClonesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataNutanixNdbClonesClonesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_machine - computed: true, optional: false, required: false
  private _timeMachine = new DataNutanixNdbClonesClonesTimeMachineList(this, "time_machine", false);
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
}

export class DataNutanixNdbClonesClonesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClonesClonesOutputReference {
    return new DataNutanixNdbClonesClonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClonesFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#any_status DataNutanixNdbClones#any_status}
  */
  readonly anyStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#detailed DataNutanixNdbClones#detailed}
  */
  readonly detailed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#load_dbserver_cluster DataNutanixNdbClones#load_dbserver_cluster}
  */
  readonly loadDbserverCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#order_by_dbserver_cluster DataNutanixNdbClones#order_by_dbserver_cluster}
  */
  readonly orderByDbserverCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#order_by_dbserver_logical_cluster DataNutanixNdbClones#order_by_dbserver_logical_cluster}
  */
  readonly orderByDbserverLogicalCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#timezone DataNutanixNdbClones#timezone}
  */
  readonly timezone?: string;
}

export function dataNutanixNdbClonesFiltersToTerraform(struct?: DataNutanixNdbClonesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_status: cdktf.stringToTerraform(struct!.anyStatus),
    detailed: cdktf.stringToTerraform(struct!.detailed),
    load_dbserver_cluster: cdktf.stringToTerraform(struct!.loadDbserverCluster),
    order_by_dbserver_cluster: cdktf.stringToTerraform(struct!.orderByDbserverCluster),
    order_by_dbserver_logical_cluster: cdktf.stringToTerraform(struct!.orderByDbserverLogicalCluster),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataNutanixNdbClonesFiltersToHclTerraform(struct?: DataNutanixNdbClonesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_status: {
      value: cdktf.stringToHclTerraform(struct!.anyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detailed: {
      value: cdktf.stringToHclTerraform(struct!.detailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_dbserver_cluster: {
      value: cdktf.stringToHclTerraform(struct!.loadDbserverCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by_dbserver_cluster: {
      value: cdktf.stringToHclTerraform(struct!.orderByDbserverCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by_dbserver_logical_cluster: {
      value: cdktf.stringToHclTerraform(struct!.orderByDbserverLogicalCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixNdbClonesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClonesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyStatus = this._anyStatus;
    }
    if (this._detailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailed = this._detailed;
    }
    if (this._loadDbserverCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadDbserverCluster = this._loadDbserverCluster;
    }
    if (this._orderByDbserverCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderByDbserverCluster = this._orderByDbserverCluster;
    }
    if (this._orderByDbserverLogicalCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderByDbserverLogicalCluster = this._orderByDbserverLogicalCluster;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClonesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyStatus = undefined;
      this._detailed = undefined;
      this._loadDbserverCluster = undefined;
      this._orderByDbserverCluster = undefined;
      this._orderByDbserverLogicalCluster = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyStatus = value.anyStatus;
      this._detailed = value.detailed;
      this._loadDbserverCluster = value.loadDbserverCluster;
      this._orderByDbserverCluster = value.orderByDbserverCluster;
      this._orderByDbserverLogicalCluster = value.orderByDbserverLogicalCluster;
      this._timezone = value.timezone;
    }
  }

  // any_status - computed: false, optional: true, required: false
  private _anyStatus?: string; 
  public get anyStatus() {
    return this.getStringAttribute('any_status');
  }
  public set anyStatus(value: string) {
    this._anyStatus = value;
  }
  public resetAnyStatus() {
    this._anyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyStatusInput() {
    return this._anyStatus;
  }

  // detailed - computed: false, optional: true, required: false
  private _detailed?: string; 
  public get detailed() {
    return this.getStringAttribute('detailed');
  }
  public set detailed(value: string) {
    this._detailed = value;
  }
  public resetDetailed() {
    this._detailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedInput() {
    return this._detailed;
  }

  // load_dbserver_cluster - computed: false, optional: true, required: false
  private _loadDbserverCluster?: string; 
  public get loadDbserverCluster() {
    return this.getStringAttribute('load_dbserver_cluster');
  }
  public set loadDbserverCluster(value: string) {
    this._loadDbserverCluster = value;
  }
  public resetLoadDbserverCluster() {
    this._loadDbserverCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDbserverClusterInput() {
    return this._loadDbserverCluster;
  }

  // order_by_dbserver_cluster - computed: false, optional: true, required: false
  private _orderByDbserverCluster?: string; 
  public get orderByDbserverCluster() {
    return this.getStringAttribute('order_by_dbserver_cluster');
  }
  public set orderByDbserverCluster(value: string) {
    this._orderByDbserverCluster = value;
  }
  public resetOrderByDbserverCluster() {
    this._orderByDbserverCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByDbserverClusterInput() {
    return this._orderByDbserverCluster;
  }

  // order_by_dbserver_logical_cluster - computed: false, optional: true, required: false
  private _orderByDbserverLogicalCluster?: string; 
  public get orderByDbserverLogicalCluster() {
    return this.getStringAttribute('order_by_dbserver_logical_cluster');
  }
  public set orderByDbserverLogicalCluster(value: string) {
    this._orderByDbserverLogicalCluster = value;
  }
  public resetOrderByDbserverLogicalCluster() {
    this._orderByDbserverLogicalCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByDbserverLogicalClusterInput() {
    return this._orderByDbserverLogicalCluster;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class DataNutanixNdbClonesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataNutanixNdbClonesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixNdbClonesFiltersOutputReference {
    return new DataNutanixNdbClonesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones nutanix_ndb_clones}
*/
export class DataNutanixNdbClones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_clones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNdbClones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNdbClones to import
  * @param importFromId The id of the existing DataNutanixNdbClones that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNdbClones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_clones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clones nutanix_ndb_clones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNdbClonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNdbClonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_clones',
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
    this._id = config.id;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clones - computed: true, optional: false, required: false
  private _clones = new DataNutanixNdbClonesClonesList(this, "clones", false);
  public get clones() {
    return this._clones;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataNutanixNdbClonesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataNutanixNdbClonesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      filters: cdktf.listMapper(dataNutanixNdbClonesFiltersToTerraform, true)(this._filters.internalValue),
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
      filters: {
        value: cdktf.listMapperHcl(dataNutanixNdbClonesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixNdbClonesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
