// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantRestrictionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to allow or disallow cloud storage resources for GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#allow_gcp_cloud_storage_read TenantRestrictionProfile#allow_gcp_cloud_storage_read}
  */
  readonly allowGcpCloudStorageRead?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow Google consumers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#allow_google_consumers TenantRestrictionProfile#allow_google_consumers}
  */
  readonly allowGoogleConsumers?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow Google visitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#allow_google_visitors TenantRestrictionProfile#allow_google_visitors}
  */
  readonly allowGoogleVisitors?: boolean | cdktf.IResolvable;
  /**
  * Restricted tenant profile application type.
  * 				See the Tenancy Restriction Profile API for the list of available application types:
  * 				https://help.zscaler.com/zia/cloud-app-control-policy#/tenancyRestrictionProfile-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#app_type TenantRestrictionProfile#app_type}
  */
  readonly appType?: string;
  /**
  * Additional information about the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#description TenantRestrictionProfile#description}
  */
  readonly description?: string;
  /**
  * Tenant profile primary item data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#item_data_primary TenantRestrictionProfile#item_data_primary}
  */
  readonly itemDataPrimary?: string[];
  /**
  * List of certifications to be included or excluded for the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#item_data_secondary TenantRestrictionProfile#item_data_secondary}
  */
  readonly itemDataSecondary?: string[];
  /**
  * Tenant profile primary item type.
  * 				See the Tenancy Restriction Profile API for the list of available items:
  * 				https://help.zscaler.com/zia/cloud-app-control-policy#/tenancyRestrictionProfile-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#item_type_primary TenantRestrictionProfile#item_type_primary}
  */
  readonly itemTypePrimary?: string;
  /**
  * Tenant profile secondary item type.
  * 				See the Tenancy Restriction Profile API for the list of available items:
  * 				https://help.zscaler.com/zia/cloud-app-control-policy#/tenancyRestrictionProfile-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#item_type_secondary TenantRestrictionProfile#item_type_secondary}
  */
  readonly itemTypeSecondary?: string;
  /**
  * Tenant profile item value for YouTube category.
  * 				See the Tenancy Restriction Profile API for the list of available item values:
  * 				https://help.zscaler.com/zia/cloud-app-control-policy#/tenancyRestrictionProfile-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#item_value TenantRestrictionProfile#item_value}
  */
  readonly itemValue?: string[];
  /**
  * Flag to decide between v1 and v2 for tenant restriction on MSLOGINSERVICES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#ms_login_services_tr_v2 TenantRestrictionProfile#ms_login_services_tr_v2}
  */
  readonly msLoginServicesTrV2?: boolean | cdktf.IResolvable;
  /**
  * The tenant restriction profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#name TenantRestrictionProfile#name}
  */
  readonly name: string;
  /**
  * Flag to restrict personal domains for Office 365
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#restrict_personal_o365_domains TenantRestrictionProfile#restrict_personal_o365_domains}
  */
  readonly restrictPersonalO365Domains?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#timeouts TenantRestrictionProfile#timeouts}
  */
  readonly timeouts?: TenantRestrictionProfileTimeouts;
}
export interface TenantRestrictionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#create TenantRestrictionProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#update TenantRestrictionProfile#update}
  */
  readonly update?: string;
}

