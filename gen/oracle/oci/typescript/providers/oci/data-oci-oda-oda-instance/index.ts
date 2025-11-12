// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOdaOdaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_instance#oda_instance_id DataOciOdaOdaInstance#oda_instance_id}
  */
  readonly odaInstanceId: string;
}
export interface DataOciOdaOdaInstanceRestrictedOperations {
}

export function dataOciOdaOdaInstanceRestrictedOperationsToTerraform(struct?: DataOciOdaOdaInstanceRestrictedOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOdaOdaInstanceRestrictedOperationsToHclTerraform(struct?: DataOciOdaOdaInstanceRestrictedOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOdaOdaInstanceRestrictedOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaInstanceRestrictedOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaInstanceRestrictedOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // restricting_service - computed: true, optional: false, required: false
  public get restrictingService() {
    return this.getStringAttribute('restricting_service');
  }
}

export class DataOciOdaOdaInstanceRestrictedOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOdaOdaInstanceRestrictedOperationsOutputReference {
    return new DataOciOdaOdaInstanceRestrictedOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_instance oci_oda_oda_instance}
*/
export class DataOciOdaOdaInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOdaOdaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOdaOdaInstance to import
  * @param importFromId The id of the existing DataOciOdaOdaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOdaOdaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oda_oda_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_instance oci_oda_oda_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOdaOdaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOdaOdaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._odaInstanceId = config.odaInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_ids - computed: true, optional: false, required: false
  public get attachmentIds() {
    return this.getListAttribute('attachment_ids');
  }

  // attachment_types - computed: true, optional: false, required: false
  public get attachmentTypes() {
    return this.getListAttribute('attachment_types');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connector_url - computed: true, optional: false, required: false
  public get connectorUrl() {
    return this.getStringAttribute('connector_url');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_app_console_url - computed: true, optional: false, required: false
  public get identityAppConsoleUrl() {
    return this.getStringAttribute('identity_app_console_url');
  }

  // identity_app_guid - computed: true, optional: false, required: false
  public get identityAppGuid() {
    return this.getStringAttribute('identity_app_guid');
  }

  // identity_domain - computed: true, optional: false, required: false
  public get identityDomain() {
    return this.getStringAttribute('identity_domain');
  }

  // imported_package_ids - computed: true, optional: false, required: false
  public get importedPackageIds() {
    return this.getListAttribute('imported_package_ids');
  }

  // imported_package_names - computed: true, optional: false, required: false
  public get importedPackageNames() {
    return this.getListAttribute('imported_package_names');
  }

  // is_role_based_access - computed: true, optional: false, required: false
  public get isRoleBasedAccess() {
    return this.getBooleanAttribute('is_role_based_access');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // oda_instance_id - computed: false, optional: false, required: true
  private _odaInstanceId?: string; 
  public get odaInstanceId() {
    return this.getStringAttribute('oda_instance_id');
  }
  public set odaInstanceId(value: string) {
    this._odaInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaInstanceIdInput() {
    return this._odaInstanceId;
  }

  // restricted_operations - computed: true, optional: false, required: false
  private _restrictedOperations = new DataOciOdaOdaInstanceRestrictedOperationsList(this, "restricted_operations", false);
  public get restrictedOperations() {
    return this._restrictedOperations;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_app_url - computed: true, optional: false, required: false
  public get webAppUrl() {
    return this.getStringAttribute('web_app_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oda_instance_id: cdktf.stringToTerraform(this._odaInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oda_instance_id: {
        value: cdktf.stringToHclTerraform(this._odaInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
