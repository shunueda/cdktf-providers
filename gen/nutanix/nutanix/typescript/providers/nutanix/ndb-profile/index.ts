// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#description NdbProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#engine_type NdbProfile#engine_type}
  */
  readonly engineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#id NdbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#name NdbProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#published NdbProfile#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * compute_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#compute_profile NdbProfile#compute_profile}
  */
  readonly computeProfile?: NdbProfileComputeProfile[] | cdktf.IResolvable;
  /**
  * database_parameter_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#database_parameter_profile NdbProfile#database_parameter_profile}
  */
  readonly databaseParameterProfile?: NdbProfileDatabaseParameterProfile[] | cdktf.IResolvable;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#network_profile NdbProfile#network_profile}
  */
  readonly networkProfile?: NdbProfileNetworkProfile[] | cdktf.IResolvable;
  /**
  * software_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#software_profile NdbProfile#software_profile}
  */
  readonly softwareProfile?: NdbProfileSoftwareProfile;
}
export interface NdbProfileClusterAvailability {
}

export function ndbProfileClusterAvailabilityToTerraform(struct?: NdbProfileClusterAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbProfileClusterAvailabilityToHclTerraform(struct?: NdbProfileClusterAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbProfileClusterAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileClusterAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileClusterAvailability | undefined) {
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class NdbProfileClusterAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): NdbProfileClusterAvailabilityOutputReference {
    return new NdbProfileClusterAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileVersionsProperties {
}

export function ndbProfileVersionsPropertiesToTerraform(struct?: NdbProfileVersionsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbProfileVersionsPropertiesToHclTerraform(struct?: NdbProfileVersionsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbProfileVersionsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileVersionsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileVersionsProperties | undefined) {
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

export class NdbProfileVersionsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbProfileVersionsPropertiesOutputReference {
    return new NdbProfileVersionsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileVersionsVersionClusterAssociationProperties {
}

export function ndbProfileVersionsVersionClusterAssociationPropertiesToTerraform(struct?: NdbProfileVersionsVersionClusterAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbProfileVersionsVersionClusterAssociationPropertiesToHclTerraform(struct?: NdbProfileVersionsVersionClusterAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbProfileVersionsVersionClusterAssociationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileVersionsVersionClusterAssociationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileVersionsVersionClusterAssociationProperties | undefined) {
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

export class NdbProfileVersionsVersionClusterAssociationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbProfileVersionsVersionClusterAssociationPropertiesOutputReference {
    return new NdbProfileVersionsVersionClusterAssociationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileVersionsVersionClusterAssociation {
}

export function ndbProfileVersionsVersionClusterAssociationToTerraform(struct?: NdbProfileVersionsVersionClusterAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbProfileVersionsVersionClusterAssociationToHclTerraform(struct?: NdbProfileVersionsVersionClusterAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbProfileVersionsVersionClusterAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileVersionsVersionClusterAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileVersionsVersionClusterAssociation | undefined) {
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
  private _properties = new NdbProfileVersionsVersionClusterAssociationPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class NdbProfileVersionsVersionClusterAssociationList extends cdktf.ComplexList {

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
  public get(index: number): NdbProfileVersionsVersionClusterAssociationOutputReference {
    return new NdbProfileVersionsVersionClusterAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileVersions {
}

export function ndbProfileVersionsToTerraform(struct?: NdbProfileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbProfileVersionsToHclTerraform(struct?: NdbProfileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbProfileVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbProfileVersionsPropertiesList(this, "properties", false);
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_profile - computed: true, optional: false, required: false
  public get systemProfile() {
    return this.getBooleanAttribute('system_profile');
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_cluster_association - computed: true, optional: false, required: false
  private _versionClusterAssociation = new NdbProfileVersionsVersionClusterAssociationList(this, "version_cluster_association", false);
  public get versionClusterAssociation() {
    return this._versionClusterAssociation;
  }
}

export class NdbProfileVersionsList extends cdktf.ComplexList {

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
  public get(index: number): NdbProfileVersionsOutputReference {
    return new NdbProfileVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileComputeProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#core_per_cpu NdbProfile#core_per_cpu}
  */
  readonly corePerCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#cpus NdbProfile#cpus}
  */
  readonly cpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#memory_size NdbProfile#memory_size}
  */
  readonly memorySize?: string;
}

export function ndbProfileComputeProfileToTerraform(struct?: NdbProfileComputeProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_per_cpu: cdktf.stringToTerraform(struct!.corePerCpu),
    cpus: cdktf.stringToTerraform(struct!.cpus),
    memory_size: cdktf.stringToTerraform(struct!.memorySize),
  }
}


export function ndbProfileComputeProfileToHclTerraform(struct?: NdbProfileComputeProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_per_cpu: {
      value: cdktf.stringToHclTerraform(struct!.corePerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpus: {
      value: cdktf.stringToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size: {
      value: cdktf.stringToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileComputeProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileComputeProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corePerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.corePerCpu = this._corePerCpu;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileComputeProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._corePerCpu = undefined;
      this._cpus = undefined;
      this._memorySize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._corePerCpu = value.corePerCpu;
      this._cpus = value.cpus;
      this._memorySize = value.memorySize;
    }
  }

  // core_per_cpu - computed: false, optional: true, required: false
  private _corePerCpu?: string; 
  public get corePerCpu() {
    return this.getStringAttribute('core_per_cpu');
  }
  public set corePerCpu(value: string) {
    this._corePerCpu = value;
  }
  public resetCorePerCpu() {
    this._corePerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corePerCpuInput() {
    return this._corePerCpu;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: string; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: string; 
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }
  public set memorySize(value: string) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }
}

export class NdbProfileComputeProfileList extends cdktf.ComplexList {
  public internalValue? : NdbProfileComputeProfile[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileComputeProfileOutputReference {
    return new NdbProfileComputeProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileDatabaseParameterProfilePostgresDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum NdbProfile#autovacuum}
  */
  readonly autovacuum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_freeze_max_age NdbProfile#autovacuum_freeze_max_age}
  */
  readonly autovacuumFreezeMaxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_max_workers NdbProfile#autovacuum_max_workers}
  */
  readonly autovacuumMaxWorkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_vacuum_cost_delay NdbProfile#autovacuum_vacuum_cost_delay}
  */
  readonly autovacuumVacuumCostDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_vacuum_scale_factor NdbProfile#autovacuum_vacuum_scale_factor}
  */
  readonly autovacuumVacuumScaleFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_vacuum_threshold NdbProfile#autovacuum_vacuum_threshold}
  */
  readonly autovacuumVacuumThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#autovacuum_work_mem NdbProfile#autovacuum_work_mem}
  */
  readonly autovacuumWorkMem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#checkpoint_completion_target NdbProfile#checkpoint_completion_target}
  */
  readonly checkpointCompletionTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#checkpoint_timeout NdbProfile#checkpoint_timeout}
  */
  readonly checkpointTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#effective_io_concurrency NdbProfile#effective_io_concurrency}
  */
  readonly effectiveIoConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_connections NdbProfile#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_locks_per_transaction NdbProfile#max_locks_per_transaction}
  */
  readonly maxLocksPerTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_prepared_transactions NdbProfile#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_replication_slots NdbProfile#max_replication_slots}
  */
  readonly maxReplicationSlots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_wal_senders NdbProfile#max_wal_senders}
  */
  readonly maxWalSenders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_wal_size NdbProfile#max_wal_size}
  */
  readonly maxWalSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#max_worker_processes NdbProfile#max_worker_processes}
  */
  readonly maxWorkerProcesses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#min_wal_size NdbProfile#min_wal_size}
  */
  readonly minWalSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#random_page_cost NdbProfile#random_page_cost}
  */
  readonly randomPageCost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#synchronous_commit NdbProfile#synchronous_commit}
  */
  readonly synchronousCommit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#timezone NdbProfile#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#wal_buffers NdbProfile#wal_buffers}
  */
  readonly walBuffers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#wal_keep_segments NdbProfile#wal_keep_segments}
  */
  readonly walKeepSegments?: string;
}

export function ndbProfileDatabaseParameterProfilePostgresDatabaseToTerraform(struct?: NdbProfileDatabaseParameterProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autovacuum: cdktf.stringToTerraform(struct!.autovacuum),
    autovacuum_freeze_max_age: cdktf.stringToTerraform(struct!.autovacuumFreezeMaxAge),
    autovacuum_max_workers: cdktf.stringToTerraform(struct!.autovacuumMaxWorkers),
    autovacuum_vacuum_cost_delay: cdktf.stringToTerraform(struct!.autovacuumVacuumCostDelay),
    autovacuum_vacuum_scale_factor: cdktf.stringToTerraform(struct!.autovacuumVacuumScaleFactor),
    autovacuum_vacuum_threshold: cdktf.stringToTerraform(struct!.autovacuumVacuumThreshold),
    autovacuum_work_mem: cdktf.stringToTerraform(struct!.autovacuumWorkMem),
    checkpoint_completion_target: cdktf.stringToTerraform(struct!.checkpointCompletionTarget),
    checkpoint_timeout: cdktf.stringToTerraform(struct!.checkpointTimeout),
    effective_io_concurrency: cdktf.stringToTerraform(struct!.effectiveIoConcurrency),
    max_connections: cdktf.stringToTerraform(struct!.maxConnections),
    max_locks_per_transaction: cdktf.stringToTerraform(struct!.maxLocksPerTransaction),
    max_prepared_transactions: cdktf.stringToTerraform(struct!.maxPreparedTransactions),
    max_replication_slots: cdktf.stringToTerraform(struct!.maxReplicationSlots),
    max_wal_senders: cdktf.stringToTerraform(struct!.maxWalSenders),
    max_wal_size: cdktf.stringToTerraform(struct!.maxWalSize),
    max_worker_processes: cdktf.stringToTerraform(struct!.maxWorkerProcesses),
    min_wal_size: cdktf.stringToTerraform(struct!.minWalSize),
    random_page_cost: cdktf.stringToTerraform(struct!.randomPageCost),
    synchronous_commit: cdktf.stringToTerraform(struct!.synchronousCommit),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    wal_buffers: cdktf.stringToTerraform(struct!.walBuffers),
    wal_keep_segments: cdktf.stringToTerraform(struct!.walKeepSegments),
  }
}


export function ndbProfileDatabaseParameterProfilePostgresDatabaseToHclTerraform(struct?: NdbProfileDatabaseParameterProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autovacuum: {
      value: cdktf.stringToHclTerraform(struct!.autovacuum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_freeze_max_age: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumFreezeMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_max_workers: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumMaxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_vacuum_cost_delay: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumVacuumCostDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_vacuum_scale_factor: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumVacuumScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_vacuum_threshold: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumVacuumThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autovacuum_work_mem: {
      value: cdktf.stringToHclTerraform(struct!.autovacuumWorkMem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checkpoint_completion_target: {
      value: cdktf.stringToHclTerraform(struct!.checkpointCompletionTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checkpoint_timeout: {
      value: cdktf.stringToHclTerraform(struct!.checkpointTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_io_concurrency: {
      value: cdktf.stringToHclTerraform(struct!.effectiveIoConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_locks_per_transaction: {
      value: cdktf.stringToHclTerraform(struct!.maxLocksPerTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_prepared_transactions: {
      value: cdktf.stringToHclTerraform(struct!.maxPreparedTransactions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replication_slots: {
      value: cdktf.stringToHclTerraform(struct!.maxReplicationSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_wal_senders: {
      value: cdktf.stringToHclTerraform(struct!.maxWalSenders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_wal_size: {
      value: cdktf.stringToHclTerraform(struct!.maxWalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_worker_processes: {
      value: cdktf.stringToHclTerraform(struct!.maxWorkerProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_wal_size: {
      value: cdktf.stringToHclTerraform(struct!.minWalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random_page_cost: {
      value: cdktf.stringToHclTerraform(struct!.randomPageCost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synchronous_commit: {
      value: cdktf.stringToHclTerraform(struct!.synchronousCommit),
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
    wal_buffers: {
      value: cdktf.stringToHclTerraform(struct!.walBuffers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_keep_segments: {
      value: cdktf.stringToHclTerraform(struct!.walKeepSegments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileDatabaseParameterProfilePostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileDatabaseParameterProfilePostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autovacuum !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuum = this._autovacuum;
    }
    if (this._autovacuumFreezeMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumFreezeMaxAge = this._autovacuumFreezeMaxAge;
    }
    if (this._autovacuumMaxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumMaxWorkers = this._autovacuumMaxWorkers;
    }
    if (this._autovacuumVacuumCostDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostDelay = this._autovacuumVacuumCostDelay;
    }
    if (this._autovacuumVacuumScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumScaleFactor = this._autovacuumVacuumScaleFactor;
    }
    if (this._autovacuumVacuumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumThreshold = this._autovacuumVacuumThreshold;
    }
    if (this._autovacuumWorkMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumWorkMem = this._autovacuumWorkMem;
    }
    if (this._checkpointCompletionTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointCompletionTarget = this._checkpointCompletionTarget;
    }
    if (this._checkpointTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointTimeout = this._checkpointTimeout;
    }
    if (this._effectiveIoConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveIoConcurrency = this._effectiveIoConcurrency;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLocksPerTransaction = this._maxLocksPerTransaction;
    }
    if (this._maxPreparedTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedTransactions = this._maxPreparedTransactions;
    }
    if (this._maxReplicationSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicationSlots = this._maxReplicationSlots;
    }
    if (this._maxWalSenders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWalSenders = this._maxWalSenders;
    }
    if (this._maxWalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWalSize = this._maxWalSize;
    }
    if (this._maxWorkerProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerProcesses = this._maxWorkerProcesses;
    }
    if (this._minWalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWalSize = this._minWalSize;
    }
    if (this._randomPageCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomPageCost = this._randomPageCost;
    }
    if (this._synchronousCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousCommit = this._synchronousCommit;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._walBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.walBuffers = this._walBuffers;
    }
    if (this._walKeepSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.walKeepSegments = this._walKeepSegments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileDatabaseParameterProfilePostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autovacuum = undefined;
      this._autovacuumFreezeMaxAge = undefined;
      this._autovacuumMaxWorkers = undefined;
      this._autovacuumVacuumCostDelay = undefined;
      this._autovacuumVacuumScaleFactor = undefined;
      this._autovacuumVacuumThreshold = undefined;
      this._autovacuumWorkMem = undefined;
      this._checkpointCompletionTarget = undefined;
      this._checkpointTimeout = undefined;
      this._effectiveIoConcurrency = undefined;
      this._maxConnections = undefined;
      this._maxLocksPerTransaction = undefined;
      this._maxPreparedTransactions = undefined;
      this._maxReplicationSlots = undefined;
      this._maxWalSenders = undefined;
      this._maxWalSize = undefined;
      this._maxWorkerProcesses = undefined;
      this._minWalSize = undefined;
      this._randomPageCost = undefined;
      this._synchronousCommit = undefined;
      this._timezone = undefined;
      this._walBuffers = undefined;
      this._walKeepSegments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autovacuum = value.autovacuum;
      this._autovacuumFreezeMaxAge = value.autovacuumFreezeMaxAge;
      this._autovacuumMaxWorkers = value.autovacuumMaxWorkers;
      this._autovacuumVacuumCostDelay = value.autovacuumVacuumCostDelay;
      this._autovacuumVacuumScaleFactor = value.autovacuumVacuumScaleFactor;
      this._autovacuumVacuumThreshold = value.autovacuumVacuumThreshold;
      this._autovacuumWorkMem = value.autovacuumWorkMem;
      this._checkpointCompletionTarget = value.checkpointCompletionTarget;
      this._checkpointTimeout = value.checkpointTimeout;
      this._effectiveIoConcurrency = value.effectiveIoConcurrency;
      this._maxConnections = value.maxConnections;
      this._maxLocksPerTransaction = value.maxLocksPerTransaction;
      this._maxPreparedTransactions = value.maxPreparedTransactions;
      this._maxReplicationSlots = value.maxReplicationSlots;
      this._maxWalSenders = value.maxWalSenders;
      this._maxWalSize = value.maxWalSize;
      this._maxWorkerProcesses = value.maxWorkerProcesses;
      this._minWalSize = value.minWalSize;
      this._randomPageCost = value.randomPageCost;
      this._synchronousCommit = value.synchronousCommit;
      this._timezone = value.timezone;
      this._walBuffers = value.walBuffers;
      this._walKeepSegments = value.walKeepSegments;
    }
  }

  // autovacuum - computed: false, optional: true, required: false
  private _autovacuum?: string; 
  public get autovacuum() {
    return this.getStringAttribute('autovacuum');
  }
  public set autovacuum(value: string) {
    this._autovacuum = value;
  }
  public resetAutovacuum() {
    this._autovacuum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumInput() {
    return this._autovacuum;
  }

  // autovacuum_freeze_max_age - computed: false, optional: true, required: false
  private _autovacuumFreezeMaxAge?: string; 
  public get autovacuumFreezeMaxAge() {
    return this.getStringAttribute('autovacuum_freeze_max_age');
  }
  public set autovacuumFreezeMaxAge(value: string) {
    this._autovacuumFreezeMaxAge = value;
  }
  public resetAutovacuumFreezeMaxAge() {
    this._autovacuumFreezeMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumFreezeMaxAgeInput() {
    return this._autovacuumFreezeMaxAge;
  }

  // autovacuum_max_workers - computed: false, optional: true, required: false
  private _autovacuumMaxWorkers?: string; 
  public get autovacuumMaxWorkers() {
    return this.getStringAttribute('autovacuum_max_workers');
  }
  public set autovacuumMaxWorkers(value: string) {
    this._autovacuumMaxWorkers = value;
  }
  public resetAutovacuumMaxWorkers() {
    this._autovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumMaxWorkersInput() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_vacuum_cost_delay - computed: false, optional: true, required: false
  private _autovacuumVacuumCostDelay?: string; 
  public get autovacuumVacuumCostDelay() {
    return this.getStringAttribute('autovacuum_vacuum_cost_delay');
  }
  public set autovacuumVacuumCostDelay(value: string) {
    this._autovacuumVacuumCostDelay = value;
  }
  public resetAutovacuumVacuumCostDelay() {
    this._autovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostDelayInput() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_scale_factor - computed: false, optional: true, required: false
  private _autovacuumVacuumScaleFactor?: string; 
  public get autovacuumVacuumScaleFactor() {
    return this.getStringAttribute('autovacuum_vacuum_scale_factor');
  }
  public set autovacuumVacuumScaleFactor(value: string) {
    this._autovacuumVacuumScaleFactor = value;
  }
  public resetAutovacuumVacuumScaleFactor() {
    this._autovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumScaleFactorInput() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: false, optional: true, required: false
  private _autovacuumVacuumThreshold?: string; 
  public get autovacuumVacuumThreshold() {
    return this.getStringAttribute('autovacuum_vacuum_threshold');
  }
  public set autovacuumVacuumThreshold(value: string) {
    this._autovacuumVacuumThreshold = value;
  }
  public resetAutovacuumVacuumThreshold() {
    this._autovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumThresholdInput() {
    return this._autovacuumVacuumThreshold;
  }

  // autovacuum_work_mem - computed: false, optional: true, required: false
  private _autovacuumWorkMem?: string; 
  public get autovacuumWorkMem() {
    return this.getStringAttribute('autovacuum_work_mem');
  }
  public set autovacuumWorkMem(value: string) {
    this._autovacuumWorkMem = value;
  }
  public resetAutovacuumWorkMem() {
    this._autovacuumWorkMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumWorkMemInput() {
    return this._autovacuumWorkMem;
  }

  // checkpoint_completion_target - computed: false, optional: true, required: false
  private _checkpointCompletionTarget?: string; 
  public get checkpointCompletionTarget() {
    return this.getStringAttribute('checkpoint_completion_target');
  }
  public set checkpointCompletionTarget(value: string) {
    this._checkpointCompletionTarget = value;
  }
  public resetCheckpointCompletionTarget() {
    this._checkpointCompletionTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointCompletionTargetInput() {
    return this._checkpointCompletionTarget;
  }

  // checkpoint_timeout - computed: false, optional: true, required: false
  private _checkpointTimeout?: string; 
  public get checkpointTimeout() {
    return this.getStringAttribute('checkpoint_timeout');
  }
  public set checkpointTimeout(value: string) {
    this._checkpointTimeout = value;
  }
  public resetCheckpointTimeout() {
    this._checkpointTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointTimeoutInput() {
    return this._checkpointTimeout;
  }

  // effective_io_concurrency - computed: false, optional: true, required: false
  private _effectiveIoConcurrency?: string; 
  public get effectiveIoConcurrency() {
    return this.getStringAttribute('effective_io_concurrency');
  }
  public set effectiveIoConcurrency(value: string) {
    this._effectiveIoConcurrency = value;
  }
  public resetEffectiveIoConcurrency() {
    this._effectiveIoConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveIoConcurrencyInput() {
    return this._effectiveIoConcurrency;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: string; 
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }
  public set maxConnections(value: string) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_locks_per_transaction - computed: false, optional: true, required: false
  private _maxLocksPerTransaction?: string; 
  public get maxLocksPerTransaction() {
    return this.getStringAttribute('max_locks_per_transaction');
  }
  public set maxLocksPerTransaction(value: string) {
    this._maxLocksPerTransaction = value;
  }
  public resetMaxLocksPerTransaction() {
    this._maxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocksPerTransactionInput() {
    return this._maxLocksPerTransaction;
  }

  // max_prepared_transactions - computed: false, optional: true, required: false
  private _maxPreparedTransactions?: string; 
  public get maxPreparedTransactions() {
    return this.getStringAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: string) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_replication_slots - computed: false, optional: true, required: false
  private _maxReplicationSlots?: string; 
  public get maxReplicationSlots() {
    return this.getStringAttribute('max_replication_slots');
  }
  public set maxReplicationSlots(value: string) {
    this._maxReplicationSlots = value;
  }
  public resetMaxReplicationSlots() {
    this._maxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicationSlotsInput() {
    return this._maxReplicationSlots;
  }

  // max_wal_senders - computed: false, optional: true, required: false
  private _maxWalSenders?: string; 
  public get maxWalSenders() {
    return this.getStringAttribute('max_wal_senders');
  }
  public set maxWalSenders(value: string) {
    this._maxWalSenders = value;
  }
  public resetMaxWalSenders() {
    this._maxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSendersInput() {
    return this._maxWalSenders;
  }

  // max_wal_size - computed: false, optional: true, required: false
  private _maxWalSize?: string; 
  public get maxWalSize() {
    return this.getStringAttribute('max_wal_size');
  }
  public set maxWalSize(value: string) {
    this._maxWalSize = value;
  }
  public resetMaxWalSize() {
    this._maxWalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSizeInput() {
    return this._maxWalSize;
  }

  // max_worker_processes - computed: false, optional: true, required: false
  private _maxWorkerProcesses?: string; 
  public get maxWorkerProcesses() {
    return this.getStringAttribute('max_worker_processes');
  }
  public set maxWorkerProcesses(value: string) {
    this._maxWorkerProcesses = value;
  }
  public resetMaxWorkerProcesses() {
    this._maxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerProcessesInput() {
    return this._maxWorkerProcesses;
  }

  // min_wal_size - computed: false, optional: true, required: false
  private _minWalSize?: string; 
  public get minWalSize() {
    return this.getStringAttribute('min_wal_size');
  }
  public set minWalSize(value: string) {
    this._minWalSize = value;
  }
  public resetMinWalSize() {
    this._minWalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWalSizeInput() {
    return this._minWalSize;
  }

  // random_page_cost - computed: false, optional: true, required: false
  private _randomPageCost?: string; 
  public get randomPageCost() {
    return this.getStringAttribute('random_page_cost');
  }
  public set randomPageCost(value: string) {
    this._randomPageCost = value;
  }
  public resetRandomPageCost() {
    this._randomPageCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPageCostInput() {
    return this._randomPageCost;
  }

  // synchronous_commit - computed: false, optional: true, required: false
  private _synchronousCommit?: string; 
  public get synchronousCommit() {
    return this.getStringAttribute('synchronous_commit');
  }
  public set synchronousCommit(value: string) {
    this._synchronousCommit = value;
  }
  public resetSynchronousCommit() {
    this._synchronousCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousCommitInput() {
    return this._synchronousCommit;
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

  // wal_buffers - computed: false, optional: true, required: false
  private _walBuffers?: string; 
  public get walBuffers() {
    return this.getStringAttribute('wal_buffers');
  }
  public set walBuffers(value: string) {
    this._walBuffers = value;
  }
  public resetWalBuffers() {
    this._walBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walBuffersInput() {
    return this._walBuffers;
  }

  // wal_keep_segments - computed: false, optional: true, required: false
  private _walKeepSegments?: string; 
  public get walKeepSegments() {
    return this.getStringAttribute('wal_keep_segments');
  }
  public set walKeepSegments(value: string) {
    this._walKeepSegments = value;
  }
  public resetWalKeepSegments() {
    this._walKeepSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walKeepSegmentsInput() {
    return this._walKeepSegments;
  }
}

export class NdbProfileDatabaseParameterProfilePostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbProfileDatabaseParameterProfilePostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileDatabaseParameterProfilePostgresDatabaseOutputReference {
    return new NdbProfileDatabaseParameterProfilePostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileDatabaseParameterProfile {
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#postgres_database NdbProfile#postgres_database}
  */
  readonly postgresDatabase?: NdbProfileDatabaseParameterProfilePostgresDatabase[] | cdktf.IResolvable;
}

export function ndbProfileDatabaseParameterProfileToTerraform(struct?: NdbProfileDatabaseParameterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgres_database: cdktf.listMapper(ndbProfileDatabaseParameterProfilePostgresDatabaseToTerraform, true)(struct!.postgresDatabase),
  }
}


export function ndbProfileDatabaseParameterProfileToHclTerraform(struct?: NdbProfileDatabaseParameterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgres_database: {
      value: cdktf.listMapperHcl(ndbProfileDatabaseParameterProfilePostgresDatabaseToHclTerraform, true)(struct!.postgresDatabase),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileDatabaseParameterProfilePostgresDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileDatabaseParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileDatabaseParameterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresDatabase = this._postgresDatabase?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileDatabaseParameterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postgresDatabase.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postgresDatabase.internalValue = value.postgresDatabase;
    }
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbProfileDatabaseParameterProfilePostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbProfileDatabaseParameterProfilePostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }
}

export class NdbProfileDatabaseParameterProfileList extends cdktf.ComplexList {
  public internalValue? : NdbProfileDatabaseParameterProfile[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileDatabaseParameterProfileOutputReference {
    return new NdbProfileDatabaseParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileNetworkProfilePostgresDatabaseHaInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#cluster_id NdbProfile#cluster_id}
  */
  readonly clusterId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#cluster_name NdbProfile#cluster_name}
  */
  readonly clusterName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#num_of_clusters NdbProfile#num_of_clusters}
  */
  readonly numOfClusters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#vlan_name NdbProfile#vlan_name}
  */
  readonly vlanName?: string[];
}

export function ndbProfileNetworkProfilePostgresDatabaseHaInstanceToTerraform(struct?: NdbProfileNetworkProfilePostgresDatabaseHaInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterId),
    cluster_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterName),
    num_of_clusters: cdktf.stringToTerraform(struct!.numOfClusters),
    vlan_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanName),
  }
}


export function ndbProfileNetworkProfilePostgresDatabaseHaInstanceToHclTerraform(struct?: NdbProfileNetworkProfilePostgresDatabaseHaInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    num_of_clusters: {
      value: cdktf.stringToHclTerraform(struct!.numOfClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileNetworkProfilePostgresDatabaseHaInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileNetworkProfilePostgresDatabaseHaInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._numOfClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfClusters = this._numOfClusters;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileNetworkProfilePostgresDatabaseHaInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._numOfClusters = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._numOfClusters = value.numOfClusters;
      this._vlanName = value.vlanName;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string[]; 
  public get clusterId() {
    return this.getListAttribute('cluster_id');
  }
  public set clusterId(value: string[]) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string[]; 
  public get clusterName() {
    return this.getListAttribute('cluster_name');
  }
  public set clusterName(value: string[]) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // num_of_clusters - computed: false, optional: true, required: false
  private _numOfClusters?: string; 
  public get numOfClusters() {
    return this.getStringAttribute('num_of_clusters');
  }
  public set numOfClusters(value: string) {
    this._numOfClusters = value;
  }
  public resetNumOfClusters() {
    this._numOfClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfClustersInput() {
    return this._numOfClusters;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string[]; 
  public get vlanName() {
    return this.getListAttribute('vlan_name');
  }
  public set vlanName(value: string[]) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class NdbProfileNetworkProfilePostgresDatabaseHaInstanceList extends cdktf.ComplexList {
  public internalValue? : NdbProfileNetworkProfilePostgresDatabaseHaInstance[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileNetworkProfilePostgresDatabaseHaInstanceOutputReference {
    return new NdbProfileNetworkProfilePostgresDatabaseHaInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileNetworkProfilePostgresDatabaseSingleInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#enable_ip_address_selection NdbProfile#enable_ip_address_selection}
  */
  readonly enableIpAddressSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#vlan_name NdbProfile#vlan_name}
  */
  readonly vlanName?: string;
}

export function ndbProfileNetworkProfilePostgresDatabaseSingleInstanceToTerraform(struct?: NdbProfileNetworkProfilePostgresDatabaseSingleInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ip_address_selection: cdktf.stringToTerraform(struct!.enableIpAddressSelection),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function ndbProfileNetworkProfilePostgresDatabaseSingleInstanceToHclTerraform(struct?: NdbProfileNetworkProfilePostgresDatabaseSingleInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ip_address_selection: {
      value: cdktf.stringToHclTerraform(struct!.enableIpAddressSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileNetworkProfilePostgresDatabaseSingleInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileNetworkProfilePostgresDatabaseSingleInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIpAddressSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpAddressSelection = this._enableIpAddressSelection;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileNetworkProfilePostgresDatabaseSingleInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIpAddressSelection = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIpAddressSelection = value.enableIpAddressSelection;
      this._vlanName = value.vlanName;
    }
  }

  // enable_ip_address_selection - computed: false, optional: true, required: false
  private _enableIpAddressSelection?: string; 
  public get enableIpAddressSelection() {
    return this.getStringAttribute('enable_ip_address_selection');
  }
  public set enableIpAddressSelection(value: string) {
    this._enableIpAddressSelection = value;
  }
  public resetEnableIpAddressSelection() {
    this._enableIpAddressSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpAddressSelectionInput() {
    return this._enableIpAddressSelection;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class NdbProfileNetworkProfilePostgresDatabaseSingleInstanceList extends cdktf.ComplexList {
  public internalValue? : NdbProfileNetworkProfilePostgresDatabaseSingleInstance[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileNetworkProfilePostgresDatabaseSingleInstanceOutputReference {
    return new NdbProfileNetworkProfilePostgresDatabaseSingleInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileNetworkProfilePostgresDatabase {
  /**
  * ha_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#ha_instance NdbProfile#ha_instance}
  */
  readonly haInstance?: NdbProfileNetworkProfilePostgresDatabaseHaInstance[] | cdktf.IResolvable;
  /**
  * single_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#single_instance NdbProfile#single_instance}
  */
  readonly singleInstance?: NdbProfileNetworkProfilePostgresDatabaseSingleInstance[] | cdktf.IResolvable;
}

export function ndbProfileNetworkProfilePostgresDatabaseToTerraform(struct?: NdbProfileNetworkProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_instance: cdktf.listMapper(ndbProfileNetworkProfilePostgresDatabaseHaInstanceToTerraform, true)(struct!.haInstance),
    single_instance: cdktf.listMapper(ndbProfileNetworkProfilePostgresDatabaseSingleInstanceToTerraform, true)(struct!.singleInstance),
  }
}


export function ndbProfileNetworkProfilePostgresDatabaseToHclTerraform(struct?: NdbProfileNetworkProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_instance: {
      value: cdktf.listMapperHcl(ndbProfileNetworkProfilePostgresDatabaseHaInstanceToHclTerraform, true)(struct!.haInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileNetworkProfilePostgresDatabaseHaInstanceList",
    },
    single_instance: {
      value: cdktf.listMapperHcl(ndbProfileNetworkProfilePostgresDatabaseSingleInstanceToHclTerraform, true)(struct!.singleInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileNetworkProfilePostgresDatabaseSingleInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileNetworkProfilePostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileNetworkProfilePostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haInstance = this._haInstance?.internalValue;
    }
    if (this._singleInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleInstance = this._singleInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileNetworkProfilePostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haInstance.internalValue = undefined;
      this._singleInstance.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haInstance.internalValue = value.haInstance;
      this._singleInstance.internalValue = value.singleInstance;
    }
  }

  // ha_instance - computed: false, optional: true, required: false
  private _haInstance = new NdbProfileNetworkProfilePostgresDatabaseHaInstanceList(this, "ha_instance", false);
  public get haInstance() {
    return this._haInstance;
  }
  public putHaInstance(value: NdbProfileNetworkProfilePostgresDatabaseHaInstance[] | cdktf.IResolvable) {
    this._haInstance.internalValue = value;
  }
  public resetHaInstance() {
    this._haInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInstanceInput() {
    return this._haInstance.internalValue;
  }

  // single_instance - computed: false, optional: true, required: false
  private _singleInstance = new NdbProfileNetworkProfilePostgresDatabaseSingleInstanceList(this, "single_instance", false);
  public get singleInstance() {
    return this._singleInstance;
  }
  public putSingleInstance(value: NdbProfileNetworkProfilePostgresDatabaseSingleInstance[] | cdktf.IResolvable) {
    this._singleInstance.internalValue = value;
  }
  public resetSingleInstance() {
    this._singleInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInstanceInput() {
    return this._singleInstance.internalValue;
  }
}

export class NdbProfileNetworkProfilePostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbProfileNetworkProfilePostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileNetworkProfilePostgresDatabaseOutputReference {
    return new NdbProfileNetworkProfilePostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileNetworkProfileVersionClusterAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#nx_cluster_id NdbProfile#nx_cluster_id}
  */
  readonly nxClusterId: string;
}

export function ndbProfileNetworkProfileVersionClusterAssociationToTerraform(struct?: NdbProfileNetworkProfileVersionClusterAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nx_cluster_id: cdktf.stringToTerraform(struct!.nxClusterId),
  }
}


export function ndbProfileNetworkProfileVersionClusterAssociationToHclTerraform(struct?: NdbProfileNetworkProfileVersionClusterAssociation | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileNetworkProfileVersionClusterAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileNetworkProfileVersionClusterAssociation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nxClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxClusterId = this._nxClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileNetworkProfileVersionClusterAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nxClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nxClusterId = value.nxClusterId;
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
}

export class NdbProfileNetworkProfileVersionClusterAssociationList extends cdktf.ComplexList {
  public internalValue? : NdbProfileNetworkProfileVersionClusterAssociation[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileNetworkProfileVersionClusterAssociationOutputReference {
    return new NdbProfileNetworkProfileVersionClusterAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#topology NdbProfile#topology}
  */
  readonly topology: string;
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#postgres_database NdbProfile#postgres_database}
  */
  readonly postgresDatabase?: NdbProfileNetworkProfilePostgresDatabase[] | cdktf.IResolvable;
  /**
  * version_cluster_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#version_cluster_association NdbProfile#version_cluster_association}
  */
  readonly versionClusterAssociation?: NdbProfileNetworkProfileVersionClusterAssociation[] | cdktf.IResolvable;
}

export function ndbProfileNetworkProfileToTerraform(struct?: NdbProfileNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.stringToTerraform(struct!.topology),
    postgres_database: cdktf.listMapper(ndbProfileNetworkProfilePostgresDatabaseToTerraform, true)(struct!.postgresDatabase),
    version_cluster_association: cdktf.listMapper(ndbProfileNetworkProfileVersionClusterAssociationToTerraform, true)(struct!.versionClusterAssociation),
  }
}


export function ndbProfileNetworkProfileToHclTerraform(struct?: NdbProfileNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_database: {
      value: cdktf.listMapperHcl(ndbProfileNetworkProfilePostgresDatabaseToHclTerraform, true)(struct!.postgresDatabase),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileNetworkProfilePostgresDatabaseList",
    },
    version_cluster_association: {
      value: cdktf.listMapperHcl(ndbProfileNetworkProfileVersionClusterAssociationToHclTerraform, true)(struct!.versionClusterAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileNetworkProfileVersionClusterAssociationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileNetworkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileNetworkProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._postgresDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresDatabase = this._postgresDatabase?.internalValue;
    }
    if (this._versionClusterAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionClusterAssociation = this._versionClusterAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileNetworkProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topology = undefined;
      this._postgresDatabase.internalValue = undefined;
      this._versionClusterAssociation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topology = value.topology;
      this._postgresDatabase.internalValue = value.postgresDatabase;
      this._versionClusterAssociation.internalValue = value.versionClusterAssociation;
    }
  }

  // topology - computed: false, optional: false, required: true
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbProfileNetworkProfilePostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbProfileNetworkProfilePostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }

  // version_cluster_association - computed: false, optional: true, required: false
  private _versionClusterAssociation = new NdbProfileNetworkProfileVersionClusterAssociationList(this, "version_cluster_association", false);
  public get versionClusterAssociation() {
    return this._versionClusterAssociation;
  }
  public putVersionClusterAssociation(value: NdbProfileNetworkProfileVersionClusterAssociation[] | cdktf.IResolvable) {
    this._versionClusterAssociation.internalValue = value;
  }
  public resetVersionClusterAssociation() {
    this._versionClusterAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionClusterAssociationInput() {
    return this._versionClusterAssociation.internalValue;
  }
}

export class NdbProfileNetworkProfileList extends cdktf.ComplexList {
  public internalValue? : NdbProfileNetworkProfile[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileNetworkProfileOutputReference {
    return new NdbProfileNetworkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileSoftwareProfilePostgresDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#base_profile_version_description NdbProfile#base_profile_version_description}
  */
  readonly baseProfileVersionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#base_profile_version_name NdbProfile#base_profile_version_name}
  */
  readonly baseProfileVersionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#db_software_notes NdbProfile#db_software_notes}
  */
  readonly dbSoftwareNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#os_notes NdbProfile#os_notes}
  */
  readonly osNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#source_dbserver_id NdbProfile#source_dbserver_id}
  */
  readonly sourceDbserverId?: string;
}

export function ndbProfileSoftwareProfilePostgresDatabaseToTerraform(struct?: NdbProfileSoftwareProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_profile_version_description: cdktf.stringToTerraform(struct!.baseProfileVersionDescription),
    base_profile_version_name: cdktf.stringToTerraform(struct!.baseProfileVersionName),
    db_software_notes: cdktf.stringToTerraform(struct!.dbSoftwareNotes),
    os_notes: cdktf.stringToTerraform(struct!.osNotes),
    source_dbserver_id: cdktf.stringToTerraform(struct!.sourceDbserverId),
  }
}


export function ndbProfileSoftwareProfilePostgresDatabaseToHclTerraform(struct?: NdbProfileSoftwareProfilePostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_profile_version_description: {
      value: cdktf.stringToHclTerraform(struct!.baseProfileVersionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_profile_version_name: {
      value: cdktf.stringToHclTerraform(struct!.baseProfileVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class NdbProfileSoftwareProfilePostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbProfileSoftwareProfilePostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseProfileVersionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProfileVersionDescription = this._baseProfileVersionDescription;
    }
    if (this._baseProfileVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProfileVersionName = this._baseProfileVersionName;
    }
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

  public set internalValue(value: NdbProfileSoftwareProfilePostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseProfileVersionDescription = undefined;
      this._baseProfileVersionName = undefined;
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
      this._baseProfileVersionDescription = value.baseProfileVersionDescription;
      this._baseProfileVersionName = value.baseProfileVersionName;
      this._dbSoftwareNotes = value.dbSoftwareNotes;
      this._osNotes = value.osNotes;
      this._sourceDbserverId = value.sourceDbserverId;
    }
  }

  // base_profile_version_description - computed: false, optional: true, required: false
  private _baseProfileVersionDescription?: string; 
  public get baseProfileVersionDescription() {
    return this.getStringAttribute('base_profile_version_description');
  }
  public set baseProfileVersionDescription(value: string) {
    this._baseProfileVersionDescription = value;
  }
  public resetBaseProfileVersionDescription() {
    this._baseProfileVersionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProfileVersionDescriptionInput() {
    return this._baseProfileVersionDescription;
  }

  // base_profile_version_name - computed: false, optional: true, required: false
  private _baseProfileVersionName?: string; 
  public get baseProfileVersionName() {
    return this.getStringAttribute('base_profile_version_name');
  }
  public set baseProfileVersionName(value: string) {
    this._baseProfileVersionName = value;
  }
  public resetBaseProfileVersionName() {
    this._baseProfileVersionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProfileVersionNameInput() {
    return this._baseProfileVersionName;
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

export class NdbProfileSoftwareProfilePostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbProfileSoftwareProfilePostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbProfileSoftwareProfilePostgresDatabaseOutputReference {
    return new NdbProfileSoftwareProfilePostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbProfileSoftwareProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#available_cluster_ids NdbProfile#available_cluster_ids}
  */
  readonly availableClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#topology NdbProfile#topology}
  */
  readonly topology: string;
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#postgres_database NdbProfile#postgres_database}
  */
  readonly postgresDatabase?: NdbProfileSoftwareProfilePostgresDatabase[] | cdktf.IResolvable;
}

export function ndbProfileSoftwareProfileToTerraform(struct?: NdbProfileSoftwareProfileOutputReference | NdbProfileSoftwareProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availableClusterIds),
    topology: cdktf.stringToTerraform(struct!.topology),
    postgres_database: cdktf.listMapper(ndbProfileSoftwareProfilePostgresDatabaseToTerraform, true)(struct!.postgresDatabase),
  }
}


export function ndbProfileSoftwareProfileToHclTerraform(struct?: NdbProfileSoftwareProfileOutputReference | NdbProfileSoftwareProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availableClusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_database: {
      value: cdktf.listMapperHcl(ndbProfileSoftwareProfilePostgresDatabaseToHclTerraform, true)(struct!.postgresDatabase),
      isBlock: true,
      type: "list",
      storageClassType: "NdbProfileSoftwareProfilePostgresDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbProfileSoftwareProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbProfileSoftwareProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availableClusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableClusterIds = this._availableClusterIds;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._postgresDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresDatabase = this._postgresDatabase?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbProfileSoftwareProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availableClusterIds = undefined;
      this._topology = undefined;
      this._postgresDatabase.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availableClusterIds = value.availableClusterIds;
      this._topology = value.topology;
      this._postgresDatabase.internalValue = value.postgresDatabase;
    }
  }

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

  // topology - computed: false, optional: false, required: true
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbProfileSoftwareProfilePostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbProfileSoftwareProfilePostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile nutanix_ndb_profile}
*/
export class NdbProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbProfile to import
  * @param importFromId The id of the existing NdbProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_profile nutanix_ndb_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NdbProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_profile',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._engineType = config.engineType;
    this._id = config.id;
    this._name = config.name;
    this._published = config.published;
    this._computeProfile.internalValue = config.computeProfile;
    this._databaseParameterProfile.internalValue = config.databaseParameterProfile;
    this._networkProfile.internalValue = config.networkProfile;
    this._softwareProfile.internalValue = config.softwareProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assoc_databases - computed: true, optional: false, required: false
  public get assocDatabases() {
    return this.getListAttribute('assoc_databases');
  }

  // assoc_db_servers - computed: true, optional: false, required: false
  public get assocDbServers() {
    return this.getListAttribute('assoc_db_servers');
  }

  // cluster_availability - computed: true, optional: false, required: false
  private _clusterAvailability = new NdbProfileClusterAvailabilityList(this, "cluster_availability", false);
  public get clusterAvailability() {
    return this._clusterAvailability;
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

  // engine_type - computed: true, optional: true, required: false
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
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

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // latest_version_id - computed: true, optional: false, required: false
  public get latestVersionId() {
    return this.getStringAttribute('latest_version_id');
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

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // published - computed: false, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new NdbProfileVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // compute_profile - computed: false, optional: true, required: false
  private _computeProfile = new NdbProfileComputeProfileList(this, "compute_profile", false);
  public get computeProfile() {
    return this._computeProfile;
  }
  public putComputeProfile(value: NdbProfileComputeProfile[] | cdktf.IResolvable) {
    this._computeProfile.internalValue = value;
  }
  public resetComputeProfile() {
    this._computeProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProfileInput() {
    return this._computeProfile.internalValue;
  }

  // database_parameter_profile - computed: false, optional: true, required: false
  private _databaseParameterProfile = new NdbProfileDatabaseParameterProfileList(this, "database_parameter_profile", false);
  public get databaseParameterProfile() {
    return this._databaseParameterProfile;
  }
  public putDatabaseParameterProfile(value: NdbProfileDatabaseParameterProfile[] | cdktf.IResolvable) {
    this._databaseParameterProfile.internalValue = value;
  }
  public resetDatabaseParameterProfile() {
    this._databaseParameterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseParameterProfileInput() {
    return this._databaseParameterProfile.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new NdbProfileNetworkProfileList(this, "network_profile", false);
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: NdbProfileNetworkProfile[] | cdktf.IResolvable) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // software_profile - computed: false, optional: true, required: false
  private _softwareProfile = new NdbProfileSoftwareProfileOutputReference(this, "software_profile");
  public get softwareProfile() {
    return this._softwareProfile;
  }
  public putSoftwareProfile(value: NdbProfileSoftwareProfile) {
    this._softwareProfile.internalValue = value;
  }
  public resetSoftwareProfile() {
    this._softwareProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareProfileInput() {
    return this._softwareProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      published: cdktf.booleanToTerraform(this._published),
      compute_profile: cdktf.listMapper(ndbProfileComputeProfileToTerraform, true)(this._computeProfile.internalValue),
      database_parameter_profile: cdktf.listMapper(ndbProfileDatabaseParameterProfileToTerraform, true)(this._databaseParameterProfile.internalValue),
      network_profile: cdktf.listMapper(ndbProfileNetworkProfileToTerraform, true)(this._networkProfile.internalValue),
      software_profile: ndbProfileSoftwareProfileToTerraform(this._softwareProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_profile: {
        value: cdktf.listMapperHcl(ndbProfileComputeProfileToHclTerraform, true)(this._computeProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbProfileComputeProfileList",
      },
      database_parameter_profile: {
        value: cdktf.listMapperHcl(ndbProfileDatabaseParameterProfileToHclTerraform, true)(this._databaseParameterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbProfileDatabaseParameterProfileList",
      },
      network_profile: {
        value: cdktf.listMapperHcl(ndbProfileNetworkProfileToHclTerraform, true)(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbProfileNetworkProfileList",
      },
      software_profile: {
        value: ndbProfileSoftwareProfileToHclTerraform(this._softwareProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbProfileSoftwareProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