export function tenantRestrictionProfileTimeoutsToTerraform(struct?: TenantRestrictionProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function tenantRestrictionProfileTimeoutsToHclTerraform(struct?: TenantRestrictionProfileTimeouts | cdktf.IResolvable): any {
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

export class TenantRestrictionProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TenantRestrictionProfileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRestrictionProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile zia_tenant_restriction_profile}
*/
export class TenantRestrictionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_tenant_restriction_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantRestrictionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantRestrictionProfile to import
  * @param importFromId The id of the existing TenantRestrictionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantRestrictionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_tenant_restriction_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/tenant_restriction_profile zia_tenant_restriction_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantRestrictionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TenantRestrictionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_tenant_restriction_profile',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowGcpCloudStorageRead = config.allowGcpCloudStorageRead;
    this._allowGoogleConsumers = config.allowGoogleConsumers;
    this._allowGoogleVisitors = config.allowGoogleVisitors;
    this._appType = config.appType;
    this._description = config.description;
    this._itemDataPrimary = config.itemDataPrimary;
    this._itemDataSecondary = config.itemDataSecondary;
    this._itemTypePrimary = config.itemTypePrimary;
    this._itemTypeSecondary = config.itemTypeSecondary;
    this._itemValue = config.itemValue;
    this._msLoginServicesTrV2 = config.msLoginServicesTrV2;
    this._name = config.name;
    this._restrictPersonalO365Domains = config.restrictPersonalO365Domains;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_gcp_cloud_storage_read - computed: false, optional: true, required: false
  private _allowGcpCloudStorageRead?: boolean | cdktf.IResolvable; 
  public get allowGcpCloudStorageRead() {
    return this.getBooleanAttribute('allow_gcp_cloud_storage_read');
  }
  public set allowGcpCloudStorageRead(value: boolean | cdktf.IResolvable) {
    this._allowGcpCloudStorageRead = value;
  }
  public resetAllowGcpCloudStorageRead() {
    this._allowGcpCloudStorageRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGcpCloudStorageReadInput() {
    return this._allowGcpCloudStorageRead;
  }

  // allow_google_consumers - computed: false, optional: true, required: false
  private _allowGoogleConsumers?: boolean | cdktf.IResolvable; 
  public get allowGoogleConsumers() {
    return this.getBooleanAttribute('allow_google_consumers');
  }
  public set allowGoogleConsumers(value: boolean | cdktf.IResolvable) {
    this._allowGoogleConsumers = value;
  }
  public resetAllowGoogleConsumers() {
    this._allowGoogleConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoogleConsumersInput() {
    return this._allowGoogleConsumers;
  }

  // allow_google_visitors - computed: false, optional: true, required: false
  private _allowGoogleVisitors?: boolean | cdktf.IResolvable; 
  public get allowGoogleVisitors() {
    return this.getBooleanAttribute('allow_google_visitors');
  }
  public set allowGoogleVisitors(value: boolean | cdktf.IResolvable) {
    this._allowGoogleVisitors = value;
  }
  public resetAllowGoogleVisitors() {
    this._allowGoogleVisitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoogleVisitorsInput() {
    return this._allowGoogleVisitors;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_data_primary - computed: false, optional: true, required: false
  private _itemDataPrimary?: string[]; 
  public get itemDataPrimary() {
    return cdktf.Fn.tolist(this.getListAttribute('item_data_primary'));
  }
  public set itemDataPrimary(value: string[]) {
    this._itemDataPrimary = value;
  }
  public resetItemDataPrimary() {
    this._itemDataPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemDataPrimaryInput() {
    return this._itemDataPrimary;
  }

  // item_data_secondary - computed: false, optional: true, required: false
  private _itemDataSecondary?: string[]; 
  public get itemDataSecondary() {
    return cdktf.Fn.tolist(this.getListAttribute('item_data_secondary'));
  }
  public set itemDataSecondary(value: string[]) {
    this._itemDataSecondary = value;
  }
  public resetItemDataSecondary() {
    this._itemDataSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemDataSecondaryInput() {
    return this._itemDataSecondary;
  }

  // item_type_primary - computed: false, optional: true, required: false
  private _itemTypePrimary?: string; 
  public get itemTypePrimary() {
    return this.getStringAttribute('item_type_primary');
  }
  public set itemTypePrimary(value: string) {
    this._itemTypePrimary = value;
  }
  public resetItemTypePrimary() {
    this._itemTypePrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemTypePrimaryInput() {
    return this._itemTypePrimary;
  }

  // item_type_secondary - computed: false, optional: true, required: false
  private _itemTypeSecondary?: string; 
  public get itemTypeSecondary() {
    return this.getStringAttribute('item_type_secondary');
  }
  public set itemTypeSecondary(value: string) {
    this._itemTypeSecondary = value;
  }
  public resetItemTypeSecondary() {
    this._itemTypeSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemTypeSecondaryInput() {
    return this._itemTypeSecondary;
  }

  // item_value - computed: false, optional: true, required: false
  private _itemValue?: string[]; 
  public get itemValue() {
    return cdktf.Fn.tolist(this.getListAttribute('item_value'));
  }
  public set itemValue(value: string[]) {
    this._itemValue = value;
  }
  public resetItemValue() {
    this._itemValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemValueInput() {
    return this._itemValue;
  }

  // ms_login_services_tr_v2 - computed: false, optional: true, required: false
  private _msLoginServicesTrV2?: boolean | cdktf.IResolvable; 
  public get msLoginServicesTrV2() {
    return this.getBooleanAttribute('ms_login_services_tr_v2');
  }
  public set msLoginServicesTrV2(value: boolean | cdktf.IResolvable) {
    this._msLoginServicesTrV2 = value;
  }
  public resetMsLoginServicesTrV2() {
    this._msLoginServicesTrV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msLoginServicesTrV2Input() {
    return this._msLoginServicesTrV2;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // restrict_personal_o365_domains - computed: false, optional: true, required: false
  private _restrictPersonalO365Domains?: boolean | cdktf.IResolvable; 
  public get restrictPersonalO365Domains() {
    return this.getBooleanAttribute('restrict_personal_o365_domains');
  }
  public set restrictPersonalO365Domains(value: boolean | cdktf.IResolvable) {
    this._restrictPersonalO365Domains = value;
  }
  public resetRestrictPersonalO365Domains() {
    this._restrictPersonalO365Domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPersonalO365DomainsInput() {
    return this._restrictPersonalO365Domains;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TenantRestrictionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TenantRestrictionProfileTimeouts) {
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
      allow_gcp_cloud_storage_read: cdktf.booleanToTerraform(this._allowGcpCloudStorageRead),
      allow_google_consumers: cdktf.booleanToTerraform(this._allowGoogleConsumers),
      allow_google_visitors: cdktf.booleanToTerraform(this._allowGoogleVisitors),
      app_type: cdktf.stringToTerraform(this._appType),
      description: cdktf.stringToTerraform(this._description),
      item_data_primary: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemDataPrimary),
      item_data_secondary: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemDataSecondary),
      item_type_primary: cdktf.stringToTerraform(this._itemTypePrimary),
      item_type_secondary: cdktf.stringToTerraform(this._itemTypeSecondary),
      item_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemValue),
      ms_login_services_tr_v2: cdktf.booleanToTerraform(this._msLoginServicesTrV2),
      name: cdktf.stringToTerraform(this._name),
      restrict_personal_o365_domains: cdktf.booleanToTerraform(this._restrictPersonalO365Domains),
      timeouts: tenantRestrictionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_gcp_cloud_storage_read: {
        value: cdktf.booleanToHclTerraform(this._allowGcpCloudStorageRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_google_consumers: {
        value: cdktf.booleanToHclTerraform(this._allowGoogleConsumers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_google_visitors: {
        value: cdktf.booleanToHclTerraform(this._allowGoogleVisitors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_data_primary: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._itemDataPrimary),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      item_data_secondary: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._itemDataSecondary),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      item_type_primary: {
        value: cdktf.stringToHclTerraform(this._itemTypePrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_type_secondary: {
        value: cdktf.stringToHclTerraform(this._itemTypeSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._itemValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ms_login_services_tr_v2: {
        value: cdktf.booleanToHclTerraform(this._msLoginServicesTrV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_personal_o365_domains: {
        value: cdktf.booleanToHclTerraform(this._restrictPersonalO365Domains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: tenantRestrictionProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TenantRestrictionProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
