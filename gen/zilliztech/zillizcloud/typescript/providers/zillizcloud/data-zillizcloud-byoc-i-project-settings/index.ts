// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZillizcloudByocIProjectSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the data plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings#data_plane_id DataZillizcloudByocIProjectSettings#data_plane_id}
  */
  readonly dataPlaneId: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings#project_id DataZillizcloudByocIProjectSettings#project_id}
  */
  readonly projectId: string;
}
export interface DataZillizcloudByocIProjectSettingsNodeQuotasCore {
}

export function dataZillizcloudByocIProjectSettingsNodeQuotasCoreToTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsNodeQuotasCoreToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsNodeQuotasCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsNodeQuotasCore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsNodeQuotasCore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface DataZillizcloudByocIProjectSettingsNodeQuotasFundamental {
}

export function dataZillizcloudByocIProjectSettingsNodeQuotasFundamentalToTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasFundamental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsNodeQuotasFundamentalToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasFundamental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsNodeQuotasFundamentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsNodeQuotasFundamental | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsNodeQuotasFundamental | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface DataZillizcloudByocIProjectSettingsNodeQuotasIndex {
}

export function dataZillizcloudByocIProjectSettingsNodeQuotasIndexToTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsNodeQuotasIndexToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsNodeQuotasIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsNodeQuotasIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsNodeQuotasIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface DataZillizcloudByocIProjectSettingsNodeQuotasSearch {
}

export function dataZillizcloudByocIProjectSettingsNodeQuotasSearchToTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsNodeQuotasSearchToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotasSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsNodeQuotasSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsNodeQuotasSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsNodeQuotasSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface DataZillizcloudByocIProjectSettingsNodeQuotas {
}

export function dataZillizcloudByocIProjectSettingsNodeQuotasToTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsNodeQuotasToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsNodeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsNodeQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsNodeQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsNodeQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core - computed: true, optional: false, required: false
  private _core = new DataZillizcloudByocIProjectSettingsNodeQuotasCoreOutputReference(this, "core");
  public get core() {
    return this._core;
  }

  // fundamental - computed: true, optional: false, required: false
  private _fundamental = new DataZillizcloudByocIProjectSettingsNodeQuotasFundamentalOutputReference(this, "fundamental");
  public get fundamental() {
    return this._fundamental;
  }

  // index - computed: true, optional: false, required: false
  private _index = new DataZillizcloudByocIProjectSettingsNodeQuotasIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataZillizcloudByocIProjectSettingsNodeQuotasSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
}
export interface DataZillizcloudByocIProjectSettingsOpConfig {
}

export function dataZillizcloudByocIProjectSettingsOpConfigToTerraform(struct?: DataZillizcloudByocIProjectSettingsOpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudByocIProjectSettingsOpConfigToHclTerraform(struct?: DataZillizcloudByocIProjectSettingsOpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudByocIProjectSettingsOpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZillizcloudByocIProjectSettingsOpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudByocIProjectSettingsOpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_image_url - computed: true, optional: false, required: false
  public get agentImageUrl() {
    return this.getStringAttribute('agent_image_url');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings zillizcloud_byoc_i_project_settings}
*/
export class DataZillizcloudByocIProjectSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_byoc_i_project_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZillizcloudByocIProjectSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZillizcloudByocIProjectSettings to import
  * @param importFromId The id of the existing DataZillizcloudByocIProjectSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZillizcloudByocIProjectSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_byoc_i_project_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/byoc_i_project_settings zillizcloud_byoc_i_project_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZillizcloudByocIProjectSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZillizcloudByocIProjectSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_byoc_i_project_settings',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataPlaneId = config.dataPlaneId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // data_plane_id - computed: false, optional: false, required: true
  private _dataPlaneId?: string; 
  public get dataPlaneId() {
    return this.getStringAttribute('data_plane_id');
  }
  public set dataPlaneId(value: string) {
    this._dataPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneIdInput() {
    return this._dataPlaneId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_quotas - computed: true, optional: false, required: false
  private _nodeQuotas = new DataZillizcloudByocIProjectSettingsNodeQuotasOutputReference(this, "node_quotas");
  public get nodeQuotas() {
    return this._nodeQuotas;
  }

  // op_config - computed: true, optional: false, required: false
  private _opConfig = new DataZillizcloudByocIProjectSettingsOpConfigOutputReference(this, "op_config");
  public get opConfig() {
    return this._opConfig;
  }

  // private_link_enabled - computed: true, optional: false, required: false
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
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

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_plane_id: cdktf.stringToTerraform(this._dataPlaneId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_plane_id: {
        value: cdktf.stringToHclTerraform(this._dataPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
