// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#cluster_id DedicatedNodeGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The display name of the node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#display_name DedicatedNodeGroup#display_name}
  */
  readonly displayName: string;
  /**
  * The count of the nodes in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#node_count DedicatedNodeGroup#node_count}
  */
  readonly nodeCount: number;
  /**
  * Settings for public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#public_endpoint_setting DedicatedNodeGroup#public_endpoint_setting}
  */
  readonly publicEndpointSetting?: DedicatedNodeGroupPublicEndpointSetting;
  /**
  * Settings for TiProxy nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#tiproxy_setting DedicatedNodeGroup#tiproxy_setting}
  */
  readonly tiproxySetting?: DedicatedNodeGroupTiproxySetting;
}
export interface DedicatedNodeGroupEndpoints {
}

export function dedicatedNodeGroupEndpointsToTerraform(struct?: DedicatedNodeGroupEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedNodeGroupEndpointsToHclTerraform(struct?: DedicatedNodeGroupEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedNodeGroupEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedNodeGroupEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedNodeGroupEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DedicatedNodeGroupEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DedicatedNodeGroupEndpointsOutputReference {
    return new DedicatedNodeGroupEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct {
}

export function dedicatedNodeGroupPublicEndpointSettingIpAccessListStructToTerraform(struct?: DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedNodeGroupPublicEndpointSettingIpAccessListStructToHclTerraform(struct?: DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedNodeGroupPublicEndpointSettingIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // cidr_notation - computed: true, optional: false, required: false
  public get cidrNotation() {
    return this.getStringAttribute('cidr_notation');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DedicatedNodeGroupPublicEndpointSettingIpAccessListStructList extends cdktf.ComplexList {
  public internalValue? : DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): DedicatedNodeGroupPublicEndpointSettingIpAccessListStructOutputReference {
    return new DedicatedNodeGroupPublicEndpointSettingIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedNodeGroupPublicEndpointSetting {
  /**
  * Whether public endpoint is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#enabled DedicatedNodeGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP access list for the public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#ip_access_list DedicatedNodeGroup#ip_access_list}
  */
  readonly ipAccessList?: DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable;
}

export function dedicatedNodeGroupPublicEndpointSettingToTerraform(struct?: DedicatedNodeGroupPublicEndpointSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_access_list: cdktf.listMapper(dedicatedNodeGroupPublicEndpointSettingIpAccessListStructToTerraform, false)(struct!.ipAccessList),
  }
}


export function dedicatedNodeGroupPublicEndpointSettingToHclTerraform(struct?: DedicatedNodeGroupPublicEndpointSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_access_list: {
      value: cdktf.listMapperHcl(dedicatedNodeGroupPublicEndpointSettingIpAccessListStructToHclTerraform, false)(struct!.ipAccessList),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedNodeGroupPublicEndpointSettingIpAccessListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedNodeGroupPublicEndpointSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedNodeGroupPublicEndpointSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipAccessList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccessList = this._ipAccessList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedNodeGroupPublicEndpointSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipAccessList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipAccessList.internalValue = value.ipAccessList;
    }
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

  // ip_access_list - computed: true, optional: true, required: false
  private _ipAccessList = new DedicatedNodeGroupPublicEndpointSettingIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
  public putIpAccessList(value: DedicatedNodeGroupPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable) {
    this._ipAccessList.internalValue = value;
  }
  public resetIpAccessList() {
    this._ipAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessListInput() {
    return this._ipAccessList.internalValue;
  }
}
export interface DedicatedNodeGroupTiproxySetting {
  /**
  * The number of TiProxy nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#node_count DedicatedNodeGroup#node_count}
  */
  readonly nodeCount: number;
  /**
  * The key of the node spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#node_spec_key DedicatedNodeGroup#node_spec_key}
  */
  readonly nodeSpecKey: string;
}

export function dedicatedNodeGroupTiproxySettingToTerraform(struct?: DedicatedNodeGroupTiproxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_spec_key: cdktf.stringToTerraform(struct!.nodeSpecKey),
  }
}


export function dedicatedNodeGroupTiproxySettingToHclTerraform(struct?: DedicatedNodeGroupTiproxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_spec_key: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedNodeGroupTiproxySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedNodeGroupTiproxySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSpecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecKey = this._nodeSpecKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedNodeGroupTiproxySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSpecKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSpecKey = value.nodeSpecKey;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: false, optional: false, required: true
  private _nodeSpecKey?: string; 
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }
  public set nodeSpecKey(value: string) {
    this._nodeSpecKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecKeyInput() {
    return this._nodeSpecKey;
  }

  // node_spec_version - computed: true, optional: false, required: false
  public get nodeSpecVersion() {
    return this.getStringAttribute('node_spec_version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group tidbcloud_dedicated_node_group}
*/
export class DedicatedNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedNodeGroup to import
  * @param importFromId The id of the existing DedicatedNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_node_group tidbcloud_dedicated_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_node_group',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._displayName = config.displayName;
    this._nodeCount = config.nodeCount;
    this._publicEndpointSetting.internalValue = config.publicEndpointSetting;
    this._tiproxySetting.internalValue = config.tiproxySetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DedicatedNodeGroupEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // is_default_group - computed: true, optional: false, required: false
  public get isDefaultGroup() {
    return this.getBooleanAttribute('is_default_group');
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: true, optional: false, required: false
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }

  // public_endpoint_setting - computed: true, optional: true, required: false
  private _publicEndpointSetting = new DedicatedNodeGroupPublicEndpointSettingOutputReference(this, "public_endpoint_setting");
  public get publicEndpointSetting() {
    return this._publicEndpointSetting;
  }
  public putPublicEndpointSetting(value: DedicatedNodeGroupPublicEndpointSetting) {
    this._publicEndpointSetting.internalValue = value;
  }
  public resetPublicEndpointSetting() {
    this._publicEndpointSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointSettingInput() {
    return this._publicEndpointSetting.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tiproxy_setting - computed: false, optional: true, required: false
  private _tiproxySetting = new DedicatedNodeGroupTiproxySettingOutputReference(this, "tiproxy_setting");
  public get tiproxySetting() {
    return this._tiproxySetting;
  }
  public putTiproxySetting(value: DedicatedNodeGroupTiproxySetting) {
    this._tiproxySetting.internalValue = value;
  }
  public resetTiproxySetting() {
    this._tiproxySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiproxySettingInput() {
    return this._tiproxySetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      display_name: cdktf.stringToTerraform(this._displayName),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      public_endpoint_setting: dedicatedNodeGroupPublicEndpointSettingToTerraform(this._publicEndpointSetting.internalValue),
      tiproxy_setting: dedicatedNodeGroupTiproxySettingToTerraform(this._tiproxySetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_endpoint_setting: {
        value: dedicatedNodeGroupPublicEndpointSettingToHclTerraform(this._publicEndpointSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedNodeGroupPublicEndpointSetting",
      },
      tiproxy_setting: {
        value: dedicatedNodeGroupTiproxySettingToHclTerraform(this._tiproxySetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedNodeGroupTiproxySetting",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
