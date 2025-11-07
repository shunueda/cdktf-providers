// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigSecureCloudIngestionAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#cloud_provider DataSysdigSecureCloudIngestionAssets#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#cloud_provider_id DataSysdigSecureCloudIngestionAssets#cloud_provider_id}
  */
  readonly cloudProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#component_type DataSysdigSecureCloudIngestionAssets#component_type}
  */
  readonly componentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#id DataSysdigSecureCloudIngestionAssets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#timeouts DataSysdigSecureCloudIngestionAssets#timeouts}
  */
  readonly timeouts?: DataSysdigSecureCloudIngestionAssetsTimeouts;
}
export interface DataSysdigSecureCloudIngestionAssetsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#read DataSysdigSecureCloudIngestionAssets#read}
  */
  readonly read?: string;
}

export function dataSysdigSecureCloudIngestionAssetsTimeoutsToTerraform(struct?: DataSysdigSecureCloudIngestionAssetsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataSysdigSecureCloudIngestionAssetsTimeoutsToHclTerraform(struct?: DataSysdigSecureCloudIngestionAssetsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigSecureCloudIngestionAssetsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSysdigSecureCloudIngestionAssetsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureCloudIngestionAssetsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets sysdig_secure_cloud_ingestion_assets}
*/
export class DataSysdigSecureCloudIngestionAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_cloud_ingestion_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigSecureCloudIngestionAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigSecureCloudIngestionAssets to import
  * @param importFromId The id of the existing DataSysdigSecureCloudIngestionAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigSecureCloudIngestionAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_cloud_ingestion_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/data-sources/secure_cloud_ingestion_assets sysdig_secure_cloud_ingestion_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigSecureCloudIngestionAssetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSysdigSecureCloudIngestionAssetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_cloud_ingestion_assets',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._cloudProviderId = config.cloudProviderId;
    this._componentType = config.componentType;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: true, optional: false, required: false
  private _aws = new cdktf.StringMap(this, "aws");
  public get aws() {
    return this._aws;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cloud_provider_id - computed: false, optional: true, required: false
  private _cloudProviderId?: string; 
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: string) {
    this._cloudProviderId = value;
  }
  public resetCloudProviderId() {
    this._cloudProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // gcp_metadata - computed: true, optional: false, required: false
  private _gcpMetadata = new cdktf.StringMap(this, "gcp_metadata");
  public get gcpMetadata() {
    return this._gcpMetadata;
  }

  // gcp_routing_key - computed: true, optional: false, required: false
  public get gcpRoutingKey() {
    return this.getStringAttribute('gcp_routing_key');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSysdigSecureCloudIngestionAssetsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSysdigSecureCloudIngestionAssetsTimeouts) {
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
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cloud_provider_id: cdktf.stringToTerraform(this._cloudProviderId),
      component_type: cdktf.stringToTerraform(this._componentType),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataSysdigSecureCloudIngestionAssetsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_id: {
        value: cdktf.stringToHclTerraform(this._cloudProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
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
      timeouts: {
        value: dataSysdigSecureCloudIngestionAssetsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSysdigSecureCloudIngestionAssetsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
