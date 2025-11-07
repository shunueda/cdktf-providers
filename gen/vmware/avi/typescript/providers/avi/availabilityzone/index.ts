// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AvailabilityzoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#cloud_ref Availabilityzone#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#id Availabilityzone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#name Availabilityzone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#tenant_ref Availabilityzone#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#uuid Availabilityzone#uuid}
  */
  readonly uuid?: string;
  /**
  * az_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#az_clusters Availabilityzone#az_clusters}
  */
  readonly azClusters?: AvailabilityzoneAzClusters[] | cdktf.IResolvable;
  /**
  * az_datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#az_datastore Availabilityzone#az_datastore}
  */
  readonly azDatastore?: AvailabilityzoneAzDatastore[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#configpb_attributes Availabilityzone#configpb_attributes}
  */
  readonly configpbAttributes?: AvailabilityzoneConfigpbAttributes[] | cdktf.IResolvable;
}
export interface AvailabilityzoneAzClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#cluster_ids Availabilityzone#cluster_ids}
  */
  readonly clusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#vcenter_ref Availabilityzone#vcenter_ref}
  */
  readonly vcenterRef?: string;
}

export function availabilityzoneAzClustersToTerraform(struct?: AvailabilityzoneAzClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIds),
    vcenter_ref: cdktf.stringToTerraform(struct!.vcenterRef),
  }
}


export function availabilityzoneAzClustersToHclTerraform(struct?: AvailabilityzoneAzClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vcenter_ref: {
      value: cdktf.stringToHclTerraform(struct!.vcenterRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AvailabilityzoneAzClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AvailabilityzoneAzClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIds = this._clusterIds;
    }
    if (this._vcenterRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterRef = this._vcenterRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AvailabilityzoneAzClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIds = undefined;
      this._vcenterRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIds = value.clusterIds;
      this._vcenterRef = value.vcenterRef;
    }
  }

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // vcenter_ref - computed: true, optional: true, required: false
  private _vcenterRef?: string; 
  public get vcenterRef() {
    return this.getStringAttribute('vcenter_ref');
  }
  public set vcenterRef(value: string) {
    this._vcenterRef = value;
  }
  public resetVcenterRef() {
    this._vcenterRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterRefInput() {
    return this._vcenterRef;
  }
}

export class AvailabilityzoneAzClustersList extends cdktf.ComplexList {
  public internalValue? : AvailabilityzoneAzClusters[] | cdktf.IResolvable

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
  public get(index: number): AvailabilityzoneAzClustersOutputReference {
    return new AvailabilityzoneAzClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AvailabilityzoneAzDatastore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#ds_ids Availabilityzone#ds_ids}
  */
  readonly dsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#include Availabilityzone#include}
  */
  readonly include?: string;
}

export function availabilityzoneAzDatastoreToTerraform(struct?: AvailabilityzoneAzDatastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dsIds),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function availabilityzoneAzDatastoreToHclTerraform(struct?: AvailabilityzoneAzDatastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AvailabilityzoneAzDatastoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AvailabilityzoneAzDatastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsIds = this._dsIds;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AvailabilityzoneAzDatastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsIds = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsIds = value.dsIds;
      this._include = value.include;
    }
  }

  // ds_ids - computed: false, optional: true, required: false
  private _dsIds?: string[]; 
  public get dsIds() {
    return this.getListAttribute('ds_ids');
  }
  public set dsIds(value: string[]) {
    this._dsIds = value;
  }
  public resetDsIds() {
    this._dsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsIdsInput() {
    return this._dsIds;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class AvailabilityzoneAzDatastoreList extends cdktf.ComplexList {
  public internalValue? : AvailabilityzoneAzDatastore[] | cdktf.IResolvable

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
  public get(index: number): AvailabilityzoneAzDatastoreOutputReference {
    return new AvailabilityzoneAzDatastoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AvailabilityzoneConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#version Availabilityzone#version}
  */
  readonly version?: string;
}

export function availabilityzoneConfigpbAttributesToTerraform(struct?: AvailabilityzoneConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function availabilityzoneConfigpbAttributesToHclTerraform(struct?: AvailabilityzoneConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AvailabilityzoneConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AvailabilityzoneConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AvailabilityzoneConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AvailabilityzoneConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AvailabilityzoneConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AvailabilityzoneConfigpbAttributesOutputReference {
    return new AvailabilityzoneConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone avi_availabilityzone}
*/
export class Availabilityzone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_availabilityzone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Availabilityzone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Availabilityzone to import
  * @param importFromId The id of the existing Availabilityzone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Availabilityzone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_availabilityzone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/availabilityzone avi_availabilityzone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AvailabilityzoneConfig
  */
  public constructor(scope: Construct, id: string, config: AvailabilityzoneConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_availabilityzone',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._azClusters.internalValue = config.azClusters;
    this._azDatastore.internalValue = config.azDatastore;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // az_clusters - computed: false, optional: true, required: false
  private _azClusters = new AvailabilityzoneAzClustersList(this, "az_clusters", false);
  public get azClusters() {
    return this._azClusters;
  }
  public putAzClusters(value: AvailabilityzoneAzClusters[] | cdktf.IResolvable) {
    this._azClusters.internalValue = value;
  }
  public resetAzClusters() {
    this._azClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azClustersInput() {
    return this._azClusters.internalValue;
  }

  // az_datastore - computed: false, optional: true, required: false
  private _azDatastore = new AvailabilityzoneAzDatastoreList(this, "az_datastore", true);
  public get azDatastore() {
    return this._azDatastore;
  }
  public putAzDatastore(value: AvailabilityzoneAzDatastore[] | cdktf.IResolvable) {
    this._azDatastore.internalValue = value;
  }
  public resetAzDatastore() {
    this._azDatastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azDatastoreInput() {
    return this._azDatastore.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AvailabilityzoneConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AvailabilityzoneConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      az_clusters: cdktf.listMapper(availabilityzoneAzClustersToTerraform, true)(this._azClusters.internalValue),
      az_datastore: cdktf.listMapper(availabilityzoneAzDatastoreToTerraform, true)(this._azDatastore.internalValue),
      configpb_attributes: cdktf.listMapper(availabilityzoneConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_clusters: {
        value: cdktf.listMapperHcl(availabilityzoneAzClustersToHclTerraform, true)(this._azClusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AvailabilityzoneAzClustersList",
      },
      az_datastore: {
        value: cdktf.listMapperHcl(availabilityzoneAzDatastoreToHclTerraform, true)(this._azDatastore.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AvailabilityzoneAzDatastoreList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(availabilityzoneConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AvailabilityzoneConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
