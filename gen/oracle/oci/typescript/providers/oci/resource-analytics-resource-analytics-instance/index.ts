// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceAnalyticsResourceAnalyticsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#compartment_id ResourceAnalyticsResourceAnalyticsInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#defined_tags ResourceAnalyticsResourceAnalyticsInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#description ResourceAnalyticsResourceAnalyticsInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#display_name ResourceAnalyticsResourceAnalyticsInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#freeform_tags ResourceAnalyticsResourceAnalyticsInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#id ResourceAnalyticsResourceAnalyticsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#is_mutual_tls_required ResourceAnalyticsResourceAnalyticsInstance#is_mutual_tls_required}
  */
  readonly isMutualTlsRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#license_model ResourceAnalyticsResourceAnalyticsInstance#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#nsg_ids ResourceAnalyticsResourceAnalyticsInstance#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#subnet_id ResourceAnalyticsResourceAnalyticsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * adw_admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#adw_admin_password ResourceAnalyticsResourceAnalyticsInstance#adw_admin_password}
  */
  readonly adwAdminPassword: ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#timeouts ResourceAnalyticsResourceAnalyticsInstance#timeouts}
  */
  readonly timeouts?: ResourceAnalyticsResourceAnalyticsInstanceTimeouts;
}
export interface ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#password ResourceAnalyticsResourceAnalyticsInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#password_type ResourceAnalyticsResourceAnalyticsInstance#password_type}
  */
  readonly passwordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#secret_id ResourceAnalyticsResourceAnalyticsInstance#secret_id}
  */
  readonly secretId?: string;
}

export function resourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference | ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function resourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToHclTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference | ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordType = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordType = value.passwordType;
      this._secretId = value.secretId;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_type - computed: false, optional: false, required: true
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface ResourceAnalyticsResourceAnalyticsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#create ResourceAnalyticsResourceAnalyticsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#delete ResourceAnalyticsResourceAnalyticsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#read ResourceAnalyticsResourceAnalyticsInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#update ResourceAnalyticsResourceAnalyticsInstance#update}
  */
  readonly update?: string;
}

export function resourceAnalyticsResourceAnalyticsInstanceTimeoutsToTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function resourceAnalyticsResourceAnalyticsInstanceTimeoutsToHclTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAnalyticsResourceAnalyticsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceAnalyticsResourceAnalyticsInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAnalyticsResourceAnalyticsInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance oci_resource_analytics_resource_analytics_instance}
*/
export class ResourceAnalyticsResourceAnalyticsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_analytics_resource_analytics_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceAnalyticsResourceAnalyticsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceAnalyticsResourceAnalyticsInstance to import
  * @param importFromId The id of the existing ResourceAnalyticsResourceAnalyticsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceAnalyticsResourceAnalyticsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_analytics_resource_analytics_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_analytics_resource_analytics_instance oci_resource_analytics_resource_analytics_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceAnalyticsResourceAnalyticsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceAnalyticsResourceAnalyticsInstanceConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isMutualTlsRequired = config.isMutualTlsRequired;
    this._licenseModel = config.licenseModel;
    this._nsgIds = config.nsgIds;
    this._subnetId = config.subnetId;
    this._adwAdminPassword.internalValue = config.adwAdminPassword;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adw_id - computed: true, optional: false, required: false
  public get adwId() {
    return this.getStringAttribute('adw_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_mutual_tls_required - computed: true, optional: true, required: false
  private _isMutualTlsRequired?: boolean | cdktf.IResolvable; 
  public get isMutualTlsRequired() {
    return this.getBooleanAttribute('is_mutual_tls_required');
  }
  public set isMutualTlsRequired(value: boolean | cdktf.IResolvable) {
    this._isMutualTlsRequired = value;
  }
  public resetIsMutualTlsRequired() {
    this._isMutualTlsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMutualTlsRequiredInput() {
    return this._isMutualTlsRequired;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // oac_id - computed: true, optional: false, required: false
  public get oacId() {
    return this.getStringAttribute('oac_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // adw_admin_password - computed: false, optional: false, required: true
  private _adwAdminPassword = new ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordOutputReference(this, "adw_admin_password");
  public get adwAdminPassword() {
    return this._adwAdminPassword;
  }
  public putAdwAdminPassword(value: ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPassword) {
    this._adwAdminPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adwAdminPasswordInput() {
    return this._adwAdminPassword.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceAnalyticsResourceAnalyticsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceAnalyticsResourceAnalyticsInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_mutual_tls_required: cdktf.booleanToTerraform(this._isMutualTlsRequired),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      adw_admin_password: resourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToTerraform(this._adwAdminPassword.internalValue),
      timeouts: resourceAnalyticsResourceAnalyticsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_mutual_tls_required: {
        value: cdktf.booleanToHclTerraform(this._isMutualTlsRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adw_admin_password: {
        value: resourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordToHclTerraform(this._adwAdminPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceAnalyticsResourceAnalyticsInstanceAdwAdminPasswordList",
      },
      timeouts: {
        value: resourceAnalyticsResourceAnalyticsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceAnalyticsResourceAnalyticsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
