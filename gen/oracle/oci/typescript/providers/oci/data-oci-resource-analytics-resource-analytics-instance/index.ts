// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_resource_analytics_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourceAnalyticsResourceAnalyticsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_resource_analytics_instance#resource_analytics_instance_id DataOciResourceAnalyticsResourceAnalyticsInstance#resource_analytics_instance_id}
  */
  readonly resourceAnalyticsInstanceId: string;
}
export interface DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword {
}

export function dataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToTerraform(struct?: DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToHclTerraform(struct?: DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}

export class DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference {
    return new DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_resource_analytics_instance oci_resource_analytics_resource_analytics_instance}
*/
export class DataOciResourceAnalyticsResourceAnalyticsInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_analytics_resource_analytics_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciResourceAnalyticsResourceAnalyticsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciResourceAnalyticsResourceAnalyticsInstance to import
  * @param importFromId The id of the existing DataOciResourceAnalyticsResourceAnalyticsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_resource_analytics_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciResourceAnalyticsResourceAnalyticsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_analytics_resource_analytics_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_resource_analytics_instance oci_resource_analytics_resource_analytics_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourceAnalyticsResourceAnalyticsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourceAnalyticsResourceAnalyticsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resource_analytics_resource_analytics_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._resourceAnalyticsInstanceId = config.resourceAnalyticsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adw_admin_password - computed: true, optional: false, required: false
  private _adwAdminPassword = new DataOciResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordList(this, "adw_admin_password", false);
  public get adwAdminPassword() {
    return this._adwAdminPassword;
  }

  // adw_id - computed: true, optional: false, required: false
  public get adwId() {
    return this.getStringAttribute('adw_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_mutual_tls_required - computed: true, optional: false, required: false
  public get isMutualTlsRequired() {
    return this.getBooleanAttribute('is_mutual_tls_required');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // oac_id - computed: true, optional: false, required: false
  public get oacId() {
    return this.getStringAttribute('oac_id');
  }

  // resource_analytics_instance_id - computed: false, optional: false, required: true
  private _resourceAnalyticsInstanceId?: string; 
  public get resourceAnalyticsInstanceId() {
    return this.getStringAttribute('resource_analytics_instance_id');
  }
  public set resourceAnalyticsInstanceId(value: string) {
    this._resourceAnalyticsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAnalyticsInstanceIdInput() {
    return this._resourceAnalyticsInstanceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_analytics_instance_id: cdktf.stringToTerraform(this._resourceAnalyticsInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_analytics_instance_id: {
        value: cdktf.stringToHclTerraform(this._resourceAnalyticsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
