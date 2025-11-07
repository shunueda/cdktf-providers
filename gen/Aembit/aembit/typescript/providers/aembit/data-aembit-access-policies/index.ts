// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitAccessPoliciesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitAccessPoliciesAccessPoliciesCredentialProviders {
  /**
  * Name of the Snowflake account for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#account_name DataAembitAccessPolicies#account_name}
  */
  readonly accountName?: string;
  /**
  * ID of associated Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#credential_provider_id DataAembitAccessPolicies#credential_provider_id}
  */
  readonly credentialProviderId: string;
  /**
  * Name of the header for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#header_name DataAembitAccessPolicies#header_name}
  */
  readonly headerName?: string;
  /**
  * Value of the header for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#header_value DataAembitAccessPolicies#header_value}
  */
  readonly headerValue?: string;
  /**
  * Field path in the HTTP body for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#httpbody_field_path DataAembitAccessPolicies#httpbody_field_path}
  */
  readonly httpbodyFieldPath?: string;
  /**
  * Field value in the HTTP body for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#httpbody_field_value DataAembitAccessPolicies#httpbody_field_value}
  */
  readonly httpbodyFieldValue?: string;
  /**
  * Mapping type for the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#mapping_type DataAembitAccessPolicies#mapping_type}
  */
  readonly mappingType: string;
}

export function dataAembitAccessPoliciesAccessPoliciesCredentialProvidersToTerraform(struct?: DataAembitAccessPoliciesAccessPoliciesCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    credential_provider_id: cdktf.stringToTerraform(struct!.credentialProviderId),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    httpbody_field_path: cdktf.stringToTerraform(struct!.httpbodyFieldPath),
    httpbody_field_value: cdktf.stringToTerraform(struct!.httpbodyFieldValue),
    mapping_type: cdktf.stringToTerraform(struct!.mappingType),
  }
}


