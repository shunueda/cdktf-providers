// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralIntegrationIdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter results by the display name (as seen in the control plane UI) of existing SAML IdP integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml#display_name DataCyralIntegrationIdpSaml#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml#id DataCyralIntegrationIdpSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter results by the SAML IdP integration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml#idp_type DataCyralIntegrationIdpSaml#idp_type}
  */
  readonly idpType?: string;
}
export interface DataCyralIntegrationIdpSamlIdpListAttributes {
}

export function dataCyralIntegrationIdpSamlIdpListAttributesToTerraform(struct?: DataCyralIntegrationIdpSamlIdpListAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCyralIntegrationIdpSamlIdpListAttributesToHclTerraform(struct?: DataCyralIntegrationIdpSamlIdpListAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCyralIntegrationIdpSamlIdpListAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralIntegrationIdpSamlIdpListAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralIntegrationIdpSamlIdpListAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getStringAttribute('groups');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
}

export class DataCyralIntegrationIdpSamlIdpListAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataCyralIntegrationIdpSamlIdpListAttributesOutputReference {
    return new DataCyralIntegrationIdpSamlIdpListAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCyralIntegrationIdpSamlIdpListIdpDescriptor {
}

export function dataCyralIntegrationIdpSamlIdpListIdpDescriptorToTerraform(struct?: DataCyralIntegrationIdpSamlIdpListIdpDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCyralIntegrationIdpSamlIdpListIdpDescriptorToHclTerraform(struct?: DataCyralIntegrationIdpSamlIdpListIdpDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCyralIntegrationIdpSamlIdpListIdpDescriptorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralIntegrationIdpSamlIdpListIdpDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralIntegrationIdpSamlIdpListIdpDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_force_authentication - computed: true, optional: false, required: false
  public get disableForceAuthentication() {
    return this.getBooleanAttribute('disable_force_authentication');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // single_logout_service_url - computed: true, optional: false, required: false
  public get singleLogoutServiceUrl() {
    return this.getStringAttribute('single_logout_service_url');
  }

  // single_sign_on_service_url - computed: true, optional: false, required: false
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }
}

export class DataCyralIntegrationIdpSamlIdpListIdpDescriptorList extends cdktf.ComplexList {

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
  public get(index: number): DataCyralIntegrationIdpSamlIdpListIdpDescriptorOutputReference {
    return new DataCyralIntegrationIdpSamlIdpListIdpDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServices {
}

export function dataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesToTerraform(struct?: DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesToHclTerraform(struct?: DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesOutputReference {
    return new DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCyralIntegrationIdpSamlIdpListSpMetadata {
}

export function dataCyralIntegrationIdpSamlIdpListSpMetadataToTerraform(struct?: DataCyralIntegrationIdpSamlIdpListSpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCyralIntegrationIdpSamlIdpListSpMetadataToHclTerraform(struct?: DataCyralIntegrationIdpSamlIdpListSpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCyralIntegrationIdpSamlIdpListSpMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralIntegrationIdpSamlIdpListSpMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralIntegrationIdpSamlIdpListSpMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assertion_consumer_services - computed: true, optional: false, required: false
  private _assertionConsumerServices = new DataCyralIntegrationIdpSamlIdpListSpMetadataAssertionConsumerServicesList(this, "assertion_consumer_services", false);
  public get assertionConsumerServices() {
    return this._assertionConsumerServices;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // single_logout_url - computed: true, optional: false, required: false
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // xml_document - computed: true, optional: false, required: false
  public get xmlDocument() {
    return this.getStringAttribute('xml_document');
  }
}

export class DataCyralIntegrationIdpSamlIdpListSpMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataCyralIntegrationIdpSamlIdpListSpMetadataOutputReference {
    return new DataCyralIntegrationIdpSamlIdpListSpMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCyralIntegrationIdpSamlIdpListStruct {
}

export function dataCyralIntegrationIdpSamlIdpListStructToTerraform(struct?: DataCyralIntegrationIdpSamlIdpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCyralIntegrationIdpSamlIdpListStructToHclTerraform(struct?: DataCyralIntegrationIdpSamlIdpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCyralIntegrationIdpSamlIdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralIntegrationIdpSamlIdpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralIntegrationIdpSamlIdpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataCyralIntegrationIdpSamlIdpListAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_descriptor - computed: true, optional: false, required: false
  private _idpDescriptor = new DataCyralIntegrationIdpSamlIdpListIdpDescriptorList(this, "idp_descriptor", true);
  public get idpDescriptor() {
    return this._idpDescriptor;
  }

  // idp_type - computed: true, optional: false, required: false
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }

  // sp_metadata - computed: true, optional: false, required: false
  private _spMetadata = new DataCyralIntegrationIdpSamlIdpListSpMetadataList(this, "sp_metadata", true);
  public get spMetadata() {
    return this._spMetadata;
  }
}

export class DataCyralIntegrationIdpSamlIdpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataCyralIntegrationIdpSamlIdpListStructOutputReference {
    return new DataCyralIntegrationIdpSamlIdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml cyral_integration_idp_saml}
*/
export class DataCyralIntegrationIdpSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_idp_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralIntegrationIdpSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralIntegrationIdpSaml to import
  * @param importFromId The id of the existing DataCyralIntegrationIdpSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralIntegrationIdpSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_idp_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/integration_idp_saml cyral_integration_idp_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralIntegrationIdpSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCyralIntegrationIdpSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_idp_saml',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._idpType = config.idpType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // idp_list - computed: true, optional: false, required: false
  private _idpList = new DataCyralIntegrationIdpSamlIdpListStructList(this, "idp_list", false);
  public get idpList() {
    return this._idpList;
  }

  // idp_type - computed: false, optional: true, required: false
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  public resetIdpType() {
    this._idpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      idp_type: cdktf.stringToTerraform(this._idpType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      idp_type: {
        value: cdktf.stringToHclTerraform(this._idpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
