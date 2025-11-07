// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application category path allows users to organize and view applications under specific categories in Citrix Workspace App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#application_category_path Application#application_category_path}
  */
  readonly applicationCategoryPath?: string;
  /**
  * The application folder path in which the application should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#application_folder_path Application#application_folder_path}
  */
  readonly applicationFolderPath?: string;
  /**
  * The application group IDs to which the application should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#application_groups Application#application_groups}
  */
  readonly applicationGroups?: string[];
  /**
  * The browser name for the application. When omitted, the application name will be used as the browser name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#browser_name Application#browser_name}
  */
  readonly browserName?: string;
  /**
  * Specifies the CPU priority level for the application. Valid values are: `Low`, `BelowNormal`, `Normal`, `AboveNormal`, and `High`. Default is `Normal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#cpu_priority_level Application#cpu_priority_level}
  */
  readonly cpuPriorityLevel?: string;
  /**
  * The delivery group IDs to which the application should be added.
  * 
  * -> **Note** The order of delivery group in the `delivery_groups` list determines the priority of the delivery group. Alternatively, you can use the `delivery_groups_priority` attribute to selectively set the priority of delivery groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#delivery_groups Application#delivery_groups}
  */
  readonly deliveryGroups?: string[];
  /**
  * Set of delivery groups with their corresponding priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#delivery_groups_priority Application#delivery_groups_priority}
  */
  readonly deliveryGroupsPriority?: ApplicationDeliveryGroupsPriority[] | cdktf.IResolvable;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the application is enabled or disabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the home zone for the application. This can be set using the zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#home_zone Application#home_zone}
  */
  readonly homeZone?: string;
  /**
  * Defines the home zone mode for the application. Allowed values are: Prefer, Ignore, Only, User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#home_zone_mode Application#home_zone_mode}
  */
  readonly homeZoneMode?: string;
  /**
  * The Id of the icon to be associated with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#icon Application#icon}
  */
  readonly icon?: string;
  /**
  * The install application properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#installed_app_properties Application#installed_app_properties}
  */
  readonly installedAppProperties: ApplicationInstalledAppProperties;
  /**
  * Specifies if the use of the application should be limited to only one instance per user. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#limit_to_one_instance_per_user Application#limit_to_one_instance_per_user}
  */
  readonly limitToOneInstancePerUser?: boolean | cdktf.IResolvable;
  /**
  * By default, the application is visible to all users within a delivery group. However, you can restrict its visibility to only certain users by specifying them in the `limit_visibility_to_users` list.
  * 
  * -> **Note** Users must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#limit_visibility_to_users Application#limit_visibility_to_users}
  */
  readonly limitVisibilityToUsers?: string[];
  /**
  * Control the use of this application by limiting the number of instances running at the same time. If set to 0, it allows unlimited use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#max_total_instances Application#max_total_instances}
  */
  readonly maxTotalInstances?: number;
  /**
  * Metadata for the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#metadata Application#metadata}
  */
  readonly metadata?: ApplicationMetadata[] | cdktf.IResolvable;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * A display name for the application that is shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#published_name Application#published_name}
  */
  readonly publishedName: string;
  /**
  * Indicates whether a shortcut to the application is added to the desktop. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#shortcut_added_to_desktop Application#shortcut_added_to_desktop}
  */
  readonly shortcutAddedToDesktop?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether a shortcut to the application is added to the start menu. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#shortcut_added_to_start_menu Application#shortcut_added_to_start_menu}
  */
  readonly shortcutAddedToStartMenu?: boolean | cdktf.IResolvable;
  /**
  * A set of identifiers of tags to associate with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#tags Application#tags}
  */
  readonly tags?: string[];
  /**
  * Specifies whether or not this application is visible to users. Note that it’s possible for an application to be disabled and still visible. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#visible Application#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
}
export interface ApplicationDeliveryGroupsPriority {
  /**
  * The Id of the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The priority of the delivery group. `0` means the highest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#priority Application#priority}
  */
  readonly priority: number;
}

