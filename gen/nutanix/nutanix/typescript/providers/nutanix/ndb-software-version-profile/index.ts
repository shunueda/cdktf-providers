// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbSoftwareVersionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#available_cluster_ids NdbSoftwareVersionProfile#available_cluster_ids}
  */
  readonly availableClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#description NdbSoftwareVersionProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#engine_type NdbSoftwareVersionProfile#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#id NdbSoftwareVersionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#name NdbSoftwareVersionProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#profile_id NdbSoftwareVersionProfile#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#status NdbSoftwareVersionProfile#status}
  */
  readonly status?: string;
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#postgres_database NdbSoftwareVersionProfile#postgres_database}
  */
  readonly postgresDatabase?: NdbSoftwareVersionProfilePostgresDatabase[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#timeouts NdbSoftwareVersionProfile#timeouts}
  */
  readonly timeouts?: NdbSoftwareVersionProfileTimeouts;
}
export interface NdbSoftwareVersionProfileProperties {
}

export function ndbSoftwareVersionProfilePropertiesToTerraform(struct?: NdbSoftwareVersionProfileProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbSoftwareVersionProfilePropertiesToHclTerraform(struct?: NdbSoftwareVersionProfileProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbSoftwareVersionProfilePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbSoftwareVersionProfileProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbSoftwareVersionProfileProperties | undefined) {
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

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbSoftwareVersionProfilePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbSoftwareVersionProfilePropertiesOutputReference {
    return new NdbSoftwareVersionProfilePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbSoftwareVersionProfileVersionClusterAssociationProperties {
}

export function ndbSoftwareVersionProfileVersionClusterAssociationPropertiesToTerraform(struct?: NdbSoftwareVersionProfileVersionClusterAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbSoftwareVersionProfileVersionClusterAssociationPropertiesToHclTerraform(struct?: NdbSoftwareVersionProfileVersionClusterAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbSoftwareVersionProfileVersionClusterAssociationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbSoftwareVersionProfileVersionClusterAssociationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbSoftwareVersionProfileVersionClusterAssociationProperties | undefined) {
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

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbSoftwareVersionProfileVersionClusterAssociationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbSoftwareVersionProfileVersionClusterAssociationPropertiesOutputReference {
    return new NdbSoftwareVersionProfileVersionClusterAssociationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbSoftwareVersionProfileVersionClusterAssociation {
}

export function ndbSoftwareVersionProfileVersionClusterAssociationToTerraform(struct?: NdbSoftwareVersionProfileVersionClusterAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbSoftwareVersionProfileVersionClusterAssociationToHclTerraform(struct?: NdbSoftwareVersionProfileVersionClusterAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbSoftwareVersionProfileVersionClusterAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbSoftwareVersionProfileVersionClusterAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbSoftwareVersionProfileVersionClusterAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // optimized_for_provisioning - computed: true, optional: false, required: false
  public get optimizedForProvisioning() {
    return this.getBooleanAttribute('optimized_for_provisioning');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // profile_version_id - computed: true, optional: false, required: false
  public get profileVersionId() {
    return this.getStringAttribute('profile_version_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbSoftwareVersionProfileVersionClusterAssociationPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class NdbSoftwareVersionProfileVersionClusterAssociationList extends cdktf.ComplexList {

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
  public get(index: number): NdbSoftwareVersionProfileVersionClusterAssociationOutputReference {
    return new NdbSoftwareVersionProfileVersionClusterAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbSoftwareVersionProfilePostgresDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#db_software_notes NdbSoftwareVersionProfile#db_software_notes}
  */
  readonly dbSoftwareNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#os_notes NdbSoftwareVersionProfile#os_notes}
  */
  readonly osNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#source_dbserver_id NdbSoftwareVersionProfile#source_dbserver_id}
  */
  readonly sourceDbserverId?: string;
}

export function ndbSoftwareVersionProfilePostgresDatabaseToTerraform(struct?: NdbSoftwareVersionProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_software_notes: cdktf.stringToTerraform(struct!.dbSoftwareNotes),
    os_notes: cdktf.stringToTerraform(struct!.osNotes),
    source_dbserver_id: cdktf.stringToTerraform(struct!.sourceDbserverId),
  }
}


export function ndbSoftwareVersionProfilePostgresDatabaseToHclTerraform(struct?: NdbSoftwareVersionProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_software_notes: {
      value: cdktf.stringToHclTerraform(struct!.dbSoftwareNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_notes: {
      value: cdktf.stringToHclTerraform(struct!.osNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_dbserver_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDbserverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbSoftwareVersionProfilePostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbSoftwareVersionProfilePostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbSoftwareNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSoftwareNotes = this._dbSoftwareNotes;
    }
    if (this._osNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.osNotes = this._osNotes;
    }
    if (this._sourceDbserverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbserverId = this._sourceDbserverId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbSoftwareVersionProfilePostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbSoftwareNotes = undefined;
      this._osNotes = undefined;
      this._sourceDbserverId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbSoftwareNotes = value.dbSoftwareNotes;
      this._osNotes = value.osNotes;
      this._sourceDbserverId = value.sourceDbserverId;
    }
  }

  // db_software_notes - computed: false, optional: true, required: false
  private _dbSoftwareNotes?: string; 
  public get dbSoftwareNotes() {
    return this.getStringAttribute('db_software_notes');
  }
  public set dbSoftwareNotes(value: string) {
    this._dbSoftwareNotes = value;
  }
  public resetDbSoftwareNotes() {
    this._dbSoftwareNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSoftwareNotesInput() {
    return this._dbSoftwareNotes;
  }

  // os_notes - computed: false, optional: true, required: false
  private _osNotes?: string; 
  public get osNotes() {
    return this.getStringAttribute('os_notes');
  }
  public set osNotes(value: string) {
    this._osNotes = value;
  }
  public resetOsNotes() {
    this._osNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNotesInput() {
    return this._osNotes;
  }

  // source_dbserver_id - computed: false, optional: true, required: false
  private _sourceDbserverId?: string; 
  public get sourceDbserverId() {
    return this.getStringAttribute('source_dbserver_id');
  }
  public set sourceDbserverId(value: string) {
    this._sourceDbserverId = value;
  }
  public resetSourceDbserverId() {
    this._sourceDbserverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbserverIdInput() {
    return this._sourceDbserverId;
  }
}

export class NdbSoftwareVersionProfilePostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbSoftwareVersionProfilePostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbSoftwareVersionProfilePostgresDatabaseOutputReference {
    return new NdbSoftwareVersionProfilePostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbSoftwareVersionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#create NdbSoftwareVersionProfile#create}
  */
  readonly create?: string;
}

export function ndbSoftwareVersionProfileTimeoutsToTerraform(struct?: NdbSoftwareVersionProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function ndbSoftwareVersionProfileTimeoutsToHclTerraform(struct?: NdbSoftwareVersionProfileTimeouts | cdktf.IResolvable): any {
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

export class NdbSoftwareVersionProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbSoftwareVersionProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbSoftwareVersionProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile nutanix_ndb_software_version_profile}
*/
export class NdbSoftwareVersionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_software_version_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbSoftwareVersionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbSoftwareVersionProfile to import
  * @param importFromId The id of the existing NdbSoftwareVersionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbSoftwareVersionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_software_version_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_software_version_profile nutanix_ndb_software_version_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbSoftwareVersionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NdbSoftwareVersionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_software_version_profile',
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
    this._availableClusterIds = config.availableClusterIds;
    this._description = config.description;
    this._engineType = config.engineType;
    this._id = config.id;
    this._name = config.name;
    this._profileId = config.profileId;
    this._status = config.status;
    this._postgresDatabase.internalValue = config.postgresDatabase;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_cluster_ids - computed: false, optional: true, required: false
  private _availableClusterIds?: string[]; 
  public get availableClusterIds() {
    return this.getListAttribute('available_cluster_ids');
  }
  public set availableClusterIds(value: string[]) {
    this._availableClusterIds = value;
  }
  public resetAvailableClusterIds() {
    this._availableClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableClusterIdsInput() {
    return this._availableClusterIds;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
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

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbSoftwareVersionProfilePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // properties_map - computed: true, optional: false, required: false
  private _propertiesMap = new cdktf.StringMap(this, "properties_map");
  public get propertiesMap() {
    return this._propertiesMap;
  }

  // published - computed: true, optional: false, required: false
  public get published() {
    return this.getBooleanAttribute('published');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system_profile - computed: true, optional: false, required: false
  public get systemProfile() {
    return this.getBooleanAttribute('system_profile');
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_cluster_association - computed: true, optional: false, required: false
  private _versionClusterAssociation = new NdbSoftwareVersionProfileVersionClusterAssociationList(this, "version_cluster_association", false);
  public get versionClusterAssociation() {
    return this._versionClusterAssociation;
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbSoftwareVersionProfilePostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbSoftwareVersionProfilePostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbSoftwareVersionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbSoftwareVersionProfileTimeouts) {
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
      available_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableClusterIds),
      description: cdktf.stringToTerraform(this._description),
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      profile_id: cdktf.stringToTerraform(this._profileId),
      status: cdktf.stringToTerraform(this._status),
      postgres_database: cdktf.listMapper(ndbSoftwareVersionProfilePostgresDatabaseToTerraform, true)(this._postgresDatabase.internalValue),
      timeouts: ndbSoftwareVersionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availableClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_database: {
        value: cdktf.listMapperHcl(ndbSoftwareVersionProfilePostgresDatabaseToHclTerraform, true)(this._postgresDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbSoftwareVersionProfilePostgresDatabaseList",
      },
      timeouts: {
        value: ndbSoftwareVersionProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbSoftwareVersionProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
