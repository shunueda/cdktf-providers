// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeliveryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Give access to unauthenticated (anonymous) users. When set to `True`, no credentials are required to access StoreFront. 
  * 
  * ~> **Please Note** This feature requires a StoreFront store for unauthenticated users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#allow_anonymous_access DeliveryGroup#allow_anonymous_access}
  */
  readonly allowAnonymousAccess?: boolean | cdktf.IResolvable;
  /**
  * App Protection, an add-on feature for the Citrix Workspace app, provides enhanced security for Citrix published apps and desktops. The feature provides anti-keylogging and anti-screen capture capabilities for client sessions, helping protect data from keyloggers and screen scrapers.
  * 
  * ~> **Please Note** Before using the feature, make sure that these [requirements](https://docs.citrix.com/en-us/citrix-workspace-app/app-protection.html#system-requirements) are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#app_protection DeliveryGroup#app_protection}
  */
  readonly appProtection?: DeliveryGroupAppProtection;
  /**
  * Assign machines in the delivery group to users.
  * 
  * ~> **Please Note** Adding or removing values from this property will not add or remove machines. Adding an object will assign (or reassign if already assigned) the machine to user(s). Removing an object will unassign the corresponding machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#assign_machines_to_users DeliveryGroup#assign_machines_to_users}
  */
  readonly assignMachinesToUsers?: DeliveryGroupAssignMachinesToUsers[] | cdktf.IResolvable;
  /**
  * Machine catalogs from which to assign machines to the newly created delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#associated_machine_catalogs DeliveryGroup#associated_machine_catalogs}
  */
  readonly associatedMachineCatalogs?: DeliveryGroupAssociatedMachineCatalogs[] | cdktf.IResolvable;
  /**
  * A list of autoscale plugins to be associated with the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#autoscale_plugins DeliveryGroup#autoscale_plugins}
  */
  readonly autoscalePlugins?: DeliveryGroupAutoscalePlugins[] | cdktf.IResolvable;
  /**
  * The power management settings governing the machine(s) in the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#autoscale_settings DeliveryGroup#autoscale_settings}
  */
  readonly autoscaleSettings?: DeliveryGroupAutoscaleSettings;
  /**
  * Specifies the color depth for the delivery group. Available values are `FourBit`, `EightBit`, `SixteenBit`, and `TwentyFourBit`. Defaults to `TwentyFourBit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#color_depth DeliveryGroup#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Custom Access Policies for the delivery group. To manage built-in access policies use the `default_access_policies` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#custom_access_policies DeliveryGroup#custom_access_policies}
  */
  readonly customAccessPolicies?: DeliveryGroupCustomAccessPolicies[] | cdktf.IResolvable;
  /**
  * Manage built-in Access Policies for the delivery group. These are the Citrix Gateway Connections (via Access Gateway) and Non-Citrix Gateway Connections (not via Access Gateway) access policies.
  * 
  * ~> **Please Note** Default Access Policies can only be modified; they cannot be deleted. If using this property, both default policies have to be specified.
  * 
  * -> **Note** Use `Citrix Gateway connections` as the name for the default policy that is Via Access Gateway and `Non-Citrix Gateway connections` as the name for the default policy that is Not Via Access Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#default_access_policies DeliveryGroup#default_access_policies}
  */
  readonly defaultAccessPolicies?: DeliveryGroupDefaultAccessPolicies[] | cdktf.IResolvable;
  /**
  * The id of the icon to be used as the default icon for the desktops in the delivery group.
  * 
  * ~> **Please Note** This option is only supported for Citrix Cloud Customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#default_desktop_icon DeliveryGroup#default_desktop_icon}
  */
  readonly defaultDesktopIcon?: string;
  /**
  * The path of the folder in which the delivery group is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#delivery_group_folder_path DeliveryGroup#delivery_group_folder_path}
  */
  readonly deliveryGroupFolderPath?: string;
  /**
  * Delivery type of the delivery group. Available values are `DesktopsOnly`, `AppsOnly`, and `DesktopsAndApps`. Defaults to `DesktopsOnly` for Delivery Groups with associated Machine Catalogs that have `allocation_type` set to `Static` and for Delivery Groups that have `sharing_kind` set to `private`. Otherwise defaults to `DesktopsAndApps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#delivery_type DeliveryGroup#delivery_type}
  */
  readonly deliveryType?: string;
  /**
  * Description of the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#description DeliveryGroup#description}
  */
  readonly description?: string;
  /**
  * A list of Desktop resources to publish on the delivery group. Only 1 desktop can be added to a Remote PC Delivery Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#desktops DeliveryGroup#desktops}
  */
  readonly desktops?: DeliveryGroupDesktops[] | cdktf.IResolvable;
  /**
  * Whether the delivery group is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enabled DeliveryGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean that indicates the delivery group object should be force deleted on `terraform destroy` action. Defaults to `false`.
  * 
  * ~> **Please Note** The force deletion only happens when the `destroy` action is performed, not when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `terraform apply` run before a `destroy` to update this value in the resource state. Without a successful `terraform apply` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the delivery group or destroying the delivery group, this flag will not work. Additionally when importing a delivery group, a successful `terraform apply` is required to set this value in state before it will take effect on a destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#force_delete DeliveryGroup#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the delivery group is in maintenance mode. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#in_maintenance_mode DeliveryGroup#in_maintenance_mode}
  */
  readonly inMaintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Specifies the load balancing type for the delivery group. Supported values are `None`, `Horizontal`, and `Vertical`. Defaults to `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#load_balancing_type DeliveryGroup#load_balancing_type}
  */
  readonly loadBalancingType?: string;
  /**
  * In the event of a service disruption or loss of connectivity, select if you want Local Host Cache to keep resources in the delivery group available to launch new sessions. Existing sessions are not impacted. 
  * 
  * ~> **Please Note** This setting only impacts Single Session OS Random (pooled) desktops which are power managed. LHC is always enabled for Single Session OS static and Multi Session OS desktops.
  * 
  * -> **Note** When set to `true`, machines will remain available and allow new connections and changes to the machine caused by a user might be present in subsequent sessions. When set to `false`, machines in the delivery group will be unavailable for new connections during a Local Host Cache event. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#make_resources_available_in_lhc DeliveryGroup#make_resources_available_in_lhc}
  */
  readonly makeResourcesAvailableInLhc?: boolean | cdktf.IResolvable;
  /**
  * Metadata for the Delivery Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#metadata DeliveryGroup#metadata}
  */
  readonly metadata?: DeliveryGroupMetadata[] | cdktf.IResolvable;
  /**
  * Specifies the minimum functional level for the VDA machines in the delivery group. Defaults to `L7_20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#minimum_functional_level DeliveryGroup#minimum_functional_level}
  */
  readonly minimumFunctionalLevel?: string;
  /**
  * Name of the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
  /**
  * The reboot schedule for the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#reboot_schedules DeliveryGroup#reboot_schedules}
  */
  readonly rebootSchedules?: DeliveryGroupRebootSchedules[] | cdktf.IResolvable;
  /**
  * Restrict access to this Delivery Group by specifying users and groups in the allow and block list. To give access to unauthenticated users, use the `allow_anonymous_access` property.
  * 
  * ~> **Please Note** If `restricted_access_users` attribute is omitted or set to `null`, all authenticated users will have access to this Delivery Group. If attribute is specified as an empty object i.e. `{}`, then no user will have access to the delivery group because `allow_list` and `block_list` will be set as empty sets by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#restricted_access_users DeliveryGroup#restricted_access_users}
  */
  readonly restrictedAccessUsers?: DeliveryGroupRestrictedAccessUsers;
  /**
  * The IDs of the scopes for the delivery group to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#scopes DeliveryGroup#scopes}
  */
  readonly scopes?: string[];
  /**
  * When set to `true`, the SecureICA protocol is required for connections to the delivery group. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#secure_ica_required DeliveryGroup#secure_ica_required}
  */
  readonly secureIcaRequired?: boolean | cdktf.IResolvable;
  /**
  * The session support for the delivery group. Can only be set to `SingleSession` or `MultiSession`. Specify only if you want to create a Delivery Group without any `associated_machine_catalogs`. Ensure session support is same as that of the prospective Machine Catalogs you will associate this Delivery Group with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#session_support DeliveryGroup#session_support}
  */
  readonly sessionSupport?: string;
  /**
  * The sharing kind for the delivery group. Can only be set to `Shared` or `Private`. Specify only if you want to create a Delivery Group wthout any `associated_machine_catalogs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#sharing_kind DeliveryGroup#sharing_kind}
  */
  readonly sharingKind?: string;
  /**
  * A list of GUID identifiers of StoreFront Servers to associate with the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#storefront_servers DeliveryGroup#storefront_servers}
  */
  readonly storefrontServers?: string[];
  /**
  * A set of identifiers of tags to associate with the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#tags DeliveryGroup#tags}
  */
  readonly tags?: string[];
}
export interface DeliveryGroupAppProtectionApplyContextually {
  /**
  * When enabled, anti-keylogging is applied when a protected window is in focus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_anti_key_logging DeliveryGroup#enable_anti_key_logging}
  */
  readonly enableAntiKeyLogging: boolean | cdktf.IResolvable;
  /**
  * Specify whether to use anti-screen capture.
  * 
  * -> **Note** For Windows and macOS, only the window with protected content is blank. Anti-screen capture is only applied when the window is open. For Linux, the entire screen will appear blank. Anti-screen capture is only applied when the window is open or minimized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_anti_screen_capture DeliveryGroup#enable_anti_screen_capture}
  */
  readonly enableAntiScreenCapture: boolean | cdktf.IResolvable;
  /**
  * The name of the policy.
  * 
  * -> **Note** To refer to default policies, use `Citrix Gateway connections` as the name for the default policy that is Via Access Gateway and `Non-Citrix Gateway connections` as the name for the default policy that is Not Via Access Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#policy_name DeliveryGroup#policy_name}
  */
  readonly policyName: string;
}