export function applicationDeliveryGroupsPriorityToTerraform(struct?: ApplicationDeliveryGroupsPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function applicationDeliveryGroupsPriorityToHclTerraform(struct?: ApplicationDeliveryGroupsPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class ApplicationDeliveryGroupsPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationDeliveryGroupsPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDeliveryGroupsPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
    }
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

export class ApplicationDeliveryGroupsPriorityList extends cdktf.ComplexList {
  public internalValue? : ApplicationDeliveryGroupsPriority[] | cdktf.IResolvable

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
  public get(index: number): ApplicationDeliveryGroupsPriorityOutputReference {
    return new ApplicationDeliveryGroupsPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationInstalledAppProperties {
  /**
  * The command-line arguments to use when launching the executable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#command_line_arguments Application#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * The path of the executable file to launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#command_line_executable Application#command_line_executable}
  */
  readonly commandLineExecutable: string;
  /**
  * The working directory which the executable is launched from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#working_directory Application#working_directory}
  */
  readonly workingDirectory?: string;
}

export function applicationInstalledAppPropertiesToTerraform(struct?: ApplicationInstalledAppProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    command_line_executable: cdktf.stringToTerraform(struct!.commandLineExecutable),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}


export function applicationInstalledAppPropertiesToHclTerraform(struct?: ApplicationInstalledAppProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_line_executable: {
      value: cdktf.stringToHclTerraform(struct!.commandLineExecutable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationInstalledAppPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationInstalledAppProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._commandLineExecutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineExecutable = this._commandLineExecutable;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationInstalledAppProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandLineArguments = undefined;
      this._commandLineExecutable = undefined;
      this._workingDirectory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandLineArguments = value.commandLineArguments;
      this._commandLineExecutable = value.commandLineExecutable;
      this._workingDirectory = value.workingDirectory;
    }
  }

  // command_line_arguments - computed: false, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // command_line_executable - computed: false, optional: false, required: true
  private _commandLineExecutable?: string; 
  public get commandLineExecutable() {
    return this.getStringAttribute('command_line_executable');
  }
  public set commandLineExecutable(value: string) {
    this._commandLineExecutable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineExecutableInput() {
    return this._commandLineExecutable;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}
export interface ApplicationMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationMetadataToTerraform(struct?: ApplicationMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationMetadataToHclTerraform(struct?: ApplicationMetadata | cdktf.IResolvable): any {
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

export class ApplicationMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationMetadata | cdktf.IResolvable | undefined) {
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

export class ApplicationMetadataList extends cdktf.ComplexList {
  public internalValue? : ApplicationMetadata[] | cdktf.IResolvable

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
  public get(index: number): ApplicationMetadataOutputReference {
    return new ApplicationMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application citrix_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application citrix_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_application',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationCategoryPath = config.applicationCategoryPath;
    this._applicationFolderPath = config.applicationFolderPath;
    this._applicationGroups = config.applicationGroups;
    this._browserName = config.browserName;
    this._cpuPriorityLevel = config.cpuPriorityLevel;
    this._deliveryGroups = config.deliveryGroups;
    this._deliveryGroupsPriority.internalValue = config.deliveryGroupsPriority;
    this._description = config.description;
    this._enabled = config.enabled;
    this._homeZone = config.homeZone;
    this._homeZoneMode = config.homeZoneMode;
    this._icon = config.icon;
    this._installedAppProperties.internalValue = config.installedAppProperties;
    this._limitToOneInstancePerUser = config.limitToOneInstancePerUser;
    this._limitVisibilityToUsers = config.limitVisibilityToUsers;
    this._maxTotalInstances = config.maxTotalInstances;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._publishedName = config.publishedName;
    this._shortcutAddedToDesktop = config.shortcutAddedToDesktop;
    this._shortcutAddedToStartMenu = config.shortcutAddedToStartMenu;
    this._tags = config.tags;
    this._visible = config.visible;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_category_path - computed: true, optional: true, required: false
  private _applicationCategoryPath?: string; 
  public get applicationCategoryPath() {
    return this.getStringAttribute('application_category_path');
  }
  public set applicationCategoryPath(value: string) {
    this._applicationCategoryPath = value;
  }
  public resetApplicationCategoryPath() {
    this._applicationCategoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCategoryPathInput() {
    return this._applicationCategoryPath;
  }

  // application_folder_path - computed: false, optional: true, required: false
  private _applicationFolderPath?: string; 
  public get applicationFolderPath() {
    return this.getStringAttribute('application_folder_path');
  }
  public set applicationFolderPath(value: string) {
    this._applicationFolderPath = value;
  }
  public resetApplicationFolderPath() {
    this._applicationFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFolderPathInput() {
    return this._applicationFolderPath;
  }

  // application_groups - computed: true, optional: true, required: false
  private _applicationGroups?: string[]; 
  public get applicationGroups() {
    return this.getListAttribute('application_groups');
  }
  public set applicationGroups(value: string[]) {
    this._applicationGroups = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups;
  }

  // browser_name - computed: true, optional: true, required: false
  private _browserName?: string; 
  public get browserName() {
    return this.getStringAttribute('browser_name');
  }
  public set browserName(value: string) {
    this._browserName = value;
  }
  public resetBrowserName() {
    this._browserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserNameInput() {
    return this._browserName;
  }

  // cpu_priority_level - computed: true, optional: true, required: false
  private _cpuPriorityLevel?: string; 
  public get cpuPriorityLevel() {
    return this.getStringAttribute('cpu_priority_level');
  }
  public set cpuPriorityLevel(value: string) {
    this._cpuPriorityLevel = value;
  }
  public resetCpuPriorityLevel() {
    this._cpuPriorityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPriorityLevelInput() {
    return this._cpuPriorityLevel;
  }

  // delivery_groups - computed: false, optional: true, required: false
  private _deliveryGroups?: string[]; 
  public get deliveryGroups() {
    return this.getListAttribute('delivery_groups');
  }
  public set deliveryGroups(value: string[]) {
    this._deliveryGroups = value;
  }
  public resetDeliveryGroups() {
    this._deliveryGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupsInput() {
    return this._deliveryGroups;
  }

  // delivery_groups_priority - computed: false, optional: true, required: false
  private _deliveryGroupsPriority = new ApplicationDeliveryGroupsPriorityList(this, "delivery_groups_priority", true);
  public get deliveryGroupsPriority() {
    return this._deliveryGroupsPriority;
  }
  public putDeliveryGroupsPriority(value: ApplicationDeliveryGroupsPriority[] | cdktf.IResolvable) {
    this._deliveryGroupsPriority.internalValue = value;
  }
  public resetDeliveryGroupsPriority() {
    this._deliveryGroupsPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupsPriorityInput() {
    return this._deliveryGroupsPriority.internalValue;
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

  // home_zone - computed: false, optional: true, required: false
  private _homeZone?: string; 
  public get homeZone() {
    return this.getStringAttribute('home_zone');
  }
  public set homeZone(value: string) {
    this._homeZone = value;
  }
  public resetHomeZone() {
    this._homeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeZoneInput() {
    return this._homeZone;
  }

  // home_zone_mode - computed: true, optional: true, required: false
  private _homeZoneMode?: string; 
  public get homeZoneMode() {
    return this.getStringAttribute('home_zone_mode');
  }
  public set homeZoneMode(value: string) {
    this._homeZoneMode = value;
  }
  public resetHomeZoneMode() {
    this._homeZoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeZoneModeInput() {
    return this._homeZoneMode;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_app_properties - computed: false, optional: false, required: true
  private _installedAppProperties = new ApplicationInstalledAppPropertiesOutputReference(this, "installed_app_properties");
  public get installedAppProperties() {
    return this._installedAppProperties;
  }
  public putInstalledAppProperties(value: ApplicationInstalledAppProperties) {
    this._installedAppProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installedAppPropertiesInput() {
    return this._installedAppProperties.internalValue;
  }

  // limit_to_one_instance_per_user - computed: true, optional: true, required: false
  private _limitToOneInstancePerUser?: boolean | cdktf.IResolvable; 
  public get limitToOneInstancePerUser() {
    return this.getBooleanAttribute('limit_to_one_instance_per_user');
  }
  public set limitToOneInstancePerUser(value: boolean | cdktf.IResolvable) {
    this._limitToOneInstancePerUser = value;
  }
  public resetLimitToOneInstancePerUser() {
    this._limitToOneInstancePerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitToOneInstancePerUserInput() {
    return this._limitToOneInstancePerUser;
  }

  // limit_visibility_to_users - computed: false, optional: true, required: false
  private _limitVisibilityToUsers?: string[]; 
  public get limitVisibilityToUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('limit_visibility_to_users'));
  }
  public set limitVisibilityToUsers(value: string[]) {
    this._limitVisibilityToUsers = value;
  }
  public resetLimitVisibilityToUsers() {
    this._limitVisibilityToUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVisibilityToUsersInput() {
    return this._limitVisibilityToUsers;
  }

  // max_total_instances - computed: true, optional: true, required: false
  private _maxTotalInstances?: number; 
  public get maxTotalInstances() {
    return this.getNumberAttribute('max_total_instances');
  }
  public set maxTotalInstances(value: number) {
    this._maxTotalInstances = value;
  }
  public resetMaxTotalInstances() {
    this._maxTotalInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalInstancesInput() {
    return this._maxTotalInstances;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // shortcut_added_to_desktop - computed: true, optional: true, required: false
  private _shortcutAddedToDesktop?: boolean | cdktf.IResolvable; 
  public get shortcutAddedToDesktop() {
    return this.getBooleanAttribute('shortcut_added_to_desktop');
  }
  public set shortcutAddedToDesktop(value: boolean | cdktf.IResolvable) {
    this._shortcutAddedToDesktop = value;
  }
  public resetShortcutAddedToDesktop() {
    this._shortcutAddedToDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutAddedToDesktopInput() {
    return this._shortcutAddedToDesktop;
  }

  // shortcut_added_to_start_menu - computed: true, optional: true, required: false
  private _shortcutAddedToStartMenu?: boolean | cdktf.IResolvable; 
  public get shortcutAddedToStartMenu() {
    return this.getBooleanAttribute('shortcut_added_to_start_menu');
  }
  public set shortcutAddedToStartMenu(value: boolean | cdktf.IResolvable) {
    this._shortcutAddedToStartMenu = value;
  }
  public resetShortcutAddedToStartMenu() {
    this._shortcutAddedToStartMenu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutAddedToStartMenuInput() {
    return this._shortcutAddedToStartMenu;
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

  // visible - computed: true, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_category_path: cdktf.stringToTerraform(this._applicationCategoryPath),
      application_folder_path: cdktf.stringToTerraform(this._applicationFolderPath),
      application_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationGroups),
      browser_name: cdktf.stringToTerraform(this._browserName),
      cpu_priority_level: cdktf.stringToTerraform(this._cpuPriorityLevel),
      delivery_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deliveryGroups),
      delivery_groups_priority: cdktf.listMapper(applicationDeliveryGroupsPriorityToTerraform, false)(this._deliveryGroupsPriority.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      home_zone: cdktf.stringToTerraform(this._homeZone),
      home_zone_mode: cdktf.stringToTerraform(this._homeZoneMode),
      icon: cdktf.stringToTerraform(this._icon),
      installed_app_properties: applicationInstalledAppPropertiesToTerraform(this._installedAppProperties.internalValue),
      limit_to_one_instance_per_user: cdktf.booleanToTerraform(this._limitToOneInstancePerUser),
      limit_visibility_to_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitVisibilityToUsers),
      max_total_instances: cdktf.numberToTerraform(this._maxTotalInstances),
      metadata: cdktf.listMapper(applicationMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      published_name: cdktf.stringToTerraform(this._publishedName),
      shortcut_added_to_desktop: cdktf.booleanToTerraform(this._shortcutAddedToDesktop),
      shortcut_added_to_start_menu: cdktf.booleanToTerraform(this._shortcutAddedToStartMenu),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      visible: cdktf.booleanToTerraform(this._visible),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_category_path: {
        value: cdktf.stringToHclTerraform(this._applicationCategoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_folder_path: {
        value: cdktf.stringToHclTerraform(this._applicationFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      browser_name: {
        value: cdktf.stringToHclTerraform(this._browserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_priority_level: {
        value: cdktf.stringToHclTerraform(this._cpuPriorityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deliveryGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      delivery_groups_priority: {
        value: cdktf.listMapperHcl(applicationDeliveryGroupsPriorityToHclTerraform, false)(this._deliveryGroupsPriority.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationDeliveryGroupsPriorityList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home_zone: {
        value: cdktf.stringToHclTerraform(this._homeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_zone_mode: {
        value: cdktf.stringToHclTerraform(this._homeZoneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installed_app_properties: {
        value: applicationInstalledAppPropertiesToHclTerraform(this._installedAppProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationInstalledAppProperties",
      },
      limit_to_one_instance_per_user: {
        value: cdktf.booleanToHclTerraform(this._limitToOneInstancePerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_visibility_to_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitVisibilityToUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_total_instances: {
        value: cdktf.numberToHclTerraform(this._maxTotalInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.listMapperHcl(applicationMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_name: {
        value: cdktf.stringToHclTerraform(this._publishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortcut_added_to_desktop: {
        value: cdktf.booleanToHclTerraform(this._shortcutAddedToDesktop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shortcut_added_to_start_menu: {
        value: cdktf.booleanToHclTerraform(this._shortcutAddedToStartMenu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
