// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JmsFleetAgentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#agent_polling_interval_in_minutes JmsFleetAgentConfiguration#agent_polling_interval_in_minutes}
  */
  readonly agentPollingIntervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#fleet_id JmsFleetAgentConfiguration#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#id JmsFleetAgentConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#is_capturing_ip_address_and_fqdn_enabled JmsFleetAgentConfiguration#is_capturing_ip_address_and_fqdn_enabled}
  */
  readonly isCapturingIpAddressAndFqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#is_collecting_managed_instance_metrics_enabled JmsFleetAgentConfiguration#is_collecting_managed_instance_metrics_enabled}
  */
  readonly isCollectingManagedInstanceMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#is_collecting_usernames_enabled JmsFleetAgentConfiguration#is_collecting_usernames_enabled}
  */
  readonly isCollectingUsernamesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#is_libraries_scan_enabled JmsFleetAgentConfiguration#is_libraries_scan_enabled}
  */
  readonly isLibrariesScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#java_usage_tracker_processing_frequency_in_minutes JmsFleetAgentConfiguration#java_usage_tracker_processing_frequency_in_minutes}
  */
  readonly javaUsageTrackerProcessingFrequencyInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#jre_scan_frequency_in_minutes JmsFleetAgentConfiguration#jre_scan_frequency_in_minutes}
  */
  readonly jreScanFrequencyInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#work_request_validity_period_in_days JmsFleetAgentConfiguration#work_request_validity_period_in_days}
  */
  readonly workRequestValidityPeriodInDays?: number;
  /**
  * linux_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#linux_configuration JmsFleetAgentConfiguration#linux_configuration}
  */
  readonly linuxConfiguration?: JmsFleetAgentConfigurationLinuxConfiguration;
  /**
  * mac_os_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#mac_os_configuration JmsFleetAgentConfiguration#mac_os_configuration}
  */
  readonly macOsConfiguration?: JmsFleetAgentConfigurationMacOsConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#timeouts JmsFleetAgentConfiguration#timeouts}
  */
  readonly timeouts?: JmsFleetAgentConfigurationTimeouts;
  /**
  * windows_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#windows_configuration JmsFleetAgentConfiguration#windows_configuration}
  */
  readonly windowsConfiguration?: JmsFleetAgentConfigurationWindowsConfiguration;
}
export interface JmsFleetAgentConfigurationLinuxConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#exclude_paths JmsFleetAgentConfiguration#exclude_paths}
  */
  readonly excludePaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#include_paths JmsFleetAgentConfiguration#include_paths}
  */
  readonly includePaths: string[];
}

export function jmsFleetAgentConfigurationLinuxConfigurationToTerraform(struct?: JmsFleetAgentConfigurationLinuxConfigurationOutputReference | JmsFleetAgentConfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePaths),
    include_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePaths),
  }
}


export function jmsFleetAgentConfigurationLinuxConfigurationToHclTerraform(struct?: JmsFleetAgentConfigurationLinuxConfigurationOutputReference | JmsFleetAgentConfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAgentConfigurationLinuxConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAgentConfigurationLinuxConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePaths = this._excludePaths;
    }
    if (this._includePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePaths = this._includePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAgentConfigurationLinuxConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePaths = undefined;
      this._includePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePaths = value.excludePaths;
      this._includePaths = value.includePaths;
    }
  }

  // exclude_paths - computed: false, optional: false, required: true
  private _excludePaths?: string[]; 
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }
  public set excludePaths(value: string[]) {
    this._excludePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths;
  }

  // include_paths - computed: false, optional: false, required: true
  private _includePaths?: string[]; 
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
  public set includePaths(value: string[]) {
    this._includePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathsInput() {
    return this._includePaths;
  }
}
export interface JmsFleetAgentConfigurationMacOsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#exclude_paths JmsFleetAgentConfiguration#exclude_paths}
  */
  readonly excludePaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#include_paths JmsFleetAgentConfiguration#include_paths}
  */
  readonly includePaths: string[];
}

export function jmsFleetAgentConfigurationMacOsConfigurationToTerraform(struct?: JmsFleetAgentConfigurationMacOsConfigurationOutputReference | JmsFleetAgentConfigurationMacOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePaths),
    include_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePaths),
  }
}


