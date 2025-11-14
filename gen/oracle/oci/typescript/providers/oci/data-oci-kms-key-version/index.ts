// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciKmsKeyVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version#key_id DataOciKmsKeyVersion#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version#key_version_id DataOciKmsKeyVersion#key_version_id}
  */
  readonly keyVersionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version#management_endpoint DataOciKmsKeyVersion#management_endpoint}
  */
  readonly managementEndpoint: string;
}
export interface DataOciKmsKeyVersionExternalKeyReferenceDetails {
}

export function dataOciKmsKeyVersionExternalKeyReferenceDetailsToTerraform(struct?: DataOciKmsKeyVersionExternalKeyReferenceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciKmsKeyVersionExternalKeyReferenceDetailsToHclTerraform(struct?: DataOciKmsKeyVersionExternalKeyReferenceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciKmsKeyVersionExternalKeyReferenceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciKmsKeyVersionExternalKeyReferenceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciKmsKeyVersionExternalKeyReferenceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_key_id - computed: true, optional: false, required: false
  public get externalKeyId() {
    return this.getStringAttribute('external_key_id');
  }

  // external_key_version_id - computed: true, optional: false, required: false
  public get externalKeyVersionId() {
    return this.getStringAttribute('external_key_version_id');
  }
}

export class DataOciKmsKeyVersionExternalKeyReferenceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciKmsKeyVersionExternalKeyReferenceDetailsOutputReference {
    return new DataOciKmsKeyVersionExternalKeyReferenceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciKmsKeyVersionReplicaDetails {
}

export function dataOciKmsKeyVersionReplicaDetailsToTerraform(struct?: DataOciKmsKeyVersionReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciKmsKeyVersionReplicaDetailsToHclTerraform(struct?: DataOciKmsKeyVersionReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciKmsKeyVersionReplicaDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciKmsKeyVersionReplicaDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciKmsKeyVersionReplicaDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replication_id - computed: true, optional: false, required: false
  public get replicationId() {
    return this.getStringAttribute('replication_id');
  }
}

export class DataOciKmsKeyVersionReplicaDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciKmsKeyVersionReplicaDetailsOutputReference {
    return new DataOciKmsKeyVersionReplicaDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version oci_kms_key_version}
*/
export class DataOciKmsKeyVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_key_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciKmsKeyVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciKmsKeyVersion to import
  * @param importFromId The id of the existing DataOciKmsKeyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciKmsKeyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_key_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/kms_key_version oci_kms_key_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciKmsKeyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciKmsKeyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_key_version',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyId = config.keyId;
    this._keyVersionId = config.keyVersionId;
    this._managementEndpoint = config.managementEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // external_key_reference_details - computed: true, optional: false, required: false
  private _externalKeyReferenceDetails = new DataOciKmsKeyVersionExternalKeyReferenceDetailsList(this, "external_key_reference_details", false);
  public get externalKeyReferenceDetails() {
    return this._externalKeyReferenceDetails;
  }

  // external_key_version_id - computed: true, optional: false, required: false
  public get externalKeyVersionId() {
    return this.getStringAttribute('external_key_version_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_rotated - computed: true, optional: false, required: false
  public get isAutoRotated() {
    return this.getBooleanAttribute('is_auto_rotated');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_version_id - computed: false, optional: false, required: true
  private _keyVersionId?: string; 
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
  }
  public set keyVersionId(value: string) {
    this._keyVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionIdInput() {
    return this._keyVersionId;
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint?: string; 
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // replica_details - computed: true, optional: false, required: false
  private _replicaDetails = new DataOciKmsKeyVersionReplicaDetailsList(this, "replica_details", false);
  public get replicaDetails() {
    return this._replicaDetails;
  }

  // restored_from_key_id - computed: true, optional: false, required: false
  public get restoredFromKeyId() {
    return this.getStringAttribute('restored_from_key_id');
  }

  // restored_from_key_version_id - computed: true, optional: false, required: false
  public get restoredFromKeyVersionId() {
    return this.getStringAttribute('restored_from_key_version_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: cdktf.stringToTerraform(this._keyId),
      key_version_id: cdktf.stringToTerraform(this._keyVersionId),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_version_id: {
        value: cdktf.stringToHclTerraform(this._keyVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_endpoint: {
        value: cdktf.stringToHclTerraform(this._managementEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