export function dataAembitAccessPoliciesAccessPoliciesCredentialProvidersToHclTerraform(struct?: DataAembitAccessPoliciesAccessPoliciesCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    httpbody_field_path: {
      value: cdktf.stringToHclTerraform(struct!.httpbodyFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    httpbody_field_value: {
      value: cdktf.stringToHclTerraform(struct!.httpbodyFieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_type: {
      value: cdktf.stringToHclTerraform(struct!.mappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessPoliciesAccessPoliciesCredentialProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitAccessPoliciesAccessPoliciesCredentialProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._credentialProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderId = this._credentialProviderId;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._httpbodyFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpbodyFieldPath = this._httpbodyFieldPath;
    }
    if (this._httpbodyFieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpbodyFieldValue = this._httpbodyFieldValue;
    }
    if (this._mappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingType = this._mappingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessPoliciesAccessPoliciesCredentialProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._credentialProviderId = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._httpbodyFieldPath = undefined;
      this._httpbodyFieldValue = undefined;
      this._mappingType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._credentialProviderId = value.credentialProviderId;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._httpbodyFieldPath = value.httpbodyFieldPath;
      this._httpbodyFieldValue = value.httpbodyFieldValue;
      this._mappingType = value.mappingType;
    }
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // credential_provider_id - computed: true, optional: false, required: true
  private _credentialProviderId?: string; 
  public get credentialProviderId() {
    return this.getStringAttribute('credential_provider_id');
  }
  public set credentialProviderId(value: string) {
    this._credentialProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderIdInput() {
    return this._credentialProviderId;
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // httpbody_field_path - computed: true, optional: true, required: false
  private _httpbodyFieldPath?: string; 
  public get httpbodyFieldPath() {
    return this.getStringAttribute('httpbody_field_path');
  }
  public set httpbodyFieldPath(value: string) {
    this._httpbodyFieldPath = value;
  }
  public resetHttpbodyFieldPath() {
    this._httpbodyFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpbodyFieldPathInput() {
    return this._httpbodyFieldPath;
  }

  // httpbody_field_value - computed: true, optional: true, required: false
  private _httpbodyFieldValue?: string; 
  public get httpbodyFieldValue() {
    return this.getStringAttribute('httpbody_field_value');
  }
  public set httpbodyFieldValue(value: string) {
    this._httpbodyFieldValue = value;
  }
  public resetHttpbodyFieldValue() {
    this._httpbodyFieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpbodyFieldValueInput() {
    return this._httpbodyFieldValue;
  }

  // mapping_type - computed: true, optional: false, required: true
  private _mappingType?: string; 
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
  }
  public set mappingType(value: string) {
    this._mappingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingTypeInput() {
    return this._mappingType;
  }
}

export class DataAembitAccessPoliciesAccessPoliciesCredentialProvidersList extends cdktf.ComplexList {
  public internalValue? : DataAembitAccessPoliciesAccessPoliciesCredentialProviders[] | cdktf.IResolvable

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
  public get(index: number): DataAembitAccessPoliciesAccessPoliciesCredentialProvidersOutputReference {
    return new DataAembitAccessPoliciesAccessPoliciesCredentialProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitAccessPoliciesAccessPolicies {
  /**
  * Set of Access Conditions to enforce on the Access Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#access_conditions DataAembitAccessPolicies#access_conditions}
  */
  readonly accessConditions?: string[];
  /**
  * Set of Trust Providers to enforce on the Access Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#trust_providers DataAembitAccessPolicies#trust_providers}
  */
  readonly trustProviders?: string[];
}

export function dataAembitAccessPoliciesAccessPoliciesToTerraform(struct?: DataAembitAccessPoliciesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessConditions),
    trust_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustProviders),
  }
}


export function dataAembitAccessPoliciesAccessPoliciesToHclTerraform(struct?: DataAembitAccessPoliciesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trust_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessPoliciesAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitAccessPoliciesAccessPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConditions = this._accessConditions;
    }
    if (this._trustProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustProviders = this._trustProviders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessPoliciesAccessPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessConditions = undefined;
      this._trustProviders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessConditions = value.accessConditions;
      this._trustProviders = value.trustProviders;
    }
  }

  // access_conditions - computed: true, optional: true, required: false
  private _accessConditions?: string[]; 
  public get accessConditions() {
    return this.getListAttribute('access_conditions');
  }
  public set accessConditions(value: string[]) {
    this._accessConditions = value;
  }
  public resetAccessConditions() {
    this._accessConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConditionsInput() {
    return this._accessConditions;
  }

  // client_workload - computed: true, optional: false, required: false
  public get clientWorkload() {
    return this.getStringAttribute('client_workload');
  }

  // credential_provider - computed: true, optional: false, required: false
  public get credentialProvider() {
    return this.getStringAttribute('credential_provider');
  }

  // credential_providers - computed: true, optional: false, required: false
  private _credentialProviders = new DataAembitAccessPoliciesAccessPoliciesCredentialProvidersList(this, "credential_providers", false);
  public get credentialProviders() {
    return this._credentialProviders;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_workload - computed: true, optional: false, required: false
  public get serverWorkload() {
    return this.getStringAttribute('server_workload');
  }

  // trust_providers - computed: true, optional: true, required: false
  private _trustProviders?: string[]; 
  public get trustProviders() {
    return this.getListAttribute('trust_providers');
  }
  public set trustProviders(value: string[]) {
    this._trustProviders = value;
  }
  public resetTrustProviders() {
    this._trustProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProvidersInput() {
    return this._trustProviders;
  }
}

export class DataAembitAccessPoliciesAccessPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataAembitAccessPoliciesAccessPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataAembitAccessPoliciesAccessPoliciesOutputReference {
    return new DataAembitAccessPoliciesAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies aembit_access_policies}
*/
export class DataAembitAccessPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_access_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitAccessPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitAccessPolicies to import
  * @param importFromId The id of the existing DataAembitAccessPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitAccessPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_access_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_policies aembit_access_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitAccessPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitAccessPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_access_policies',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: false, required: false
  private _accessPolicies = new DataAembitAccessPoliciesAccessPoliciesList(this, "access_policies", false);
  public get accessPolicies() {
    return this._accessPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
