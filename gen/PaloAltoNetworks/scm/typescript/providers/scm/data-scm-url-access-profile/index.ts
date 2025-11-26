// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmUrlAccessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile#id DataScmUrlAccessProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile#name DataScmUrlAccessProfile#name}
  */
  readonly name?: string;
}
export interface DataScmUrlAccessProfileCredentialEnforcementModeDisabled {
}

export function dataScmUrlAccessProfileCredentialEnforcementModeDisabledToTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUrlAccessProfileCredentialEnforcementModeDisabledToHclTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUrlAccessProfileCredentialEnforcementModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUrlAccessProfileCredentialEnforcementModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUrlAccessProfileCredentialEnforcementModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentials {
}

export function dataScmUrlAccessProfileCredentialEnforcementModeDomainCredentialsToTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUrlAccessProfileCredentialEnforcementModeDomainCredentialsToHclTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUrlAccessProfileCredentialEnforcementModeIpUser {
}

export function dataScmUrlAccessProfileCredentialEnforcementModeIpUserToTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeIpUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUrlAccessProfileCredentialEnforcementModeIpUserToHclTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementModeIpUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUrlAccessProfileCredentialEnforcementModeIpUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUrlAccessProfileCredentialEnforcementModeIpUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUrlAccessProfileCredentialEnforcementModeIpUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUrlAccessProfileCredentialEnforcementMode {
}

export function dataScmUrlAccessProfileCredentialEnforcementModeToTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUrlAccessProfileCredentialEnforcementModeToHclTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUrlAccessProfileCredentialEnforcementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUrlAccessProfileCredentialEnforcementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUrlAccessProfileCredentialEnforcementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataScmUrlAccessProfileCredentialEnforcementModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // domain_credentials - computed: true, optional: false, required: false
  private _domainCredentials = new DataScmUrlAccessProfileCredentialEnforcementModeDomainCredentialsOutputReference(this, "domain_credentials");
  public get domainCredentials() {
    return this._domainCredentials;
  }

  // group_mapping - computed: true, optional: false, required: false
  public get groupMapping() {
    return this.getStringAttribute('group_mapping');
  }

  // ip_user - computed: true, optional: false, required: false
  private _ipUser = new DataScmUrlAccessProfileCredentialEnforcementModeIpUserOutputReference(this, "ip_user");
  public get ipUser() {
    return this._ipUser;
  }
}
export interface DataScmUrlAccessProfileCredentialEnforcement {
}

export function dataScmUrlAccessProfileCredentialEnforcementToTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUrlAccessProfileCredentialEnforcementToHclTerraform(struct?: DataScmUrlAccessProfileCredentialEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUrlAccessProfileCredentialEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUrlAccessProfileCredentialEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUrlAccessProfileCredentialEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  public get alert() {
    return this.getListAttribute('alert');
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getListAttribute('allow');
  }

  // block - computed: true, optional: false, required: false
  public get block() {
    return this.getListAttribute('block');
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getListAttribute('continue');
  }

  // log_severity - computed: true, optional: false, required: false
  public get logSeverity() {
    return this.getStringAttribute('log_severity');
  }

  // mode - computed: true, optional: false, required: false
  private _mode = new DataScmUrlAccessProfileCredentialEnforcementModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile scm_url_access_profile}
*/
export class DataScmUrlAccessProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_url_access_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmUrlAccessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmUrlAccessProfile to import
  * @param importFromId The id of the existing DataScmUrlAccessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmUrlAccessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_url_access_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/url_access_profile scm_url_access_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmUrlAccessProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmUrlAccessProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_url_access_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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

  // alert - computed: true, optional: false, required: false
  public get alert() {
    return this.getListAttribute('alert');
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getListAttribute('allow');
  }

  // block - computed: true, optional: false, required: false
  public get block() {
    return this.getListAttribute('block');
  }

  // cloud_inline_cat - computed: true, optional: false, required: false
  public get cloudInlineCat() {
    return this.getBooleanAttribute('cloud_inline_cat');
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getListAttribute('continue');
  }

  // credential_enforcement - computed: true, optional: false, required: false
  private _credentialEnforcement = new DataScmUrlAccessProfileCredentialEnforcementOutputReference(this, "credential_enforcement");
  public get credentialEnforcement() {
    return this._credentialEnforcement;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_inline_cat - computed: true, optional: false, required: false
  public get localInlineCat() {
    return this.getBooleanAttribute('local_inline_cat');
  }

  // log_container_page_only - computed: true, optional: false, required: false
  public get logContainerPageOnly() {
    return this.getBooleanAttribute('log_container_page_only');
  }

  // log_http_hdr_referer - computed: true, optional: false, required: false
  public get logHttpHdrReferer() {
    return this.getBooleanAttribute('log_http_hdr_referer');
  }

  // log_http_hdr_user_agent - computed: true, optional: false, required: false
  public get logHttpHdrUserAgent() {
    return this.getBooleanAttribute('log_http_hdr_user_agent');
  }

  // log_http_hdr_xff - computed: true, optional: false, required: false
  public get logHttpHdrXff() {
    return this.getBooleanAttribute('log_http_hdr_xff');
  }

  // mlav_category_exception - computed: true, optional: false, required: false
  public get mlavCategoryException() {
    return this.getListAttribute('mlav_category_exception');
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

  // redirect - computed: true, optional: false, required: false
  public get redirect() {
    return this.getListAttribute('redirect');
  }

  // safe_search_enforcement - computed: true, optional: false, required: false
  public get safeSearchEnforcement() {
    return this.getBooleanAttribute('safe_search_enforcement');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
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
