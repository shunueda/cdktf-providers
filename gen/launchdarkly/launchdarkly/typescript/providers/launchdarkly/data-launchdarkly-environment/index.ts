// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Denotes whether the environment is critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment#critical DataLaunchdarklyEnvironment#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project-unique key for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment#key DataLaunchdarklyEnvironment#key}
  */
  readonly key: string;
  /**
  * The environment's project key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}
  */
  readonly projectKey: string;
}
export interface DataLaunchdarklyEnvironmentApprovalSettings {
}

export function dataLaunchdarklyEnvironmentApprovalSettingsToTerraform(struct?: DataLaunchdarklyEnvironmentApprovalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLaunchdarklyEnvironmentApprovalSettingsToHclTerraform(struct?: DataLaunchdarklyEnvironmentApprovalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLaunchdarklyEnvironmentApprovalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyEnvironmentApprovalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyEnvironmentApprovalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_apply_approved_changes - computed: true, optional: false, required: false
  public get autoApplyApprovedChanges() {
    return this.getBooleanAttribute('auto_apply_approved_changes');
  }

  // can_apply_declined_changes - computed: true, optional: false, required: false
  public get canApplyDeclinedChanges() {
    return this.getBooleanAttribute('can_apply_declined_changes');
  }

  // can_review_own_request - computed: true, optional: false, required: false
  public get canReviewOwnRequest() {
    return this.getBooleanAttribute('can_review_own_request');
  }

  // min_num_approvals - computed: true, optional: false, required: false
  public get minNumApprovals() {
    return this.getNumberAttribute('min_num_approvals');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // required_approval_tags - computed: true, optional: false, required: false
  public get requiredApprovalTags() {
    return this.getListAttribute('required_approval_tags');
  }

  // service_config - computed: true, optional: false, required: false
  private _serviceConfig = new cdktf.StringMap(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }

  // service_kind - computed: true, optional: false, required: false
  public get serviceKind() {
    return this.getStringAttribute('service_kind');
  }
}

export class DataLaunchdarklyEnvironmentApprovalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataLaunchdarklyEnvironmentApprovalSettingsOutputReference {
    return new DataLaunchdarklyEnvironmentApprovalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment launchdarkly_environment}
*/
export class DataLaunchdarklyEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLaunchdarklyEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLaunchdarklyEnvironment to import
  * @param importFromId The id of the existing DataLaunchdarklyEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLaunchdarklyEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/environment launchdarkly_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_environment',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.25.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._critical = config.critical;
    this._id = config.id;
    this._key = config.key;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // approval_settings - computed: true, optional: false, required: false
  private _approvalSettings = new DataLaunchdarklyEnvironmentApprovalSettingsList(this, "approval_settings", false);
  public get approvalSettings() {
    return this._approvalSettings;
  }

  // client_side_id - computed: true, optional: false, required: false
  public get clientSideId() {
    return this.getStringAttribute('client_side_id');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // confirm_changes - computed: true, optional: false, required: false
  public get confirmChanges() {
    return this.getBooleanAttribute('confirm_changes');
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // default_track_events - computed: true, optional: false, required: false
  public get defaultTrackEvents() {
    return this.getBooleanAttribute('default_track_events');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mobile_key - computed: true, optional: false, required: false
  public get mobileKey() {
    return this.getStringAttribute('mobile_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // require_comments - computed: true, optional: false, required: false
  public get requireComments() {
    return this.getBooleanAttribute('require_comments');
  }

  // secure_mode - computed: true, optional: false, required: false
  public get secureMode() {
    return this.getBooleanAttribute('secure_mode');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      critical: cdktf.booleanToTerraform(this._critical),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      project_key: cdktf.stringToTerraform(this._projectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      critical: {
        value: cdktf.booleanToHclTerraform(this._critical),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
