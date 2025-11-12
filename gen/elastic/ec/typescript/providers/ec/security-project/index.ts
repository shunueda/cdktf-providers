// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * admin features package (BYOK, BYOIDP, CCS, CCR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#admin_features_package SecurityProject#admin_features_package}
  */
  readonly adminFeaturesPackage?: string;
  /**
  * A custom domain label compatible with RFC-1035 standards. Derived from the project name by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#alias SecurityProject#alias}
  */
  readonly alias?: string;
  /**
  * Descriptive name for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#name SecurityProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#product_types SecurityProject#product_types}
  */
  readonly productTypes?: SecurityProjectProductTypes[] | cdktf.IResolvable;
  /**
  * Unique human-readable identifier for a region in Elastic Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#region_id SecurityProject#region_id}
  */
  readonly regionId: string;
}
export interface SecurityProjectCredentials {
}

export function securityProjectCredentialsToTerraform(struct?: SecurityProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityProjectCredentialsToHclTerraform(struct?: SecurityProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityProjectCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProjectCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProjectCredentials | undefined) {
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface SecurityProjectEndpoints {
}

export function securityProjectEndpointsToTerraform(struct?: SecurityProjectEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityProjectEndpointsToHclTerraform(struct?: SecurityProjectEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityProjectEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProjectEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProjectEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elasticsearch - computed: true, optional: false, required: false
  public get elasticsearch() {
    return this.getStringAttribute('elasticsearch');
  }

  // kibana - computed: true, optional: false, required: false
  public get kibana() {
    return this.getStringAttribute('kibana');
  }
}
export interface SecurityProjectMetadata {
}

export function securityProjectMetadataToTerraform(struct?: SecurityProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityProjectMetadataToHclTerraform(struct?: SecurityProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityProjectMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProjectMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // suspended_at - computed: true, optional: false, required: false
  public get suspendedAt() {
    return this.getStringAttribute('suspended_at');
  }

  // suspended_reason - computed: true, optional: false, required: false
  public get suspendedReason() {
    return this.getStringAttribute('suspended_reason');
  }
}
export interface SecurityProjectProductTypes {
  /**
  * The identifier of the Security Solution product line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#product_line SecurityProject#product_line}
  */
  readonly productLine: string;
  /**
  * The identifier of the Security Solution product tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#product_tier SecurityProject#product_tier}
  */
  readonly productTier: string;
}

export function securityProjectProductTypesToTerraform(struct?: SecurityProjectProductTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_line: cdktf.stringToTerraform(struct!.productLine),
    product_tier: cdktf.stringToTerraform(struct!.productTier),
  }
}


export function securityProjectProductTypesToHclTerraform(struct?: SecurityProjectProductTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_line: {
      value: cdktf.stringToHclTerraform(struct!.productLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_tier: {
      value: cdktf.stringToHclTerraform(struct!.productTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityProjectProductTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityProjectProductTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._productLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.productLine = this._productLine;
    }
    if (this._productTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.productTier = this._productTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProjectProductTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._productLine = undefined;
      this._productTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._productLine = value.productLine;
      this._productTier = value.productTier;
    }
  }

  // product_line - computed: true, optional: false, required: true
  private _productLine?: string; 
  public get productLine() {
    return this.getStringAttribute('product_line');
  }
  public set productLine(value: string) {
    this._productLine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productLineInput() {
    return this._productLine;
  }

  // product_tier - computed: true, optional: false, required: true
  private _productTier?: string; 
  public get productTier() {
    return this.getStringAttribute('product_tier');
  }
  public set productTier(value: string) {
    this._productTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productTierInput() {
    return this._productTier;
  }
}

export class SecurityProjectProductTypesList extends cdktf.ComplexList {
  public internalValue? : SecurityProjectProductTypes[] | cdktf.IResolvable

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
  public get(index: number): SecurityProjectProductTypesOutputReference {
    return new SecurityProjectProductTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project ec_security_project}
*/
export class SecurityProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_security_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityProject to import
  * @param importFromId The id of the existing SecurityProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_security_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/security_project ec_security_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityProjectConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_security_project',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminFeaturesPackage = config.adminFeaturesPackage;
    this._alias = config.alias;
    this._name = config.name;
    this._productTypes.internalValue = config.productTypes;
    this._regionId = config.regionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_features_package - computed: true, optional: true, required: false
  private _adminFeaturesPackage?: string; 
  public get adminFeaturesPackage() {
    return this.getStringAttribute('admin_features_package');
  }
  public set adminFeaturesPackage(value: string) {
    this._adminFeaturesPackage = value;
  }
  public resetAdminFeaturesPackage() {
    this._adminFeaturesPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminFeaturesPackageInput() {
    return this._adminFeaturesPackage;
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new SecurityProjectCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new SecurityProjectEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new SecurityProjectMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // product_types - computed: true, optional: true, required: false
  private _productTypes = new SecurityProjectProductTypesList(this, "product_types", false);
  public get productTypes() {
    return this._productTypes;
  }
  public putProductTypes(value: SecurityProjectProductTypes[] | cdktf.IResolvable) {
    this._productTypes.internalValue = value;
  }
  public resetProductTypes() {
    this._productTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypesInput() {
    return this._productTypes.internalValue;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_features_package: cdktf.stringToTerraform(this._adminFeaturesPackage),
      alias: cdktf.stringToTerraform(this._alias),
      name: cdktf.stringToTerraform(this._name),
      product_types: cdktf.listMapper(securityProjectProductTypesToTerraform, false)(this._productTypes.internalValue),
      region_id: cdktf.stringToTerraform(this._regionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_features_package: {
        value: cdktf.stringToHclTerraform(this._adminFeaturesPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      product_types: {
        value: cdktf.listMapperHcl(securityProjectProductTypesToHclTerraform, false)(this._productTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityProjectProductTypesList",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
