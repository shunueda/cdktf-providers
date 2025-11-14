// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceOceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}
  */
  readonly addOnFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#description OceOceInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}
  */
  readonly drRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#id OceOceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}
  */
  readonly idcsAccessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}
  */
  readonly instanceAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}
  */
  readonly instanceLicenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}
  */
  readonly instanceUsageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#name OceOceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}
  */
  readonly objectStorageNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}
  */
  readonly tenancyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}
  */
  readonly tenancyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}
  */
  readonly upgradeSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}
  */
  readonly wafPrimaryDomain?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}
  */
  readonly timeouts?: OceOceInstanceTimeouts;
}
export interface OceOceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#create OceOceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#delete OceOceInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#update OceOceInstance#update}
  */
  readonly update?: string;
}

export function oceOceInstanceTimeoutsToTerraform(struct?: OceOceInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function oceOceInstanceTimeoutsToHclTerraform(struct?: OceOceInstanceTimeouts | cdktf.IResolvable): any {
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

export class OceOceInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OceOceInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceOceInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance oci_oce_oce_instance}
*/
export class OceOceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oce_oce_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceOceInstance to import
  * @param importFromId The id of the existing OceOceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceOceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oce_oce_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/oce_oce_instance oci_oce_oce_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceOceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OceOceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oce_oce_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addOnFeatures = config.addOnFeatures;
    this._adminEmail = config.adminEmail;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._drRegion = config.drRegion;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsAccessToken = config.idcsAccessToken;
    this._instanceAccessType = config.instanceAccessType;
    this._instanceLicenseType = config.instanceLicenseType;
    this._instanceUsageType = config.instanceUsageType;
    this._name = config.name;
    this._objectStorageNamespace = config.objectStorageNamespace;
    this._tenancyId = config.tenancyId;
    this._tenancyName = config.tenancyName;
    this._upgradeSchedule = config.upgradeSchedule;
    this._wafPrimaryDomain = config.wafPrimaryDomain;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: true, optional: true, required: false
  private _addOnFeatures?: string[]; 
  public get addOnFeatures() {
    return this.getListAttribute('add_on_features');
  }
  public set addOnFeatures(value: string[]) {
    this._addOnFeatures = value;
  }
  public resetAddOnFeatures() {
    this._addOnFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnFeaturesInput() {
    return this._addOnFeatures;
  }

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
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

  // dr_region - computed: true, optional: true, required: false
  private _drRegion?: string; 
  public get drRegion() {
    return this.getStringAttribute('dr_region');
  }
  public set drRegion(value: string) {
    this._drRegion = value;
  }
  public resetDrRegion() {
    this._drRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drRegionInput() {
    return this._drRegion;
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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // idcs_access_token - computed: false, optional: false, required: true
  private _idcsAccessToken?: string; 
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }
  public set idcsAccessToken(value: string) {
    this._idcsAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccessTokenInput() {
    return this._idcsAccessToken;
  }

  // idcs_tenancy - computed: true, optional: false, required: false
  public get idcsTenancy() {
    return this.getStringAttribute('idcs_tenancy');
  }

  // instance_access_type - computed: true, optional: true, required: false
  private _instanceAccessType?: string; 
  public get instanceAccessType() {
    return this.getStringAttribute('instance_access_type');
  }
  public set instanceAccessType(value: string) {
    this._instanceAccessType = value;
  }
  public resetInstanceAccessType() {
    this._instanceAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAccessTypeInput() {
    return this._instanceAccessType;
  }

  // instance_license_type - computed: true, optional: true, required: false
  private _instanceLicenseType?: string; 
  public get instanceLicenseType() {
    return this.getStringAttribute('instance_license_type');
  }
  public set instanceLicenseType(value: string) {
    this._instanceLicenseType = value;
  }
  public resetInstanceLicenseType() {
    this._instanceLicenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLicenseTypeInput() {
    return this._instanceLicenseType;
  }

  // instance_usage_type - computed: true, optional: true, required: false
  private _instanceUsageType?: string; 
  public get instanceUsageType() {
    return this.getStringAttribute('instance_usage_type');
  }
  public set instanceUsageType(value: string) {
    this._instanceUsageType = value;
  }
  public resetInstanceUsageType() {
    this._instanceUsageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUsageTypeInput() {
    return this._instanceUsageType;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // object_storage_namespace - computed: false, optional: false, required: true
  private _objectStorageNamespace?: string; 
  public get objectStorageNamespace() {
    return this.getStringAttribute('object_storage_namespace');
  }
  public set objectStorageNamespace(value: string) {
    this._objectStorageNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageNamespaceInput() {
    return this._objectStorageNamespace;
  }

  // service - computed: true, optional: false, required: false
  private _service = new cdktf.StringMap(this, "service");
  public get service() {
    return this._service;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // tenancy_name - computed: false, optional: false, required: true
  private _tenancyName?: string; 
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }
  public set tenancyName(value: string) {
    this._tenancyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyNameInput() {
    return this._tenancyName;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_schedule - computed: true, optional: true, required: false
  private _upgradeSchedule?: string; 
  public get upgradeSchedule() {
    return this.getStringAttribute('upgrade_schedule');
  }
  public set upgradeSchedule(value: string) {
    this._upgradeSchedule = value;
  }
  public resetUpgradeSchedule() {
    this._upgradeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeScheduleInput() {
    return this._upgradeSchedule;
  }

  // waf_primary_domain - computed: true, optional: true, required: false
  private _wafPrimaryDomain?: string; 
  public get wafPrimaryDomain() {
    return this.getStringAttribute('waf_primary_domain');
  }
  public set wafPrimaryDomain(value: string) {
    this._wafPrimaryDomain = value;
  }
  public resetWafPrimaryDomain() {
    this._wafPrimaryDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafPrimaryDomainInput() {
    return this._wafPrimaryDomain;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OceOceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OceOceInstanceTimeouts) {
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
      add_on_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addOnFeatures),
      admin_email: cdktf.stringToTerraform(this._adminEmail),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      dr_region: cdktf.stringToTerraform(this._drRegion),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_access_token: cdktf.stringToTerraform(this._idcsAccessToken),
      instance_access_type: cdktf.stringToTerraform(this._instanceAccessType),
      instance_license_type: cdktf.stringToTerraform(this._instanceLicenseType),
      instance_usage_type: cdktf.stringToTerraform(this._instanceUsageType),
      name: cdktf.stringToTerraform(this._name),
      object_storage_namespace: cdktf.stringToTerraform(this._objectStorageNamespace),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      tenancy_name: cdktf.stringToTerraform(this._tenancyName),
      upgrade_schedule: cdktf.stringToTerraform(this._upgradeSchedule),
      waf_primary_domain: cdktf.stringToTerraform(this._wafPrimaryDomain),
      timeouts: oceOceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addOnFeatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_email: {
        value: cdktf.stringToHclTerraform(this._adminEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      dr_region: {
        value: cdktf.stringToHclTerraform(this._drRegion),
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
      idcs_access_token: {
        value: cdktf.stringToHclTerraform(this._idcsAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_access_type: {
        value: cdktf.stringToHclTerraform(this._instanceAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_license_type: {
        value: cdktf.stringToHclTerraform(this._instanceLicenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_usage_type: {
        value: cdktf.stringToHclTerraform(this._instanceUsageType),
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
      object_storage_namespace: {
        value: cdktf.stringToHclTerraform(this._objectStorageNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_name: {
        value: cdktf.stringToHclTerraform(this._tenancyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_schedule: {
        value: cdktf.stringToHclTerraform(this._upgradeSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_primary_domain: {
        value: cdktf.stringToHclTerraform(this._wafPrimaryDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: oceOceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OceOceInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