export function jmsFleetAgentConfigurationMacOsConfigurationToHclTerraform(struct?: JmsFleetAgentConfigurationMacOsConfigurationOutputReference | JmsFleetAgentConfigurationMacOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAgentConfigurationMacOsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAgentConfigurationMacOsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePaths = this._excludePaths;
    }
    if (this._includePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePaths = this._includePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAgentConfigurationMacOsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePaths = undefined;
      this._includePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePaths = value.excludePaths;
      this._includePaths = value.includePaths;
    }
  }

  // exclude_paths - computed: false, optional: false, required: true
  private _excludePaths?: string[]; 
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }
  public set excludePaths(value: string[]) {
    this._excludePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths;
  }

  // include_paths - computed: false, optional: false, required: true
  private _includePaths?: string[]; 
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
  public set includePaths(value: string[]) {
    this._includePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathsInput() {
    return this._includePaths;
  }
}
export interface JmsFleetAgentConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#create JmsFleetAgentConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#delete JmsFleetAgentConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#update JmsFleetAgentConfiguration#update}
  */
  readonly update?: string;
}

export function jmsFleetAgentConfigurationTimeoutsToTerraform(struct?: JmsFleetAgentConfigurationTimeouts | cdktf.IResolvable): any {
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


export function jmsFleetAgentConfigurationTimeoutsToHclTerraform(struct?: JmsFleetAgentConfigurationTimeouts | cdktf.IResolvable): any {
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

export class JmsFleetAgentConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JmsFleetAgentConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JmsFleetAgentConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface JmsFleetAgentConfigurationWindowsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#exclude_paths JmsFleetAgentConfiguration#exclude_paths}
  */
  readonly excludePaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#include_paths JmsFleetAgentConfiguration#include_paths}
  */
  readonly includePaths: string[];
}

export function jmsFleetAgentConfigurationWindowsConfigurationToTerraform(struct?: JmsFleetAgentConfigurationWindowsConfigurationOutputReference | JmsFleetAgentConfigurationWindowsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePaths),
    include_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePaths),
  }
}


