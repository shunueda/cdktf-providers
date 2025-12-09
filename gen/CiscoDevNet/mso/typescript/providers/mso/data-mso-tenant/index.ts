// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant#id DataMsoTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant#name DataMsoTenant#name}
  */
  readonly name: string;
}
export interface DataMsoTenantSiteAssociations {
}

export function dataMsoTenantSiteAssociationsToTerraform(struct?: DataMsoTenantSiteAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoTenantSiteAssociationsToHclTerraform(struct?: DataMsoTenantSiteAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoTenantSiteAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoTenantSiteAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoTenantSiteAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }

  // azure_access_type - computed: true, optional: false, required: false
  public get azureAccessType() {
    return this.getStringAttribute('azure_access_type');
  }

  // azure_active_directory_id - computed: true, optional: false, required: false
  public get azureActiveDirectoryId() {
    return this.getStringAttribute('azure_active_directory_id');
  }

  // azure_application_id - computed: true, optional: false, required: false
  public get azureApplicationId() {
    return this.getStringAttribute('azure_application_id');
  }

  // azure_client_secret - computed: true, optional: false, required: false
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }

  // azure_shared_account_id - computed: true, optional: false, required: false
  public get azureSharedAccountId() {
    return this.getStringAttribute('azure_shared_account_id');
  }

  // azure_subscription_id - computed: true, optional: false, required: false
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }

  // gcp_access_type - computed: true, optional: false, required: false
  public get gcpAccessType() {
    return this.getStringAttribute('gcp_access_type');
  }

  // gcp_client_id - computed: true, optional: false, required: false
  public get gcpClientId() {
    return this.getStringAttribute('gcp_client_id');
  }

  // gcp_email - computed: true, optional: false, required: false
  public get gcpEmail() {
    return this.getStringAttribute('gcp_email');
  }

  // gcp_key_id - computed: true, optional: false, required: false
  public get gcpKeyId() {
    return this.getStringAttribute('gcp_key_id');
  }

  // gcp_name - computed: true, optional: false, required: false
  public get gcpName() {
    return this.getStringAttribute('gcp_name');
  }

  // gcp_private_key - computed: true, optional: false, required: false
  public get gcpPrivateKey() {
    return this.getStringAttribute('gcp_private_key');
  }

  // gcp_project_id - computed: true, optional: false, required: false
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }

  // is_aws_account_trusted - computed: true, optional: false, required: false
  public get isAwsAccountTrusted() {
    return this.getBooleanAttribute('is_aws_account_trusted');
  }

  // security_domains - computed: true, optional: false, required: false
  public get securityDomains() {
    return this.getListAttribute('security_domains');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataMsoTenantSiteAssociationsList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoTenantSiteAssociationsOutputReference {
    return new DataMsoTenantSiteAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMsoTenantUserAssociations {
}

export function dataMsoTenantUserAssociationsToTerraform(struct?: DataMsoTenantUserAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoTenantUserAssociationsToHclTerraform(struct?: DataMsoTenantUserAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoTenantUserAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoTenantUserAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoTenantUserAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataMsoTenantUserAssociationsList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoTenantUserAssociationsOutputReference {
    return new DataMsoTenantUserAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant mso_tenant}
*/
export class DataMsoTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoTenant to import
  * @param importFromId The id of the existing DataMsoTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant mso_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoTenantConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // site_associations - computed: true, optional: false, required: false
  private _siteAssociations = new DataMsoTenantSiteAssociationsList(this, "site_associations", false);
  public get siteAssociations() {
    return this._siteAssociations;
  }

  // user_associations - computed: true, optional: false, required: false
  private _userAssociations = new DataMsoTenantUserAssociationsList(this, "user_associations", false);
  public get userAssociations() {
    return this._userAssociations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
