// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaCasbTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return only active tenants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#active_only DataZiaCasbTenant#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Filter tenants by application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#app DataZiaCasbTenant#app}
  */
  readonly app?: string;
  /**
  * Filter tenants by application type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#app_type DataZiaCasbTenant#app_type}
  */
  readonly appType?: string;
  /**
  * Filter tenants by supported features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#filter_by_feature DataZiaCasbTenant#filter_by_feature}
  */
  readonly filterByFeature?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#id DataZiaCasbTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include S3 tenants ready for bucket creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#include_bucket_ready_s3_tenants DataZiaCasbTenant#include_bucket_ready_s3_tenants}
  */
  readonly includeBucketReadyS3Tenants?: boolean | cdktf.IResolvable;
  /**
  * Include deleted tenants in the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#include_deleted DataZiaCasbTenant#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Return only tenants with scan config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#scan_config_tenants_only DataZiaCasbTenant#scan_config_tenants_only}
  */
  readonly scanConfigTenantsOnly?: boolean | cdktf.IResolvable;
  /**
  * SaaS Security API email label ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#tenant_id DataZiaCasbTenant#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * SaaS Security API email label name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#tenant_name DataZiaCasbTenant#tenant_name}
  */
  readonly tenantName?: string;
}
export interface DataZiaCasbTenantZscalerAppTenantId {
}

export function dataZiaCasbTenantZscalerAppTenantIdToTerraform(struct?: DataZiaCasbTenantZscalerAppTenantId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCasbTenantZscalerAppTenantIdToHclTerraform(struct?: DataZiaCasbTenantZscalerAppTenantId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCasbTenantZscalerAppTenantIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCasbTenantZscalerAppTenantId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCasbTenantZscalerAppTenantId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaCasbTenantZscalerAppTenantIdList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCasbTenantZscalerAppTenantIdOutputReference {
    return new DataZiaCasbTenantZscalerAppTenantIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant zia_casb_tenant}
*/
export class DataZiaCasbTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_casb_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaCasbTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaCasbTenant to import
  * @param importFromId The id of the existing DataZiaCasbTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaCasbTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_casb_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/casb_tenant zia_casb_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaCasbTenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaCasbTenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_casb_tenant',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeOnly = config.activeOnly;
    this._app = config.app;
    this._appType = config.appType;
    this._filterByFeature = config.filterByFeature;
    this._id = config.id;
    this._includeBucketReadyS3Tenants = config.includeBucketReadyS3Tenants;
    this._includeDeleted = config.includeDeleted;
    this._scanConfigTenantsOnly = config.scanConfigTenantsOnly;
    this._tenantId = config.tenantId;
    this._tenantName = config.tenantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only');
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // enterprise_tenant_id - computed: true, optional: false, required: false
  public get enterpriseTenantId() {
    return this.getStringAttribute('enterprise_tenant_id');
  }

  // features_supported - computed: true, optional: false, required: false
  public get featuresSupported() {
    return this.getListAttribute('features_supported');
  }

  // filter_by_feature - computed: false, optional: true, required: false
  private _filterByFeature?: string[]; 
  public get filterByFeature() {
    return this.getListAttribute('filter_by_feature');
  }
  public set filterByFeature(value: string[]) {
    this._filterByFeature = value;
  }
  public resetFilterByFeature() {
    this._filterByFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByFeatureInput() {
    return this._filterByFeature;
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

  // include_bucket_ready_s3_tenants - computed: false, optional: true, required: false
  private _includeBucketReadyS3Tenants?: boolean | cdktf.IResolvable; 
  public get includeBucketReadyS3Tenants() {
    return this.getBooleanAttribute('include_bucket_ready_s3_tenants');
  }
  public set includeBucketReadyS3Tenants(value: boolean | cdktf.IResolvable) {
    this._includeBucketReadyS3Tenants = value;
  }
  public resetIncludeBucketReadyS3Tenants() {
    this._includeBucketReadyS3Tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBucketReadyS3TenantsInput() {
    return this._includeBucketReadyS3Tenants;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // last_tenant_validation_time - computed: true, optional: false, required: false
  public get lastTenantValidationTime() {
    return this.getNumberAttribute('last_tenant_validation_time');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // re_auth - computed: true, optional: false, required: false
  public get reAuth() {
    return this.getBooleanAttribute('re_auth');
  }

  // saas_application - computed: true, optional: false, required: false
  public get saasApplication() {
    return this.getStringAttribute('saas_application');
  }

  // scan_config_tenants_only - computed: false, optional: true, required: false
  private _scanConfigTenantsOnly?: boolean | cdktf.IResolvable; 
  public get scanConfigTenantsOnly() {
    return this.getBooleanAttribute('scan_config_tenants_only');
  }
  public set scanConfigTenantsOnly(value: boolean | cdktf.IResolvable) {
    this._scanConfigTenantsOnly = value;
  }
  public resetScanConfigTenantsOnly() {
    this._scanConfigTenantsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanConfigTenantsOnlyInput() {
    return this._scanConfigTenantsOnly;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getListAttribute('status');
  }

  // tenant_deleted - computed: true, optional: false, required: false
  public get tenantDeleted() {
    return this.getBooleanAttribute('tenant_deleted');
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // tenant_webhook_enabled - computed: true, optional: false, required: false
  public get tenantWebhookEnabled() {
    return this.getBooleanAttribute('tenant_webhook_enabled');
  }

  // zscaler_app_tenant_id - computed: true, optional: false, required: false
  private _zscalerAppTenantId = new DataZiaCasbTenantZscalerAppTenantIdList(this, "zscaler_app_tenant_id", false);
  public get zscalerAppTenantId() {
    return this._zscalerAppTenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      app: cdktf.stringToTerraform(this._app),
      app_type: cdktf.stringToTerraform(this._appType),
      filter_by_feature: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterByFeature),
      id: cdktf.stringToTerraform(this._id),
      include_bucket_ready_s3_tenants: cdktf.booleanToTerraform(this._includeBucketReadyS3Tenants),
      include_deleted: cdktf.booleanToTerraform(this._includeDeleted),
      scan_config_tenants_only: cdktf.booleanToTerraform(this._scanConfigTenantsOnly),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_only: {
        value: cdktf.booleanToHclTerraform(this._activeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_feature: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterByFeature),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_bucket_ready_s3_tenants: {
        value: cdktf.booleanToHclTerraform(this._includeBucketReadyS3Tenants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_deleted: {
        value: cdktf.booleanToHclTerraform(this._includeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_config_tenants_only: {
        value: cdktf.booleanToHclTerraform(this._scanConfigTenantsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