export function jmsFleetAgentConfigurationWindowsConfigurationToHclTerraform(struct?: JmsFleetAgentConfigurationWindowsConfigurationOutputReference | JmsFleetAgentConfigurationWindowsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAgentConfigurationWindowsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAgentConfigurationWindowsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePaths = this._excludePaths;
    }
    if (this._includePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePaths = this._includePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAgentConfigurationWindowsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePaths = undefined;
      this._includePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePaths = value.excludePaths;
      this._includePaths = value.includePaths;
    }
  }

  // exclude_paths - computed: false, optional: false, required: true
  private _excludePaths?: string[]; 
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }
  public set excludePaths(value: string[]) {
    this._excludePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths;
  }

  // include_paths - computed: false, optional: false, required: true
  private _includePaths?: string[]; 
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
  public set includePaths(value: string[]) {
    this._includePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathsInput() {
    return this._includePaths;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration oci_jms_fleet_agent_configuration}
*/
export class JmsFleetAgentConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_agent_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JmsFleetAgentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JmsFleetAgentConfiguration to import
  * @param importFromId The id of the existing JmsFleetAgentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JmsFleetAgentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_agent_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_agent_configuration oci_jms_fleet_agent_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JmsFleetAgentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: JmsFleetAgentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_agent_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPollingIntervalInMinutes = config.agentPollingIntervalInMinutes;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._isCapturingIpAddressAndFqdnEnabled = config.isCapturingIpAddressAndFqdnEnabled;
    this._isCollectingManagedInstanceMetricsEnabled = config.isCollectingManagedInstanceMetricsEnabled;
    this._isCollectingUsernamesEnabled = config.isCollectingUsernamesEnabled;
    this._isLibrariesScanEnabled = config.isLibrariesScanEnabled;
    this._javaUsageTrackerProcessingFrequencyInMinutes = config.javaUsageTrackerProcessingFrequencyInMinutes;
    this._jreScanFrequencyInMinutes = config.jreScanFrequencyInMinutes;
    this._workRequestValidityPeriodInDays = config.workRequestValidityPeriodInDays;
    this._linuxConfiguration.internalValue = config.linuxConfiguration;
    this._macOsConfiguration.internalValue = config.macOsConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._windowsConfiguration.internalValue = config.windowsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_polling_interval_in_minutes - computed: true, optional: true, required: false
  private _agentPollingIntervalInMinutes?: number; 
  public get agentPollingIntervalInMinutes() {
    return this.getNumberAttribute('agent_polling_interval_in_minutes');
  }
  public set agentPollingIntervalInMinutes(value: number) {
    this._agentPollingIntervalInMinutes = value;
  }
  public resetAgentPollingIntervalInMinutes() {
    this._agentPollingIntervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPollingIntervalInMinutesInput() {
    return this._agentPollingIntervalInMinutes;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // is_capturing_ip_address_and_fqdn_enabled - computed: true, optional: true, required: false
  private _isCapturingIpAddressAndFqdnEnabled?: boolean | cdktf.IResolvable; 
  public get isCapturingIpAddressAndFqdnEnabled() {
    return this.getBooleanAttribute('is_capturing_ip_address_and_fqdn_enabled');
  }
  public set isCapturingIpAddressAndFqdnEnabled(value: boolean | cdktf.IResolvable) {
    this._isCapturingIpAddressAndFqdnEnabled = value;
  }
  public resetIsCapturingIpAddressAndFqdnEnabled() {
    this._isCapturingIpAddressAndFqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCapturingIpAddressAndFqdnEnabledInput() {
    return this._isCapturingIpAddressAndFqdnEnabled;
  }

  // is_collecting_managed_instance_metrics_enabled - computed: true, optional: true, required: false
  private _isCollectingManagedInstanceMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get isCollectingManagedInstanceMetricsEnabled() {
    return this.getBooleanAttribute('is_collecting_managed_instance_metrics_enabled');
  }
  public set isCollectingManagedInstanceMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._isCollectingManagedInstanceMetricsEnabled = value;
  }
  public resetIsCollectingManagedInstanceMetricsEnabled() {
    this._isCollectingManagedInstanceMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCollectingManagedInstanceMetricsEnabledInput() {
    return this._isCollectingManagedInstanceMetricsEnabled;
  }

  // is_collecting_usernames_enabled - computed: true, optional: true, required: false
  private _isCollectingUsernamesEnabled?: boolean | cdktf.IResolvable; 
  public get isCollectingUsernamesEnabled() {
    return this.getBooleanAttribute('is_collecting_usernames_enabled');
  }
  public set isCollectingUsernamesEnabled(value: boolean | cdktf.IResolvable) {
    this._isCollectingUsernamesEnabled = value;
  }
  public resetIsCollectingUsernamesEnabled() {
    this._isCollectingUsernamesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCollectingUsernamesEnabledInput() {
    return this._isCollectingUsernamesEnabled;
  }

  // is_libraries_scan_enabled - computed: true, optional: true, required: false
  private _isLibrariesScanEnabled?: boolean | cdktf.IResolvable; 
  public get isLibrariesScanEnabled() {
    return this.getBooleanAttribute('is_libraries_scan_enabled');
  }
  public set isLibrariesScanEnabled(value: boolean | cdktf.IResolvable) {
    this._isLibrariesScanEnabled = value;
  }
  public resetIsLibrariesScanEnabled() {
    this._isLibrariesScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLibrariesScanEnabledInput() {
    return this._isLibrariesScanEnabled;
  }

  // java_usage_tracker_processing_frequency_in_minutes - computed: true, optional: true, required: false
  private _javaUsageTrackerProcessingFrequencyInMinutes?: number; 
  public get javaUsageTrackerProcessingFrequencyInMinutes() {
    return this.getNumberAttribute('java_usage_tracker_processing_frequency_in_minutes');
  }
  public set javaUsageTrackerProcessingFrequencyInMinutes(value: number) {
    this._javaUsageTrackerProcessingFrequencyInMinutes = value;
  }
  public resetJavaUsageTrackerProcessingFrequencyInMinutes() {
    this._javaUsageTrackerProcessingFrequencyInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaUsageTrackerProcessingFrequencyInMinutesInput() {
    return this._javaUsageTrackerProcessingFrequencyInMinutes;
  }

  // jre_scan_frequency_in_minutes - computed: true, optional: true, required: false
  private _jreScanFrequencyInMinutes?: number; 
  public get jreScanFrequencyInMinutes() {
    return this.getNumberAttribute('jre_scan_frequency_in_minutes');
  }
  public set jreScanFrequencyInMinutes(value: number) {
    this._jreScanFrequencyInMinutes = value;
  }
  public resetJreScanFrequencyInMinutes() {
    this._jreScanFrequencyInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreScanFrequencyInMinutesInput() {
    return this._jreScanFrequencyInMinutes;
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // work_request_validity_period_in_days - computed: true, optional: true, required: false
  private _workRequestValidityPeriodInDays?: number; 
  public get workRequestValidityPeriodInDays() {
    return this.getNumberAttribute('work_request_validity_period_in_days');
  }
  public set workRequestValidityPeriodInDays(value: number) {
    this._workRequestValidityPeriodInDays = value;
  }
  public resetWorkRequestValidityPeriodInDays() {
    this._workRequestValidityPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestValidityPeriodInDaysInput() {
    return this._workRequestValidityPeriodInDays;
  }

  // linux_configuration - computed: false, optional: true, required: false
  private _linuxConfiguration = new JmsFleetAgentConfigurationLinuxConfigurationOutputReference(this, "linux_configuration");
  public get linuxConfiguration() {
    return this._linuxConfiguration;
  }
  public putLinuxConfiguration(value: JmsFleetAgentConfigurationLinuxConfiguration) {
    this._linuxConfiguration.internalValue = value;
  }
  public resetLinuxConfiguration() {
    this._linuxConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxConfigurationInput() {
    return this._linuxConfiguration.internalValue;
  }

  // mac_os_configuration - computed: false, optional: true, required: false
  private _macOsConfiguration = new JmsFleetAgentConfigurationMacOsConfigurationOutputReference(this, "mac_os_configuration");
  public get macOsConfiguration() {
    return this._macOsConfiguration;
  }
  public putMacOsConfiguration(value: JmsFleetAgentConfigurationMacOsConfiguration) {
    this._macOsConfiguration.internalValue = value;
  }
  public resetMacOsConfiguration() {
    this._macOsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macOsConfigurationInput() {
    return this._macOsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JmsFleetAgentConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JmsFleetAgentConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // windows_configuration - computed: false, optional: true, required: false
  private _windowsConfiguration = new JmsFleetAgentConfigurationWindowsConfigurationOutputReference(this, "windows_configuration");
  public get windowsConfiguration() {
    return this._windowsConfiguration;
  }
  public putWindowsConfiguration(value: JmsFleetAgentConfigurationWindowsConfiguration) {
    this._windowsConfiguration.internalValue = value;
  }
  public resetWindowsConfiguration() {
    this._windowsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsConfigurationInput() {
    return this._windowsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_polling_interval_in_minutes: cdktf.numberToTerraform(this._agentPollingIntervalInMinutes),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      is_capturing_ip_address_and_fqdn_enabled: cdktf.booleanToTerraform(this._isCapturingIpAddressAndFqdnEnabled),
      is_collecting_managed_instance_metrics_enabled: cdktf.booleanToTerraform(this._isCollectingManagedInstanceMetricsEnabled),
      is_collecting_usernames_enabled: cdktf.booleanToTerraform(this._isCollectingUsernamesEnabled),
      is_libraries_scan_enabled: cdktf.booleanToTerraform(this._isLibrariesScanEnabled),
      java_usage_tracker_processing_frequency_in_minutes: cdktf.numberToTerraform(this._javaUsageTrackerProcessingFrequencyInMinutes),
      jre_scan_frequency_in_minutes: cdktf.numberToTerraform(this._jreScanFrequencyInMinutes),
      work_request_validity_period_in_days: cdktf.numberToTerraform(this._workRequestValidityPeriodInDays),
      linux_configuration: jmsFleetAgentConfigurationLinuxConfigurationToTerraform(this._linuxConfiguration.internalValue),
      mac_os_configuration: jmsFleetAgentConfigurationMacOsConfigurationToTerraform(this._macOsConfiguration.internalValue),
      timeouts: jmsFleetAgentConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      windows_configuration: jmsFleetAgentConfigurationWindowsConfigurationToTerraform(this._windowsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_polling_interval_in_minutes: {
        value: cdktf.numberToHclTerraform(this._agentPollingIntervalInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_capturing_ip_address_and_fqdn_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCapturingIpAddressAndFqdnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_collecting_managed_instance_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCollectingManagedInstanceMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_collecting_usernames_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCollectingUsernamesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_libraries_scan_enabled: {
        value: cdktf.booleanToHclTerraform(this._isLibrariesScanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      java_usage_tracker_processing_frequency_in_minutes: {
        value: cdktf.numberToHclTerraform(this._javaUsageTrackerProcessingFrequencyInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jre_scan_frequency_in_minutes: {
        value: cdktf.numberToHclTerraform(this._jreScanFrequencyInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      work_request_validity_period_in_days: {
        value: cdktf.numberToHclTerraform(this._workRequestValidityPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      linux_configuration: {
        value: jmsFleetAgentConfigurationLinuxConfigurationToHclTerraform(this._linuxConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAgentConfigurationLinuxConfigurationList",
      },
      mac_os_configuration: {
        value: jmsFleetAgentConfigurationMacOsConfigurationToHclTerraform(this._macOsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAgentConfigurationMacOsConfigurationList",
      },
      timeouts: {
        value: jmsFleetAgentConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JmsFleetAgentConfigurationTimeouts",
      },
      windows_configuration: {
        value: jmsFleetAgentConfigurationWindowsConfigurationToHclTerraform(this._windowsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAgentConfigurationWindowsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
