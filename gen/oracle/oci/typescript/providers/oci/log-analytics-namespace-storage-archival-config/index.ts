// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceStorageArchivalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#id LogAnalyticsNamespaceStorageArchivalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#namespace LogAnalyticsNamespaceStorageArchivalConfig#namespace}
  */
  readonly namespace: string;
  /**
  * archiving_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#archiving_configuration LogAnalyticsNamespaceStorageArchivalConfig#archiving_configuration}
  */
  readonly archivingConfiguration: LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#timeouts LogAnalyticsNamespaceStorageArchivalConfig#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceStorageArchivalConfigTimeouts;
}
export interface LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#active_storage_duration LogAnalyticsNamespaceStorageArchivalConfig#active_storage_duration}
  */
  readonly activeStorageDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#archival_storage_duration LogAnalyticsNamespaceStorageArchivalConfig#archival_storage_duration}
  */
  readonly archivalStorageDuration?: string;
}

export function logAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToTerraform(struct?: LogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference | LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_storage_duration: cdktf.stringToTerraform(struct!.activeStorageDuration),
    archival_storage_duration: cdktf.stringToTerraform(struct!.archivalStorageDuration),
  }
}


export function logAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToHclTerraform(struct?: LogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference | LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_storage_duration: {
      value: cdktf.stringToHclTerraform(struct!.activeStorageDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archival_storage_duration: {
      value: cdktf.stringToHclTerraform(struct!.archivalStorageDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeStorageDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeStorageDuration = this._activeStorageDuration;
    }
    if (this._archivalStorageDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivalStorageDuration = this._archivalStorageDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeStorageDuration = undefined;
      this._archivalStorageDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeStorageDuration = value.activeStorageDuration;
      this._archivalStorageDuration = value.archivalStorageDuration;
    }
  }

  // active_storage_duration - computed: true, optional: true, required: false
  private _activeStorageDuration?: string; 
  public get activeStorageDuration() {
    return this.getStringAttribute('active_storage_duration');
  }
  public set activeStorageDuration(value: string) {
    this._activeStorageDuration = value;
  }
  public resetActiveStorageDuration() {
    this._activeStorageDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStorageDurationInput() {
    return this._activeStorageDuration;
  }

  // archival_storage_duration - computed: true, optional: true, required: false
  private _archivalStorageDuration?: string; 
  public get archivalStorageDuration() {
    return this.getStringAttribute('archival_storage_duration');
  }
  public set archivalStorageDuration(value: string) {
    this._archivalStorageDuration = value;
  }
  public resetArchivalStorageDuration() {
    this._archivalStorageDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalStorageDurationInput() {
    return this._archivalStorageDuration;
  }
}
export interface LogAnalyticsNamespaceStorageArchivalConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#create LogAnalyticsNamespaceStorageArchivalConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#delete LogAnalyticsNamespaceStorageArchivalConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#update LogAnalyticsNamespaceStorageArchivalConfig#update}
  */
  readonly update?: string;
}

export function logAnalyticsNamespaceStorageArchivalConfigTimeoutsToTerraform(struct?: LogAnalyticsNamespaceStorageArchivalConfigTimeouts | cdktf.IResolvable): any {
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


export function logAnalyticsNamespaceStorageArchivalConfigTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceStorageArchivalConfigTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsNamespaceStorageArchivalConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceStorageArchivalConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsNamespaceStorageArchivalConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config oci_log_analytics_namespace_storage_archival_config}
*/
export class LogAnalyticsNamespaceStorageArchivalConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_storage_archival_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceStorageArchivalConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceStorageArchivalConfig to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceStorageArchivalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceStorageArchivalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_storage_archival_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/log_analytics_namespace_storage_archival_config oci_log_analytics_namespace_storage_archival_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceStorageArchivalConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceStorageArchivalConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_storage_archival_config',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._archivingConfiguration.internalValue = config.archivingConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_archiving_enabled - computed: true, optional: false, required: false
  public get isArchivingEnabled() {
    return this.getBooleanAttribute('is_archiving_enabled');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // archiving_configuration - computed: false, optional: false, required: true
  private _archivingConfiguration = new LogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference(this, "archiving_configuration");
  public get archivingConfiguration() {
    return this._archivingConfiguration;
  }
  public putArchivingConfiguration(value: LogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration) {
    this._archivingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archivingConfigurationInput() {
    return this._archivingConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceStorageArchivalConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceStorageArchivalConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      archiving_configuration: logAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToTerraform(this._archivingConfiguration.internalValue),
      timeouts: logAnalyticsNamespaceStorageArchivalConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archiving_configuration: {
        value: logAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToHclTerraform(this._archivingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationList",
      },
      timeouts: {
        value: logAnalyticsNamespaceStorageArchivalConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceStorageArchivalConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
