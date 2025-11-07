// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementDomainPermissionsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#color ManagementDomainPermissionsProfile#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#comments ManagementDomainPermissionsProfile#comments}
  */
  readonly comments?: string;
  /**
  * Define and manage objects in the Check Point database: Network Objects, Services, Custom Application Site, VPN Community, Users, Servers, Resources, Time, UserCheck, and Limit.<br>Only a 'Customized' permission-type profile can edit this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#edit_common_objects ManagementDomainPermissionsProfile#edit_common_objects}
  */
  readonly editCommonObjects?: boolean | cdktf.IResolvable;
  /**
  * Endpoint permissions. Not supported for Multi-Domain Servers.<br>Only a 'Customized' permission-type profile can edit these permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#endpoint ManagementDomainPermissionsProfile#endpoint}
  */
  readonly endpoint?: { [key: string]: string };
  /**
  * Events and Reports permissions.<br>Only a 'Customized' permission-type profile can edit these permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#events_and_reports ManagementDomainPermissionsProfile#events_and_reports}
  */
  readonly eventsAndReports?: { [key: string]: string };
  /**
  * Gateways permissions. <br>Only a 'Customized' permission-type profile can edit these permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#gateways ManagementDomainPermissionsProfile#gateways}
  */
  readonly gateways?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#id ManagementDomainPermissionsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#ignore_errors ManagementDomainPermissionsProfile#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#ignore_warnings ManagementDomainPermissionsProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Management permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#management ManagementDomainPermissionsProfile#management}
  */
  readonly management?: { [key: string]: string };
  /**
  * Monitoring and Logging permissions.<br>'Customized' permission-type profile can edit all these permissions. "Read Write All" permission-type can edit only dlp-logs-including-confidential-fields and manage-dlp-messages permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#monitoring_and_logging ManagementDomainPermissionsProfile#monitoring_and_logging}
  */
  readonly monitoringAndLogging?: { [key: string]: string };
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#name ManagementDomainPermissionsProfile#name}
  */
  readonly name: string;
  /**
  * Additional permissions.<br>Only a 'Customized' permission-type profile can edit these permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#others ManagementDomainPermissionsProfile#others}
  */
  readonly others?: { [key: string]: string };
  /**
  * The type of the Permissions Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#permission_type ManagementDomainPermissionsProfile#permission_type}
  */
  readonly permissionType?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#tags ManagementDomainPermissionsProfile#tags}
  */
  readonly tags?: string[];
  /**
  * Threat Prevention permissions.<br>Only a 'Customized' permission-type profile can edit these permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#threat_prevention ManagementDomainPermissionsProfile#threat_prevention}
  */
  readonly threatPrevention?: { [key: string]: string };
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#access_control ManagementDomainPermissionsProfile#access_control}
  */
  readonly accessControl?: ManagementDomainPermissionsProfileAccessControl;
}
export interface ManagementDomainPermissionsProfileAccessControlPolicyLayers {
  /**
  * Use Application and URL Filtering in Access Control rules.<br>Available only if edit-layers is set to "By Software Blades".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#app_control_and_url_filtering ManagementDomainPermissionsProfile#app_control_and_url_filtering}
  */
  readonly appControlAndUrlFiltering?: boolean | cdktf.IResolvable;
  /**
  * Use specified data types in Access Control rules.<br>Available only if edit-layers is set to "By Software Blades".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#content_awareness ManagementDomainPermissionsProfile#content_awareness}
  */
  readonly contentAwareness?: boolean | cdktf.IResolvable;
  /**
  * "By Software Blades" - Edit Access Control layers that contain the blades enabled in the Permissions Profile.<br>"By Selected Profile In A Layer Editor" - Administrators can only edit the layer if the Access Control layer editor gives editing permission to their profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#edit_layers ManagementDomainPermissionsProfile#edit_layers}
  */
  readonly editLayers?: string;
  /**
  * Work with Access Control and other Software Blades that do not have their own Policies.<br>Available only if edit-layers is set to "By Software Blades".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#firewall ManagementDomainPermissionsProfile#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Work with Mobile Access rules.<br>Available only if edit-layers is set to "By Software Blades".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#mobile_access ManagementDomainPermissionsProfile#mobile_access}
  */
  readonly mobileAccess?: boolean | cdktf.IResolvable;
}

