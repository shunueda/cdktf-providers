// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaIdpControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller#id DataZpaIdpController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller#name DataZpaIdpController#name}
  */
  readonly name?: string;
}
export interface DataZpaIdpControllerAdminMetadata {
}

export function dataZpaIdpControllerAdminMetadataToTerraform(struct?: DataZpaIdpControllerAdminMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaIdpControllerAdminMetadataToHclTerraform(struct?: DataZpaIdpControllerAdminMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaIdpControllerAdminMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaIdpControllerAdminMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaIdpControllerAdminMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_url - computed: true, optional: false, required: false
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }

  // sp_base_url - computed: true, optional: false, required: false
  public get spBaseUrl() {
    return this.getStringAttribute('sp_base_url');
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sp_metadata_url - computed: true, optional: false, required: false
  public get spMetadataUrl() {
    return this.getStringAttribute('sp_metadata_url');
  }

  // sp_post_url - computed: true, optional: false, required: false
  public get spPostUrl() {
    return this.getStringAttribute('sp_post_url');
  }
}

export class DataZpaIdpControllerAdminMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaIdpControllerAdminMetadataOutputReference {
    return new DataZpaIdpControllerAdminMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaIdpControllerUserMetadata {
}

export function dataZpaIdpControllerUserMetadataToTerraform(struct?: DataZpaIdpControllerUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaIdpControllerUserMetadataToHclTerraform(struct?: DataZpaIdpControllerUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaIdpControllerUserMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaIdpControllerUserMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaIdpControllerUserMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_url - computed: true, optional: false, required: false
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }

  // sp_base_url - computed: true, optional: false, required: false
  public get spBaseUrl() {
    return this.getStringAttribute('sp_base_url');
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sp_metadata_url - computed: true, optional: false, required: false
  public get spMetadataUrl() {
    return this.getStringAttribute('sp_metadata_url');
  }

  // sp_post_url - computed: true, optional: false, required: false
  public get spPostUrl() {
    return this.getStringAttribute('sp_post_url');
  }
}

export class DataZpaIdpControllerUserMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaIdpControllerUserMetadataOutputReference {
    return new DataZpaIdpControllerUserMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller zpa_idp_controller}
*/
export class DataZpaIdpController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_idp_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaIdpController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaIdpController to import
  * @param importFromId The id of the existing DataZpaIdpController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaIdpController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_idp_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/idp_controller zpa_idp_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaIdpControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaIdpControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_idp_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
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

  // admin_metadata - computed: true, optional: false, required: false
  private _adminMetadata = new DataZpaIdpControllerAdminMetadataList(this, "admin_metadata", false);
  public get adminMetadata() {
    return this._adminMetadata;
  }

  // admin_sp_signing_cert_id - computed: true, optional: false, required: false
  public get adminSpSigningCertId() {
    return this.getStringAttribute('admin_sp_signing_cert_id');
  }

  // auto_provision - computed: true, optional: false, required: false
  public get autoProvision() {
    return this.getStringAttribute('auto_provision');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_saml_based_policy - computed: true, optional: false, required: false
  public get disableSamlBasedPolicy() {
    return this.getBooleanAttribute('disable_saml_based_policy');
  }

  // domain_list - computed: true, optional: false, required: false
  public get domainList() {
    return this.getListAttribute('domain_list');
  }

  // enable_arbitrary_auth_domains - computed: true, optional: false, required: false
  public get enableArbitraryAuthDomains() {
    return this.getStringAttribute('enable_arbitrary_auth_domains');
  }

  // enable_scim_based_policy - computed: true, optional: false, required: false
  public get enableScimBasedPolicy() {
    return this.getBooleanAttribute('enable_scim_based_policy');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force_auth - computed: true, optional: false, required: false
  public get forceAuth() {
    return this.getBooleanAttribute('force_auth');
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

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }

  // login_hint - computed: true, optional: false, required: false
  public get loginHint() {
    return this.getBooleanAttribute('login_hint');
  }

  // login_name_attribute - computed: true, optional: false, required: false
  public get loginNameAttribute() {
    return this.getStringAttribute('login_name_attribute');
  }

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
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

  // reauth_on_user_update - computed: true, optional: false, required: false
  public get reauthOnUserUpdate() {
    return this.getBooleanAttribute('reauth_on_user_update');
  }

  // redirect_binding - computed: true, optional: false, required: false
  public get redirectBinding() {
    return this.getBooleanAttribute('redirect_binding');
  }

  // scim_enabled - computed: true, optional: false, required: false
  public get scimEnabled() {
    return this.getBooleanAttribute('scim_enabled');
  }

  // scim_service_provider_endpoint - computed: true, optional: false, required: false
  public get scimServiceProviderEndpoint() {
    return this.getStringAttribute('scim_service_provider_endpoint');
  }

  // scim_shared_secret_exists - computed: true, optional: false, required: false
  public get scimSharedSecretExists() {
    return this.getBooleanAttribute('scim_shared_secret_exists');
  }

  // sign_saml_request - computed: true, optional: false, required: false
  public get signSamlRequest() {
    return this.getStringAttribute('sign_saml_request');
  }

  // sso_type - computed: true, optional: false, required: false
  public get ssoType() {
    return this.getListAttribute('sso_type');
  }

  // use_custom_sp_metadata - computed: true, optional: false, required: false
  public get useCustomSpMetadata() {
    return this.getBooleanAttribute('use_custom_sp_metadata');
  }

  // user_metadata - computed: true, optional: false, required: false
  private _userMetadata = new DataZpaIdpControllerUserMetadataList(this, "user_metadata", true);
  public get userMetadata() {
    return this._userMetadata;
  }

  // user_sp_signing_cert_id - computed: true, optional: false, required: false
  public get userSpSigningCertId() {
    return this.getStringAttribute('user_sp_signing_cert_id');
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
