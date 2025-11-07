// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementDomainPermissionsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile#id DataCheckpointManagementDomainPermissionsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile#name DataCheckpointManagementDomainPermissionsProfile#name}
  */
  readonly name?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile#uid DataCheckpointManagementDomainPermissionsProfile#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayers {
}

export function dataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersToTerraform(struct?: DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersToHclTerraform(struct?: DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_control_and_url_filtering - computed: true, optional: false, required: false
  public get appControlAndUrlFiltering() {
    return this.getBooleanAttribute('app_control_and_url_filtering');
  }

  // content_awareness - computed: true, optional: false, required: false
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }

  // edit_layers - computed: true, optional: false, required: false
  public get editLayers() {
    return this.getStringAttribute('edit_layers');
  }

  // firewall - computed: true, optional: false, required: false
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }

  // mobile_access - computed: true, optional: false, required: false
  public get mobileAccess() {
    return this.getBooleanAttribute('mobile_access');
  }
}

export class DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference {
    return new DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDomainPermissionsProfileAccessControl {
}

export function dataCheckpointManagementDomainPermissionsProfileAccessControlToTerraform(struct?: DataCheckpointManagementDomainPermissionsProfileAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDomainPermissionsProfileAccessControlToHclTerraform(struct?: DataCheckpointManagementDomainPermissionsProfileAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDomainPermissionsProfileAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDomainPermissionsProfileAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDomainPermissionsProfileAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_objects_and_settings - computed: true, optional: false, required: false
  public get accessControlObjectsAndSettings() {
    return this.getStringAttribute('access_control_objects_and_settings');
  }

  // app_control_and_url_filtering_update - computed: true, optional: false, required: false
  public get appControlAndUrlFilteringUpdate() {
    return this.getBooleanAttribute('app_control_and_url_filtering_update');
  }

  // dlp_policy - computed: true, optional: false, required: false
  public get dlpPolicy() {
    return this.getStringAttribute('dlp_policy');
  }

  // geo_control_policy - computed: true, optional: false, required: false
  public get geoControlPolicy() {
    return this.getStringAttribute('geo_control_policy');
  }

  // install_policy - computed: true, optional: false, required: false
  public get installPolicy() {
    return this.getBooleanAttribute('install_policy');
  }

  // nat_policy - computed: true, optional: false, required: false
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }

  // policy_layers - computed: true, optional: false, required: false
  private _policyLayers = new DataCheckpointManagementDomainPermissionsProfileAccessControlPolicyLayersList(this, "policy_layers", false);
  public get policyLayers() {
    return this._policyLayers;
  }

  // qos_policy - computed: true, optional: false, required: false
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }

  // show_policy - computed: true, optional: false, required: false
  public get showPolicy() {
    return this.getBooleanAttribute('show_policy');
  }
}

export class DataCheckpointManagementDomainPermissionsProfileAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDomainPermissionsProfileAccessControlOutputReference {
    return new DataCheckpointManagementDomainPermissionsProfileAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile checkpoint_management_domain_permissions_profile}
*/
export class DataCheckpointManagementDomainPermissionsProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_domain_permissions_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementDomainPermissionsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementDomainPermissionsProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementDomainPermissionsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementDomainPermissionsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_domain_permissions_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_domain_permissions_profile checkpoint_management_domain_permissions_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementDomainPermissionsProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementDomainPermissionsProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_domain_permissions_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: true, optional: false, required: false
  private _accessControl = new DataCheckpointManagementDomainPermissionsProfileAccessControlList(this, "access_control", false);
  public get accessControl() {
    return this._accessControl;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // edit_common_objects - computed: true, optional: false, required: false
  public get editCommonObjects() {
    return this.getBooleanAttribute('edit_common_objects');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new cdktf.StringMap(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // events_and_reports - computed: true, optional: false, required: false
  private _eventsAndReports = new cdktf.StringMap(this, "events_and_reports");
  public get eventsAndReports() {
    return this._eventsAndReports;
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new cdktf.StringMap(this, "gateways");
  public get gateways() {
    return this._gateways;
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

  // management - computed: true, optional: false, required: false
  private _management = new cdktf.StringMap(this, "management");
  public get management() {
    return this._management;
  }

  // monitoring_and_logging - computed: true, optional: false, required: false
  private _monitoringAndLogging = new cdktf.StringMap(this, "monitoring_and_logging");
  public get monitoringAndLogging() {
    return this._monitoringAndLogging;
  }

  // name - computed: false, optional: true, required: false
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

  // others - computed: true, optional: false, required: false
  private _others = new cdktf.StringMap(this, "others");
  public get others() {
    return this._others;
  }

  // permission_type - computed: true, optional: false, required: false
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // threat_prevention - computed: true, optional: false, required: false
  private _threatPrevention = new cdktf.StringMap(this, "threat_prevention");
  public get threatPrevention() {
    return this._threatPrevention;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
