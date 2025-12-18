// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_archival_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceStorageArchivalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_archival_config#namespace DataOciLogAnalyticsNamespaceStorageArchivalConfig#namespace}
  */
  readonly namespace: string;
}
export interface DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration {
}

export function dataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToTerraform(struct?: DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationToHclTerraform(struct?: DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_storage_duration - computed: true, optional: false, required: false
  public get activeStorageDuration() {
    return this.getStringAttribute('active_storage_duration');
  }

  // archival_storage_duration - computed: true, optional: false, required: false
  public get archivalStorageDuration() {
    return this.getStringAttribute('archival_storage_duration');
  }
}

export class DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference {
    return new DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_archival_config oci_log_analytics_namespace_storage_archival_config}
*/
export class DataOciLogAnalyticsNamespaceStorageArchivalConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_storage_archival_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageArchivalConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageArchivalConfig to import
  * @param importFromId The id of the existing DataOciLogAnalyticsNamespaceStorageArchivalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_archival_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageArchivalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_storage_archival_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_archival_config oci_log_analytics_namespace_storage_archival_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceStorageArchivalConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageArchivalConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_storage_archival_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archiving_configuration - computed: true, optional: false, required: false
  private _archivingConfiguration = new DataOciLogAnalyticsNamespaceStorageArchivalConfigArchivingConfigurationList(this, "archiving_configuration", false);
  public get archivingConfiguration() {
    return this._archivingConfiguration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