export function managementDomainPermissionsProfileAccessControlPolicyLayersToTerraform(struct?: ManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference | ManagementDomainPermissionsProfileAccessControlPolicyLayers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_control_and_url_filtering: cdktf.booleanToTerraform(struct!.appControlAndUrlFiltering),
    content_awareness: cdktf.booleanToTerraform(struct!.contentAwareness),
    edit_layers: cdktf.stringToTerraform(struct!.editLayers),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    mobile_access: cdktf.booleanToTerraform(struct!.mobileAccess),
  }
}


export function managementDomainPermissionsProfileAccessControlPolicyLayersToHclTerraform(struct?: ManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference | ManagementDomainPermissionsProfileAccessControlPolicyLayers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_control_and_url_filtering: {
      value: cdktf.booleanToHclTerraform(struct!.appControlAndUrlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_awareness: {
      value: cdktf.booleanToHclTerraform(struct!.contentAwareness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edit_layers: {
      value: cdktf.stringToHclTerraform(struct!.editLayers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall: {
      value: cdktf.booleanToHclTerraform(struct!.firewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile_access: {
      value: cdktf.booleanToHclTerraform(struct!.mobileAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementDomainPermissionsProfileAccessControlPolicyLayers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appControlAndUrlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.appControlAndUrlFiltering = this._appControlAndUrlFiltering;
    }
    if (this._contentAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAwareness = this._contentAwareness;
    }
    if (this._editLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.editLayers = this._editLayers;
    }
    if (this._firewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall;
    }
    if (this._mobileAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileAccess = this._mobileAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementDomainPermissionsProfileAccessControlPolicyLayers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appControlAndUrlFiltering = undefined;
      this._contentAwareness = undefined;
      this._editLayers = undefined;
      this._firewall = undefined;
      this._mobileAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appControlAndUrlFiltering = value.appControlAndUrlFiltering;
      this._contentAwareness = value.contentAwareness;
      this._editLayers = value.editLayers;
      this._firewall = value.firewall;
      this._mobileAccess = value.mobileAccess;
    }
  }

  // app_control_and_url_filtering - computed: false, optional: true, required: false
  private _appControlAndUrlFiltering?: boolean | cdktf.IResolvable; 
  public get appControlAndUrlFiltering() {
    return this.getBooleanAttribute('app_control_and_url_filtering');
  }
  public set appControlAndUrlFiltering(value: boolean | cdktf.IResolvable) {
    this._appControlAndUrlFiltering = value;
  }
  public resetAppControlAndUrlFiltering() {
    this._appControlAndUrlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appControlAndUrlFilteringInput() {
    return this._appControlAndUrlFiltering;
  }

  // content_awareness - computed: false, optional: true, required: false
  private _contentAwareness?: boolean | cdktf.IResolvable; 
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }
  public set contentAwareness(value: boolean | cdktf.IResolvable) {
    this._contentAwareness = value;
  }
  public resetContentAwareness() {
    this._contentAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAwarenessInput() {
    return this._contentAwareness;
  }

  // edit_layers - computed: false, optional: true, required: false
  private _editLayers?: string; 
  public get editLayers() {
    return this.getStringAttribute('edit_layers');
  }
  public set editLayers(value: string) {
    this._editLayers = value;
  }
  public resetEditLayers() {
    this._editLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editLayersInput() {
    return this._editLayers;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // mobile_access - computed: false, optional: true, required: false
  private _mobileAccess?: boolean | cdktf.IResolvable; 
  public get mobileAccess() {
    return this.getBooleanAttribute('mobile_access');
  }
  public set mobileAccess(value: boolean | cdktf.IResolvable) {
    this._mobileAccess = value;
  }
  public resetMobileAccess() {
    this._mobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAccessInput() {
    return this._mobileAccess;
  }
}
export interface ManagementDomainPermissionsProfileAccessControl {
  /**
  * Allow editing of the following objet types: VPN Community, Access Role, Custom application group,Custom application, Custom category, Limit, Application - Match Settings, Application Category - Match Settings,Override Categorization, Application and URL filtering blade - Advanced Settings, Content Awareness blade - Advanced Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#access_control_objects_and_settings ManagementDomainPermissionsProfile#access_control_objects_and_settings}
  */
  readonly accessControlObjectsAndSettings?: string;
  /**
  * Install Application and URL Filtering updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#app_control_and_url_filtering_update ManagementDomainPermissionsProfile#app_control_and_url_filtering_update}
  */
  readonly appControlAndUrlFilteringUpdate?: boolean | cdktf.IResolvable;
  /**
  * Configure DLP rules and Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#dlp_policy ManagementDomainPermissionsProfile#dlp_policy}
  */
  readonly dlpPolicy?: string;
  /**
  * Work with Access Control rules that control traffic to and from specified countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#geo_control_policy ManagementDomainPermissionsProfile#geo_control_policy}
  */
  readonly geoControlPolicy?: string;
  /**
  * Install Access Control Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#install_policy ManagementDomainPermissionsProfile#install_policy}
  */
  readonly installPolicy?: boolean | cdktf.IResolvable;
  /**
  * Work with NAT in Access Control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#nat_policy ManagementDomainPermissionsProfile#nat_policy}
  */
  readonly natPolicy?: string;
  /**
  * Work with QoS Policies and rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#qos_policy ManagementDomainPermissionsProfile#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Select to let administrators work with Access Control rules and NAT rules. If not selected, administrators cannot see these rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#show_policy ManagementDomainPermissionsProfile#show_policy}
  */
  readonly showPolicy?: boolean | cdktf.IResolvable;
  /**
  * policy_layers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#policy_layers ManagementDomainPermissionsProfile#policy_layers}
  */
  readonly policyLayers?: ManagementDomainPermissionsProfileAccessControlPolicyLayers;
}

export function managementDomainPermissionsProfileAccessControlToTerraform(struct?: ManagementDomainPermissionsProfileAccessControlOutputReference | ManagementDomainPermissionsProfileAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_objects_and_settings: cdktf.stringToTerraform(struct!.accessControlObjectsAndSettings),
    app_control_and_url_filtering_update: cdktf.booleanToTerraform(struct!.appControlAndUrlFilteringUpdate),
    dlp_policy: cdktf.stringToTerraform(struct!.dlpPolicy),
    geo_control_policy: cdktf.stringToTerraform(struct!.geoControlPolicy),
    install_policy: cdktf.booleanToTerraform(struct!.installPolicy),
    nat_policy: cdktf.stringToTerraform(struct!.natPolicy),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    show_policy: cdktf.booleanToTerraform(struct!.showPolicy),
    policy_layers: managementDomainPermissionsProfileAccessControlPolicyLayersToTerraform(struct!.policyLayers),
  }
}


export function managementDomainPermissionsProfileAccessControlToHclTerraform(struct?: ManagementDomainPermissionsProfileAccessControlOutputReference | ManagementDomainPermissionsProfileAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_objects_and_settings: {
      value: cdktf.stringToHclTerraform(struct!.accessControlObjectsAndSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_control_and_url_filtering_update: {
      value: cdktf.booleanToHclTerraform(struct!.appControlAndUrlFilteringUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dlp_policy: {
      value: cdktf.stringToHclTerraform(struct!.dlpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_control_policy: {
      value: cdktf.stringToHclTerraform(struct!.geoControlPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_policy: {
      value: cdktf.booleanToHclTerraform(struct!.installPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_policy: {
      value: cdktf.stringToHclTerraform(struct!.natPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_policy: {
      value: cdktf.booleanToHclTerraform(struct!.showPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_layers: {
      value: managementDomainPermissionsProfileAccessControlPolicyLayersToHclTerraform(struct!.policyLayers),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementDomainPermissionsProfileAccessControlPolicyLayersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementDomainPermissionsProfileAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementDomainPermissionsProfileAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlObjectsAndSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlObjectsAndSettings = this._accessControlObjectsAndSettings;
    }
    if (this._appControlAndUrlFilteringUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.appControlAndUrlFilteringUpdate = this._appControlAndUrlFilteringUpdate;
    }
    if (this._dlpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpPolicy = this._dlpPolicy;
    }
    if (this._geoControlPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoControlPolicy = this._geoControlPolicy;
    }
    if (this._installPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.installPolicy = this._installPolicy;
    }
    if (this._natPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPolicy = this._natPolicy;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._showPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPolicy = this._showPolicy;
    }
    if (this._policyLayers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyLayers = this._policyLayers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementDomainPermissionsProfileAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlObjectsAndSettings = undefined;
      this._appControlAndUrlFilteringUpdate = undefined;
      this._dlpPolicy = undefined;
      this._geoControlPolicy = undefined;
      this._installPolicy = undefined;
      this._natPolicy = undefined;
      this._qosPolicy = undefined;
      this._showPolicy = undefined;
      this._policyLayers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlObjectsAndSettings = value.accessControlObjectsAndSettings;
      this._appControlAndUrlFilteringUpdate = value.appControlAndUrlFilteringUpdate;
      this._dlpPolicy = value.dlpPolicy;
      this._geoControlPolicy = value.geoControlPolicy;
      this._installPolicy = value.installPolicy;
      this._natPolicy = value.natPolicy;
      this._qosPolicy = value.qosPolicy;
      this._showPolicy = value.showPolicy;
      this._policyLayers.internalValue = value.policyLayers;
    }
  }

  // access_control_objects_and_settings - computed: false, optional: true, required: false
  private _accessControlObjectsAndSettings?: string; 
  public get accessControlObjectsAndSettings() {
    return this.getStringAttribute('access_control_objects_and_settings');
  }
  public set accessControlObjectsAndSettings(value: string) {
    this._accessControlObjectsAndSettings = value;
  }
  public resetAccessControlObjectsAndSettings() {
    this._accessControlObjectsAndSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlObjectsAndSettingsInput() {
    return this._accessControlObjectsAndSettings;
  }

  // app_control_and_url_filtering_update - computed: false, optional: true, required: false
  private _appControlAndUrlFilteringUpdate?: boolean | cdktf.IResolvable; 
  public get appControlAndUrlFilteringUpdate() {
    return this.getBooleanAttribute('app_control_and_url_filtering_update');
  }
  public set appControlAndUrlFilteringUpdate(value: boolean | cdktf.IResolvable) {
    this._appControlAndUrlFilteringUpdate = value;
  }
  public resetAppControlAndUrlFilteringUpdate() {
    this._appControlAndUrlFilteringUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appControlAndUrlFilteringUpdateInput() {
    return this._appControlAndUrlFilteringUpdate;
  }

  // dlp_policy - computed: false, optional: true, required: false
  private _dlpPolicy?: string; 
  public get dlpPolicy() {
    return this.getStringAttribute('dlp_policy');
  }
  public set dlpPolicy(value: string) {
    this._dlpPolicy = value;
  }
  public resetDlpPolicy() {
    this._dlpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpPolicyInput() {
    return this._dlpPolicy;
  }

  // geo_control_policy - computed: false, optional: true, required: false
  private _geoControlPolicy?: string; 
  public get geoControlPolicy() {
    return this.getStringAttribute('geo_control_policy');
  }
  public set geoControlPolicy(value: string) {
    this._geoControlPolicy = value;
  }
  public resetGeoControlPolicy() {
    this._geoControlPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoControlPolicyInput() {
    return this._geoControlPolicy;
  }

  // install_policy - computed: false, optional: true, required: false
  private _installPolicy?: boolean | cdktf.IResolvable; 
  public get installPolicy() {
    return this.getBooleanAttribute('install_policy');
  }
  public set installPolicy(value: boolean | cdktf.IResolvable) {
    this._installPolicy = value;
  }
  public resetInstallPolicy() {
    this._installPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installPolicyInput() {
    return this._installPolicy;
  }

  // nat_policy - computed: false, optional: true, required: false
  private _natPolicy?: string; 
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }
  public set natPolicy(value: string) {
    this._natPolicy = value;
  }
  public resetNatPolicy() {
    this._natPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyInput() {
    return this._natPolicy;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // show_policy - computed: false, optional: true, required: false
  private _showPolicy?: boolean | cdktf.IResolvable; 
  public get showPolicy() {
    return this.getBooleanAttribute('show_policy');
  }
  public set showPolicy(value: boolean | cdktf.IResolvable) {
    this._showPolicy = value;
  }
  public resetShowPolicy() {
    this._showPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPolicyInput() {
    return this._showPolicy;
  }

  // policy_layers - computed: false, optional: true, required: false
  private _policyLayers = new ManagementDomainPermissionsProfileAccessControlPolicyLayersOutputReference(this, "policy_layers");
  public get policyLayers() {
    return this._policyLayers;
  }
  public putPolicyLayers(value: ManagementDomainPermissionsProfileAccessControlPolicyLayers) {
    this._policyLayers.internalValue = value;
  }
  public resetPolicyLayers() {
    this._policyLayers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLayersInput() {
    return this._policyLayers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile checkpoint_management_domain_permissions_profile}
*/
export class ManagementDomainPermissionsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_domain_permissions_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementDomainPermissionsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementDomainPermissionsProfile to import
  * @param importFromId The id of the existing ManagementDomainPermissionsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementDomainPermissionsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_domain_permissions_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_domain_permissions_profile checkpoint_management_domain_permissions_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementDomainPermissionsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementDomainPermissionsProfileConfig) {
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
    this._color = config.color;
    this._comments = config.comments;
    this._editCommonObjects = config.editCommonObjects;
    this._endpoint = config.endpoint;
    this._eventsAndReports = config.eventsAndReports;
    this._gateways = config.gateways;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._management = config.management;
    this._monitoringAndLogging = config.monitoringAndLogging;
    this._name = config.name;
    this._others = config.others;
    this._permissionType = config.permissionType;
    this._tags = config.tags;
    this._threatPrevention = config.threatPrevention;
    this._accessControl.internalValue = config.accessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // edit_common_objects - computed: false, optional: true, required: false
  private _editCommonObjects?: boolean | cdktf.IResolvable; 
  public get editCommonObjects() {
    return this.getBooleanAttribute('edit_common_objects');
  }
  public set editCommonObjects(value: boolean | cdktf.IResolvable) {
    this._editCommonObjects = value;
  }
  public resetEditCommonObjects() {
    this._editCommonObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editCommonObjectsInput() {
    return this._editCommonObjects;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: { [key: string]: string }; 
  public get endpoint() {
    return this.getStringMapAttribute('endpoint');
  }
  public set endpoint(value: { [key: string]: string }) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // events_and_reports - computed: false, optional: true, required: false
  private _eventsAndReports?: { [key: string]: string }; 
  public get eventsAndReports() {
    return this.getStringMapAttribute('events_and_reports');
  }
  public set eventsAndReports(value: { [key: string]: string }) {
    this._eventsAndReports = value;
  }
  public resetEventsAndReports() {
    this._eventsAndReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsAndReportsInput() {
    return this._eventsAndReports;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: { [key: string]: string }; 
  public get gateways() {
    return this.getStringMapAttribute('gateways');
  }
  public set gateways(value: { [key: string]: string }) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // management - computed: false, optional: true, required: false
  private _management?: { [key: string]: string }; 
  public get management() {
    return this.getStringMapAttribute('management');
  }
  public set management(value: { [key: string]: string }) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // monitoring_and_logging - computed: false, optional: true, required: false
  private _monitoringAndLogging?: { [key: string]: string }; 
  public get monitoringAndLogging() {
    return this.getStringMapAttribute('monitoring_and_logging');
  }
  public set monitoringAndLogging(value: { [key: string]: string }) {
    this._monitoringAndLogging = value;
  }
  public resetMonitoringAndLogging() {
    this._monitoringAndLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringAndLoggingInput() {
    return this._monitoringAndLogging;
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

  // others - computed: false, optional: true, required: false
  private _others?: { [key: string]: string }; 
  public get others() {
    return this.getStringMapAttribute('others');
  }
  public set others(value: { [key: string]: string }) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // permission_type - computed: false, optional: true, required: false
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  public resetPermissionType() {
    this._permissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // threat_prevention - computed: false, optional: true, required: false
  private _threatPrevention?: { [key: string]: string }; 
  public get threatPrevention() {
    return this.getStringMapAttribute('threat_prevention');
  }
  public set threatPrevention(value: { [key: string]: string }) {
    this._threatPrevention = value;
  }
  public resetThreatPrevention() {
    this._threatPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionInput() {
    return this._threatPrevention;
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new ManagementDomainPermissionsProfileAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: ManagementDomainPermissionsProfileAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      edit_common_objects: cdktf.booleanToTerraform(this._editCommonObjects),
      endpoint: cdktf.hashMapper(cdktf.stringToTerraform)(this._endpoint),
      events_and_reports: cdktf.hashMapper(cdktf.stringToTerraform)(this._eventsAndReports),
      gateways: cdktf.hashMapper(cdktf.stringToTerraform)(this._gateways),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      management: cdktf.hashMapper(cdktf.stringToTerraform)(this._management),
      monitoring_and_logging: cdktf.hashMapper(cdktf.stringToTerraform)(this._monitoringAndLogging),
      name: cdktf.stringToTerraform(this._name),
      others: cdktf.hashMapper(cdktf.stringToTerraform)(this._others),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threat_prevention: cdktf.hashMapper(cdktf.stringToTerraform)(this._threatPrevention),
      access_control: managementDomainPermissionsProfileAccessControlToTerraform(this._accessControl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edit_common_objects: {
        value: cdktf.booleanToHclTerraform(this._editCommonObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._endpoint),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      events_and_reports: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._eventsAndReports),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gateways: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._gateways),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._management),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      monitoring_and_logging: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._monitoringAndLogging),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      others: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._others),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      permission_type: {
        value: cdktf.stringToHclTerraform(this._permissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threat_prevention: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._threatPrevention),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_control: {
        value: managementDomainPermissionsProfileAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementDomainPermissionsProfileAccessControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