export function deliveryGroupAppProtectionApplyContextuallyToTerraform(struct?: DeliveryGroupAppProtectionApplyContextually | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_anti_key_logging: cdktf.booleanToTerraform(struct!.enableAntiKeyLogging),
    enable_anti_screen_capture: cdktf.booleanToTerraform(struct!.enableAntiScreenCapture),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function deliveryGroupAppProtectionApplyContextuallyToHclTerraform(struct?: DeliveryGroupAppProtectionApplyContextually | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_anti_key_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableAntiKeyLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_anti_screen_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableAntiScreenCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAppProtectionApplyContextuallyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAppProtectionApplyContextually | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAntiKeyLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAntiKeyLogging = this._enableAntiKeyLogging;
    }
    if (this._enableAntiScreenCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAntiScreenCapture = this._enableAntiScreenCapture;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAppProtectionApplyContextually | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAntiKeyLogging = undefined;
      this._enableAntiScreenCapture = undefined;
      this._policyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAntiKeyLogging = value.enableAntiKeyLogging;
      this._enableAntiScreenCapture = value.enableAntiScreenCapture;
      this._policyName = value.policyName;
    }
  }

  // enable_anti_key_logging - computed: false, optional: false, required: true
  private _enableAntiKeyLogging?: boolean | cdktf.IResolvable; 
  public get enableAntiKeyLogging() {
    return this.getBooleanAttribute('enable_anti_key_logging');
  }
  public set enableAntiKeyLogging(value: boolean | cdktf.IResolvable) {
    this._enableAntiKeyLogging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAntiKeyLoggingInput() {
    return this._enableAntiKeyLogging;
  }

  // enable_anti_screen_capture - computed: false, optional: false, required: true
  private _enableAntiScreenCapture?: boolean | cdktf.IResolvable; 
  public get enableAntiScreenCapture() {
    return this.getBooleanAttribute('enable_anti_screen_capture');
  }
  public set enableAntiScreenCapture(value: boolean | cdktf.IResolvable) {
    this._enableAntiScreenCapture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAntiScreenCaptureInput() {
    return this._enableAntiScreenCapture;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}

export class DeliveryGroupAppProtectionApplyContextuallyList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAppProtectionApplyContextually[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAppProtectionApplyContextuallyOutputReference {
    return new DeliveryGroupAppProtectionApplyContextuallyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAppProtection {
  /**
  * Implement contextual App Protection using the connection filters defined in the Access Policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#apply_contextually DeliveryGroup#apply_contextually}
  */
  readonly applyContextually?: DeliveryGroupAppProtectionApplyContextually[] | cdktf.IResolvable;
  /**
  * When enabled, anti-keylogging is applied when a protected window is in focus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_anti_key_logging DeliveryGroup#enable_anti_key_logging}
  */
  readonly enableAntiKeyLogging?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to use anti-screen capture.
  * 
  * -> **Note** For Windows and macOS, only the window with protected content is blank. Anti-screen capture is only applied when the window is open. For Linux, the entire screen will appear blank. Anti-screen capture is only applied when the window is open or minimized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_anti_screen_capture DeliveryGroup#enable_anti_screen_capture}
  */
  readonly enableAntiScreenCapture?: boolean | cdktf.IResolvable;
}

export function deliveryGroupAppProtectionToTerraform(struct?: DeliveryGroupAppProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_contextually: cdktf.listMapper(deliveryGroupAppProtectionApplyContextuallyToTerraform, false)(struct!.applyContextually),
    enable_anti_key_logging: cdktf.booleanToTerraform(struct!.enableAntiKeyLogging),
    enable_anti_screen_capture: cdktf.booleanToTerraform(struct!.enableAntiScreenCapture),
  }
}


export function deliveryGroupAppProtectionToHclTerraform(struct?: DeliveryGroupAppProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_contextually: {
      value: cdktf.listMapperHcl(deliveryGroupAppProtectionApplyContextuallyToHclTerraform, false)(struct!.applyContextually),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupAppProtectionApplyContextuallyList",
    },
    enable_anti_key_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableAntiKeyLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_anti_screen_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableAntiScreenCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAppProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeliveryGroupAppProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyContextually?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyContextually = this._applyContextually?.internalValue;
    }
    if (this._enableAntiKeyLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAntiKeyLogging = this._enableAntiKeyLogging;
    }
    if (this._enableAntiScreenCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAntiScreenCapture = this._enableAntiScreenCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAppProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyContextually.internalValue = undefined;
      this._enableAntiKeyLogging = undefined;
      this._enableAntiScreenCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyContextually.internalValue = value.applyContextually;
      this._enableAntiKeyLogging = value.enableAntiKeyLogging;
      this._enableAntiScreenCapture = value.enableAntiScreenCapture;
    }
  }

  // apply_contextually - computed: false, optional: true, required: false
  private _applyContextually = new DeliveryGroupAppProtectionApplyContextuallyList(this, "apply_contextually", false);
  public get applyContextually() {
    return this._applyContextually;
  }
  public putApplyContextually(value: DeliveryGroupAppProtectionApplyContextually[] | cdktf.IResolvable) {
    this._applyContextually.internalValue = value;
  }
  public resetApplyContextually() {
    this._applyContextually.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyContextuallyInput() {
    return this._applyContextually.internalValue;
  }

  // enable_anti_key_logging - computed: false, optional: true, required: false
  private _enableAntiKeyLogging?: boolean | cdktf.IResolvable; 
  public get enableAntiKeyLogging() {
    return this.getBooleanAttribute('enable_anti_key_logging');
  }
  public set enableAntiKeyLogging(value: boolean | cdktf.IResolvable) {
    this._enableAntiKeyLogging = value;
  }
  public resetEnableAntiKeyLogging() {
    this._enableAntiKeyLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAntiKeyLoggingInput() {
    return this._enableAntiKeyLogging;
  }

  // enable_anti_screen_capture - computed: false, optional: true, required: false
  private _enableAntiScreenCapture?: boolean | cdktf.IResolvable; 
  public get enableAntiScreenCapture() {
    return this.getBooleanAttribute('enable_anti_screen_capture');
  }
  public set enableAntiScreenCapture(value: boolean | cdktf.IResolvable) {
    this._enableAntiScreenCapture = value;
  }
  public resetEnableAntiScreenCapture() {
    this._enableAntiScreenCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAntiScreenCaptureInput() {
    return this._enableAntiScreenCapture;
  }
}
export interface DeliveryGroupAssignMachinesToUsers {
  /**
  * The name of the machine. For domain-joined machines, the name must be in the format <domain>\<machine>, all in lowercase. For non domain-joined machines, use the machine name, all in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#machine_name DeliveryGroup#machine_name}
  */
  readonly machineName: string;
  /**
  * The list of users to assign to the machine. 
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserName`) or UPN (`user@domain.com`) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#users DeliveryGroup#users}
  */
  readonly users: string[];
}

export function deliveryGroupAssignMachinesToUsersToTerraform(struct?: DeliveryGroupAssignMachinesToUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_name: cdktf.stringToTerraform(struct!.machineName),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function deliveryGroupAssignMachinesToUsersToHclTerraform(struct?: DeliveryGroupAssignMachinesToUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_name: {
      value: cdktf.stringToHclTerraform(struct!.machineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAssignMachinesToUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAssignMachinesToUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineName = this._machineName;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAssignMachinesToUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineName = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineName = value.machineName;
      this._users = value.users;
    }
  }

  // machine_name - computed: false, optional: false, required: true
  private _machineName?: string; 
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }
  public set machineName(value: string) {
    this._machineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNameInput() {
    return this._machineName;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class DeliveryGroupAssignMachinesToUsersList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAssignMachinesToUsers[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAssignMachinesToUsersOutputReference {
    return new DeliveryGroupAssignMachinesToUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAssociatedMachineCatalogs {
  /**
  * Id of the machine catalog from which to add machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#machine_catalog DeliveryGroup#machine_catalog}
  */
  readonly machineCatalog: string;
  /**
  * The number of machines to assign from the machine catalog to the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#machine_count DeliveryGroup#machine_count}
  */
  readonly machineCount: number;
}

export function deliveryGroupAssociatedMachineCatalogsToTerraform(struct?: DeliveryGroupAssociatedMachineCatalogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_catalog: cdktf.stringToTerraform(struct!.machineCatalog),
    machine_count: cdktf.numberToTerraform(struct!.machineCount),
  }
}


export function deliveryGroupAssociatedMachineCatalogsToHclTerraform(struct?: DeliveryGroupAssociatedMachineCatalogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_catalog: {
      value: cdktf.stringToHclTerraform(struct!.machineCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_count: {
      value: cdktf.numberToHclTerraform(struct!.machineCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAssociatedMachineCatalogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAssociatedMachineCatalogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineCatalog = this._machineCatalog;
    }
    if (this._machineCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineCount = this._machineCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAssociatedMachineCatalogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineCatalog = undefined;
      this._machineCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineCatalog = value.machineCatalog;
      this._machineCount = value.machineCount;
    }
  }

  // machine_catalog - computed: false, optional: false, required: true
  private _machineCatalog?: string; 
  public get machineCatalog() {
    return this.getStringAttribute('machine_catalog');
  }
  public set machineCatalog(value: string) {
    this._machineCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCatalogInput() {
    return this._machineCatalog;
  }

  // machine_count - computed: false, optional: false, required: true
  private _machineCount?: number; 
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }
  public set machineCount(value: number) {
    this._machineCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCountInput() {
    return this._machineCount;
  }
}

export class DeliveryGroupAssociatedMachineCatalogsList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAssociatedMachineCatalogs[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAssociatedMachineCatalogsOutputReference {
    return new DeliveryGroupAssociatedMachineCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAutoscalePlugins {
  /**
  * The list of dates for the autoscale plugin. Dates should be in the format `YYYY-MM-DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#dates DeliveryGroup#dates}
  */
  readonly dates: string[];
  /**
  * Description for the autoscale plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#description DeliveryGroup#description}
  */
  readonly description?: string;
  /**
  * Whether the autoscale plugin is enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enabled DeliveryGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the autoscale plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
  /**
  * The priority of this plugin with respect to other plugins associated with the same delivery group. Priority 1 is the highest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#priority DeliveryGroup#priority}
  */
  readonly priority: number;
}

export function deliveryGroupAutoscalePluginsToTerraform(struct?: DeliveryGroupAutoscalePlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dates),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function deliveryGroupAutoscalePluginsToHclTerraform(struct?: DeliveryGroupAutoscalePlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAutoscalePluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAutoscalePlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAutoscalePlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dates = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dates = value.dates;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // dates - computed: false, optional: false, required: true
  private _dates?: string[]; 
  public get dates() {
    return cdktf.Fn.tolist(this.getListAttribute('dates'));
  }
  public set dates(value: string[]) {
    this._dates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DeliveryGroupAutoscalePluginsList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAutoscalePlugins[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAutoscalePluginsOutputReference {
    return new DeliveryGroupAutoscalePluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules {
  /**
  * The number of machines (either as an absolute number or a percentage of the machines in the delivery group, depending on the value of PoolUsingPercentage) that are to be maintained in a running state, whether they are in use or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#pool_size DeliveryGroup#pool_size}
  */
  readonly poolSize: number;
  /**
  * Time range during which the pool size applies. 
  * 
  * -> **Note** Time range format is `HH:mm-HH:mm`, e.g. `09:00-17:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#time_range DeliveryGroup#time_range}
  */
  readonly timeRange: string;
}

export function deliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesToTerraform(struct?: DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
  }
}


export function deliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesToHclTerraform(struct?: DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_range: {
      value: cdktf.stringToHclTerraform(struct!.timeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolSize = undefined;
      this._timeRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolSize = value.poolSize;
      this._timeRange = value.timeRange;
    }
  }

  // pool_size - computed: false, optional: false, required: true
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }
}

export class DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesOutputReference {
    return new DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAutoscaleSettingsPowerTimeSchemes {
  /**
  * The pattern of days of the week that the power time scheme covers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#days_of_week DeliveryGroup#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * The name of the power time scheme as displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#display_name DeliveryGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Peak time ranges during the day. e.g. 09:00-17:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_time_ranges DeliveryGroup#peak_time_ranges}
  */
  readonly peakTimeRanges: string[];
  /**
  * Pool size schedules during the day. Each is specified as a time range and an indicator of the number of machines that should be powered on during that time range. 
  * 
  * ~> **Please Note** Do not specify schedules when no machines should be powered on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#pool_size_schedules DeliveryGroup#pool_size_schedules}
  */
  readonly poolSizeSchedules?: DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules[] | cdktf.IResolvable;
  /**
  * Indicates whether the integer values in the pool size array are to be treated as absolute values (if this value is `false`) or as percentages of the number of machines in the delivery group (if this value is `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#pool_using_percentage DeliveryGroup#pool_using_percentage}
  */
  readonly poolUsingPercentage: boolean | cdktf.IResolvable;
}

export function deliveryGroupAutoscaleSettingsPowerTimeSchemesToTerraform(struct?: DeliveryGroupAutoscaleSettingsPowerTimeSchemes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    peak_time_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peakTimeRanges),
    pool_size_schedules: cdktf.listMapper(deliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesToTerraform, false)(struct!.poolSizeSchedules),
    pool_using_percentage: cdktf.booleanToTerraform(struct!.poolUsingPercentage),
  }
}


export function deliveryGroupAutoscaleSettingsPowerTimeSchemesToHclTerraform(struct?: DeliveryGroupAutoscaleSettingsPowerTimeSchemes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_time_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peakTimeRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pool_size_schedules: {
      value: cdktf.listMapperHcl(deliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesToHclTerraform, false)(struct!.poolSizeSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesList",
    },
    pool_using_percentage: {
      value: cdktf.booleanToHclTerraform(struct!.poolUsingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAutoscaleSettingsPowerTimeSchemesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupAutoscaleSettingsPowerTimeSchemes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._peakTimeRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakTimeRanges = this._peakTimeRanges;
    }
    if (this._poolSizeSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSizeSchedules = this._poolSizeSchedules?.internalValue;
    }
    if (this._poolUsingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolUsingPercentage = this._poolUsingPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAutoscaleSettingsPowerTimeSchemes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._displayName = undefined;
      this._peakTimeRanges = undefined;
      this._poolSizeSchedules.internalValue = undefined;
      this._poolUsingPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._displayName = value.displayName;
      this._peakTimeRanges = value.peakTimeRanges;
      this._poolSizeSchedules.internalValue = value.poolSizeSchedules;
      this._poolUsingPercentage = value.poolUsingPercentage;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // peak_time_ranges - computed: false, optional: false, required: true
  private _peakTimeRanges?: string[]; 
  public get peakTimeRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('peak_time_ranges'));
  }
  public set peakTimeRanges(value: string[]) {
    this._peakTimeRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakTimeRangesInput() {
    return this._peakTimeRanges;
  }

  // pool_size_schedules - computed: false, optional: true, required: false
  private _poolSizeSchedules = new DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedulesList(this, "pool_size_schedules", false);
  public get poolSizeSchedules() {
    return this._poolSizeSchedules;
  }
  public putPoolSizeSchedules(value: DeliveryGroupAutoscaleSettingsPowerTimeSchemesPoolSizeSchedules[] | cdktf.IResolvable) {
    this._poolSizeSchedules.internalValue = value;
  }
  public resetPoolSizeSchedules() {
    this._poolSizeSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeSchedulesInput() {
    return this._poolSizeSchedules.internalValue;
  }

  // pool_using_percentage - computed: false, optional: false, required: true
  private _poolUsingPercentage?: boolean | cdktf.IResolvable; 
  public get poolUsingPercentage() {
    return this.getBooleanAttribute('pool_using_percentage');
  }
  public set poolUsingPercentage(value: boolean | cdktf.IResolvable) {
    this._poolUsingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUsingPercentageInput() {
    return this._poolUsingPercentage;
  }
}

export class DeliveryGroupAutoscaleSettingsPowerTimeSchemesList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupAutoscaleSettingsPowerTimeSchemes[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupAutoscaleSettingsPowerTimeSchemesOutputReference {
    return new DeliveryGroupAutoscaleSettingsPowerTimeSchemesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupAutoscaleSettings {
  /**
  * Whether auto-scale is enabled for the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#autoscale_enabled DeliveryGroup#autoscale_enabled}
  */
  readonly autoscaleEnabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the time in seconds after which an idle session belonging to the delivery group is disconnected during off-peak time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#disconnect_off_peak_idle_session_after_seconds DeliveryGroup#disconnect_off_peak_idle_session_after_seconds}
  */
  readonly disconnectOffPeakIdleSessionAfterSeconds?: number;
  /**
  * Specifies the time in seconds after which an idle session belonging to the delivery group is disconnected during peak time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#disconnect_peak_idle_session_after_seconds DeliveryGroup#disconnect_peak_idle_session_after_seconds}
  */
  readonly disconnectPeakIdleSessionAfterSeconds?: number;
  /**
  * Specifies the time in seconds after which a disconnected session belonging to the delivery group is terminated during off peak time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_off_peak_disconnected_session_after_seconds DeliveryGroup#log_off_off_peak_disconnected_session_after_seconds}
  */
  readonly logOffOffPeakDisconnectedSessionAfterSeconds?: number;
  /**
  * Specifies the time in seconds after which a disconnected session belonging to the delivery group is terminated during peak time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_peak_disconnected_session_after_seconds DeliveryGroup#log_off_peak_disconnected_session_after_seconds}
  */
  readonly logOffPeakDisconnectedSessionAfterSeconds?: number;
  /**
  * Indicates whether log off reminder is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_reminder_enabled DeliveryGroup#log_off_reminder_enabled}
  */
  readonly logOffReminderEnabled?: boolean | cdktf.IResolvable;
  /**
  * The message to be displayed in the log off reminder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_reminder_message DeliveryGroup#log_off_reminder_message}
  */
  readonly logOffReminderMessage?: string;
  /**
  * The title of the log off reminder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_reminder_title DeliveryGroup#log_off_reminder_title}
  */
  readonly logOffReminderTitle?: string;
  /**
  * The message to be displayed in the log off warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_warning_message DeliveryGroup#log_off_warning_message}
  */
  readonly logOffWarningMessage?: string;
  /**
  * The title of the log off warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#log_off_warning_title DeliveryGroup#log_off_warning_title}
  */
  readonly logOffWarningTitle?: string;
  /**
  * The percentage of machines in the delivery group that should be kept available in an idle state outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_buffer_size_percent DeliveryGroup#off_peak_buffer_size_percent}
  */
  readonly offPeakBufferSizePercent?: number;
  /**
  * The action to be performed after a configurable period of a user session disconnecting outside peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_disconnect_action DeliveryGroup#off_peak_disconnect_action}
  */
  readonly offPeakDisconnectAction?: string;
  /**
  * The number of minutes before the configured action should be performed after a user session disconnectts outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_disconnect_timeout_minutes DeliveryGroup#off_peak_disconnect_timeout_minutes}
  */
  readonly offPeakDisconnectTimeoutMinutes?: number;
  /**
  * The action to be performed after a second configurable period of a user session disconnecting outside peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_extended_disconnect_action DeliveryGroup#off_peak_extended_disconnect_action}
  */
  readonly offPeakExtendedDisconnectAction?: string;
  /**
  * The number of minutes before the second configured action should be performed after a user session disconnects outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_extended_disconnect_timeout_minutes DeliveryGroup#off_peak_extended_disconnect_timeout_minutes}
  */
  readonly offPeakExtendedDisconnectTimeoutMinutes?: number;
  /**
  * Limit in seconds to force log off user after user logs off from their sessions during off-peak hours. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_limit_seconds_to_force_log_off_user DeliveryGroup#off_peak_limit_seconds_to_force_log_off_user}
  */
  readonly offPeakLimitSecondsToForceLogOffUser?: number;
  /**
  * The action to be performed after a configurable period of a user session ending outside peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_log_off_action DeliveryGroup#off_peak_log_off_action}
  */
  readonly offPeakLogOffAction?: string;
  /**
  * The interval in seconds at which the log off reminder is sent during off-peak hours. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_log_off_reminder_interval DeliveryGroup#off_peak_log_off_reminder_interval}
  */
  readonly offPeakLogOffReminderInterval?: number;
  /**
  * The number of minutes before the configured action should be performed after a user session ends outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_log_off_timeout_minutes DeliveryGroup#off_peak_log_off_timeout_minutes}
  */
  readonly offPeakLogOffTimeoutMinutes?: number;
  /**
  * Specifies the percentage of remaining untagged capacity to fall below to start powering on tagged machines during off peak hours. 
  * 
  * ~> **Please Note** This setting is only applicable when the `restrict_autoscale_tag` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#off_peak_restrict_min_idle_untagged_percent DeliveryGroup#off_peak_restrict_min_idle_untagged_percent}
  */
  readonly offPeakRestrictMinIdleUntaggedPercent?: number;
  /**
  * The action to be performed on an assigned machine previously started by autoscale that subsequently remains unused. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_autoscale_assigned_power_on_idle_action DeliveryGroup#peak_autoscale_assigned_power_on_idle_action}
  */
  readonly peakAutoscaleAssignedPowerOnIdleAction?: string;
  /**
  * The number of minutes before the configured action is performed on an assigned machine previously started by autoscale that subsequently remains unused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_autoscale_assigned_power_on_idle_timeout_minutes DeliveryGroup#peak_autoscale_assigned_power_on_idle_timeout_minutes}
  */
  readonly peakAutoscaleAssignedPowerOnIdleTimeoutMinutes?: number;
  /**
  * The percentage of machines in the delivery group that should be kept available in an idle state in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_buffer_size_percent DeliveryGroup#peak_buffer_size_percent}
  */
  readonly peakBufferSizePercent?: number;
  /**
  * The action to be performed after a configurable period of a user session disconnecting in peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_disconnect_action DeliveryGroup#peak_disconnect_action}
  */
  readonly peakDisconnectAction?: string;
  /**
  * The number of minutes before the configured action should be performed after a user session disconnects in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_disconnect_timeout_minutes DeliveryGroup#peak_disconnect_timeout_minutes}
  */
  readonly peakDisconnectTimeoutMinutes?: number;
  /**
  * The action to be performed after a second configurable period of a user session disconnecting in peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_extended_disconnect_action DeliveryGroup#peak_extended_disconnect_action}
  */
  readonly peakExtendedDisconnectAction?: string;
  /**
  * The number of minutes before the second configured action should be performed after a user session disconnects in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_extended_disconnect_timeout_minutes DeliveryGroup#peak_extended_disconnect_timeout_minutes}
  */
  readonly peakExtendedDisconnectTimeoutMinutes?: number;
  /**
  * Limit in seconds to force log off user after user logs off from their sessions during peak hours. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_limit_seconds_to_force_log_off_user DeliveryGroup#peak_limit_seconds_to_force_log_off_user}
  */
  readonly peakLimitSecondsToForceLogOffUser?: number;
  /**
  * The action to be performed after a configurable period of a user session ending in peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_log_off_action DeliveryGroup#peak_log_off_action}
  */
  readonly peakLogOffAction?: string;
  /**
  * The interval in seconds at which the log off reminder is sent during peak hours. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_log_off_reminder_interval DeliveryGroup#peak_log_off_reminder_interval}
  */
  readonly peakLogOffReminderInterval?: number;
  /**
  * The number of minutes before the configured action should be performed after a user session ends in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_log_off_timeout_minutes DeliveryGroup#peak_log_off_timeout_minutes}
  */
  readonly peakLogOffTimeoutMinutes?: number;
  /**
  * Specifies the percentage of remaining untagged capacity to fall below to start powering on tagged machines during peak hours. 
  * 
  * ~> **Please Note** This setting is only applicable when the `restrict_autoscale_tag` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#peak_restrict_min_idle_untagged_percent DeliveryGroup#peak_restrict_min_idle_untagged_percent}
  */
  readonly peakRestrictMinIdleUntaggedPercent?: number;
  /**
  * Delay before machines are powered off, when scaling down. Specified in minutes. 
  * 
  * ~> **Please Note** Applies only to multi-session machines. 
  * 
  * -> **Note** By default, the power-off delay is 30 minutes. You can set it in a range of 0 to 60 minutes. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#power_off_delay_minutes DeliveryGroup#power_off_delay_minutes}
  */
  readonly powerOffDelayMinutes?: number;
  /**
  * Power management time schemes.
  * 
  * ~> **Please Note** It is not allowed to have more than one power time scheme that cover the same day of the week for the same delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#power_time_schemes DeliveryGroup#power_time_schemes}
  */
  readonly powerTimeSchemes?: DeliveryGroupAutoscaleSettingsPowerTimeSchemes[] | cdktf.IResolvable;
  /**
  * Name of the tag on the machines that autoscale will apply on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#restrict_autoscale_tag DeliveryGroup#restrict_autoscale_tag}
  */
  readonly restrictAutoscaleTag?: string;
  /**
  * The time zone in which this delivery group's machines reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#timezone DeliveryGroup#timezone}
  */
  readonly timezone?: string;
}

export function deliveryGroupAutoscaleSettingsToTerraform(struct?: DeliveryGroupAutoscaleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_enabled: cdktf.booleanToTerraform(struct!.autoscaleEnabled),
    disconnect_off_peak_idle_session_after_seconds: cdktf.numberToTerraform(struct!.disconnectOffPeakIdleSessionAfterSeconds),
    disconnect_peak_idle_session_after_seconds: cdktf.numberToTerraform(struct!.disconnectPeakIdleSessionAfterSeconds),
    log_off_off_peak_disconnected_session_after_seconds: cdktf.numberToTerraform(struct!.logOffOffPeakDisconnectedSessionAfterSeconds),
    log_off_peak_disconnected_session_after_seconds: cdktf.numberToTerraform(struct!.logOffPeakDisconnectedSessionAfterSeconds),
    log_off_reminder_enabled: cdktf.booleanToTerraform(struct!.logOffReminderEnabled),
    log_off_reminder_message: cdktf.stringToTerraform(struct!.logOffReminderMessage),
    log_off_reminder_title: cdktf.stringToTerraform(struct!.logOffReminderTitle),
    log_off_warning_message: cdktf.stringToTerraform(struct!.logOffWarningMessage),
    log_off_warning_title: cdktf.stringToTerraform(struct!.logOffWarningTitle),
    off_peak_buffer_size_percent: cdktf.numberToTerraform(struct!.offPeakBufferSizePercent),
    off_peak_disconnect_action: cdktf.stringToTerraform(struct!.offPeakDisconnectAction),
    off_peak_disconnect_timeout_minutes: cdktf.numberToTerraform(struct!.offPeakDisconnectTimeoutMinutes),
    off_peak_extended_disconnect_action: cdktf.stringToTerraform(struct!.offPeakExtendedDisconnectAction),
    off_peak_extended_disconnect_timeout_minutes: cdktf.numberToTerraform(struct!.offPeakExtendedDisconnectTimeoutMinutes),
    off_peak_limit_seconds_to_force_log_off_user: cdktf.numberToTerraform(struct!.offPeakLimitSecondsToForceLogOffUser),
    off_peak_log_off_action: cdktf.stringToTerraform(struct!.offPeakLogOffAction),
    off_peak_log_off_reminder_interval: cdktf.numberToTerraform(struct!.offPeakLogOffReminderInterval),
    off_peak_log_off_timeout_minutes: cdktf.numberToTerraform(struct!.offPeakLogOffTimeoutMinutes),
    off_peak_restrict_min_idle_untagged_percent: cdktf.numberToTerraform(struct!.offPeakRestrictMinIdleUntaggedPercent),
    peak_autoscale_assigned_power_on_idle_action: cdktf.stringToTerraform(struct!.peakAutoscaleAssignedPowerOnIdleAction),
    peak_autoscale_assigned_power_on_idle_timeout_minutes: cdktf.numberToTerraform(struct!.peakAutoscaleAssignedPowerOnIdleTimeoutMinutes),
    peak_buffer_size_percent: cdktf.numberToTerraform(struct!.peakBufferSizePercent),
    peak_disconnect_action: cdktf.stringToTerraform(struct!.peakDisconnectAction),
    peak_disconnect_timeout_minutes: cdktf.numberToTerraform(struct!.peakDisconnectTimeoutMinutes),
    peak_extended_disconnect_action: cdktf.stringToTerraform(struct!.peakExtendedDisconnectAction),
    peak_extended_disconnect_timeout_minutes: cdktf.numberToTerraform(struct!.peakExtendedDisconnectTimeoutMinutes),
    peak_limit_seconds_to_force_log_off_user: cdktf.numberToTerraform(struct!.peakLimitSecondsToForceLogOffUser),
    peak_log_off_action: cdktf.stringToTerraform(struct!.peakLogOffAction),
    peak_log_off_reminder_interval: cdktf.numberToTerraform(struct!.peakLogOffReminderInterval),
    peak_log_off_timeout_minutes: cdktf.numberToTerraform(struct!.peakLogOffTimeoutMinutes),
    peak_restrict_min_idle_untagged_percent: cdktf.numberToTerraform(struct!.peakRestrictMinIdleUntaggedPercent),
    power_off_delay_minutes: cdktf.numberToTerraform(struct!.powerOffDelayMinutes),
    power_time_schemes: cdktf.listMapper(deliveryGroupAutoscaleSettingsPowerTimeSchemesToTerraform, false)(struct!.powerTimeSchemes),
    restrict_autoscale_tag: cdktf.stringToTerraform(struct!.restrictAutoscaleTag),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function deliveryGroupAutoscaleSettingsToHclTerraform(struct?: DeliveryGroupAutoscaleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disconnect_off_peak_idle_session_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.disconnectOffPeakIdleSessionAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disconnect_peak_idle_session_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.disconnectPeakIdleSessionAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_off_off_peak_disconnected_session_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.logOffOffPeakDisconnectedSessionAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_off_peak_disconnected_session_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.logOffPeakDisconnectedSessionAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_off_reminder_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.logOffReminderEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_off_reminder_message: {
      value: cdktf.stringToHclTerraform(struct!.logOffReminderMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_off_reminder_title: {
      value: cdktf.stringToHclTerraform(struct!.logOffReminderTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_off_warning_message: {
      value: cdktf.stringToHclTerraform(struct!.logOffWarningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_off_warning_title: {
      value: cdktf.stringToHclTerraform(struct!.logOffWarningTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_buffer_size_percent: {
      value: cdktf.numberToHclTerraform(struct!.offPeakBufferSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_disconnect_action: {
      value: cdktf.stringToHclTerraform(struct!.offPeakDisconnectAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_disconnect_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.offPeakDisconnectTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_extended_disconnect_action: {
      value: cdktf.stringToHclTerraform(struct!.offPeakExtendedDisconnectAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_extended_disconnect_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.offPeakExtendedDisconnectTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_limit_seconds_to_force_log_off_user: {
      value: cdktf.numberToHclTerraform(struct!.offPeakLimitSecondsToForceLogOffUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_log_off_action: {
      value: cdktf.stringToHclTerraform(struct!.offPeakLogOffAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_log_off_reminder_interval: {
      value: cdktf.numberToHclTerraform(struct!.offPeakLogOffReminderInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_log_off_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.offPeakLogOffTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_restrict_min_idle_untagged_percent: {
      value: cdktf.numberToHclTerraform(struct!.offPeakRestrictMinIdleUntaggedPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_autoscale_assigned_power_on_idle_action: {
      value: cdktf.stringToHclTerraform(struct!.peakAutoscaleAssignedPowerOnIdleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_autoscale_assigned_power_on_idle_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.peakAutoscaleAssignedPowerOnIdleTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_buffer_size_percent: {
      value: cdktf.numberToHclTerraform(struct!.peakBufferSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_disconnect_action: {
      value: cdktf.stringToHclTerraform(struct!.peakDisconnectAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_disconnect_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.peakDisconnectTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_extended_disconnect_action: {
      value: cdktf.stringToHclTerraform(struct!.peakExtendedDisconnectAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_extended_disconnect_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.peakExtendedDisconnectTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_limit_seconds_to_force_log_off_user: {
      value: cdktf.numberToHclTerraform(struct!.peakLimitSecondsToForceLogOffUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_log_off_action: {
      value: cdktf.stringToHclTerraform(struct!.peakLogOffAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_log_off_reminder_interval: {
      value: cdktf.numberToHclTerraform(struct!.peakLogOffReminderInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_log_off_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.peakLogOffTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_restrict_min_idle_untagged_percent: {
      value: cdktf.numberToHclTerraform(struct!.peakRestrictMinIdleUntaggedPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_off_delay_minutes: {
      value: cdktf.numberToHclTerraform(struct!.powerOffDelayMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_time_schemes: {
      value: cdktf.listMapperHcl(deliveryGroupAutoscaleSettingsPowerTimeSchemesToHclTerraform, false)(struct!.powerTimeSchemes),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupAutoscaleSettingsPowerTimeSchemesList",
    },
    restrict_autoscale_tag: {
      value: cdktf.stringToHclTerraform(struct!.restrictAutoscaleTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupAutoscaleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeliveryGroupAutoscaleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleEnabled = this._autoscaleEnabled;
    }
    if (this._disconnectOffPeakIdleSessionAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectOffPeakIdleSessionAfterSeconds = this._disconnectOffPeakIdleSessionAfterSeconds;
    }
    if (this._disconnectPeakIdleSessionAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectPeakIdleSessionAfterSeconds = this._disconnectPeakIdleSessionAfterSeconds;
    }
    if (this._logOffOffPeakDisconnectedSessionAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffOffPeakDisconnectedSessionAfterSeconds = this._logOffOffPeakDisconnectedSessionAfterSeconds;
    }
    if (this._logOffPeakDisconnectedSessionAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffPeakDisconnectedSessionAfterSeconds = this._logOffPeakDisconnectedSessionAfterSeconds;
    }
    if (this._logOffReminderEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffReminderEnabled = this._logOffReminderEnabled;
    }
    if (this._logOffReminderMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffReminderMessage = this._logOffReminderMessage;
    }
    if (this._logOffReminderTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffReminderTitle = this._logOffReminderTitle;
    }
    if (this._logOffWarningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffWarningMessage = this._logOffWarningMessage;
    }
    if (this._logOffWarningTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOffWarningTitle = this._logOffWarningTitle;
    }
    if (this._offPeakBufferSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakBufferSizePercent = this._offPeakBufferSizePercent;
    }
    if (this._offPeakDisconnectAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakDisconnectAction = this._offPeakDisconnectAction;
    }
    if (this._offPeakDisconnectTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakDisconnectTimeoutMinutes = this._offPeakDisconnectTimeoutMinutes;
    }
    if (this._offPeakExtendedDisconnectAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakExtendedDisconnectAction = this._offPeakExtendedDisconnectAction;
    }
    if (this._offPeakExtendedDisconnectTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakExtendedDisconnectTimeoutMinutes = this._offPeakExtendedDisconnectTimeoutMinutes;
    }
    if (this._offPeakLimitSecondsToForceLogOffUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakLimitSecondsToForceLogOffUser = this._offPeakLimitSecondsToForceLogOffUser;
    }
    if (this._offPeakLogOffAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakLogOffAction = this._offPeakLogOffAction;
    }
    if (this._offPeakLogOffReminderInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakLogOffReminderInterval = this._offPeakLogOffReminderInterval;
    }
    if (this._offPeakLogOffTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakLogOffTimeoutMinutes = this._offPeakLogOffTimeoutMinutes;
    }
    if (this._offPeakRestrictMinIdleUntaggedPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakRestrictMinIdleUntaggedPercent = this._offPeakRestrictMinIdleUntaggedPercent;
    }
    if (this._peakAutoscaleAssignedPowerOnIdleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakAutoscaleAssignedPowerOnIdleAction = this._peakAutoscaleAssignedPowerOnIdleAction;
    }
    if (this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakAutoscaleAssignedPowerOnIdleTimeoutMinutes = this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes;
    }
    if (this._peakBufferSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakBufferSizePercent = this._peakBufferSizePercent;
    }
    if (this._peakDisconnectAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakDisconnectAction = this._peakDisconnectAction;
    }
    if (this._peakDisconnectTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakDisconnectTimeoutMinutes = this._peakDisconnectTimeoutMinutes;
    }
    if (this._peakExtendedDisconnectAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakExtendedDisconnectAction = this._peakExtendedDisconnectAction;
    }
    if (this._peakExtendedDisconnectTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakExtendedDisconnectTimeoutMinutes = this._peakExtendedDisconnectTimeoutMinutes;
    }
    if (this._peakLimitSecondsToForceLogOffUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakLimitSecondsToForceLogOffUser = this._peakLimitSecondsToForceLogOffUser;
    }
    if (this._peakLogOffAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakLogOffAction = this._peakLogOffAction;
    }
    if (this._peakLogOffReminderInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakLogOffReminderInterval = this._peakLogOffReminderInterval;
    }
    if (this._peakLogOffTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakLogOffTimeoutMinutes = this._peakLogOffTimeoutMinutes;
    }
    if (this._peakRestrictMinIdleUntaggedPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakRestrictMinIdleUntaggedPercent = this._peakRestrictMinIdleUntaggedPercent;
    }
    if (this._powerOffDelayMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerOffDelayMinutes = this._powerOffDelayMinutes;
    }
    if (this._powerTimeSchemes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerTimeSchemes = this._powerTimeSchemes?.internalValue;
    }
    if (this._restrictAutoscaleTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAutoscaleTag = this._restrictAutoscaleTag;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupAutoscaleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaleEnabled = undefined;
      this._disconnectOffPeakIdleSessionAfterSeconds = undefined;
      this._disconnectPeakIdleSessionAfterSeconds = undefined;
      this._logOffOffPeakDisconnectedSessionAfterSeconds = undefined;
      this._logOffPeakDisconnectedSessionAfterSeconds = undefined;
      this._logOffReminderEnabled = undefined;
      this._logOffReminderMessage = undefined;
      this._logOffReminderTitle = undefined;
      this._logOffWarningMessage = undefined;
      this._logOffWarningTitle = undefined;
      this._offPeakBufferSizePercent = undefined;
      this._offPeakDisconnectAction = undefined;
      this._offPeakDisconnectTimeoutMinutes = undefined;
      this._offPeakExtendedDisconnectAction = undefined;
      this._offPeakExtendedDisconnectTimeoutMinutes = undefined;
      this._offPeakLimitSecondsToForceLogOffUser = undefined;
      this._offPeakLogOffAction = undefined;
      this._offPeakLogOffReminderInterval = undefined;
      this._offPeakLogOffTimeoutMinutes = undefined;
      this._offPeakRestrictMinIdleUntaggedPercent = undefined;
      this._peakAutoscaleAssignedPowerOnIdleAction = undefined;
      this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes = undefined;
      this._peakBufferSizePercent = undefined;
      this._peakDisconnectAction = undefined;
      this._peakDisconnectTimeoutMinutes = undefined;
      this._peakExtendedDisconnectAction = undefined;
      this._peakExtendedDisconnectTimeoutMinutes = undefined;
      this._peakLimitSecondsToForceLogOffUser = undefined;
      this._peakLogOffAction = undefined;
      this._peakLogOffReminderInterval = undefined;
      this._peakLogOffTimeoutMinutes = undefined;
      this._peakRestrictMinIdleUntaggedPercent = undefined;
      this._powerOffDelayMinutes = undefined;
      this._powerTimeSchemes.internalValue = undefined;
      this._restrictAutoscaleTag = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaleEnabled = value.autoscaleEnabled;
      this._disconnectOffPeakIdleSessionAfterSeconds = value.disconnectOffPeakIdleSessionAfterSeconds;
      this._disconnectPeakIdleSessionAfterSeconds = value.disconnectPeakIdleSessionAfterSeconds;
      this._logOffOffPeakDisconnectedSessionAfterSeconds = value.logOffOffPeakDisconnectedSessionAfterSeconds;
      this._logOffPeakDisconnectedSessionAfterSeconds = value.logOffPeakDisconnectedSessionAfterSeconds;
      this._logOffReminderEnabled = value.logOffReminderEnabled;
      this._logOffReminderMessage = value.logOffReminderMessage;
      this._logOffReminderTitle = value.logOffReminderTitle;
      this._logOffWarningMessage = value.logOffWarningMessage;
      this._logOffWarningTitle = value.logOffWarningTitle;
      this._offPeakBufferSizePercent = value.offPeakBufferSizePercent;
      this._offPeakDisconnectAction = value.offPeakDisconnectAction;
      this._offPeakDisconnectTimeoutMinutes = value.offPeakDisconnectTimeoutMinutes;
      this._offPeakExtendedDisconnectAction = value.offPeakExtendedDisconnectAction;
      this._offPeakExtendedDisconnectTimeoutMinutes = value.offPeakExtendedDisconnectTimeoutMinutes;
      this._offPeakLimitSecondsToForceLogOffUser = value.offPeakLimitSecondsToForceLogOffUser;
      this._offPeakLogOffAction = value.offPeakLogOffAction;
      this._offPeakLogOffReminderInterval = value.offPeakLogOffReminderInterval;
      this._offPeakLogOffTimeoutMinutes = value.offPeakLogOffTimeoutMinutes;
      this._offPeakRestrictMinIdleUntaggedPercent = value.offPeakRestrictMinIdleUntaggedPercent;
      this._peakAutoscaleAssignedPowerOnIdleAction = value.peakAutoscaleAssignedPowerOnIdleAction;
      this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes = value.peakAutoscaleAssignedPowerOnIdleTimeoutMinutes;
      this._peakBufferSizePercent = value.peakBufferSizePercent;
      this._peakDisconnectAction = value.peakDisconnectAction;
      this._peakDisconnectTimeoutMinutes = value.peakDisconnectTimeoutMinutes;
      this._peakExtendedDisconnectAction = value.peakExtendedDisconnectAction;
      this._peakExtendedDisconnectTimeoutMinutes = value.peakExtendedDisconnectTimeoutMinutes;
      this._peakLimitSecondsToForceLogOffUser = value.peakLimitSecondsToForceLogOffUser;
      this._peakLogOffAction = value.peakLogOffAction;
      this._peakLogOffReminderInterval = value.peakLogOffReminderInterval;
      this._peakLogOffTimeoutMinutes = value.peakLogOffTimeoutMinutes;
      this._peakRestrictMinIdleUntaggedPercent = value.peakRestrictMinIdleUntaggedPercent;
      this._powerOffDelayMinutes = value.powerOffDelayMinutes;
      this._powerTimeSchemes.internalValue = value.powerTimeSchemes;
      this._restrictAutoscaleTag = value.restrictAutoscaleTag;
      this._timezone = value.timezone;
    }
  }

  // autoscale_enabled - computed: false, optional: false, required: true
  private _autoscaleEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleEnabled() {
    return this.getBooleanAttribute('autoscale_enabled');
  }
  public set autoscaleEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleEnabledInput() {
    return this._autoscaleEnabled;
  }

  // disconnect_off_peak_idle_session_after_seconds - computed: true, optional: true, required: false
  private _disconnectOffPeakIdleSessionAfterSeconds?: number; 
  public get disconnectOffPeakIdleSessionAfterSeconds() {
    return this.getNumberAttribute('disconnect_off_peak_idle_session_after_seconds');
  }
  public set disconnectOffPeakIdleSessionAfterSeconds(value: number) {
    this._disconnectOffPeakIdleSessionAfterSeconds = value;
  }
  public resetDisconnectOffPeakIdleSessionAfterSeconds() {
    this._disconnectOffPeakIdleSessionAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectOffPeakIdleSessionAfterSecondsInput() {
    return this._disconnectOffPeakIdleSessionAfterSeconds;
  }

  // disconnect_peak_idle_session_after_seconds - computed: true, optional: true, required: false
  private _disconnectPeakIdleSessionAfterSeconds?: number; 
  public get disconnectPeakIdleSessionAfterSeconds() {
    return this.getNumberAttribute('disconnect_peak_idle_session_after_seconds');
  }
  public set disconnectPeakIdleSessionAfterSeconds(value: number) {
    this._disconnectPeakIdleSessionAfterSeconds = value;
  }
  public resetDisconnectPeakIdleSessionAfterSeconds() {
    this._disconnectPeakIdleSessionAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectPeakIdleSessionAfterSecondsInput() {
    return this._disconnectPeakIdleSessionAfterSeconds;
  }

  // log_off_off_peak_disconnected_session_after_seconds - computed: true, optional: true, required: false
  private _logOffOffPeakDisconnectedSessionAfterSeconds?: number; 
  public get logOffOffPeakDisconnectedSessionAfterSeconds() {
    return this.getNumberAttribute('log_off_off_peak_disconnected_session_after_seconds');
  }
  public set logOffOffPeakDisconnectedSessionAfterSeconds(value: number) {
    this._logOffOffPeakDisconnectedSessionAfterSeconds = value;
  }
  public resetLogOffOffPeakDisconnectedSessionAfterSeconds() {
    this._logOffOffPeakDisconnectedSessionAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffOffPeakDisconnectedSessionAfterSecondsInput() {
    return this._logOffOffPeakDisconnectedSessionAfterSeconds;
  }

  // log_off_peak_disconnected_session_after_seconds - computed: true, optional: true, required: false
  private _logOffPeakDisconnectedSessionAfterSeconds?: number; 
  public get logOffPeakDisconnectedSessionAfterSeconds() {
    return this.getNumberAttribute('log_off_peak_disconnected_session_after_seconds');
  }
  public set logOffPeakDisconnectedSessionAfterSeconds(value: number) {
    this._logOffPeakDisconnectedSessionAfterSeconds = value;
  }
  public resetLogOffPeakDisconnectedSessionAfterSeconds() {
    this._logOffPeakDisconnectedSessionAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffPeakDisconnectedSessionAfterSecondsInput() {
    return this._logOffPeakDisconnectedSessionAfterSeconds;
  }

  // log_off_reminder_enabled - computed: true, optional: true, required: false
  private _logOffReminderEnabled?: boolean | cdktf.IResolvable; 
  public get logOffReminderEnabled() {
    return this.getBooleanAttribute('log_off_reminder_enabled');
  }
  public set logOffReminderEnabled(value: boolean | cdktf.IResolvable) {
    this._logOffReminderEnabled = value;
  }
  public resetLogOffReminderEnabled() {
    this._logOffReminderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffReminderEnabledInput() {
    return this._logOffReminderEnabled;
  }

  // log_off_reminder_message - computed: true, optional: true, required: false
  private _logOffReminderMessage?: string; 
  public get logOffReminderMessage() {
    return this.getStringAttribute('log_off_reminder_message');
  }
  public set logOffReminderMessage(value: string) {
    this._logOffReminderMessage = value;
  }
  public resetLogOffReminderMessage() {
    this._logOffReminderMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffReminderMessageInput() {
    return this._logOffReminderMessage;
  }

  // log_off_reminder_title - computed: true, optional: true, required: false
  private _logOffReminderTitle?: string; 
  public get logOffReminderTitle() {
    return this.getStringAttribute('log_off_reminder_title');
  }
  public set logOffReminderTitle(value: string) {
    this._logOffReminderTitle = value;
  }
  public resetLogOffReminderTitle() {
    this._logOffReminderTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffReminderTitleInput() {
    return this._logOffReminderTitle;
  }

  // log_off_warning_message - computed: true, optional: true, required: false
  private _logOffWarningMessage?: string; 
  public get logOffWarningMessage() {
    return this.getStringAttribute('log_off_warning_message');
  }
  public set logOffWarningMessage(value: string) {
    this._logOffWarningMessage = value;
  }
  public resetLogOffWarningMessage() {
    this._logOffWarningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffWarningMessageInput() {
    return this._logOffWarningMessage;
  }

  // log_off_warning_title - computed: true, optional: true, required: false
  private _logOffWarningTitle?: string; 
  public get logOffWarningTitle() {
    return this.getStringAttribute('log_off_warning_title');
  }
  public set logOffWarningTitle(value: string) {
    this._logOffWarningTitle = value;
  }
  public resetLogOffWarningTitle() {
    this._logOffWarningTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOffWarningTitleInput() {
    return this._logOffWarningTitle;
  }

  // off_peak_buffer_size_percent - computed: true, optional: true, required: false
  private _offPeakBufferSizePercent?: number; 
  public get offPeakBufferSizePercent() {
    return this.getNumberAttribute('off_peak_buffer_size_percent');
  }
  public set offPeakBufferSizePercent(value: number) {
    this._offPeakBufferSizePercent = value;
  }
  public resetOffPeakBufferSizePercent() {
    this._offPeakBufferSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakBufferSizePercentInput() {
    return this._offPeakBufferSizePercent;
  }

  // off_peak_disconnect_action - computed: true, optional: true, required: false
  private _offPeakDisconnectAction?: string; 
  public get offPeakDisconnectAction() {
    return this.getStringAttribute('off_peak_disconnect_action');
  }
  public set offPeakDisconnectAction(value: string) {
    this._offPeakDisconnectAction = value;
  }
  public resetOffPeakDisconnectAction() {
    this._offPeakDisconnectAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakDisconnectActionInput() {
    return this._offPeakDisconnectAction;
  }

  // off_peak_disconnect_timeout_minutes - computed: true, optional: true, required: false
  private _offPeakDisconnectTimeoutMinutes?: number; 
  public get offPeakDisconnectTimeoutMinutes() {
    return this.getNumberAttribute('off_peak_disconnect_timeout_minutes');
  }
  public set offPeakDisconnectTimeoutMinutes(value: number) {
    this._offPeakDisconnectTimeoutMinutes = value;
  }
  public resetOffPeakDisconnectTimeoutMinutes() {
    this._offPeakDisconnectTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakDisconnectTimeoutMinutesInput() {
    return this._offPeakDisconnectTimeoutMinutes;
  }

  // off_peak_extended_disconnect_action - computed: true, optional: true, required: false
  private _offPeakExtendedDisconnectAction?: string; 
  public get offPeakExtendedDisconnectAction() {
    return this.getStringAttribute('off_peak_extended_disconnect_action');
  }
  public set offPeakExtendedDisconnectAction(value: string) {
    this._offPeakExtendedDisconnectAction = value;
  }
  public resetOffPeakExtendedDisconnectAction() {
    this._offPeakExtendedDisconnectAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakExtendedDisconnectActionInput() {
    return this._offPeakExtendedDisconnectAction;
  }

  // off_peak_extended_disconnect_timeout_minutes - computed: true, optional: true, required: false
  private _offPeakExtendedDisconnectTimeoutMinutes?: number; 
  public get offPeakExtendedDisconnectTimeoutMinutes() {
    return this.getNumberAttribute('off_peak_extended_disconnect_timeout_minutes');
  }
  public set offPeakExtendedDisconnectTimeoutMinutes(value: number) {
    this._offPeakExtendedDisconnectTimeoutMinutes = value;
  }
  public resetOffPeakExtendedDisconnectTimeoutMinutes() {
    this._offPeakExtendedDisconnectTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakExtendedDisconnectTimeoutMinutesInput() {
    return this._offPeakExtendedDisconnectTimeoutMinutes;
  }

  // off_peak_limit_seconds_to_force_log_off_user - computed: true, optional: true, required: false
  private _offPeakLimitSecondsToForceLogOffUser?: number; 
  public get offPeakLimitSecondsToForceLogOffUser() {
    return this.getNumberAttribute('off_peak_limit_seconds_to_force_log_off_user');
  }
  public set offPeakLimitSecondsToForceLogOffUser(value: number) {
    this._offPeakLimitSecondsToForceLogOffUser = value;
  }
  public resetOffPeakLimitSecondsToForceLogOffUser() {
    this._offPeakLimitSecondsToForceLogOffUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakLimitSecondsToForceLogOffUserInput() {
    return this._offPeakLimitSecondsToForceLogOffUser;
  }

  // off_peak_log_off_action - computed: true, optional: true, required: false
  private _offPeakLogOffAction?: string; 
  public get offPeakLogOffAction() {
    return this.getStringAttribute('off_peak_log_off_action');
  }
  public set offPeakLogOffAction(value: string) {
    this._offPeakLogOffAction = value;
  }
  public resetOffPeakLogOffAction() {
    this._offPeakLogOffAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakLogOffActionInput() {
    return this._offPeakLogOffAction;
  }

  // off_peak_log_off_reminder_interval - computed: true, optional: true, required: false
  private _offPeakLogOffReminderInterval?: number; 
  public get offPeakLogOffReminderInterval() {
    return this.getNumberAttribute('off_peak_log_off_reminder_interval');
  }
  public set offPeakLogOffReminderInterval(value: number) {
    this._offPeakLogOffReminderInterval = value;
  }
  public resetOffPeakLogOffReminderInterval() {
    this._offPeakLogOffReminderInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakLogOffReminderIntervalInput() {
    return this._offPeakLogOffReminderInterval;
  }

  // off_peak_log_off_timeout_minutes - computed: true, optional: true, required: false
  private _offPeakLogOffTimeoutMinutes?: number; 
  public get offPeakLogOffTimeoutMinutes() {
    return this.getNumberAttribute('off_peak_log_off_timeout_minutes');
  }
  public set offPeakLogOffTimeoutMinutes(value: number) {
    this._offPeakLogOffTimeoutMinutes = value;
  }
  public resetOffPeakLogOffTimeoutMinutes() {
    this._offPeakLogOffTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakLogOffTimeoutMinutesInput() {
    return this._offPeakLogOffTimeoutMinutes;
  }

  // off_peak_restrict_min_idle_untagged_percent - computed: false, optional: true, required: false
  private _offPeakRestrictMinIdleUntaggedPercent?: number; 
  public get offPeakRestrictMinIdleUntaggedPercent() {
    return this.getNumberAttribute('off_peak_restrict_min_idle_untagged_percent');
  }
  public set offPeakRestrictMinIdleUntaggedPercent(value: number) {
    this._offPeakRestrictMinIdleUntaggedPercent = value;
  }
  public resetOffPeakRestrictMinIdleUntaggedPercent() {
    this._offPeakRestrictMinIdleUntaggedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakRestrictMinIdleUntaggedPercentInput() {
    return this._offPeakRestrictMinIdleUntaggedPercent;
  }

  // peak_autoscale_assigned_power_on_idle_action - computed: true, optional: true, required: false
  private _peakAutoscaleAssignedPowerOnIdleAction?: string; 
  public get peakAutoscaleAssignedPowerOnIdleAction() {
    return this.getStringAttribute('peak_autoscale_assigned_power_on_idle_action');
  }
  public set peakAutoscaleAssignedPowerOnIdleAction(value: string) {
    this._peakAutoscaleAssignedPowerOnIdleAction = value;
  }
  public resetPeakAutoscaleAssignedPowerOnIdleAction() {
    this._peakAutoscaleAssignedPowerOnIdleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakAutoscaleAssignedPowerOnIdleActionInput() {
    return this._peakAutoscaleAssignedPowerOnIdleAction;
  }

  // peak_autoscale_assigned_power_on_idle_timeout_minutes - computed: true, optional: true, required: false
  private _peakAutoscaleAssignedPowerOnIdleTimeoutMinutes?: number; 
  public get peakAutoscaleAssignedPowerOnIdleTimeoutMinutes() {
    return this.getNumberAttribute('peak_autoscale_assigned_power_on_idle_timeout_minutes');
  }
  public set peakAutoscaleAssignedPowerOnIdleTimeoutMinutes(value: number) {
    this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes = value;
  }
  public resetPeakAutoscaleAssignedPowerOnIdleTimeoutMinutes() {
    this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakAutoscaleAssignedPowerOnIdleTimeoutMinutesInput() {
    return this._peakAutoscaleAssignedPowerOnIdleTimeoutMinutes;
  }

  // peak_buffer_size_percent - computed: true, optional: true, required: false
  private _peakBufferSizePercent?: number; 
  public get peakBufferSizePercent() {
    return this.getNumberAttribute('peak_buffer_size_percent');
  }
  public set peakBufferSizePercent(value: number) {
    this._peakBufferSizePercent = value;
  }
  public resetPeakBufferSizePercent() {
    this._peakBufferSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakBufferSizePercentInput() {
    return this._peakBufferSizePercent;
  }

  // peak_disconnect_action - computed: true, optional: true, required: false
  private _peakDisconnectAction?: string; 
  public get peakDisconnectAction() {
    return this.getStringAttribute('peak_disconnect_action');
  }
  public set peakDisconnectAction(value: string) {
    this._peakDisconnectAction = value;
  }
  public resetPeakDisconnectAction() {
    this._peakDisconnectAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakDisconnectActionInput() {
    return this._peakDisconnectAction;
  }

  // peak_disconnect_timeout_minutes - computed: true, optional: true, required: false
  private _peakDisconnectTimeoutMinutes?: number; 
  public get peakDisconnectTimeoutMinutes() {
    return this.getNumberAttribute('peak_disconnect_timeout_minutes');
  }
  public set peakDisconnectTimeoutMinutes(value: number) {
    this._peakDisconnectTimeoutMinutes = value;
  }
  public resetPeakDisconnectTimeoutMinutes() {
    this._peakDisconnectTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakDisconnectTimeoutMinutesInput() {
    return this._peakDisconnectTimeoutMinutes;
  }

  // peak_extended_disconnect_action - computed: true, optional: true, required: false
  private _peakExtendedDisconnectAction?: string; 
  public get peakExtendedDisconnectAction() {
    return this.getStringAttribute('peak_extended_disconnect_action');
  }
  public set peakExtendedDisconnectAction(value: string) {
    this._peakExtendedDisconnectAction = value;
  }
  public resetPeakExtendedDisconnectAction() {
    this._peakExtendedDisconnectAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakExtendedDisconnectActionInput() {
    return this._peakExtendedDisconnectAction;
  }

  // peak_extended_disconnect_timeout_minutes - computed: true, optional: true, required: false
  private _peakExtendedDisconnectTimeoutMinutes?: number; 
  public get peakExtendedDisconnectTimeoutMinutes() {
    return this.getNumberAttribute('peak_extended_disconnect_timeout_minutes');
  }
  public set peakExtendedDisconnectTimeoutMinutes(value: number) {
    this._peakExtendedDisconnectTimeoutMinutes = value;
  }
  public resetPeakExtendedDisconnectTimeoutMinutes() {
    this._peakExtendedDisconnectTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakExtendedDisconnectTimeoutMinutesInput() {
    return this._peakExtendedDisconnectTimeoutMinutes;
  }

  // peak_limit_seconds_to_force_log_off_user - computed: true, optional: true, required: false
  private _peakLimitSecondsToForceLogOffUser?: number; 
  public get peakLimitSecondsToForceLogOffUser() {
    return this.getNumberAttribute('peak_limit_seconds_to_force_log_off_user');
  }
  public set peakLimitSecondsToForceLogOffUser(value: number) {
    this._peakLimitSecondsToForceLogOffUser = value;
  }
  public resetPeakLimitSecondsToForceLogOffUser() {
    this._peakLimitSecondsToForceLogOffUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakLimitSecondsToForceLogOffUserInput() {
    return this._peakLimitSecondsToForceLogOffUser;
  }

  // peak_log_off_action - computed: true, optional: true, required: false
  private _peakLogOffAction?: string; 
  public get peakLogOffAction() {
    return this.getStringAttribute('peak_log_off_action');
  }
  public set peakLogOffAction(value: string) {
    this._peakLogOffAction = value;
  }
  public resetPeakLogOffAction() {
    this._peakLogOffAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakLogOffActionInput() {
    return this._peakLogOffAction;
  }

  // peak_log_off_reminder_interval - computed: true, optional: true, required: false
  private _peakLogOffReminderInterval?: number; 
  public get peakLogOffReminderInterval() {
    return this.getNumberAttribute('peak_log_off_reminder_interval');
  }
  public set peakLogOffReminderInterval(value: number) {
    this._peakLogOffReminderInterval = value;
  }
  public resetPeakLogOffReminderInterval() {
    this._peakLogOffReminderInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakLogOffReminderIntervalInput() {
    return this._peakLogOffReminderInterval;
  }

  // peak_log_off_timeout_minutes - computed: true, optional: true, required: false
  private _peakLogOffTimeoutMinutes?: number; 
  public get peakLogOffTimeoutMinutes() {
    return this.getNumberAttribute('peak_log_off_timeout_minutes');
  }
  public set peakLogOffTimeoutMinutes(value: number) {
    this._peakLogOffTimeoutMinutes = value;
  }
  public resetPeakLogOffTimeoutMinutes() {
    this._peakLogOffTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakLogOffTimeoutMinutesInput() {
    return this._peakLogOffTimeoutMinutes;
  }

  // peak_restrict_min_idle_untagged_percent - computed: false, optional: true, required: false
  private _peakRestrictMinIdleUntaggedPercent?: number; 
  public get peakRestrictMinIdleUntaggedPercent() {
    return this.getNumberAttribute('peak_restrict_min_idle_untagged_percent');
  }
  public set peakRestrictMinIdleUntaggedPercent(value: number) {
    this._peakRestrictMinIdleUntaggedPercent = value;
  }
  public resetPeakRestrictMinIdleUntaggedPercent() {
    this._peakRestrictMinIdleUntaggedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakRestrictMinIdleUntaggedPercentInput() {
    return this._peakRestrictMinIdleUntaggedPercent;
  }

  // power_off_delay_minutes - computed: true, optional: true, required: false
  private _powerOffDelayMinutes?: number; 
  public get powerOffDelayMinutes() {
    return this.getNumberAttribute('power_off_delay_minutes');
  }
  public set powerOffDelayMinutes(value: number) {
    this._powerOffDelayMinutes = value;
  }
  public resetPowerOffDelayMinutes() {
    this._powerOffDelayMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOffDelayMinutesInput() {
    return this._powerOffDelayMinutes;
  }

  // power_time_schemes - computed: false, optional: true, required: false
  private _powerTimeSchemes = new DeliveryGroupAutoscaleSettingsPowerTimeSchemesList(this, "power_time_schemes", false);
  public get powerTimeSchemes() {
    return this._powerTimeSchemes;
  }
  public putPowerTimeSchemes(value: DeliveryGroupAutoscaleSettingsPowerTimeSchemes[] | cdktf.IResolvable) {
    this._powerTimeSchemes.internalValue = value;
  }
  public resetPowerTimeSchemes() {
    this._powerTimeSchemes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerTimeSchemesInput() {
    return this._powerTimeSchemes.internalValue;
  }

  // restrict_autoscale_tag - computed: false, optional: true, required: false
  private _restrictAutoscaleTag?: string; 
  public get restrictAutoscaleTag() {
    return this.getStringAttribute('restrict_autoscale_tag');
  }
  public set restrictAutoscaleTag(value: string) {
    this._restrictAutoscaleTag = value;
  }
  public resetRestrictAutoscaleTag() {
    this._restrictAutoscaleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAutoscaleTagInput() {
    return this._restrictAutoscaleTag;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters {
  /**
  * The name of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_name DeliveryGroup#filter_name}
  */
  readonly filterName: string;
  /**
  * The value of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_value DeliveryGroup#filter_value}
  */
  readonly filterValue: string;
}

export function deliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersToTerraform(struct?: DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function deliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersToHclTerraform(struct?: DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterName = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterName = value.filterName;
      this._filterValue = value.filterValue;
    }
  }

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersOutputReference {
    return new DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters {
  /**
  * The name of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_name DeliveryGroup#filter_name}
  */
  readonly filterName: string;
  /**
  * The value of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_value DeliveryGroup#filter_value}
  */
  readonly filterValue: string;
}

export function deliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersToTerraform(struct?: DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function deliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersToHclTerraform(struct?: DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterName = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterName = value.filterName;
      this._filterValue = value.filterValue;
    }
  }

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersOutputReference {
    return new DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupCustomAccessPolicies {
  /**
  * The behavior of the include filter. Choose between `Filtered`, `ViaAG`, and `NotViaAG`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#allowed_connection DeliveryGroup#allowed_connection}
  */
  readonly allowedConnection: string;
  /**
  * Whether to enable criteria for exclude connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_criteria_for_exclude_connections DeliveryGroup#enable_criteria_for_exclude_connections}
  */
  readonly enableCriteriaForExcludeConnections: boolean | cdktf.IResolvable;
  /**
  * Whether to enable criteria for include connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_criteria_for_include_connections DeliveryGroup#enable_criteria_for_include_connections}
  */
  readonly enableCriteriaForIncludeConnections: boolean | cdktf.IResolvable;
  /**
  * Whether the access policy is enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enabled DeliveryGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The list of filters that meet the criteria for exclude connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#exclude_criteria_filters DeliveryGroup#exclude_criteria_filters}
  */
  readonly excludeCriteriaFilters?: DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable;
  /**
  * The type of criteria for include connections. Choose between `MatchAny` and `MatchAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#include_connections_criteria_type DeliveryGroup#include_connections_criteria_type}
  */
  readonly includeConnectionsCriteriaType?: string;
  /**
  * The list of filters that meet the criteria for include connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#include_criteria_filters DeliveryGroup#include_criteria_filters}
  */
  readonly includeCriteriaFilters?: DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable;
  /**
  * The name of the access policy.
  * 
  * -> **Note** For default_access_policies, use `Citrix Gateway connections` as the name for the policy that is Via Access Gateway and `Non-Citrix Gateway connections` as the name for the policy that is Not Via Access Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
}

export function deliveryGroupCustomAccessPoliciesToTerraform(struct?: DeliveryGroupCustomAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_connection: cdktf.stringToTerraform(struct!.allowedConnection),
    enable_criteria_for_exclude_connections: cdktf.booleanToTerraform(struct!.enableCriteriaForExcludeConnections),
    enable_criteria_for_include_connections: cdktf.booleanToTerraform(struct!.enableCriteriaForIncludeConnections),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_criteria_filters: cdktf.listMapper(deliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersToTerraform, false)(struct!.excludeCriteriaFilters),
    include_connections_criteria_type: cdktf.stringToTerraform(struct!.includeConnectionsCriteriaType),
    include_criteria_filters: cdktf.listMapper(deliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersToTerraform, false)(struct!.includeCriteriaFilters),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deliveryGroupCustomAccessPoliciesToHclTerraform(struct?: DeliveryGroupCustomAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_connection: {
      value: cdktf.stringToHclTerraform(struct!.allowedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_criteria_for_exclude_connections: {
      value: cdktf.booleanToHclTerraform(struct!.enableCriteriaForExcludeConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_criteria_for_include_connections: {
      value: cdktf.booleanToHclTerraform(struct!.enableCriteriaForIncludeConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_criteria_filters: {
      value: cdktf.listMapperHcl(deliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersToHclTerraform, false)(struct!.excludeCriteriaFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersList",
    },
    include_connections_criteria_type: {
      value: cdktf.stringToHclTerraform(struct!.includeConnectionsCriteriaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_criteria_filters: {
      value: cdktf.listMapperHcl(deliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersToHclTerraform, false)(struct!.includeCriteriaFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupCustomAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupCustomAccessPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedConnection = this._allowedConnection;
    }
    if (this._enableCriteriaForExcludeConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCriteriaForExcludeConnections = this._enableCriteriaForExcludeConnections;
    }
    if (this._enableCriteriaForIncludeConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCriteriaForIncludeConnections = this._enableCriteriaForIncludeConnections;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeCriteriaFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeCriteriaFilters = this._excludeCriteriaFilters?.internalValue;
    }
    if (this._includeConnectionsCriteriaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeConnectionsCriteriaType = this._includeConnectionsCriteriaType;
    }
    if (this._includeCriteriaFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCriteriaFilters = this._includeCriteriaFilters?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupCustomAccessPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedConnection = undefined;
      this._enableCriteriaForExcludeConnections = undefined;
      this._enableCriteriaForIncludeConnections = undefined;
      this._enabled = undefined;
      this._excludeCriteriaFilters.internalValue = undefined;
      this._includeConnectionsCriteriaType = undefined;
      this._includeCriteriaFilters.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedConnection = value.allowedConnection;
      this._enableCriteriaForExcludeConnections = value.enableCriteriaForExcludeConnections;
      this._enableCriteriaForIncludeConnections = value.enableCriteriaForIncludeConnections;
      this._enabled = value.enabled;
      this._excludeCriteriaFilters.internalValue = value.excludeCriteriaFilters;
      this._includeConnectionsCriteriaType = value.includeConnectionsCriteriaType;
      this._includeCriteriaFilters.internalValue = value.includeCriteriaFilters;
      this._name = value.name;
    }
  }

  // allowed_connection - computed: false, optional: false, required: true
  private _allowedConnection?: string; 
  public get allowedConnection() {
    return this.getStringAttribute('allowed_connection');
  }
  public set allowedConnection(value: string) {
    this._allowedConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedConnectionInput() {
    return this._allowedConnection;
  }

  // enable_criteria_for_exclude_connections - computed: false, optional: false, required: true
  private _enableCriteriaForExcludeConnections?: boolean | cdktf.IResolvable; 
  public get enableCriteriaForExcludeConnections() {
    return this.getBooleanAttribute('enable_criteria_for_exclude_connections');
  }
  public set enableCriteriaForExcludeConnections(value: boolean | cdktf.IResolvable) {
    this._enableCriteriaForExcludeConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriteriaForExcludeConnectionsInput() {
    return this._enableCriteriaForExcludeConnections;
  }

  // enable_criteria_for_include_connections - computed: false, optional: false, required: true
  private _enableCriteriaForIncludeConnections?: boolean | cdktf.IResolvable; 
  public get enableCriteriaForIncludeConnections() {
    return this.getBooleanAttribute('enable_criteria_for_include_connections');
  }
  public set enableCriteriaForIncludeConnections(value: boolean | cdktf.IResolvable) {
    this._enableCriteriaForIncludeConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriteriaForIncludeConnectionsInput() {
    return this._enableCriteriaForIncludeConnections;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_criteria_filters - computed: false, optional: true, required: false
  private _excludeCriteriaFilters = new DeliveryGroupCustomAccessPoliciesExcludeCriteriaFiltersList(this, "exclude_criteria_filters", false);
  public get excludeCriteriaFilters() {
    return this._excludeCriteriaFilters;
  }
  public putExcludeCriteriaFilters(value: DeliveryGroupCustomAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable) {
    this._excludeCriteriaFilters.internalValue = value;
  }
  public resetExcludeCriteriaFilters() {
    this._excludeCriteriaFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCriteriaFiltersInput() {
    return this._excludeCriteriaFilters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_connections_criteria_type - computed: false, optional: true, required: false
  private _includeConnectionsCriteriaType?: string; 
  public get includeConnectionsCriteriaType() {
    return this.getStringAttribute('include_connections_criteria_type');
  }
  public set includeConnectionsCriteriaType(value: string) {
    this._includeConnectionsCriteriaType = value;
  }
  public resetIncludeConnectionsCriteriaType() {
    this._includeConnectionsCriteriaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConnectionsCriteriaTypeInput() {
    return this._includeConnectionsCriteriaType;
  }

  // include_criteria_filters - computed: false, optional: true, required: false
  private _includeCriteriaFilters = new DeliveryGroupCustomAccessPoliciesIncludeCriteriaFiltersList(this, "include_criteria_filters", false);
  public get includeCriteriaFilters() {
    return this._includeCriteriaFilters;
  }
  public putIncludeCriteriaFilters(value: DeliveryGroupCustomAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable) {
    this._includeCriteriaFilters.internalValue = value;
  }
  public resetIncludeCriteriaFilters() {
    this._includeCriteriaFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCriteriaFiltersInput() {
    return this._includeCriteriaFilters.internalValue;
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
}

export class DeliveryGroupCustomAccessPoliciesList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupCustomAccessPolicies[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupCustomAccessPoliciesOutputReference {
    return new DeliveryGroupCustomAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters {
  /**
  * The name of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_name DeliveryGroup#filter_name}
  */
  readonly filterName: string;
  /**
  * The value of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_value DeliveryGroup#filter_value}
  */
  readonly filterValue: string;
}

export function deliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersToTerraform(struct?: DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function deliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersToHclTerraform(struct?: DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterName = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterName = value.filterName;
      this._filterValue = value.filterValue;
    }
  }

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersOutputReference {
    return new DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters {
  /**
  * The name of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_name DeliveryGroup#filter_name}
  */
  readonly filterName: string;
  /**
  * The value of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#filter_value DeliveryGroup#filter_value}
  */
  readonly filterValue: string;
}

export function deliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersToTerraform(struct?: DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function deliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersToHclTerraform(struct?: DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterName = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterName = value.filterName;
      this._filterValue = value.filterValue;
    }
  }

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersOutputReference {
    return new DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupDefaultAccessPolicies {
  /**
  * The behavior of the include filter. Choose between `Filtered`, `ViaAG`, and `NotViaAG`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#allowed_connection DeliveryGroup#allowed_connection}
  */
  readonly allowedConnection: string;
  /**
  * Whether to enable criteria for exclude connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_criteria_for_exclude_connections DeliveryGroup#enable_criteria_for_exclude_connections}
  */
  readonly enableCriteriaForExcludeConnections: boolean | cdktf.IResolvable;
  /**
  * Whether to enable criteria for include connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_criteria_for_include_connections DeliveryGroup#enable_criteria_for_include_connections}
  */
  readonly enableCriteriaForIncludeConnections: boolean | cdktf.IResolvable;
  /**
  * Whether the access policy is enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enabled DeliveryGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The list of filters that meet the criteria for exclude connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#exclude_criteria_filters DeliveryGroup#exclude_criteria_filters}
  */
  readonly excludeCriteriaFilters?: DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable;
  /**
  * The type of criteria for include connections. Choose between `MatchAny` and `MatchAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#include_connections_criteria_type DeliveryGroup#include_connections_criteria_type}
  */
  readonly includeConnectionsCriteriaType?: string;
  /**
  * The list of filters that meet the criteria for include connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#include_criteria_filters DeliveryGroup#include_criteria_filters}
  */
  readonly includeCriteriaFilters?: DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable;
  /**
  * The name of the access policy.
  * 
  * -> **Note** For default_access_policies, use `Citrix Gateway connections` as the name for the policy that is Via Access Gateway and `Non-Citrix Gateway connections` as the name for the policy that is Not Via Access Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
}

export function deliveryGroupDefaultAccessPoliciesToTerraform(struct?: DeliveryGroupDefaultAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_connection: cdktf.stringToTerraform(struct!.allowedConnection),
    enable_criteria_for_exclude_connections: cdktf.booleanToTerraform(struct!.enableCriteriaForExcludeConnections),
    enable_criteria_for_include_connections: cdktf.booleanToTerraform(struct!.enableCriteriaForIncludeConnections),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_criteria_filters: cdktf.listMapper(deliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersToTerraform, false)(struct!.excludeCriteriaFilters),
    include_connections_criteria_type: cdktf.stringToTerraform(struct!.includeConnectionsCriteriaType),
    include_criteria_filters: cdktf.listMapper(deliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersToTerraform, false)(struct!.includeCriteriaFilters),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deliveryGroupDefaultAccessPoliciesToHclTerraform(struct?: DeliveryGroupDefaultAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_connection: {
      value: cdktf.stringToHclTerraform(struct!.allowedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_criteria_for_exclude_connections: {
      value: cdktf.booleanToHclTerraform(struct!.enableCriteriaForExcludeConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_criteria_for_include_connections: {
      value: cdktf.booleanToHclTerraform(struct!.enableCriteriaForIncludeConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_criteria_filters: {
      value: cdktf.listMapperHcl(deliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersToHclTerraform, false)(struct!.excludeCriteriaFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersList",
    },
    include_connections_criteria_type: {
      value: cdktf.stringToHclTerraform(struct!.includeConnectionsCriteriaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_criteria_filters: {
      value: cdktf.listMapperHcl(deliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersToHclTerraform, false)(struct!.includeCriteriaFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupDefaultAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupDefaultAccessPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedConnection = this._allowedConnection;
    }
    if (this._enableCriteriaForExcludeConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCriteriaForExcludeConnections = this._enableCriteriaForExcludeConnections;
    }
    if (this._enableCriteriaForIncludeConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCriteriaForIncludeConnections = this._enableCriteriaForIncludeConnections;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeCriteriaFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeCriteriaFilters = this._excludeCriteriaFilters?.internalValue;
    }
    if (this._includeConnectionsCriteriaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeConnectionsCriteriaType = this._includeConnectionsCriteriaType;
    }
    if (this._includeCriteriaFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCriteriaFilters = this._includeCriteriaFilters?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupDefaultAccessPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedConnection = undefined;
      this._enableCriteriaForExcludeConnections = undefined;
      this._enableCriteriaForIncludeConnections = undefined;
      this._enabled = undefined;
      this._excludeCriteriaFilters.internalValue = undefined;
      this._includeConnectionsCriteriaType = undefined;
      this._includeCriteriaFilters.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedConnection = value.allowedConnection;
      this._enableCriteriaForExcludeConnections = value.enableCriteriaForExcludeConnections;
      this._enableCriteriaForIncludeConnections = value.enableCriteriaForIncludeConnections;
      this._enabled = value.enabled;
      this._excludeCriteriaFilters.internalValue = value.excludeCriteriaFilters;
      this._includeConnectionsCriteriaType = value.includeConnectionsCriteriaType;
      this._includeCriteriaFilters.internalValue = value.includeCriteriaFilters;
      this._name = value.name;
    }
  }

  // allowed_connection - computed: false, optional: false, required: true
  private _allowedConnection?: string; 
  public get allowedConnection() {
    return this.getStringAttribute('allowed_connection');
  }
  public set allowedConnection(value: string) {
    this._allowedConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedConnectionInput() {
    return this._allowedConnection;
  }

  // enable_criteria_for_exclude_connections - computed: false, optional: false, required: true
  private _enableCriteriaForExcludeConnections?: boolean | cdktf.IResolvable; 
  public get enableCriteriaForExcludeConnections() {
    return this.getBooleanAttribute('enable_criteria_for_exclude_connections');
  }
  public set enableCriteriaForExcludeConnections(value: boolean | cdktf.IResolvable) {
    this._enableCriteriaForExcludeConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriteriaForExcludeConnectionsInput() {
    return this._enableCriteriaForExcludeConnections;
  }

  // enable_criteria_for_include_connections - computed: false, optional: false, required: true
  private _enableCriteriaForIncludeConnections?: boolean | cdktf.IResolvable; 
  public get enableCriteriaForIncludeConnections() {
    return this.getBooleanAttribute('enable_criteria_for_include_connections');
  }
  public set enableCriteriaForIncludeConnections(value: boolean | cdktf.IResolvable) {
    this._enableCriteriaForIncludeConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriteriaForIncludeConnectionsInput() {
    return this._enableCriteriaForIncludeConnections;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_criteria_filters - computed: false, optional: true, required: false
  private _excludeCriteriaFilters = new DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFiltersList(this, "exclude_criteria_filters", false);
  public get excludeCriteriaFilters() {
    return this._excludeCriteriaFilters;
  }
  public putExcludeCriteriaFilters(value: DeliveryGroupDefaultAccessPoliciesExcludeCriteriaFilters[] | cdktf.IResolvable) {
    this._excludeCriteriaFilters.internalValue = value;
  }
  public resetExcludeCriteriaFilters() {
    this._excludeCriteriaFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCriteriaFiltersInput() {
    return this._excludeCriteriaFilters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_connections_criteria_type - computed: false, optional: true, required: false
  private _includeConnectionsCriteriaType?: string; 
  public get includeConnectionsCriteriaType() {
    return this.getStringAttribute('include_connections_criteria_type');
  }
  public set includeConnectionsCriteriaType(value: string) {
    this._includeConnectionsCriteriaType = value;
  }
  public resetIncludeConnectionsCriteriaType() {
    this._includeConnectionsCriteriaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConnectionsCriteriaTypeInput() {
    return this._includeConnectionsCriteriaType;
  }

  // include_criteria_filters - computed: false, optional: true, required: false
  private _includeCriteriaFilters = new DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFiltersList(this, "include_criteria_filters", false);
  public get includeCriteriaFilters() {
    return this._includeCriteriaFilters;
  }
  public putIncludeCriteriaFilters(value: DeliveryGroupDefaultAccessPoliciesIncludeCriteriaFilters[] | cdktf.IResolvable) {
    this._includeCriteriaFilters.internalValue = value;
  }
  public resetIncludeCriteriaFilters() {
    this._includeCriteriaFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCriteriaFiltersInput() {
    return this._includeCriteriaFilters.internalValue;
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
}

export class DeliveryGroupDefaultAccessPoliciesList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupDefaultAccessPolicies[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupDefaultAccessPoliciesOutputReference {
    return new DeliveryGroupDefaultAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupDesktopsRestrictedAccessUsers {
  /**
  * Users who can use this Desktop. 
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#allow_list DeliveryGroup#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Users who cannot use this Desktop. A block list is meaningful only when used to block users in the allow list. 
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#block_list DeliveryGroup#block_list}
  */
  readonly blockList?: string[];
}

export function deliveryGroupDesktopsRestrictedAccessUsersToTerraform(struct?: DeliveryGroupDesktopsRestrictedAccessUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockList),
  }
}


export function deliveryGroupDesktopsRestrictedAccessUsersToHclTerraform(struct?: DeliveryGroupDesktopsRestrictedAccessUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupDesktopsRestrictedAccessUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeliveryGroupDesktopsRestrictedAccessUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._blockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockList = this._blockList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupDesktopsRestrictedAccessUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowList = undefined;
      this._blockList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowList = value.allowList;
      this._blockList = value.blockList;
    }
  }

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // block_list - computed: true, optional: true, required: false
  private _blockList?: string[]; 
  public get blockList() {
    return cdktf.Fn.tolist(this.getListAttribute('block_list'));
  }
  public set blockList(value: string[]) {
    this._blockList = value;
  }
  public resetBlockList() {
    this._blockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListInput() {
    return this._blockList;
  }
}
export interface DeliveryGroupDesktops {
  /**
  * A description for the published desktop. The name and description are shown in Citrix Workspace app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#description DeliveryGroup#description}
  */
  readonly description?: string;
  /**
  * When enabled, if the user launches this desktop and then moves to another device, the same session is used, and applications are available on both devices. When disabled, the session no longer roams between devices. 
  * 
  * ~> **Please Note** Session roaming should be set to `false` for Remote PC Delivery Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enable_session_roaming DeliveryGroup#enable_session_roaming}
  */
  readonly enableSessionRoaming?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable the delivery of this desktop. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#enabled DeliveryGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A display name for the desktop.
  * 
  * ~> **Please Note** When `published_name` of the desktop changes, the desktop will be recreated, which could prevent disconnected sessions to the previous desktop from being resumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#published_name DeliveryGroup#published_name}
  */
  readonly publishedName: string;
  /**
  * Restrict session launch to machines with tag specified in GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#restrict_to_tag DeliveryGroup#restrict_to_tag}
  */
  readonly restrictToTag?: string;
  /**
  * Restrict access to this Desktop by specifying users and groups in the allow and block list. 
  * 
  * ~> **Please Note** If `restricted_access_users` attribute is omitted or set to `null`, all authenticated users will have access to this Desktop. If attribute is specified as an empty object i.e. `{}`, then no user will have access to the desktop because `allow_list` and `block_list` will be set as empty sets by default.
  * 
  * ~> **Please Note** For Remote PC Delivery Groups desktops, `restricted_access_users` has to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#restricted_access_users DeliveryGroup#restricted_access_users}
  */
  readonly restrictedAccessUsers?: DeliveryGroupDesktopsRestrictedAccessUsers;
}

export function deliveryGroupDesktopsToTerraform(struct?: DeliveryGroupDesktops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enable_session_roaming: cdktf.booleanToTerraform(struct!.enableSessionRoaming),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    published_name: cdktf.stringToTerraform(struct!.publishedName),
    restrict_to_tag: cdktf.stringToTerraform(struct!.restrictToTag),
    restricted_access_users: deliveryGroupDesktopsRestrictedAccessUsersToTerraform(struct!.restrictedAccessUsers),
  }
}


export function deliveryGroupDesktopsToHclTerraform(struct?: DeliveryGroupDesktops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_session_roaming: {
      value: cdktf.booleanToHclTerraform(struct!.enableSessionRoaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    published_name: {
      value: cdktf.stringToHclTerraform(struct!.publishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_to_tag: {
      value: cdktf.stringToHclTerraform(struct!.restrictToTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_access_users: {
      value: deliveryGroupDesktopsRestrictedAccessUsersToHclTerraform(struct!.restrictedAccessUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "DeliveryGroupDesktopsRestrictedAccessUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupDesktopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupDesktops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableSessionRoaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSessionRoaming = this._enableSessionRoaming;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._publishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedName = this._publishedName;
    }
    if (this._restrictToTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictToTag = this._restrictToTag;
    }
    if (this._restrictedAccessUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedAccessUsers = this._restrictedAccessUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupDesktops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enableSessionRoaming = undefined;
      this._enabled = undefined;
      this._publishedName = undefined;
      this._restrictToTag = undefined;
      this._restrictedAccessUsers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enableSessionRoaming = value.enableSessionRoaming;
      this._enabled = value.enabled;
      this._publishedName = value.publishedName;
      this._restrictToTag = value.restrictToTag;
      this._restrictedAccessUsers.internalValue = value.restrictedAccessUsers;
    }
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

  // enable_session_roaming - computed: false, optional: true, required: false
  private _enableSessionRoaming?: boolean | cdktf.IResolvable; 
  public get enableSessionRoaming() {
    return this.getBooleanAttribute('enable_session_roaming');
  }
  public set enableSessionRoaming(value: boolean | cdktf.IResolvable) {
    this._enableSessionRoaming = value;
  }
  public resetEnableSessionRoaming() {
    this._enableSessionRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionRoamingInput() {
    return this._enableSessionRoaming;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // published_name - computed: false, optional: false, required: true
  private _publishedName?: string; 
  public get publishedName() {
    return this.getStringAttribute('published_name');
  }
  public set publishedName(value: string) {
    this._publishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedNameInput() {
    return this._publishedName;
  }

  // restrict_to_tag - computed: false, optional: true, required: false
  private _restrictToTag?: string; 
  public get restrictToTag() {
    return this.getStringAttribute('restrict_to_tag');
  }
  public set restrictToTag(value: string) {
    this._restrictToTag = value;
  }
  public resetRestrictToTag() {
    this._restrictToTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToTagInput() {
    return this._restrictToTag;
  }

  // restricted_access_users - computed: false, optional: true, required: false
  private _restrictedAccessUsers = new DeliveryGroupDesktopsRestrictedAccessUsersOutputReference(this, "restricted_access_users");
  public get restrictedAccessUsers() {
    return this._restrictedAccessUsers;
  }
  public putRestrictedAccessUsers(value: DeliveryGroupDesktopsRestrictedAccessUsers) {
    this._restrictedAccessUsers.internalValue = value;
  }
  public resetRestrictedAccessUsers() {
    this._restrictedAccessUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAccessUsersInput() {
    return this._restrictedAccessUsers.internalValue;
  }
}

export class DeliveryGroupDesktopsList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupDesktops[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupDesktopsOutputReference {
    return new DeliveryGroupDesktopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#value DeliveryGroup#value}
  */
  readonly value: string;
}

export function deliveryGroupMetadataToTerraform(struct?: DeliveryGroupMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deliveryGroupMetadataToHclTerraform(struct?: DeliveryGroupMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeliveryGroupMetadataList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupMetadata[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupMetadataOutputReference {
    return new DeliveryGroupMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupRebootSchedulesRebootNotificationToUsers {
  /**
  * Send notification to users X minutes before user is logged off. Can only be `0`, `1`, `5` or `15`. `0` means no notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#notification_duration_minutes DeliveryGroup#notification_duration_minutes}
  */
  readonly notificationDurationMinutes: number;
  /**
  * The message to be displayed to users before they are logged off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#notification_message DeliveryGroup#notification_message}
  */
  readonly notificationMessage: string;
  /**
  * Repeat notification every 5 minutes. 
  * 
  * ~> **Please Note** notification repeat is available only when `notification_duration_minutes` is set to `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#notification_repeat_every_5_minutes DeliveryGroup#notification_repeat_every_5_minutes}
  */
  readonly notificationRepeatEvery5Minutes?: boolean | cdktf.IResolvable;
  /**
  * The title to be displayed to users before they are logged off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#notification_title DeliveryGroup#notification_title}
  */
  readonly notificationTitle: string;
}

export function deliveryGroupRebootSchedulesRebootNotificationToUsersToTerraform(struct?: DeliveryGroupRebootSchedulesRebootNotificationToUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_duration_minutes: cdktf.numberToTerraform(struct!.notificationDurationMinutes),
    notification_message: cdktf.stringToTerraform(struct!.notificationMessage),
    notification_repeat_every_5_minutes: cdktf.booleanToTerraform(struct!.notificationRepeatEvery5Minutes),
    notification_title: cdktf.stringToTerraform(struct!.notificationTitle),
  }
}


export function deliveryGroupRebootSchedulesRebootNotificationToUsersToHclTerraform(struct?: DeliveryGroupRebootSchedulesRebootNotificationToUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_duration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.notificationDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_message: {
      value: cdktf.stringToHclTerraform(struct!.notificationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_repeat_every_5_minutes: {
      value: cdktf.booleanToHclTerraform(struct!.notificationRepeatEvery5Minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_title: {
      value: cdktf.stringToHclTerraform(struct!.notificationTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupRebootSchedulesRebootNotificationToUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeliveryGroupRebootSchedulesRebootNotificationToUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationDurationMinutes = this._notificationDurationMinutes;
    }
    if (this._notificationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMessage = this._notificationMessage;
    }
    if (this._notificationRepeatEvery5Minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRepeatEvery5Minutes = this._notificationRepeatEvery5Minutes;
    }
    if (this._notificationTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTitle = this._notificationTitle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupRebootSchedulesRebootNotificationToUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationDurationMinutes = undefined;
      this._notificationMessage = undefined;
      this._notificationRepeatEvery5Minutes = undefined;
      this._notificationTitle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationDurationMinutes = value.notificationDurationMinutes;
      this._notificationMessage = value.notificationMessage;
      this._notificationRepeatEvery5Minutes = value.notificationRepeatEvery5Minutes;
      this._notificationTitle = value.notificationTitle;
    }
  }

  // notification_duration_minutes - computed: false, optional: false, required: true
  private _notificationDurationMinutes?: number; 
  public get notificationDurationMinutes() {
    return this.getNumberAttribute('notification_duration_minutes');
  }
  public set notificationDurationMinutes(value: number) {
    this._notificationDurationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDurationMinutesInput() {
    return this._notificationDurationMinutes;
  }

  // notification_message - computed: false, optional: false, required: true
  private _notificationMessage?: string; 
  public get notificationMessage() {
    return this.getStringAttribute('notification_message');
  }
  public set notificationMessage(value: string) {
    this._notificationMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMessageInput() {
    return this._notificationMessage;
  }

  // notification_repeat_every_5_minutes - computed: false, optional: true, required: false
  private _notificationRepeatEvery5Minutes?: boolean | cdktf.IResolvable; 
  public get notificationRepeatEvery5Minutes() {
    return this.getBooleanAttribute('notification_repeat_every_5_minutes');
  }
  public set notificationRepeatEvery5Minutes(value: boolean | cdktf.IResolvable) {
    this._notificationRepeatEvery5Minutes = value;
  }
  public resetNotificationRepeatEvery5Minutes() {
    this._notificationRepeatEvery5Minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRepeatEvery5MinutesInput() {
    return this._notificationRepeatEvery5Minutes;
  }

  // notification_title - computed: false, optional: false, required: true
  private _notificationTitle?: string; 
  public get notificationTitle() {
    return this.getStringAttribute('notification_title');
  }
  public set notificationTitle(value: string) {
    this._notificationTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTitleInput() {
    return this._notificationTitle;
  }
}
export interface DeliveryGroupRebootSchedules {
  /**
  * The day in the month on which the reboot schedule runs monthly. Can only be set to `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, or `Saturday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#day_in_month DeliveryGroup#day_in_month}
  */
  readonly dayInMonth?: string;
  /**
  * The days of the week on which the reboot schedule runs weekly. Can only be set to `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, or `Saturday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#days_in_week DeliveryGroup#days_in_week}
  */
  readonly daysInWeek?: string[];
  /**
  * The description of the reboot schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#description DeliveryGroup#description}
  */
  readonly description?: string;
  /**
  * The frequency of the reboot schedule. Can only be set to `Daily`, `Weekly`, `Monthly`, or `Once`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#frequency DeliveryGroup#frequency}
  */
  readonly frequency: string;
  /**
  * Repeats every X days/weeks/months. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#frequency_factor DeliveryGroup#frequency_factor}
  */
  readonly frequencyFactor: number;
  /**
  * Whether the reboot schedule ignores machines in the maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#ignore_maintenance_mode DeliveryGroup#ignore_maintenance_mode}
  */
  readonly ignoreMaintenanceMode: boolean | cdktf.IResolvable;
  /**
  * The name of the reboot schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#name DeliveryGroup#name}
  */
  readonly name: string;
  /**
  * Indicates whether the reboot will be a natural reboot, where the machines will be rebooted when they have no sessions. This should set to false for reboot_duration_minutes to work. Once UseNaturalReboot is set to true, RebootDurationMinutes won't have any effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#natural_reboot_schedule DeliveryGroup#natural_reboot_schedule}
  */
  readonly naturalRebootSchedule: boolean | cdktf.IResolvable;
  /**
  * Restart all machines within x minutes. 0 means restarting all machines at the same time. To restart machines after draining sessions, set natural_reboot_schedule to true instead. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#reboot_duration_minutes DeliveryGroup#reboot_duration_minutes}
  */
  readonly rebootDurationMinutes?: number;
  /**
  * The reboot notification for the reboot schedule. 
  * 
  * ~> **Please Note** Not available for natural reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#reboot_notification_to_users DeliveryGroup#reboot_notification_to_users}
  */
  readonly rebootNotificationToUsers?: DeliveryGroupRebootSchedulesRebootNotificationToUsers;
  /**
  * Whether the reboot schedule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#reboot_schedule_enabled DeliveryGroup#reboot_schedule_enabled}
  */
  readonly rebootScheduleEnabled: boolean | cdktf.IResolvable;
  /**
  * Restrict reboot schedule to machines with tag specified in Guid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#restrict_to_tag DeliveryGroup#restrict_to_tag}
  */
  readonly restrictToTag?: string;
  /**
  * The date on which the reboot schedule starts. 
  * 
  * -> **Note** The date format is `YYYY-MM-DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#start_date DeliveryGroup#start_date}
  */
  readonly startDate: string;
  /**
  * The time at which the reboot schedule starts. 
  * 
  * -> **Note** The time format is `HH:MM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#start_time DeliveryGroup#start_time}
  */
  readonly startTime: string;
  /**
  * The week in the month on which the reboot schedule runs monthly. Can only be set to `First`, `Second`, `Third`, `Fourth`, or `Last`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#week_in_month DeliveryGroup#week_in_month}
  */
  readonly weekInMonth?: string;
}

export function deliveryGroupRebootSchedulesToTerraform(struct?: DeliveryGroupRebootSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_in_month: cdktf.stringToTerraform(struct!.dayInMonth),
    days_in_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysInWeek),
    description: cdktf.stringToTerraform(struct!.description),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    frequency_factor: cdktf.numberToTerraform(struct!.frequencyFactor),
    ignore_maintenance_mode: cdktf.booleanToTerraform(struct!.ignoreMaintenanceMode),
    name: cdktf.stringToTerraform(struct!.name),
    natural_reboot_schedule: cdktf.booleanToTerraform(struct!.naturalRebootSchedule),
    reboot_duration_minutes: cdktf.numberToTerraform(struct!.rebootDurationMinutes),
    reboot_notification_to_users: deliveryGroupRebootSchedulesRebootNotificationToUsersToTerraform(struct!.rebootNotificationToUsers),
    reboot_schedule_enabled: cdktf.booleanToTerraform(struct!.rebootScheduleEnabled),
    restrict_to_tag: cdktf.stringToTerraform(struct!.restrictToTag),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    week_in_month: cdktf.stringToTerraform(struct!.weekInMonth),
  }
}


export function deliveryGroupRebootSchedulesToHclTerraform(struct?: DeliveryGroupRebootSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_in_month: {
      value: cdktf.stringToHclTerraform(struct!.dayInMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_in_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysInWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_factor: {
      value: cdktf.numberToHclTerraform(struct!.frequencyFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_maintenance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaintenanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    natural_reboot_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.naturalRebootSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reboot_duration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.rebootDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_notification_to_users: {
      value: deliveryGroupRebootSchedulesRebootNotificationToUsersToHclTerraform(struct!.rebootNotificationToUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "DeliveryGroupRebootSchedulesRebootNotificationToUsers",
    },
    reboot_schedule_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rebootScheduleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_to_tag: {
      value: cdktf.stringToHclTerraform(struct!.restrictToTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_in_month: {
      value: cdktf.stringToHclTerraform(struct!.weekInMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupRebootSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryGroupRebootSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayInMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayInMonth = this._dayInMonth;
    }
    if (this._daysInWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysInWeek = this._daysInWeek;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._frequencyFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyFactor = this._frequencyFactor;
    }
    if (this._ignoreMaintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaintenanceMode = this._ignoreMaintenanceMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._naturalRebootSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalRebootSchedule = this._naturalRebootSchedule;
    }
    if (this._rebootDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDurationMinutes = this._rebootDurationMinutes;
    }
    if (this._rebootNotificationToUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootNotificationToUsers = this._rebootNotificationToUsers?.internalValue;
    }
    if (this._rebootScheduleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootScheduleEnabled = this._rebootScheduleEnabled;
    }
    if (this._restrictToTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictToTag = this._restrictToTag;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._weekInMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekInMonth = this._weekInMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupRebootSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayInMonth = undefined;
      this._daysInWeek = undefined;
      this._description = undefined;
      this._frequency = undefined;
      this._frequencyFactor = undefined;
      this._ignoreMaintenanceMode = undefined;
      this._name = undefined;
      this._naturalRebootSchedule = undefined;
      this._rebootDurationMinutes = undefined;
      this._rebootNotificationToUsers.internalValue = undefined;
      this._rebootScheduleEnabled = undefined;
      this._restrictToTag = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._weekInMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayInMonth = value.dayInMonth;
      this._daysInWeek = value.daysInWeek;
      this._description = value.description;
      this._frequency = value.frequency;
      this._frequencyFactor = value.frequencyFactor;
      this._ignoreMaintenanceMode = value.ignoreMaintenanceMode;
      this._name = value.name;
      this._naturalRebootSchedule = value.naturalRebootSchedule;
      this._rebootDurationMinutes = value.rebootDurationMinutes;
      this._rebootNotificationToUsers.internalValue = value.rebootNotificationToUsers;
      this._rebootScheduleEnabled = value.rebootScheduleEnabled;
      this._restrictToTag = value.restrictToTag;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._weekInMonth = value.weekInMonth;
    }
  }

  // day_in_month - computed: false, optional: true, required: false
  private _dayInMonth?: string; 
  public get dayInMonth() {
    return this.getStringAttribute('day_in_month');
  }
  public set dayInMonth(value: string) {
    this._dayInMonth = value;
  }
  public resetDayInMonth() {
    this._dayInMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInMonthInput() {
    return this._dayInMonth;
  }

  // days_in_week - computed: false, optional: true, required: false
  private _daysInWeek?: string[]; 
  public get daysInWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_in_week'));
  }
  public set daysInWeek(value: string[]) {
    this._daysInWeek = value;
  }
  public resetDaysInWeek() {
    this._daysInWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInWeekInput() {
    return this._daysInWeek;
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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_factor - computed: false, optional: false, required: true
  private _frequencyFactor?: number; 
  public get frequencyFactor() {
    return this.getNumberAttribute('frequency_factor');
  }
  public set frequencyFactor(value: number) {
    this._frequencyFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyFactorInput() {
    return this._frequencyFactor;
  }

  // ignore_maintenance_mode - computed: false, optional: false, required: true
  private _ignoreMaintenanceMode?: boolean | cdktf.IResolvable; 
  public get ignoreMaintenanceMode() {
    return this.getBooleanAttribute('ignore_maintenance_mode');
  }
  public set ignoreMaintenanceMode(value: boolean | cdktf.IResolvable) {
    this._ignoreMaintenanceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaintenanceModeInput() {
    return this._ignoreMaintenanceMode;
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

  // natural_reboot_schedule - computed: false, optional: false, required: true
  private _naturalRebootSchedule?: boolean | cdktf.IResolvable; 
  public get naturalRebootSchedule() {
    return this.getBooleanAttribute('natural_reboot_schedule');
  }
  public set naturalRebootSchedule(value: boolean | cdktf.IResolvable) {
    this._naturalRebootSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalRebootScheduleInput() {
    return this._naturalRebootSchedule;
  }

  // reboot_duration_minutes - computed: false, optional: true, required: false
  private _rebootDurationMinutes?: number; 
  public get rebootDurationMinutes() {
    return this.getNumberAttribute('reboot_duration_minutes');
  }
  public set rebootDurationMinutes(value: number) {
    this._rebootDurationMinutes = value;
  }
  public resetRebootDurationMinutes() {
    this._rebootDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationMinutesInput() {
    return this._rebootDurationMinutes;
  }

  // reboot_notification_to_users - computed: false, optional: true, required: false
  private _rebootNotificationToUsers = new DeliveryGroupRebootSchedulesRebootNotificationToUsersOutputReference(this, "reboot_notification_to_users");
  public get rebootNotificationToUsers() {
    return this._rebootNotificationToUsers;
  }
  public putRebootNotificationToUsers(value: DeliveryGroupRebootSchedulesRebootNotificationToUsers) {
    this._rebootNotificationToUsers.internalValue = value;
  }
  public resetRebootNotificationToUsers() {
    this._rebootNotificationToUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootNotificationToUsersInput() {
    return this._rebootNotificationToUsers.internalValue;
  }

  // reboot_schedule_enabled - computed: false, optional: false, required: true
  private _rebootScheduleEnabled?: boolean | cdktf.IResolvable; 
  public get rebootScheduleEnabled() {
    return this.getBooleanAttribute('reboot_schedule_enabled');
  }
  public set rebootScheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._rebootScheduleEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootScheduleEnabledInput() {
    return this._rebootScheduleEnabled;
  }

  // restrict_to_tag - computed: false, optional: true, required: false
  private _restrictToTag?: string; 
  public get restrictToTag() {
    return this.getStringAttribute('restrict_to_tag');
  }
  public set restrictToTag(value: string) {
    this._restrictToTag = value;
  }
  public resetRestrictToTag() {
    this._restrictToTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToTagInput() {
    return this._restrictToTag;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // week_in_month - computed: false, optional: true, required: false
  private _weekInMonth?: string; 
  public get weekInMonth() {
    return this.getStringAttribute('week_in_month');
  }
  public set weekInMonth(value: string) {
    this._weekInMonth = value;
  }
  public resetWeekInMonth() {
    this._weekInMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInMonthInput() {
    return this._weekInMonth;
  }
}

export class DeliveryGroupRebootSchedulesList extends cdktf.ComplexList {
  public internalValue? : DeliveryGroupRebootSchedules[] | cdktf.IResolvable

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
  public get(index: number): DeliveryGroupRebootSchedulesOutputReference {
    return new DeliveryGroupRebootSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliveryGroupRestrictedAccessUsers {
  /**
  * Users who can use this Delivery Group. 
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#allow_list DeliveryGroup#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Users who cannot use this Delivery Group. A block list is meaningful only when used to block users in the allow list. 
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#block_list DeliveryGroup#block_list}
  */
  readonly blockList?: string[];
}

export function deliveryGroupRestrictedAccessUsersToTerraform(struct?: DeliveryGroupRestrictedAccessUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockList),
  }
}


export function deliveryGroupRestrictedAccessUsersToHclTerraform(struct?: DeliveryGroupRestrictedAccessUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryGroupRestrictedAccessUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeliveryGroupRestrictedAccessUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._blockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockList = this._blockList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryGroupRestrictedAccessUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowList = undefined;
      this._blockList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowList = value.allowList;
      this._blockList = value.blockList;
    }
  }

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // block_list - computed: true, optional: true, required: false
  private _blockList?: string[]; 
  public get blockList() {
    return cdktf.Fn.tolist(this.getListAttribute('block_list'));
  }
  public set blockList(value: string[]) {
    this._blockList = value;
  }
  public resetBlockList() {
    this._blockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListInput() {
    return this._blockList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group citrix_delivery_group}
*/
export class DeliveryGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_delivery_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeliveryGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeliveryGroup to import
  * @param importFromId The id of the existing DeliveryGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeliveryGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_delivery_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/delivery_group citrix_delivery_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeliveryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DeliveryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_delivery_group',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAnonymousAccess = config.allowAnonymousAccess;
    this._appProtection.internalValue = config.appProtection;
    this._assignMachinesToUsers.internalValue = config.assignMachinesToUsers;
    this._associatedMachineCatalogs.internalValue = config.associatedMachineCatalogs;
    this._autoscalePlugins.internalValue = config.autoscalePlugins;
    this._autoscaleSettings.internalValue = config.autoscaleSettings;
    this._colorDepth = config.colorDepth;
    this._customAccessPolicies.internalValue = config.customAccessPolicies;
    this._defaultAccessPolicies.internalValue = config.defaultAccessPolicies;
    this._defaultDesktopIcon = config.defaultDesktopIcon;
    this._deliveryGroupFolderPath = config.deliveryGroupFolderPath;
    this._deliveryType = config.deliveryType;
    this._description = config.description;
    this._desktops.internalValue = config.desktops;
    this._enabled = config.enabled;
    this._forceDelete = config.forceDelete;
    this._inMaintenanceMode = config.inMaintenanceMode;
    this._loadBalancingType = config.loadBalancingType;
    this._makeResourcesAvailableInLhc = config.makeResourcesAvailableInLhc;
    this._metadata.internalValue = config.metadata;
    this._minimumFunctionalLevel = config.minimumFunctionalLevel;
    this._name = config.name;
    this._rebootSchedules.internalValue = config.rebootSchedules;
    this._restrictedAccessUsers.internalValue = config.restrictedAccessUsers;
    this._scopes = config.scopes;
    this._secureIcaRequired = config.secureIcaRequired;
    this._sessionSupport = config.sessionSupport;
    this._sharingKind = config.sharingKind;
    this._storefrontServers = config.storefrontServers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_anonymous_access - computed: false, optional: true, required: false
  private _allowAnonymousAccess?: boolean | cdktf.IResolvable; 
  public get allowAnonymousAccess() {
    return this.getBooleanAttribute('allow_anonymous_access');
  }
  public set allowAnonymousAccess(value: boolean | cdktf.IResolvable) {
    this._allowAnonymousAccess = value;
  }
  public resetAllowAnonymousAccess() {
    this._allowAnonymousAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnonymousAccessInput() {
    return this._allowAnonymousAccess;
  }

  // app_protection - computed: false, optional: true, required: false
  private _appProtection = new DeliveryGroupAppProtectionOutputReference(this, "app_protection");
  public get appProtection() {
    return this._appProtection;
  }
  public putAppProtection(value: DeliveryGroupAppProtection) {
    this._appProtection.internalValue = value;
  }
  public resetAppProtection() {
    this._appProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtectionInput() {
    return this._appProtection.internalValue;
  }

  // assign_machines_to_users - computed: false, optional: true, required: false
  private _assignMachinesToUsers = new DeliveryGroupAssignMachinesToUsersList(this, "assign_machines_to_users", false);
  public get assignMachinesToUsers() {
    return this._assignMachinesToUsers;
  }
  public putAssignMachinesToUsers(value: DeliveryGroupAssignMachinesToUsers[] | cdktf.IResolvable) {
    this._assignMachinesToUsers.internalValue = value;
  }
  public resetAssignMachinesToUsers() {
    this._assignMachinesToUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMachinesToUsersInput() {
    return this._assignMachinesToUsers.internalValue;
  }

  // associated_machine_catalogs - computed: false, optional: true, required: false
  private _associatedMachineCatalogs = new DeliveryGroupAssociatedMachineCatalogsList(this, "associated_machine_catalogs", true);
  public get associatedMachineCatalogs() {
    return this._associatedMachineCatalogs;
  }
  public putAssociatedMachineCatalogs(value: DeliveryGroupAssociatedMachineCatalogs[] | cdktf.IResolvable) {
    this._associatedMachineCatalogs.internalValue = value;
  }
  public resetAssociatedMachineCatalogs() {
    this._associatedMachineCatalogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedMachineCatalogsInput() {
    return this._associatedMachineCatalogs.internalValue;
  }

  // autoscale_plugins - computed: false, optional: true, required: false
  private _autoscalePlugins = new DeliveryGroupAutoscalePluginsList(this, "autoscale_plugins", false);
  public get autoscalePlugins() {
    return this._autoscalePlugins;
  }
  public putAutoscalePlugins(value: DeliveryGroupAutoscalePlugins[] | cdktf.IResolvable) {
    this._autoscalePlugins.internalValue = value;
  }
  public resetAutoscalePlugins() {
    this._autoscalePlugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalePluginsInput() {
    return this._autoscalePlugins.internalValue;
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings = new DeliveryGroupAutoscaleSettingsOutputReference(this, "autoscale_settings");
  public get autoscaleSettings() {
    return this._autoscaleSettings;
  }
  public putAutoscaleSettings(value: DeliveryGroupAutoscaleSettings) {
    this._autoscaleSettings.internalValue = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings.internalValue;
  }

  // built_in_scopes - computed: true, optional: false, required: false
  public get builtInScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('built_in_scopes'));
  }

  // color_depth - computed: true, optional: true, required: false
  private _colorDepth?: string; 
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }
  public set colorDepth(value: string) {
    this._colorDepth = value;
  }
  public resetColorDepth() {
    this._colorDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorDepthInput() {
    return this._colorDepth;
  }

  // custom_access_policies - computed: false, optional: true, required: false
  private _customAccessPolicies = new DeliveryGroupCustomAccessPoliciesList(this, "custom_access_policies", false);
  public get customAccessPolicies() {
    return this._customAccessPolicies;
  }
  public putCustomAccessPolicies(value: DeliveryGroupCustomAccessPolicies[] | cdktf.IResolvable) {
    this._customAccessPolicies.internalValue = value;
  }
  public resetCustomAccessPolicies() {
    this._customAccessPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccessPoliciesInput() {
    return this._customAccessPolicies.internalValue;
  }

  // default_access_policies - computed: false, optional: true, required: false
  private _defaultAccessPolicies = new DeliveryGroupDefaultAccessPoliciesList(this, "default_access_policies", false);
  public get defaultAccessPolicies() {
    return this._defaultAccessPolicies;
  }
  public putDefaultAccessPolicies(value: DeliveryGroupDefaultAccessPolicies[] | cdktf.IResolvable) {
    this._defaultAccessPolicies.internalValue = value;
  }
  public resetDefaultAccessPolicies() {
    this._defaultAccessPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessPoliciesInput() {
    return this._defaultAccessPolicies.internalValue;
  }

  // default_desktop_icon - computed: true, optional: true, required: false
  private _defaultDesktopIcon?: string; 
  public get defaultDesktopIcon() {
    return this.getStringAttribute('default_desktop_icon');
  }
  public set defaultDesktopIcon(value: string) {
    this._defaultDesktopIcon = value;
  }
  public resetDefaultDesktopIcon() {
    this._defaultDesktopIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDesktopIconInput() {
    return this._defaultDesktopIcon;
  }

  // delivery_group_folder_path - computed: false, optional: true, required: false
  private _deliveryGroupFolderPath?: string; 
  public get deliveryGroupFolderPath() {
    return this.getStringAttribute('delivery_group_folder_path');
  }
  public set deliveryGroupFolderPath(value: string) {
    this._deliveryGroupFolderPath = value;
  }
  public resetDeliveryGroupFolderPath() {
    this._deliveryGroupFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupFolderPathInput() {
    return this._deliveryGroupFolderPath;
  }

  // delivery_type - computed: false, optional: true, required: false
  private _deliveryType?: string; 
  public get deliveryType() {
    return this.getStringAttribute('delivery_type');
  }
  public set deliveryType(value: string) {
    this._deliveryType = value;
  }
  public resetDeliveryType() {
    this._deliveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryTypeInput() {
    return this._deliveryType;
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

  // desktops - computed: false, optional: true, required: false
  private _desktops = new DeliveryGroupDesktopsList(this, "desktops", false);
  public get desktops() {
    return this._desktops;
  }
  public putDesktops(value: DeliveryGroupDesktops[] | cdktf.IResolvable) {
    this._desktops.internalValue = value;
  }
  public resetDesktops() {
    this._desktops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopsInput() {
    return this._desktops.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_maintenance_mode - computed: true, optional: true, required: false
  private _inMaintenanceMode?: boolean | cdktf.IResolvable; 
  public get inMaintenanceMode() {
    return this.getBooleanAttribute('in_maintenance_mode');
  }
  public set inMaintenanceMode(value: boolean | cdktf.IResolvable) {
    this._inMaintenanceMode = value;
  }
  public resetInMaintenanceMode() {
    this._inMaintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMaintenanceModeInput() {
    return this._inMaintenanceMode;
  }

  // inherited_scopes - computed: true, optional: false, required: false
  public get inheritedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('inherited_scopes'));
  }

  // load_balancing_type - computed: true, optional: true, required: false
  private _loadBalancingType?: string; 
  public get loadBalancingType() {
    return this.getStringAttribute('load_balancing_type');
  }
  public set loadBalancingType(value: string) {
    this._loadBalancingType = value;
  }
  public resetLoadBalancingType() {
    this._loadBalancingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingTypeInput() {
    return this._loadBalancingType;
  }

  // make_resources_available_in_lhc - computed: false, optional: true, required: false
  private _makeResourcesAvailableInLhc?: boolean | cdktf.IResolvable; 
  public get makeResourcesAvailableInLhc() {
    return this.getBooleanAttribute('make_resources_available_in_lhc');
  }
  public set makeResourcesAvailableInLhc(value: boolean | cdktf.IResolvable) {
    this._makeResourcesAvailableInLhc = value;
  }
  public resetMakeResourcesAvailableInLhc() {
    this._makeResourcesAvailableInLhc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeResourcesAvailableInLhcInput() {
    return this._makeResourcesAvailableInLhc;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DeliveryGroupMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DeliveryGroupMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // minimum_functional_level - computed: true, optional: true, required: false
  private _minimumFunctionalLevel?: string; 
  public get minimumFunctionalLevel() {
    return this.getStringAttribute('minimum_functional_level');
  }
  public set minimumFunctionalLevel(value: string) {
    this._minimumFunctionalLevel = value;
  }
  public resetMinimumFunctionalLevel() {
    this._minimumFunctionalLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFunctionalLevelInput() {
    return this._minimumFunctionalLevel;
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

  // reboot_schedules - computed: false, optional: true, required: false
  private _rebootSchedules = new DeliveryGroupRebootSchedulesList(this, "reboot_schedules", false);
  public get rebootSchedules() {
    return this._rebootSchedules;
  }
  public putRebootSchedules(value: DeliveryGroupRebootSchedules[] | cdktf.IResolvable) {
    this._rebootSchedules.internalValue = value;
  }
  public resetRebootSchedules() {
    this._rebootSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootSchedulesInput() {
    return this._rebootSchedules.internalValue;
  }

  // restricted_access_users - computed: false, optional: true, required: false
  private _restrictedAccessUsers = new DeliveryGroupRestrictedAccessUsersOutputReference(this, "restricted_access_users");
  public get restrictedAccessUsers() {
    return this._restrictedAccessUsers;
  }
  public putRestrictedAccessUsers(value: DeliveryGroupRestrictedAccessUsers) {
    this._restrictedAccessUsers.internalValue = value;
  }
  public resetRestrictedAccessUsers() {
    this._restrictedAccessUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAccessUsersInput() {
    return this._restrictedAccessUsers.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secure_ica_required - computed: true, optional: true, required: false
  private _secureIcaRequired?: boolean | cdktf.IResolvable; 
  public get secureIcaRequired() {
    return this.getBooleanAttribute('secure_ica_required');
  }
  public set secureIcaRequired(value: boolean | cdktf.IResolvable) {
    this._secureIcaRequired = value;
  }
  public resetSecureIcaRequired() {
    this._secureIcaRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureIcaRequiredInput() {
    return this._secureIcaRequired;
  }

  // session_support - computed: false, optional: true, required: false
  private _sessionSupport?: string; 
  public get sessionSupport() {
    return this.getStringAttribute('session_support');
  }
  public set sessionSupport(value: string) {
    this._sessionSupport = value;
  }
  public resetSessionSupport() {
    this._sessionSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSupportInput() {
    return this._sessionSupport;
  }

  // sharing_kind - computed: false, optional: true, required: false
  private _sharingKind?: string; 
  public get sharingKind() {
    return this.getStringAttribute('sharing_kind');
  }
  public set sharingKind(value: string) {
    this._sharingKind = value;
  }
  public resetSharingKind() {
    this._sharingKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingKindInput() {
    return this._sharingKind;
  }

  // storefront_servers - computed: false, optional: true, required: false
  private _storefrontServers?: string[]; 
  public get storefrontServers() {
    return cdktf.Fn.tolist(this.getListAttribute('storefront_servers'));
  }
  public set storefrontServers(value: string[]) {
    this._storefrontServers = value;
  }
  public resetStorefrontServers() {
    this._storefrontServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storefrontServersInput() {
    return this._storefrontServers;
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

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // total_machines - computed: true, optional: false, required: false
  public get totalMachines() {
    return this.getNumberAttribute('total_machines');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_anonymous_access: cdktf.booleanToTerraform(this._allowAnonymousAccess),
      app_protection: deliveryGroupAppProtectionToTerraform(this._appProtection.internalValue),
      assign_machines_to_users: cdktf.listMapper(deliveryGroupAssignMachinesToUsersToTerraform, false)(this._assignMachinesToUsers.internalValue),
      associated_machine_catalogs: cdktf.listMapper(deliveryGroupAssociatedMachineCatalogsToTerraform, false)(this._associatedMachineCatalogs.internalValue),
      autoscale_plugins: cdktf.listMapper(deliveryGroupAutoscalePluginsToTerraform, false)(this._autoscalePlugins.internalValue),
      autoscale_settings: deliveryGroupAutoscaleSettingsToTerraform(this._autoscaleSettings.internalValue),
      color_depth: cdktf.stringToTerraform(this._colorDepth),
      custom_access_policies: cdktf.listMapper(deliveryGroupCustomAccessPoliciesToTerraform, false)(this._customAccessPolicies.internalValue),
      default_access_policies: cdktf.listMapper(deliveryGroupDefaultAccessPoliciesToTerraform, false)(this._defaultAccessPolicies.internalValue),
      default_desktop_icon: cdktf.stringToTerraform(this._defaultDesktopIcon),
      delivery_group_folder_path: cdktf.stringToTerraform(this._deliveryGroupFolderPath),
      delivery_type: cdktf.stringToTerraform(this._deliveryType),
      description: cdktf.stringToTerraform(this._description),
      desktops: cdktf.listMapper(deliveryGroupDesktopsToTerraform, false)(this._desktops.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      in_maintenance_mode: cdktf.booleanToTerraform(this._inMaintenanceMode),
      load_balancing_type: cdktf.stringToTerraform(this._loadBalancingType),
      make_resources_available_in_lhc: cdktf.booleanToTerraform(this._makeResourcesAvailableInLhc),
      metadata: cdktf.listMapper(deliveryGroupMetadataToTerraform, false)(this._metadata.internalValue),
      minimum_functional_level: cdktf.stringToTerraform(this._minimumFunctionalLevel),
      name: cdktf.stringToTerraform(this._name),
      reboot_schedules: cdktf.listMapper(deliveryGroupRebootSchedulesToTerraform, false)(this._rebootSchedules.internalValue),
      restricted_access_users: deliveryGroupRestrictedAccessUsersToTerraform(this._restrictedAccessUsers.internalValue),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secure_ica_required: cdktf.booleanToTerraform(this._secureIcaRequired),
      session_support: cdktf.stringToTerraform(this._sessionSupport),
      sharing_kind: cdktf.stringToTerraform(this._sharingKind),
      storefront_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storefrontServers),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_anonymous_access: {
        value: cdktf.booleanToHclTerraform(this._allowAnonymousAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_protection: {
        value: deliveryGroupAppProtectionToHclTerraform(this._appProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeliveryGroupAppProtection",
      },
      assign_machines_to_users: {
        value: cdktf.listMapperHcl(deliveryGroupAssignMachinesToUsersToHclTerraform, false)(this._assignMachinesToUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupAssignMachinesToUsersList",
      },
      associated_machine_catalogs: {
        value: cdktf.listMapperHcl(deliveryGroupAssociatedMachineCatalogsToHclTerraform, false)(this._associatedMachineCatalogs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeliveryGroupAssociatedMachineCatalogsList",
      },
      autoscale_plugins: {
        value: cdktf.listMapperHcl(deliveryGroupAutoscalePluginsToHclTerraform, false)(this._autoscalePlugins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupAutoscalePluginsList",
      },
      autoscale_settings: {
        value: deliveryGroupAutoscaleSettingsToHclTerraform(this._autoscaleSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeliveryGroupAutoscaleSettings",
      },
      color_depth: {
        value: cdktf.stringToHclTerraform(this._colorDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_access_policies: {
        value: cdktf.listMapperHcl(deliveryGroupCustomAccessPoliciesToHclTerraform, false)(this._customAccessPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupCustomAccessPoliciesList",
      },
      default_access_policies: {
        value: cdktf.listMapperHcl(deliveryGroupDefaultAccessPoliciesToHclTerraform, false)(this._defaultAccessPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupDefaultAccessPoliciesList",
      },
      default_desktop_icon: {
        value: cdktf.stringToHclTerraform(this._defaultDesktopIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_group_folder_path: {
        value: cdktf.stringToHclTerraform(this._deliveryGroupFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_type: {
        value: cdktf.stringToHclTerraform(this._deliveryType),
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
      desktops: {
        value: cdktf.listMapperHcl(deliveryGroupDesktopsToHclTerraform, false)(this._desktops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupDesktopsList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      in_maintenance_mode: {
        value: cdktf.booleanToHclTerraform(this._inMaintenanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancing_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      make_resources_available_in_lhc: {
        value: cdktf.booleanToHclTerraform(this._makeResourcesAvailableInLhc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.listMapperHcl(deliveryGroupMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupMetadataList",
      },
      minimum_functional_level: {
        value: cdktf.stringToHclTerraform(this._minimumFunctionalLevel),
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
      reboot_schedules: {
        value: cdktf.listMapperHcl(deliveryGroupRebootSchedulesToHclTerraform, false)(this._rebootSchedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryGroupRebootSchedulesList",
      },
      restricted_access_users: {
        value: deliveryGroupRestrictedAccessUsersToHclTerraform(this._restrictedAccessUsers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeliveryGroupRestrictedAccessUsers",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_ica_required: {
        value: cdktf.booleanToHclTerraform(this._secureIcaRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_support: {
        value: cdktf.stringToHclTerraform(this._sessionSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_kind: {
        value: cdktf.stringToHclTerraform(this._sharingKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storefront_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storefrontServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
