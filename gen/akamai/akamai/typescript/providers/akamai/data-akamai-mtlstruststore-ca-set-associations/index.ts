// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlstruststoreCaSetAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of associations to retrieve. Possible values are 'enrollments' or 'properties'. If not specified, both types of associations are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations#association_type DataAkamaiMtlstruststoreCaSetAssociations#association_type}
  */
  readonly associationType?: string;
  /**
  * ID is a unique identifier representing the CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations#id DataAkamaiMtlstruststoreCaSetAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations#name DataAkamaiMtlstruststoreCaSetAssociations#name}
  */
  readonly name?: string;
}
export interface DataAkamaiMtlstruststoreCaSetAssociationsEnrollments {
}

export function dataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsToTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsEnrollments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsEnrollments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetAssociationsEnrollments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetAssociationsEnrollments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cn - computed: true, optional: false, required: false
  public get cn() {
    return this.getStringAttribute('cn');
  }

  // enrollment_id - computed: true, optional: false, required: false
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }

  // production_slots - computed: true, optional: false, required: false
  public get productionSlots() {
    return this.getNumberListAttribute('production_slots');
  }

  // staging_slots - computed: true, optional: false, required: false
  public get stagingSlots() {
    return this.getNumberListAttribute('staging_slots');
  }
}

export class DataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsOutputReference {
    return new DataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnames {
}

export function dataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesToTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesOutputReference {
    return new DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlstruststoreCaSetAssociationsProperties {
}

export function dataAkamaiMtlstruststoreCaSetAssociationsPropertiesToTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetAssociationsPropertiesToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetAssociationsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetAssociationsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetAssociationsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetAssociationsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // hostnames - computed: true, optional: false, required: false
  private _hostnames = new DataAkamaiMtlstruststoreCaSetAssociationsPropertiesHostnamesList(this, "hostnames", false);
  public get hostnames() {
    return this._hostnames;
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
}

export class DataAkamaiMtlstruststoreCaSetAssociationsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetAssociationsPropertiesOutputReference {
    return new DataAkamaiMtlstruststoreCaSetAssociationsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations akamai_mtlstruststore_ca_set_associations}
*/
export class DataAkamaiMtlstruststoreCaSetAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlstruststore_ca_set_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlstruststoreCaSetAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlstruststoreCaSetAssociations to import
  * @param importFromId The id of the existing DataAkamaiMtlstruststoreCaSetAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlstruststoreCaSetAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlstruststore_ca_set_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_associations akamai_mtlstruststore_ca_set_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlstruststoreCaSetAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlstruststoreCaSetAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlstruststore_ca_set_associations',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associationType = config.associationType;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_type - computed: false, optional: true, required: false
  private _associationType?: string; 
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }

  // enrollments - computed: true, optional: false, required: false
  private _enrollments = new DataAkamaiMtlstruststoreCaSetAssociationsEnrollmentsList(this, "enrollments", false);
  public get enrollments() {
    return this._enrollments;
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

  // name - computed: true, optional: true, required: false
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

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAkamaiMtlstruststoreCaSetAssociationsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      association_type: cdktf.stringToTerraform(this._associationType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_type: {
        value: cdktf.stringToHclTerraform(this._associationType),
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
