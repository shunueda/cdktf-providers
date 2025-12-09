// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#data_process_region StreamWorkspace#data_process_region}
  */
  readonly dataProcessRegion: StreamWorkspaceDataProcessRegion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#project_id StreamWorkspace#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#stream_config StreamWorkspace#stream_config}
  */
  readonly streamConfig?: StreamWorkspaceStreamConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#workspace_name StreamWorkspace#workspace_name}
  */
  readonly workspaceName: string;
}
export interface StreamWorkspaceDataProcessRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#cloud_provider StreamWorkspace#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#region StreamWorkspace#region}
  */
  readonly region: string;
}

export function streamWorkspaceDataProcessRegionToTerraform(struct?: StreamWorkspaceDataProcessRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function streamWorkspaceDataProcessRegionToHclTerraform(struct?: StreamWorkspaceDataProcessRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamWorkspaceDataProcessRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamWorkspaceDataProcessRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamWorkspaceDataProcessRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._region = value.region;
    }
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface StreamWorkspaceStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#max_tier_size StreamWorkspace#max_tier_size}
  */
  readonly maxTierSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#tier StreamWorkspace#tier}
  */
  readonly tier?: string;
}

export function streamWorkspaceStreamConfigToTerraform(struct?: StreamWorkspaceStreamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tier_size: cdktf.stringToTerraform(struct!.maxTierSize),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function streamWorkspaceStreamConfigToHclTerraform(struct?: StreamWorkspaceStreamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tier_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTierSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamWorkspaceStreamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamWorkspaceStreamConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTierSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTierSize = this._maxTierSize;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamWorkspaceStreamConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTierSize = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTierSize = value.maxTierSize;
      this._tier = value.tier;
    }
  }

  // max_tier_size - computed: true, optional: true, required: false
  private _maxTierSize?: string; 
  public get maxTierSize() {
    return this.getStringAttribute('max_tier_size');
  }
  public set maxTierSize(value: string) {
    this._maxTierSize = value;
  }
  public resetMaxTierSize() {
    this._maxTierSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTierSizeInput() {
    return this._maxTierSize;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace mongodbatlas_stream_workspace}
*/
export class StreamWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamWorkspace to import
  * @param importFromId The id of the existing StreamWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/stream_workspace mongodbatlas_stream_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: StreamWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_workspace',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataProcessRegion.internalValue = config.dataProcessRegion;
    this._projectId = config.projectId;
    this._streamConfig.internalValue = config.streamConfig;
    this._workspaceName = config.workspaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_process_region - computed: false, optional: false, required: true
  private _dataProcessRegion = new StreamWorkspaceDataProcessRegionOutputReference(this, "data_process_region");
  public get dataProcessRegion() {
    return this._dataProcessRegion;
  }
  public putDataProcessRegion(value: StreamWorkspaceDataProcessRegion) {
    this._dataProcessRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcessRegionInput() {
    return this._dataProcessRegion.internalValue;
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // stream_config - computed: true, optional: true, required: false
  private _streamConfig = new StreamWorkspaceStreamConfigOutputReference(this, "stream_config");
  public get streamConfig() {
    return this._streamConfig;
  }
  public putStreamConfig(value: StreamWorkspaceStreamConfig) {
    this._streamConfig.internalValue = value;
  }
  public resetStreamConfig() {
    this._streamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigInput() {
    return this._streamConfig.internalValue;
  }

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_process_region: streamWorkspaceDataProcessRegionToTerraform(this._dataProcessRegion.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      stream_config: streamWorkspaceStreamConfigToTerraform(this._streamConfig.internalValue),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_process_region: {
        value: streamWorkspaceDataProcessRegionToHclTerraform(this._dataProcessRegion.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamWorkspaceDataProcessRegion",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_config: {
        value: streamWorkspaceStreamConfigToHclTerraform(this._streamConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamWorkspaceStreamConfig",
      },
      workspace_name: {
        value: cdktf.stringToHclTerraform(this._workspaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
